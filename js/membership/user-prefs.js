import {
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { db } from "../firebase-init.js";
import { games } from "../games.js";
import { state } from "./context.js";
import { showToast } from "./toast.js";

const SAVE_DEBOUNCE_MS = 1000;
const FAVORITES_SAVE_ERROR =
  "We couldn't save your favorites. Check your connection.";

const validGameIds = new Set(games.map((game) => game.id));

let activeUid = null;
let prefsLoaded = false;
let saveTimer = null;

function normalizeFavorites(raw) {
  if (!Array.isArray(raw)) return [];

  const seen = new Set();
  const favorites = [];

  for (const id of raw) {
    if (typeof id !== "string" || !validGameIds.has(id) || seen.has(id)) continue;
    seen.add(id);
    favorites.push(id);
  }

  return favorites;
}

async function persistFavorites(uid) {
  const favorites = state.favorites.slice();

  try {
    await setDoc(doc(db, "userPrefs", uid), { favorites });
  } catch (error) {
    console.error("Failed to save favorites", error);
    showToast(FAVORITES_SAVE_ERROR);
  }
}

export async function loadUserPrefs(uid) {
  activeUid = uid;
  prefsLoaded = false;

  const snapshot = await getDoc(doc(db, "userPrefs", uid));
  state.favorites = snapshot.exists()
    ? normalizeFavorites(snapshot.data().favorites)
    : [];

  prefsLoaded = true;
}

export function scheduleFavoritesSave() {
  if (!prefsLoaded || !activeUid) return;

  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveTimer = null;
    void persistFavorites(activeUid);
  }, SAVE_DEBOUNCE_MS);
}

export function flushFavoritesSave() {
  if (!saveTimer || !activeUid) return;

  clearTimeout(saveTimer);
  saveTimer = null;
  void persistFavorites(activeUid);
}

export function resetUserPrefs() {
  activeUid = null;
  prefsLoaded = false;
  clearTimeout(saveTimer);
  saveTimer = null;
  state.favorites = [];
}

window.addEventListener("pagehide", flushFavoritesSave);
