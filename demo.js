(() => {
  "use strict";

  // All values below are fictional examples. No network requests are made.
  const snapshots = [
    { listeners: 18, peak: 42, bitrate: 128, track: "Morning Light — Sample Artist", status: "DEMO ONLINE" },
    { listeners: 23, peak: 42, bitrate: 128, track: "A New Day — Sample Artist", status: "DEMO ONLINE" },
    { listeners: 15, peak: 42, bitrate: 128, track: "Quiet Moments — Sample Artist", status: "DEMO ONLINE" },
    { listeners: 0, peak: 42, bitrate: 0, track: "No sample track", status: "DEMO OFFLINE" }
  ];

  const elements = {
    listeners: document.getElementById("listeners-value"),
    peak: document.getElementById("peak-value"),
    bitrate: document.getElementById("bitrate-value"),
    track: document.getElementById("song-value"),
    status: document.getElementById("status-value"),
    updated: document.getElementById("last-update")
  };

  let index = 0;

  function render() {
    const sample = snapshots[index];
    elements.listeners.textContent = String(sample.listeners);
    elements.peak.textContent = String(sample.peak);
    elements.bitrate.textContent = sample.bitrate ? sample.bitrate + " kbps" : "—";
    elements.track.textContent = sample.track;
    elements.status.textContent = sample.status;
    elements.status.classList.toggle("offline", sample.status === "DEMO OFFLINE");
    elements.updated.textContent = "Sample state " + (index + 1) + " of " + snapshots.length
      + " · Last visual update: "
      + new Date().toLocaleTimeString();
    index = (index + 1) % snapshots.length;
  }

  render();
  window.setInterval(render, 5000);
})();