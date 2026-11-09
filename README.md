# Radio Transmission Monitor — Engineering Demo

**Bilingual project documentation / Documentación bilingüe**

## English

### Overview
A public, static portfolio demonstration of a radio transmission monitoring dashboard. It is paired with the Radio FE 990 AM web player and illustrates how a monitoring interface can present operational signals from a streaming environment.

### What this repository actually does
- Renders a responsive terminal-inspired dashboard.
- Rotates through predefined fictional listener, peak-audience, bitrate, track and status snapshots.
- Displays an explicit demo banner.
- Makes no requests to the production VPS, Nginx, Omnia system, private Transmission monitor or a database.
- Does not collect real audience analytics or represent sample numbers as production telemetry.

### Related audio player
The companion player uses the same public audio stream configured for Radio FE 990 AM. The player and this dashboard are separate static demonstrations; the dashboard metrics remain simulated and are not derived from the actual audio stream.

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
Demostración pública y estática para portafolio de un panel de monitoreo de transmisión de radio. Está relacionada con el reproductor web de Radio FE 990 AM y muestra cómo una interfaz de monitoreo puede presentar señales operativas de un entorno de streaming.

### Lo que realmente hace este repositorio
- Presenta un panel adaptable inspirado en interfaces de terminal.
- Alterna entre valores ficticios predefinidos de oyentes, audiencia máxima, bitrate, pista y estado.
- Muestra un aviso explícito de modo demostración.
- No realiza solicitudes al VPS de producción, Nginx, sistema Omnia, monitor privado de Transmission ni a una base de datos.
- No recopila estadísticas reales de audiencia ni presenta los valores de ejemplo como telemetría de producción.

### Reproductor de audio relacionado
El reproductor complementario utiliza la misma señal pública configurada para Radio FE 990 AM. El reproductor y este panel son demostraciones estáticas independientes; las métricas del panel siguen siendo simuladas y no se obtienen del audio real.

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
