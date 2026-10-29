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
const FAVORITES_SAVE_ERROR = "Couldn't save favorites. Check your internet connection.";
const SETTINGS_SAVE_ERROR = "Couldn't save settings. Check your internet connection.";

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

// Writes the whole prefs doc from state, so a favorites save never drops the
// Bonus Missions setting and vice versa. The setting is stored only when off
// (missing means on), so favorites-only writes still pass the older rules.
function persistPrefs(uid) {
  const prefs = { favorites: state.favorites.slice() };
  if (state.showBonusMissions === false) {
    prefs.showBonusMissions = false;
  }
  return setDoc(doc(db, "userPrefs", uid), prefs);
}

async function persistFavorites(uid) {
  try {
    await persistPrefs(uid);
  } catch (error) {
    console.error("Failed to save favorites", error);
    showToast(FAVORITES_SAVE_ERROR);
  }
}

export async function loadUserPrefs(uid) {
  activeUid = uid;
  prefsLoaded = false;

  const snapshot = await getDoc(doc(db, "userPrefs", uid));
  const data = snapshot.exists() ? snapshot.data() : {};
  state.favorites = normalizeFavorites(data.favorites);
  // Missing means on: only an explicit false hides Bonus Missions.
  state.showBonusMissions = data.showBonusMissions !== false;

  prefsLoaded = true;
}

/**
 * Save the Bonus Missions setting right away (no debounce). Resolves to the
 * value that is now saved: the new one, or the previous one if the write failed.
 */
export async function saveShowBonusMissions(value) {
  if (!prefsLoaded || !activeUid) return state.showBonusMissions;

  const previous = state.showBonusMissions;
  state.showBonusMissions = value;

  try {
    await persistPrefs(activeUid);
  } catch (error) {
    console.error("Failed to save Bonus Missions setting", error);
    state.showBonusMissions = previous;
    showToast(SETTINGS_SAVE_ERROR);
    return previous;
  }

  showToast(value ? "Bonus Missions are turned on" : "Bonus Missions are turned off");
  return value;
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
  state.showBonusMissions = true;
}

window.addEventListener("pagehide", flushFavoritesSave);
