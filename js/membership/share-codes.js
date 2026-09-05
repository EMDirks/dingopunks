import {
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import {
  cancelShareCode,
  createShareCode,
  db,
} from "../firebase-init.js";
import { games } from "../games.js";
import { state } from "./context.js";

const GENERIC_ERROR = "Something went wrong. Please try again.";
const validGameIds = new Set(games.map((game) => game.id));

let activeUid = null;
let codesLoaded = false;

function timestampMs(value) {
  if (value && typeof value.toMillis === "function") return value.toMillis();
  if (typeof value === "number") return value;
  return 0;
}

function sortActiveCodes() {
  state.activeCodes.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
}

function upsertActiveCode({ gameId, code, expiresAt, createdAt }) {
  const previous = state.activeCodes.find((entry) => entry.gameId === gameId);
  const entry = {
    gameId,
    code,
    expiresAt,
    createdAt: createdAt ?? previous?.createdAt ?? Date.now(),
  };
  const index = state.activeCodes.findIndex((item) => item.gameId === gameId);
  if (index >= 0) {
    state.activeCodes[index] = entry;
  } else {
    state.activeCodes.push(entry);
  }
  sortActiveCodes();
}

export function shareCodeErrorMessage(error) {
  const code = error?.code ?? "";
  if (code === "functions/resource-exhausted") {
    return (
      error.message ||
      "You've reached 20 active share codes. Cancel an existing code before sharing another room."
    );
  }
  if (code === "functions/permission-denied") {
    return error.message || "An All-Access membership is required to share this room.";
  }
  if (code === "functions/unauthenticated") {
    return "Sign in to share escape rooms.";
  }
  if (code === "functions/invalid-argument" || code === "functions/not-found") {
    return error.message || GENERIC_ERROR;
  }
  return GENERIC_ERROR;
}

export async function loadActiveCodes(uid) {
  activeUid = uid;
  codesLoaded = false;

  const snapshot = await getDocs(
    query(collection(db, "codes"), where("uid", "==", uid)),
  );
  const now = Date.now();

  state.activeCodes = snapshot.docs
    .map((docSnap) => {
      const gameId = docSnap.get("gameId");
      if (typeof gameId !== "string" || !validGameIds.has(gameId)) return null;
      const expiresAt = timestampMs(docSnap.get("expiresAt"));
      if (!expiresAt || expiresAt <= now) return null;
      return {
        gameId,
        code: docSnap.id,
        expiresAt,
        createdAt: timestampMs(docSnap.get("createdAt")),
      };
    })
    .filter(Boolean);

  sortActiveCodes();
  codesLoaded = true;
}

export function resetShareCodes() {
  activeUid = null;
  codesLoaded = false;
  state.activeCodes = [];
}

export async function invokeCreateShareCode(gameId) {
  if (!codesLoaded || !activeUid) {
    throw new Error("Share codes are not loaded yet.");
  }

  const existing = state.activeCodes.find(
    (entry) => entry.gameId === gameId && entry.expiresAt > Date.now(),
  );
  if (existing) return existing;

  const result = await createShareCode({ gameId });
  const { code, expiresAt } = result.data;
  const entry = { gameId, code, expiresAt, createdAt: Date.now() };
  upsertActiveCode(entry);
  return entry;
}

export function removeActiveCodeLocal(gameId) {
  const index = state.activeCodes.findIndex((item) => item.gameId === gameId);
  if (index < 0) return null;
  const entry = state.activeCodes[index];
  state.activeCodes = state.activeCodes.filter((item) => item.gameId !== gameId);
  return entry;
}

export function restoreActiveCode(entry) {
  if (!entry) return;
  upsertActiveCode(entry);
}

export async function invokeCancelShareCodeRemote(code) {
  if (!codesLoaded || !activeUid) {
    throw new Error("Share codes are not loaded yet.");
  }
  await cancelShareCode({ code });
}
