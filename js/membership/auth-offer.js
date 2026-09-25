let panelRenderer = null;
let onOfferComplete = null;

export function configureAuthOffer({ renderPanels }) {
  panelRenderer = renderPanels;
}

export function registerAuthOfferCompleteHandler(handler) {
  onOfferComplete = handler;
}

export function renderAuthOfferPanels() {
  const freeHost = document.getElementById("dpaam-auth-offer-free");
  const paidHost = document.getElementById("dpaam-auth-offer-paid");
  if (!freeHost || !paidHost || !panelRenderer) return;
  panelRenderer(freeHost, paidHost);
}

export function isAuthOfferViewVisible() {
  const offer = document.getElementById("dpaam-auth-modal-offer");
  return Boolean(offer && !offer.hidden);
}

export async function completeAuthOfferAndEnterDashboard() {
  await onOfferComplete?.();
}

export function setAuthOfferLayoutActive(active) {
  document.getElementById("dpaam-auth")?.classList.toggle("dpaam-auth--offer", active);
}
