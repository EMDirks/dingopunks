import { auth } from "../firebase-init.js";

const OFFER_COMPLETE_PREFIX = "dpaam-offer-complete:";
const RECENT_ACCOUNT_MS = 24 * 60 * 60 * 1000;

let panelRenderer = null;
let onOfferComplete = null;

export function configureAuthOffer({ renderPanels }) {
  panelRenderer = renderPanels;
}

export function registerAuthOfferCompleteHandler(handler) {
  onOfferComplete = handler;
}

export function shouldShowAuthOfferStep(user) {
  if (!user?.uid) return false;
  try {
    if (localStorage.getItem(`${OFFER_COMPLETE_PREFIX}${user.uid}`)) return false;
  } catch {
    return false;
  }
  const created = user.metadata?.creationTime;
  if (!created) return false;
  return Date.now() - new Date(created).getTime() < RECENT_ACCOUNT_MS;
}

export function markAuthOfferStepComplete(uid) {
  if (!uid) return;
  try {
    localStorage.setItem(`${OFFER_COMPLETE_PREFIX}${uid}`, "1");
  } catch {
    /* ignore quota / private mode */
  }
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
  markAuthOfferStepComplete(auth.currentUser?.uid);
  await onOfferComplete?.();
}

export function setAuthOfferLayoutActive(active) {
  document.getElementById("dpaam-auth")?.classList.toggle("dpaam-auth--offer", active);
}
