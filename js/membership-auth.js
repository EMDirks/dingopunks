// Dingo Punks: All-Access Membership — auth gate
//
// Sign-in, sign-up, and password-reset modals for membership.html.
// Wire Firebase (or other backend) through the exported helpers below.

const AUTH_VIEW_HEADING_IDS = {
  signin: "dpaam-auth-heading-signin",
  signup: "dpaam-auth-heading-signup",
  reset: "dpaam-auth-heading-reset",
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
    setAuthView("reset", { focus: true });
  });
  document.getElementById("dpaam-auth-show-signin-from-reset")?.addEventListener("click", () => {
    setAuthView("signin", { focus: true });
  });

  wirePasswordToggles(section);
  setAuthView("signin");
}
