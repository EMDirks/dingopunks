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
  const imageKeyClass = imageKey ? ` global-menu__kids-link--${imageKey}` : '';
  const enterDelay = KIDS_LINK_ENTER_BASE_DELAY_MS + staggerIndex * KIDS_LINK_ENTER_STAGGER_MS;
  const styleAttr = ` style="animation-delay: ${enterDelay}ms"`;
  const image = kidsCardImages[imageKey][inactive ? 'inactive' : 'active'];
  const imageWrapHTML = `
      <div class="global-menu__kids-link-image-wrap">
        <img class="global-menu__kids-link-image" src="${image}" alt="" aria-hidden="true">
      </div>`;
  const labelHTML = `<span class="global-menu__kids-link-label">${label}</span>`;

  if (inactive) {
    const lockHTML = lockLabel ? `
      <div class="global-menu__kids-link-lock-wrap">
        <div class="global-menu__kids-link-lock-clip" aria-hidden="true">
          <img class="global-menu__kids-link-lock-icon" src="assets/global/menu-lock.png" alt="" aria-hidden="true">
        </div>
        <span class="global-menu__kids-link-lock-label">${lockLabel}</span>
      </div>` : '';
    return `
    <${tag} class="global-menu__kids-link${imageKeyClass}${inactiveClass}"${hrefAttr}${styleAttr}>
      <div class="global-menu__kids-link-content">
        ${imageWrapHTML}
        ${labelHTML}
      </div>${lockHTML}
    </${tag}>
  `;
  }

  return `
    <${tag} class="global-menu__kids-link${imageKeyClass}${inactiveClass}"${hrefAttr}${styleAttr}>
      ${imageWrapHTML}
      ${labelHTML}
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

function getPlayHomeHref() {
  const pathname = window.location.pathname;
  if (pathname.endsWith('free-play.html') || pathname.endsWith('/free-play')) {
    return 'free-play.html';
  }
  // free-play → debrief (and Undermurk-with-slug) pass from=free in the query string
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('from') === 'free') {
      return 'free-play.html';
    }
  } catch (e) { /* ignore */ }
  // answer-key "Play an Escape Room" and default play both go to index.html
  return 'index.html';
}

// Mid-session quit: stay on the current entry page (answer-key reloads itself).
function getQuitHomeHref() {
  const pathname = window.location.pathname;
  if (pathname.endsWith('answer-key.html') || pathname.endsWith('/answer-key')) {
    return 'answer-key.html';
  }
  return getPlayHomeHref();
}

function isEnterTheUndermurkPage() {
  const pathname = window.location.pathname;
  return pathname.endsWith('enter-the-undermurk.html') || pathname.endsWith('enter-the-undermurk') ||
    pathname.endsWith('into-the-undermurk.html') || pathname.endsWith('into-the-undermurk');
}

function isDebriefPage() {
  // Cloudflare Pages often serves /debrief (no .html)
  return /(?:^|\/)debrief(?:\.html)?\/?$/.test(window.location.pathname);
}

function hasDebriefSlug() {
  if (!window.location.search) {
    return false;
  }
  const params = new URLSearchParams(window.location.search);
  return params.has('outcome') || params.has('teamSize');
}

function appendLocationSearch(href) {
  const search = window.location.search;
  return search ? href + search : href;
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

  const playHomeHref = getPlayHomeHref();
  const quitHomeHref = getQuitHomeHref();

  const kidsLinksByState = {
    unfinished: buildKidsLinksHTML([
      { href: playHomeHref, label: 'Play an<br>Escape Room', imageKey: 'play' },
      { label: 'View Your<br>Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Escape Room First' },
      { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Coming Soon' },
    ]),
    active: buildKidsLinksHTML([
      { href: quitHomeHref, label: 'Quit This<br>Escape Room', imageKey: 'exitGame' },
      { label: 'View Your<br>Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Escape Room First' },
      { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Coming Soon' },
    ]),
    finished: buildKidsLinksHTML([
      { href: playHomeHref, label: 'Play Another<br>Escape Room', imageKey: 'playAgain' },
      { label: 'View Your<br>Score', imageKey: 'score', refresh: true },
      (typeof UNDERMURK_BUTTON !== 'undefined' && !UNDERMURK_BUTTON)
        ? { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Coming Soon' }
        : { href: appendLocationSearch('enter-the-undermurk.html'), label: 'Enter the<br>Undermurk', imageKey: 'undermurk' },
    ]),
    undermurkFromDebrief: buildKidsLinksHTML([
      { href: getPlayHomeHref(), label: 'Play Another<br>Escape Room', imageKey: 'playAgain' },
      { href: appendLocationSearch('debrief.html'), label: 'View Your<br>Score', imageKey: 'score' },
      { href: appendLocationSearch('enter-the-undermurk.html'), label: 'Enter the<br>Undermurk', imageKey: 'undermurk' },
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
  if (isDebriefPage()) {
    return 'finished';
  }
  if (isEnterTheUndermurkPage()) {
    return 'undermurkFromDebrief';
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
  const lockLabel = link.querySelector('.global-menu__kids-link-lock-label');

  if (lockIcon) {
    lockIcon.classList.remove('global-menu__kids-link-lock-icon--wiggle');
    void lockIcon.offsetWidth;
    lockIcon.classList.add('global-menu__kids-link-lock-icon--wiggle');
  }

  if (lockLabel) {
    lockLabel.classList.remove('global-menu__kids-link-lock-label--flash');
    void lockLabel.offsetWidth;
    lockLabel.classList.add('global-menu__kids-link-lock-label--flash');
  }
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
    if (e.animationName === 'global-menu-kids-link-lock-label-slam') {
      e.target.classList.remove('global-menu__kids-link-lock-label--flash');
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
