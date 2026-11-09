(() => {
  "use strict";

  // These are fictional UI examples. This script performs no network requests.
  const snapshots = [
    { listeners: 18, peak: 42, bitrate: 128, track: "Morning Light — Sample Artist", status: "DEMO ONLINE" },
    { listeners: 23, peak: 42, bitrate: 128, track: "A New Day — Sample Artist", status: "DEMO ONLINE" },
    { listeners: 15, peak: 42, bitrate: 128, track: "Quiet Moments — Sample Artist", status: "DEMO ONLINE" },
    { listeners: 0, peak: 42, bitrate: 0, track: "No sample track", status: "DEMO OFFLINE" }
  ];

  const translations = {
    en: {
      banner: "DEMO MODE · FICTIONAL SAMPLE DATA · NOT CONNECTED TO LIVE MONITORING",
      title: "Radio Transmission Monitor",
      subtitle: "Static dashboard demonstration",
      playerTitle: "RADIO FE 990 AM · LIVE AUDIO",
      playerDescription: "Listen to the same public stream used by the companion Radio FE player. Dashboard metrics below are fictional.",
      streamNote: "The audio is a real public stream; the dashboard metrics are not real telemetry.",
      statsTitle: "MONITORING OVERVIEW · SIMULATED",
      metric: "METRIC", sampleValue: "SAMPLE VALUE",
      listeners: "Listeners", peak: "Peak audience", bitrate: "Bitrate",
      track: "Sample track", state: "Sample status",
      aboutTitle: "ABOUT THIS DEMO",
      aboutOne: "This portfolio preview demonstrates the dashboard interface only.",
      aboutTwo: "No production server is queried. Values rotate between predefined fictional snapshots to illustrate a changing dashboard.",
      aboutThree: "The live audio stream is independent from the simulated monitoring values. Production infrastructure is not exposed here.",
      source: "View source on GitHub",
      loading: "Loading fictional sample values…",
      stateUpdate: (n, total, time) => `Sample state ${n} of ${total} · Last visual update: ${time}`,
      online: "DEMO ONLINE", offline: "DEMO OFFLINE", none: "No sample track"
    },
    es: {
      banner: "MODO DEMO · DATOS FICTICIOS · SIN CONEXIÓN AL MONITOREO REAL",
      title: "Monitor de transmisión de radio",
      subtitle: "Demostración estática de un panel",
      playerTitle: "RADIO FE 990 AM · AUDIO EN VIVO",
      playerDescription: "Escucha la misma señal pública que utiliza el reproductor complementario de Radio FE. Las métricas del panel son ficticias.",
      streamNote: "El audio sí es una señal pública real; las métricas del panel no son telemetría real.",
      statsTitle: "RESUMEN DE MONITOREO · SIMULADO",
      metric: "MÉTRICA", sampleValue: "VALOR DE EJEMPLO",
      listeners: "Oyentes", peak: "Audiencia máxima", bitrate: "Bitrate",
      track: "Pista de ejemplo", state: "Estado de ejemplo",
      aboutTitle: "SOBRE ESTA DEMOSTRACIÓN",
      aboutOne: "Esta vista de portafolio demuestra únicamente la interfaz del panel.",
      aboutTwo: "No consulta ningún servidor de producción. Los valores alternan entre ejemplos ficticios predefinidos para mostrar cómo podría actualizarse un panel.",
      aboutThree: "La señal de audio en vivo es independiente de los valores simulados. La infraestructura de producción no se expone aquí.",
      source: "Ver código en GitHub",
      loading: "Cargando valores ficticios…",
      stateUpdate: (n, total, time) => `Estado de ejemplo ${n} de ${total} · Última actualización visual: ${time}`,
      online: "DEMO EN LÍNEA", offline: "DEMO FUERA DE LÍNEA", none: "Sin pista de ejemplo"
    }
  };

  const elements = {
    listeners: document.getElementById("listeners-value"),
    peak: document.getElementById("peak-value"),
    bitrate: document.getElementById("bitrate-value"),
    track: document.getElementById("song-value"),
    status: document.getElementById("status-value"),
    updated: document.getElementById("last-update")
  };

  let language = "en";
  let index = 0;

  function applyLanguage(nextLanguage) {
    language = translations[nextLanguage] ? nextLanguage : "en";
    const dictionary = translations[language];
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dictionary[key]) node.textContent = dictionary[key];
    });
    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    render();
  }

  function render() {
    const sample = snapshots[index];
    const dictionary = translations[language];
    elements.listeners.textContent = String(sample.listeners);
    elements.peak.textContent = String(sample.peak);
    elements.bitrate.textContent = sample.bitrate ? sample.bitrate + " kbps" : "—";
    elements.track.textContent = sample.track === "No sample track" ? dictionary.none : sample.track;
    elements.status.textContent = sample.status === "DEMO OFFLINE" ? dictionary.offline : dictionary.online;
    elements.status.classList.toggle("offline", sample.status === "DEMO OFFLINE");
    elements.updated.textContent = dictionary.stateUpdate(index + 1, snapshots.length, new Date().toLocaleTimeString());
  }

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  applyLanguage("en");
  window.setInterval(() => {
    index = (index + 1) % snapshots.length;
    render();
  }, 5000);
})();