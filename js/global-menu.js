// Shared global-menu logic used by both global.js (in-game pages) and
// debrief.js (debrief page). Both files define their own `modalPopup` and
// `createModal`; this file references those at call time, so it works on any
// page that loads it after its page-specific modal script.
//
// States:
//   'unfinished' — default (splash still visible, game not started)
//   'active'     — escape room in progress (splash hidden, game on screen)
//   'finished'   — debrief page (escape room complete)

const kidsCardImages = {
  play: {
    active: 'assets/global/menu-play-game.png',
    inactive: 'assets/global/menu-play-now-inactive.png',
  },
  playAgain: {
    active: 'assets/global/menu-play-again.png',
    inactive: 'assets/global/menu-play-again-inactive.png',
  },
  exitGame: {
    active: 'assets/global/menu-exit-game.png',
    inactive: 'assets/global/menu-exit-game-inactive.png',
  },
  score: {
    active: 'assets/global/menu-view-score.png',
    inactive: 'assets/global/menu-view-score-inactive.png',
  },
  undermurk: {
    active: 'assets/global/menu-enter-the-undermurk.png',
    inactive: 'assets/global/menu-enter-the-undermurk-inactive.png',
  },
};

const KIDS_LINK_ENTER_BASE_DELAY_MS = 200;
const KIDS_LINK_ENTER_STAGGER_MS = 100;

function buildKidsLinkCard({ href, label, imageKey, inactive, refresh, lockLabel, staggerIndex = 0 }) {
  const tag = inactive ? 'span' : 'a';
  const hrefAttr = !inactive && refresh
    ? ' href="#" onclick="window.location.reload(); return false;"'
    : !inactive && href ? ` href="${href}"` : '';
  const inactiveClass = inactive ? ' global-menu__kids-link--inactive' : '';
  const enterDelay = KIDS_LINK_ENTER_BASE_DELAY_MS + staggerIndex * KIDS_LINK_ENTER_STAGGER_MS;
  const styleAttr = ` style="animation-delay: ${enterDelay}ms"`;
  const image = kidsCardImages[imageKey][inactive ? 'inactive' : 'active'];
  const lockHTML = inactive && lockLabel ? `
      <div class="global-menu__kids-link-lock-clip" aria-hidden="true">
        <div class="global-menu__kids-link-lock">
          <img class="global-menu__kids-link-lock-icon" src="assets/global/menu-lock.png" alt="" aria-hidden="true">
          <span class="global-menu__kids-link-lock-label">${lockLabel}</span>
        </div>
      </div>` : '';
  return `
    <${tag} class="global-menu__kids-link${inactiveClass}"${hrefAttr}${styleAttr}>
      <div class="global-menu__kids-link-image-wrap">
        <img class="global-menu__kids-link-image" src="${image}" alt="" aria-hidden="true">
      </div>
      <span class="global-menu__kids-link-label">${label}</span>${lockHTML}
    </${tag}>
  `;
}

function buildKidsLinksHTML(cards) {
  let html = '';
  for (let i = 0; i < cards.length; i++) {
    html += buildKidsLinkCard({ ...cards[i], staggerIndex: i });
  }
  return html;
}

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
          Teachers
        </a>
        <!--
        <a class="global-menu__teachers-link" href="membership.html">
          <img class="global-menu__teachers-link-icon" src="assets/global/modal-icon-dpaam.png" alt="" aria-hidden="true">
          All-Access Membership
        </a>
        -->
      </div>
    </div>
  `;

  const kidsLinksByState = {
    unfinished: buildKidsLinksHTML([
      { href: 'index.html', label: 'Play Now', imageKey: 'play' },
      { label: 'View Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Game First' },
      { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Finish Game First' },
    ]),
    active: buildKidsLinksHTML([
      { href: 'index.html', label: 'Exit Game', imageKey: 'exitGame' },
      { label: 'View Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Game First' },
      { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Finish Game First' },
    ]),
    finished: buildKidsLinksHTML([
      { href: 'index.html', label: 'Play Again', imageKey: 'playAgain' },
      { label: 'View Score', imageKey: 'score', refresh: true },
      { href: 'enter-the-undermurk.html', label: 'Enter the<br>Undermurk', imageKey: 'undermurk' },
    ]),
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

function playInactiveKidsLinkWiggle(link) {
  const lockIcon = link.querySelector('.global-menu__kids-link-lock-icon');
  if (!lockIcon) {
    return;
  }
  lockIcon.classList.remove('global-menu__kids-link-lock-icon--wiggle');
  void lockIcon.offsetWidth;
  lockIcon.classList.add('global-menu__kids-link-lock-icon--wiggle');
}

(function initGlobalMenuInactiveWiggle() {
  document.addEventListener('click', function(e) {
    const link = e.target.closest('.global-menu__kids-link--inactive');
    if (!link || !link.closest('.modal__popup--global-menu')) {
      return;
    }
    playInactiveKidsLinkWiggle(link);
  });

  document.addEventListener('animationend', function(e) {
    if (e.animationName === 'global-menu-kids-link-icon-wiggle') {
      e.target.classList.remove('global-menu__kids-link-lock-icon--wiggle');
    }
  });
})();

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
