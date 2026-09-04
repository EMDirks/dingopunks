// Shared Firebase Web SDK setup for the static membership and play pages.
// Firebase web config values identify this public app; they are not secrets.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  GoogleAuthProvider,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  connectFirestoreEmulator,
  doc,
  getDoc,
  getFirestore,
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
const db = getFirestore(app);
const firebaseFunctions = getFunctions(app);
const ensureUserProfile = httpsCallable(firebaseFunctions, "ensureUserProfile");

async function getUserProfile(uid) {
  const snapshot = await getDoc(doc(db, "users", uid));
  return snapshot.exists() ? snapshot.data() : null;
}

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

if (isLocal) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", {
    disableWarnings: true,
  });
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectFunctionsEmulator(firebaseFunctions, "127.0.0.1", 5001);
}

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  db,
  ensureUserProfile,
  firebaseFunctions,
  getUserProfile,
  googleProvider,
  onAuthStateChanged,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
};
