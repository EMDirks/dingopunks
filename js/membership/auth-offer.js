const RECENT_ACCOUNT_MS = 24 * 60 * 60 * 1000;

let panelRenderer = null;
let onOfferComplete = null;

export function configureAuthOffer({ renderPanels }) {
  panelRenderer = renderPanels;
}

export function registerAuthOfferCompleteHandler(handler) {
  onOfferComplete = handler;
}

// Only picks the first skeleton; ensureUserProfile's `created` decides whether
// the offer actually renders, so it appears exactly once per account.
export function isRecentAccount(user) {
  const created = user?.metadata?.creationTime;
  if (!created) return false;
  return Date.now() - new Date(created).getTime() < RECENT_ACCOUNT_MS;
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
