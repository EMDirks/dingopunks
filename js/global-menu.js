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
// Student cards wait this long before navigating, so their click sound plays.
const KIDS_LINK_NAVIGATE_DELAY_MS = 200;

function buildKidsLinkCard({ href, label, imageKey, inactive, refresh, lockLabel, staggerIndex = 0 }) {
  const tag = inactive ? 'span' : 'a';
  const hrefAttr = !inactive && refresh
    ? ' href="#" data-reload'
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
  cards = withoutHiddenUndermurk(cards);
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

// All-Access launches stamp undermurk=1 onto the debrief slug. UNDERMURK_BUTTON
// opens the bonus mission to everyone regardless of that slug.
function isUndermurkUnlocked() {
  if (typeof UNDERMURK_BUTTON !== 'undefined' && UNDERMURK_BUTTON) {
    return true;
  }
  try {
    return new URLSearchParams(window.location.search).get('undermurk') === '1';
  } catch (e) {
    return false;
  }
}

// undermurk=0 means the teacher turned Bonus Missions off. During play there is
// no slug yet, so the live debriefStats set at launch is checked too.
function isUndermurkHidden() {
  if (typeof debriefStats !== 'undefined' && debriefStats.undermurk === 0) {
    return true;
  }
  try {
    return new URLSearchParams(window.location.search).get('undermurk') === '0';
  } catch (e) {
    return false;
  }
}

function isIndexPage() {
  return /(?:^|\/)(?:index(?:\.html)?)?$/.test(window.location.pathname);
}

// index.html's code-entry step never shows the Undermurk card; the Bonus
// Missions toggle only governs what comes after.
function isIndexCodeEntryMenu(state) {
  return state === 'unfinished' && isIndexPage();
}

function withoutHiddenUndermurk(cards) {
  if (!isUndermurkHidden()) {
    return cards;
  }
  return cards.filter(function (card) {
    return card.imageKey !== 'undermurk';
  });
}

function appendLocationSearch(href) {
  const search = window.location.search;
  return search ? href + search : href;
}

function buildGlobalMenuHTML(state) {
  const playHomeHref = getPlayHomeHref();
  const quitHomeHref = getQuitHomeHref();

  const kidsLinksByState = {
    unfinished: buildKidsLinksHTML([
      { href: playHomeHref, label: 'Play an<br>Escape Room', imageKey: 'play' },
      { label: 'View Your<br>Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Escape Room First' },
      isIndexCodeEntryMenu('unfinished')
        ? null
        : { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Finish Escape Room First' },
    ].filter(Boolean)),
    active: buildKidsLinksHTML([
      { href: quitHomeHref, label: 'Quit This<br>Escape Room', imageKey: 'exitGame' },
      { label: 'View Your<br>Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Escape Room First' },
      { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Finish Escape Room First' },
    ]),
    finished: buildKidsLinksHTML([
      { href: playHomeHref, label: 'Play Another<br>Escape Room', imageKey: 'playAgain' },
      { label: 'View Your<br>Score', imageKey: 'score', refresh: true },
      isUndermurkUnlocked()
        ? { href: appendLocationSearch('enter-the-undermurk.html'), label: 'Enter the<br>Undermurk', imageKey: 'undermurk' }
        : { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Requires All-Access' },
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
      <div class="global-menu__links">
        ${buildSettingsButtonHTML()}
        ${buildGlobalMenuLinkHTML('information', 'Information', 'modal-icon-information.png')}
      </div>
    </div>
  `;
}

// Students can mute sound effects and music & ambience separately for the current game
// from the Settings modal, unless the teacher turned Audio off in the dashboard (Sound is
// then unavailable and the Settings button isn't shown).
function isSoundSettingsAvailable() {
  return typeof Sound !== 'undefined' && Sound.isAvailable();
}

function buildSettingsButtonHTML() {
  if (!isSoundSettingsAvailable()) {
    return '';
  }
  return buildGlobalMenuLinkHTML('settings', 'Settings', 'modal-icon-settings.png');
}

// Full-width menu row with a small icon on a colored square (color set per key in CSS).
function buildGlobalMenuLinkHTML(key, label, icon) {
  return `
    <button type="button" class="global-menu__link global-menu__link--${key} global-menu__${key}-button">
      <img class="global-menu__link-icon" src="assets/global/${icon}" alt="" aria-hidden="true">
      ${label}
    </button>
  `;
}

function buildSettingsHTML() {
  return `
    <div class="global-menu__sound-toggles">
      ${buildSoundToggleHTML('sound', 'Sound effects', 'Voices, button clicks, and simple effects.', !Sound.isMuted())}
      ${buildSoundToggleHTML('music', 'Music & ambience', 'Songs and other looping background sounds.', !Sound.isMusicMuted())}
    </div>
  `;
}

function buildSoundToggleHTML(channel, label, description, on) {
  return `
    <button type="button" class="global-menu__sound-toggle" role="switch" aria-checked="${on}" data-sound-channel="${channel}" data-sfx="none">
      <span class="global-menu__sound-toggle-text">
        <span class="global-menu__sound-toggle-label">${label}</span>
        <span class="global-menu__sound-toggle-description">${description}</span>
      </span>
      <span class="global-menu__sound-toggle-state" aria-hidden="true">${on ? 'ON' : 'OFF'}</span>
    </button>
  `;
}

// Information modal: links to the Terms of Service, Privacy Policy, Licensing and Credits (each
// opens in a new tab), with the version number in the footer beside Close.
function buildInformationHTML() {
  return `
    <div class="global-menu__information">
      <div class="global-menu__information-links">
        <a class="global-menu__information-link" href="https://dingopunks.com/pages/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        <a class="global-menu__information-link" href="https://dingopunks.com/pages/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a class="global-menu__information-link" href="https://dingopunks.com/pages/licensing" target="_blank" rel="noopener noreferrer">Licensing</a>
        <a class="global-menu__information-link" href="https://dingopunks.com/pages/credits" target="_blank" rel="noopener noreferrer">Credits</a>
      </div>
    </div>
  `;
}

// Closes the menu, then opens a modal from it (Settings or Information) once the
// menu has finished closing, so it gets its own opening animation (same as
// openGlobalMenu()).
function openModalFromGlobalMenu(title, buildHTML, buildFooterHTML) {
  if (pendingGlobalMenuOpen) {
    return;
  }
  if (isModalVisible) {
    toggleModalVisibility();
    pendingGlobalMenuOpen = setTimeout(function() {
      pendingGlobalMenuOpen = null;
      openModalFromGlobalMenu(title, buildHTML, buildFooterHTML);
    }, MODAL_CLOSE_DURATION_MS);
    return;
  }
  // Back arrow before the title returns to the menu (like the membership Theme modal).
  const titleHTML = `<button type="button" class="modal__back global-menu__back" aria-label="Back to menu">←</button>${title}`;
  createModal(titleHTML, buildHTML(), 'Close');
  // createModal() clears the footer, so fill it in afterwards.
  const modalVersionEl = document.querySelector('.modal-version');
  if (modalVersionEl && buildFooterHTML) {
    modalVersionEl.innerHTML = buildFooterHTML();
  }
}

function buildVersionFooterHTML() {
  return typeof version !== 'undefined'
    ? `<span class="modal-version__number"> VERSION ${version}</span>`
    : '';
}

(function initGlobalMenuButtons() {
  document.addEventListener('click', function(e) {
    if (e.target.closest('.global-menu__back')) {
      openGlobalMenu(getGlobalMenuState());
      return;
    }
    if (!e.target.closest('.modal__popup--global-menu')) {
      return;
    }
    if (e.target.closest('.global-menu__settings-button')) {
      openModalFromGlobalMenu('Settings', buildSettingsHTML);
    } else if (e.target.closest('.global-menu__information-button')) {
      openModalFromGlobalMenu('Information', buildInformationHTML, buildVersionFooterHTML);
    }
  });
})();

// Muting lasts for the rest of this game: mute=1 (Sound effects) and muteMusic=1 (Music & ambience)
// ride the debrief URL from the play page, and on the debrief and Undermurk pages
// they're kept in the URL so the links between them carry them. A new game starts
// with both on.
function rememberSoundMuted(key, muted) {
  if (isDebriefPage() || isEnterTheUndermurkPage()) {
    const params = new URLSearchParams(window.location.search);
    if (muted) {
      params.set(key, '1');
    } else {
      params.delete(key);
    }
    const search = params.toString();
    history.replaceState(history.state, '', window.location.pathname + (search ? '?' + search : '') + window.location.hash);
  } else if (typeof debriefStats !== 'undefined') {
    if (muted) {
      debriefStats[key] = 1;
    } else {
      delete debriefStats[key];
    }
  }
}

(function initGlobalMenuKidsLinkDelay() {
  let navigating = false;
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a.global-menu__kids-link');
    if (!link || !link.closest('.modal__popup--global-menu')) {
      return;
    }
    // Leave new-tab / new-window clicks to the browser.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    if (navigating) {
      return;
    }
    navigating = true;
    const href = link.getAttribute('href');
    setTimeout(function() {
      if (link.hasAttribute('data-reload')) {
        window.location.reload();
      } else {
        window.location.href = href;
      }
    }, KIDS_LINK_NAVIGATE_DELAY_MS);
  });
})();

(function initGlobalMenuSoundToggle() {
  document.addEventListener('click', function(e) {
    const toggle = e.target.closest('.global-menu__sound-toggle');
    if (!toggle || typeof Sound === 'undefined') {
      return;
    }
    const isMusic = toggle.getAttribute('data-sound-channel') === 'music';
    const muted = isMusic ? Sound.setMusicMuted(!Sound.isMusicMuted()) : Sound.setMuted(!Sound.isMuted());
    toggle.setAttribute('aria-checked', String(!muted));
    toggle.querySelector('.global-menu__sound-toggle-state').textContent = muted ? 'OFF' : 'ON';
    rememberSoundMuted(isMusic ? 'muteMusic' : 'mute', muted);
    // Clicks either way, even with Sound effects off (ignoreMute in SOUND_CONFIG).
    Sound.event('ui.toggle');
  });
})();

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

// Matches the 200ms hide delay in toggleModalVisibility().
const MODAL_CLOSE_DURATION_MS = 200;
let pendingGlobalMenuOpen = null;

function openGlobalMenu(state = 'unfinished') {
  if (pendingGlobalMenuOpen) {
    return;
  }
  // Another modal is open: let it finish closing so the menu gets its own
  // opening animation instead of swapping into the old popup.
  if (isModalVisible) {
    toggleModalVisibility();
    pendingGlobalMenuOpen = setTimeout(function() {
      pendingGlobalMenuOpen = null;
      openGlobalMenu(state);
    }, MODAL_CLOSE_DURATION_MS);
    return;
  }
  modalPopup.classList.add('modal__popup--global-menu');
  // Two cards instead of three: narrow the popup so they keep their size
  // without wide empty margins.
  modalPopup.classList.toggle(
    'modal__popup--global-menu-compact',
    isUndermurkHidden() || isIndexCodeEntryMenu(state)
  );
  createModal('Menu', buildGlobalMenuHTML(state), 'Close');
}

function playInactiveKidsLinkWiggle(link) {
  typeof Sound !== 'undefined' && Sound.event('ui.locked');
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

// Each student card plays its sound as it starts sliding in, so the sounds
// follow the stagger set by animation-delay in buildKidsLinkCard.
(function initGlobalMenuCardSound() {
  document.addEventListener('animationstart', function(e) {
    if (e.animationName === 'global-menu-kids-link-in') {
      typeof Sound !== 'undefined' && Sound.event('menu.cardIn');
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
    if (isModalVisible && modalPopup.classList.contains('modal__popup--global-menu')) {
      toggleModalVisibility();
      return;
    }
    openGlobalMenu(getGlobalMenuState());
  });
})();
