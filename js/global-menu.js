// Shared global-menu logic used by both global.js (in-game pages) and
// debrief.js (debrief page). Both files define their own `modalPopup` and
// `createModal`; this file references those at call time, so it works on any
// page that loads it after its page-specific modal script.
//
// States:
//   'unfinished' — default (splash still visible, game not started)
//   'active'     — escape room in progress (splash hidden, game on screen)
//   'finished'   — debrief page (escape room complete)

function buildGlobalMenuHTML(state) {
  const teachersHTML = `
    <div class="global-menu__teachers">
      <div class="global-menu__teachers-links">
        <a class="global-menu__teachers-link" href="https://dingopunks.com">
          <img class="global-menu__teachers-link-icon" src="assets/global/modal-icon-home.png" alt="" aria-hidden="true">
          Home
        </a>
        <a class="global-menu__teachers-link" href="https://dingopunks.com/collections/all">
          <img class="global-menu__teachers-link-icon" src="assets/global/modal-icon-shop.png" alt="" aria-hidden="true">
          Shop
        </a>
        <a class="global-menu__teachers-link" href="https://dingopunks.com/pages/teacher-portal">
          <img class="global-menu__teachers-link-icon" src="assets/global/modal-icon-teachers.png" alt="" aria-hidden="true">
          Teacher Portal
        </a>
        <a class="global-menu__teachers-link" href="membership.html">
          <img class="global-menu__teachers-link-icon" src="assets/global/modal-icon-dpaam.png" alt="" aria-hidden="true">
          All-Access Membership
        </a>
        <a class="global-menu__teachers-link" href="https://dingopunks.com/pages/contact">
          <img class="global-menu__teachers-link-icon" src="assets/global/modal-icon-contact.png" alt="" aria-hidden="true">
          Contact
        </a>
      </div>
    </div>
  `;

  const kidsLinksByState = {
    unfinished: `
      <a class="global-menu__kids-link" href="index.html">Play Game</a>
      <a class="global-menu__kids-link global-menu__kids-link--inactive">View Score</a>
      <a class="global-menu__kids-link global-menu__kids-link--inactive">Enter the Undermurk</a>
    `,
    active: `
      <a class="global-menu__kids-link" href="index.html">Exit Game</a>
      <a class="global-menu__kids-link global-menu__kids-link--inactive">View Score</a>
      <a class="global-menu__kids-link global-menu__kids-link--inactive">Enter the Undermurk</a>
    `,
    finished: `
      <a class="global-menu__kids-link" href="index.html">Play Again</a>
      <a class="global-menu__kids-link" href="debrief.html">View Score</a>
      <a class="global-menu__kids-link" href="enter-the-undermurk.html">Enter the Undermurk</a>
    `,
  };

  const kidsLinks = kidsLinksByState[state] || kidsLinksByState.unfinished;

  return `
    <div class="global-menu">
      <div class="global-menu__kids">
        <div class="global-menu__kids-links">${kidsLinks}</div>
      </div>
      ${teachersHTML}
    </div>
  `;
}

// Determines which global-menu state to show for the current page.
function getGlobalMenuState() {
  if (window.location.pathname.endsWith('debrief.html')) {
    return 'finished';
  }
  // 'active' once the user has advanced past step 1 (code entry) — set by
  // hideModalElement() calls in splash-new.js via window.globalMenuSplashStarted
  if (window.globalMenuSplashStarted) {
    return 'active';
  }
  return 'unfinished';
}

function openGlobalMenu(state = 'unfinished') {
  modalPopup.classList.add('modal__popup--global-menu');
  const modalVersionEl = document.querySelector('.modal-version');
  if (modalVersionEl) {
    const versionText = typeof version !== 'undefined'
      ? `<span class="modal-version__number"> VERSION ${version}</span>`
      : '';
    modalVersionEl.innerHTML = `
      ${versionText}
      <a class="modal-version__link" href="https://dingopunks.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer">Terms</a>
      <a class="modal-version__link" href="https://dingopunks.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>
    `;
  }
  createModal('Menu', buildGlobalMenuHTML(state), 'Close');
}

// Wires the menu button (no-op on pages without one).
(function initGlobalMenuButton() {
  const buttonMenuGlobal = document.querySelector('.button-menu-global');
  if (!buttonMenuGlobal) {
    return;
  }
  // Hidden when SHOW_GLOBAL_MENU_BUTTON (config.js) is false.
  if (typeof SHOW_GLOBAL_MENU_BUTTON !== 'undefined' && !SHOW_GLOBAL_MENU_BUTTON) {
    buttonMenuGlobal.style.display = 'none';
    return;
  }
  buttonMenuGlobal.addEventListener('click', function() {
    openGlobalMenu(getGlobalMenuState());
  });
})();
