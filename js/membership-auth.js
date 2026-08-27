// Dingo Punks: All-Access Membership — auth gate

import {
  auth,
  createUserWithEmailAndPassword,
  ensureUserProfile,
  googleProvider,
  onAuthStateChanged,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "./firebase-init.js";

const AUTH_VIEW_HEADING_IDS = {
  signin: "dpaam-auth-heading-signin",
  signup: "dpaam-auth-heading-signup",
  reset: "dpaam-auth-heading-reset",
  verify: "dpaam-auth-heading-verify",
  setup: "dpaam-auth-heading-setup",
};

export function clearAuthMessages() {
  const error = document.getElementById("dpaam-auth-error");
  const success = document.getElementById("dpaam-auth-success");
  if (error) {
    error.hidden = true;
    error.textContent = "";
  }
  if (success) {
    success.hidden = true;
    success.textContent = "";
  }
}

function showAuthMessage(type, message) {
  clearAuthMessages();
  const el = document.getElementById(`dpaam-auth-${type}`);
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
}

export function authErrorMessage(error) {
  switch (error?.code) {
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/missing-email":
      return "Enter your email address.";
    case "auth/missing-password":
      return "Enter your password.";
    case "auth/weak-password":
      return "Choose a stronger password with at least 6 characters.";
    case "auth/email-already-in-use":
      return "An account already exists for that email. Try signing in instead.";
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "The email or password is incorrect.";
    case "auth/user-disabled":
      return "This account has been disabled. Contact Dingo Punks for help.";
    case "auth/too-many-requests":
      return "Too many attempts. Wait a few minutes, then try again.";
    case "auth/network-request-failed":
      return "We couldn't connect. Check your internet connection and try again.";
    case "auth/popup-blocked":
      return "Your browser blocked the Google sign-in window. Allow popups and try again.";
    case "auth/account-exists-with-different-credential":
      return "That email uses a different sign-in method. Sign in with email and password instead.";
    case "auth/unauthorized-domain":
    case "auth/operation-not-allowed":
    case "auth/configuration-not-found":
    case "auth/invalid-api-key":
      return "Sign-in isn't available right now. Please try again later.";
    default:
      return "Something went wrong. Please try again.";
  }
}

function isCancelledPopup(error) {
  return (
    error?.code === "auth/popup-closed-by-user" ||
    error?.code === "auth/cancelled-popup-request"
  );
}

function setButtonLoading(button, loading, loadingLabel) {
  if (!button) return;
  if (!button.dataset.defaultHtml) {
    button.dataset.defaultHtml = button.innerHTML;
  }
  button.disabled = loading;
  button.classList.toggle("is-loading", loading);
  button.setAttribute("aria-busy", String(loading));
  if (loading) button.textContent = loadingLabel;
  else button.innerHTML = button.dataset.defaultHtml;
}

function formIsValid(form) {
  if (form.checkValidity()) return true;
  form.reportValidity();
  return false;
}

function userNeedsEmailVerification(user) {
  if (!user?.email || user.emailVerified) return false;
  return user.providerData.some((provider) => provider.providerId === "password");
}

function userCanAccessDashboard(user) {
  return Boolean(user) && !userNeedsEmailVerification(user);
}

function updateVerifyView(user) {
  const emailEl = document.getElementById("dpaam-auth-verify-email");
  if (emailEl) emailEl.textContent = user?.email || "";
}

function setPasswordVisible(toggle, visible) {
  const inputId = toggle.getAttribute("aria-controls");
  const input = inputId ? document.getElementById(inputId) : null;
  const showIcon = toggle.querySelector(".dpaam-auth-password-icon--show");
  const hideIcon = toggle.querySelector(".dpaam-auth-password-icon--hide");
  if (!input) return;

  input.type = visible ? "text" : "password";
  toggle.setAttribute("aria-pressed", String(visible));
  toggle.setAttribute("aria-label", visible ? "Hide password" : "Show password");
  if (showIcon) showIcon.hidden = visible;
  if (hideIcon) hideIcon.hidden = !visible;
}

function wirePasswordToggles(root) {
  root.querySelectorAll(".dpaam-auth-password-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const visible = toggle.getAttribute("aria-pressed") === "true";
      setPasswordVisible(toggle, !visible);
    });
  });
}

function resetPasswordToggles(root) {
  root.querySelectorAll(".dpaam-auth-password-toggle").forEach((toggle) => {
    setPasswordVisible(toggle, false);
  });
}

export function initAuth() {
  const section = document.getElementById("dpaam-auth");
  const dashboard = document.getElementById("dpaam-dashboard");
  if (!section) return;

  const modals = Array.from(section.querySelectorAll("[data-auth-view]"));
  const messages = section.querySelector(".dpaam-auth-messages");
  if (modals.length === 0) return;

  function setAuthView(view, { focus = false } = {}) {
    if (!AUTH_VIEW_HEADING_IDS[view]) return;

    const activeModal = modals.find((modal) => modal.dataset.authView === view);
    if (!activeModal) return;

    modals.forEach((modal) => {
      modal.hidden = modal !== activeModal;
    });

    if (messages) {
      activeModal.prepend(messages);
    }

    section.setAttribute("aria-labelledby", AUTH_VIEW_HEADING_IDS[view]);
    clearAuthMessages();
    resetPasswordToggles(section);

    if (!focus) return;

    activeModal.querySelector(".dpaam-auth-input")?.focus();
  }

  document.getElementById("dpaam-auth-show-signup")?.addEventListener("click", () => {
    setAuthView("signup", { focus: true });
  });
  document.getElementById("dpaam-auth-show-signin-from-signup")?.addEventListener("click", () => {
    setAuthView("signin", { focus: true });
  });
  document.getElementById("dpaam-auth-show-reset")?.addEventListener("click", () => {
    const signInEmail = document.getElementById("dpaam-auth-signin-email");
    const resetEmail = document.getElementById("dpaam-auth-reset-email");
    if (signInEmail?.value && resetEmail) resetEmail.value = signInEmail.value;
    setAuthView("reset", { focus: true });
  });
  document.getElementById("dpaam-auth-show-signin-from-reset")?.addEventListener("click", () => {
    setAuthView("signin", { focus: true });
  });

  wirePasswordToggles(section);
  setAuthView("signin");

  const signInForm = document.getElementById("dpaam-auth-signin-form");
  signInForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!formIsValid(signInForm)) return;

    const emailInput = document.getElementById("dpaam-auth-signin-email");
    const passwordInput = document.getElementById("dpaam-auth-signin-password");
    const submit = document.getElementById("dpaam-auth-signin-submit");
    const email = emailInput.value.trim();
    emailInput.value = email;

    clearAuthMessages();
    setButtonLoading(submit, true, "Signing in…");
    try {
      await signInWithEmailAndPassword(auth, email, passwordInput.value);
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    } finally {
      setButtonLoading(submit, false, "Signing in…");
    }
  });

  const signUpForm = document.getElementById("dpaam-auth-signup-form");
  signUpForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!formIsValid(signUpForm)) return;

    const emailInput = document.getElementById("dpaam-auth-signup-email");
    const passwordInput = document.getElementById("dpaam-auth-signup-password");
    const submit = document.getElementById("dpaam-auth-signup-submit");
    const email = emailInput.value.trim();
    emailInput.value = email;

    clearAuthMessages();
    setButtonLoading(submit, true, "Creating account…");
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, passwordInput.value);
      await sendEmailVerification(credential.user);
      updateVerifyView(credential.user);
      setAuthView("verify");
      showAuthMessage(
        "success",
        "Check your inbox for a verification link before continuing.",
      );
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    } finally {
      setButtonLoading(submit, false, "Creating account…");
    }
  });

  const resetForm = document.getElementById("dpaam-auth-reset-form");
  resetForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!formIsValid(resetForm)) return;

    const emailInput = document.getElementById("dpaam-auth-reset-email");
    const submit = document.getElementById("dpaam-auth-reset-submit");
    const email = emailInput.value.trim();
    emailInput.value = email;

    clearAuthMessages();
    setButtonLoading(submit, true, "Sending…");
    try {
      await sendPasswordResetEmail(auth, email);
      showAuthMessage(
        "success",
        "If an account exists for that email, a password reset link is on its way.",
      );
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    } finally {
      setButtonLoading(submit, false, "Sending…");
    }
  });

  async function signInWithGoogle(button) {
    clearAuthMessages();
    setButtonLoading(button, true, "Opening Google…");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      if (!isCancelledPopup(error)) {
        showAuthMessage("error", authErrorMessage(error));
      }
    } finally {
      setButtonLoading(button, false, "Opening Google…");
    }
  }

  ["dpaam-auth-google-signin", "dpaam-auth-google-signup"].forEach((id) => {
    const button = document.getElementById(id);
    button?.addEventListener("click", () => signInWithGoogle(button));
  });

  const verifyContinue = document.getElementById("dpaam-auth-verify-continue");
  verifyContinue?.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (!user) {
      setAuthView("signin", { focus: true });
      return;
    }

    clearAuthMessages();
    setButtonLoading(verifyContinue, true, "Checking…");
    try {
      await reload(user);
      if (userCanAccessDashboard(auth.currentUser)) {
        await applyAuthState(auth.currentUser);
        return;
      }
      showAuthMessage(
        "error",
        "Your email is not verified yet. Check your inbox, then try again.",
      );
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    } finally {
      setButtonLoading(verifyContinue, false, "Checking…");
    }
  });

  const verifyResend = document.getElementById("dpaam-auth-verify-resend");
  verifyResend?.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (!user) return;

    clearAuthMessages();
    setButtonLoading(verifyResend, true, "Sending…");
    try {
      await sendEmailVerification(user);
      showAuthMessage("success", "Verification email sent. Check your inbox.");
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    } finally {
      setButtonLoading(verifyResend, false, "Sending…");
    }
  });

  document.getElementById("dpaam-auth-verify-signout")?.addEventListener("click", async () => {
    clearAuthMessages();
    try {
      await signOut(auth);
      setAuthView("signin", { focus: true });
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    }
  });

  document.getElementById("dpaam-auth-setup-retry")?.addEventListener("click", () => {
    applyAuthState(auth.currentUser);
  });

  document.getElementById("dpaam-auth-setup-signout")?.addEventListener("click", async () => {
    clearAuthMessages();
    try {
      await signOut(auth);
      setAuthView("signin", { focus: true });
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    }
  });

  let authStateRevision = 0;
  let provisionedUid = null;

  async function applyAuthState(user) {
    const revision = ++authStateRevision;
    const signedIn = userCanAccessDashboard(user);

    section.hidden = false;
    if (dashboard) dashboard.hidden = true;

    if (user && userNeedsEmailVerification(user)) {
      provisionedUid = null;
      section.setAttribute("aria-busy", "false");
      updateVerifyView(user);
      const onVerify = modals.find(
        (modal) => modal.dataset.authView === "verify" && !modal.hidden,
      );
      if (!onVerify) setAuthView("verify");
      return;
    }

    if (!signedIn) {
      provisionedUid = null;
      section.setAttribute("aria-busy", "false");
      setAuthView("signin");
      return;
    }

    if (provisionedUid !== user.uid) {
      const retry = document.getElementById("dpaam-auth-setup-retry");
      if (retry) retry.hidden = true;
      setAuthView("setup");
      section.setAttribute("aria-busy", "true");

      try {
        await ensureUserProfile();
        provisionedUid = user.uid;
      } catch (error) {
        if (revision !== authStateRevision) return;
        console.error("Failed to provision user profile", error);
        section.setAttribute("aria-busy", "false");
        if (retry) retry.hidden = false;
        showAuthMessage(
          "error",
          "We couldn't finish setting up your account. Check your connection and try again.",
        );
        return;
      }
    }

    if (revision !== authStateRevision) return;

    clearAuthMessages();
    signInForm?.reset();
    signUpForm?.reset();
    resetForm?.reset();
    section.setAttribute("aria-busy", "false");
    section.hidden = true;
    if (dashboard) dashboard.hidden = false;
  }

  section.setAttribute("aria-busy", "true");
  onAuthStateChanged(
    auth,
    (user) => {
      applyAuthState(user);
    },
    () => {
      if (dashboard) dashboard.hidden = true;
      section.hidden = false;
      section.setAttribute("aria-busy", "false");
      setAuthView("signin");
      showAuthMessage(
        "error",
        "We couldn't verify your sign-in. Refresh the page and try again.",
      );
    },
  );
}
