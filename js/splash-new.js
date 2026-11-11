// define variables
let splashContainer;
let splashContent;
let splashButton;
let splashBackButton;
let splashTitle;
let splashSubtitle;

// set variables
let splashIndex = 0;
let isAccess = true;
// Which way the next step comes in from: 'forward' (from the right) or 'back' (from the left).
let splashEntryDirection = 'forward';
// Set once Next or Back is clicked, so the other button can't start a second transition.
let splashNavigating = false;
// Set by BACK on the "You're playing" step, which reloads the page to an empty
// code entry (or the free game picker). The reload skips the bumpers.
const SPLASH_BACK_RELOAD_KEY = 'dingoPunksSplashBack';
const splashReturnedBack = (function() {
  try {
    const value = sessionStorage.getItem(SPLASH_BACK_RELOAD_KEY);
    sessionStorage.removeItem(SPLASH_BACK_RELOAD_KEY);
    return value === '1';
  } catch (e) {
    return false;
  }
})();
if (splashReturnedBack) splashEntryDirection = 'back';

// rate limiting
let pinFailedAttempts = 0;
let pinLockoutTimeoutId = null;
let pinLockoutIntervalId = null;
const PIN_MAX_ATTEMPTS = 5;
const PIN_LOCKOUT_SECONDS = 60;
// Matches the access-shake animation in splash.css (0.2s x 2).
const ACCESS_FLASH_MS = 400;
const splashTransitionDuration = 170;
// How long a step takes to wind up and slide out; keep in step with splash-step-out in css/splash.css.
const splashExitDuration = 300;
// Bad guy slide in during cutscenes; keep in step with .cutscene-badguy-move in
// css/splash-new.css and the cutscene.moveBadguyIn/Fail delays in js/sound-config.js.
const BADGUY_MOVE_MS = 150;
// Pause after the splash button is clicked, so its click is heard before the slide-out.
const splashButtonDelay = 200;
const version = '4.0.68';

const promoDelay = 2000;
const hidethemeDelay = 3000;
// Dingo Punks bumper timing, counted from its start. The logo comes in at 400ms,
// settles by 820ms (bumper-logo-slam in css/splash-new.css), and holds for about
// 400ms. It then starts bumper-logo-hang-fall, and the background fades as it drops.
// AUTO_LAUNCH_MIN_MS allows for this.
const BUMPER_LOGO_EXIT_MS = 1200;
const BUMPER_BACKGROUND_FADE_MS = 1850;
// When START pops in on the code entry bumper, just before the logo settles at
// 820ms. Its click starts the logo's exit, so the background fade is counted from
// there.
const BUMPER_START_IN_MS = 700;
const BUMPER_START_FADE_DELAY_MS = BUMPER_BACKGROUND_FADE_MS - BUMPER_LOGO_EXIT_MS;
const BUMPER_START_FALL_DELAY_MS = 200; // pause after START before the logo comes loose
const BUMPER_START_REMOVE_MS = 200;
// Harper bumper timing, counted from when the logo has loaded. The fade must match
// .harper-bumper's opacity transition in css/splash-new.css.
const HARPER_BUMPER_HOLD_MS = 1400;
const HARPER_BUMPER_FADE_MS = 300;
// How long each logo frame shows before swapping to the next.
const HARPER_BUMPER_FRAME_MS = 300;
const HARPER_BUMPER_FRAMES = [
  'assets/branding/logo/logo-harper-frame-1.png',
  'assets/branding/logo/logo-harper-frame-2.png',
];
// Don't let a slow or stalled logo hold the page on a white screen.
const HARPER_BUMPER_LOAD_TIMEOUT_MS = 1500;
const isAnswersMode = new URLSearchParams(window.location.search).get('answers') === '1';

// set order
let splashOrder = [];

function isPinLockedOut() {
  return pinLockoutTimeoutId !== null;
}

// Server rate limits (resolveGameCode) can ask for a window well past a minute,
// so anything over a minute reads as m:ss. At or under a minute — which is every
// locally triggered lockout — the display is unchanged.
function writeLockoutCountdown(secondsEl, labelEl, remaining) {
  if (remaining > 60) {
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    if (secondsEl) secondsEl.textContent = minutes + ':' + String(seconds).padStart(2, '0');
    if (labelEl) labelEl.textContent = '';
    return;
  }
  if (secondsEl) secondsEl.textContent = remaining;
  if (labelEl) labelEl.textContent = 's';
}

function triggerPinLockout(lockoutSeconds) {
  const total = Number.isFinite(lockoutSeconds) && lockoutSeconds > 0
    ? Math.ceil(lockoutSeconds)
    : PIN_LOCKOUT_SECONDS;
  const overlay = document.querySelector('.rate-limit-overlay');
  const secondsEl = overlay ? overlay.querySelector('.rate-limit-overlay__seconds') : null;
  const labelEl = overlay ? overlay.querySelector('.rate-limit-overlay__seconds-label') : null;
  let remaining = total;
  writeLockoutCountdown(secondsEl, labelEl, remaining);
  if (overlay) overlay.classList.replace('rate-limit-overlay--hidden', 'rate-limit-overlay--visible');

  pinLockoutIntervalId = setInterval(function() {
    remaining -= 1;
    writeLockoutCountdown(secondsEl, labelEl, remaining);
  }, 1000);

  pinLockoutTimeoutId = setTimeout(endPinLockout, total * 1000);
}

function endPinLockout() {
  clearTimeout(pinLockoutTimeoutId);
  clearInterval(pinLockoutIntervalId);
  pinLockoutTimeoutId = null;
  pinLockoutIntervalId = null;
  pinFailedAttempts = 0;

  const overlay = document.querySelector('.rate-limit-overlay');
  if (overlay) overlay.classList.replace('rate-limit-overlay--visible', 'rate-limit-overlay--hidden');

  clearAccessInputs();
}

function clearAccessInputs() {
  const cells = document.querySelectorAll('.access-input');
  cells.forEach(function(cell, i) {
    cell.value = '';
    if (i === 0) {
      cell.focus();
      activeInput__codeInput = cell;
    }
  });
}

function fillAccessInputs(code) {
  const cells = document.querySelectorAll('.access-input');
  cells.forEach(function(cell, i) {
    cell.value = code.charAt(i);
  });
}

// Accepts a bare code or a copied play.dingopunks.com/?CODE link.
function extractPastedCode(text) {
  let raw = String(text || '').trim();
  try {
    const url = new URL(raw);
    if (url.search.length > 1) raw = url.search.slice(1);
  } catch (error) {
    // Not a URL; use the text as-is.
  }
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5);
}

function handleAccessCodePaste(event) {
  if (awaitingBumperStart || !isAccess || isPinLockedOut() || membershipLookupPending) return;

  const cells = document.querySelectorAll('.access-input');
  if (!cells.length || cells[0].disabled) return;

  const target = event.target;
  if (target && target.matches && target.matches('input, textarea') && !target.classList.contains('access-input')) {
    return;
  }

  const code = extractPastedCode(event.clipboardData && event.clipboardData.getData('text'));
  if (!code) return;

  event.preventDefault();
  fillAccessInputs(code);

  const firstEmpty = Array.from(cells).find(function(cell) { return !cell.value; });
  if (firstEmpty) {
    firstEmpty.focus({ preventScroll: true });
    activeInput__codeInput = firstEmpty;
  } else {
    cells.forEach(function(cell) { cell.blur(); });
    activeInput__codeInput = null;
  }

  checkIfAccessInputIsFilled();
}

//////////////////////
// MEMBERSHIP CODES
//////////////////////

// Membership share codes always contain at least one letter; legacy purchase
// codes are always five digits. That split is the whole reason the two systems
// can share one input without ever colliding, so every branch below keys on it.
// Mirrors CODE_ALPHABET in firebase-functions/share-codes.js — no lookalike
// characters (O/0 and I/1 are all excluded).
const MEMBERSHIP_CODE_PATTERN = /^[A-HJ-NP-Z2-9]{5}$/;

// Hold an auto-launch until the opening bumper has played out, so a fast
// lookup doesn't transition the splash out from under the logo animation.
const AUTO_LAUNCH_MIN_MS = 2450;

// Set once, before drawSplash, when the page was opened as play.dingopunks.com/?CODE.
let autoLaunchCode = null;

// True while the code entry screen is built but still behind the START bumper.
let awaitingBumperStart = false;
// Blocks typed entry while a lookup is in flight or a game is already loading.
let membershipLookupPending = false;
let shareCodeModulePromise = null;
let shareCodeModuleFailed = false;
let directLinkLoader = null;
let directLinkLoaderRemovalId = null;

// The loader is created only for a validated direct-link code. Keeping these
// helpers global also makes the animation easy to preview from DevTools with
// showDirectLinkLoader() and hideDirectLinkLoader().
function showDirectLinkLoader() {
  clearTimeout(directLinkLoaderRemovalId);

  if (directLinkLoader) {
    directLinkLoader.classList.remove('direct-link-loader--hidden');
    return;
  }

  directLinkLoader = document.createElement('div');
  directLinkLoader.className = 'direct-link-loader';
  directLinkLoader.setAttribute('role', 'status');
  directLinkLoader.setAttribute('aria-label', 'Loading escape room');

  const streakContainer = document.createElement('div');
  streakContainer.className = 'direct-link-loader__streaks';
  streakContainer.setAttribute('aria-hidden', 'true');

  for (let i = 0; i < 9; i++) {
    const streak = document.createElement('div');
    streak.className = 'direct-link-loader__streak';
    streakContainer.appendChild(streak);
  }

  directLinkLoader.appendChild(streakContainer);
  document.body.appendChild(directLinkLoader);
}

function hideDirectLinkLoader() {
  if (!directLinkLoader) return;

  const loaderToRemove = directLinkLoader;
  loaderToRemove.classList.add('direct-link-loader--hidden');
  clearTimeout(directLinkLoaderRemovalId);
  directLinkLoaderRemovalId = setTimeout(function() {
    loaderToRemove.remove();
    if (directLinkLoader === loaderToRemove) {
      directLinkLoader = null;
    }
  }, 250);
}

function membershipCodeFromUrl() {
  const raw = window.location.search.slice(1).toUpperCase();
  return isMembershipCode(raw) ? raw : null;
}

function isMembershipCode(code) {
  return MEMBERSHIP_CODE_PATTERN.test(code) && /[A-Z]/.test(code);
}

// Loaded on first use only. A student playing a legacy purchase code never
// downloads the Firebase SDK, and never depends on it being reachable.
function lookupMembershipCode(code) {
  if (!shareCodeModulePromise) {
    const moduleUrl = new URL('js/play-share-code.js?version=' + version, document.baseURI).href;
    // Browsers remember a failed module download (including the Firebase SDK
    // behind it) until the page reloads, so a retry in place can't succeed.
    shareCodeModulePromise = import(moduleUrl).catch(function(error) {
      shareCodeModuleFailed = true;
      throw error;
    });
  }
  return shareCodeModulePromise.then(function(module) {
    return module.lookupShareCode(code);
  });
}

function setManualCodeCheckingState(isChecking) {
  const cells = document.querySelectorAll('.access-input');
  const inputContainer = document.querySelector('.access-input-container');

  cells.forEach(function(cell) {
    cell.disabled = isChecking;
  });
  keyboardButtonsSplash.forEach(function(button) {
    button.disabled = isChecking;
  });

  if (inputContainer) {
    inputContainer.classList.toggle('access-input-container--checking', isChecking);
  }
  if (keyboardSplash) {
    keyboardSplash.classList.toggle('keyboard--splash-checking', isChecking);
  }
}

// The only feedback a rejected code gets: flash the cells red and clear them.
function flashAccessInputs() {
  typeof Sound !== 'undefined' && Sound.event('access.wrong');
  const cells = document.querySelectorAll('.access-input');
  for (let i = 0; i < cells.length; i++) {
    toggleClass(cells[i], 'access-input--no-flash', 'access-input--flash');
    setTimeout(clearCells, ACCESS_FLASH_MS, cells[i], i);
  }

  function clearCells(cell, i) {
    toggleClass(cell, 'access-input--flash', 'access-input--no-flash');
    toggleClass(splashButton, 'splash-button--visible', 'splash-button--hidden');
    cell.value = '';
    cell.blur();
    if (i == 0) {
      cell.focus();
      activeInput__codeInput = cell;
    }
  }
}

// createModal writes innerHTML, and the cells accept any character, so the code
// is reduced to plain alphanumerics before it's shown.
function showBadCodeModal(code) {
  const displayCode = String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  const pathname = window.location.pathname;
  const isAnswerKeyPage =
    pathname.endsWith('answer-key.html') || pathname.endsWith('/answer-key');
  const suffix = isAnswerKeyPage
    ? 'Check the code and try again.'
    : 'Check the code and try again, or ask your teacher for a new one.';
  const isPlaySplash =
    !isAnswerKeyPage &&
    (pathname === '/' ||
      pathname.endsWith('/index.html') ||
      pathname.endsWith('/index'));
  // Held until the cells finish shaking (and are cleared) before the popup opens.
  setTimeout(createModal, ACCESS_FLASH_MS,
    "That code didn't work.",
    "Game code <span class = 'p--highlight'>" + displayCode + "</span> is either incorrect or expired. " + suffix,
    "Close",
    focusFirstAccessInput,
    // The wrong-code sound has already played; the popup opens quietly.
    { teacherHelp: isPlaySplash, openSound: 'modal.open.wrongCode' }
  );
}

// Usually a school web filter blocking Firebase (gstatic.com or
// cloudfunctions.net), so the footer points teachers at the help center.
function showConnectionErrorModal() {
  const pathname = window.location.pathname;
  const isAnswerKeyPage =
    pathname.endsWith('answer-key.html') || pathname.endsWith('/answer-key');
  createModal(
    "Can't Connect to Dingo Punks",
    isAnswerKeyPage
      ? "We are unable to check your game code."
      : "We are unable to check your game code. Please ask your teacher for help.",
    "Close",
    shareCodeModuleFailed ? function() { window.location.reload(); } : focusFirstAccessInput,
    {
      teacherHelp: true,
      teacherHelpHtml:
        "Teachers: your school or district may be blocking Dingo Punks. " +
        "<span class=\"modal__teacher-help-underline\">Click here for help →</span>",
      teacherHelpHref: 'https://dingopunks.com/pages/help-center-escape-rooms'
    }
  );
}

function focusFirstAccessInput() {
  const cell = document.querySelector('.access-input');
  if (!cell || cell.disabled) return;
  cell.focus();
  activeInput__codeInput = cell;
}

// A wrong code: flash the cells and count the attempt toward the local lockout.
// Shared by the legacy and membership paths. The lockout overlay replaces the
// modal on the attempt that triggers it.
function rejectAccessCode(code) {
  pinFailedAttempts += 1;
  flashAccessInputs();
  if (pinFailedAttempts >= PIN_MAX_ATTEMPTS) {
    setTimeout(triggerPinLockout, 450);
  } else {
    showBadCodeModal(code);
  }
}

function submitMembershipCode(code) {
  // Share codes work on the answer key on the same footing as legacy codes.
  if (!isMembershipCode(code)) {
    rejectAccessCode(code);
    return;
  }

  membershipLookupPending = true;
  setManualCodeCheckingState(true);

  lookupMembershipCode(code)
    .then(function(game) {
      // Stays pending: the inputs are on their way out either way.
      launchMembershipGame(game, 0);
    })
    .catch(function(error) {
      membershipLookupPending = false;
      setManualCodeCheckingState(false);
      reportMembershipCodeError(error, code, true);
    });
}

function startAutoLaunch() {
  const notBefore = DINGO_PUNKS_BUMPER ? Date.now() + AUTO_LAUNCH_MIN_MS : 0;
  const linkCode = autoLaunchCode;
  membershipLookupPending = true;

  lookupMembershipCode(linkCode)
    .then(function(game) {
      launchMembershipGame(game, notBefore, true);
    })
    .catch(function(error) {
      membershipLookupPending = false;
      autoLaunchCode = null;
      // A bad link isn't a guessed code, so it costs no attempt — the student
      // is dropped onto the normal code-entry screen.
      buildAccessCodeEntry();
      hideDirectLinkLoader();
      reportMembershipCodeError(error, linkCode, false);
    });
}

// Same hand-off the legacy code path uses once its resource script is ready,
// optionally held back until `notBefore` for the auto-launch bumper.
function launchMembershipGame(game, notBefore, skipAccessStep) {
  // Rides the debrief URL: undermurk=1 unlocks the bonus mission (All-Access),
  // no flag shows it locked, and undermurk=0 hides it because the teacher
  // turned Bonus Missions off. Legacy codes and free-play never pass through here.
  delete debriefStats.undermurk;
  if (game.bonusMissions === false) {
    debriefStats.undermurk = 0;
  } else if (game.plan === 'all-access') {
    debriefStats.undermurk = 1;
  }
  // audio=0 rides the same URL when the teacher turned Audio off, so the
  // debrief and Undermurk pages stay silent too.
  delete debriefStats.audio;
  if (game.audio === false) {
    debriefStats.audio = 0;
  }
  loadResourceGame(game.theme, game.script, function() {
    setTimeout(function() {
      handlePreloading('onPinInput');
      if (skipAccessStep) {
        setTimeout(transitionSplash, 200);
      } else {
        setManualCodeCheckingState(false);
        setTimeout(removeAccessInputs, 200);
        setTimeout(transitionSplash, 1300);
      }
    }, Math.max(0, notBefore - Date.now()));
  });
}

function reportMembershipCodeError(error, attemptedCode, countAttempt) {
  const code = error && error.code;

  // The server's own limit always sends retryAfter. Without it, the 429 came
  // from Google turning the request away at the instance cap — a busy server,
  // so it's handled like any other hiccup below instead of a lockout.
  const retryAfter = Number(error?.details?.retryAfter);
  if (code === 'functions/resource-exhausted' && retryAfter > 0) {
    clearAccessInputs();
    triggerPinLockout(retryAfter);
    return;
  }

  if (code === 'functions/not-found' || code === 'functions/invalid-argument') {
    if (countAttempt) {
      rejectAccessCode(attemptedCode);
    } else {
      flashAccessInputs();
      showBadCodeModal(attemptedCode);
    }
    return;
  }

  // Offline, blocked CDN, Firebase outage, busy server — not the student's
  // fault, so it doesn't burn an attempt against the local lockout.
  console.error('Share code lookup failed', error);
  flashAccessInputs();
  showConnectionErrorModal();
}

// Load a resource's game script and its cutscene script, then hand off once the
// resource has registered its assets. Shared by the legacy purchase-code path
// and the membership share-code path.
function loadResourceGame(theme, scriptPath, onReady) {
  resourceTheme = theme;
  resourceJS = scriptPath;

  var scriptsDiv = document.getElementById('script-resource');
  scriptsDiv.innerHTML = '';
  var scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src =
    'resource/' + resourceTheme + '/' + resourceJS + '?datetime=' + new Date().getTime();
  scriptsDiv.appendChild(scriptElement);

  // preload first set of resource assets
  scriptElement.onload = function() {
    checkResourceAssets();
  };

  function checkResourceAssets() {
      if (typeof localAssetArrays !== 'undefined') {
          onReady();
      } else {
          setTimeout(checkResourceAssets, 50); // Check again after 50ms
      }
  }

  // load local cutscene script
  var cutsceneDiv = document.getElementById('script-cutscene');
  cutsceneDiv.innerHTML = '';
  var cutsceneScript = document.createElement('script');
  cutsceneScript.type = 'text/javascript';
  cutsceneScript.src =
    'resource/' + resourceTheme  + '/cutscene/cutscene.js';
  cutsceneDiv.appendChild(cutsceneScript);
}

function canGoBackFromSplashStep(index){
  if (typeof SPLASH_BACK_BUTTON === 'undefined' || !SPLASH_BACK_BUTTON) return false;
  return index > 0;
}

// Code entry and the free game picker load the game's scripts, which can't be
// loaded twice on one page, so going back to them reloads the page instead.
function splashBackNeedsReload(index){
  const previousStep = splashOrder[index - 1];
  return previousStep === addAccess || previousStep === addFree;
}

// draw splash
function drawSplash(){

  splashOrder = [
    addAccess,     
    addTitle,
    addSetup, 
    addCharacter,     
  ]

  if (gameMode === "free"){
    splashOrder = [
      addFree,
      addTitle, 
      addSetup, 
      addCharacter,    
    ]
  }

  if (gameMode === "preview" && isPreviewPage){
    splashOrder = [
      addTitle,
    ]
  }
  else if (gameMode === "preview"){
    splashOrder = [
      addAccess,     
      addTitle,    
    ]
  }

  if (isUndermurkPage){
    splashOrder = [addUndermurkSetup, addCharacter];
  }

  // create html
  const entryClass = splashEntryDirection === 'back' ? 'splash-container--off-left-start' : 'splash-container--off-right';
  splashEntryDirection = 'forward';
  splashNavigating = false;
  splashContainer = createElement('div', ['splash-container', entryClass], splashContainerWrapper);
  splashTitle = createElement("p", ["splash-title","splash-title--hidden"],splashContainer); 
  splashSubtitle = createElement("p", ["splash-subtitle","splash-subtitle--hidden"],splashContainer); 
  splashContent = createElement('div', ['splash-content'], splashContainer);
  splashButton = createElement('button', ['splash-button', 'splash-button--hidden'], splashContainer);
  splashBackButton = null;
  if (canGoBackFromSplashStep(splashIndex)){
    splashBackButton = createElement('button', ['splash-button', 'splash-button--back', 'splash-button--visible'], splashContainer);
    splashBackButton.textContent = '\u2190';
    splashBackButton.setAttribute('aria-label', 'Back');
    setIpadActiveState(splashBackButton);
  }

  // create version and navigation
  if (splashIndex === 0){
    splashNote = createElement("p", ["splash-note", "splash-note--visible"],splashContainer);
    splashNav = createElement("p", ["splash-nav", "splash-nav--visible"],splashContainer);
    splashVersion = createElement("p", ["splash-version", "splash-version--visible"],splashContainer);
    splashVersion.textContent = "VERSION " + version;
    splashNav.innerHTML = "<a href = 'https://dingopunks.com'>HOME</a><a href = 'https://dingopunks.com/collections/all'>SHOP</a><a href = 'https://dingopunks.com/pages/teacher-portal'>TEACHERS</a>"; 
    splashNote.innerHTML = "Puzzle Punks is now <span><a href = 'https://dingopunks.com/blogs/dingopunks/puzzle-punks-is-now-dingo-punks'>Dingo Punks</a></span> — same game, new name!";
    /*
    if (gameMode === 'preview'){
      splashVersion.innerHTML = "";
      splashNav.innerHTML = "";
    }
   */
    if (gameMode === "free" || isPreviewPage || isUndermurkPage){
      splashNav.style.display = "none";
      splashVersion.style.display = "none";
      splashNote.style.display = "none";
    }

  }

  // weird iPad thing (don't touch)
  setIpadActiveState(splashButton);

  // execute function from splashOrder array
  splashOrder[splashIndex]();

  // update html element size
  updateElementSize();

  
  // transition splash container and title in
  toggleClass(splashContainer,entryClass,'splash-container--center');
  // A direct link shows only the logo bumper while the code resolves.
  if (!autoLaunchCode || splashIndex !== 0) {
    setTimeout(toggleClass,splashTransitionDuration,splashTitle,'splash-title--hidden','splash-title--visible');
    setTimeout(toggleClass,splashTransitionDuration,splashSubtitle,'splash-subtitle--hidden','splash-subtitle--visible');
  }

  // click button
  splashButton.addEventListener("click", function() { 
    if (splashNavigating) return;
    splashNavigating = true;
    toggleClass(splashButton,'splash-button--visible','splash-button--hidden');
    if (splashBackButton) toggleClass(splashBackButton,'splash-button--visible','splash-button--hidden');
    setTimeout(transitionSplash, splashButtonDelay);
  });
  if (splashBackButton){
    splashBackButton.addEventListener("click", function() {
      if (splashNavigating) return;
      splashNavigating = true;
      toggleClass(splashBackButton,'splash-button--visible','splash-button--hidden');
      toggleClass(splashButton,'splash-button--visible','splash-button--hidden');
      setTimeout(splashBackNeedsReload(splashIndex) ? reloadToFirstSplashStep : transitionSplashBack, splashButtonDelay);
    });
  }

  // update html element line thicknetss
  updateLineThickness();

}

// transition splash
function transitionSplash(){
  typeof Sound !== 'undefined' && Sound.event('splash.transition');
  if (splashIndex !== splashOrder.length-1){
    toggleClass(splashVersion,'splash-version--visible','splash-version--hidden');
    toggleClass(splashNav,'splash-nav--visible','splash-nav--hidden');
    // transition container out
    toggleClass(splashContainer,'splash-container--center','splash-container--off-left');
    toggleClass(keyboardSplash,'keyboard-splash--center','keyboard-splash--off-left');
    // clear container
    setTimeout(clearSplashScreenContainer,splashExitDuration);
    function clearSplashScreenContainer(){
      const childrenToRemove = splashContainerWrapper.querySelectorAll("*");
      childrenToRemove.forEach(child => child.remove());   
      // increment index and draw next splash
      splashIndex = splashIndex + 1;
      setContainerSize();
      setTimeout(drawSplash,200);
    }
  }  
  else {
    toggleClass(splashContainer,'splash-container--center','splash-container--off-left');
    toggleClass(keyboardSplash,'keyboard-splash--center','keyboard-splash--off-left');
    setTimeout(clearSplashScreenContainer,splashExitDuration);
    function clearSplashScreenContainer(){
      const childrenToRemove = splashContainerWrapper.querySelectorAll("*");
      childrenToRemove.forEach(child => child.remove());   
      splashContainer = createElement('div', ['splash-container', 'splash-container--off-right'], splashContainerWrapper);
    }

    if (isUndermurkPage){
      setTimeout(enterUndermurk,splashExitDuration);
    }
    else if (gameMode === "preview" && isPreviewPage && !isAnswersMode){
      setTimeout(addCutscene,splashExitDuration,cutsceneIntroIndex,'introNoLimit');
    }
    else if (gameMode === "preview"){
      toggleClass(splash,'splash--visible','splash--hidden');
      setTimeout(removeSplash,2000);
      setTimeout(clearSplashContainer,2100);
      createActivityNodes("noLimit");
      // createCodeBox();
    }
    else {
      if (settings.timeLimit == "No limit"){
        setTimeout(addCutscene,splashExitDuration,cutsceneIntroIndex,'introNoLimit');
      }
      else {
        setTimeout(addCutscene,splashExitDuration,cutsceneIntroIndex,'intro');
      }
    }

    // preload images with priority-1
    /*
    setTimeout(preloadImages1,2000);
    function preloadImages1(){
        preloadImages(globalAssets[1], function() {});
        preloadImages(resourceAssets[1], function() {});
    }
    */

  }
}


// transition back to the previous step: the mirror of transitionSplash
function transitionSplashBack(){
  typeof Sound !== 'undefined' && Sound.event('splash.transition');
  toggleClass(splashContainer,'splash-container--center','splash-container--off-right-exit');
  setTimeout(function clearSplashScreenContainer(){
    splashContainerWrapper.querySelectorAll("*").forEach(child => child.remove());
    splashIndex = splashIndex - 1;
    splashEntryDirection = 'back';
    setContainerSize();
    setTimeout(drawSplash,200);
  },splashExitDuration);
}

// Back from the "You're playing" step: slide out, then reload to the first step.
// A direct link's code is dropped from the URL so it lands on an empty code entry.
function reloadToFirstSplashStep(){
  typeof Sound !== 'undefined' && Sound.event('splash.transition');
  toggleClass(splashContainer,'splash-container--center','splash-container--off-right-exit');
  canRefresh = true;
  try { sessionStorage.setItem(SPLASH_BACK_RELOAD_KEY, '1'); } catch (e) {}
  setTimeout(function() {
    const search = autoLaunchCode ? '' : window.location.search;
    window.location.replace(window.location.pathname + search);
  },splashExitDuration);
}


/////////
// STEP 0
/////////

/////////
// BUMPER
/////////

// Holds the code entry bumper on the logo until START is pressed. It sits beside
// the logo, not inside it, so it doesn't swing with the logo on the way out.
function addBumperStartButton(bumperContainer, onStart) {
  awaitingBumperStart = true;
  bumperContainer.classList.add('bumper-container--start');
  const startButton = createElement('button', ['bumper-start', 'bumper-start--hidden'], bumperContainer);
  startButton.textContent = 'START';
  setIpadActiveState(startButton);

  setTimeout(function() {
    toggleClass(startButton, 'bumper-start--hidden', 'bumper-start--visible');
    startButton.focus({ preventScroll: true });
  }, BUMPER_START_IN_MS);

  // js/global.js cancels Enter on every keydown, so it never clicks a button. This
  // waits for keyup so the key's release doesn't land on the code box taking focus.
  startButton.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') startButton.click();
  });

  startButton.addEventListener('click', function() {
    if (!awaitingBumperStart) return;
    awaitingBumperStart = false;
    toggleClass(startButton, 'bumper-start--visible', 'bumper-start--pressed');
    // Enter the Undermurk has no code box to focus.
    if (activeInput__codeInput) activeInput__codeInput.focus({ preventScroll: true });
    // The dangle in onStart would otherwise replace the plain click (js/sound.js)
    typeof Sound !== 'undefined' && Sound.event('ui.click');
    onStart();
    setTimeout(function() { startButton.remove(); }, BUMPER_START_REMOVE_MS);
  });
}

// The logo bumper that waits for START (or, on a direct link, plays straight
// through). variantClass restyles it for another page, as
// 'bumper-container--undermurk' does on Enter the Undermurk.
function addStartBumper(variantClass){
    const containerClasses = ['bumper-container', 'bumper-container--visible'];
    if (variantClass) containerClasses.push(variantClass);
    // Inside .site-container, just before the modal, so the global menu's blackout
    // and popup cover it while the menu button (above .site-container) stays on top.
    const siteContainerEl = document.querySelector('.site-container');
    const modalSection = siteContainerEl && siteContainerEl.querySelector(':scope > .modal');
    let bumperContainer = createElement('div', containerClasses, siteContainerEl || document.body);
    if (modalSection) siteContainerEl.insertBefore(bumperContainer, modalSection);
    let bumperLogo = createElement('div', ['bumper-logo', 'bumper-logo--hidden'],bumperContainer);
    function hideBumperContainer(){
      toggleClass(bumperContainer,'bumper-container--visible','bumper-container--hidden');
    }
    setTimeout(bringInBumperLogo,400);
    function bringInBumperLogo(){
      toggleClass(bumperLogo,'bumper-logo--hidden','bumper-logo--visible');
    }
    function bringOutBumperLogo(){
      toggleClass(bumperLogo,'bumper-logo--visible','bumper-logo--out');
    }
    // A direct link has no code to type, so it plays straight through to the game.
    if (autoLaunchCode) {
      setTimeout(hideBumperContainer,BUMPER_BACKGROUND_FADE_MS);
      setTimeout(function() {
        bringOutBumperLogo();
        typeof Sound !== 'undefined' && Sound.event('bumper.dangleAuto');
      },BUMPER_LOGO_EXIT_MS);
      return;
    }
    addBumperStartButton(bumperContainer, function() {
      setTimeout(function() {
        bringOutBumperLogo();
        typeof Sound !== 'undefined' && Sound.event(variantClass === 'bumper-container--undermurk' ? 'bumper.dangleUndermurk' : 'bumper.dangle');
      },BUMPER_START_FALL_DELAY_MS);
      setTimeout(hideBumperContainer,BUMPER_START_FALL_DELAY_MS + BUMPER_START_FADE_DELAY_MS);
    });
}

// game code
function addAccess(){

  if (splashReturnedBack){
    // Coming back from the "You're playing" step: no bumper.
  }
  else if (gameMode !== "preview"){
    if (DINGO_PUNKS_BUMPER) addStartBumper();
    /*
    addTheme();
    */
  }
  else {
    addPreviewBumper();
  }
  function addTheme(){
    const themeContainer = createElement('div', ['theme-container', 'theme-container--visible'], splash);
    const themeContainerWrapper = createElement('div', ['theme-container-wrapper'], themeContainer);
    const assets = themeAssets[theme];
    if (assets?.background) {
      const themeBackgroundImg = createElement('img', ['theme-container-background'], themeContainerWrapper);
      themeBackgroundImg.src = assets.background;
      themeBackgroundImg.alt = '';
    }
    if (assets?.character) {
      const themeCharacterImg = createElement('img', ['theme-container-character', 'theme-container-character--hidden'], themeContainerWrapper);
      themeCharacterImg.src = assets.character;
      themeCharacterImg.alt = '';
      /* After wrapper scale-in (1s delay + 0.2s), transition hidden → visible (overshoot via CSS bezier) */
      setTimeout(function themeCharacterIn() {
        toggleClass(themeCharacterImg, 'theme-container-character--hidden', 'theme-container-character--visible');
      }, 1200);

      if (assets.speech) {
        let themeSpeechRevealed = false;
        let themeSpeechFallbackId;
        function revealThemeSpeechBubble() {
          if (themeSpeechRevealed) {
            return;
          }
          themeSpeechRevealed = true;
          if (themeSpeechFallbackId !== undefined) {
            clearTimeout(themeSpeechFallbackId);
          }
          const speechBubble = createElement('div', ['theme-speech-bubble', 'theme-speech-bubble--hidden'], themeContainerWrapper);
          const speechP = createElement('p', ['theme-speech-bubble__text'], speechBubble);
          speechP.textContent = assets.speech;
          /* scaleElements / lineElements use parent width — bubble did not exist during earlier updateElementSize / updateLineThickness in addTheme */
          updateElementSize();
          updateLineThickness();
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              toggleClass(speechBubble, 'theme-speech-bubble--hidden', 'theme-speech-bubble--visible');
              updateElementSize();
              updateLineThickness();
            });
          });
        }
        function onCharacterTransitionEnd(ev) {
          if (ev.propertyName !== 'transform') {
            return;
          }
          themeCharacterImg.removeEventListener('transitionend', onCharacterTransitionEnd);
          revealThemeSpeechBubble();
        }
        themeCharacterImg.addEventListener('transitionend', onCharacterTransitionEnd);
        themeSpeechFallbackId = setTimeout(function themeSpeechFallback() {
          themeCharacterImg.removeEventListener('transitionend', onCharacterTransitionEnd);
          revealThemeSpeechBubble();
        }, 3000);
      }
    }
    updateElementSize();
    setTimeout(hidethemeContainer, hidethemeDelay);
    function hidethemeContainer(){
      toggleClass(themeContainer, 'theme-container--visible', 'theme-container--hidden');
    }
  }
  function addPreviewBumper(){
    let bumperContainer = createElement('div', ['bumper-container--preview', 'bumper-container--visible'], document.body);
    let bumperLogo = createElement('div', ['bumper-logo', 'bumper-logo--hidden'],bumperContainer);
    bumperLogo.style.backgroundImage = "url('assets/branding/logo/logo-answer-key.png')";
    setTimeout(hideBumperContainer,BUMPER_BACKGROUND_FADE_MS);
    function hideBumperContainer(){
      toggleClass(bumperContainer,'bumper-container--visible','bumper-container--hidden');
    }
    setTimeout(bringInBumperLogo,400);
    function bringInBumperLogo(){
      toggleClass(bumperLogo,'bumper-logo--hidden','bumper-logo--visible');
    }
    setTimeout(bringOutBumperLogo,BUMPER_LOGO_EXIT_MS);
    function bringOutBumperLogo(){
      toggleClass(bumperLogo,'bumper-logo--visible','bumper-logo--out');
    }
  }

  // trigger test mode
  document.addEventListener('keydown', (function() {
    let sequence = '';
    const targetSequence = 'ptest';

    return function(event) {
        sequence += event.key;

        // Keep only the last `targetSequence.length` characters in the sequence
        if (sequence.length > targetSequence.length) {
            sequence = sequence.substring(sequence.length - targetSequence.length);
        }

        if (sequence === targetSequence) {
            bringInTestBox();
        }
    };
  })());

  function bringInTestBox(){
    if (gameMode === 'test'){
      addTestMode();
    }
  }

  

  function addTestMode(){

    let testDiv = createElement('div', ['test-div'], splashContainer);
    let testDivHeader = createElement('p', ['test-div__header'], testDiv);
    testDivHeader.innerHTML = 'GAME MODE';

    function createRadioInput(name, value, labelText, parentElement) {
      const label = document.createElement('label');
      const radioInput = document.createElement('input');
      radioInput.type = 'radio';
      radioInput.name = name;
      radioInput.value = value;

      radioInput.classList.add("radio__test");

      radioInput.addEventListener('change', function() {
        selectedOption = this.value;
        gameMode = selectedOption;
      });

      label.appendChild(radioInput);
      label.appendChild(document.createTextNode(labelText));
      parentElement.appendChild(label);
      parentElement.appendChild(document.createElement('br'));

    }
    
    createRadioInput('example', 'default', ' Default', testDiv);
    createRadioInput('example', 'preview', ' Preview', testDiv);

  };

  // Direct links resolve in the background; only the bumper shows until we land
  // on "Right on! You're playing" or fall back to manual code entry on error.
  if (autoLaunchCode) return;

  buildAccessCodeEntry();
}

function buildAccessCodeEntry() {
  splashTitle.innerHTML = 'To play, enter your <span class="character-select-text-player">game code</span><span class = "icon-clickable--splash">?</span>';

  if (gameMode === "preview"){
    splashTitle.innerHTML = 'To view the answers, enter your <span class="character-select-text-player">game code</span><span class = "icon-clickable--splash">?</span>';
  }

  let iconClickableSplash = document.querySelectorAll('.icon-clickable--splash');

  // Loop through each element in the NodeList and add an event listener
  iconClickableSplash.forEach(function(element) {
    element.addEventListener("click", function() { 
      createModal(
        "What's a game code?",
        "A game code is a <span class = 'p--highlight'>5-character code</span> needed to play a Dingo Punks escape room. If you're a student, your teacher will give it to you. If you're a teacher, you can find it on the PDF you purchased from us, or from the 'Shared' tab in your account.",
        "Close"
      )
    });
  });
  splashButton.textContent = 'Next';
  const accessInputContainer = createElement('div', ['access-input-container'], splashContent);
  // Slides in with the splash container in drawSplash; the matching distance is in css/splash.css.
  toggleClass(keyboardSplash,'keyboard-splash--off-right','keyboard-splash--center');
  for (let i = 0; i < 5; i++) {
    let accessInput = createElement('input', ['access-input', 'access-input--no-flash','input-functionality-default'], accessInputContainer);
    accessInput.type = "text";
    accessInput.maxLength = 1;
    setHardwareKeyboardFunctionality(accessInput,"access-input","access-input-container"); 
    setTimeout(setAccessInputValue,10);
    function setAccessInputValue(){
      accessInput.value = autoLaunchCode ? autoLaunchCode.charAt(i) : '';
    } 
    if (i === 0) {
      // Typing waits for START; it takes focus back then.
      if (!awaitingBumperStart) accessInput.focus();
      activeInput__codeInput = accessInput; 
    }
    
  }
  setSoftwareKeyboardFunctionality("access-input","access-input-container");    
  document.removeEventListener('paste', handleAccessCodePaste);
  document.addEventListener('paste', handleAccessCodePaste);

  toggleClass(splashTitle, 'splash-title--hidden', 'splash-title--visible');
  toggleClass(splashSubtitle, 'splash-subtitle--hidden', 'splash-subtitle--visible');
  updateElementSize();

  addPromo();
  function addPromo() {
    if (typeof shouldShowPromoContainer === 'function' && !shouldShowPromoContainer()) {
      return;
    }

    const promoContainer = createElement('a', ['promo-container', 'promo-container--hidden'], splashContainer);

    if (typeof renderPromoContainer === 'function') {
      renderPromoContainer(promoContainer);
    }

    setTimeout(function bringInPromo() {
      toggleClass(promoContainer, 'promo-container--hidden', 'promo-container--visible');
      updateElementHeight();
      updateElementSize();
    }, promoDelay);
  }

}

function checkIfAccessInputIsFilled() {
  if (isPinLockedOut() || membershipLookupPending) return false;
  toggleClass(splashButton, 'splash-button--visible', 'splash-button--hidden');
  var filledCells = document.querySelectorAll('.access-input');
  var allFilled = true;

  for (var i = 0; i < filledCells.length; i++) {
    if (!filledCells[i].value) {
      allFilled = false;
      break;
    }
  }

  if (allFilled) {
    // Branch before anything else: a code containing a letter is a membership
    // share code and is resolved by the server. Everything below this point is
    // the original all-numeric purchase-code path, unchanged.
    const typedCode = Array.from(filledCells, (cell) => String(cell.value).toUpperCase()).join('');
    if (/[A-Z]/.test(typedCode)) {
      submitMembershipCode(typedCode);
      return;
    }

    let filledValuesArray = Array.from(filledCells, (cell) => Number(cell.value));
    let correctIDs = []; // Declare correctIDs array here

    const processedAnalyticsArray = analyticsArray.map((title) => {
      const ids = title.resources.map((resource) =>
        resource.googleAnalyticsID.match(/\d/g).map(Number)
      );
      correctIDs.push(ids); // Push the IDs array into correctIDs
    });

    let analyticsSubArray;
    let foundMatch = false;
    let matchIndexMain = -1;
    let matchIndexSub = -1;

    for (let k = 0; k < analyticsArray.length; k++) {
      for (let i = 0; i < correctIDs[k].length; i++) {
        analyticsSubArray = correctIDs[k][i];

        if (
          JSON.stringify(filledValuesArray) === JSON.stringify(analyticsSubArray)
        ) {
          foundMatch = true;
          matchIndexMain = k;
          matchIndexSub = i;

          if (
            analyticsSubArray.join('') ==
            analyticsArray[matchIndexMain].resources[matchIndexSub]
              .googleAnalyticsID.match(/\d+/g).join('')
          ) {
            loadResourceGame(
              analyticsArray[matchIndexMain].path,
              analyticsArray[matchIndexMain].resources[matchIndexSub].resourceJS,
              function nextStep(){
                handlePreloading('onPinInput');
                setTimeout(removeAccessInputs, 200);
                setTimeout(transitionSplash, 1300);
              }
            );

          }

        }
      }
    }

    if (!foundMatch) {
      rejectAccessCode(typedCode);
    }

  } else {
    return false;
  }

}

// remove access inputs
function removeAccessInputs(){
  isAccess = false;
  document.removeEventListener('paste', handleAccessCodePaste);
  let accessElements = document.querySelectorAll('.access-input');
  for (var i = 0; i < accessElements.length; i++) {
    accessElements[i].classList.add('access-input--verified');
  }
  // Plays as the boxes pop gold. By now a share code's launch has read the
  // teacher's Audio setting, so it's silent when that's off.
  typeof Sound !== 'undefined' && Sound.event('access.correct');


  let j = 0;
  function removeAccessElement() {
    if (j < accessElements.length) {
      accessElements[j].classList.add('access-input--fade-out');
      j++;
      setTimeout(removeAccessElement, 100);
    }
  }
  setTimeout(removeAccessElement,400);

}


/////////
// STEP 1
/////////

// title
function addTitle(){

    hideModalElement();
    window.globalMenuSplashStarted = true;

    if (gameMode !== "preview"){
      addUnloadEventListener();
    }

    // add text content
    splashTitle.innerHTML = 'Right on! You\'re playing:';
    splashButton.textContent = 'Next';
    if (gameMode === 'preview'){
      if (isAnswersMode) {
        splashTitle.innerHTML = 'Your game is';
        splashButton.innerHTML = 'View Answers';
      } else {
        splashTitle.innerHTML = isPreviewPage ? 'Your game is:' : 'Right on! Your game is:';
        splashButton.innerHTML = isPreviewPage ? 'View Preview' : 'View Activities';
      }
    }
    // add elements
    const splashLogo = createElement('img', ['splash-logo', 'splash-logo--hidden'], splashContent);
    splashLogo.setAttribute('src', resource.info.logo);
    // toggle button on delay
    setTimeout(function() {
      toggleClass(splashLogo,'splash-logo--hidden','splash-logo--visible');
      typeof Sound !== 'undefined' && Sound.event('splash.thumbnail');
    },400);
    if (directLinkLoader) {
      setTimeout(hideDirectLinkLoader, 400);
    }
    setTimeout(toggleClass,900,splashButton,'splash-button--hidden','splash-button--visible');

    if (gameMode === "preview"){

      let parsedChallengeLength;
      if (resource.activityArray){
        parsedChallengeLength = resource.activityArray.length;
      }
      if (resource.challengeArray){
        parsedChallengeLength = resource.challengeArray.length;
      }

      settings = {
        playerCount: 1,
        activityCount: parsedChallengeLength,
        timeLimit: "No limit",
        hints: 'Yes',
        rewards: null
      }

      initializeSave();
    }
    
}

// free
function addFree(){

  // add bumper
  if (DINGO_PUNKS_BUMPER && !splashReturnedBack) addBumper();
  function addBumper(){
    let bumperContainer = createElement('div', ['bumper-container', 'bumper-container--visible'], document.body);
    let bumperLogo = createElement('div', ['bumper-logo', 'bumper-logo--hidden'],bumperContainer);
    setTimeout(hideBumperContainer,BUMPER_BACKGROUND_FADE_MS);
    function hideBumperContainer(){
      toggleClass(bumperContainer,'bumper-container--visible','bumper-container--hidden');
    }
    setTimeout(bringInBumperLogo,400);
    function bringInBumperLogo(){
      toggleClass(bumperLogo,'bumper-logo--hidden','bumper-logo--visible');
    }
    setTimeout(function() {
      bringOutBumperLogo();
      typeof Sound !== 'undefined' && Sound.event('bumper.dangleAuto');
    },BUMPER_LOGO_EXIT_MS);
    function bringOutBumperLogo(){
      toggleClass(bumperLogo,'bumper-logo--visible','bumper-logo--out');
    }
  }

  // hide modal (keep it in the DOM so the shared modal/global menu still work)
  hideModalElement();

  // add title
  splashTitle.innerHTML = 'Choose an escape room to play.';
  splashSubtitle.innerHTML = 'Trying to play one of your purchases? &nbsp<span class="splash-text-link"><a href = "index.html">Click here</a></span>';
 
  // add elements
  let freeContainer = createElement('div',['free-container'],splashContainer);
  /*let splashBanner = createElement("div", ["splash-banner"],splashContainer); */

  for (let i = 0; i < 8; i++){
    let freeResource = createElement('div',['free-resource'],freeContainer);
    freeResource.id = 'free-resource-' + i;
    // Reading: 2nd → 3rd → 4th → 5th
    if (i === 0){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/all/thumbnail-2nd-grade.png)";
    }
    if (i === 1){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/all/thumbnail-3rd-grade.png)";
    }
    if (i === 2){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/all/thumbnail-4th-grade.png)";
    }
    if (i === 3){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/all/thumbnail-5th-grade.png)";
    }
    // Math: 2nd → 3rd → 4th → 5th
    if (i === 4){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/math/all-standards/thumbnail-2nd-grade.png)";
    }
    if (i === 5){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/math/all-standards/thumbnail-3rd-grade.png)";
    }
    if (i === 6){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/math/all-standards/thumbnail-4th-grade.png)";
    }
    if (i === 7){
      freeResource.style.backgroundImage = "url(resource/escape-the-midnight-mall/assets/branding/math/all-standards/thumbnail-5th-grade.png)";
    }

      freeResource.addEventListener('click', function () {
        const index = this.id.slice(-1);
        this.classList.add("free-resource-selected");
        afterFreeSelection(index);
    
        // Add the class .free-resource-hidden to all other instances
        const allResources = document.querySelectorAll('.free-resource');
        allResources.forEach((resource) => {
            if (resource !== this) {
                resource.classList.add('free-resource-hidden');
            }
        });

        // remove banner
        /* splashBanner.classList.add("splash-banner--hidden"); */
    });
    

  }

  function afterFreeSelection(index){

    // remove event listeners
    const allResources = document.querySelectorAll('.free-resource');
    allResources.forEach((resource) => {
        resource.addEventListener('click', function clickHandler() {
            allResources.forEach((res) => res.removeEventListener('click', clickHandler));
        });
    });

    // load script
    let resourceJS;
    resourceTheme = "escape-the-midnight-mall"
    // Reading: 2nd → 3rd → 4th → 5th
    if (index == 0){
      resourceJS = "topic/reading/all/reading_2ndGrade.js"
    }
    if (index == 1){
      resourceJS = "topic/reading/all/reading_3rdGrade.js"
    }
    if (index == 2){
      resourceJS = "topic/reading/all/reading_4thGrade.js"
    }
    if (index == 3){
      resourceJS = "topic/reading/all/reading_5thGrade.js"
    }
    // Math: 2nd → 3rd → 4th → 5th
    if (index == 4){
      resourceJS = "topic/math/all/math_2ndGrade.js"
    }
    if (index == 5){
      resourceJS = "topic/math/all/math_3rdGrade.js"
    }
    if (index == 6){
      resourceJS = "topic/math/all/math_4thGrade.js"
    }
    if (index == 7){
      resourceJS = "topic/math/all/math_5thGrade.js"
    }
    var scriptsDiv = document.getElementById('script-resource');
    scriptsDiv.innerHTML = '';
    var scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src =
      'resource/escape-the-midnight-mall/' + resourceJS + '?datetime=' + new Date().getTime();
    scriptsDiv.appendChild(scriptElement);
      
    // preload first set of resource assets
    scriptElement.onload = function() {
      checkResourceAssets();
    };
      
    function checkResourceAssets() {
        if (typeof localAssetArrays !== 'undefined') {
            nextStep();
        } else {
            setTimeout(checkResourceAssets, 50); // Check again after 50ms
        }
    }

      function nextStep(){
        window.globalMenuSplashStarted = true;
        handlePreloading('onPinInput');
        setTimeout(transitionSplash, 400);
      }

      // load local cutscene script
      var cutsceneDiv = document.getElementById('script-cutscene');
      cutsceneDiv.innerHTML = '';
      var cutsceneScript = document.createElement('script');
      cutsceneScript.type = 'text/javascript';
      cutsceneScript.src =
        'resource/escape-the-midnight-mall/cutscene/cutscene.js';
      cutsceneDiv.appendChild(cutsceneScript); 

    }
    
  }



/////////
// STEP 2
/////////

// setup
// The setup step's starting tab values, and whether the save has been set up.
// Back can bring the step in again, so it starts from these each time.
let setupDefaults = null;
let splashSaveInitialized = false;

function addSetup(){
  let activityCount;
  if (!setupDefaults) {
    setupDefaults = { playerCount: setup.playerCount.slice(), timeLimit: setup.timeLimit.slice() };
    handlePreloading('onSettings');
  }
  else {
    setup.playerCount = setupDefaults.playerCount.slice();
    setup.timeLimit = setupDefaults.timeLimit.slice();
  }
  settings.playerCount = null;
  settings.activityCount = null;
  settings.timeLimit = null;
  settings.hints = null;
  settings.wholeClass = false;
  // init save
  if (!splashSaveInitialized) {
    splashSaveInitialized = true;
    initializeSave();
  }
  // add text content
  splashTitle.innerHTML = 'Set up your escape room.';
  // add elements
  const splashSetupInputContainer = createElement('div', ['splash-setup-input-container'], splashContent);

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
    updatePlayerCount();
    function updatePlayerCount() {
      activityCount = resource.challengeArray.length-1;
      setup.playerCount = setup.playerCount.slice(0, activityCount);
      if (typeof WHOLE_CLASS !== 'undefined' && WHOLE_CLASS) {
        setup.playerCount.push('Whole class');
      }
      createTabs(setup.playerCount,"Number of players","tab-button-player-count-");
    }
    createTabs(generateArray(resource.challengeArray.length-1),"Number of challenges","tab-button-activity-count-");
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    updatePlayerCount();
    function updatePlayerCount() {
      activityCount = resource.activityArray.length-1;
      setup.playerCount = setup.playerCount.slice(0, activityCount);
      if (typeof WHOLE_CLASS !== 'undefined' && WHOLE_CLASS) {
        setup.playerCount.push('Whole class');
      }
      createTabs(setup.playerCount,"Number of players","tab-button-player-count-");
    }
    createTabs(generateArray(resource.activityArray.length-1),"Number of challenges","tab-button-activity-count-");
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

  if (resource.info.timeLimit){
    createTabs(resource.info.timeLimit,"Time limit","tab-button-time-limit-");
  }
  else {

      createTabs(setup.timeLimit,"Time limit","tab-button-time-limit-");


  }
  createTabs(setup.hints,"Hints","tab-button-hints-");


  function generateArray(n) {
      let array = [];
      for (let i = 1; i <= n; i++) {
          array.push(i);
      }
      return array;
  }

  /* createTabs(setup.rewards,"Rewards","tab-button-rewards-"); */
  // create settings tabs
  function createTabs(array,text,id){
      let tabRow = createElement('div', ['tab-row'], splashSetupInputContainer);
      let tabText = createElement('p', ['tab-text', 'splash-p'], tabRow);
      let tabContainer = createElement('div', ['tab-container'], tabRow);
      tabText.innerHTML = text;
      for (let i = 0; i < array.length; i++) {
          let tabButton = createElement('button', ['tab-button', id, 'tab-button--unselected'], tabContainer, id + i);
          setIpadActiveState(tabButton);
          tabButton.textContent = array[i];
          if (tabButton.classList.contains('tab-button-time-limit-')){
            if (activityCount === 5){
              tabButton.innerHTML = setup.timeLimit[i] + '<br><span class = "span-difficulty">' + difficulty[i] + '</span>';
            }
            if (activityCount === 4){
              tabButton.innerHTML = setup.reducedLimit[i] + '<br><span class = "span-difficulty">' + difficulty[i] + '</span>';
            }
          }
          // set tab functionality
          tabButton.addEventListener("click", function() {
            let id = tabButton.id;
            let idWithoutLastTwo = id.slice(0, -2);
            let lastNumber = Number(id.slice(-1));
            function toggleTabButtons(querySelector, settingKey) {
              const tabButtons = document.querySelectorAll(querySelector);
              tabButtons.forEach((button) => {
                toggleClass(button, 'tab-button--selected', 'tab-button--unselected');
              });
              settings[settingKey] = setup[settingKey][lastNumber];
            }      
            switch (idWithoutLastTwo) {
              case 'tab-button-player-count':
                toggleTabButtons('.tab-button-player-count-', 'playerCount');
                if (settings.playerCount === 'Whole class') {
                  createModal(
                    'How to play as a whole class',
                    'Whole Class Mode requires <span class="p--highlight">one device for the entire class,</span> like a smart TV or projector. The teacher leads the game and calls on students to answer each question.<img class="modal__whole-class-image" src="assets/splash/whole-class.png" alt="Whole class mode illustration">',
                    'Close'
                  );
                  settings.playerCount = 1;
                  settings.wholeClass = true;
                } else {
                  settings.wholeClass = false;
                }
                break;
              case 'tab-button-activity-count':
                  toggleTabButtons('.tab-button-activity-count-', 'activityCount');
                  updateTimeLimit(lastNumber);
                  break;
              case 'tab-button-time-limit':
                toggleTabButtons('.tab-button-time-limit-', 'timeLimit');
                break;
              case 'tab-button-hints':
                toggleTabButtons('.tab-button-hints-', 'hints');
                break;
              case 'tab-button-rewards':
                toggleTabButtons('.tab-button-rewards-', 'rewards');
                break;
            }
            toggleClass(tabButton, 'tab-button--unselected', 'tab-button--selected');
            // if all tabs are selected, toggle button
            if (settings.playerCount && settings.timeLimit && settings.hints && settings.activityCount){
              debriefStats.timeStarting = parseInt(settings.timeLimit.slice(0, -4) * 60);
              /* debriefStats.activitiesCompleted = settings.activityCount; */
              splashButton.textContent = 'Next';
              setTimeout(toggleClass,200,splashButton,'splash-button--hidden','splash-button--visible');
            }

          });
      }         
  } 

  function updateTimeLimit(lastNumber) {

    // determine values dynamically
    let timeArray = [];
    let manualValues = {
      /* 1 */   0: [10, 7, 5],
      /* 2 */   1: [20, 15, 10],
      /* 3 */   2: [30, 23, 15],
      /* 4 */   3: [40, 30, 20],
      /* 5 */   4: [50, 37, 25],
      /* 6+ */  5: [60, 45, 30] 
    };  
    let values;
    if (lastNumber >= 5) {
        values = manualValues[5];
    } else {
        values = manualValues[lastNumber];
    }
    for (let value of values) {
        timeArray.push(value + " min");
    }
    timeArray.push("No limit");

    setup.timeLimit = timeArray;
  
    // update ui
    updateTimeTabs();

    function updateTimeTabs() {
      // Iterate through setup.timeLimit and update the corresponding buttons
      for (let i = 0; i < setup.timeLimit.length; i++) {
          let buttonId = `tab-button-time-limit-${i}`;
          let button = document.getElementById(buttonId);
          if (button) {
            button.innerHTML = setup.timeLimit[i] + '<br><span class = "span-difficulty">' + difficulty[i] + '</span>';
          }
      }
      settings.timeLimit = setup.timeLimit[getSelectedTabId()];
    }

    function getSelectedTabId() {
      // Select all elements with the class that includes "tab-button-time-limit-"
      const buttons = document.querySelectorAll('.tab-button-time-limit-');
  
      // Iterate through the buttons to find the one with the "-tab-button--selected" class
      for (let button of buttons) {
          if (button.classList.contains('tab-button--selected')) {
              // Extract and return the integer from the ID of the selected button
              const match = button.id.match(/tab-button-time-limit-(\d+)/);
              if (match && match[1]) {
                  return parseInt(match[1], 10); // Convert the string number to an integer
              }
          }
      }
  
      // Return null if no selected tab is found
      return null;
  }
  

    


  
  }
  




}

/////////
// STEP 3
/////////

// add character select view
function addCharacter(){
  if (!isUndermurkPage){
    handlePreloading('onCharacterSelect');
  }

  // clear any roster left over from a previous run (Undermurk's "Play Again" re-enters this step)
  playerCharacters = [];
  playerCharacterIndex = 0;
  for (let i = 0; i < characterArray.length; i++) {
    characterArray[i].selected = false;
  }

  // create elements
  const characterSelectContainer = createElement("div", ["character-select-container","state-pointer-events-none"],splashContent);
  let playerNum = 1;
  if (settings.wholeClass) {
    splashTitle.innerHTML = '<span class="character-select-text-player">Teacher,</span> choose your character.';
  } else {
    splashTitle.innerHTML = `<span class="character-select-text-player">Player ${playerNum},</span> choose your character.`;
  }

  function lockCharacters(){
    const buttons = document.getElementsByClassName("character-select-button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("character-select-button--disabled");
    }
  }
  function fadeCharacters(){
    const characterSelectButtonUnselected = document.getElementsByClassName("character-select-button--unselected");
    for (let i = 0; i < characterSelectButtonUnselected.length; i++) {
      characterSelectButtonUnselected[i].classList.remove("character-select-button--visible");
      characterSelectButtonUnselected[i].classList.add("character-select-button--translucent");
      characterSelectButtonUnselected[i].classList.remove("state-pointer-events-auto");
    }
  }
  function changeText(){
    splashTitle.textContent = "All punks ready!";
    typeof Sound !== 'undefined' && Sound.event('character.allReady');
  }

  function setChooseTitle(){
    if (settings.wholeClass) {
      splashTitle.innerHTML = '<span class="character-select-text-player">Teacher,</span> choose your character.';
    } else {
      splashTitle.innerHTML = `<span class="character-select-text-player">Player ${playerNum},</span> choose your character.`;
    }
  }

  // RESET: shown left of START GAME once every character is picked; clears the roster so
  // the players can pick again.
  const resetButton = createElement('button', ['splash-button', 'splash-button--reset', 'splash-button--hidden'], splashContainer);
  resetButton.textContent = 'Rechoose';
  setIpadActiveState(resetButton);
  let readyTimeouts = [];
  // START GAME and RESET come in this long after the last pick (500ms after "All punks ready!")
  const readyButtonsDelay = 700;

  function showResetButton(){
    // START GAME's width as a share of the container, so the gap holds when the splash resizes
    const startShare = (splashButton.offsetWidth / splashContainer.offsetWidth) * 100;
    resetButton.style.right = `${startShare + 1.5}%`;
    toggleClass(resetButton, 'splash-button--hidden', 'splash-button--visible');
  }

  function hideReadyButtons(){
    toggleClass(splashButton, 'splash-button--visible', 'splash-button--hidden');
    toggleClass(resetButton, 'splash-button--visible', 'splash-button--hidden');
  }

  function resetCharacters(){
    readyTimeouts.forEach(clearTimeout);
    readyTimeouts = [];
    hideReadyButtons();
    playerCharacters = [];
    playerNum = 1;
    for (let i = 0; i < characterArray.length; i++) {
      characterArray[i].selected = false;
      const button = document.getElementById('character-select-button-' + i);
      if (!button) continue;
      button.classList.remove('character-select-button--disabled', 'character-select-button--translucent', 'character-select-button--selected');
      button.classList.add('character-select-button--unselected', 'character-select-button--visible');
      const image = button.querySelector('.character-select-button-image');
      if (image) {
        image.classList.remove('character-select-button-image--selected');
        image.classList.add('character-select-button-image--unselected');
      }
    }
    setChooseTitle();
  }

  resetButton.addEventListener('click', resetCharacters);
  // START GAME takes RESET away with it
  splashButton.addEventListener('click', function() {
    toggleClass(resetButton, 'splash-button--visible', 'splash-button--hidden');
  });

  function enterReadyState(){
    debriefStats.teamSize = playerNum;
    readyTimeouts = [
      setTimeout(lockCharacters,10),
      setTimeout(fadeCharacters,100),
      setTimeout(changeText,200),
    ];
    if (isUndermurkPage){
      addUndermurkReadyButtons();
    }
    else {
      splashButton.textContent = 'Start Game';
      readyTimeouts.push(setTimeout(toggleClass,readyButtonsDelay,splashButton,'splash-button--hidden','splash-button--visible'));
    }
    readyTimeouts.push(setTimeout(showResetButton,readyButtonsDelay));
  }

  function addUndermurkReadyButtons(){
    splashButton.textContent = 'Start Game';
    readyTimeouts.push(setTimeout(toggleClass,readyButtonsDelay,splashButton,'splash-button--hidden','splash-button--visible'));
  }

  for (let i = 0; i < characterArray.length; i++) {
    let characterSelectButton = createElement("button", ["character-select-button", "character-select-button--unselected", "character-select-button--hidden"], characterSelectContainer, "character-select-button-" + i);

    let characterSelectButtonImage = createElement("div",["character-select-button-image","character-select-button-image--unselected","character-select-button-image--hidden","character-select-button-image--transition"],characterSelectButton);

    let characterSelectButtonText = createElement("p",["character-select-button-text","character-select-button-text--hidden", "character-select-button-text--transition"],characterSelectButton);
    characterSelectButtonText.textContent = characterArray[i].name;
    characterSelectButtonImage.style.backgroundImage = `url("assets/player/${characterArray[i].asset}")`; 

    setTimeout(bringInCharacterImage,200 + (i * 40));
    function bringInCharacterImage(){
      toggleClass(characterSelectButton, 'character-select-button--hidden', 'character-select-button--visible');
    }

    setTimeout(popUpCharacter, 300 + (characterArray.length * 40));
    function popUpCharacter(){
      toggleClass(characterSelectButtonImage, 'character-select-button-image--hidden', 'character-select-button-image--visible');
      setTimeout(removeTransition,200);
      function removeTransition(){
        toggleClass(characterSelectButtonImage, 'character-select-button-image--transition', 'character-select-button-image--no-transition');
        toggleClass(characterSelectButtonText, 'character-select-button-text--hidden', 'character-select-button-text--visible');
        setTimeout(removeNextTransition,200);
        function removeNextTransition(){
          toggleClass(characterSelectButtonText, 'character-select-button-text--transition', 'character-select-button-text--no-transition');
        }
        toggleClass(characterSelectContainer,"state-pointer-events-none","state-pointer-events-auto");
      }
    }

    characterSelectButton.addEventListener('click', function() {
      // guard against double taps landing before the roster is locked
      if (characterArray[i].selected || playerCharacters.length >= settings.playerCount) {
        return;
      }
      toggleClass(characterSelectButton, 'character-select-button--unselected', 'character-select-button--selected');
      toggleClass(characterSelectButtonImage, 'character-select-button-image--unselected', 'character-select-button-image--selected');
      characterArray[i].selected = true;
      playerCharacters.push(characterArray[i].name);
      if (playerNum < settings.playerCount){
          playerNum++;
      }
      else {
        enterReadyState();
      }
      if (settings.wholeClass) {
        splashTitle.innerHTML = '<span class="character-select-text-player">Teacher,</span> choose your character.';
      } else {
        splashTitle.innerHTML = `<span class="character-select-text-player">Player ${playerNum},</span> choose your character`;
      }
    });
  }

}

/////////
// STEP 4
/////////

// add cutscene view
// Loops started by a cutscene file's animations, which end with the cutscene at the
// latest. False once it ends: SKIP INTRO can land while a line is still typing, and
// that line's afterText animations still run.
const cutsceneSceneLoops = new Set();
let cutsceneLoopsAllowed = false;

function stopCutsceneLoops() {
  cutsceneLoopsAllowed = false;
  if (typeof Sound === 'undefined') return;
  cutsceneSceneLoops.forEach(function(key) { Sound.stopLoop(key); });
  cutsceneSceneLoops.clear();
}

// Extra hold on the blank off-black screen once an intro ends (final Next or SKIP INTRO),
// added to the timing the nodes and timer already have. The timer starts counting after it.
const introExitHold = 500;

// The scaling normally runs on a window click, but these build after the click has passed.
function scaleNewGameElements(){
  updateElementSize();
  updateElementHeight();
  updateLineThickness();
  updateAbsoluteElements();
}

function startTimedGame(){
  createActivityNodes();
  createCodeBox();
  createFooter();
  scaleNewGameElements();
  startMapLoop();
}

function startNoLimitGame(){
  createActivityNodes("noLimit");
  createCodeBox();
  scaleNewGameElements();
  startMapLoop();
}

// The map view's background loop, set per theme in SOUND_CONFIG.mapLoops.
let mapLoopKey = null;

function startMapLoop(){
  if (typeof Sound === 'undefined') return;
  stopMapLoop();
  mapLoopKey = Sound.mapLoopFor(resourceTheme);
  if (mapLoopKey) Sound.startLoop(mapLoopKey);
}

// Opening a challenge fades the map's loop out; returning to the map fades it back in.
function fadeMapLoop(faded){
  if (mapLoopKey && typeof Sound !== 'undefined') Sound.setLoopFaded(mapLoopKey, faded);
}

function stopMapLoop(){
  if (mapLoopKey && typeof Sound !== 'undefined') Sound.stopLoop(mapLoopKey);
  mapLoopKey = null;
}

// An end cutscene that starts the map's loop itself takes it over, so it carries on
// without restarting and stops with the cutscene's other loops. Otherwise it stops here.
function handOffMapLoop(cutsceneSection){
  if (!mapLoopKey) return;
  const startsMapLoop = cutsceneSection.some(function(scene) {
    return [scene.characterSprite, scene.backgroundImage1, scene.backgroundImage2].some(function(element) {
      return element && element.animation && element.animation.startLoop === mapLoopKey;
    });
  });
  if (startsMapLoop) {
    fadeMapLoop(false);
    cutsceneSceneLoops.add(mapLoopKey);
    mapLoopKey = null;
  } else {
    stopMapLoop();
  }
}

function addCutscene(cutsceneIndex,section){

  // define variables 
  let cutsceneSection;
  if (section === 'intro' || section === 'introNoLimit'){
    handlePreloading('onCutsceneStart');
    // The theme's map loop is lazy (a big file); the intro gives it ~30s of cover to load.
    if (typeof Sound !== 'undefined') {
      const mapLoop = Sound.mapLoopFor(resourceTheme);
      if (mapLoop) Sound.preload([mapLoop]);
    }
    cutsceneSection = cutscene.intro
  }
  else {
    cutsceneSection = cutscene[section];
  }
  if (['outro', 'fail', 'debugOutro', 'debugFail'].includes(section)) handOffMapLoop(cutsceneSection);
  typeof Sound !== 'undefined' && Sound.event('cutscene.start');
  cutsceneLoopsAllowed = true;
  let sceneDelay = 100;
  let initialSceneDelay = 0;
  let initialTextDelay = 400; // applied twice before typing starts, so typing waits about 970ms
  let performanceDelay = 10;
  const intervalTime = 80;

  // prepare container
  prepareContainer();
  function prepareContainer(){
    splashContainerWrapper.style.overflow = "hidden";
    if (cutsceneIndex == 0){
      setTimeout(makeCutsceneVisible,initialSceneDelay);
      function makeCutsceneVisible(){
        splashContainer.classList.add('splash-container--center-opacity-1');
      }   
    }
  }

  // CRT power-on over the cutscene: dot, scanline, full panel (css/splash-new.css)
  const cutsceneTvOn = createElement('div',['cutscene-tv-on'],splashContainerWrapper);
  const cutsceneOpenedAt = performance.now();
  cutsceneTvOn.addEventListener('animationend', function(event) {
    if (event.animationName === 'cutscene-tv-on-fade') {
      cutsceneTvOn.remove();
    }
  });

  // create html
  let cutsceneTextBox = createElement('div',['cutscene-text-box','cutscene-text-box--hidden--new'],splashContainer);
  let cutsceneText = createElement('div',['cutscene-text',],cutsceneTextBox);
  let cutsceneCharacterName = createElement('p',['cutscene-character-name',],cutsceneTextBox);
  let cutsceneNextButton = createElement('button',['cutscene-next-button', 'cutscene-next-button--hidden'],cutsceneTextBox);
  let cutsceneCharacterSprite = createElement('div',['cutscene-character-sprite'],splashContainer);
  const cutsceneBackgroundStage = createElement('div',['cutscene-background-stage'],splashContainer);
  let cutsceneBackgroundImage1 = createElement('div',['cutscene-background-image-1'],cutsceneBackgroundStage);
  let cutsceneBackgroundImage2 = createElement('div',['cutscene-background-image-2'],cutsceneBackgroundStage);
  let cutsceneBackgroundColor = createElement('div',['cutscene-background-color'],cutsceneBackgroundStage);
  let cutsceneStaticOverlay = createElement('div',['cutscene-static-overlay','cutscene-static-overlay--hidden'],splashContainer);
  createElement('div',['cutscene-frame'],splashContainer);

  updateLineThickness();

/*
  let images = [
    'assets/interface/scene/overlay/tv-on/1.png',
    'assets/interface/scene/overlay/tv-on/2.png',
    'assets/interface/scene/overlay/tv-on/3.png',
    'assets/interface/scene/overlay/tv-on/4.png',
    'assets/interface/scene/overlay/tv-on/5.png',
    'assets/interface/scene/overlay/tv-on/6.png',
    'assets/interface/scene/overlay/static.gif',
  ];
  let currentIndex = 0; // Start at the first image
  const element = splashTVOverlay; // The element whose background you want to change


  const intervalId = setInterval(() => {
    // Change the background image of the element
    element.style.backgroundImage = `url(${images[currentIndex]})`;
    // Move to the next image
    currentIndex++;
    // If we've reached the last image, clear the interval
    if (currentIndex >= images.length) {
      clearInterval(intervalId);
      splashTVOverlay.style.opacity = 0.1;
    }
  }, intervalTime);

*/

  // to prevent strange bug where nodes are doubled
  let limitNodes = false;

  // next button click
  cutsceneNextButton.addEventListener('click', function(event) {
    // Hide before clearing: Safari repaints only part of the text box's composited layer when the
    // letter spans are removed, so the first letter vanished a frame before the rest. A visibility
    // change repaints the whole element. addTextByTypewriter makes it visible again.
    cutsceneText.style.visibility = 'hidden';
    cutsceneText.textContent = '';
    if (cutsceneIndex >= cutsceneSection.length-1){
      typeof Sound !== 'undefined' && Sound.event('cutscene.nextLast');
      stopCutsceneLoops();
      if (section === 'intro' || section === 'introNoLimit') {
        typeof Sound !== 'undefined' && Sound.event('cutscene.finish');
      }
    }
    if (cutsceneIndex < cutsceneSection.length-1){
      typeof Sound !== 'undefined' && Sound.event('cutscene.next');
      toggleClass(cutsceneNextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden--out');
      setTimeout(() => toggleClass(cutsceneNextButton, 'cutscene-next-button--hidden--out', 'cutscene-next-button--hidden'),50);
      cutsceneIndex = cutsceneIndex + 1;
      setTimeout(() => drawScene(cutsceneIndex,0),sceneDelay);
    }
    else if (section === "intro") {
      if (limitNodes === false) {
        limitNodes = true;
        cutsceneSkipText.style.transition = "opacity 0.1s";
        toggleClass(cutsceneSkipText, 'cutscene-skip-text--visible', 'cutscene-skip-text--hidden');
        toggleClass(cutsceneNextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden');
        toggleClass(splash,'splash--visible','splash--hidden');
        setTimeout(removeSplash,2000);
        setTimeout(clearSplashContainer,2100);
        setTimeout(startTimedGame,introExitHold);
      }
    }
    else if (section === "introNoLimit") {
      if (limitNodes === false) {
        limitNodes = true;
        cutsceneSkipText.style.transition = "opacity 0.1s";
        toggleClass(cutsceneSkipText, 'cutscene-skip-text--visible', 'cutscene-skip-text--hidden');
        toggleClass(cutsceneNextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden');
        toggleClass(splash,'splash--visible','splash--hidden');
        setTimeout(removeSplash,2000);
        setTimeout(clearSplashContainer,2100);
        setTimeout(startNoLimitGame,introExitHold);
      }
    }
    else if (section === 'undermurkIntro') {
      finishUndermurkIntroCutscene({
        nextButton: cutsceneNextButton,
        textBox: cutsceneTextBox,
        skipText: cutsceneSkipText,
      });
    }
    else if (section === "outro" || section === "fail") {
      finishEndCutscene();
    }
        
  }); 

  // An outro or fail cutscene's ending (final Next or SKIP OUTRO): fade out and leave
  // for the debrief. Runs once, whichever lands first.
  let endCutsceneFinished = false;
  function finishEndCutscene(){
    if (endCutsceneFinished) return;
    endCutsceneFinished = true;
    if (cutsceneSkipText) {
      cutsceneSkipText.style.transition = "opacity 0.1s";
      toggleClass(cutsceneSkipText, 'cutscene-skip-text--visible', 'cutscene-skip-text--hidden');
    }
      document.querySelector(".activity").style.display = "none";
      document.querySelector(".activity-node-container").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      toggleClass(cutsceneTextBox, 'cutscene-text-box--visible--new','cutscene-text-box--hidden--fade');
      setTimeout(hideSplash,200);
      function hideSplash(){
        toggleClass(splash,'splash--visible','splash--hidden');
      }
      canRefresh = true;
      if (section === "fail"){
        debriefStats.timeRemaining = 0;
      }     
    if (playerCharacters.length) {
      debriefStats.characters = playerCharacters.join(',');
    }

    let queryString = Object.entries(debriefStats)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

      setTimeout(goToDebrief,700);
      function goToDebrief(){
        window.location.href = 'debrief.html?' + queryString;
      }
  }

  // skip button
  let cutsceneSkipText;
  const isEndCutscene = ['outro', 'fail', 'debugOutro', 'debugFail'].includes(section);
  if (cutsceneSection == cutscene.intro || section === 'undermurkIntro' || isEndCutscene){
    cutsceneSkipText = createElement('p',['cutscene-skip-text', 'cutscene-skip-text--hidden'],splashContainer);
    cutsceneSkipText.textContent = isEndCutscene ? "SKIP OUTRO" : "SKIP INTRO";
    cutsceneSkipText.addEventListener('click', function(event) {
      stopCutsceneLoops();
      typeof Sound !== 'undefined' && Sound.event('cutscene.skip');
      if (section === 'intro' || section === 'introNoLimit') {
        typeof Sound !== 'undefined' && Sound.event('cutscene.finish');
        typeof Sound !== 'undefined' && Sound.event('cutscene.finishChime');
      }
      cutsceneSkipText.style.transition = "opacity 0.1s";
      toggleClass(cutsceneSkipText, 'cutscene-skip-text--visible', 'cutscene-skip-text--hidden');
      
      if (section === "intro") {
        toggleClass(cutsceneNextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden');
        toggleClass(splash,'splash--visible','splash--hidden');
        setTimeout(removeSplash,2000);
        setTimeout(clearSplashContainer,2100);
        setTimeout(startTimedGame,introExitHold);
      }
      else if (section === "introNoLimit") {
        toggleClass(cutsceneNextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden');
        toggleClass(splash,'splash--visible','splash--hidden');
        setTimeout(removeSplash,2000);
        setTimeout(clearSplashContainer,2100);
        setTimeout(startNoLimitGame,introExitHold);
      }
      else if (section === 'undermurkIntro') {
        finishUndermurkIntroCutscene({
          nextButton: cutsceneNextButton,
          textBox: cutsceneTextBox,
          skipText: cutsceneSkipText,
        });
      }
      else if (section === "outro" || section === "fail") {
        toggleClass(cutsceneNextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden');
        finishEndCutscene();
      }
      else if (isEndCutscene) {
        // Debug panel: like its last Next, stay put, with the text box faded out.
        toggleClass(cutsceneNextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden');
        toggleClass(cutsceneTextBox, 'cutscene-text-box--visible--new','cutscene-text-box--hidden--fade');
      }
    });
  }

  // draw scene
  // Every cutscene draws its first scene behind the CRT power-on panel, so the
  // power-on reveals the background. Entrances tagged afterReveal wait for the
  // panel to start fading (0.69s in css/splash-new.css).
  // Reduced motion skips the power-on, so there's nothing to wait for.
  const cutsceneBootDelay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 700;
  // Time left until the power-on panel starts fading, for afterReveal animations.
  const msUntilReveal = () => Math.max(0, cutsceneOpenedAt + cutsceneBootDelay - performance.now());
  setTimeout(() => drawScene(cutsceneIndex),initialTextDelay);
  // SKIP INTRO fades in 1s after the cutscene opens, partway into the background
  // settle (css/splash-new.css). Reduced motion has no power-on, so it shows right away.
  if (cutsceneSkipText) {
    const skipDelay = cutsceneBootDelay === 0 ? 0 : 1000;
    setTimeout(() => {
      toggleClass(cutsceneSkipText, 'cutscene-skip-text--hidden', 'cutscene-skip-text--visible');
    }, Math.max(0, cutsceneOpenedAt + skipDelay - performance.now()));
  }
  function drawScene(index){

    // get aliases
    sc_text = cutsceneSection[index].text;
    sc_textDelay = cutsceneSection[index].textDelay;
    sc_characterSprite = cutsceneSection[index].characterSprite;
    sc_backgroundImage1 = cutsceneSection[index].backgroundImage1;
    sc_backgroundImage2 = cutsceneSection[index].backgroundImage2;
    sc_backgroundColor = cutsceneSection[index].backgroundColor;
    sc_static = cutsceneSection[index].static;
   
    // set initial delays
    if (cutsceneIndex !==0){
      initialSceneDelay = 0;
      initialTextDelay = 0;
    }

    // remove old classes
    function removeClassesExcept(element, keepClasses) {
      const keepSet = new Set(keepClasses);
      const classList = element.classList;
      const classesToRemove = [...classList].filter(c => !keepSet.has(c));
      classesToRemove.forEach(classToRemove => {
        classList.remove(classToRemove);
      });
    }

    // remove old styles
    function removeStyles(element){
      element.style.cssText = '';
    }

    function getCutsceneStaticPath(scene) {
      const imageObject = scene.backgroundImage1 || scene.characterSprite;
      const scope = imageObject && imageObject.scope;

      if (scope === 'undermurk') {
        return 'assets/enter-the-undermurk/cutscene/static.png';
      }
      if (scope === 'global') {
        return 'assets/cutscene/static.png';
      }
      return 'resource/' + resourceTheme + '/assets/cutscene/static.png';
    }

    function flashCutsceneStatic(scene) {
      cutsceneStaticOverlay.style.backgroundImage = 'url(' + getCutsceneStaticPath(scene) + ')';
      toggleClass(cutsceneStaticOverlay, 'cutscene-static-overlay--hidden', 'cutscene-static-overlay--visible');
      setTimeout(function () {
        toggleClass(cutsceneStaticOverlay, 'cutscene-static-overlay--visible', 'cutscene-static-overlay--hidden');
      }, 200);
    }

    if (sc_static) {
      flashCutsceneStatic(cutsceneSection[index]);
    }

    // Animations tagged afterText wait for the line to finish typing (see bringInNextButton)
    const animationsAfterText = [];

    // add image
    addSprite();
    function addSprite(){

      // A cutscene file can give a sprite or background image loop: '<name>' for an ambient
      // animation that runs while the scene shows (css/splash-new.css, [data-cutscene-loop]).
      // It's an attribute, not a class, so entrance and exit animations don't strip it, and a
      // loop that carries over to the next scene keeps going without a restart.
      [
        [cutsceneCharacterSprite, sc_characterSprite],
        [cutsceneBackgroundImage1, sc_backgroundImage1],
        [cutsceneBackgroundImage2, sc_backgroundImage2],
      ].forEach(([element, imageObject]) => {
        if (imageObject && imageObject.loop) element.dataset.cutsceneLoop = imageObject.loop;
        else delete element.dataset.cutsceneLoop;
      });

      if (sc_characterSprite){
        updateCutsceneElement(cutsceneCharacterSprite, sc_characterSprite, 'characterSprite', 'cutscene-character-sprite', initialSceneDelay + performanceDelay);
      }
      else {
        removeAllClassesExcept(cutsceneCharacterSprite,'cutscene-character-sprite');
        cutsceneCharacterSprite.style = '';
      }
      if (sc_backgroundImage1){
        updateCutsceneElement(cutsceneBackgroundImage1, sc_backgroundImage1, 'backgroundImage1', 'cutscene-background-image-1', initialSceneDelay + performanceDelay);
      }
      else {
        removeAllClassesExcept(cutsceneBackgroundImage1,'cutscene-background-image-1');
        cutsceneBackgroundImage1.style = '';
      }
      if (sc_backgroundImage2){
        updateCutsceneElement(cutsceneBackgroundImage2, sc_backgroundImage2, 'backgroundImage2', 'cutscene-background-image-2', initialSceneDelay + performanceDelay);
      }
      else {
        removeAllClassesExcept(cutsceneBackgroundImage2,'cutscene-background-image-2');
        cutsceneBackgroundImage2.style = '';
      }
      if (sc_backgroundColor){
        updateCutsceneElement(cutsceneBackgroundColor, sc_backgroundColor, 'backgroundColor', 'cutscene-background-color', initialSceneDelay + performanceDelay);
      }

      function updateCutsceneElement(imageElement, imageObject, spriteLabel, className, delay) {

        if (imageElement !== cutsceneBackgroundColor){
          // if index = 0
          if (cutsceneIndex === 0){
            if (imageObject){
              setTimeout(() => addBackgroundImage(imageElement,imageObject), delay);
            }
            if (imageObject.animation){
              scheduleAnimation(imageElement,imageObject,className,delay);
            }
          }

          // if index > 0
          else {

            // if backgroundImage changes
            if (imageObject.path){
              if (cutsceneSection[cutsceneIndex-1][spriteLabel] !== cutsceneSection[cutsceneIndex][spriteLabel]){   
                  setTimeout(() => addBackgroundImage(imageElement,imageObject), delay);
              }
            }
            else if (cutsceneSection[cutsceneIndex-1][spriteLabel] !== cutsceneSection[cutsceneIndex][spriteLabel]) {
              setTimeout(function () {
                imageElement.style.backgroundImage = '';
              }, delay);
            }

            // if there is a transform-start
            if (imageObject.animation){
              scheduleAnimation(imageElement,imageObject,className,delay);
            }

          }
        }

        else {
          if (cutsceneIndex === 0){
            imageElement.classList.add(imageObject);
          }
          else {
            // if backgroundColor changes
            if (cutsceneSection[cutsceneIndex-1][spriteLabel] !== cutsceneSection[cutsceneIndex][spriteLabel]){ 
              removeAllClassesExcept(cutsceneBackgroundColor,'cutscene-background-color');
              imageElement.classList.add(imageObject);
            }
          }

        }

      }

      function addBackgroundImage(imageElement,imageObject){
        if (imageObject.path && imageObject.scope === 'local'){
          imageElement.style.backgroundImage = "url(resource/" + resourceTheme + "/assets/cutscene/" + imageObject.path + ")";
        }
        if (imageObject.path && imageObject.scope === 'global'){
          imageElement.style.backgroundImage = "url(assets/cutscene/" + imageObject.path + ")";
        }
        if (imageObject.path && imageObject.scope === 'undermurk'){
          imageElement.style.backgroundImage = "url(assets/enter-the-undermurk/cutscene/" + imageObject.path + ")";
        }
      }

      function scheduleAnimation(imageElement,imageObject,className,delay){
        if (imageObject.animation.afterText) {
          // Held at its start position while the line types, so it can't show early. delay
          // counts from the line finishing, to run one after another.
          removeAllClassesExcept(imageElement,className);
          imageElement.classList.add(imageObject.animation.start);
          animationsAfterText.push(() => {
            setTimeout(() => addAnimation(imageElement,imageObject,className), imageObject.animation.delay || 0);
          });
        }
        else if (imageObject.animation.afterReveal && cutsceneIndex === 0) {
          // Held at its start position behind the CRT power-on, so it enters once the
          // picture shows. delay counts from the panel starting to fade.
          removeAllClassesExcept(imageElement,className);
          imageElement.classList.add(imageObject.animation.start);
          setTimeout(() => addAnimation(imageElement,imageObject,className), msUntilReveal() + (imageObject.animation.delay || 0));
        }
        else {
          setTimeout(() => addAnimation(imageElement,imageObject,className), delay);
        }
      }

      function addAnimation(imageElement,imageObject,className){
        removeAllClassesExcept(imageElement,className)
        imageElement.classList.add(imageObject.animation.start);
        setTimeout(removeStart,performanceDelay);
        function removeStart(){
          imageElement.classList.add(imageObject.animation.duration);
          // The bad guy's entrances (cutscene.moveBadguyIn / moveBadguyFail) slam in faster than
          // the file's duration and shake the screen as the crash lands. Exits slide out as written.
          const sfx = imageObject.animation.sfx;
          if (sfx === 'cutscene.moveBadguyIn' || sfx === 'cutscene.moveBadguyFail') {
            imageElement.classList.add('cutscene-badguy-move');
            setTimeout(shakeCutsceneScreen, BADGUY_MOVE_MS);
          }
          toggleClass(imageElement,imageObject.animation.start,imageObject.animation.end)
          // A cutscene file can tag an animation with sfx: '<event>' to fire it as the move starts
          if (imageObject.animation.sfx) { typeof Sound !== 'undefined' && Sound.event(imageObject.animation.sfx); }
          // or with startLoop: '<key>' / stopLoop: '<key>' for a loop that lasts across scenes
          const { startLoop, stopLoop } = imageObject.animation;
          if (startLoop && cutsceneLoopsAllowed && typeof Sound !== 'undefined') {
            cutsceneSceneLoops.add(startLoop);
            Sound.startLoop(startLoop);
          }
          if (stopLoop && typeof Sound !== 'undefined') {
            cutsceneSceneLoops.delete(stopLoop);
            Sound.stopLoop(stopLoop);
          }
        }
      }

      // Restarts the shake if a second crash lands before the first one settles.
      function shakeCutsceneScreen(){
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        splashContainerWrapper.classList.remove('cutscene-screen-shake');
        void splashContainerWrapper.offsetWidth;
        splashContainerWrapper.classList.add('cutscene-screen-shake');
        splashContainerWrapper.addEventListener('animationend', function(event) {
          if (event.animationName === 'cutscene-screen-shake') {
            splashContainerWrapper.classList.remove('cutscene-screen-shake');
          }
        }, { once: true });
      }

      function removeSpecificClasses(element, classesToRemove) {
        classesToRemove.forEach(className => {
            element.classList.remove(className);
        });
      }

      function removeAllClassesExcept(element, classToKeep) {
        // Get all the classes of the element
        const classes = element.classList;
      
        // Convert the DOMTokenList to an array to be able to use array methods
        const classesArray = Array.from(classes);
      
        // Loop through the array and remove each class that is not the classToKeep
        classesArray.forEach(className => {
          if (className !== classToKeep) {
            element.classList.remove(className);
          }
        });
      }

    }

    // add text
    if (cutsceneSection[index].textStyle === 'flyIn') {
      if (cutsceneIndex !== 0) {
        toggleClass(cutsceneTextBox, 'cutscene-text-box--visible--new', 'cutscene-text-box--hidden--bottom');
        setTimeout(function () {
          toggleClass(cutsceneTextBox, 'cutscene-text-box--hidden--bottom', 'cutscene-text-box--hidden--new');
          setTimeout(function () { addText(200); }, sc_textDelay);
        }, 300);
      } else {
        setTimeout(function () { addText(200); }, sc_textDelay + initialSceneDelay);
      }
    }
    else if (cutsceneIndex !== 0 && cutsceneSection[cutsceneIndex-1].textStyle){
      if (cutsceneSection[cutsceneIndex-1].textStyle === 'badguy' && cutsceneSection[cutsceneIndex].textStyle !== 'badguy' || cutsceneSection[cutsceneIndex-1].textStyle === 'alert' && cutsceneSection[cutsceneIndex].textStyle !== 'alert'){
        toggleClass(cutsceneTextBox, 'cutscene-text-box--visible--new','cutscene-text-box--hidden--bottom');
        setTimeout(() => toggleClass(cutsceneTextBox, 'cutscene-text-box--hidden--bottom', 'cutscene-text-box--hidden--new'), 300);
        setTimeout(() => addText(200), sc_textDelay);
      }
      else {
        setTimeout(() => addText(),);
      }
    }
    else if (cutsceneIndex !== 0 && cutsceneSection[cutsceneIndex-1].textStyle === undefined && cutsceneSection[cutsceneIndex].textStyle){
      toggleClass(cutsceneTextBox, 'cutscene-text-box--visible--new','cutscene-text-box--hidden--bottom');
      setTimeout(() => toggleClass(cutsceneTextBox, 'cutscene-text-box--hidden--bottom', 'cutscene-text-box--hidden--new'), 110);
      setTimeout(() => addText(200), sc_textDelay);
    }
    else {
      setTimeout(() => addText(), sc_textDelay + initialSceneDelay);
    }
    function addText(extraDelayBeforeAddingText){
      
      // text box
      toggleClass(cutsceneTextBox, 'cutscene-text-box--hidden--new','cutscene-text-box--visible--new');
      cutsceneTextBox.classList.remove('cutscene-text-box--alert');
      cutsceneTextBox.classList.remove('cutscene-text-box--badguy');
      cutsceneTextBox.classList.remove('cutscene-text-box--default');
      cutsceneCharacterName.classList.remove('cutscene-character-name--badguy');
      cutsceneCharacterName.classList.remove('cutscene-character-name--default');
      cutsceneCharacterName.classList.remove('cutscene-character-name--alert');
      if (cutsceneSection[index].textStyle === 'badguy'){
        cutsceneTextBox.classList.add('cutscene-text-box--badguy');
        cutsceneCharacterName.classList.add('cutscene-character-name--badguy');
      }
      else if (cutsceneSection[index].textStyle === 'alert'){
        cutsceneTextBox.classList.add('cutscene-text-box--alert');
        cutsceneCharacterName.classList.add('cutscene-character-name--alert');
      }
      else {
        cutsceneTextBox.classList.add('cutscene-text-box--default');
        cutsceneCharacterName.classList.add('cutscene-character-name--default');
      }

      // name
      cutsceneCharacterName.textContent = sc_characterSprite && sc_characterSprite.name ? sc_characterSprite.name : '';

     // text
     // A speaker with an entry in SOUND_CONFIG.characterVoices.cutscene plays one voice sound per
     // line instead of a sound per letter: bad guy lines in any cutscene, named speakers only in
     // intro and outro cutscenes (not fail).
     const voicedSection = ['intro', 'introNoLimit', 'undermurkIntro', 'outro', 'debugOutro'].includes(section);
     const voiceKey = cutsceneSection[index].textStyle === 'badguy' ? 'badguy'
       : voicedSection ? sc_characterSprite?.name : undefined;
     let voiced = false;
     setTimeout(() => addTextByTypewriter(cutsceneText, sc_text, typewriterDelay), initialTextDelay);
      function addTextByTypewriter(elementClass, text, speed) {
        
        elementClass.style.visibility = "hidden";
        elementClass.innerHTML = ''; // Clear here

        let delay;
        if (extraDelayBeforeAddingText){
          delay = 150 + extraDelayBeforeAddingText;
        }
        else {
          delay = 150;
        }

        setTimeout(continueFunction,delay);
      
        function continueFunction() {
          elementClass.style.visibility = "visible";
          typeof Sound !== 'undefined' && Sound.stopVocalize();  // a vocalizing speaker stops when the next line starts
          if (voiceKey !== undefined) { voiced = typeof Sound !== 'undefined' && Sound.voice('cutscene', voiceKey, 0, text.length * speed) === true; }
          // A cutscene file can tag a sprite or background image (some speakers are drawn
          // as one) with popOnSpeak: true to pop it as the line starts
          const popElement = sc_characterSprite?.popOnSpeak ? cutsceneCharacterSprite
            : sc_backgroundImage1?.popOnSpeak ? cutsceneBackgroundImage1 : null;
          if (popElement) {
            popElement.classList.remove('cutscene-character-sprite--bounce');
            void popElement.offsetWidth; // restart the pop when the element carries over between lines
            popElement.classList.add('cutscene-character-sprite--bounce');
          }
          // Intro cutscenes play a fixed run of typewriter sounds per line (SOUND_CONFIG.cutsceneTypewriter)
          // instead of one per letter.
          const typewriterRun = typeof SOUND_CONFIG !== 'undefined' && SOUND_CONFIG.cutsceneTypewriter;
          const runTypewriter = Boolean(typewriterRun && typewriterRun.sections.includes(section));
          if (runTypewriter && !voiced && text.length > 0 && typeof Sound !== 'undefined') {
            const runCount = (typewriterRun.counts && typewriterRun.counts[cutsceneIndex]) || typewriterRun.count;
            Sound.eventRun('cutscene.typewriterRun', runCount, typewriterRun.gapMs);
          }
          const letters = text.split('');
          letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('typewriter-letter');
            elementClass.appendChild(span);
            setTimeout(() => {
              span.style.opacity = 1;
              if (!voiced && !runTypewriter) { typeof Sound !== 'undefined' && Sound.event('cutscene.letter', letter); }
            }, speed * index);
          });
        }
      }


    }

    // add next button
    if (!sc_textDelay){
      sc_textDelay = 0;
    }
    if (!initialSceneDelay || cutsceneIndex !== 0){
      initialSceneDelay = 0;
    }
    if (!sc_text){
      sc_text.length = 0;
    }
    if (!initialTextDelay){
      initialTextDelay = 0;
    }
    setTimeout(bringInNextButton,sc_textDelay + initialSceneDelay + sc_text.length*typewriterDelay + initialTextDelay + 200);
    function bringInNextButton(){
      // Started here so a Next click can never land before them
      animationsAfterText.forEach(play => play());
      toggleClass(cutsceneNextButton,'cutscene-next-button--hidden--out','cutscene-next-button--visible');
      toggleClass(cutsceneNextButton,'cutscene-next-button--hidden','cutscene-next-button--visible');
    } 

  }

  // update html element size
  updateElementSize();

  // weird iPad thing (don't touch)
  setIpadActiveState(cutsceneNextButton);
}

// empty the splash
function clearSplashContainer(){
  const childrenToRemove = splashContainer.querySelectorAll(":not(.splash-p--footer):not(a)");
  childrenToRemove.forEach(child => child.remove()); 
}

// remove the splash
function removeSplash(){
  toggleClass(splash, 'state-display-block', 'state-display-none');
}

document.addEventListener("DOMContentLoaded", function() {
  if (isPreviewPage) return; // preview.js handles boot for the preview page

  // gameMode is assigned by global.js's own DOMContentLoaded listener, which is
  // registered first and so has already run. Only the plain play page (the one
  // with the code inputs) honours a share code in the URL.
  if (gameMode !== 'preview' && gameMode !== 'free' && !isUndermurkPage) {
    autoLaunchCode = membershipCodeFromUrl();
  }

  if (HARPER_BUMPER && gameMode !== 'preview' && !isUndermurkPage && !splashReturnedBack) {
    playHarperBumper(startSplash);
  } else {
    startSplash();
  }
});

function startSplash() {
  if (autoLaunchCode) showDirectLinkLoader();
  drawSplash();

  if (autoLaunchCode) startAutoLaunch();
}

// Covers the page in white with the animated Harper logo, then
// calls onFadeStart as it fades, so the Dingo Punks bumper starts underneath it.
// The frames are stacked and shown one at a time, so a swap can never flash blank.
function playHarperBumper(onFadeStart) {
  const bumper = createElement('div', ['harper-bumper'], document.body);
  const logo = createElement('div', ['harper-bumper__logo'], bumper);
  logo.setAttribute('role', 'img');
  logo.setAttribute('aria-label', 'Harper');
  let imagesLoading = HARPER_BUMPER_FRAMES.length;
  let frameIndex = 0;
  let frameTimer = null;
  let started = false;

  const frames = addFrames(logo, HARPER_BUMPER_FRAMES);

  // White panel over the frames; sliding it away reveals the signature.
  createElement('div', ['harper-bumper__wipe'], logo);

  function addFrames(parent, sources) {
    return sources.map(function(src, index) {
      const frame = createElement('img', ['harper-bumper__frame'], parent);
      frame.alt = '';
      frame.classList.toggle('harper-bumper__frame--active', index === 0);
      frame.addEventListener('load', onImageSettled);
      frame.addEventListener('error', onImageSettled);
      frame.src = src;
      return frame;
    });
  }

  function onImageSettled() {
    imagesLoading -= 1;
    if (imagesLoading === 0) start();
  }

  function showNextFrame() {
    const nextIndex = (frameIndex + 1) % frames.length;
    frames[frameIndex].classList.remove('harper-bumper__frame--active');
    frames[nextIndex].classList.add('harper-bumper__frame--active');
    frameIndex = nextIndex;
  }

  function start() {
    if (started) return;
    started = true;
    logo.classList.add('harper-bumper__logo--visible');
    // Starts with the signature and keeps looping until the bumper is gone.
    frameTimer = setInterval(showNextFrame, HARPER_BUMPER_FRAME_MS);
    setTimeout(finish, HARPER_BUMPER_HOLD_MS);
  }

  function finish() {
    bumper.classList.add('harper-bumper--out');
    onFadeStart();
    setTimeout(function() {
      clearInterval(frameTimer);
      bumper.remove();
    }, HARPER_BUMPER_FADE_MS);
  }

  setTimeout(start, HARPER_BUMPER_LOAD_TIMEOUT_MS);
}

