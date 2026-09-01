export function initDebugView() {
  const host = location.hostname;
  if (host !== "localhost" && host !== "127.0.0.1") return;

  const debug = document.getElementById("dpaam-debug-view");
  const auth = document.getElementById("dpaam-auth");
  const dashboard = document.getElementById("dpaam-dashboard");
  const skeleton = document.getElementById("dpaam-dashboard-skeleton");
  if (!debug || !auth || !dashboard) return;

  debug.hidden = false;

  const options = Array.from(debug.querySelectorAll("[data-debug-view]"));
  const authCards = Array.from(auth.querySelectorAll("[data-auth-view]"));
  const retry = document.getElementById("dpaam-auth-setup-retry");
  const skeletonError = document.getElementById("dpaam-skeleton-error-message");
  const headerToggle = document.getElementById("dpaam-auth-header-toggle");
  const error = document.getElementById("dpaam-auth-error");
  const success = document.getElementById("dpaam-auth-success");
  const AUTH_HEADINGS = {
    auth: "dpaam-auth-heading-signin",
  };

  function setDebugView(view) {
    const showDashboard = view === "dashboard";
    const showSkeleton = view === "loading";
    auth.hidden = showDashboard || showSkeleton;
    dashboard.hidden = !showDashboard;
    if (skeleton) {
      skeleton.hidden = !showSkeleton;
      skeleton.setAttribute("aria-busy", String(showSkeleton));
    }

    if (!showDashboard && !showSkeleton) {
      authCards.forEach((card) => {
        card.hidden = card.dataset.authView !== "signin";
      });
      if (retry) retry.hidden = true;
      if (skeletonError) {
        skeletonError.hidden = true;
        skeletonError.textContent = "";
      }
      if (error) {
        error.hidden = true;
        error.textContent = "";
      }
      if (success) {
        success.hidden = true;
        success.textContent = "";
      }
      auth.setAttribute("aria-labelledby", AUTH_HEADINGS.auth);
      if (headerToggle) {
        headerToggle.hidden = false;
        headerToggle.textContent = "Sign up";
      }
    }

    if (showSkeleton) {
      if (retry) retry.hidden = true;
      if (skeletonError) {
        skeletonError.hidden = true;
        skeletonError.textContent = "";
      }
    }

    options.forEach((option) => {
      const selected = option.dataset.debugView === view;
      option.setAttribute("aria-checked", String(selected));
      option.classList.toggle("is-selected", selected);
    });
  }

  options.forEach((option) => {
    option.addEventListener("click", () => {
      setDebugView(option.dataset.debugView);
    });
  });
}
