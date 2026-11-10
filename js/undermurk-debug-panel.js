// Local testing panel for Enter the Undermurk: jump straight to the end screen as a
// Victory or a Failure, with 1 to 5 players. It builds the minigame with its HUD
// already in place, fills in made-up results, then runs the real umShowEndScreen,
// so the VICTORY / FAIL slam, sounds, end song and results reveal all play as in a game.
// scripts/build-pages.mjs leaves this file and its enter-the-undermurk.html tag out
// of the production build. The host check is a backstop if the site is ever served
// straight from the repo.
(function () {
  const host = location.hostname;
  if (host !== 'localhost' && host !== '127.0.0.1') return;

  // How long the HUD sits on screen before the end screen takes over.
  const HUD_HOLD_MS = 600;

  // Points a player has once they're on a tier with some of it cleared:
  // 5 regular questions at 1 point and a boss at 2 for every tier behind them.
  function pointsFor(tier, cleared) {
    return (tier - 1) * 7 + cleared;
  }

  // Made-up results, one per player slot, in seat order.
  // Victory: the first player beats the Undermurk; the rest fall along the way.
  // Failure: everyone is eliminated, the best reaching tier 6.
  const OUTCOMES = {
    victory: [
      { finished: true, tier: 10, cleared: 5 },
      { tier: 7, cleared: 2 },
      { tier: 4, cleared: 4 },
      { tier: 8, cleared: 0 },
      { tier: 2, cleared: 3 },
    ],
    failure: [
      { tier: 6, cleared: 3 },
      { tier: 3, cleared: 1 },
      { tier: 4, cleared: 5 },
      { tier: 1, cleared: 2 },
      { tier: 2, cleared: 0 },
    ],
  };

  let playerSelect;

  function buildPanel() {
    const style = document.createElement('style');
    style.textContent = `
      .undermurk-debug-panel {
        position: fixed; top: 8px; left: 8px; z-index: 10000;
        display: flex; gap: 6px; align-items: center;
        padding: 6px; border-radius: 6px;
        background: rgba(0, 0, 0, 0.8); color: #fff;
        font: 12px/1.2 system-ui, sans-serif;
      }
      .undermurk-debug-panel select, .undermurk-debug-panel button { font: inherit; padding: 3px 6px; }
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.className = 'undermurk-debug-panel';

    playerSelect = document.createElement('select');
    playerSelect.setAttribute('aria-label', 'Players');
    [1, 2, 3, 4, 5].forEach(function (count) {
      playerSelect.add(new Option(count + (count === 1 ? ' player' : ' players'), count));
    });
    playerSelect.value = '3';
    panel.appendChild(playerSelect);

    [['Victory', true], ['Failure', false]].forEach(function ([label, victory]) {
      const button = document.createElement('button');
      button.textContent = label;
      button.addEventListener('click', function () {
        try {
          showOutcome(victory);
        } catch (error) {
          console.error('Undermurk debug panel: could not show ' + label, error);
        }
      });
      panel.appendChild(button);
    });

    document.body.appendChild(panel);
  }

  // Whatever is on screen (bumper, setup, intro cutscene, a game, an end screen) is cleared.
  function clearStage() {
    umStopTimer();
    umStopLoop('undermurk-end');
    typeof stopCutsceneLoops === 'function' && stopCutsceneLoops();
    // A cutscene's last Next or SKIP INTRO still pending would start a real game over this one.
    umCutsceneFinishing = true;
    document.querySelectorAll('.bumper-container, .harper-bumper').forEach(function (bumper) {
      bumper.remove();
    });
    splash.classList.remove('splash--hidden', 'state-display-none');
    splash.classList.add('splash--visible');
  }

  function pickCharacters(count) {
    return characterArray.slice(0, count).map(function (character) {
      return character.name;
    });
  }

  // Puts every entrance piece in its final place at once (a 0ms run of its animation).
  function settleEntrance() {
    [umEls.frame, umEls.playerStrip, umEls.tierBlock].forEach(function (element) {
      element.style.animationDuration = '0ms';
    });
    umEls.frame.classList.add('undermurk-frame--enter');
    umEls.playerStrip.classList.add('undermurk-player-strip--enter');
    umEls.tierBlock.classList.add('undermurk-tier-block--enter');
    umEls.playerStripCards.querySelectorAll('.undermurk-player-card').forEach(function (card) {
      card.style.animationDuration = '0ms';
      card.classList.add('undermurk-player-card--enter');
    });

    umTierBackgroundRevealed = true;
    umApplyTierBackgroundDimState();

    // No one is left playing, so the player indicator stays hidden, as at a real game's end.
    umIndicatorEntrancePending = false;
  }

  function applyResults(victory) {
    const results = OUTCOMES[victory ? 'victory' : 'failure'];
    umState.teamScore = 0;
    umState.players.forEach(function (player, index) {
      const result = results[index];
      player.tier = result.tier;
      player.cleared = result.finished ? 0 : result.cleared;
      player.score = pointsFor(result.tier, result.cleared) + (result.finished ? 2 : 0);
      player.finished = !!result.finished;
      player.eliminated = !result.finished;
      player.lives = result.finished ? 1 : 0;
      player.isBossRoundComplete = !!result.finished;
      umState.teamScore += player.score;
    });
    // The HUD shows the last player to play: the winner, or the last one eliminated.
    umState.currentIndex = victory ? 0 : umState.players.length - 1;
  }

  function showOutcome(victory) {
    const count = parseInt(playerSelect.value, 10);
    clearStage();

    settings.playerCount = count;
    settings.lives = settings.lives || 3;
    settings.speed = settings.speed || 'Normal';
    debriefStats.teamSize = count;
    playerCharacters = pickCharacters(count);

    umResetState(playerCharacters);
    applyResults(victory);

    splashContainerWrapper.querySelectorAll('*').forEach(function (child) {
      child.remove();
    });
    umBuildDOM();
    umSetTierBackground(umCurrentPlayer().tier);
    umUpdateHUD();
    updateElementSize();
    updateLineThickness();

    requestAnimationFrame(function () {
      settleEntrance();
      // umResetState cleared the end screen's timers, so this is the only one pending.
      umScheduleEndOutcomeTimeout(function () {
        umShowEndScreen(victory);
      }, HUD_HOLD_MS);
    });
  }

  buildPanel();
})();
