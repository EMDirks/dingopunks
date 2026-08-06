// Enter the Undermurk! — entry logic and turn-based vocab minigame engine.
//
// Reuses the main game's splash scaffolding (global.js + splash-new.js). This file
// adds the bits unique to the minigame:
//   1. A setup step (players, lives, speed).
//   2. The "Play now" ready state and hand-off to the minigame.
//   3. The full minigame engine (initUndermurkGame and helpers).

const umSpeedMultipliers = {
  Slow: 1.5,
  Normal: 1,
  Fast: 0.5,
  Reckless: 0.25,
};

const umHeartSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

function umFillLivesTab(button, count) {
  button.classList.add('tab-button--lives');
  button.setAttribute('aria-label', count + ' lives');
  const heartsWrap = createElement('span', ['tab-button__hearts'], button);
  for (let h = 0; h < count; h++) {
    const heart = createElement('span', ['tab-button__heart'], heartsWrap);
    heart.innerHTML = umHeartSvg;
  }
}

function umUndermurkSetupComplete() {
  return settings.playerCount && settings.lives && settings.speed;
}

function umMaybeShowSetupNext() {
  if (umUndermurkSetupComplete()) {
    splashButton.textContent = 'Next';
    setTimeout(toggleClass, 200, splashButton, 'splash-button--hidden', 'splash-button--visible');
  }
}

// Setup step: players, lives, and speed. Mirrors the main game's tab styling.
function addUndermurkSetup() {
  splashTitle.innerHTML = 'Set up your game.';

  settings.playerCount = null;
  settings.lives = null;
  settings.speed = null;

  const inputContainer = createElement('div', ['splash-setup-input-container'], splashContent);

  function createUndermurkTabs(options, label, classPrefix, settingKey, renderButtonContent) {
    const tabRow = createElement('div', ['tab-row'], inputContainer);
    const tabText = createElement('p', ['tab-text', 'splash-p'], tabRow);
    tabText.innerHTML = label;
    const tabContainer = createElement('div', ['tab-container'], tabRow);

    for (let i = 0; i < options.length; i++) {
      const tabButton = createElement('button', ['tab-button', classPrefix, 'tab-button--unselected'], tabContainer, classPrefix + i);
      setIpadActiveState(tabButton);
      if (renderButtonContent) {
        renderButtonContent(tabButton, options[i]);
      } else {
        tabButton.textContent = options[i];
      }
      tabButton.addEventListener('click', function () {
        const tabButtons = document.querySelectorAll('.' + classPrefix);
        tabButtons.forEach(function (button) {
          toggleClass(button, 'tab-button--selected', 'tab-button--unselected');
        });
        toggleClass(tabButton, 'tab-button--unselected', 'tab-button--selected');
        settings[settingKey] = options[i];
        if (settingKey === 'playerCount') {
          debriefStats.teamSize = options[i];
        }
        umMaybeShowSetupNext();
      });
    }
  }

  createUndermurkTabs([1, 2, 3, 4, 5], 'Players', 'tab-button-undermurk-players-', 'playerCount');
  createUndermurkTabs([1, 2, 3], 'Lives', 'tab-button-undermurk-lives-', 'lives', umFillLivesTab);
  createUndermurkTabs(['Slow', 'Normal', 'Fast', 'Reckless'], 'Speed', 'tab-button-undermurk-speed-', 'speed');

  updateElementSize();
  updateLineThickness();
}

let cutscene = {
  undermurkIntro: [
    {
      text: "We can't fly any lower! You'll have to jump!",
      textDelay: 500,
      characterSprite: {
        name: 'J.J. DINGO',
        path: 'sprite4.png',
        scope: 'undermurk',
        animation: {
          start: 'transform-translate_-100_0',
          end: 'transform-translate_0_0',
          duration: 'transition-transform-300ms',
        },
      },
      backgroundImage1: {
        path: 'main1.png',
        scope: 'undermurk',
        animation: {
          start: 'transform-scale_1_1__opacity_0',
          end: 'transform-scale_1__opacity_1',
          duration: 'transition-transform-500ms__opacity-500ms',
        },
      },
      backgroundColor: 'background-color-black',
    },
    {
      text: "On my count! Three... Two... One... Go!",
      characterSprite: {
        name: 'J.J. DINGO',
        path: 'sprite1.png',
        scope: 'undermurk',
      },
      backgroundImage1: {
        path: 'main1.png',
        scope: 'undermurk',
      },
      backgroundColor: 'background-color-black',
    },
    {
      text: "Goodbye and good luck!",
      textDelay: 300,
      textStyle: 'flyIn',
      characterSprite: {
        name: 'J.J. DINGO',
        path: 'sprite2.png',
        scope: 'undermurk',
        animation: {
          start: 'transform-translate_0_100',
          end: 'transform-translate_0_0',
          duration: 'transition-transform-500ms',
        },
      },
      backgroundImage1: {
        path: 'main2.png',
        scope: 'undermurk',
        animation: {
          start: 'transform-scale_2',
          end: 'transform-scale_1',
          duration: 'transition-transform-500ms',
        },
      },
      backgroundColor: 'background-color-black',
    },
    {
      text: "I hope you're ready...",
      textDelay: 300,
      textStyle: 'flyIn',
      characterSprite: {
        name: 'J.J. DINGO',
        path: 'sprite3.png',
        scope: 'undermurk',
        animation: {
          start: 'transform-translate_0_-100',
          end: 'transform-translate_0_0',
          duration: 'transition-transform-500ms',
        },
      },
      backgroundImage1: {
        path: 'main3.png',
        scope: 'undermurk',
        animation: {
          start: 'transform-scale_2',
          end: 'transform-scale_1',
          duration: 'transition-transform-500ms',
        },
      },
      backgroundColor: 'background-color-black',
    },
    {
      text: '...to enter the Undermurk!',
      characterSprite: {
        name: 'J.J. DINGO',
        path: 'sprite3.png',
        scope: 'undermurk',
        animation: {
          start: 'transform-translate_0_0__opacity_1',
          end: 'transform-translate_0_50__opacity_0',
          duration: 'transition-transform-1000ms__opacity-1000ms',
        },
   
      },
      backgroundImage1: {
        path: 'main3.png',
        scope: 'undermurk',
        animation: {
          start: 'opacity-1',
          end: 'opacity-0',
          duration: 'transition-opacity-1000ms',
        },
      },
      backgroundColor: 'background-color-black',
    },
  ],
};

// Hand-off after "Enter the Undermurk!" — intro cutscene, then the minigame.
function enterUndermurk() {
  addCutscene(0, 'undermurkIntro');
}

const umCutsceneFadeDuration = 500;
let umCutsceneFinishing = false;

// Fade out the intro cutscene, then build the minigame (final Next or Skip).
function finishUndermurkIntroCutscene(cutsceneUi) {
  if (umCutsceneFinishing) {
    return;
  }
  umCutsceneFinishing = true;

  if (cutsceneUi.nextButton) {
    toggleClass(cutsceneUi.nextButton, 'cutscene-next-button--visible', 'cutscene-next-button--hidden');
  }
  if (cutsceneUi.textBox) {
    toggleClass(cutsceneUi.textBox, 'cutscene-text-box--visible--new', 'cutscene-text-box--hidden--fade');
  }
  if (cutsceneUi.skipText) {
    cutsceneUi.skipText.style.transition = 'opacity 0.1s';
    toggleClass(cutsceneUi.skipText, 'cutscene-skip-text--visible', 'cutscene-skip-text--hidden');
  }

  if (splashContainer) {
    splashContainer.classList.add('undermurk-cutscene--fade-out');
  }

  setTimeout(function () {
    initUndermurkGame(playerCharacters.slice());
  }, umCutsceneFadeDuration);
}

// ---- Minigame engine ----

let umState = null;
let umRoot = null;
let umCharacters = [];
let umLocked = false;
let umNeedsInterstitial = false;
let umIsFirstTurn = true;
let umIndicatorPositioned = false;
let umIndicatorEntrancePending = false;
let umIndicatorEntranceTimeoutId = null;
let umIndicatorSwitchTimeoutId = null;
let umStartDelayTimeoutId = null;
let umWrongInterstitialDelayTimeoutId = null;
let umLastIndicatorPlayerIndex = null;
let umResizeBound = false;
let umTierBackgroundTier = null;
let umTierBackgroundDimmed = false;
let umTierBackgroundRevealed = false;
let umTierTransitionTimeoutId = null;
let umTierTransitionRunId = 0;
let umTierTransitionHudDelayPending = false;
let umTierTransitionHudDelayTimeoutId = null;
let umTierTransitionHudWatchdogTimeoutId = null;
let umTierTransitionIndicatorSlide = false;

const umEls = {};

// Entrance animation timing (ms). Applied in umAnimateEntrance().
// Daisy chain: each step starts after the previous step finishes, plus its *Delay value.
// Order: frame → player strip → player cards → tier background → tier block → player indicator → First Up.
const umEntranceTiming = {
  frameDelay: 500,       // initial wait before the frame scales in from 2× to 1×
  frameDuration: 200,  // how long the frame scale-in takes
  stripDelay: 200,    // extra wait after the frame finishes before the player-strip slides down
  stripDuration: 200,  // how long the player-strip slide takes
  cardDelay: 100,        // extra wait after the strip finishes before the first player card
  cardStagger: 200,    // extra wait between each player card (card 0, then +200ms, +400ms, …)
  cardDuration: 200,   // how long each player card slide-in takes
  tierBackgroundDelay: 200, // extra wait after the last player card finishes before the tier background animates in
  tierBackgroundDuration: 500, // how long the tier background fade/zoom takes
  tierBlockDelay: 200,   // extra wait after the tier background finishes before the tier badge slides up
  tierBlockDuration: 200, // how long the tier badge slide-up takes
  indicatorDelay: 500, // extra wait after the tier badge finishes before the indicator slides in
  indicatorDuration: 300, // how long the player-indicator slide-in takes
  indicatorSwitchDelay: 600, // wait before the indicator slides to the next player during play
  firstUpDelay: 0,     // extra wait after the indicator finishes before First Up slides in
  firstUpLeadIn: 500,    // start First Up this many ms earlier (subtracted from indicatorDuration + firstUpDelay)
};

const umQuestionTiming = {
  startDelay: 200, // wait after Start before the question slides in
  wrongInterstitialDelay: 200, // wait after a wrong answer before the Next Up overlay slides in
  interstitialOutDuration: 200,
  enterDuration: 180,
  outDuration: 150,
  wrongOutDuration: 500,
};

// Tier-change reveal timing (ms). Applied in umPlayTierTransition().
const umTierTransitionTiming = {
  oldArtFadeDuration: 500,
  blankHoldDuration: 100,
  artInDuration: 500,
  artHoldDuration: 500,
  textOutDuration: 200,
  textInDuration: 500,
  indicatorDelay: 1000, // wait after new tier art begins before tier badge, player indicator, and active card update
};

const umTierNames = [
  "Cupid's Castle",
  'Red Tide Reef',
  'The Maelstrom',
  'Frostbite Depths',
  "Slippy's Spire",
  'The Break Room',
  'Dark Forest',
  "Barrel o' Laffs",
  'The Crawlspace',
  'The Mask-Giver',
];

function umTierName(tier) {
  return umTierNames[tier - 1] || '';
}

function tierTime(tier) {
  const base = 21 - tier;
  const multiplier = umSpeedMultipliers[settings.speed] || 1;
  return base * multiplier;
}

function umShuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function umGetCharacterAsset(name) {
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i].name === name) {
      return characterArray[i].asset;
    }
  }
  return '';
}

function umBuildPlayers(characters) {
  return characters.map(function (name) {
    return {
      name: name,
      asset: umGetCharacterAsset(name),
      lives: settings.lives,
      score: 0,
      eliminated: false,
      tier: 1,
      cleared: 0,
      isBossRoundComplete: false,
      askedWords: new Set(),
    };
  });
}

function umActivePlayers() {
  return umState.players.filter(function (player) {
    return !player.eliminated;
  });
}

function umAdvancePlayerIndex() {
  const total = umState.players.length;
  for (let step = 1; step <= total; step++) {
    const nextIndex = (umState.currentIndex + step) % total;
    if (!umState.players[nextIndex].eliminated) {
      umState.currentIndex = nextIndex;
      return;
    }
  }
}

function umCurrentPlayer() {
  return umState.players[umState.currentIndex];
}

function umResetTimerFill() {
  if (!umEls.timerFill) {
    return;
  }
  umEls.timerFill.style.transition = 'none';
  umEls.timerFill.style.width = '100%';
}

function umPauseTimerFill() {
  if (!umEls.timerFill || !umEls.timerWrap) {
    return;
  }

  const fillRect = umEls.timerFill.getBoundingClientRect();
  const wrapRect = umEls.timerWrap.getBoundingClientRect();
  const percent = wrapRect.width > 0 ? (fillRect.width / wrapRect.width * 100) : 100;
  umEls.timerFill.style.transition = 'none';
  umEls.timerFill.style.width = percent + '%';
}

function umStopTimer() {
  if (umState && umState.timerId) {
    clearTimeout(umState.timerId);
    umState.timerId = null;
  }
  if (umState && umState.timerTickId) {
    clearInterval(umState.timerTickId);
    umState.timerTickId = null;
  }
  if (umEls.questionArea) {
    umEls.questionArea.classList.remove('undermurk-question--low-time');
  }
}

function umTierBackgroundPath(tier) {
  return 'assets/enter-the-undermurk/background/tier-' + tier + '.png';
}

function umSetTierBackground(tier) {
  if (!umEls.tierBackground) {
    return;
  }

  const tierChanged = umTierBackgroundTier !== tier;
  umEls.tierBackground.style.backgroundImage = 'url(' + umTierBackgroundPath(tier) + ')';

  if (tierChanged) {
    umTierBackgroundTier = tier;
    umTierBackgroundDimmed = false;
    umApplyTierBackgroundDimState();
  }
}

function umApplyTierBackgroundDimState() {
  if (!umEls.tierBackground) {
    return;
  }

  umEls.tierBackground.classList.toggle('undermurk-tier-background--dimmed', umTierBackgroundDimmed);
  umEls.tierBackground.classList.toggle('undermurk-tier-background--revealed', umTierBackgroundRevealed && !umTierBackgroundDimmed);
  umEls.tierBackground.style.opacity = '';
}

function umShowTierBackgroundInstantly() {
  if (!umEls.tierBackground) {
    return;
  }

  umEls.tierBackground.classList.remove('undermurk-tier-background--enter');
  umEls.tierBackground.style.animationDelay = '';
  umEls.tierBackground.style.animationDuration = '';
  umEls.tierBackground.style.transform = '';
  umTierBackgroundRevealed = true;
  umApplyTierBackgroundDimState();
}

function umDimTierBackground() {
  if (umTierBackgroundDimmed) {
    return;
  }

  umTierBackgroundDimmed = true;

  if (!umEls.tierBackground) {
    return;
  }

  umEls.tierBackground.classList.remove('undermurk-tier-background--enter');
  umEls.tierBackground.style.animationDelay = '';
  umEls.tierBackground.style.animationDuration = '';
  umApplyTierBackgroundDimState();
}

function umClearTierTransitionTimeout() {
  if (umTierTransitionTimeoutId) {
    clearTimeout(umTierTransitionTimeoutId);
    umTierTransitionTimeoutId = null;
  }
}

function umClearTierTransitionHudDelayTimeout() {
  if (umTierTransitionHudDelayTimeoutId) {
    clearTimeout(umTierTransitionHudDelayTimeoutId);
    umTierTransitionHudDelayTimeoutId = null;
  }
}

function umClearTierTransitionHudWatchdogTimeout() {
  if (umTierTransitionHudWatchdogTimeoutId) {
    clearTimeout(umTierTransitionHudWatchdogTimeoutId);
    umTierTransitionHudWatchdogTimeoutId = null;
  }
}

function umTierTransitionHudWatchdogDelayMs() {
  const t = umTierTransitionTiming;
  return umQuestionTiming.outDuration
    + t.oldArtFadeDuration
    + t.blankHoldDuration
    + t.indicatorDelay
    + 500;
}

function umArmTierTransitionHudWatchdog() {
  umClearTierTransitionHudWatchdogTimeout();
  umTierTransitionHudWatchdogTimeoutId = setTimeout(function () {
    umTierTransitionHudWatchdogTimeoutId = null;
    if (!umTierTransitionHudDelayPending) {
      return;
    }

    umCompleteTierTransitionHudUpdate();
  }, umTierTransitionHudWatchdogDelayMs());
}

function umClearStartDelayTimeout() {
  if (umStartDelayTimeoutId) {
    clearTimeout(umStartDelayTimeoutId);
    umStartDelayTimeoutId = null;
  }
}

function umClearWrongInterstitialDelayTimeout() {
  if (umWrongInterstitialDelayTimeoutId) {
    clearTimeout(umWrongInterstitialDelayTimeoutId);
    umWrongInterstitialDelayTimeoutId = null;
  }
}

function umBeginTierTransitionHudDelay(targetTier) {
  if (umTierBackgroundTier === targetTier) {
    return false;
  }

  if (!umTierTransitionHudDelayPending) {
    umTierTransitionHudDelayPending = true;
  }

  umArmTierTransitionHudWatchdog();
  return true;
}

function umSetTierBlockText(tier) {
  if (!umEls.tierLabel || !umEls.tierName) {
    return;
  }

  umEls.tierLabel.textContent = 'Undermurk Level ' + tier;
  umEls.tierName.textContent = umTierName(tier);
}

function umClearTierBlockTextAnimation() {
  if (!umEls.tierContent) {
    return;
  }

  umEls.tierContent.classList.remove('undermurk-tier-block__content--exit', 'undermurk-tier-block__content--enter');
  umEls.tierContent.style.animationDuration = '';
  umEls.tierContent.style.opacity = '';
  umEls.tierContent.style.transform = '';
  umEls.tierContent.style.removeProperty('--um-tier-text-out-duration');
  umEls.tierContent.style.removeProperty('--um-tier-text-in-duration');
}

function umFadeOutTierBlockText(durationMs) {
  if (!umEls.tierContent) {
    return;
  }

  umClearTierBlockTextAnimation();
  umEls.tierContent.style.setProperty('--um-tier-text-out-duration', durationMs + 'ms');
  umEls.tierContent.classList.add('undermurk-tier-block__content--exit');
}

function umFadeInTierBlockText(tier, durationMs) {
  if (!umEls.tierContent) {
    return;
  }

  umSetTierBlockText(tier);
  umEls.tierContent.classList.remove('undermurk-tier-block__content--exit');
  umEls.tierContent.style.removeProperty('--um-tier-text-out-duration');
  umEls.tierContent.style.opacity = '0';
  umEls.tierContent.style.transform = 'translateY(100%)';
  umEls.tierContent.style.setProperty('--um-tier-text-in-duration', durationMs + 'ms');
  umEls.tierContent.classList.add('undermurk-tier-block__content--enter');

  function onTextInEnd(event) {
    if (event.target !== umEls.tierContent || event.animationName !== 'undermurk-tier-text-in') {
      return;
    }

    umEls.tierContent.removeEventListener('animationend', onTextInEnd);
    umEls.tierContent.classList.remove('undermurk-tier-block__content--enter');
    umEls.tierContent.style.removeProperty('--um-tier-text-in-duration');
    umEls.tierContent.style.opacity = '';
    umEls.tierContent.style.transform = '';
  }

  umEls.tierContent.addEventListener('animationend', onTextInEnd);
}

function umCompleteTierTransitionHudUpdate() {
  umClearTierTransitionHudWatchdogTimeout();
  umTierTransitionHudDelayPending = false;
  umTierTransitionIndicatorSlide = true;
  umUpdateHUD();
}

function umScheduleTierTransitionHudUpdate() {
  umClearTierTransitionHudDelayTimeout();

  if (umTierTransitionTiming.indicatorDelay <= 0) {
    umCompleteTierTransitionHudUpdate();
    return;
  }

  umTierTransitionHudDelayTimeoutId = setTimeout(function () {
    umTierTransitionHudDelayTimeoutId = null;
    umCompleteTierTransitionHudUpdate();
  }, umTierTransitionTiming.indicatorDelay);
}

function umPlayTierTransition(tier, done) {
  umClearTierTransitionTimeout();
  umBeginTierTransitionHudDelay(tier);
  const runId = ++umTierTransitionRunId;

  function isCurrentRun() {
    return runId === umTierTransitionRunId;
  }

  const bg = umEls.tierBackground;
  const t = umTierTransitionTiming;

  function fadeOutOldArt(next) {
    if (!bg) {
      next();
      return;
    }

    const fromDimmed = umTierBackgroundDimmed;

    bg.classList.remove(
      'undermurk-tier-background--enter',
      'undermurk-tier-background--dimmed',
      'undermurk-tier-background--revealed'
    );
    bg.style.animationDelay = '';
    bg.style.animationDuration = '';
    bg.style.transform = '';
    bg.style.opacity = '';
    bg.style.transition = '';
    umTierBackgroundDimmed = false;

    bg.classList.add('undermurk-tier-background--exit');
    bg.style.setProperty('--um-tier-exit-duration', t.oldArtFadeDuration + 'ms');
    umFadeOutTierBlockText(t.textOutDuration);
    if (fromDimmed) {
      bg.classList.add('undermurk-tier-background--exit-from-dimmed');
    }

    function onExitEnd(event) {
      if (!isCurrentRun()) {
        bg.removeEventListener('animationend', onExitEnd);
        return;
      }

      if (event.target !== bg) {
        return;
      }

      if (event.animationName !== 'undermurk-tier-background-out'
        && event.animationName !== 'undermurk-tier-background-out-dimmed') {
        return;
      }

      bg.removeEventListener('animationend', onExitEnd);
      bg.classList.remove('undermurk-tier-background--exit', 'undermurk-tier-background--exit-from-dimmed');
      bg.style.removeProperty('--um-tier-exit-duration');
      if (umEls.tierContent) {
        umEls.tierContent.classList.remove('undermurk-tier-block__content--exit');
        umEls.tierContent.style.animationDuration = '';
        umEls.tierContent.style.removeProperty('--um-tier-text-out-duration');
        umEls.tierContent.style.opacity = '0';
        umEls.tierContent.style.transform = 'translateY(100%)';
      }

      umTierTransitionTimeoutId = setTimeout(function () {
        umTierTransitionTimeoutId = null;
        if (!isCurrentRun()) {
          return;
        }

        next();
      }, t.blankHoldDuration);
    }

    bg.addEventListener('animationend', onExitEnd);
  }

  function revealNewArt() {
    if (!isCurrentRun()) {
      return;
    }

    if (!bg) {
      umScheduleTierTransitionHudUpdate();
      if (done) {
        done();
      }
      return;
    }

    bg.style.transition = 'none';
    bg.style.opacity = '0';
    bg.style.transform = 'scale(2)';
    bg.style.backgroundImage = 'url(' + umTierBackgroundPath(tier) + ')';
    umTierBackgroundTier = tier;
    umTierBackgroundDimmed = false;
    umTierBackgroundRevealed = false;

    void bg.offsetWidth;

    bg.style.transition = '';
    bg.style.opacity = '';
    bg.style.transform = '';
    bg.classList.add('undermurk-tier-background--enter');
    bg.style.animationDuration = t.artInDuration + 'ms';
    bg.style.animationDelay = '0ms';

    umFadeInTierBlockText(tier, t.textInDuration);
    umScheduleTierTransitionHudUpdate();

    function onArtInEnd(event) {
      if (!isCurrentRun()) {
        bg.removeEventListener('animationend', onArtInEnd);
        return;
      }

      if (event.target !== bg || event.animationName !== 'undermurk-tier-background-in') {
        return;
      }

      bg.removeEventListener('animationend', onArtInEnd);
      bg.style.transform = '';
      bg.classList.remove('undermurk-tier-background--enter');
      bg.style.animationDuration = '';
      bg.style.animationDelay = '';
      umTierBackgroundRevealed = true;
      umApplyTierBackgroundDimState();

      umTierTransitionTimeoutId = setTimeout(function () {
        umTierTransitionTimeoutId = null;
        if (!isCurrentRun()) {
          return;
        }

        if (done) {
          done();
        }
      }, t.artHoldDuration);
    }

    bg.addEventListener('animationend', onArtInEnd);
  }

  function afterQuestionOut(next) {
    umAnimateQuestionOut(next);
  }

  afterQuestionOut(function () {
    if (!isCurrentRun()) {
      return;
    }

    fadeOutOldArt(revealNewArt);
  });
}

function umBindIndicatorResize() {
  if (umResizeBound) {
    return;
  }
  umResizeBound = true;
  window.addEventListener('resize', function () {
    if (umState && (umIndicatorPositioned || umIndicatorEntrancePending)) {
      umPositionPlayerIndicator(true);
    }
  });
}

function umFrameEntranceStartMs() {
  return umEntranceTiming.frameDelay;
}

function umFrameEntranceEndMs() {
  return umFrameEntranceStartMs() + umEntranceTiming.frameDuration;
}

function umStripEntranceStartMs() {
  return umFrameEntranceEndMs() + umEntranceTiming.stripDelay;
}

function umStripEntranceEndMs() {
  return umStripEntranceStartMs() + umEntranceTiming.stripDuration;
}

function umCardEntranceStartMs(cardIndex) {
  return umStripEntranceEndMs() + umEntranceTiming.cardDelay + cardIndex * umEntranceTiming.cardStagger;
}

function umLastCardEntranceEndMs(playerCount) {
  const lastCardIndex = Math.max(0, playerCount - 1);
  return umCardEntranceStartMs(lastCardIndex) + umEntranceTiming.cardDuration;
}

function umTierBackgroundEntranceStartMs(playerCount) {
  return umLastCardEntranceEndMs(playerCount) + umEntranceTiming.tierBackgroundDelay;
}

function umTierBackgroundEntranceEndMs(playerCount) {
  return umTierBackgroundEntranceStartMs(playerCount) + umEntranceTiming.tierBackgroundDuration;
}

function umTierBlockEntranceStartMs(playerCount) {
  return umTierBackgroundEntranceEndMs(playerCount) + umEntranceTiming.tierBlockDelay;
}

function umTierBlockEntranceEndMs(playerCount) {
  return umTierBlockEntranceStartMs(playerCount) + umEntranceTiming.tierBlockDuration;
}

function umIndicatorEntranceStartMs(playerCount) {
  return umTierBlockEntranceEndMs(playerCount) + umEntranceTiming.indicatorDelay;
}

function umFirstUpEntranceDelayMs() {
  return Math.max(0, umEntranceTiming.indicatorDuration + umEntranceTiming.firstUpDelay - umEntranceTiming.firstUpLeadIn);
}

function umRevealPlayerIndicator() {
  if (!umEls.playerIndicator) {
    return;
  }

  umIndicatorEntrancePending = false;
  umPositionPlayerIndicator(true);
  umEls.playerIndicator.classList.remove('undermurk-player-indicator--hidden');
  umEls.playerIndicator.classList.add('undermurk-player-indicator--enter');
  umEls.playerIndicator.style.animationDelay = '0ms';
  umEls.playerIndicator.style.animationDuration = umEntranceTiming.indicatorDuration + 'ms';
  umIndicatorPositioned = true;

  function onEnterEnd() {
    umEls.playerIndicator.removeEventListener('animationend', onEnterEnd);
    umEls.playerIndicator.classList.remove('undermurk-player-indicator--enter');
  }

  umEls.playerIndicator.addEventListener('animationend', onEnterEnd);
}

function umClearIndicatorSwitchTimeout() {
  if (umIndicatorSwitchTimeoutId) {
    clearTimeout(umIndicatorSwitchTimeoutId);
    umIndicatorSwitchTimeoutId = null;
  }
}

function umPlayerSwitchDelayPending() {
  if (umTierTransitionHudDelayPending) {
    return umLastIndicatorPlayerIndex !== null
      && umLastIndicatorPlayerIndex !== umState.currentIndex;
  }

  return umIndicatorPositioned
    && umLastIndicatorPlayerIndex !== null
    && umLastIndicatorPlayerIndex !== umState.currentIndex
    && umEntranceTiming.indicatorSwitchDelay > 0
    && !umIndicatorEntrancePending;
}

function umHighlightedPlayerIndex() {
  if (umIndicatorEntrancePending) {
    return null;
  }

  if (umPlayerSwitchDelayPending()) {
    return umLastIndicatorPlayerIndex;
  }

  if (umLastIndicatorPlayerIndex === null) {
    return null;
  }

  return umState.currentIndex;
}

function umSyncActivePlayerCard() {
  if (!umEls.playerStripCards || !umState) {
    return;
  }

  const cards = umEls.playerStripCards.querySelectorAll('.undermurk-player-card');
  const activeIndex = umHighlightedPlayerIndex();

  for (let i = 0; i < cards.length; i++) {
    const player = umState.players[i];
    cards[i].classList.toggle('undermurk-player-card--active', i === activeIndex && player && !player.eliminated);
  }
}

function umPlayerIndicatorCenterX(playerIndex) {
  if (!umEls.playerStrip || !umEls.playerStripCards || !umState) {
    return null;
  }

  const cards = umEls.playerStripCards.querySelectorAll('.undermurk-player-card');
  const card = cards[playerIndex];
  if (!card) {
    return null;
  }

  const stripRect = umEls.playerStrip.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  return cardRect.left + cardRect.width / 2 - stripRect.left;
}

function umApplyPlayerIndicatorPosition(centerX, instant) {
  umEls.playerIndicator.style.left = centerX + 'px';
  if (!umTierTransitionHudDelayPending) {
    umLastIndicatorPlayerIndex = umState.currentIndex;
  }
  umSyncActivePlayerCard();

  if (umIndicatorEntrancePending) {
    umEls.playerIndicator.classList.add('undermurk-player-indicator--hidden');
    return;
  }

  if (instant) {
    umEls.playerIndicator.classList.add('undermurk-player-indicator--instant');
  }

  umEls.playerIndicator.classList.remove('undermurk-player-indicator--hidden');

  if (instant) {
    void umEls.playerIndicator.offsetWidth;
    umEls.playerIndicator.classList.remove('undermurk-player-indicator--instant');
    umIndicatorPositioned = true;
  }
}

function umPositionPlayerIndicator(instant) {
  if (!umEls.playerIndicator || !umEls.playerStripCards || !umState) {
    return;
  }

  if (umTierTransitionHudDelayPending) {
    return;
  }

  const cards = umEls.playerStripCards.querySelectorAll('.undermurk-player-card');
  const activeCard = cards[umState.currentIndex];
  const activePlayer = umState.players[umState.currentIndex];

  if (!activeCard || activePlayer.eliminated) {
    umClearIndicatorSwitchTimeout();
    umEls.playerIndicator.classList.add('undermurk-player-indicator--hidden');
    return;
  }

  const stripRect = umEls.playerStrip.getBoundingClientRect();
  const cardRect = activeCard.getBoundingClientRect();
  const centerX = cardRect.left + cardRect.width / 2 - stripRect.left;

  const playerChanged = umIndicatorPositioned
    && umLastIndicatorPlayerIndex !== null
    && umLastIndicatorPlayerIndex !== umState.currentIndex;
  const switchDelay = playerChanged && !instant && !umIndicatorEntrancePending && !umTierTransitionIndicatorSlide
    ? umEntranceTiming.indicatorSwitchDelay
    : 0;

  umClearIndicatorSwitchTimeout();

  if (switchDelay > 0) {
    const targetIndex = umState.currentIndex;
    umIndicatorSwitchTimeoutId = setTimeout(function () {
      umIndicatorSwitchTimeoutId = null;
      if (!umState || umState.currentIndex !== targetIndex) {
        umPositionPlayerIndicator(false);
        return;
      }

      const activePlayer = umState.players[targetIndex];
      if (activePlayer.eliminated) {
        umEls.playerIndicator.classList.add('undermurk-player-indicator--hidden');
        umSyncActivePlayerCard();
        return;
      }

      const centerX = umPlayerIndicatorCenterX(targetIndex);
      if (centerX === null) {
        return;
      }

      umApplyPlayerIndicatorPosition(centerX, false);
    }, switchDelay);
    return;
  }

  umApplyPlayerIndicatorPosition(centerX, instant);
}

function umUpdateHUD() {
  if (!umState || !umEls.tierLabel) {
    return;
  }

  const player = umCurrentPlayer();
  if (!umTierTransitionHudDelayPending) {
    umSetTierBlockText(umTierBackgroundTier || player.tier);
  }

  const highlightedIndex = umHighlightedPlayerIndex();
  umEls.playerStripCards.innerHTML = '';
  umState.players.forEach(function (p, index) {
    const card = createElement('div', ['undermurk-player-card'], umEls.playerStripCards);
    if (index === highlightedIndex && !p.eliminated) {
      card.classList.add('undermurk-player-card--active');
    }
    if (p.eliminated) {
      card.classList.add('undermurk-player-card--eliminated');
    }

    const info = createElement('div', ['undermurk-player-card__info'], card);
    const scoreEl = createElement('p', ['undermurk-player-card__name'], info);
    scoreEl.textContent = String(p.score);

    const livesEl = createElement('div', ['undermurk-player-card__lives'], info);
    livesEl.setAttribute('aria-label', p.lives + ' lives');
    for (let i = 0; i < settings.lives; i++) {
      const heart = createElement('span', ['undermurk-player-card__heart'], livesEl);
      if (i >= p.lives) {
        heart.classList.add('undermurk-player-card__heart--lost');
      }
      heart.innerHTML = umHeartSvg;
    }

    const avatar = createElement('div', ['undermurk-player-card__avatar'], card);
    if (p.asset) {
      avatar.style.backgroundImage = 'url(assets/player/' + p.asset + ')';
    }
  });

  requestAnimationFrame(function () {
    umPositionPlayerIndicator(!umIndicatorPositioned);
    umTierTransitionIndicatorSlide = false;
  });
}

function umHideOverlay(name) {
  if (name === 'interstitial' && umEls.interstitialPanel) {
    umEls.interstitialPanel.classList.add('undermurk-overlay__panel--hidden');
    umEls.interstitialPanel.classList.remove('undermurk-overlay__panel--enter', 'undermurk-overlay__panel--exit');
    umEls.interstitialPanel.style.animationDuration = '';
    return;
  }

  if (umEls[name]) {
    umEls[name].classList.add('undermurk-overlay--hidden');
  }
}

function umShowOverlay(name) {
  if (name === 'interstitial' && umEls.interstitialPanel) {
    umEls.interstitialPanel.classList.remove('undermurk-overlay__panel--hidden');
    return;
  }

  if (umEls[name]) {
    umEls[name].classList.remove('undermurk-overlay--hidden');
  }
}

function umPickQuestionEntry() {
  const player = umCurrentPlayer();
  const bank = undermurkVocab[player.tier] || [];
  if (!bank.length) {
    return null;
  }

  let pool = bank.filter(function (entry) {
    return !player.askedWords.has(entry.word);
  });

  if (!pool.length) {
    player.askedWords.clear();
    pool = bank.slice();
  }

  const entry = pool[Math.floor(Math.random() * pool.length)];
  player.askedWords.add(entry.word);
  return entry;
}

function umBuildOptions(entry, isBoss) {
  const count = isBoss ? 5 : 2;
  const distractors = umShuffle(entry.distractors).slice(0, count);
  return umShuffle([entry.word].concat(distractors));
}

function umCheckVictory() {
  return umState.tierJustCleared;
}

function umCheckGameOver() {
  return umActivePlayers().length === 0;
}

function umOrdinalSuffix(n) {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) {
    return 'th';
  }

  switch (n % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function umSetEndRank(rankEl, place) {
  const suffix = umOrdinalSuffix(place);
  rankEl.innerHTML = '<span class="undermurk-end__rank-num">' + place + '</span>'
    + '<span class="undermurk-end__rank-suffix">' + suffix + '</span>';
}

function umFormatPoints(score) {
  return score + (score === 1 ? ' point' : ' points');
}

function umTeamReachedTier() {
  let maxTier = 1;
  umState.players.forEach(function (player) {
    if (player.tier > maxTier) {
      maxTier = player.tier;
    }
  });
  return maxTier;
}

function umEndSubtitle(victory) {
  if (victory) {
    return 'Your team defeated the Undermurk.';
  }

  return 'Your team reached ' + umTierName(umTeamReachedTier()) + '.';
}

function umFadeOutTierBackgroundForEnd() {
  if (!umEls.tierBackground) {
    return;
  }

  const bg = umEls.tierBackground;
  const fromDimmed = umTierBackgroundDimmed;
  const fadeDuration = umTierTransitionTiming.oldArtFadeDuration;

  bg.classList.remove(
    'undermurk-tier-background--enter',
    'undermurk-tier-background--dimmed',
    'undermurk-tier-background--revealed'
  );
  bg.style.animationDelay = '';
  bg.style.animationDuration = '';
  bg.style.transform = '';
  bg.style.opacity = '';
  bg.style.transition = '';
  umTierBackgroundDimmed = false;

  bg.classList.add('undermurk-tier-background--exit');
  bg.style.setProperty('--um-tier-exit-duration', fadeDuration + 'ms');
  if (fromDimmed) {
    bg.classList.add('undermurk-tier-background--exit-from-dimmed');
  }

  function onExitEnd(event) {
    if (event.target !== bg) {
      return;
    }

    if (event.animationName !== 'undermurk-tier-background-out'
      && event.animationName !== 'undermurk-tier-background-out-dimmed') {
      return;
    }

    bg.removeEventListener('animationend', onExitEnd);
    bg.classList.remove('undermurk-tier-background--exit', 'undermurk-tier-background--exit-from-dimmed');
    bg.style.removeProperty('--um-tier-exit-duration');
    bg.style.backgroundImage = 'none';
    bg.style.opacity = '0';
  }

  bg.addEventListener('animationend', onExitEnd);
}

function umAnimateHudExitForEnd() {
  const duration = umTierTransitionTiming.oldArtFadeDuration;

  if (umEls.playerIndicator) {
    umEls.playerIndicator.classList.add('undermurk-player-indicator--hidden');
  }

  if (umEls.playerStrip) {
    umEls.playerStrip.classList.remove('undermurk-player-strip--enter');
    umEls.playerStrip.style.animationDelay = '';
    umEls.playerStrip.style.animationDuration = '';
    umEls.playerStrip.classList.add('undermurk-player-strip--exit');
    umEls.playerStrip.style.setProperty('--um-end-hud-exit-duration', duration + 'ms');
  }

  if (umEls.tierBlock) {
    umEls.tierBlock.classList.remove('undermurk-tier-block--enter');
    umEls.tierBlock.style.animationDelay = '';
    umEls.tierBlock.style.animationDuration = '';
    umEls.tierBlock.classList.add('undermurk-tier-block--exit');
    umEls.tierBlock.style.setProperty('--um-end-hud-exit-duration', duration + 'ms');
  }
}

function umShowEndScreen(victory) {
  umStopTimer();
  umLocked = true;
  umClearIndicatorSwitchTimeout();
  umClearTierTransitionHudDelayTimeout();
  umClearTierTransitionHudWatchdogTimeout();
  umTierTransitionHudDelayPending = false;
  umHideOverlay('interstitial');
  umEls.questionArea.classList.add('undermurk-question--hidden');

  umEls.endTitle.textContent = victory ? 'Victory' : 'Game Over';
  umEls.endMessage.textContent = umEndSubtitle(victory);

  umFadeOutTierBackgroundForEnd();
  umAnimateHudExitForEnd();

  umEls.endTeamScore.textContent = umFormatPoints(umState.teamScore);

  umEls.endPlayers.innerHTML = '';
  let previousScore = null;
  let place = 0;
  umState.players.slice().sort(function (a, b) {
    return b.score - a.score;
  }).forEach(function (player) {
    if (player.score !== previousScore) {
      place += 1;
      previousScore = player.score;
    }

    const entry = createElement('div', ['undermurk-end__player'], umEls.endPlayers);
    if (place === 1) {
      entry.classList.add('undermurk-end__player--first');
    }
    if (player.eliminated) {
      entry.classList.add('undermurk-end__player--eliminated');
    }

    const rank = createElement('p', ['undermurk-end__rank'], entry);
    umSetEndRank(rank, place);

    const avatar = createElement('div', ['undermurk-end__avatar'], entry);
    if (player.asset) {
      avatar.style.backgroundImage = 'url(assets/player/' + player.asset + ')';
    }

    const score = createElement('p', ['undermurk-end__score'], entry);
    score.textContent = umFormatPoints(player.score);
  });

  umShowOverlay('end');
  updateElementSize();
  updateLineThickness();
}

function umClearTierAdvanceFlag() {
  umState.tierJustCleared = false;
}

function umAdvanceTier(callback) {
  const player = umCurrentPlayer();

  if (player.tier >= 10) {
    umState.tierJustCleared = true;
    if (callback) {
      callback();
    }
    return;
  }

  player.tier += 1;
  player.cleared = 0;
  player.isBossRoundComplete = false;
  umBeginTierTransitionHudDelay(player.tier);
  umUpdateHUD();
  if (callback) {
    callback();
  }
}

function umSlideInInterstitialPanel() {
  if (!umEls.interstitialPanel) {
    umShowOverlay('interstitial');
    return;
  }

  umEls.interstitialPanel.classList.remove('undermurk-overlay__panel--enter', 'undermurk-overlay__panel--exit');
  umEls.interstitialPanel.style.animationDuration = '';
  umShowOverlay('interstitial');

  requestAnimationFrame(function () {
    umEls.interstitialPanel.classList.add('undermurk-overlay__panel--enter');

    function onEnterEnd(event) {
      if (event.target !== umEls.interstitialPanel || event.animationName !== 'undermurk-overlay-panel-in') {
        return;
      }

      umEls.interstitialPanel.removeEventListener('animationend', onEnterEnd);
      umEls.interstitialPanel.classList.remove('undermurk-overlay__panel--enter');
    }

    umEls.interstitialPanel.addEventListener('animationend', onEnterEnd);
  });
}

function umSlideOutInterstitialPanel(callback) {
  if (!umEls.interstitialPanel) {
    if (callback) {
      callback();
    }
    return;
  }

  umEls.interstitialPanel.classList.remove('undermurk-overlay__panel--enter');
  umEls.interstitialPanel.classList.add('undermurk-overlay__panel--exit');
  umEls.interstitialPanel.style.animationDuration = umQuestionTiming.interstitialOutDuration + 'ms';

  function onExitEnd(event) {
    if (event.target !== umEls.interstitialPanel || event.animationName !== 'undermurk-overlay-panel-out') {
      return;
    }

    umEls.interstitialPanel.removeEventListener('animationend', onExitEnd);
    umEls.interstitialPanel.classList.remove('undermurk-overlay__panel--exit');
    umEls.interstitialPanel.style.animationDuration = '';
    if (callback) {
      callback();
    }
  }

  umEls.interstitialPanel.addEventListener('animationend', onExitEnd);
}

function umShowInterstitialPanel(heading, player, callback) {
  umEls.interstitialHeading.textContent = heading;
  umEls.interstitialName.textContent = player.name;
  if (umEls.interstitialAvatar) {
    if (player.asset) {
      umEls.interstitialAvatar.style.backgroundImage = 'url(assets/player/' + player.asset + ')';
    } else {
      umEls.interstitialAvatar.style.backgroundImage = '';
    }
  }
  umUpdateHUD();
  umDimTierBackground();

  function onStart() {
    umEls.interstitialStart.removeEventListener('click', onStart);
    umSlideOutInterstitialPanel(function () {
      umHideOverlay('interstitial');
      umClearStartDelayTimeout();
      umStartDelayTimeoutId = setTimeout(function () {
        umStartDelayTimeoutId = null;
        if (callback) {
          callback();
        }
      }, umQuestionTiming.startDelay);
    });
  }

  umEls.interstitialStart.addEventListener('click', onStart);
  umSlideInInterstitialPanel();
}

function umShowFirstUp(player, callback) {
  umShowInterstitialPanel('First Up', player, callback);
}

function umShowInterstitial(player, callback) {
  umShowInterstitialPanel('Next Up', player, callback);
}

function umUpdateTimerAppearance() {
  if (!umState || !umEls.questionArea || !umState.timeTotal) {
    return;
  }

  const ratio = umState.timeLeft / umState.timeTotal;
  umEls.questionArea.classList.toggle('undermurk-question--low-time', ratio <= 0.25);
}

function umStartTimer() {
  umStopTimer();
  umState.timeTotal = tierTime(umCurrentPlayer().tier);
  umState.timeLeft = umState.timeTotal;
  umUpdateHUD();
  umUpdateTimerAppearance();

  umResetTimerFill();
  void umEls.timerFill.offsetWidth;
  umEls.timerFill.style.transition = 'width ' + umState.timeTotal + 's linear';
  umEls.timerFill.style.width = '0%';

  umState.timerTickId = setInterval(function () {
    umState.timeLeft -= 1;
    umUpdateTimerAppearance();
  }, 1000);

  umState.timerId = setTimeout(function () {
    umStopTimer();
    umHandleTimeout();
  }, umState.timeTotal * 1000);
}

function umRenderQuestion(prepareHidden) {
  const player = umCurrentPlayer();
  const isBoss = player.cleared >= 5;
  umState.currentEntry = umPickQuestionEntry();

  if (!umState.currentEntry) {
    return;
  }

  umEls.promptLabel.textContent = isBoss ? 'BOSS ROUND' : 'What word matches this definition?';
  umEls.promptText.textContent = umState.currentEntry.definition;

  umEls.options.innerHTML = '';
  umEls.options.classList.toggle('undermurk-options--boss', isBoss);

  const options = umBuildOptions(umState.currentEntry, isBoss);
  options.forEach(function (word) {
    const button = createElement('button', ['undermurk-option'], umEls.options);
    button.textContent = word;
    setIpadActiveState(button);
    button.addEventListener('click', function () {
      umHandleAnswer(word);
    });
  });

  umEls.questionArea.classList.remove(
    'undermurk-question--enter',
    'undermurk-question--wrong-out',
    'undermurk-question--out',
    'undermurk-question--low-time'
  );
  umResetTimerFill();
  if (prepareHidden) {
    umEls.questionArea.classList.add('undermurk-question--hidden');
  } else {
    umEls.questionArea.classList.remove('undermurk-question--hidden');
  }
  umHideOverlay('end');
  umUpdateHUD();
  updateElementSize();
  updateLineThickness();
}

function umAnimateQuestionOut(callback) {
  if (!umEls.questionArea || umEls.questionArea.classList.contains('undermurk-question--hidden')) {
    if (callback) {
      callback();
    }
    return;
  }

  umEls.questionArea.classList.remove('undermurk-question--enter', 'undermurk-question--wrong-out', 'undermurk-question--fade-out');
  umEls.questionArea.style.transition = '';
  umEls.questionArea.classList.add('undermurk-question--out');
  umEls.questionArea.style.animationDuration = umQuestionTiming.outDuration + 'ms';

  function onOutEnd(event) {
    if (event.target !== umEls.questionArea || event.animationName !== 'undermurk-question-out') {
      return;
    }

    umEls.questionArea.removeEventListener('animationend', onOutEnd);
    umEls.questionArea.classList.remove('undermurk-question--out');
    umEls.questionArea.style.animationDuration = '';
    umEls.questionArea.classList.add('undermurk-question--hidden');
    if (callback) {
      callback();
    }
  }

  umEls.questionArea.addEventListener('animationend', onOutEnd);
}

function umSlideInQuestion(callback) {
  if (!umEls.questionArea) {
    if (callback) {
      callback();
    }
    return;
  }

  umDimTierBackground();

  umEls.questionArea.classList.remove('undermurk-question--hidden');
  umEls.questionArea.classList.add('undermurk-question--enter');
  umEls.questionArea.style.animationDuration = umQuestionTiming.enterDuration + 'ms';

  function onEnterEnd(event) {
    if (event.target !== umEls.questionArea || event.animationName !== 'undermurk-question-in') {
      return;
    }

    umEls.questionArea.removeEventListener('animationend', onEnterEnd);
    umEls.questionArea.classList.remove('undermurk-question--enter');
    if (callback) {
      callback();
    }
  }

  umEls.questionArea.addEventListener('animationend', onEnterEnd);
}

function umAnimateQuestionWrong(callback) {
  if (!umEls.questionArea || umEls.questionArea.classList.contains('undermurk-question--hidden')) {
    if (callback) {
      callback();
    }
    return;
  }

  umEls.questionArea.classList.remove('undermurk-question--enter');
  umEls.questionArea.classList.add('undermurk-question--wrong-out');
  umEls.questionArea.style.animationDuration = umQuestionTiming.wrongOutDuration + 'ms';

  function onWrongOutEnd(event) {
    if (event.target !== umEls.questionArea || event.animationName !== 'undermurk-question-wrong-out') {
      return;
    }

    umEls.questionArea.removeEventListener('animationend', onWrongOutEnd);
    umEls.questionArea.classList.remove('undermurk-question--wrong-out');
    umEls.questionArea.classList.add('undermurk-question--hidden');
    if (callback) {
      callback();
    }
  }

  umEls.questionArea.addEventListener('animationend', onWrongOutEnd);
}

function umShowNextQuestion(callback) {
  function slideIn() {
    umRenderQuestion(true);
    umSlideInQuestion(callback);
  }

  if (!umEls.questionArea || umEls.questionArea.classList.contains('undermurk-question--hidden')) {
    slideIn();
    return;
  }

  umAnimateQuestionOut(slideIn);
}

function umAfterWrongAnswer() {
  umUpdateHUD();

  umAnimateQuestionWrong(function () {
    if (umCheckGameOver()) {
      umShowEndScreen(false);
      return;
    }

    if (umCheckVictory()) {
      umShowEndScreen(true);
      return;
    }

    umBeginTurn();
  });
}

function umAfterTurnChange(callback) {
  const player = umCurrentPlayer();
  const targetTier = player.tier;

  function proceed() {
    if (settings.playerCount > 1 && umNeedsInterstitial) {
      umNeedsInterstitial = false;
      umClearWrongInterstitialDelayTimeout();
      umWrongInterstitialDelayTimeoutId = setTimeout(function () {
        umWrongInterstitialDelayTimeoutId = null;
        umShowInterstitial(player, callback);
      }, umQuestionTiming.wrongInterstitialDelay);
      return;
    }

    if (callback) {
      callback();
    }
  }

  if (umTierBackgroundTier !== targetTier) {
    umPlayTierTransition(targetTier, proceed);
    return;
  }

  umSetTierBackground(targetTier);
  umShowTierBackgroundInstantly();
  if (umTierTransitionHudDelayPending) {
    umCompleteTierTransitionHudUpdate();
  }
  proceed();
}

function umBeginTurn() {
  if (umCheckGameOver()) {
    umShowEndScreen(false);
    return;
  }

  if (umCheckVictory()) {
    umShowEndScreen(true);
    return;
  }

  umLocked = false;
  umClearTierAdvanceFlag();

  umAfterTurnChange(function () {
    umShowNextQuestion(function () {
      umStartTimer();
    });
  });
}

function umHandleAnswer(selectedWord) {
  if (umLocked || !umState.currentEntry) {
    return;
  }

  umLocked = true;
  umStopTimer();
  umPauseTimerFill();

  const player = umCurrentPlayer();
  const isBoss = player.cleared >= 5;
  const correct = selectedWord === umState.currentEntry.word;

  if (correct) {
    const points = isBoss ? 2 : 1;
    player.score += points;
    umState.teamScore += points;

    if (isBoss) {
      player.isBossRoundComplete = true;
      umAdvanceTier(function () {
        if (umCheckVictory()) {
          umShowEndScreen(true);
          return;
        }
        umIsFirstTurn = false;
        umBeginTurn();
      });
      return;
    }

    player.cleared += 1;
    umIsFirstTurn = false;
    umBeginTurn();
    return;
  }

  player.lives -= 1;
  if (player.lives <= 0) {
    player.eliminated = true;
  }

  umNeedsInterstitial = settings.playerCount > 1;
  umAdvancePlayerIndex();
  umBeginTierTransitionHudDelay(umCurrentPlayer().tier);
  umIsFirstTurn = false;
  umAfterWrongAnswer();
}

function umHandleTimeout() {
  if (umLocked) {
    return;
  }

  umLocked = true;
  umStopTimer();
  umPauseTimerFill();

  const player = umCurrentPlayer();
  player.lives -= 1;
  if (player.lives <= 0) {
    player.eliminated = true;
  }

  umNeedsInterstitial = settings.playerCount > 1;
  umAdvancePlayerIndex();
  umBeginTierTransitionHudDelay(umCurrentPlayer().tier);
  umIsFirstTurn = false;
  umAfterWrongAnswer();
}

function umBuildDOM() {
  umRoot = createElement('div', ['undermurk-game'], splashContainerWrapper);
  umEls.tierBackground = createElement('div', ['undermurk-tier-background'], umRoot);
  umSetTierBackground(1);

  umEls.hud = createElement('div', ['undermurk-hud'], umRoot, 'undermurk-hud');

  umEls.tierBlock = createElement('div', ['undermurk-tier-block'], umEls.hud);
  umEls.tierContent = createElement('div', ['undermurk-tier-block__content'], umEls.tierBlock);
  umEls.tierLabel = createElement('p', ['undermurk-hud__tier'], umEls.tierContent);
  umEls.tierName = createElement('p', ['undermurk-hud__tier-name'], umEls.tierContent);

  umEls.playerStrip = createElement('div', ['undermurk-player-strip'], umRoot);
  umEls.playerStripCards = createElement('div', ['undermurk-player-strip__cards'], umEls.playerStrip);
  umEls.playerIndicator = createElement('img', ['undermurk-player-indicator'], umEls.playerStrip);
  umEls.playerIndicator.src = 'assets/enter-the-undermurk/ui/player-indicator.png';
  umEls.playerIndicator.alt = '';
  umEls.playerIndicator.setAttribute('aria-hidden', 'true');
  umBindIndicatorResize();

  umEls.questionArea = createElement('div', ['undermurk-question', 'undermurk-question--hidden'], umRoot);
  umEls.promptLabel = createElement('p', ['undermurk-question__label'], umEls.questionArea);
  umEls.questionBody = createElement('div', ['undermurk-question__body'], umEls.questionArea);
  umEls.promptText = createElement('p', ['undermurk-question__prompt'], umEls.questionBody);
  umEls.options = createElement('div', ['undermurk-options'], umEls.questionBody);

  umEls.timerWrap = createElement('div', ['undermurk-timer'], umEls.questionArea);
  umEls.timerFill = createElement('div', ['undermurk-timer__fill'], umEls.timerWrap);

  umEls.interstitialPanel = createElement('div', ['undermurk-overlay__panel', 'undermurk-overlay__panel--interstitial', 'undermurk-overlay__panel--hidden'], umRoot);
  const interstitialPanel = umEls.interstitialPanel;
  umEls.interstitialContent = createElement('div', ['undermurk-overlay__panel-content'], interstitialPanel);
  umEls.interstitialAvatar = createElement('div', ['undermurk-overlay__avatar'], interstitialPanel);
  umEls.interstitialHeading = createElement('p', ['undermurk-overlay__heading'], umEls.interstitialContent);
  umEls.interstitialHeading.textContent = 'Next Up';
  umEls.interstitialName = createElement('p', ['undermurk-overlay__title'], umEls.interstitialContent);
  umEls.interstitialStart = createElement('button', ['undermurk-overlay__button'], umEls.interstitialContent);
  umEls.interstitialStart.textContent = 'Start';
  setIpadActiveState(umEls.interstitialStart);

  umEls.end = createElement('div', ['undermurk-overlay', 'undermurk-overlay--hidden'], umRoot);
  const endPanel = createElement('div', ['undermurk-overlay__panel', 'undermurk-overlay__panel--end'], umEls.end);
  umEls.endTitle = createElement('p', ['undermurk-overlay__title'], endPanel);
  umEls.endMessage = createElement('p', ['undermurk-overlay__subtitle'], endPanel);
  umEls.endStandings = createElement('div', ['undermurk-end__standings'], endPanel);
  umEls.endPlayers = createElement('div', ['undermurk-end__players'], umEls.endStandings);
  umEls.endEquals = createElement('p', ['undermurk-end__equals'], umEls.endStandings);
  umEls.endEquals.textContent = '=';
  umEls.endEquals.setAttribute('aria-hidden', 'true');
  umEls.endTeamTotal = createElement('div', ['undermurk-end__player', 'undermurk-end__player--first', 'undermurk-end__team-total'], umEls.endStandings);
  umEls.endTeamLabel = createElement('p', ['undermurk-end__rank'], umEls.endTeamTotal);
  umEls.endTeamLabel.textContent = 'Team Total';
  createElement('div', ['undermurk-end__avatar'], umEls.endTeamTotal);
  umEls.endTeamScore = createElement('p', ['undermurk-end__score'], umEls.endTeamTotal);

  const endActions = createElement('div', ['undermurk-end__actions'], endPanel);
  umEls.playAgain = createElement('button', ['undermurk-overlay__button'], endActions);
  umEls.playAgain.textContent = 'Play Again';
  setIpadActiveState(umEls.playAgain);

  umEls.frame = createElement('div', ['undermurk-frame'], splashContainerWrapper);

  umEls.playAgain.addEventListener('click', function () {
    umReturnToSetup();
  });
}

function umResetState(characters) {
  umCharacters = characters.slice();
  umLocked = false;
  umNeedsInterstitial = false;
  umIsFirstTurn = true;
  umIndicatorPositioned = false;
  umIndicatorEntrancePending = false;
  umLastIndicatorPlayerIndex = null;
  umTierBackgroundTier = null;
  umTierBackgroundDimmed = false;
  umTierBackgroundRevealed = false;
  umTierTransitionHudDelayPending = false;
  umTierTransitionIndicatorSlide = false;
  umClearTierBlockTextAnimation();

  if (umIndicatorEntranceTimeoutId) {
    clearTimeout(umIndicatorEntranceTimeoutId);
    umIndicatorEntranceTimeoutId = null;
  }

  umClearIndicatorSwitchTimeout();
  umClearStartDelayTimeout();
  umClearWrongInterstitialDelayTimeout();
  umClearTierTransitionTimeout();
  umClearTierTransitionHudDelayTimeout();
  umClearTierTransitionHudWatchdogTimeout();

  umState = {
    players: umBuildPlayers(characters),
    currentIndex: 0,
    tierJustCleared: false,
    teamScore: 0,
    timerId: null,
    timeLeft: tierTime(1),
    timeTotal: tierTime(1),
    currentEntry: null,
  };

  for (let i = 0; i < umState.players.length; i++) {
    if (!umState.players[i].eliminated) {
      umState.currentIndex = i;
      break;
    }
  }
}

function umAnimateEntrance(onComplete) {
  if (!umEls.frame || !umEls.playerStrip || !umEls.tierBlock) {
    if (onComplete) {
      onComplete();
    }
    return;
  }

  requestAnimationFrame(function () {
    umEls.frame.classList.add('undermurk-frame--enter');
    umEls.frame.style.animationDelay = umFrameEntranceStartMs() + 'ms';
    umEls.frame.style.animationDuration = umEntranceTiming.frameDuration + 'ms';

    umEls.playerStrip.classList.add('undermurk-player-strip--enter');
    umEls.playerStrip.style.animationDelay = umStripEntranceStartMs() + 'ms';
    umEls.playerStrip.style.animationDuration = umEntranceTiming.stripDuration + 'ms';

    const cards = umEls.playerStripCards.querySelectorAll('.undermurk-player-card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add('undermurk-player-card--enter');
      cards[i].style.animationDelay = umCardEntranceStartMs(i) + 'ms';
      cards[i].style.animationDuration = umEntranceTiming.cardDuration + 'ms';
    }

    if (umEls.tierBackground) {
      umEls.tierBackground.classList.add('undermurk-tier-background--enter');
      umEls.tierBackground.style.animationDelay = umTierBackgroundEntranceStartMs(cards.length) + 'ms';
      umEls.tierBackground.style.animationDuration = umEntranceTiming.tierBackgroundDuration + 'ms';

      function onTierBackgroundEnterEnd(event) {
        if (event.target !== umEls.tierBackground || event.animationName !== 'undermurk-tier-background-in') {
          return;
        }

        umEls.tierBackground.removeEventListener('animationend', onTierBackgroundEnterEnd);
        umTierBackgroundRevealed = true;
      }

      umEls.tierBackground.addEventListener('animationend', onTierBackgroundEnterEnd);
    }

    umEls.tierBlock.classList.add('undermurk-tier-block--enter');
    umEls.tierBlock.style.animationDelay = umTierBlockEntranceStartMs(cards.length) + 'ms';
    umEls.tierBlock.style.animationDuration = umEntranceTiming.tierBlockDuration + 'ms';

    if (umIndicatorEntranceTimeoutId) {
      clearTimeout(umIndicatorEntranceTimeoutId);
    }
    umIndicatorEntrancePending = true;
    if (umEls.playerIndicator) {
      umEls.playerIndicator.classList.add('undermurk-player-indicator--hidden');
      umEls.playerIndicator.classList.remove('undermurk-player-indicator--enter');
    }

    const indicatorStart = umIndicatorEntranceStartMs(cards.length);
    umIndicatorEntranceTimeoutId = setTimeout(function () {
      umIndicatorEntranceTimeoutId = null;
      umRevealPlayerIndicator();
      if (onComplete) {
        setTimeout(onComplete, umFirstUpEntranceDelayMs());
      }
    }, indicatorStart);
  });
}

function umReturnToSetup() {
  umStopTimer();
  umClearIndicatorSwitchTimeout();
  umClearStartDelayTimeout();
  umClearWrongInterstitialDelayTimeout();
  umClearTierTransitionTimeout();
  umClearTierTransitionHudDelayTimeout();
  umClearTierTransitionHudWatchdogTimeout();

  if (umIndicatorEntranceTimeoutId) {
    clearTimeout(umIndicatorEntranceTimeoutId);
    umIndicatorEntranceTimeoutId = null;
  }

  umLocked = false;
  umCutsceneFinishing = false;

  splashContainerWrapper.querySelectorAll('*').forEach(function (child) {
    child.remove();
  });

  splashIndex = 0;
  drawSplash();
}

function initUndermurkGame(characters) {
  if (!characters || !characters.length) {
    return;
  }

  umStopTimer();
  umResetState(characters);

  splashContainerWrapper.querySelectorAll('*').forEach(function (child) {
    child.remove();
  });

  umBuildDOM();
  umSetTierBackground(umCurrentPlayer().tier);
  umIndicatorEntrancePending = true;
  umUpdateHUD();
  updateElementSize();
  updateLineThickness();
  umAnimateEntrance(function () {
    umShowFirstUp(umCurrentPlayer(), function () {
      umBeginTurn();
    });
  });
}
