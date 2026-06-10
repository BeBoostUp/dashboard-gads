# Subir Dahsboard Gads online con Render

Render es la opcion mas simple para esta fase porque mantiene el servidor Node encendido y permite refrescar datos automaticamente.

## 1. Crear repositorio privado en GitHub

1. Entra en GitHub.
2. Crea un repositorio privado llamado `dahsboard-gads`.
3. Sube esta carpeta al repositorio.

No subas el archivo `.env`. Ya esta protegido por `.gitignore`.

## 2. Crear el servicio en Render

1. Entra en Render.
2. Pulsa `New` y despues `Blueprint`.
3. Conecta el repositorio `dahsboard-gads`.
4. Render detectara el archivo `render.yaml`.
5. Cuando te pida variables privadas, copia los valores de tu `.env`.

Variables privadas necesarias:

```txt
GOOGLE_ADS_DEVELOPER_TOKEN
GOOGLE_ADS_CLIENT_ID
GOOGLE_ADS_CLIENT_SECRET
GOOGLE_ADS_REFRESH_TOKEN
GOOGLE_ADS_LOGIN_CUSTOMER_ID
GOOGLE_ADS_TARGET_MCC_ID
```

## 3. Valores recomendados online

Estos ya van preparados en `render.yaml`:

```txt
HOST=0.0.0.0
GOOGLE_ADS_AUTO_PRIME=true
GOOGLE_ADS_REFRESH_INTERVAL_MINUTES=360
GOOGLE_ADS_PER_ACCOUNT_LIMIT=50
```

## 4. Como se usara despues

Render te dara una URL del estilo:

```txt
https://dahsboard-gads.onrender.com
```

Esa sera la URL que abras siempre. Ya no dependera de `localhost`, Terminal ni de que tu Mac este encendido.

## Nota importante

En esta fase la cache vive en memoria del servidor. Funciona para validar y usar el dashboard, pero mas adelante conviene meter Supabase/Postgres para guardar historico diario, CAC por cliente y scoring avanzado.
