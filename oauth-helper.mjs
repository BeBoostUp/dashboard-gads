import http from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const env = loadDotEnv();
const clientId = env.GOOGLE_ADS_CLIENT_ID;
const clientSecret = env.GOOGLE_ADS_CLIENT_SECRET;
const redirectUri = "http://127.0.0.1:8787/oauth2callback";
const scope = "https://www.googleapis.com/auth/adwords";

if (!clientId || !clientSecret) {
  console.log("Rellena GOOGLE_ADS_CLIENT_ID y GOOGLE_ADS_CLIENT_SECRET en .env antes de seguir.");
  process.exit(1);
}

const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
authUrl.searchParams.set("client_id", clientId);
authUrl.searchParams.set("redirect_uri", redirectUri);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("scope", scope);
authUrl.searchParams.set("access_type", "offline");
authUrl.searchParams.set("prompt", "consent");

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url || "/", redirectUri);

  if (url.pathname !== "/oauth2callback") {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const code = url.searchParams.get("code");
  if (!code) {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Google no devolvio code.");
    return;
  }

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code"
      })
    });
    const tokenJson = await tokenResponse.json();
    if (!tokenResponse.ok) throw new Error(tokenJson.error_description || tokenJson.error || "OAuth error");

    console.log("\nRefresh token generado. Pegalo en tu .env:\n");
    console.log(`GOOGLE_ADS_REFRESH_TOKEN=${tokenJson.refresh_token || ""}\n`);

    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end("<h1>Refresh token generado</h1><p>Ya puedes volver a Codex y pegarlo en tu archivo .env.</p>");
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error.message);
    console.error(error.message);
  } finally {
    server.close();
  }
});

server.listen(8787, "127.0.0.1", () => {
  console.log("Abre esta URL en el navegador y acepta el permiso de Google Ads:\n");
  console.log(authUrl.toString());
  console.log("\nEsperando respuesta en http://127.0.0.1:8787/oauth2callback ...");
});

function loadDotEnv() {
  const envPath = join(root, ".env");
  const env = {};
  if (!existsSync(envPath)) return env;

  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/i);
    if (!match) continue;
    env[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
  return env;
}
