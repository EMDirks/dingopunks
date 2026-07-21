// Enter the Undermurk! — entry logic and turn-based vocab minigame engine.
//
// Reuses the main game's splash scaffolding (global.js + splash-new.js). This file
// adds the bits unique to the minigame:
//   1. A player-count setup step (How many players?).
//   2. The "Play now" ready state and hand-off to the minigame.
//   3. The full minigame engine (initUndermurkGame and helpers).

// Always null — Undermurk always starts at the player-count settings step.
// The debrief URL slug is preserved in the address bar for View Score navigation
// but is not used to preselect characters or skip setup.
let undermurkPreselectedCharacters = null;

// Player-count-only setup step (no slug path). Mirrors the main game's tab styling.
function addUndermurkSetup() {
  splashTitle.innerHTML = 'How many players?';

  const inputContainer = createElement('div', ['splash-setup-input-container', 'splash-setup-input-container--undermurk'], splashContent);
  const tabRow = createElement('div', ['tab-row'], inputContainer);
  const tabText = createElement('p', ['tab-text', 'splash-p'], tabRow);
  tabText.innerHTML = 'Players';
  const tabContainer = createElement('div', ['tab-container'], tabRow);

  const counts = [1, 2, 3, 4, 5];

  for (let i = 0; i < counts.length; i++) {
    const tabButton = createElement('button', ['tab-button', 'tab-button-player-count-', 'tab-button--unselected'], tabContainer, 'tab-button-player-count-' + i);
    setIpadActiveState(tabButton);
    tabButton.textContent = counts[i];
    tabButton.addEventListener('click', function () {
      const tabButtons = document.querySelectorAll('.tab-button-player-count-');
      tabButtons.forEach(function (button) {
        toggleClass(button, 'tab-button--selected', 'tab-button--unselected');
      });
      toggleClass(tabButton, 'tab-button--unselected', 'tab-button--selected');
      settings.playerCount = counts[i];
      debriefStats.teamSize = counts[i];
      splashButton.textContent = 'Next';
      setTimeout(toggleClass, 200, splashButton, 'splash-button--hidden', 'splash-button--visible');
    });
  }

  updateElementSize();
  updateLineThickness();
}

// "Select New Characters": clear the team and return to the player-count step.
function resetUndermurkSelection() {
  undermurkPreselectedCharacters = null;
  playerCharacters.length = 0;
  characterArray.forEach(function (character) {
    character.selected = false;
  });
  settings.playerCount = null;
  debriefStats.teamSize = 0;

  toggleClass(splashContainer, 'splash-container--center', 'splash-container--off-left');

  setTimeout(function () {
    const childrenToRemove = splashContainerWrapper.querySelectorAll('*');
    childrenToRemove.forEach(function (child) {
      child.remove();
    });
    splashIndex = 0;
    setContainerSize();
    setTimeout(drawSplash, 200);
  }, splashTransitionDuration);
}

// Placeholder intro cutscene — text-only scenes until art is ready.
let cutscene = {
  undermurkIntro: [
    {
      text: "This is it, Dingo Punks. The blimp can't go any lower — you'll have to jump into the Undermurk yourself.",
      characterSprite: { name: 'J.J. DINGO' },
      backgroundColor: 'background-color-black',
    },
    {
      text: "Down you go — through the clouds, past the crackling static, falling faster than you've ever fallen...",
      characterSprite: { name: '' },
      backgroundColor: 'background-color-black',
    },
    {
      text: '...until the murk swallows you whole. Welcome to the Undermurk. Answer well, or sink forever.',
      characterSprite: { name: 'THE UNDERMURK' },
      backgroundColor: 'background-color-black',
    },
  ],
};

// Hand-off after "Enter the Undermurk!" — intro cutscene, then the minigame.
function enterUndermurk() {
  addCutscene(0, 'undermurkIntro');
}

// ---- Minigame engine ----

let umState = null;
let umRoot = null;
let umCharacters = [];
let umLocked = false;
let umNeedsInterstitial = false;
let umIsFirstTurn = true;

const umEls = {};

function tierTime(tier) {
  return 21 - tier;
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
      lives: 3,
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

function umStopTimer() {
  if (umState && umState.timerId) {
    clearInterval(umState.timerId);
    umState.timerId = null;
  }
}

function umTierBackgroundPath(tier) {
  return 'assets/enter-the-undermurk/background/tier-' + tier + '.png';
}

function umPreloadTierBackgrounds() {
  const paths = [];
  for (let tier = 1; tier <= 10; tier++) {
    paths.push(umTierBackgroundPath(tier));
  }
  preloadImages(paths, 'low');
}

function umSetTierBackground(tier) {
  if (!umRoot) {
    return;
  }
  umRoot.style.backgroundImage = 'url(' + umTierBackgroundPath(tier) + ')';
}

function umUpdateHUD() {
  if (!umState || !umEls.tierLabel) {
    return;
  }

  const player = umCurrentPlayer();
  const bossLabel = player.cleared >= 5 && !player.isBossRoundComplete ? ' — BOSS' : '';
  umEls.tierLabel.textContent = 'Tier ' + player.tier + ' — Grade ' + player.tier + bossLabel;
  umEls.teamScore.textContent = 'Team: ' + umState.teamScore;
  umEls.timerText.textContent = umState.timeLeft + 's';

  const progress = umState.timeLeft / umState.timeTotal;
  umEls.timerFill.style.width = Math.max(0, Math.min(100, progress * 100)) + '%';

  umEls.playerStrip.innerHTML = '';
  umState.players.forEach(function (p, index) {
    const card = createElement('div', ['undermurk-player-card'], umEls.playerStrip);
    if (index === umState.currentIndex && !p.eliminated) {
      card.classList.add('undermurk-player-card--active');
    }
    if (p.eliminated) {
      card.classList.add('undermurk-player-card--eliminated');
    }

    const avatar = createElement('div', ['undermurk-player-card__avatar'], card);
    if (p.asset) {
      avatar.style.backgroundImage = 'url(assets/player/' + p.asset + ')';
    }

    const info = createElement('div', ['undermurk-player-card__info'], card);
    const nameEl = createElement('p', ['undermurk-player-card__name'], info);
    nameEl.textContent = p.name;

    const meta = createElement('p', ['undermurk-player-card__meta'], info);
    meta.textContent = p.score + ' pts · ' + p.lives + ' lives';
  });
}

function umHideOverlay(name) {
  if (umEls[name]) {
    umEls[name].classList.add('undermurk-overlay--hidden');
  }
}

function umShowOverlay(name) {
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
  if (umState.tierJustCleared) {
    return true;
  }

  if (umState.players.length > 1 && umActivePlayers().length === 1) {
    return true;
  }

  return false;
}

function umCheckGameOver() {
  return umActivePlayers().length === 0;
}

function umWinnerName() {
  if (umState.tierJustCleared) {
    return umCurrentPlayer().name;
  }

  const active = umActivePlayers();
  return active.length === 1 ? active[0].name : '';
}

function umShowEndScreen(victory) {
  umStopTimer();
  umLocked = true;
  umHideOverlay('interstitial');
  umHideOverlay('tierBanner');
  umEls.questionArea.classList.add('undermurk-question--hidden');

  umEls.endTitle.textContent = victory ? 'Victory!' : 'Game Over';
  umEls.endMessage.textContent = victory
    ? (umState.tierJustCleared
      ? umWinnerName() + ' conquered the Undermurk!'
      : umWinnerName() + ' is the last Dingo Punk standing!')
    : 'The Undermurk claimed your team.';

  umEls.endTeamScore.textContent = 'Team score: ' + umState.teamScore;

  umEls.endPlayers.innerHTML = '';
  umState.players.slice().sort(function (a, b) {
    return b.score - a.score;
  }).forEach(function (player) {
    const row = createElement('p', ['undermurk-end__player-row'], umEls.endPlayers);
    row.textContent = player.name + ' — ' + player.score + ' pts';
    if (player.eliminated) {
      row.classList.add('undermurk-end__player-row--eliminated');
    }
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
  umSetTierBackground(player.tier);
  umShowTierBanner(player.tier, callback);
}

function umShowTierBanner(tier, callback) {
  umEls.tierBannerTitle.textContent = 'Tier ' + tier;
  umEls.tierBannerSubtitle.textContent = 'Grade ' + tier;
  umShowOverlay('tierBanner');
  umUpdateHUD();

  setTimeout(function () {
    umHideOverlay('tierBanner');
    if (callback) {
      callback();
    }
  }, 1800);
}

function umShowInterstitialPanel(heading, player, callback) {
  umEls.interstitialHeading.textContent = heading;
  umEls.interstitialName.textContent = player.name;
  umShowOverlay('interstitial');
  umUpdateHUD();

  function onStart() {
    umEls.interstitialStart.removeEventListener('click', onStart);
    umHideOverlay('interstitial');
    if (callback) {
      callback();
    }
  }

  umEls.interstitialStart.addEventListener('click', onStart);
}

function umShowFirstUp(player, callback) {
  umShowInterstitialPanel('First Up', player, callback);
}

function umShowInterstitial(player, callback) {
  umShowInterstitialPanel('Next Up', player, callback);
}

function umStartTimer() {
  umStopTimer();
  umState.timeTotal = tierTime(umCurrentPlayer().tier);
  umState.timeLeft = umState.timeTotal;
  umUpdateHUD();

  umState.timerId = setInterval(function () {
    umState.timeLeft -= 1;
    umUpdateHUD();

    if (umState.timeLeft <= 0) {
      umStopTimer();
      umHandleTimeout();
    }
  }, 1000);
}

function umRenderQuestion() {
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

  umEls.questionArea.classList.remove('undermurk-question--hidden');
  umHideOverlay('end');
  umUpdateHUD();
  updateElementSize();
  updateLineThickness();
}

function umAfterTurnChange(callback) {
  umSetTierBackground(umCurrentPlayer().tier);

  if (settings.playerCount > 1 && umNeedsInterstitial) {
    umNeedsInterstitial = false;
    umShowInterstitial(umCurrentPlayer(), callback);
    return;
  }

  if (callback) {
    callback();
  }
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
    umRenderQuestion();
    umStartTimer();
  });
}

function umHandleAnswer(selectedWord) {
  if (umLocked || !umState.currentEntry) {
    return;
  }

  umLocked = true;
  umStopTimer();

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
  umIsFirstTurn = false;

  if (umCheckGameOver()) {
    umShowEndScreen(false);
    return;
  }

  if (umCheckVictory()) {
    umShowEndScreen(true);
    return;
  }

  umBeginTurn();
}

function umHandleTimeout() {
  if (umLocked) {
    return;
  }

  umLocked = true;
  umStopTimer();

  const player = umCurrentPlayer();
  player.lives -= 1;
  if (player.lives <= 0) {
    player.eliminated = true;
  }

  umNeedsInterstitial = settings.playerCount > 1;
  umAdvancePlayerIndex();
  umIsFirstTurn = false;

  if (umCheckGameOver()) {
    umShowEndScreen(false);
    return;
  }

  if (umCheckVictory()) {
    umShowEndScreen(true);
    return;
  }

  umBeginTurn();
}

function umBuildDOM() {
  umRoot = createElement('div', ['undermurk-game'], splashContainerWrapper);
  umSetTierBackground(1);

  umEls.hud = createElement('div', ['undermurk-hud'], umRoot);

  umEls.tierLabel = createElement('p', ['undermurk-hud__tier'], umEls.hud);
  umEls.teamScore = createElement('p', ['undermurk-hud__team-score'], umEls.hud);

  umEls.timerWrap = createElement('div', ['undermurk-timer'], umEls.hud);
  umEls.timerFill = createElement('div', ['undermurk-timer__fill'], umEls.timerWrap);
  umEls.timerText = createElement('p', ['undermurk-timer__text'], umEls.timerWrap);

  umEls.playerStrip = createElement('div', ['undermurk-player-strip'], umEls.hud);

  umEls.questionArea = createElement('div', ['undermurk-question'], umRoot);
  umEls.promptLabel = createElement('p', ['undermurk-question__label'], umEls.questionArea);
  umEls.promptText = createElement('p', ['undermurk-question__prompt'], umEls.questionArea);
  umEls.options = createElement('div', ['undermurk-options'], umEls.questionArea);

  umEls.interstitial = createElement('div', ['undermurk-overlay', 'undermurk-overlay--hidden'], umRoot);
  const interstitialPanel = createElement('div', ['undermurk-overlay__panel'], umEls.interstitial);
  umEls.interstitialHeading = createElement('p', ['undermurk-overlay__heading'], interstitialPanel);
  umEls.interstitialHeading.textContent = 'Next Up';
  umEls.interstitialName = createElement('p', ['undermurk-overlay__title'], interstitialPanel);
  umEls.interstitialStart = createElement('button', ['undermurk-overlay__button'], interstitialPanel);
  umEls.interstitialStart.textContent = 'Start';
  setIpadActiveState(umEls.interstitialStart);

  umEls.tierBanner = createElement('div', ['undermurk-overlay', 'undermurk-overlay--hidden'], umRoot);
  const tierBannerPanel = createElement('div', ['undermurk-overlay__panel'], umEls.tierBanner);
  umEls.tierBannerTitle = createElement('p', ['undermurk-overlay__title'], tierBannerPanel);
  umEls.tierBannerSubtitle = createElement('p', ['undermurk-overlay__subtitle'], tierBannerPanel);

  umEls.end = createElement('div', ['undermurk-overlay', 'undermurk-overlay--hidden'], umRoot);
  const endPanel = createElement('div', ['undermurk-overlay__panel', 'undermurk-overlay__panel--end'], umEls.end);
  umEls.endTitle = createElement('p', ['undermurk-overlay__title'], endPanel);
  umEls.endMessage = createElement('p', ['undermurk-overlay__subtitle'], endPanel);
  umEls.endTeamScore = createElement('p', ['undermurk-end__team-score'], endPanel);
  umEls.endPlayers = createElement('div', ['undermurk-end__players'], endPanel);

  const endActions = createElement('div', ['undermurk-end__actions'], endPanel);
  umEls.playAgain = createElement('button', ['undermurk-overlay__button'], endActions);
  umEls.playAgain.textContent = 'Play Again';
  setIpadActiveState(umEls.playAgain);

  umEls.exit = createElement('button', ['undermurk-overlay__button', 'undermurk-overlay__button--secondary'], endActions);
  umEls.exit.textContent = 'Exit';
  setIpadActiveState(umEls.exit);

  umEls.playAgain.addEventListener('click', function () {
    initUndermurkGame(umCharacters.slice());
  });

  umEls.exit.addEventListener('click', function () {
    window.location.href = 'debrief.html' + window.location.search;
  });
}

function umResetState(characters) {
  umCharacters = characters.slice();
  umLocked = false;
  umNeedsInterstitial = false;
  umIsFirstTurn = true;

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

function initUndermurkGame(characters) {
  if (!characters || !characters.length) {
    return;
  }

  umStopTimer();
  umPreloadTierBackgrounds();
  umResetState(characters);

  splashContainerWrapper.querySelectorAll('*').forEach(function (child) {
    child.remove();
  });

  umBuildDOM();
  umSetTierBackground(umCurrentPlayer().tier);
  umUpdateHUD();
  updateElementSize();
  updateLineThickness();

  umShowFirstUp(umCurrentPlayer(), function () {
    umShowTierBanner(umCurrentPlayer().tier, function () {
      umBeginTurn();
    });
  });
}
