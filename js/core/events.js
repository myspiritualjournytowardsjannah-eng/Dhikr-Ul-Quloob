export function emitAppEvent(name, detail = {}) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}
