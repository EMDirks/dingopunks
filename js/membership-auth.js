// Dingo Punks: All-Access Membership — auth gate

import {
  auth,
  createUserWithEmailAndPassword,
  ensureUserProfile,
  googleProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "./firebase-init.js";
import { setButtonLoading as setAuthButtonLoading } from "./membership-utils.js";
import {
  registerAuthOfferCompleteHandler,
  renderAuthOfferPanels,
  setAuthOfferLayoutActive,
} from "./membership/auth-offer.js";
import { sendVerificationEmail } from "./membership/email-verification.js";

const AUTH_VIEW_HEADING_IDS = {
  signin: "dpaam-auth-heading-signin",
  signup: "dpaam-auth-heading-signup",
  reset: "dpaam-auth-heading-reset",
  "offer-loading": "dpaam-auth-heading-offer-loading",
  offer: "dpaam-auth-heading-offer",
};

const AUTH_QUERY_VIEWS = {
  login: "signin",
  signup: "signup",
};

function consumeRequestedAuthView() {
  const url = new URL(window.location.href);
  const requested = url.searchParams.get("auth");
  if (requested === null) return "signin";

  url.searchParams.delete("auth");
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  return AUTH_QUERY_VIEWS[requested.trim().toLowerCase()] || "signin";
}

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
  document.querySelector(".dpaam-auth-consent.is-error")?.classList.remove("is-error");
}

function showAuthMessage(type, message) {
  clearAuthMessages();
  const el = document.getElementById(`dpaam-auth-${type}`);
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
}

export function authErrorMessage(error) {
  const code = typeof error?.code === "string" ? error.code : "";
  if (code.startsWith("auth/requests-from-referer-") && code.endsWith("-are-blocked.")) {
    return "Sign-in unavailable on this site. Contact support.";
  }

  switch (code) {
    case "auth/invalid-email":
      return "Enter a valid email.";
    case "auth/missing-email":
      return "Enter your email.";
    case "auth/missing-password":
      return "Enter your password.";
    case "auth/weak-password":
      return "Password needs 6+ characters.";
    case "auth/email-already-in-use":
      return "An account with this email already exists. Log in instead.";
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Incorrect email or password.";
    case "auth/user-disabled":
      return "This account has been disabled. Contact support for help.";
    case "auth/too-many-requests":
      return "Too many login attempts. Wait a few minutes and try again.";
    case "auth/network-request-failed":
      return "We can't connect to the internet. Check your connection and try again.";
    case "auth/popup-blocked":
      return "Popups blocked. Allow popups and try again.";
    case "auth/account-exists-with-different-credential":
      return "Sign in with email and password.";
    case "auth/unauthorized-domain":
    case "auth/operation-not-allowed":
    case "auth/configuration-not-found":
    case "auth/invalid-api-key":
    case "auth/app-not-authorized":
      return "Sign-in unavailable. Try again later.";
    default: {
      const message = typeof error?.message === "string" ? error.message : "";
      if (/referer.*blocked/i.test(message) || /API key not valid/i.test(message)) {
        return "Sign-in unavailable on this site. Contact support.";
      }
      return "Something went wrong. Try again.";
    }
  }
}

// Firebase's email-enumeration protection returns the same code for an unknown
// email and a wrong password, so the sign-in form can't tell them apart.
function isCredentialMismatch(error) {
  switch (error?.code) {
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return true;
    default:
      return false;
  }
}

function isCancelledPopup(error) {
  return (
    error?.code === "auth/popup-closed-by-user" ||
    error?.code === "auth/cancelled-popup-request"
  );
}

function setButtonLoading(button, loading, loadingLabel) {
  setAuthButtonLoading(button, loading, loadingLabel, { useHtml: true });
}

function formIsValid(form) {
  if (form.checkValidity()) return true;
  form.reportValidity();
  return false;
}

// Email verification is a soft gate: any signed-in user reaches the dashboard,
// which shows a verify banner and withholds share-code creation until the
// link is clicked (see membership/email-verification.js).
export function userCanAccessDashboard(user) {
  return Boolean(user);
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

const SESSION_HINT_KEY = "dpaam-session-hint";

function setSessionHint() {
  try { localStorage.setItem(SESSION_HINT_KEY, "1"); } catch (e) {}
}

function clearSessionHint() {
  try { localStorage.removeItem(SESSION_HINT_KEY); } catch (e) {}
}

let showAuthSignIn = () => {};

export function requestAuthSignIn() {
  showAuthSignIn();
}

export function initAuth({ loadDashboardState, onDashboardLoaded } = {}) {
  const section = document.getElementById("dpaam-auth");
  const dashboard = document.getElementById("dpaam-dashboard");
  const dashboardSkeleton = document.getElementById("dpaam-dashboard-skeleton");
  if (!section) return;

  const modals = Array.from(section.querySelectorAll("[data-auth-view]"));
  const messages = section.querySelector(".dpaam-auth-messages");
  if (modals.length === 0) return;

  let signedOutView = consumeRequestedAuthView();

  const headerToggle = document.getElementById("dpaam-auth-header-toggle");

  function updateAuthHeader(view) {
    if (!headerToggle) return;

    if (view === "signin") {
      headerToggle.hidden = false;
      headerToggle.textContent = "Sign up";
      return;
    }

    if (view === "signup") {
      headerToggle.hidden = false;
      headerToggle.textContent = "Log in";
      return;
    }

    if (view === "reset") {
      headerToggle.hidden = false;
      headerToggle.textContent = "Log in";
      return;
    }

    if (view === "offer" || view === "offer-loading") {
      headerToggle.hidden = true;
      return;
    }

    headerToggle.hidden = true;
  }

  headerToggle?.addEventListener("click", () => {
    const signinCard = document.getElementById("dpaam-auth-modal-signin");
    const onSignin = signinCard && !signinCard.hidden;
    setAuthView(onSignin ? "signup" : "signin", { focus: true });
  });

  showAuthSignIn = () => {
    if (section.hidden) return;
    setAuthView("signin", { focus: true });
  };

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
    updateAuthHeader(view);
    setAuthOfferLayoutActive(view === "offer" || view === "offer-loading");

    if (!focus) return;

    activeModal.querySelector(".dpaam-auth-input")?.focus();
  }

  document.getElementById("dpaam-auth-show-reset")?.addEventListener("click", () => {
    const signInEmail = document.getElementById("dpaam-auth-signin-email");
    const resetEmail = document.getElementById("dpaam-auth-reset-email");
    if (signInEmail?.value && resetEmail) resetEmail.value = signInEmail.value;
    setAuthView("reset", { focus: true });
  });

  document.getElementById("dpaam-auth-reset-back")?.addEventListener("click", () => {
    setAuthView("signin", { focus: true });
  });

  function makeMessageLink(label, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dpaam-auth-link dpaam-auth-message-link";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  // Covers both "no such account" and "wrong password" without revealing
  // which one happened; offers the recovery path for each.
  function showCredentialMismatchMessage(email) {
    clearAuthMessages();
    const el = document.getElementById("dpaam-auth-error");
    if (!el) return;

    const resetLink = makeMessageLink("Reset your password", () => {
      const resetEmail = document.getElementById("dpaam-auth-reset-email");
      if (email && resetEmail) resetEmail.value = email;
      setAuthView("reset", { focus: true });
    });

    const signUpLink = makeMessageLink("create a free account", () => {
      const signUpEmail = document.getElementById("dpaam-auth-signup-email");
      const signUpPassword = document.getElementById("dpaam-auth-signup-password");
      if (email && signUpEmail) signUpEmail.value = email;
      setAuthView("signup", { focus: !email });
      if (email) signUpPassword?.focus();
    });

    el.append(
      "That email and password don't match an account. ",
      resetLink,
      " or ",
      signUpLink,
      ".",
    );
    el.hidden = false;
  }

  function showEmailTakenMessage(email) {
    clearAuthMessages();
    const el = document.getElementById("dpaam-auth-error");
    if (!el) return;

    const signInLink = makeMessageLink("Log in", () => {
      const signInEmail = document.getElementById("dpaam-auth-signin-email");
      const signInPassword = document.getElementById("dpaam-auth-signin-password");
      if (email && signInEmail) signInEmail.value = email;
      setAuthView("signin", { focus: !email });
      if (email) signInPassword?.focus();
    });

    el.append("An account with this email already exists. ", signInLink, " instead.");
    el.hidden = false;
  }

  wirePasswordToggles(section);
  setAuthView(signedOutView);

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
    setButtonLoading(submit, true, "Logging in…");
    try {
      await signInWithEmailAndPassword(auth, email, passwordInput.value);
    } catch (error) {
      if (isCredentialMismatch(error)) {
        showCredentialMismatchMessage(email);
      } else {
        showAuthMessage("error", authErrorMessage(error));
      }
    } finally {
      setButtonLoading(submit, false, "Logging in…");
    }
  });

  const signUpForm = document.getElementById("dpaam-auth-signup-form");
  const signUpEmailInput = document.getElementById("dpaam-auth-signup-email");
  const signUpConsent = document.getElementById("dpaam-auth-signup-consent");

  function consentGiven() {
    if (signUpConsent?.checked) return true;

    showAuthMessage(
      "error",
      "Please agree to the Terms of Service and Privacy Policy to sign up.",
    );
    signUpConsent?.closest(".dpaam-auth-consent")?.classList.add("is-error");
    signUpConsent?.focus();
    return false;
  }

  signUpConsent?.addEventListener("change", () => {
    if (signUpConsent.checked) clearAuthMessages();
  });

  signUpForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!formIsValid(signUpForm)) return;
    if (!consentGiven()) return;

    const passwordInput = document.getElementById("dpaam-auth-signup-password");
    const submit = document.getElementById("dpaam-auth-signup-submit");
    const email = signUpEmailInput.value.trim();

    clearAuthMessages();
    setButtonLoading(submit, true, "Creating account…");
    signupInThisTab = true;
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, passwordInput.value);
      // Don't hold the sign-up on the email round trip; the dashboard banner
      // offers a resend if this one never arrives.
      sendVerificationEmail(credential.user).catch((error) => {
        console.warn("Verification email failed to send", error);
      });
    } catch (error) {
      signupInThisTab = false;
      if (error?.code === "auth/email-already-in-use") {
        showEmailTakenMessage(email);
      } else {
        showAuthMessage("error", authErrorMessage(error));
      }
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
      showAuthMessage("success", "Password reset email sent.");
    } catch (error) {
      showAuthMessage("error", authErrorMessage(error));
    } finally {
      setButtonLoading(submit, false, "Sending…");
    }
  });

  async function signInWithGoogle(button, { expectNewAccount = false } = {}) {
    clearAuthMessages();
    setButtonLoading(button, true, "Opening Google…");
    if (expectNewAccount) signupInThisTab = true;
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      if (expectNewAccount) signupInThisTab = false;
      if (!isCancelledPopup(error)) {
        showAuthMessage("error", authErrorMessage(error));
      }
    } finally {
      setButtonLoading(button, false, "Opening Google…");
    }
  }

  const googleSignIn = document.getElementById("dpaam-auth-google-signin");
  googleSignIn?.addEventListener("click", () => signInWithGoogle(googleSignIn));

  const googleSignUp = document.getElementById("dpaam-auth-google-signup");
  googleSignUp?.addEventListener("click", () => {
    if (!consentGiven()) return;
    signInWithGoogle(googleSignUp, { expectNewAccount: true });
  });

  document.getElementById("dpaam-auth-setup-retry")?.addEventListener("click", () => {
    clearSkeletonError();
    applyAuthState(auth.currentUser);
  });

  let authStateRevision = 0;
  let provisionedUid = null;
  let signupInThisTab = false;

  function hideDashboardSkeleton() {
    if (!dashboardSkeleton) return;
    dashboardSkeleton.hidden = true;
    dashboardSkeleton.setAttribute("aria-busy", "false");
  }

  function showDashboardSkeleton() {
    section.hidden = true;
    if (dashboard) dashboard.hidden = true;
    if (!dashboardSkeleton) return;
    dashboardSkeleton.hidden = false;
    dashboardSkeleton.setAttribute("aria-busy", "true");
  }

  function clearSkeletonError() {
    const message = document.getElementById("dpaam-skeleton-error-message");
    const retry = document.getElementById("dpaam-auth-setup-retry");
    if (message) {
      message.hidden = true;
      message.textContent = "";
    }
    if (retry) retry.hidden = true;
    if (dashboardSkeleton) dashboardSkeleton.setAttribute("aria-busy", "true");
  }

  function showSkeletonError(message) {
    const messageEl = document.getElementById("dpaam-skeleton-error-message");
    const retry = document.getElementById("dpaam-auth-setup-retry");
    if (messageEl) {
      messageEl.textContent = message;
      messageEl.hidden = false;
    }
    if (retry) retry.hidden = false;
    if (dashboardSkeleton) dashboardSkeleton.setAttribute("aria-busy", "false");
  }

  async function enterDashboard(user, revision) {
    clearSkeletonError();
    showDashboardSkeleton();

    try {
      if (provisionedUid !== user.uid) {
        const result = await ensureUserProfile();
        provisionedUid = user.uid;

        if (result?.data?.created === true) {
          // Account was just created in another tab or the offer was never seen.
          // Show the offer now rather than dropping the user straight into the
          // free dashboard without seeing the plan screen.
          if (revision !== authStateRevision) return;
          hideDashboardSkeleton();
          section.hidden = false;
          section.setAttribute("aria-busy", "false");
          renderAuthOfferPanels();
          setAuthView("offer");
          return;
        }
      }

      await loadDashboardState?.(user);
    } catch (error) {
      if (revision !== authStateRevision) return;
      console.error("Failed to load dashboard state", error);
      showSkeletonError("Couldn't load account. Check connection.");
      return;
    }

    if (revision !== authStateRevision) return;

    clearAuthMessages();
    clearSkeletonError();
    signInForm?.reset();
    signUpForm?.reset();
    resetForm?.reset();
    section.setAttribute("aria-busy", "false");
    hideDashboardSkeleton();
    section.hidden = true;
    setAuthOfferLayoutActive(false);
    if (dashboard) dashboard.hidden = false;
    onDashboardLoaded?.(user);
  }

  async function applyAuthState(user) {
    const revision = ++authStateRevision;
    const signedIn = userCanAccessDashboard(user);
    const requestedView = signedOutView;
    signedOutView = "signin";

    document.documentElement.classList.remove("dpaam-boot-signed-in");
    if (signedIn) {
      setSessionHint();
    } else {
      clearSessionHint();
    }

    hideDashboardSkeleton();
    if (dashboard) dashboard.hidden = true;

    if (!signedIn) {
      provisionedUid = null;
      section.hidden = false;
      section.setAttribute("aria-busy", "false");
      setAuthOfferLayoutActive(false);
      setAuthView(requestedView);
      return;
    }

    if (signupInThisTab && provisionedUid !== user.uid) {
      signupInThisTab = false;
      section.hidden = false;
      section.setAttribute("aria-busy", "true");
      setAuthView("offer-loading");

      let created = false;
      try {
        const result = await ensureUserProfile();
        created = result?.data?.created === true;
        provisionedUid = user.uid;
      } catch (error) {
        if (revision !== authStateRevision) return;
        console.error("Failed to prepare new account", error);
        section.hidden = false;
        section.setAttribute("aria-busy", "false");
        setAuthView("signin");
        showAuthMessage("error", "Couldn't set up account. Check your internet connection.");
        return;
      }

      if (revision !== authStateRevision) return;

      if (created) {
        renderAuthOfferPanels();
        section.setAttribute("aria-busy", "false");
        setAuthView("offer");
        return;
      }
    }

    await enterDashboard(user, revision);
  }

  registerAuthOfferCompleteHandler(async () => {
    const user = auth.currentUser;
    if (!user || !userCanAccessDashboard(user)) return;
    await enterDashboard(user, authStateRevision);
  });

  section.setAttribute("aria-busy", "true");
  onAuthStateChanged(
    auth,
    (user) => {
      applyAuthState(user);
    },
    () => {
      document.documentElement.classList.remove("dpaam-boot-signed-in");
      clearSessionHint();
      hideDashboardSkeleton();
      if (dashboard) dashboard.hidden = true;
      section.hidden = false;
      section.setAttribute("aria-busy", "false");
      setAuthView("signin");
      showAuthMessage("error", "Sign-in error. Refresh and try again.");
    },
  );
}
