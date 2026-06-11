# Subir Dahsboard Gads online con Vercel

Esta version esta adaptada a Vercel:

- El dashboard se sirve como web estatica desde la raiz.
- Las rutas `/api/google-ads/*` funcionan como Vercel Functions.
- El cron `/api/cron/refresh` se ejecuta cada 6 horas.

## 1. Importar proyecto

1. Entra en Vercel.
2. Pulsa `Add New` y despues `Project`.
3. Importa el repo `BeBoostUp/dashboard-gads`.
4. Framework preset: `Other`.
5. Build command: vacio.
6. Output directory: vacio.

## 2. Variables de entorno

Anade estas variables en Vercel antes de desplegar:

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

`CRON_SECRET` puede ser cualquier texto largo inventado. Vercel Cron podra ejecutar la ruta automaticamente; el secreto protege llamadas manuales externas.

## 3. Desplegar

Pulsa `Deploy`. Cuando termine, abre la URL de produccion de Vercel.

## Nota importante

En Vercel las funciones no son un servidor permanente. La cache en memoria puede ayudar en ejecuciones calientes, pero no sustituye a una base de datos. Para historico diario, scoring avanzado y auto-refresco fiable entre cuentas, la siguiente fase deberia usar Supabase, Postgres, Vercel KV o similar.
