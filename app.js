const demoRows = [
  {
    entity: "campaign",
    client: "TeknoDental",
    campaign: "Implantes Madrid - Search",
    channel: "Search",
    status: "enabled",
    spend: 4120,
    conversions: 87,
    conversion_value: 16840,
    impressions: 112000,
    clicks: 6840,
    budget: 180,
    target_cpa: 58,
    target_roas: 3.1,
    lost_budget: 28,
    lost_rank: 12
  },
  {
    entity: "campaign",
    client: "TeknoDental",
    campaign: "Ortodoncia Invisible - PMax",
    channel: "Performance Max",
    status: "enabled",
    spend: 3650,
    conversions: 42,
    conversion_value: 7220,
    impressions: 194000,
    clicks: 5120,
    budget: 145,
    target_cpa: 70,
    target_roas: 2.5,
    lost_budget: 8,
    lost_rank: 22
  },
  {
    entity: "campaign",
    client: "VidaFit",
    campaign: "Nutricion Online - Search",
    channel: "Search",
    status: "enabled",
    spend: 2240,
    conversions: 96,
    conversion_value: 11520,
    impressions: 79000,
    clicks: 4020,
    budget: 90,
    target_cpa: 32,
    target_roas: 3.7,
    lost_budget: 36,
    lost_rank: 8
  },
  {
    entity: "campaign",
    client: "VidaFit",
    campaign: "Recetas Gratis - Display",
    channel: "Display",
    status: "enabled",
    spend: 980,
    conversions: 4,
    conversion_value: 260,
    impressions: 312000,
    clicks: 1880,
    budget: 55,
    target_cpa: 35,
    target_roas: 2.2,
    lost_budget: 2,
    lost_rank: 5
  },
  {
    entity: "campaign",
    client: "CasaNorte",
    campaign: "Reformas Integrales - Search",
    channel: "Search",
    status: "enabled",
    spend: 5480,
    conversions: 38,
    conversion_value: 26200,
    impressions: 88000,
    clicks: 3390,
    budget: 240,
    target_cpa: 155,
    target_roas: 4,
    lost_budget: 18,
    lost_rank: 18
  },
  {
    entity: "campaign",
    client: "CasaNorte",
    campaign: "Decoracion Blog - Demand Gen",
    channel: "Demand Gen",
    status: "enabled",
    spend: 1360,
    conversions: 7,
    conversion_value: 1190,
    impressions: 225000,
    clicks: 2890,
    budget: 70,
    target_cpa: 120,
    target_roas: 2,
    lost_budget: 4,
    lost_rank: 11
  },
  {
    entity: "keyword",
    client: "TeknoDental",
    campaign: "Implantes Madrid - Search",
    keyword: "implantes dentales madrid",
    match_type: "phrase",
    status: "enabled",
    spend: 940,
    conversions: 28,
    conversion_value: 5960,
    impressions: 12100,
    clicks: 980,
    target_cpa: 58
  },
  {
    entity: "keyword",
    client: "TeknoDental",
    campaign: "Implantes Madrid - Search",
    keyword: "precio implante dental",
    match_type: "exact",
    status: "enabled",
    spend: 720,
    conversions: 17,
    conversion_value: 3530,
    impressions: 9400,
    clicks: 760,
    target_cpa: 58
  },
  {
    entity: "keyword",
    client: "TeknoDental",
    campaign: "Ortodoncia Invisible - PMax",
    keyword: "alineadores baratos",
    match_type: "broad",
    status: "enabled",
    spend: 610,
    conversions: 2,
    conversion_value: 180,
    impressions: 18500,
    clicks: 840,
    target_cpa: 70
  },
  {
    entity: "keyword",
    client: "VidaFit",
    campaign: "Nutricion Online - Search",
    keyword: "nutricionista online",
    match_type: "exact",
    status: "enabled",
    spend: 610,
    conversions: 36,
    conversion_value: 4680,
    impressions: 8900,
    clicks: 640,
    target_cpa: 32
  },
  {
    entity: "keyword",
    client: "VidaFit",
    campaign: "Recetas Gratis - Display",
    keyword: "recetas gratis pdf",
    match_type: "broad",
    status: "enabled",
    spend: 320,
    conversions: 0,
    conversion_value: 0,
    impressions: 43100,
    clicks: 610,
    target_cpa: 35
  },
  {
    entity: "keyword",
    client: "CasaNorte",
    campaign: "Reformas Integrales - Search",
    keyword: "empresa reformas integrales",
    match_type: "phrase",
    status: "enabled",
    spend: 1430,
    conversions: 16,
    conversion_value: 12600,
    impressions: 14900,
    clicks: 710,
    target_cpa: 155
  },
  {
    entity: "keyword",
    client: "CasaNorte",
    campaign: "Decoracion Blog - Demand Gen",
    keyword: "ideas decoracion salon",
    match_type: "broad",
    status: "enabled",
    spend: 480,
    conversions: 1,
    conversion_value: 90,
    impressions: 64000,
    clicks: 930,
    target_cpa: 120
  },
  {
    entity: "search_term",
    client: "TeknoDental",
    campaign: "Implantes Madrid - Search",
    search_term: "clinica implantes dentales madrid",
    keyword: "implantes dentales madrid",
    spend: 220,
    conversions: 9,
    conversion_value: 1980,
    clicks: 140,
    impressions: 2100
  },
  {
    entity: "search_term",
    client: "TeknoDental",
    campaign: "Ortodoncia Invisible - PMax",
    search_term: "ortodoncia invisible gratis",
    keyword: "alineadores baratos",
    spend: 165,
    conversions: 0,
    conversion_value: 0,
    clicks: 250,
    impressions: 7400
  },
  {
    entity: "search_term",
    client: "VidaFit",
    campaign: "Nutricion Online - Search",
    search_term: "nutricionista online para perder peso",
    keyword: "nutricionista online",
    spend: 140,
    conversions: 12,
    conversion_value: 1560,
    clicks: 88,
    impressions: 1100
  },
  {
    entity: "search_term",
    client: "VidaFit",
    campaign: "Recetas Gratis - Display",
    search_term: "descargar recetas gratis pdf",
    keyword: "recetas gratis pdf",
    spend: 112,
    conversions: 0,
    conversion_value: 0,
    clicks: 210,
    impressions: 15200
  },
  {
    entity: "search_term",
    client: "CasaNorte",
    campaign: "Reformas Integrales - Search",
    search_term: "empresa reformas integrales madrid",
    keyword: "empresa reformas integrales",
    spend: 390,
    conversions: 5,
    conversion_value: 4600,
    clicks: 144,
    impressions: 2200
  },
  {
    entity: "search_term",
    client: "CasaNorte",
    campaign: "Decoracion Blog - Demand Gen",
    search_term: "trabajo decorador interiores",
    keyword: "ideas decoracion salon",
    spend: 96,
    conversions: 0,
    conversion_value: 0,
    clicks: 180,
    impressions: 19800
  },
  {
    entity: "asset",
    client: "TeknoDental",
    campaign: "Implantes Madrid - Search",
    asset_type: "Titulo",
    asset: "Implantes dentales desde 49 euros al mes",
    impressions: 19000,
    clicks: 1460,
    conversions: 31,
    conversion_value: 6240,
    spend: 880,
    strength: 82,
    policy: "eligible"
  },
  {
    entity: "asset",
    client: "TeknoDental",
    campaign: "Ortodoncia Invisible - PMax",
    asset_type: "Imagen",
    asset: "Sonrisa generica fondo blanco",
    impressions: 78000,
    clicks: 940,
    conversions: 3,
    conversion_value: 330,
    spend: 610,
    strength: 31,
    policy: "eligible"
  },
  {
    entity: "asset",
    client: "VidaFit",
    campaign: "Nutricion Online - Search",
    asset_type: "Descripcion",
    asset: "Planes personalizados con seguimiento semanal",
    impressions: 16500,
    clicks: 1040,
    conversions: 34,
    conversion_value: 4420,
    spend: 520,
    strength: 89,
    policy: "eligible"
  },
  {
    entity: "asset",
    client: "VidaFit",
    campaign: "Recetas Gratis - Display",
    asset_type: "Titulo",
    asset: "Recetas rapidas para todos",
    impressions: 84000,
    clicks: 380,
    conversions: 0,
    conversion_value: 0,
    spend: 210,
    strength: 28,
    policy: "eligible"
  },
  {
    entity: "asset",
    client: "CasaNorte",
    campaign: "Reformas Integrales - Search",
    asset_type: "Extension",
    asset: "Presupuesto en 24 horas",
    impressions: 10600,
    clicks: 720,
    conversions: 9,
    conversion_value: 7600,
    spend: 720,
    strength: 76,
    policy: "eligible"
  },
  {
    entity: "asset",
    client: "CasaNorte",
    campaign: "Decoracion Blog - Demand Gen",
    asset_type: "Imagen",
    asset: "Salon minimalista sin antes/despues",
    impressions: 96000,
    clicks: 720,
    conversions: 1,
    conversion_value: 90,
    spend: 310,
    strength: 34,
    policy: "eligible"
  }
];

const storeKey = "ads-dashboard-rows-v1";
const sourceKey = "ads-dashboard-source-v1";
const metaKey = "ads-dashboard-meta-v1";
const modeKey = "ads-dashboard-mode-v1";
const economicsKey = "ads-dashboard-unit-economics-v1";
let rows = loadRows();
let dataSource = localStorage.getItem(sourceKey) || "demo";
let dashboardMode = localStorage.getItem(modeKey) || "leadgen";
let unitEconomics = loadUnitEconomics();

const els = {
  apiState: document.querySelector("#apiState"),
  apiStateDot: document.querySelector("#apiStateDot"),
  apiStateTitle: document.querySelector("#apiStateTitle"),
  apiStateDetail: document.querySelector("#apiStateDetail"),
  connectionStatus: document.querySelector("#connectionStatus"),
  checkApi: document.querySelector("#checkApi"),
  loadApiData: document.querySelector("#loadApiData"),
  leadGenMode: document.querySelector("#leadGenMode"),
  ecommerceMode: document.querySelector("#ecommerceMode"),
  modeDescription: document.querySelector("#modeDescription"),
  clientFilter: document.querySelector("#clientFilter"),
  windowFilter: document.querySelector("#windowFilter"),
  customWindowLabel: document.querySelector("#customWindowLabel"),
  customWindowInput: document.querySelector("#customWindowInput"),
  resetDemo: document.querySelector("#resetDemo"),
  csvInput: document.querySelector("#csvInput"),
  exportPlan: document.querySelector("#exportPlan"),
  exportKeywords: document.querySelector("#exportKeywords"),
  exportNegatives: document.querySelector("#exportNegatives"),
  assetActionFilter: document.querySelector("#assetActionFilter"),
  toast: document.querySelector("#toast"),
  kpiSpendLabel: document.querySelector("#kpiSpendLabel"),
  kpiSpend: document.querySelector("#kpiSpend"),
  kpiSpendHint: document.querySelector("#kpiSpendHint"),
  kpiConversionsLabel: document.querySelector("#kpiConversionsLabel"),
  kpiConversions: document.querySelector("#kpiConversions"),
  kpiCvrHint: document.querySelector("#kpiCvrHint"),
  kpiCpaLabel: document.querySelector("#kpiCpaLabel"),
  kpiCpa: document.querySelector("#kpiCpa"),
  kpiCpaHint: document.querySelector("#kpiCpaHint"),
  kpiRoasLabel: document.querySelector("#kpiRoasLabel"),
  kpiRoas: document.querySelector("#kpiRoas"),
  kpiRoasHint: document.querySelector("#kpiRoasHint"),
  kpiCtrLabel: document.querySelector("#kpiCtrLabel"),
  kpiCtr: document.querySelector("#kpiCtr"),
  kpiCtrHint: document.querySelector("#kpiCtrHint"),
  scaleList: document.querySelector("#scaleList"),
  holdList: document.querySelector("#holdList"),
  cutList: document.querySelector("#cutList"),
  scaleCount: document.querySelector("#scaleCount"),
  holdCount: document.querySelector("#holdCount"),
  cutCount: document.querySelector("#cutCount"),
  assetTable: document.querySelector("#assetTable"),
  topKeywords: document.querySelector("#topKeywords"),
  watchKeywords: document.querySelector("#watchKeywords"),
  priorityList: document.querySelector("#priorityList"),
  conversionActionList: document.querySelector("#conversionActionList"),
  closedCustomersInput: document.querySelector("#closedCustomersInput"),
  profitPerCustomerInput: document.querySelector("#profitPerCustomerInput"),
  unitEconomicsSummary: document.querySelector("#unitEconomicsSummary"),
  negativeTerms: document.querySelector("#negativeTerms")
};

function loadRows() {
  try {
    const saved = JSON.parse(localStorage.getItem(storeKey) || "null");
    return Array.isArray(saved) && saved.length ? saved : demoRows;
  } catch {
    return demoRows;
  }
}

function saveRows() {
  localStorage.setItem(storeKey, JSON.stringify(rows));
  localStorage.setItem(sourceKey, dataSource);
}

function saveMode() {
  localStorage.setItem(modeKey, dashboardMode);
}

function loadUnitEconomics() {
  try {
    return JSON.parse(localStorage.getItem(economicsKey) || "{}");
  } catch {
    return {};
  }
}

function saveUnitEconomics() {
  localStorage.setItem(economicsKey, JSON.stringify(unitEconomics));
}

function money(value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: value >= 1000 ? 0 : 2
  }).format(safeNumber(value));
}

function number(value, digits = 0) {
  return new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: digits
  }).format(safeNumber(value));
}

function percent(value, digits = 1) {
  return `${number(safeNumber(value) * 100, digits)}%`;
}

function safeNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

function ratio(top, bottom) {
  return safeNumber(bottom) === 0 ? 0 : safeNumber(top) / safeNumber(bottom);
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function currentRows(entity) {
  const selectedClient = els.clientFilter.value;
  return rows.filter((row) => {
    const clientMatch = selectedClient === "all" || row.client === selectedClient;
    return row.entity === entity && clientMatch && isActiveRow(row);
  });
}

function isActiveRow(row) {
  if (!Object.prototype.hasOwnProperty.call(row, "status") || row.status === "") return true;
  const status = normalizeText(row.status);
  return ["enabled", "active", "serving", "eligible"].includes(status);
}

function currentWindowDays() {
  if (els.windowFilter.value === "custom") {
    return String(clamp(Math.round(safeNumber(els.customWindowInput.value) || 30), 1, 365));
  }
  return String(els.windowFilter.value || "30");
}

function currentWindowLabel() {
  const days = currentWindowDays();
  return els.windowFilter.value === "custom"
    ? `Ultimos ${days} dias`
    : els.windowFilter.selectedOptions[0]?.textContent || `Ultimos ${days} dias`;
}

function getSelectedClient() {
  return els.clientFilter.value || "all";
}

function economicsFor(client, days = currentWindowDays()) {
  return unitEconomics?.[client]?.[days] || {
    closedCustomers: 0,
    profitPerCustomer: 0
  };
}

function setEconomicsFor(client, values, days = currentWindowDays()) {
  if (!client || client === "all") return;
  unitEconomics[client] = unitEconomics[client] || {};
  unitEconomics[client][days] = {
    closedCustomers: safeNumber(values.closedCustomers),
    profitPerCustomer: safeNumber(values.profitPerCustomer)
  };
  saveUnitEconomics();
}

function summarize(items) {
  return items.reduce(
    (acc, row) => {
      acc.spend += safeNumber(row.spend);
      acc.conversions += safeNumber(row.conversions);
      acc.value += safeNumber(row.conversion_value);
      acc.impressions += safeNumber(row.impressions);
      acc.clicks += safeNumber(row.clicks);
      return acc;
    },
    { spend: 0, conversions: 0, value: 0, impressions: 0, clicks: 0 }
  );
}

function buildClientBenchmarks(campaigns) {
  const byClient = new Map();
  const globalSummary = summarize(campaigns);
  const globalCpa = ratio(globalSummary.spend, globalSummary.conversions) || 60;
  const globalRoas = ratio(globalSummary.value, globalSummary.spend) || 2.5;

  for (const campaign of campaigns) {
    const current = byClient.get(campaign.client) || {
      spend: 0,
      conversions: 0,
      value: 0,
      impressions: 0,
      clicks: 0
    };
    current.spend += safeNumber(campaign.spend);
    current.conversions += safeNumber(campaign.conversions);
    current.value += safeNumber(campaign.conversion_value);
    current.impressions += safeNumber(campaign.impressions);
    current.clicks += safeNumber(campaign.clicks);
    byClient.set(campaign.client, current);
  }

  return {
    globalCpa,
    globalRoas,
    byClient: new Map(
      [...byClient.entries()].map(([client, summary]) => [
        client,
        {
          cpa: ratio(summary.spend, summary.conversions) || globalCpa,
          roas: ratio(summary.value, summary.spend) || globalRoas,
          cvr: ratio(summary.conversions, summary.clicks),
          ctr: ratio(summary.clicks, summary.impressions),
          summary,
          economics: economicsFor(client)
        }
      ])
    )
  };
}

function targetCpaFromEconomics(clientBenchmark) {
  const economics = clientBenchmark?.economics;
  const summary = clientBenchmark?.summary;
  const closedCustomers = safeNumber(economics?.closedCustomers);
  const profitPerCustomer = safeNumber(economics?.profitPerCustomer);
  const leads = safeNumber(summary?.conversions);
  const closeRate = ratio(closedCustomers, leads);
  const acquisitionBudgetPct = 0.35;

  if (!closedCustomers || !profitPerCustomer || !closeRate) return null;

  return {
    targetCpa: profitPerCustomer * acquisitionBudgetPct * closeRate,
    targetCac: profitPerCustomer * acquisitionBudgetPct,
    closeRate,
    acquisitionBudgetPct,
    source: "unit_economics"
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, safeNumber(value)));
}

function scoreToVerdict(score) {
  if (score >= 80) return "SCALE";
  if (score >= 60) return "MAINTAIN";
  if (score >= 40) return "OPTIMIZE";
  if (score >= 20) return "REVIEW";
  return "PAUSE";
}

function verdictLabel(verdict) {
  const labels = {
    SCALE: "Escalar",
    MAINTAIN: "Mantener",
    OPTIMIZE: "Optimizar",
    REVIEW: "Revisar",
    PAUSE: "Parar",
    LEARNING: "Aprendizaje",
    INSUFFICIENT_DATA: "Pocos datos"
  };
  return labels[verdict] || verdict;
}

function mapVerdictToDecision(finalVerdict) {
  if (finalVerdict === "SCALE") return "scale";
  if (finalVerdict === "PAUSE") return "cut";
  return "hold";
}

function calculateMarketPressureIndex() {
  return {
    ipm: 1,
    interpretation: "neutral",
    components: {
      cpcRatio: 1,
      competitionRatio: 1,
      demandRatio: 1,
      seasonalityRatio: 1
    }
  };
}

function calculateCampaignScore({ cpaAdjusted, targetCpa, conversions, lostBudget, lostRank, roas, targetRoas, hasRevenue }) {
  const leadPerformanceRatio = targetCpa > 0 && conversions > 0 ? cpaAdjusted / targetCpa : 2;
  const roasPerformanceRatio = targetRoas > 0 && hasRevenue ? roas / targetRoas : 1;
  const performanceScore =
    dashboardMode === "ecommerce" && hasRevenue
      ? clamp(roasPerformanceRatio * 75, 0, 100)
      : clamp(100 - (leadPerformanceRatio - 0.75) * 80, 0, 100);
  const trendScore = 50;
  const volumeTarget = dashboardMode === "ecommerce" ? 8 : 20;
  const volumeScore = clamp((conversions / volumeTarget) * 100, 0, 100);
  const headroomScore = clamp(Math.max(lostBudget, lostRank), 0, 100);
  const qualityScore = hasRevenue ? clamp(roas * 25, 0, 100) : 50;
  const weights = {
    performance: 0.55,
    trend: 0.05,
    volume: 0.25,
    headroom: 0.05,
    quality: 0.1
  };
  const total =
    performanceScore * weights.performance +
    trendScore * weights.trend +
    volumeScore * weights.volume +
    headroomScore * weights.headroom +
    qualityScore * weights.quality;

  return {
    total: clamp(total, 0, 100),
    performanceScore: clamp(performanceScore, 0, 100),
    trendScore,
    volumeScore,
    headroomScore,
    qualityScore,
    weights
  };
}

function decideCampaignByRules(context) {
  const overrides = [];
  const minScaleConversions = dashboardMode === "ecommerce" ? 3 : 8;
  const minJudgeConversions = dashboardMode === "ecommerce" ? 2 : 3;
  const targetCpa = Math.max(context.targetCpa, 1);
  const targetRoas = Math.max(context.targetRoas, 0.1);
  const hasEnoughSpendToJudge = context.spend >= Math.max(targetCpa * 1.5, 100);
  const hasHeadroom = Math.max(context.lostBudget, context.lostRank) >= 10;
  const hasConversions = context.conversions > 0;

  if (!hasConversions && hasEnoughSpendToJudge) {
    return {
      finalVerdict: "PAUSE",
      overrides: ["spend_without_conversions"]
    };
  }

  if (!hasConversions || context.conversions < minJudgeConversions) {
    return {
      finalVerdict: "LEARNING",
      overrides: ["low_volume"]
    };
  }

  if (dashboardMode === "ecommerce" && context.hasRevenue) {
    const roasRatio = context.roas / targetRoas;
    if (context.conversions >= minScaleConversions && roasRatio >= 1.15) {
      return { finalVerdict: "SCALE", overrides: hasHeadroom ? ["efficient_with_headroom"] : ["efficient"] };
    }
    if (roasRatio < 0.55 && hasEnoughSpendToJudge) {
      return { finalVerdict: "PAUSE", overrides: ["roas_too_low"] };
    }
    if (roasRatio < 0.85) {
      return { finalVerdict: "OPTIMIZE", overrides: ["roas_below_target"] };
    }
    return { finalVerdict: "MAINTAIN", overrides };
  }

  const cpaRatio = context.cpa / targetCpa;
  if (context.conversions >= minScaleConversions && cpaRatio <= 0.9) {
    return { finalVerdict: "SCALE", overrides: hasHeadroom ? ["efficient_with_headroom"] : ["efficient"] };
  }

  if (cpaRatio >= 1.55 && hasEnoughSpendToJudge) {
    return { finalVerdict: "PAUSE", overrides: ["cpl_too_high"] };
  }

  if (cpaRatio > 1.15) {
    return { finalVerdict: "OPTIMIZE", overrides: ["cpl_above_reference"] };
  }

  return { finalVerdict: "MAINTAIN", overrides };
}

function enrichCampaign(row, benchmarks) {
  const spend = safeNumber(row.spend);
  const conversions = safeNumber(row.conversions);
  const value = safeNumber(row.conversion_value);
  const impressions = safeNumber(row.impressions);
  const clicks = safeNumber(row.clicks);
  const clientBenchmark = benchmarks?.byClient?.get(row.client);
  const cpa = ratio(spend, conversions);
  const roas = ratio(value, spend);
  const rowTargetCpa = safeNumber(row.target_cpa);
  const targetCpaLooksCalculated = rowTargetCpa && cpa && Math.abs(rowTargetCpa - cpa) < 0.01;
  const economicsTarget = targetCpaFromEconomics(clientBenchmark);
  const targetCpa =
    economicsTarget?.targetCpa ||
    (rowTargetCpa && !targetCpaLooksCalculated ? rowTargetCpa : clientBenchmark?.cpa || benchmarks?.globalCpa || 60);
  const targetRoas = safeNumber(row.target_roas) || clientBenchmark?.roas || benchmarks?.globalRoas || 2.5;
  const ctr = ratio(clicks, impressions);
  const cvr = ratio(conversions, clicks);
  const lostBudget = safeNumber(row.lost_budget);
  const lostRank = safeNumber(row.lost_rank);
  const marketContext = calculateMarketPressureIndex();
  const cpaAdjusted = marketContext.ipm ? cpa / marketContext.ipm : cpa;
  const scoring = calculateCampaignScore({
    cpaAdjusted,
    targetCpa,
    conversions,
    lostBudget,
    lostRank,
    roas,
    targetRoas,
    hasRevenue: value > 0
  });
  const rawVerdict = scoreToVerdict(scoring.total);
  const protectedVerdict = decideCampaignByRules({
    spend,
    conversions,
    cpa,
    roas,
    targetCpa,
    targetRoas,
    lostBudget,
    lostRank,
    hasRevenue: value > 0,
    ipm: marketContext.ipm,
    seasonalityRatio: marketContext.components.seasonalityRatio
  });
  const finalVerdict = protectedVerdict.finalVerdict;
  const decision = mapVerdictToDecision(finalVerdict);
  const headroom = scoring.headroomScore;
  const scalePct = Math.round(20 + headroom * 0.1);
  const budgetMove = finalVerdict === "SCALE" ? `+${scalePct}%` : finalVerdict === "PAUSE" ? "Parar" : "0%";
  const action =
    finalVerdict === "SCALE"
      ? `Subir presupuesto ${scalePct}%`
      : finalVerdict === "PAUSE"
        ? "Parar o reestructurar"
        : finalVerdict === "OPTIMIZE"
          ? "Optimizar sin tocar presupuesto"
          : finalVerdict === "REVIEW"
            ? "Revision humana"
            : "Mantener y vigilar";
  const reasons = [
    `Decision: ${verdictLabel(finalVerdict)} · indice ${number(scoring.total, 0)}/100`,
    economicsTarget
      ? `Objetivo negocio: CPL ${money(targetCpa)} · CAC max ${money(economicsTarget.targetCac)}`
      : dashboardMode === "ecommerce"
      ? `ROAS ${number(roas, 2)}x · CPA ${money(cpa)}`
      : `CPL ${money(cpa)} vs referencia ${money(targetCpa)}`,
    `Conversiones ${number(conversions, 1)} · margen de escala ${number(scoring.headroomScore, 0)}/100`
  ];

  if (protectedVerdict.overrides.includes("low_volume")) {
    reasons.push("Volumen bajo: aprender antes de escalar o parar");
  }
  if (protectedVerdict.overrides.includes("spend_without_conversions")) {
    reasons.push("Gasto suficiente sin conversiones: parar y revisar estructura");
  }
  if (protectedVerdict.overrides.includes("efficient")) {
    reasons.push("Mejor que la referencia del cliente: candidata a escalar");
  }
  if (protectedVerdict.overrides.includes("efficient_with_headroom")) {
    reasons.push("Mejor que referencia y con margen de impresiones");
  }
  if (protectedVerdict.overrides.includes("cpl_too_high")) {
    reasons.push("CPL muy por encima de la referencia del cliente");
  }
  if (protectedVerdict.overrides.includes("cpl_above_reference")) {
    reasons.push("CPL por encima de referencia: optimizar antes de invertir mas");
  }

  return {
    ...row,
    spend,
    conversions,
    value,
    impressions,
    clicks,
    targetCpa,
    targetRoas,
    economicsTarget,
    cpa,
    roas,
    ctr,
    cvr,
    lostBudget,
    lostRank,
    cpaAdjusted,
    marketContext,
    scoring,
    rawVerdict,
    finalVerdict,
    protectionOverrides: protectedVerdict.overrides,
    decision,
    action,
    budgetMove,
    reasons
  };
}

function auditAsset(row, campaignMap) {
  const campaign = campaignMap.get(row.campaign);
  const ctr = ratio(row.clicks, row.impressions);
  const cpa = ratio(row.spend, row.conversions);
  const roas = ratio(row.conversion_value, row.spend);
  const strength = Math.max(0, Math.min(100, safeNumber(row.strength)));
  const campaignCtr = campaign?.ctr || 0.025;
  const campaignTargetCpa = campaign?.targetCpa || safeNumber(row.target_cpa) || 60;
  let action = "keep";
  let actionText = "Mantener";
  const reasons = [];

  if (strength < 40) reasons.push("Fuerza baja");
  if (ctr < campaignCtr * 0.6 && safeNumber(row.impressions) > 3000) reasons.push("CTR bajo frente a su campana");
  if (safeNumber(row.spend) > campaignTargetCpa * 2 && safeNumber(row.conversions) === 0) reasons.push("Gasto sin conversiones");
  if (safeNumber(row.policy) && normalizeText(row.policy) !== "eligible") reasons.push("Revisar politica");

  if (reasons.some((reason) => reason.includes("Gasto sin") || reason.includes("Fuerza baja"))) {
    action = "replace";
    actionText = "Cambiar";
  } else if (reasons.length || (roas > 0 && roas < 1.2)) {
    action = "test";
    actionText = "Test A/B";
    if (!reasons.length) reasons.push("ROAS bajo; probar variante");
  } else {
    reasons.push("Aporta rendimiento suficiente");
  }

  return {
    ...row,
    ctr,
    cpa,
    roas,
    strength,
    action,
    actionText,
    reasons
  };
}

function enrichKeyword(row) {
  const spend = safeNumber(row.spend);
  const conversions = safeNumber(row.conversions);
  const value = safeNumber(row.conversion_value);
  const cpa = ratio(spend, conversions);
  const roas = ratio(value, spend);
  const ctr = ratio(row.clicks, row.impressions);
  const targetCpa = safeNumber(row.target_cpa) || 60;
  const score = conversions * 3 + roas * 4 + ctr * 100 - Math.max(0, cpa - targetCpa) / 8;
  const needsReview = spend > targetCpa * 2 && (conversions === 0 || cpa > targetCpa * 1.35);
  const recommendation = needsReview
    ? conversions === 0
      ? "Pausar o pasar a exacta"
      : "Bajar puja y revisar terminos"
    : roas >= 3 || cpa <= targetCpa * 0.8
      ? "Subir puja controlada"
      : "Mantener";

  return {
    ...row,
    spend,
    conversions,
    value,
    cpa,
    roas,
    ctr,
    score,
    needsReview,
    recommendation
  };
}

function auditSearchTerm(row) {
  const wasteWords = ["gratis", "empleo", "trabajo", "descargar", "pdf", "curso", "plantilla"];
  const normalized = normalizeText(row.search_term);
  const spend = safeNumber(row.spend);
  const conversions = safeNumber(row.conversions);
  const value = safeNumber(row.conversion_value);
  const roas = ratio(value, spend);
  const hasWasteIntent = wasteWords.some((word) => normalized.includes(word));
  const shouldNegative = conversions === 0 && (spend >= 75 || hasWasteIntent);
  const matchType = hasWasteIntent ? "frase" : "exacta";
  const reason = hasWasteIntent
    ? "Intencion informativa o no comercial"
    : spend >= 75
      ? "Gasto sin conversiones"
      : "Vigilar";

  return {
    ...row,
    spend,
    conversions,
    value,
    roas,
    hasWasteIntent,
    shouldNegative,
    matchType,
    reason
  };
}

function updateClientOptions() {
  const clients = [...new Set(rows.map((row) => row.client).filter(Boolean))].sort();
  const previous = els.clientFilter.value || "all";
  els.clientFilter.innerHTML = [
    `<option value="all">Todos los clientes</option>`,
    ...clients.map((client) => `<option value="${escapeHtml(client)}">${escapeHtml(client)}</option>`)
  ].join("");
  els.clientFilter.value = clients.includes(previous) ? previous : "all";
}

function render() {
  updateClientOptions();
  updateSourceState();
  updateModeState();
  const campaignRows = currentRows("campaign");
  const benchmarks = buildClientBenchmarks(campaignRows);
  const campaigns = campaignRows.map((campaign) => enrichCampaign(campaign, benchmarks));
  const campaignMap = new Map(campaigns.map((campaign) => [campaign.campaign, campaign]));
  const keywords = currentRows("keyword").map(enrichKeyword);
  const assets = currentRows("asset").map((asset) => auditAsset(asset, campaignMap));
  const searchTerms = currentRows("search_term").map(auditSearchTerm);
  const conversionActions = currentRows("conversion_action");
  renderKpis(campaigns);
  renderUnitEconomics(campaigns);
  renderCampaignDecisions(campaigns);
  renderAssets(assets);
  renderKeywords(keywords);
  renderPriorities(campaigns, assets, keywords, searchTerms);
  renderConversionActions(conversionActions);
  renderNegatives(searchTerms);
}

function updateSourceState(status) {
  const usingApi = dataSource === "api";
  if (status?.configured) {
    els.apiStateTitle.textContent = usingApi ? "API conectada" : "API lista";
    els.apiStateDetail.textContent = `MCC ${status.targetMccId || "configurado"} · ${usingApi ? "datos reales" : "pendiente de cargar"}`;
    els.apiStateDot.style.background = "var(--green)";
    els.connectionStatus.textContent = usingApi
      ? "Datos reales cargados desde Google Ads API."
      : "Credenciales listas. Puedes cargar datos reales.";
    els.loadApiData.disabled = false;
    return;
  }

  const missing = status?.missing?.length ? status.missing.join(", ") : "";
  els.apiStateTitle.textContent = usingApi ? "Datos API guardados" : "API no conectada";
  els.apiStateDetail.textContent = usingApi ? "Ultima lectura guardada en navegador" : "Modo local con datos demo/CSV";
  els.apiStateDot.style.background = usingApi ? "var(--green)" : "var(--amber)";
  els.connectionStatus.textContent = usingApi
    ? "Datos reales cargados desde Google Ads API."
    : missing
    ? `Faltan variables en .env: ${missing}`
    : "Pendiente de configurar credenciales locales.";
  els.loadApiData.disabled = !usingApi;
}

function renderKpis(campaigns) {
  const summary = summarize(campaigns);
  const cpa = ratio(summary.spend, summary.conversions);
  const roas = ratio(summary.value, summary.spend);
  const ctr = ratio(summary.clicks, summary.impressions);
  const cvr = ratio(summary.conversions, summary.clicks);
  const aov = ratio(summary.value, summary.conversions);

  if (dashboardMode === "ecommerce") {
    els.kpiSpendLabel.textContent = "Ingresos";
    els.kpiSpend.textContent = money(summary.value);
    els.kpiSpendHint.textContent = `${money(summary.spend)} invertidos`;
    els.kpiConversionsLabel.textContent = "Pedidos";
    els.kpiConversions.textContent = number(summary.conversions, 1);
    els.kpiCvrHint.textContent = `${percent(cvr)} tasa de compra`;
    els.kpiCpaLabel.textContent = "Coste por compra";
    els.kpiCpa.textContent = money(cpa);
    els.kpiCpaHint.textContent = summary.conversions ? "Inversion / pedidos" : "Sin pedidos";
    els.kpiRoasLabel.textContent = "ROAS";
    els.kpiRoas.textContent = `${number(roas, 2)}x`;
    els.kpiRoasHint.textContent = `${money(summary.value)} / ${money(summary.spend)}`;
    els.kpiCtrLabel.textContent = "Ticket medio";
    els.kpiCtr.textContent = money(aov);
    els.kpiCtrHint.textContent = summary.conversions ? "Valor / pedidos" : "Sin valor de compra";
    return;
  }

  els.kpiSpendLabel.textContent = "Inversion";
  els.kpiSpend.textContent = money(summary.spend);
  els.kpiSpendHint.textContent = `${number(summary.clicks)} clics analizados`;
  els.kpiConversionsLabel.textContent = "Leads";
  els.kpiConversions.textContent = number(summary.conversions, 1);
  els.kpiCvrHint.textContent = `${percent(cvr)} tasa de conversion`;
  els.kpiCpaLabel.textContent = "CPL medio";
  els.kpiCpa.textContent = money(cpa);
  els.kpiCpaHint.textContent = summary.conversions ? "Coste por lead" : "Sin leads";
  els.kpiRoasLabel.textContent = "Conversion rate";
  els.kpiRoas.textContent = percent(cvr);
  els.kpiRoasHint.textContent = `${number(summary.conversions, 1)} leads / ${number(summary.clicks)} clics`;
  els.kpiCtrLabel.textContent = "CTR";
  els.kpiCtr.textContent = percent(ctr);
  els.kpiCtrHint.textContent = `${number(summary.impressions)} impresiones`;
}

function renderUnitEconomics(campaigns) {
  const selectedClient = getSelectedClient();
  const days = currentWindowDays();

  if (selectedClient === "all") {
    els.closedCustomersInput.value = "";
    els.profitPerCustomerInput.value = "";
    els.closedCustomersInput.disabled = true;
    els.profitPerCustomerInput.disabled = true;
    els.unitEconomicsSummary.innerHTML = `<span>Elige un cliente para calcular CAC real.</span>`;
    return;
  }

  const economics = economicsFor(selectedClient, days);
  const summary = summarize(campaigns);
  const closedCustomers = safeNumber(economics.closedCustomers);
  const profitPerCustomer = safeNumber(economics.profitPerCustomer);
  const closeRate = ratio(closedCustomers, summary.conversions);
  const cac = ratio(summary.spend, closedCustomers);
  const acquisitionBudgetPct = 0.35;
  const targetCac = profitPerCustomer * acquisitionBudgetPct;
  const targetCpl = targetCac * closeRate;
  const estimatedProfit = closedCustomers * profitPerCustomer;
  const netAfterAds = estimatedProfit - summary.spend;
  const cacTone = closedCustomers && profitPerCustomer ? (cac <= targetCac ? "good" : "bad") : "";

  els.closedCustomersInput.disabled = false;
  els.profitPerCustomerInput.disabled = false;
  if (document.activeElement !== els.closedCustomersInput) {
    els.closedCustomersInput.value = closedCustomers || "";
  }
  if (document.activeElement !== els.profitPerCustomerInput) {
    els.profitPerCustomerInput.value = profitPerCustomer || "";
  }

  if (!closedCustomers || !profitPerCustomer) {
    els.unitEconomicsSummary.innerHTML = `<span>Introduce cierres y beneficio para activar CAC real.</span>`;
    return;
  }

  els.unitEconomicsSummary.innerHTML = `
    <div><span>CAC real</span><strong class="${cacTone}">${money(cac)}</strong></div>
    <div><span>Cierre</span><strong>${percent(closeRate)}</strong></div>
    <div><span>CPL objetivo</span><strong>${money(targetCpl)}</strong></div>
    <div><span>Margen neto ads</span><strong class="${netAfterAds >= 0 ? "good" : "bad"}">${money(netAfterAds)}</strong></div>
  `;
}

function updateModeState() {
  const ecommerce = dashboardMode === "ecommerce";
  els.leadGenMode.classList.toggle("is-active", !ecommerce);
  els.ecommerceMode.classList.toggle("is-active", ecommerce);
  els.leadGenMode.setAttribute("aria-pressed", String(!ecommerce));
  els.ecommerceMode.setAttribute("aria-pressed", String(ecommerce));
  els.modeDescription.textContent = ecommerce
    ? "KPIs orientados a ventas, ingresos, ROAS y ticket medio."
    : "KPIs orientados a captacion de leads, CPL y tasa de conversion.";
}

function setDashboardMode(mode) {
  dashboardMode = mode === "ecommerce" ? "ecommerce" : "leadgen";
  saveMode();
  render();
  showToast(dashboardMode === "ecommerce" ? "Vista Ecommerce activada" : "Vista Lead Gen activada");
}

function handleEconomicsInput() {
  const selectedClient = getSelectedClient();
  if (selectedClient === "all") return;
  setEconomicsFor(selectedClient, {
    closedCustomers: els.closedCustomersInput.value,
    profitPerCustomer: els.profitPerCustomerInput.value
  });
  render();
}

function renderCampaignDecisions(campaigns) {
  const groups = {
    scale: campaigns.filter((campaign) => campaign.decision === "scale"),
    hold: campaigns.filter((campaign) => campaign.decision === "hold"),
    cut: campaigns.filter((campaign) => campaign.decision === "cut")
  };

  els.scaleCount.textContent = groups.scale.length;
  els.holdCount.textContent = groups.hold.length;
  els.cutCount.textContent = groups.cut.length;
  els.scaleList.innerHTML = renderDecisionCards(groups.scale, "scale");
  els.holdList.innerHTML = renderDecisionCards(groups.hold, "hold");
  els.cutList.innerHTML = renderDecisionCards(groups.cut, "cut");
}

function renderDecisionCards(campaigns, tone) {
  if (!campaigns.length) return `<div class="empty-state">Sin campanas en esta columna</div>`;
  return campaigns
    .sort((a, b) => b.spend - a.spend)
    .map(
      (campaign) => `
        <article class="decision-card">
          <div class="decision-title">
            <div>
              <strong>${escapeHtml(campaign.campaign)}</strong>
              <span>${escapeHtml(campaign.client)} · ${escapeHtml(campaign.channel)}</span>
            </div>
            <span class="badge ${tone}">${campaign.budgetMove}</span>
          </div>
          <div class="decision-metrics">
            <div class="metric-pill"><span>Score</span><strong>${number(campaign.scoring?.total || 0, 0)}</strong></div>
            <div class="metric-pill"><span>${dashboardMode === "ecommerce" ? "ROAS" : "CPL"}</span><strong>${dashboardMode === "ecommerce" ? `${number(campaign.roas, 2)}x` : money(campaign.cpa)}</strong></div>
            <div class="metric-pill"><span>Conv.</span><strong>${number(campaign.conversions, 1)}</strong></div>
          </div>
          <ul class="reason-list">
            ${campaign.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderAssets(assets) {
  const selected = els.assetActionFilter.value;
  const filtered = assets
    .filter((asset) => selected === "all" || asset.action === selected)
    .sort((a, b) => {
      const priority = { replace: 0, test: 1, keep: 2 };
      return priority[a.action] - priority[b.action] || a.strength - b.strength;
    });

  if (!filtered.length) {
    els.assetTable.innerHTML = `<tr><td colspan="6" class="empty-state">No hay assets para este filtro</td></tr>`;
    return;
  }

  els.assetTable.innerHTML = filtered
    .map(
      (asset) => `
        <tr>
          <td>
            <div class="asset-name">${escapeHtml(asset.asset)}</div>
            <div class="subtle">${number(asset.impressions)} impresiones · ${number(asset.clicks)} clics</div>
          </td>
          <td>${escapeHtml(asset.campaign)}</td>
          <td>${escapeHtml(asset.asset_type)}</td>
          <td>
            <div class="score-line">
              <span>${number(asset.strength)} / 100</span>
              <div class="bar"><span style="width:${asset.strength}%"></span></div>
            </div>
            <div class="subtle">CTR ${percent(asset.ctr)} · ROAS ${number(asset.roas, 2)}x</div>
          </td>
          <td><span class="action-pill action-${asset.action}">${asset.actionText}</span></td>
          <td>${asset.reasons.map(escapeHtml).join(", ")}</td>
        </tr>
      `
    )
    .join("");
}

function renderKeywords(keywords) {
  const top = [...keywords]
    .filter((keyword) => keyword.conversions > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  const watch = [...keywords]
    .filter((keyword) => keyword.needsReview)
    .sort((a, b) => b.spend - a.spend)
    .slice(0, 5);

  els.topKeywords.innerHTML = renderKeywordList(top, "No hay keywords ganadoras todavia");
  els.watchKeywords.innerHTML = renderKeywordList(watch, "Sin keywords criticas");
}

function renderKeywordList(keywords, emptyText) {
  if (!keywords.length) return `<div class="empty-state">${emptyText}</div>`;
  return keywords
    .map(
      (keyword) => `
        <article class="rank-item">
          <div class="rank-top">
            <strong>${escapeHtml(keyword.keyword)}</strong>
            <span class="badge ${keyword.needsReview ? "cut" : "scale"}">${escapeHtml(keyword.recommendation)}</span>
          </div>
          <div class="rank-meta">
            <span>${escapeHtml(keyword.client)}</span>
            <span>${escapeHtml(keyword.match_type || "sin tipo")}</span>
            <span>${money(keyword.cpa)} CPA</span>
            <span>${number(keyword.roas, 2)}x ROAS</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPriorities(campaigns, assets, keywords, searchTerms) {
  const priorities = [];
  const scaleCount = campaigns.filter((campaign) => campaign.decision === "scale").length;
  const cutCount = campaigns.filter((campaign) => campaign.decision === "cut").length;
  const replaceAssets = assets.filter((asset) => asset.action === "replace").length;
  const negatives = searchTerms.filter((term) => term.shouldNegative).length;
  const riskyKeywords = keywords.filter((keyword) => keyword.needsReview).length;

  if (scaleCount) priorities.push(["green", `${scaleCount} campana(s) listas para escalar`, "Subida gradual con control de CPA/ROAS."]);
  if (cutCount) priorities.push(["red", `${cutCount} campana(s) para parar o rehacer`, "Detener antes de seguir acumulando gasto malo."]);
  if (replaceAssets) priorities.push(["amber", `${replaceAssets} asset(s) piden cambio`, "Prioridad en imagenes, titulos o descripciones con bajo CTR."]);
  if (negatives) priorities.push(["red", `${negatives} negativa(s) sugeridas`, "Exporta el CSV y revisa antes de aplicar."]);
  if (riskyKeywords) priorities.push(["amber", `${riskyKeywords} keyword(s) caras`, "Revisar concordancia, puja y terminos asociados."]);
  if (!priorities.length) priorities.push(["blue", "Cuenta estable", "No hay alertas graves con los datos actuales."]);

  els.priorityList.innerHTML = priorities
    .slice(0, 6)
    .map(
      ([tone, title, detail]) => `
        <article class="priority-item">
          <span class="priority-dot" style="background: var(--${tone})"></span>
          <div><strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span></div>
        </article>
      `
    )
    .join("");
}

function renderConversionActions(actions) {
  const totals = new Map();
  for (const action of actions) {
    const name = action.conversion_action_name || "Conversion sin nombre";
    const current = totals.get(name) || {
      name,
      conversions: 0,
      value: 0
    };
    current.conversions += safeNumber(action.conversions);
    current.value += safeNumber(action.conversion_value);
    totals.set(name, current);
  }

  const sorted = [...totals.values()]
    .filter((action) => action.conversions > 0)
    .sort((a, b) => b.conversions - a.conversions)
    .slice(0, 8);

  if (!sorted.length) {
    els.conversionActionList.innerHTML = `<div class="empty-state">Sin conversiones registradas</div>`;
    return;
  }

  els.conversionActionList.innerHTML = sorted
    .map(
      (action) => `
        <article class="conversion-item">
          <span>${escapeHtml(action.name)}</span>
          <strong>${number(action.conversions, 1)}</strong>
        </article>
      `
    )
    .join("");
}

function renderNegatives(searchTerms) {
  const negatives = searchTerms
    .filter((term) => term.shouldNegative)
    .sort((a, b) => b.spend - a.spend)
    .slice(0, 7);

  if (!negatives.length) {
    els.negativeTerms.innerHTML = `<div class="empty-state">Sin negativas sugeridas</div>`;
    return;
  }

  els.negativeTerms.innerHTML = negatives
    .map(
      (term) => `
        <article class="term-item">
          <div class="term-head">
            <strong>${escapeHtml(term.search_term)}</strong>
            <span>${term.matchType}</span>
          </div>
          <div class="term-detail">
            ${escapeHtml(term.client)} · ${escapeHtml(term.campaign)}<br />
            ${money(term.spend)} sin convertir · ${escapeHtml(term.reason)}
          </div>
        </article>
      `
    )
    .join("");
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((line) => line.trim());
  if (!lines.length) return [];
  const [headerLine, ...bodyLines] = lines;
  const headers = parseCsvLine(headerLine).map((header) => normalizeText(header).replace(/\s+/g, "_"));
  return bodyLines.map((line) => {
    const values = parseCsvLine(line);
    return headers.reduce((row, header, index) => {
      const value = values[index] ?? "";
      row[header] = coerceCsvValue(value);
      return row;
    }, {});
  });
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

function coerceCsvValue(value) {
  const cleaned = String(value).trim();
  if (!cleaned) return "";
  const decimal = cleaned.replace(/\./g, "").replace(",", ".");
  if (/^-?\d+([,.]\d+)?$/.test(cleaned)) return Number(decimal);
  return cleaned;
}

function exportCsv(filename, items, fields) {
  if (!items.length) {
    showToast("No hay datos para exportar");
    return;
  }
  const header = fields.map((field) => field.label).join(",");
  const body = items
    .map((item) =>
      fields
        .map((field) => {
          const rawValue = field.value(item);
          const safeValue = String(rawValue ?? "").replace(/"/g, '""');
          return `"${safeValue}"`;
        })
        .join(",")
    )
    .join("\n");
  const blob = new Blob([`${header}\n${body}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("CSV exportado");
}

function handleCsvUpload(event) {
  const [file] = event.target.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const parsed = parseCsv(String(reader.result || ""));
    const valid = parsed.filter((row) => row.entity && row.client);
    if (!valid.length) {
      showToast("El CSV necesita columnas entity y client");
      return;
    }
    rows = valid;
    dataSource = "csv";
    saveRows();
    render();
    showToast(`${valid.length} filas importadas`);
  };
  reader.readAsText(file);
  event.target.value = "";
}

function exportPlan() {
  const campaignRows = currentRows("campaign");
  const benchmarks = buildClientBenchmarks(campaignRows);
  const campaigns = campaignRows.map((campaign) => enrichCampaign(campaign, benchmarks));
  exportCsv("plan-optimizacion-campanas.csv", campaigns, [
    { label: "cliente", value: (item) => item.client },
    { label: "campana", value: (item) => item.campaign },
    { label: "decision", value: (item) => item.decision },
    { label: "accion", value: (item) => item.action },
    { label: "cambio_presupuesto", value: (item) => item.budgetMove },
    { label: "gasto", value: (item) => item.spend },
    { label: "conversiones", value: (item) => item.conversions },
    { label: "cpa", value: (item) => item.cpa },
    { label: "roas", value: (item) => item.roas },
    { label: "motivos", value: (item) => item.reasons.join(" | ") }
  ]);
}

function exportKeywords() {
  const keywords = currentRows("keyword").map(enrichKeyword);
  exportCsv("keywords-google-ads.csv", keywords, [
    { label: "cliente", value: (item) => item.client },
    { label: "campana", value: (item) => item.campaign },
    { label: "keyword", value: (item) => item.keyword },
    { label: "concordancia", value: (item) => item.match_type },
    { label: "recomendacion", value: (item) => item.recommendation },
    { label: "gasto", value: (item) => item.spend },
    { label: "conversiones", value: (item) => item.conversions },
    { label: "cpa", value: (item) => item.cpa },
    { label: "roas", value: (item) => item.roas }
  ]);
}

function exportNegatives() {
  const negatives = currentRows("search_term").map(auditSearchTerm).filter((term) => term.shouldNegative);
  exportCsv("negativas-sugeridas.csv", negatives, [
    { label: "cliente", value: (item) => item.client },
    { label: "campana", value: (item) => item.campaign },
    { label: "termino", value: (item) => item.search_term },
    { label: "concordancia_negativa", value: (item) => item.matchType },
    { label: "motivo", value: (item) => item.reason },
    { label: "gasto", value: (item) => item.spend }
  ]);
}

async function checkApiStatus() {
  setBusy(els.checkApi, true, "Comprobando...");
  try {
    const status = await apiGet("/api/google-ads/status");
    updateSourceState(status);
    showToast(status.configured ? "API configurada" : "Faltan credenciales en .env");
    return status;
  } catch (error) {
    showToast(error.message);
    return null;
  } finally {
    setBusy(els.checkApi, false, "Comprobar API");
  }
}

async function loadApiData(options = {}) {
  const days = currentWindowDays();
  const label = options.auto ? "Actualizando..." : "Cargando...";
  setBusy(els.loadApiData, true, label);
  try {
    const snapshot = await apiGet(`/api/google-ads/snapshot?days=${encodeURIComponent(days)}`);
    if (!snapshot.rows?.length) {
      showToast("La API respondio, pero no devolvio campanas");
      return;
    }
    rows = snapshot.rows;
    dataSource = "api";
    saveRows();
    saveMeta(snapshot);
    render();
    const errorText = snapshot.errors?.length ? ` · ${snapshot.errors.length} cuenta(s) con aviso` : "";
    showToast(`${snapshot.rows.length} datos reales cargados${errorText}`);
  } catch (error) {
    showToast(error.message);
  } finally {
    setBusy(els.loadApiData, false, "Cargar datos reales");
  }
}

function saveMeta(snapshot) {
  localStorage.setItem(
    metaKey,
    JSON.stringify({
      source: snapshot.source,
      days: snapshot.days,
      pulledAt: snapshot.pulledAt,
      rowCount: snapshot.rows?.length || 0,
      accountCount: snapshot.accounts?.length || 0,
      errorCount: snapshot.errors?.length || 0
    })
  );
}

function shouldAutoLoadApi(status) {
  if (!status?.configured) return false;
  try {
    const meta = JSON.parse(localStorage.getItem(metaKey) || "null");
    if (dataSource !== "api" || !meta?.pulledAt) return true;
    if (String(meta.days) !== currentWindowDays()) return true;
    const ageMs = Date.now() - new Date(meta.pulledAt).getTime();
    return ageMs > 6 * 60 * 60 * 1000;
  } catch {
    return true;
  }
}

async function handleWindowChange() {
  const custom = els.windowFilter.value === "custom";
  els.customWindowLabel.classList.toggle("is-hidden", !custom);
  if (custom) {
    els.customWindowInput.value = currentWindowDays();
  }

  if (dataSource === "api") {
    await loadApiData({ auto: true });
    return;
  }

  render();
  showToast(`Vista cambiada a ${currentWindowLabel()}`);
}

async function initApi() {
  const status = await checkApiStatus();
  if (shouldAutoLoadApi(status)) {
    await loadApiData({ auto: true });
  }
}

async function apiGet(path) {
  const response = await fetch(path, { headers: { Accept: "application/json" } });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || data.error || "No se pudo conectar con el backend");
  }
  return data;
}

function setBusy(button, busy, text) {
  button.disabled = busy;
  button.textContent = text;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 2600);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

els.clientFilter.addEventListener("change", render);
els.windowFilter.addEventListener("change", handleWindowChange);
els.customWindowInput.addEventListener("change", handleWindowChange);
els.assetActionFilter.addEventListener("change", render);
els.csvInput.addEventListener("change", handleCsvUpload);
els.resetDemo.addEventListener("click", () => {
  rows = demoRows;
  dataSource = "demo";
  saveRows();
  render();
  showToast("Datos demo restaurados");
});
els.exportPlan.addEventListener("click", exportPlan);
els.exportKeywords.addEventListener("click", exportKeywords);
els.exportNegatives.addEventListener("click", exportNegatives);
els.checkApi.addEventListener("click", checkApiStatus);
els.loadApiData.addEventListener("click", loadApiData);
els.leadGenMode.addEventListener("click", () => setDashboardMode("leadgen"));
els.ecommerceMode.addEventListener("click", () => setDashboardMode("ecommerce"));
els.closedCustomersInput.addEventListener("input", handleEconomicsInput);
els.profitPerCustomerInput.addEventListener("input", handleEconomicsInput);

render();
initApi();
