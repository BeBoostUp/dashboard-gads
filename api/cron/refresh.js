import { assertConfigured, normalizeDays, refreshSnapshot, sendJson } from "../../server.mjs";

export const config = {
  maxDuration: 300
};

export default async function handler(request, response) {
  if (request.method !== "GET") {
    sendJson(response, 405, { error: "METHOD_NOT_ALLOWED" });
    return;
  }

  const expectedSecret = process.env.CRON_SECRET;
  const authorization = request.headers.authorization || "";
  const isVercelCron = request.headers["user-agent"] === "vercel-cron/1.0";
  if (expectedSecret && !isVercelCron && authorization !== `Bearer ${expectedSecret}`) {
    sendJson(response, 401, { error: "UNAUTHORIZED" });
    return;
  }

  try {
    assertConfigured();
    const url = new URL(request.url || "/", `https://${request.headers.host || "localhost"}`);
    const days = normalizeDays(url.searchParams.get("days"));
    const snapshot = await refreshSnapshot(days);
    sendJson(response, 200, {
      ok: true,
      days,
      pulledAt: snapshot.pulledAt,
      rows: snapshot.rows?.length || 0,
      accounts: snapshot.accounts?.length || 0,
      errors: snapshot.errors?.length || 0
    });
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      ok: false,
      error: "CRON_REFRESH_FAILED",
      message: error.message || "No se pudo refrescar Google Ads"
    });
  }
}
