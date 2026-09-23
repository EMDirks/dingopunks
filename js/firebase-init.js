// Shared Firebase Web SDK setup for the static membership and play pages.
// Firebase web config values identify this public app; they are not secrets.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  verifyBeforeUpdateEmail,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  connectFirestoreEmulator,
  doc,
  getDoc,
  initializeFirestore,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0r5j7_1LvnKJiKhi8toJ8TaF4C7kqtTc",
  authDomain: "dpaam-8864d.firebaseapp.com",
  projectId: "dpaam-8864d",
  storageBucket: "dpaam-8864d.firebasestorage.app",
  messagingSenderId: "587690096872",
  appId: "1:587690096872:web:6ee5d43e19f22907bdb15d",
  measurementId: "G-VP07JSF2MM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function isWebKitBrowser() {
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isMacSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
  return isIOS || isMacSafari;
}

// Safari 26.4+ can buffer Firestore stream completion frames for ~30 seconds.
// Force long polling until WebKit ships its fix:
// https://github.com/firebase/firebase-js-sdk/issues/9789
const db = initializeFirestore(
  app,
  isWebKitBrowser()
    ? { experimentalForceLongPolling: true, useFetchStreams: false }
    : {},
);
const firebaseFunctions = getFunctions(app);
const ensureUserProfile = httpsCallable(firebaseFunctions, "ensureUserProfile");
const createShareCode = httpsCallable(firebaseFunctions, "createShareCode");
const cancelShareCode = httpsCallable(firebaseFunctions, "cancelShareCode");
const resolveGameCode = httpsCallable(firebaseFunctions, "resolveGameCode");
const createPortalSession = httpsCallable(firebaseFunctions, "createPortalSession");
const createCheckoutSession = httpsCallable(firebaseFunctions, "createCheckoutSession");

async function getUserProfile(uid) {
  const snapshot = await getDoc(doc(db, "users", uid));
  return snapshot.exists() ? snapshot.data() : null;
}

const BOOTSTRAP_PROFILE_ATTEMPTS = 5;
const BOOTSTRAP_PROFILE_DELAY_MS = 150;

async function getUserProfileForBootstrap(uid) {
  for (let attempt = 0; attempt < BOOTSTRAP_PROFILE_ATTEMPTS; attempt++) {
    const profile = await getUserProfile(uid);
    if (profile) return profile;
    if (attempt < BOOTSTRAP_PROFILE_ATTEMPTS - 1) {
      await new Promise((resolve) => setTimeout(resolve, BOOTSTRAP_PROFILE_DELAY_MS));
    }
  }
  return null;
}

function subscribeToUserProfile(uid, onProfile, onError) {
  return onSnapshot(
    doc(db, "users", uid),
    (snapshot) => onProfile(snapshot.exists() ? snapshot.data() : null),
    onError,
  );
}

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

// The emulator suite is detected, never assumed. Blindly routing localhost
// pages to the emulator ports sends every Firebase call to a dead socket
// whenever the suite isn't (fully) running, and everything fails with
// misleading "check your connection" errors. The emulator hub (port 4400)
// only answers while `firebase emulators:start` is actually up, so it's the
// discriminator; `mode: "no-cors"` because we only care about reachability.
async function emulatorSuiteRunning() {
  try {
    await fetch("http://127.0.0.1:4400/emulators", {
      mode: "no-cors",
      signal: AbortSignal.timeout(500),
    });
    return true;
  } catch {
    return false;
  }
}

if (isLocal) {
  if (await emulatorSuiteRunning()) {
    connectAuthEmulator(auth, "http://127.0.0.1:9099", {
      disableWarnings: true,
    });
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
    connectFunctionsEmulator(firebaseFunctions, "127.0.0.1", 5001);
    console.info("Firebase: connected to the local emulator suite.");
  } else {
    console.warn(
      "Firebase: no emulator suite detected on this localhost page — using PRODUCTION (dpaam-8864d). " +
        "Sign-ins, favorites, and share codes are real. Start emulators with `npm run serve` in firebase-functions/.",
    );
  }
}

export {
  EmailAuthProvider,
  app,
  auth,
  cancelShareCode,
  createCheckoutSession,
  createPortalSession,
  createShareCode,
  createUserWithEmailAndPassword,
  db,
  ensureUserProfile,
  firebaseFunctions,
  getUserProfile,
  getUserProfileForBootstrap,
  googleProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  reload,
  resolveGameCode,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  subscribeToUserProfile,
  updateEmail,
  verifyBeforeUpdateEmail,
};
