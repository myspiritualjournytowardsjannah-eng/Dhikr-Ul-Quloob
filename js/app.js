// Application entry point. Feature modules will be connected here as development progresses.
const status = document.querySelector("#app-status");

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch((error) => console.warn("Service worker registration unavailable:", error));
  });
}

if (status) status.textContent = "Bismillah — the project foundation is ready.";
