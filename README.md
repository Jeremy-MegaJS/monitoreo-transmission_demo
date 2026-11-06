# Radio Transmission Monitor — Static Demo

**Bilingual documentation / Documentación bilingüe**

A standalone, static portfolio preview of a radio transmission monitoring dashboard. It uses fictional sample metrics and never contacts the production radio server.

Vista previa estática e independiente para portfolio de un panel de monitoreo de transmisión de radio. Utiliza métricas ficticias y nunca consulta el servidor real de radio.

## Live demo / Demo en línea

Once GitHub Pages is enabled, the site will be available at:

https://jeremy-megajs.github.io/monitoreo-transmission_demo/

Cuando GitHub Pages esté habilitado, el sitio estará disponible en esa dirección.

## Enable GitHub Pages / Activar GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Run the workflow from **Actions → Deploy static demo to GitHub Pages**, or push a new commit to `main`.

1. Abre **Settings → Pages** en este repositorio.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Ejecuta el flujo desde **Actions → Deploy static demo to GitHub Pages**, o sube un nuevo commit a `main`.

## What it demonstrates / Qué demuestra

- Listener count, peak audience, bitrate, track title and connection status.
- Rotating fictional snapshots to simulate changing metrics.
- Responsive terminal-inspired dashboard styling.
- No backend, database, production endpoint or real listener data.

- Cantidad de oyentes, pico de audiencia, bitrate, título de canción y estado de conexión.
- Datos ficticios rotativos para simular cambios en las métricas.
- Diseño adaptable inspirado en una interfaz de terminal.
- Sin backend, base de datos, endpoint de producción ni datos reales de audiencia.

## Local preview / Vista local

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

Abre `index.html` en un navegador o ejecuta el comando anterior y visita `http://localhost:8000`.

## Separation from production / Separación de producción

This repository is intentionally independent from `monitoreo-transmission`. It contains only the static demo and its visual assets. The production monitor remains in the original repository and is not modified by this demo.

Este repositorio es independiente de `monitoreo-transmission`. Solo contiene la demo estática y sus recursos visuales. El monitor de producción permanece en el repositorio original y esta demo no lo modifica.

All displayed measurements are fictional and must not be presented as real radio statistics.

Todas las métricas mostradas son ficticias y no deben presentarse como estadísticas reales de la radio.

## Author / Autor

Jeremy Torres — [GitHub](https://github.com/Jeremy-MegaJS)
