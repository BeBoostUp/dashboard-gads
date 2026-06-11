import http from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

loadDotEnv();

const googleAdsVersion = process.env.GOOGLE_ADS_API_VERSION || "v22";
const perAccountLimit = Number(process.env.GOOGLE_ADS_PER_ACCOUNT_LIMIT || 50);
const refreshIntervalMinutes = Number(process.env.GOOGLE_ADS_REFRESH_INTERVAL_MINUTES || 360);
const autoPrime = process.env.GOOGLE_ADS_AUTO_PRIME === "true";
const snapshotCache = new Map();

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

const requiredEnv = [
  "GOOGLE_ADS_DEVELOPER_TOKEN",
  "GOOGLE_ADS_CLIENT_ID",
  "GOOGLE_ADS_CLIENT_SECRET",
  "GOOGLE_ADS_REFRESH_TOKEN",
  "GOOGLE_ADS_LOGIN_CUSTOMER_ID",
  "GOOGLE_ADS_TARGET_MCC_ID"
];

if (isDirectRun()) {
  const server = http.createServer(async (request, response) => {
    await handleRequest(request, response);
  });

  server.listen(port, host, () => {
    console.log(`Google Ads Command Center: http://localhost:${port}`);
    scheduleSnapshotRefresh();
  });
}

export async function handleApiRequest(request, response) {
  await handleRequest(request, response, { apiOnly: true });
}

async function handleRequest(request, response, options = {}) {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);

  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url);
      return;
    }

    if (options.apiOnly) {
      sendJson(response, 404, { error: "NOT_FOUND" });
      return;
    }

    await serveStatic(response, url);
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      error: "SERVER_ERROR",
      message: error.message || "Error interno"
    });
  }
}

function isDirectRun() {
  return process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
}

function loadDotEnv() {
  const envPath = join(root, ".env");
  if (!existsSync(envPath)) return;

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/i);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key]) continue;
    process.env[key] = rawValue.replace(/^["']|["']$/g, "");
  }
}

async function handleApi(request, response, url) {
  if (request.method !== "GET") {
    sendJson(response, 405, { error: "METHOD_NOT_ALLOWED" });
    return;
  }

  if (url.pathname === "/api/google-ads/status") {
    sendJson(response, 200, getGoogleAdsStatus());
    return;
  }

  if (url.pathname === "/api/google-ads/access") {
    assertConfigured();
    const resourceNames = await listAccessibleCustomers();
    sendJson(response, 200, { resourceNames });
    return;
  }

  if (url.pathname === "/api/google-ads/hierarchy") {
    assertConfigured();
    const hierarchy = await getAccountHierarchy(getEnvId("GOOGLE_ADS_TARGET_MCC_ID"));
    sendJson(response, 200, { hierarchy });
    return;
  }

  if (url.pathname === "/api/google-ads/snapshot") {
    assertConfigured();
    const days = normalizeDays(url.searchParams.get("days"));
    const force = url.searchParams.get("force") === "1";
    const snapshot = await getCachedDashboardSnapshot(days, force);
    sendJson(response, 200, snapshot);
    return;
  }

  sendJson(response, 404, { error: "NOT_FOUND" });
}

function scheduleSnapshotRefresh() {
  if (!getGoogleAdsStatus().configured || !refreshIntervalMinutes) return;

  if (autoPrime) {
    refreshSnapshot(30).catch((error) => {
      console.error(`No se pudo preparar snapshot inicial: ${error.message}`);
    });
  }

  const interval = setInterval(() => {
    for (const days of snapshotCache.keys()) {
      refreshSnapshot(days).catch((error) => {
        console.error(`No se pudo refrescar snapshot ${days} dias: ${error.message}`);
      });
    }
  }, refreshIntervalMinutes * 60 * 1000);

  interval.unref?.();
}

async function serveStatic(response, url) {
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(decodeURIComponent(requestedPath)).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

export function getGoogleAdsStatus() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  return {
    configured: missing.length === 0,
    missing,
    apiVersion: googleAdsVersion,
    loginCustomerId: maskId(process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID),
    targetMccId: maskId(process.env.GOOGLE_ADS_TARGET_MCC_ID)
  };
}

export function assertConfigured() {
  const status = getGoogleAdsStatus();
  if (!status.configured) {
    const error = new Error(`Faltan variables: ${status.missing.join(", ")}`);
    error.statusCode = 400;
    throw error;
  }
}

async function getAccessToken() {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN
  });

  const result = await fetchJson("https://www.googleapis.com/oauth2/v3/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });

  if (!result.access_token) {
    throw new Error("Google OAuth no devolvio access_token");
  }

  return result.access_token;
}

async function googleAdsFetch(path, options = {}) {
  const accessToken = await getAccessToken();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "developer-token": process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
    "login-customer-id": getEnvId("GOOGLE_ADS_LOGIN_CUSTOMER_ID"),
    ...options.headers
  };

  return fetchJson(`https://googleads.googleapis.com/${googleAdsVersion}${path}`, {
    ...options,
    headers
  });
}

async function listAccessibleCustomers() {
  const data = await googleAdsFetch("/customers:listAccessibleCustomers");
  return data.resourceNames || [];
}

async function searchStream(customerId, query) {
  const stream = await googleAdsFetch(`/customers/${cleanId(customerId)}/googleAds:searchStream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });

  if (!Array.isArray(stream)) return [];
  return stream.flatMap((chunk) => chunk.results || []);
}

async function getAccountHierarchy(seedCustomerId) {
  const seen = new Set();
  const queue = [cleanId(seedCustomerId)];
  const accounts = [];

  while (queue.length) {
    const currentId = queue.shift();
    if (!currentId || seen.has(currentId)) continue;
    seen.add(currentId);

    const query = `
      SELECT
        customer_client.client_customer,
        customer_client.id,
        customer_client.descriptive_name,
        customer_client.manager,
        customer_client.level,
        customer_client.status,
        customer_client.currency_code,
        customer_client.time_zone
      FROM customer_client
      WHERE customer_client.status != 'CANCELED'
    `;

    const results = await searchStream(currentId, query);
    for (const result of results) {
      const client = result.customerClient;
      if (!client?.id) continue;

      const account = {
        id: cleanId(client.id),
        parentId: currentId,
        resourceName: client.clientCustomer,
        name: client.descriptiveName || `Cuenta ${client.id}`,
        manager: Boolean(client.manager),
        level: Number(client.level || 0),
        status: client.status,
        currencyCode: client.currencyCode,
        timeZone: client.timeZone
      };

      accounts.push(account);

      if (account.manager && account.id !== currentId && !seen.has(account.id)) {
        queue.push(account.id);
      }
    }
  }

  return dedupeAccounts(accounts);
}

async function getDashboardSnapshot(days) {
  const hierarchy = await getAccountHierarchy(getEnvId("GOOGLE_ADS_TARGET_MCC_ID"));
  const clientAccounts = hierarchy.filter((account) => !account.manager && account.status === "ENABLED");
  const rows = [];
  const errors = [];

  for (const account of clientAccounts) {
    const accountRows = await getAccountRows(account, days, errors);
    rows.push(...accountRows);
  }

  return {
    source: "google_ads_api",
    days,
    pulledAt: new Date().toISOString(),
    targetMccId: maskId(process.env.GOOGLE_ADS_TARGET_MCC_ID),
    accounts: clientAccounts,
    rows,
    errors
  };
}

async function getCachedDashboardSnapshot(days, force = false) {
  const cached = snapshotCache.get(days);
  const maxAgeMs = refreshIntervalMinutes * 60 * 1000;
  const isFresh = cached?.data && Date.now() - cached.pulledAt < maxAgeMs;

  if (!force && isFresh) return { ...cached.data, cached: true };
  if (cached?.refreshing) return cached.refreshing;

  return refreshSnapshot(days);
}

export async function refreshSnapshot(days) {
  const current = snapshotCache.get(days) || {};
  const refreshing = getDashboardSnapshot(days).then((data) => {
    snapshotCache.set(days, {
      data,
      pulledAt: Date.now(),
      refreshing: null
    });
    return { ...data, cached: false };
  });

  snapshotCache.set(days, {
    ...current,
    refreshing
  });

  try {
    return await refreshing;
  } catch (error) {
    snapshotCache.set(days, {
      ...current,
      refreshing: null
    });
    throw error;
  }
}

async function getAccountRows(account, days, errors) {
  const rows = [];
  const readers = [
    ["conversion_actions", getConversionActionRows],
    ["campaigns", getCampaignRows],
    ["keywords", getKeywordRows],
    ["search_terms", getSearchTermRows],
    ["ad_assets", getAdAssetRows],
    ["pmax_assets", getAssetGroupAssetRows]
  ];

  for (const [scope, reader] of readers) {
    try {
      rows.push(...(await reader(account, days)));
    } catch (error) {
      errors.push({
        customerId: account.id,
        customerName: account.name,
        scope,
        message: error.message
      });
    }
  }

  return rows;
}

async function getConversionActionRows(account, days) {
  const { start, end } = getDateRange(days);
  const query = `
    SELECT
      segments.conversion_action,
      segments.conversion_action_name,
      metrics.conversions,
      metrics.conversions_value
    FROM customer
    WHERE segments.date BETWEEN '${start}' AND '${end}'
      AND metrics.conversions > 0
    ORDER BY metrics.conversions DESC
    LIMIT 50
  `;

  const results = await searchStream(account.id, query);
  return results.map((result) => {
    const metrics = result.metrics || {};
    const segments = result.segments || {};
    return {
      entity: "conversion_action",
      client: account.name,
      customer_id: account.id,
      conversion_action: segments.conversionAction || "",
      conversion_action_name: segments.conversionActionName || "Conversion sin nombre",
      conversions: Number(metrics.conversions || 0),
      conversion_value: Number(metrics.conversionsValue || 0)
    };
  });
}

async function getCampaignRows(account, days) {
  const { start, end } = getDateRange(days);
  const query = `
    SELECT
      customer.id,
      customer.descriptive_name,
      campaign.id,
      campaign.name,
      campaign.status,
      campaign.advertising_channel_type,
      campaign_budget.amount_micros,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_value,
      metrics.impressions,
      metrics.clicks,
      metrics.search_budget_lost_impression_share,
      metrics.search_rank_lost_impression_share
    FROM campaign
    WHERE segments.date BETWEEN '${start}' AND '${end}'
      AND campaign.status = 'ENABLED'
  `;

  const results = await searchStream(account.id, query);
  return results.map((result) => {
    const metrics = result.metrics || {};
    const campaign = result.campaign || {};
    const budget = result.campaignBudget || {};
    const spend = microsToCurrency(metrics.costMicros);
    const conversions = Number(metrics.conversions || 0);
    return {
      entity: "campaign",
      client: account.name,
      customer_id: account.id,
      campaign: campaign.name || `Campana ${campaign.id}`,
      campaign_id: cleanId(campaign.id),
      channel: campaign.advertisingChannelType || "UNKNOWN",
      status: campaign.status || "UNKNOWN",
      spend,
      conversions,
      conversion_value: Number(metrics.conversionsValue || 0),
      impressions: Number(metrics.impressions || 0),
      clicks: Number(metrics.clicks || 0),
      budget: microsToCurrency(budget.amountMicros),
      target_cpa: "",
      target_roas: "",
      lost_budget: shareToPercent(metrics.searchBudgetLostImpressionShare),
      lost_rank: shareToPercent(metrics.searchRankLostImpressionShare)
    };
  });
}

async function getKeywordRows(account, days) {
  const { start, end } = getDateRange(days);
  const query = `
    SELECT
      campaign.id,
      campaign.name,
      ad_group.id,
      ad_group.name,
      ad_group_criterion.criterion_id,
      ad_group_criterion.keyword.text,
      ad_group_criterion.keyword.match_type,
      ad_group_criterion.status,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_value,
      metrics.impressions,
      metrics.clicks
    FROM keyword_view
    WHERE segments.date BETWEEN '${start}' AND '${end}'
      AND campaign.status = 'ENABLED'
      AND ad_group.status = 'ENABLED'
      AND ad_group_criterion.status = 'ENABLED'
      AND metrics.impressions > 0
    ORDER BY metrics.cost_micros DESC
    LIMIT ${perAccountLimit}
  `;

  const results = await searchStream(account.id, query);
  return results.map((result) => {
    const metrics = result.metrics || {};
    const campaign = result.campaign || {};
    const adGroup = result.adGroup || {};
    const criterion = result.adGroupCriterion || {};
    const keyword = criterion.keyword || {};
    return {
      entity: "keyword",
      client: account.name,
      customer_id: account.id,
      campaign: campaign.name || `Campana ${campaign.id}`,
      campaign_id: cleanId(campaign.id),
      ad_group: adGroup.name || "",
      ad_group_id: cleanId(adGroup.id),
      criterion_id: cleanId(criterion.criterionId),
      keyword: keyword.text || "",
      match_type: keyword.matchType || "",
      status: criterion.status || "",
      spend: microsToCurrency(metrics.costMicros),
      conversions: Number(metrics.conversions || 0),
      conversion_value: Number(metrics.conversionsValue || 0),
      impressions: Number(metrics.impressions || 0),
      clicks: Number(metrics.clicks || 0)
    };
  });
}

async function getSearchTermRows(account, days) {
  const { start, end } = getDateRange(days);
  const query = `
    SELECT
      campaign.id,
      campaign.name,
      ad_group.id,
      ad_group.name,
      search_term_view.resource_name,
      segments.keyword.info.text,
      segments.keyword.info.match_type,
      segments.search_term_match_type,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_value,
      metrics.impressions,
      metrics.clicks
    FROM search_term_view
    WHERE segments.date BETWEEN '${start}' AND '${end}'
      AND campaign.status = 'ENABLED'
      AND ad_group.status = 'ENABLED'
      AND metrics.impressions > 0
    ORDER BY metrics.cost_micros DESC
    LIMIT ${perAccountLimit}
  `;

  const results = await searchStream(account.id, query);
  return results.map((result) => {
    const metrics = result.metrics || {};
    const campaign = result.campaign || {};
    const adGroup = result.adGroup || {};
    const segments = result.segments || {};
    const keywordInfo = segments.keyword?.info || {};
    return {
      entity: "search_term",
      client: account.name,
      customer_id: account.id,
      campaign: campaign.name || `Campana ${campaign.id}`,
      campaign_id: cleanId(campaign.id),
      ad_group: adGroup.name || "",
      ad_group_id: cleanId(adGroup.id),
      search_term: decodeSearchTerm(result.searchTermView?.resourceName),
      keyword: keywordInfo.text || "",
      match_type: keywordInfo.matchType || segments.searchTermMatchType || "",
      targeting_status: "",
      spend: microsToCurrency(metrics.costMicros),
      conversions: Number(metrics.conversions || 0),
      conversion_value: Number(metrics.conversionsValue || 0),
      impressions: Number(metrics.impressions || 0),
      clicks: Number(metrics.clicks || 0)
    };
  });
}

async function getAdAssetRows(account, days) {
  const { start, end } = getDateRange(days);
  const query = `
    SELECT
      campaign.id,
      campaign.name,
      ad_group.id,
      ad_group.name,
      ad_group_ad_asset_view.asset,
      ad_group_ad_asset_view.enabled,
      ad_group_ad_asset_view.field_type,
      ad_group_ad_asset_view.performance_label,
      asset.name,
      asset.type,
      asset.text_asset.text,
      asset.image_asset.full_size.url,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_value,
      metrics.impressions,
      metrics.clicks
    FROM ad_group_ad_asset_view
    WHERE segments.date BETWEEN '${start}' AND '${end}'
      AND campaign.status = 'ENABLED'
      AND ad_group.status = 'ENABLED'
      AND ad_group_ad_asset_view.enabled = TRUE
      AND metrics.impressions > 0
    ORDER BY metrics.impressions DESC
    LIMIT ${perAccountLimit}
  `;

  const results = await searchStream(account.id, query);
  return results.map((result) => mapAssetRow(account, result, result.adGroupAdAssetView, "Anuncio"));
}

async function getAssetGroupAssetRows(account, days) {
  const { start, end } = getDateRange(days);
  const query = `
    SELECT
      campaign.id,
      campaign.name,
      asset_group.id,
      asset_group.name,
      asset_group_asset.asset,
      asset_group_asset.field_type,
      asset_group_asset.status,
      asset.name,
      asset.type,
      asset.text_asset.text,
      asset.image_asset.full_size.url,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_value,
      metrics.impressions,
      metrics.clicks
    FROM asset_group_asset
    WHERE segments.date BETWEEN '${start}' AND '${end}'
      AND campaign.status = 'ENABLED'
      AND asset_group_asset.status = 'ENABLED'
      AND metrics.impressions > 0
    ORDER BY metrics.impressions DESC
    LIMIT ${perAccountLimit}
  `;

  const results = await searchStream(account.id, query);
  return results.map((result) => mapAssetRow(account, result, result.assetGroupAsset, "PMax"));
}

function mapAssetRow(account, result, linkage, source) {
  const metrics = result.metrics || {};
  const campaign = result.campaign || {};
  const asset = result.asset || {};
  const imageUrl = asset.imageAsset?.fullSize?.url || "";
  return {
    entity: "asset",
    client: account.name,
    customer_id: account.id,
    campaign: campaign.name || `Campana ${campaign.id}`,
    campaign_id: cleanId(campaign.id),
    ad_group: result.adGroup?.name || result.assetGroup?.name || "",
    ad_group_id: cleanId(result.adGroup?.id || result.assetGroup?.id),
    asset_resource: linkage?.asset || "",
    asset_type: linkage?.fieldType || asset.type || "",
    asset: asset.textAsset?.text || asset.name || imageUrl || linkage?.asset || "Asset sin nombre",
    asset_source: source,
    performance_label: linkage?.performanceLabel || "UNKNOWN",
    policy: linkage?.policySummary?.approvalStatus || "eligible",
    strength: performanceLabelScore(linkage?.performanceLabel),
    spend: microsToCurrency(metrics.costMicros),
    conversions: Number(metrics.conversions || 0),
    conversion_value: Number(metrics.conversionsValue || 0),
    impressions: Number(metrics.impressions || 0),
    clicks: Number(metrics.clicks || 0)
  };
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: text };
  }

  if (!response.ok) {
    const apiErrors = data.error?.details
      ?.flatMap((detail) => detail.errors || [])
      ?.map((apiError) => apiError.message || apiError.errorCode && JSON.stringify(apiError.errorCode))
      ?.filter(Boolean);
    const message =
      apiErrors?.join(" | ") ||
      data.error?.message ||
      data.message ||
      `${response.status} ${response.statusText}`;
    const error = new Error(message);
    error.statusCode = response.status;
    error.details = data;
    throw error;
  }

  return data;
}

export function normalizeDays(value) {
  const days = Math.round(Number(value || 30));
  if (!Number.isFinite(days)) return 30;
  return Math.min(365, Math.max(1, days));
}

function getDateRange(days) {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setUTCDate(endDate.getUTCDate() - days + 1);
  return {
    start: formatDate(startDate),
    end: formatDate(endDate)
  };
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function cleanId(value) {
  return String(value || "").replace(/\D/g, "");
}

function getEnvId(key) {
  return cleanId(process.env[key]);
}

function maskId(value) {
  const clean = cleanId(value);
  if (!clean) return "";
  return `${clean.slice(0, 3)}***${clean.slice(-2)}`;
}

function microsToCurrency(value) {
  return Number(value || 0) / 1_000_000;
}

function shareToPercent(value) {
  if (value === null || value === undefined || value === "") return 0;
  return Number(value) * 100;
}

function performanceLabelScore(label) {
  const scores = {
    BEST: 92,
    GOOD: 76,
    LEARNING: 58,
    PENDING: 50,
    LOW: 28,
    UNKNOWN: 45,
    UNSPECIFIED: 45
  };
  return scores[label] || 45;
}

function decodeSearchTerm(resourceName = "") {
  const encoded = String(resourceName).split("~").pop();
  if (!encoded || encoded === resourceName) return "";
  try {
    const normalized = encoded.replace(/-/g, "+").replace(/_/g, "/");
    return Buffer.from(normalized, "base64").toString("utf8");
  } catch {
    return "";
  }
}

function dedupeAccounts(accounts) {
  const byId = new Map();
  for (const account of accounts) {
    const previous = byId.get(account.id);
    if (!previous || account.level < previous.level) {
      byId.set(account.id, account);
    }
  }
  return [...byId.values()].sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
}

export function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload, null, 2));
}
