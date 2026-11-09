# Radio Transmission Monitor — Engineering Demo

**Bilingual project documentation / Documentación bilingüe**

## English

### Overview
A public, static portfolio demonstration of a radio transmission monitoring dashboard. It includes an embedded player for the same public Radio FE 990 AM audio stream. The dashboard metrics remain fictional and are not connected to the production monitoring system.

### What this repository actually does
- Renders a responsive terminal-inspired dashboard.
- Rotates through predefined fictional listener, peak-audience, bitrate, track and status snapshots.
- Displays an explicit demo banner.
- Makes no requests to the production VPS, Nginx, Omnia system, private Transmission monitor or a database.
- Does not collect real audience analytics or represent sample numbers as production telemetry.

### Related audio player
The dashboard embeds the same public audio stream configured for Radio FE 990 AM. Audio is live; monitoring figures are simulated and independent from the stream.

- Public reference player: https://giovannicastellon.github.io/radiofe990am/
- Related player source: https://github.com/Jeremy-MegaJS/radiofe990am
- Monitoring demo: https://jeremy-megajs.github.io/monitoreo-transmission_demo/

### Engineering context
The broader retransmission work involved Omnia, an Ubuntu VPS administered over SSH, Nginx, DuckDNS and HTTPS delivery. This demo documents the monitoring/presentation layer only. The private production repository monitoreo-transmission is deliberately separate and must never be connected to this public demo using production credentials.

### Technology
- HTML5, CSS3 and vanilla JavaScript.
- GitHub Actions and GitHub Pages deployment workflow.

### Local preview
Run python -m http.server 8000 from the repository root and open http://localhost:8000.

### Safety boundary
All displayed monitoring values are fictional. No real listener count, stream bitrate, current track, uptime or server health is exposed. Do not add production secrets, private IP addresses, logs, admin links or tokens.

## Español

### Descripción
Demostración pública y estática para portafolio de un panel de monitoreo de transmisión de radio. Incluye un reproductor integrado con la misma señal pública de audio de Radio FE 990 AM. Las métricas del panel son ficticias y no están conectadas al monitoreo de producción.

### Lo que realmente hace este repositorio
- Presenta un panel adaptable inspirado en interfaces de terminal.
- Alterna entre valores ficticios predefinidos de oyentes, audiencia máxima, bitrate, pista y estado.
- Muestra un aviso explícito de modo demostración.
- No realiza solicitudes al VPS de producción, Nginx, sistema Omnia, monitor privado de Transmission ni a una base de datos.
- No recopila estadísticas reales de audiencia ni presenta los valores de ejemplo como telemetría de producción.

### Reproductor de audio relacionado
El panel integra la misma señal pública de audio configurada para Radio FE 990 AM. El audio es real y en vivo; las cifras de monitoreo son simuladas e independientes de la señal.

- Reproductor público de referencia: https://giovannicastellon.github.io/radiofe990am/
- Código del reproductor relacionado: https://github.com/Jeremy-MegaJS/radiofe990am
- Demo de monitoreo: https://jeremy-megajs.github.io/monitoreo-transmission_demo/

### Contexto de ingeniería
El trabajo más amplio de retransmisión involucró Omnia, un VPS con Ubuntu administrado mediante SSH, Nginx, DuckDNS y entrega HTTPS. Esta demo documenta únicamente la capa de monitoreo y presentación. El repositorio privado de producción monitoreo-transmission permanece separado y nunca debe conectarse a esta demo pública utilizando credenciales de producción.

### Tecnologías
- HTML5, CSS3 y JavaScript puro.
- Flujo de despliegue GitHub Actions y GitHub Pages.

### Vista local
Ejecuta python -m http.server 8000 desde la raíz del repositorio y abre http://localhost:8000.

### Límite de seguridad
Todas las métricas mostradas son ficticias. No se expone la cantidad real de oyentes, bitrate de la señal, pista actual, disponibilidad ni estado de servidores. No agregues secretos de producción, IP privadas, registros, enlaces administrativos ni tokens.
