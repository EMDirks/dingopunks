export function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return ch;
    }
  });
}

export function setButtonLoading(button, loading, loadingLabel, { useHtml = false } = {}) {
  if (!button) return;
  const storeKey = useHtml ? "defaultHtml" : "defaultLabel";
  const restoreKey = useHtml ? "innerHTML" : "textContent";
  if (!button.dataset[storeKey]) {
    button.dataset[storeKey] = useHtml ? button.innerHTML : button.textContent.trim();
  }
  button.disabled = loading;
  button.classList.toggle("is-loading", loading);
  button.setAttribute("aria-busy", String(loading));
  if (loading) {
    button.textContent = loadingLabel;
  } else {
    button[restoreKey] = button.dataset[storeKey];
  }
}
