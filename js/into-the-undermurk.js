// Into the Undermurk! — entry logic.
//
// Reuses the main game's splash scaffolding (global.js + splash-new.js). This file
// only adds the bits unique to the minigame entry:
//   1. Reading preselected characters from the ?characters= URL slug.
//   2. A player-count-only setup step for when no slug is present.
//   3. The "Select New Characters" reset and the "Go into the Undermurk!" hand-off.
//
// drawSplash() (in splash-new.js) reads `undermurkPreselectedCharacters` and branches
// the splashOrder for isUndermurkPage. The slug is parsed at load time (before
// DOMContentLoaded) so it is ready by the time drawSplash runs.

let undermurkPreselectedCharacters = null;

(function parseUndermurkSlug() {
  const raw = new URLSearchParams(window.location.search).get('characters');
  if (!raw) {
    return;
  }

  const requestedNames = raw.split(',').map(function (value) {
    return decodeURIComponent(value.trim());
  });

  const validNames = [];
  const claimed = {};

  requestedNames.forEach(function (name) {
    if (!name || validNames.length >= 5) {
      return;
    }
    const match = characterArray.find(function (character) {
      return character.name.toLowerCase() === name.toLowerCase();
    });
    if (match && !claimed[match.name]) {
      validNames.push(match.name);
      claimed[match.name] = true;
    }
  });

  if (validNames.length) {
    undermurkPreselectedCharacters = validNames;
    settings.playerCount = validNames.length;
    debriefStats.teamSize = validNames.length;
  }
})();

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

// Hand-off point after "Go into the Undermurk!". The minigame itself is built out
// separately; the chosen team is available on playerCharacters and via the event.
function enterUndermurk() {
  document.dispatchEvent(new CustomEvent('undermurk:start', {
    detail: { characters: playerCharacters.slice() }
  }));
}
