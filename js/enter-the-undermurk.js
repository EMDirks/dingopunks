// Enter the Undermurk! — entry logic.
//
// Reuses the main game's splash scaffolding (global.js + splash-new.js). This file
// only adds the bits unique to the minigame entry:
//   1. A player-count setup step (How many players?).
//   2. The "Play now" ready state and hand-off to the minigame.

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

// Hand-off point after "Enter the Undermurk!". The minigame itself is built out
// separately; the chosen team is available on playerCharacters and via the event.
function enterUndermurk() {
  document.dispatchEvent(new CustomEvent('undermurk:start', {
    detail: { characters: playerCharacters.slice() }
  }));
}
