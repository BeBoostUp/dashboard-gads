# Dahsboard Gads

Dashboard para decidir que campanas escalar, mantener o parar, auditar assets, revisar keywords y preparar negativas.

## Abrir

Para usar solo demo/CSV puedes abrir `index.html` directamente en el navegador.

Para conectar Google Ads API usa el servidor local:

```bash
PORT=4174 node server.mjs
```

Abre `http://localhost:4174`.

## Conexion Google Ads API

1. Copia `.env.example` como `.env`.
2. Rellena `GOOGLE_ADS_DEVELOPER_TOKEN`.
3. Rellena `GOOGLE_ADS_CLIENT_ID` y `GOOGLE_ADS_CLIENT_SECRET` desde Google Cloud.
4. Rellena los MCC sin guiones:

```bash
GOOGLE_ADS_LOGIN_CUSTOMER_ID=tu_mcc_principal_o_el_mcc_que_autoriza
GOOGLE_ADS_TARGET_MCC_ID=mcc_interno_que_quieres_controlar
```

5. Genera el refresh token:

```bash
node oauth-helper.mjs
```

Abre la URL que imprime, acepta el permiso de Google Ads y pega el `GOOGLE_ADS_REFRESH_TOKEN` en `.env`.

6. Arranca el dashboard:

```bash
PORT=4174 node server.mjs
```

7. Pulsa `Comprobar API` y despues `Cargar datos reales`.

Si aparece el aviso `Google Ads API has not been used in project...`, abre este enlace con tu proyecto y pulsa `Enable`:

```txt
https://console.developers.google.com/apis/api/googleads.googleapis.com/overview
```

Despues espera uno o dos minutos y vuelve a probar `Comprobar API`.

El backend expone estos endpoints locales:

- `GET /api/google-ads/status`
- `GET /api/google-ads/access`
- `GET /api/google-ads/hierarchy`
- `GET /api/google-ads/snapshot?days=30`
- `GET /api/google-ads/snapshot?days=30&force=1`

El dashboard se actualiza solo al abrir si no hay datos reales o si la ultima lectura tiene mas de 6 horas. El servidor tambien guarda cache en memoria para que las recargas sean mas rapidas.

## Ponerlo online

Esta version esta adaptada para Vercel:

- El dashboard se sirve como web estatica.
- Las rutas `/api/google-ads/*` funcionan como Vercel Functions.
- `vercel.json` configura un cron cada 6 horas en `/api/cron/refresh`.

1. Importa el repo `BeBoostUp/dashboard-gads` en Vercel.
2. Usa framework preset `Other`.
3. Deja `Build command` y `Output directory` vacios.
4. Copia las variables privadas desde tu `.env`.

Variables privadas necesarias:

```txt
GOOGLE_ADS_DEVELOPER_TOKEN
GOOGLE_ADS_CLIENT_ID
GOOGLE_ADS_CLIENT_SECRET
GOOGLE_ADS_REFRESH_TOKEN
GOOGLE_ADS_LOGIN_CUSTOMER_ID
GOOGLE_ADS_TARGET_MCC_ID
GOOGLE_ADS_API_VERSION=v22
GOOGLE_ADS_PER_ACCOUNT_LIMIT=50
GOOGLE_ADS_REFRESH_INTERVAL_MINUTES=360
GOOGLE_ADS_AUTO_PRIME=false
CRON_SECRET
```

Guia paso a paso: `DEPLOY_VERCEL.md`.

Nota: en Vercel la cache en memoria puede desaparecer entre ejecuciones. Para historico diario y auto-refresco fiable entre usuarios, la siguiente fase deberia anadir Supabase/Postgres o Vercel KV.

## Scoring actual

El dashboard implementa una version MVP del documento `spec-google-ads-scoring-system.md.pdf` adaptada a los datos que hoy tenemos en memoria.

Decision documentada:

- Storage actual: memoria + `localStorage`, no Postgres todavia. Es suficiente para validar el scoring y el dashboard; para produccion multi-cliente estable, la spec recomienda Postgres/Supabase con Prisma.
- No hay Google Trends ni series diarias persistidas todavia. Por eso el IPM se mantiene neutral (`1.0`) y `trendScore` se queda en `50`.
- El target CPL/CPA sale de `target_cpa` si existe y parece real. Si no existe, usa el CPL medio del cliente como `historical_baseline`.
- Para evitar falsos objetivos, si `target_cpa` es igual al CPA actual calculado, se ignora porque probablemente viene de una lectura antigua del MVP.

Score compuesto:

| Subscore | Peso | Estado actual |
| --- | ---: | --- |
| performanceScore | 40% | CPA ajustado vs target CPA/CPL |
| trendScore | 20% | Neutral 50 hasta tener serie diaria |
| volumeScore | 15% | Conversiones / 30 |
| headroomScore | 15% | Max cuota perdida presupuesto/ranking |
| qualityScore | 10% | ROAS si hay valor, si no neutral 50 |

Veredictos:

| Score | Veredicto |
| ---: | --- |
| 80-100 | SCALE |
| 60-79 | MAINTAIN |
| 40-59 | OPTIMIZE |
| 20-39 | REVIEW |
| 0-19 | PAUSE |

En el dashboard de 3 columnas se mapea asi:

- `SCALE` -> Escalar
- `PAUSE` -> Parar
- `MAINTAIN`, `OPTIMIZE`, `REVIEW`, `INSUFFICIENT_DATA` -> Mantener

Protecciones actuales:

- Si hay muy pocas conversiones, el veredicto pasa a `INSUFFICIENT_DATA` y no se escala/pausa de forma agresiva.
- Cuando implementemos IPM real, mercado severo podra suavizar `PAUSE/REVIEW/OPTIMIZE` como indica la spec.

## Datos

Puedes usar `sample-google-ads-data.csv` como plantilla. La columna `entity` acepta:

- `campaign`
- `keyword`
- `search_term`
- `asset`

Columnas importantes:

- `client`, `campaign`, `channel`, `status`
- `spend`, `conversions`, `conversion_value`, `impressions`, `clicks`
- `budget`, `target_cpa`, `target_roas`, `lost_budget`, `lost_rank`
- `keyword`, `match_type`, `search_term`
- `asset_type`, `asset`, `strength`, `policy`

## Siguiente fase

El endpoint real ya trae jerarquia MCC, campanas, keywords, terminos de busqueda y assets de anuncios/PMax. La siguiente fase es ampliar negativas existentes, quality score, politicas y cambios aprobados.

Para automatizar cambios, conviene empezar con modo revision: el dashboard propone negativas, cambios de presupuesto y assets, y una persona aprueba antes de enviar mutaciones por API.

Con acceso Basic puedes trabajar con cuentas de prueba y produccion dentro del limite diario de operaciones de Google Ads API. Para cambios automaticos, revisa tambien el "permissible use" aprobado para tu token.

Referencias oficiales:

- https://developers.google.com/google-ads/api/docs/api-policy/access-levels
- https://developers.google.com/google-ads/api/docs/oauth/overview
- https://developers.google.com/google-ads/api/rest/auth
