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

function buildKidsLinkCard({ href, label, imageKey, inactive, refresh, confirmQuit, lockLabel, staggerIndex = 0 }) {
  const tag = inactive ? 'span' : 'a';
  const hrefAttr = !inactive && refresh
    ? ' href="#" data-reload'
    : !inactive && href ? ` href="${href}"${confirmQuit ? ' data-confirm-quit' : ''}` : '';
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
function isUndermurkTeacherHidden() {
  if (typeof debriefStats !== 'undefined' && debriefStats.undermurk === 0) {
    return true;
  }
  try {
    return new URLSearchParams(window.location.search).get('undermurk') === '0';
  } catch (e) {
    return false;
  }
}

// hideUndermurk=1 means the student turned Enter the Undermurk off from the
// Settings modal for the rest of this game (it rides like mute; see rememberGameSetting()).
function isUndermurkStudentOff() {
  if (typeof debriefStats !== 'undefined' && debriefStats.hideUndermurk === 1) {
    return true;
  }
  try {
    return new URLSearchParams(window.location.search).get('hideUndermurk') === '1';
  } catch (e) {
    return false;
  }
}

function isUndermurkHidden() {
  return isUndermurkTeacherHidden() || isUndermurkStudentOff();
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

// My Escape Room waits for the game itself: hidden through code entry, setup, character
// select and the intro cutscene, then shown once the map comes up (window.globalMenuGameStarted,
// set by startTimedGame() / startNoLimitGame() in splash-new.js). The debrief and Undermurk
// pages always show it.
function isMyEscapeRoomShown(state) {
  if (state === 'active') {
    return !!window.globalMenuGameStarted;
  }
  return state !== 'unfinished';
}

function buildGlobalMenuHTML(state) {
  // Quit This Escape Room leads every menu. Once a game has started it asks first
  // (openQuitConfirmModal()); before that (code entry, 'unfinished') it just goes.
  const quitCard = { href: getQuitHomeHref(), label: 'Quit This<br>Escape Room', imageKey: 'exitGame', confirmQuit: true };

  const kidsLinksByState = {
    unfinished: buildKidsLinksHTML([
      { ...quitCard, confirmQuit: false },
      { label: 'View Your<br>Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Escape Room First' },
      { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Finish Escape Room First' },
    ]),
    active: buildKidsLinksHTML([
      quitCard,
      { label: 'View Your<br>Score', imageKey: 'score', inactive: true, lockLabel: 'Finish Escape Room First' },
      { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Finish Escape Room First' },
    ]),
    finished: buildKidsLinksHTML([
      quitCard,
      { label: 'View Your<br>Score', imageKey: 'score', refresh: true },
      isUndermurkUnlocked()
        ? { href: appendLocationSearch('enter-the-undermurk.html'), label: 'Enter the<br>Undermurk', imageKey: 'undermurk' }
        : { label: 'Enter the<br>Undermurk', imageKey: 'undermurk', inactive: true, lockLabel: 'Requires All-Access' },
    ]),
    undermurkFromDebrief: buildKidsLinksHTML([
      quitCard,
      { href: appendLocationSearch('debrief.html'), label: 'View Your<br>Score', imageKey: 'score' },
      { href: appendLocationSearch('enter-the-undermurk.html'), label: 'Enter the<br>Undermurk', imageKey: 'undermurk' },
    ]),
  };

  const kidsLinks = kidsLinksByState[state] || kidsLinksByState.unfinished;

  return `
    <div class="global-menu">
      ${isMyEscapeRoomShown(state) ? buildMyEscapeRoomHTML() : ''}
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

const TOPIC_LABEL_OVERRIDES = {
  'authors-purpose': 'Author\'s Purpose',
  'social-emotional-learning': 'SEL',
};

// games.js topic slug → label, e.g. mixed-reading-skills → Mixed Reading Skills
// (same as formatLabel() in membership.js).
function formatTopicLabel(topic) {
  if (!topic) {
    return '';
  }
  if (TOPIC_LABEL_OVERRIDES[topic]) {
    return TOPIC_LABEL_OVERRIDES[topic];
  }
  return topic.split('-').filter(Boolean).map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

function escapeMenuHTML(text) {
  return String(text).replace(/[&<>"']/g, function(c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// My Escape Room, while playing: the game's theme, topic label and challenge count.
// The number of challenges is picked in setup, after the menu starts showing the
// section, so until then total is 0.
function getPlayingRoomInfo() {
  const info = typeof currentGameInfo !== 'undefined' ? currentGameInfo : null;
  const title = (info && info.title) ||
    (typeof resource !== 'undefined' && resource.info && resource.info.title) || '';
  return {
    title: title,
    topic: formatTopicLabel(info && info.topic),
    total: typeof settings !== 'undefined' ? Number(settings.activityCount) || 0 : 0,
    completed: typeof debriefStats !== 'undefined' ? Number(debriefStats.activitiesCompleted) || 0 : 0,
  };
}

// Adds the room to the stats that ride the debrief URL (and from there the Enter the
// Undermurk URL), so the section still shows, unchanged, on pages that don't load the game.
function addMyEscapeRoomToStats(stats) {
  const room = getPlayingRoomInfo();
  if (!room.title) {
    return stats;
  }
  stats.roomTitle = room.title;
  if (room.topic) stats.roomTopic = room.topic;
  if (room.total) stats.roomTotal = room.total;
  return stats;
}

// On the debrief and Undermurk pages: the room as the game left it, from the URL.
function getUrlRoomInfo() {
  const params = new URLSearchParams(window.location.search);
  return {
    title: params.get('roomTitle') || '',
    topic: params.get('roomTopic') || '',
    total: Number(params.get('roomTotal')) || 0,
    completed: Number(params.get('activitiesCompleted')) || 0,
  };
}

// My Escape Room: the game's theme and topic, and how many of its challenges are done.
// Shown while playing, then on the debrief and Undermurk pages (from the URL), so kids
// can always see which escape room they're in or just did.
function buildMyEscapeRoomHTML() {
  const room = isDebriefPage() || isEnterTheUndermurkPage() ? getUrlRoomInfo() : getPlayingRoomInfo();
  if (!room.title) {
    return '';
  }
  const title = escapeMenuHTML(room.title);
  const total = room.total;
  const completed = Math.min(room.completed, total);
  // One segment per challenge, the first `completed` of them filled. Before setup picks
  // the number of challenges, one empty segment stands in.
  const segmentsHTML = Array.from({ length: Math.max(total, 1) }, function(_, i) {
    return `<div class="global-menu__room-meter-segment${i < completed ? ' global-menu__room-meter-segment--done' : ''}"></div>`;
  }).join('');
  // Without a total the meter sits empty with no label. The label to the title's right
  // ("N/N") is hidden from screen readers,
  // which get the count from aria-valuetext.
  const maxAttr = total ? ` aria-valuemax="${total}"` : '';
  const valueText = total ? `${completed} of ${total} challenges complete` : '0 challenges complete';
  const countHTML = total
    ? `<span class="global-menu__room-count" aria-hidden="true">${completed}/${total}</span>`
    : '';
  return `
    <div class="global-menu__room" role="group" aria-label="My escape room">
      <div class="global-menu__room-heading">
        <span class="global-menu__room-title">${title}</span>
        ${countHTML}
      </div>
      <div class="global-menu__room-meter" role="progressbar" aria-valuemin="0"${maxAttr} aria-valuenow="${completed}" aria-valuetext="${valueText}" aria-label="Challenges complete">
        ${segmentsHTML}
      </div>
    </div>
  `;
}

// Students can turn audio off for the current game from the Settings modal (one Audio
// toggle drives both Sound's sound effects and music channels), unless the teacher turned
// Audio off in the dashboard (Sound is then unavailable and the row isn't shown).
function isSoundSettingsAvailable() {
  return typeof Sound !== 'undefined' && Sound.isAvailable();
}

// The Enter the Undermurk row shows unless the teacher turned Bonus Missions off.
// While playing it, the row is inactive (see buildSettingsHTML()).
function isUndermurkSettingAvailable() {
  return !isUndermurkTeacherHidden();
}

function buildSettingsButtonHTML() {
  if (!isSoundSettingsAvailable() && !isUndermurkSettingAvailable()) {
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
  const rows = [];
  if (isSoundSettingsAvailable()) {
    rows.push(buildSettingToggleHTML('audio', 'Audio', 'Play sound effects, voices, ambience, and music.', !Sound.isMuted() && !Sound.isMusicMuted()));
  }
  if (isUndermurkSettingAvailable()) {
    const inactive = isEnterTheUndermurkPage();
    const description = inactive
      ? 'You can\'t change this setting while doing a Bonus Mission.'
      : 'Show Enter the Undermurk, a bonus minigame.';
    rows.push(buildSettingToggleHTML('undermurk', 'Bonus Missions', description, !isUndermurkStudentOff(), inactive));
  }
  return `
    <div class="global-menu__sound-toggles">
      ${rows.join('')}
    </div>
  `;
}

const SETTINGS_TEACHER_FOOTER_HTML = 'Teachers: you can also manage these settings from your account.';

// inactive rows don't change: a press jiggles the ON / OFF pill with the lock sound
// (see initGlobalMenuSettingToggles()). aria-disabled rather than disabled, so clicks still arrive.
function buildSettingToggleHTML(setting, label, description, on, inactive) {
  const inactiveClass = inactive ? ' global-menu__sound-toggle--inactive' : '';
  const disabledAttr = inactive ? ' aria-disabled="true"' : '';
  const lockHTML = inactive
    ? '<img class="global-menu__sound-toggle-lock" src="assets/dpaam/menu-locked.png" alt="">'
    : '';
  return `
    <button type="button" class="global-menu__sound-toggle${inactiveClass}" role="switch" aria-checked="${on}" data-setting="${setting}" data-sfx="none"${disabledAttr}>
      <span class="global-menu__sound-toggle-text">
        <span class="global-menu__sound-toggle-label">${label}</span>
        <span class="global-menu__sound-toggle-description">${description}</span>
      </span>
      <span class="global-menu__sound-toggle-state" aria-hidden="true">${lockHTML}${on ? 'ON' : 'OFF'}</span>
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
function openModalFromGlobalMenu(title, buildHTML, buildFooterHTML, modalOptions) {
  if (pendingGlobalMenuOpen) {
    return;
  }
  if (isModalVisible) {
    toggleModalVisibility();
    pendingGlobalMenuOpen = setTimeout(function() {
      pendingGlobalMenuOpen = null;
      openModalFromGlobalMenu(title, buildHTML, buildFooterHTML, modalOptions);
    }, MODAL_CLOSE_DURATION_MS);
    return;
  }
  // Back arrow before the title returns to the menu (like the membership Theme modal).
  // The Quit confirm passes noBack: Keep Playing, Quit and ✕ are its only ways out.
  const titleHTML = modalOptions && modalOptions.noBack
    ? title
    : `<button type="button" class="modal__back global-menu__back" aria-label="Back to menu">←</button>${title}`;
  const buttonLabel = (modalOptions && modalOptions.buttonLabel) || 'Close';
  const onButtonClose = modalOptions && modalOptions.onButtonClose;
  createModal(titleHTML, buildHTML(), buttonLabel, onButtonClose, modalOptions);
  // createModal() clears the footer, so fill it in afterwards.
  const modalVersionEl = document.querySelector('.modal-version');
  if (modalVersionEl && buildFooterHTML) {
    modalVersionEl.innerHTML = buildFooterHTML();
  }
}

// Quit This Escape Room asks first in our own modal. Quit lifts the page's
// beforeunload guard (canRefresh, global.js) so the browser's own "Leave site?"
// prompt doesn't follow; Keep Playing closes the modal and stays on the page.
function openQuitConfirmModal(href) {
  openModalFromGlobalMenu(
    'Are you sure?',
    function() {
      return 'If you quit this escape room, you\'ll lose all your progress. You\'ll have to start over from the beginning.';
    },
    function() {
      return '<button type="button" class="modal__button global-menu__keep-playing">Keep Playing</button>';
    },
    {
      buttonLabel: 'Quit',
      noBack: true,
      onButtonClose: function() {
        if (typeof canRefresh !== 'undefined') {
          canRefresh = true;
        }
        setTimeout(function() {
          window.location.href = href;
        }, KIDS_LINK_NAVIGATE_DELAY_MS);
      },
    }
  );
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
    if (e.target.closest('.global-menu__keep-playing')) {
      // Same close as the modal's X.
      modalX.click();
      return;
    }
    if (!e.target.closest('.modal__popup--global-menu')) {
      return;
    }
    if (e.target.closest('.global-menu__settings-button')) {
      openModalFromGlobalMenu('Settings', buildSettingsHTML, null, {
        teacherHelp: true,
        teacherHelpHtml: SETTINGS_TEACHER_FOOTER_HTML,
        teacherHelpStatic: true,
      });
    } else if (e.target.closest('.global-menu__information-button')) {
      openModalFromGlobalMenu('Information', buildInformationHTML, buildVersionFooterHTML);
    }
  });
})();

// Settings last for the rest of this game: mute=1 and muteMusic=1 (both set by Audio)
// and hideUndermurk=1 (Enter the Undermurk) ride the debrief URL from the play page, and on the
// debrief and Undermurk pages they're kept in the URL so the links between them carry them.
// A new game starts with all of them on.
function rememberGameSetting(key, off) {
  if (isDebriefPage() || isEnterTheUndermurkPage()) {
    const params = new URLSearchParams(window.location.search);
    if (off) {
      params.set(key, '1');
    } else {
      params.delete(key);
    }
    const search = params.toString();
    history.replaceState(history.state, '', window.location.pathname + (search ? '?' + search : '') + window.location.hash);
  } else if (typeof debriefStats !== 'undefined') {
    if (off) {
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
    const href = link.getAttribute('href');
    if (link.hasAttribute('data-confirm-quit')) {
      openQuitConfirmModal(href);
      return;
    }
    navigating = true;
    setTimeout(function() {
      if (link.hasAttribute('data-reload')) {
        window.location.reload();
      } else {
        window.location.href = href;
      }
    }, KIDS_LINK_NAVIGATE_DELAY_MS);
  });
})();

(function initGlobalMenuSettingToggles() {
  document.addEventListener('click', function(e) {
    const toggle = e.target.closest('.global-menu__sound-toggle');
    if (!toggle) {
      return;
    }
    if (toggle.classList.contains('global-menu__sound-toggle--inactive')) {
      typeof Sound !== 'undefined' && Sound.event('ui.locked');
      const state = toggle.querySelector('.global-menu__sound-toggle-state');
      state.classList.remove('global-menu__kids-link-lock-icon--wiggle');
      void state.offsetWidth;
      state.classList.add('global-menu__kids-link-lock-icon--wiggle');
      return;
    }
    const setting = toggle.getAttribute('data-setting');
    let off;
    if (setting === 'undermurk') {
      off = !isUndermurkStudentOff();
      rememberGameSetting('hideUndermurk', off);
      // The debrief may already be showing the Bonus Mission panel.
      if (typeof window.updateDebriefUndermurkVisibility === 'function') {
        window.updateDebriefUndermurkVisibility();
      }
    } else {
      if (typeof Sound === 'undefined') {
        return;
      }
      // Audio: shows ON only while both channels are on, so a press from a
      // half-muted state (an older link) turns everything off.
      off = toggle.getAttribute('aria-checked') === 'true';
      Sound.setMuted(off);
      Sound.setMusicMuted(off);
      rememberGameSetting('mute', off);
      rememberGameSetting('muteMusic', off);
    }
    toggle.setAttribute('aria-checked', String(!off));
    toggle.querySelector('.global-menu__sound-toggle-state').textContent = off ? 'OFF' : 'ON';
    // Clicks either way, even with Audio off (ignoreMute in SOUND_CONFIG).
    if (typeof Sound !== 'undefined') {
      Sound.event('ui.toggle');
    }
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
    isUndermurkHidden()
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
