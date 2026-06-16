// Parallel debrief track for FEATURES.undermurk === true.
//
// Renders the exact same score breakdown as the classic debrief, but inside
// .dpaam-debrief-stats (the left half of .dpaam-debrief-container), leaving
// .dpaam-debrief-minigame for the Into the Undermurk! minigame.
//
// Loads after debrief.js and reuses its globals: FEATURES, retrievedDebriefStats,
// toggleClass, rankArray and createModal. All DOM lookups here are scoped to the dpaam stats
// container so they never collide with the (hidden) classic debrief-container.

(function () {

  if (typeof FEATURES === 'undefined' || !FEATURES.undermurk) {
    return;
  }

  const statsRoot = document.querySelector('.dpaam-debrief-stats');
  if (!statsRoot) {
    return;
  }

  // ---- markup (mirrors the classic debrief-container, with scoped IDs) ----
  statsRoot.innerHTML = `
    <p class="p-title">&nbsp &nbsp Your Stats<span class="icon-clickable--debrief style-border--debrief" id="dpaam-icon-clickable--debrief">?</span></p>

    <div class="stat-container">
      <div class="stat stat-team stat--hidden">
        <p class="p-debrief-title">Players</p>
        <div class="stat-body">
          <div class="stat-detail">
            <p class="p-debrief-stat dpaam-debrief-stat-teamSize"></p>
            <p class="p-debrief-subtitle dpaam-debrief-stat-teamSize-modifier">Modifier</p>
          </div>
          <p class="stat-tier-capsule stat-tier-capsule--hidden"></p>
        </div>
      </div>
      <div class="stat stat-activities stat--hidden">
        <p class="p-debrief-title">Challenges</p>
        <div class="stat-body">
          <div class="stat-detail">
            <p class="p-debrief-stat dpaam-debrief-stat-activitiesCompleted"></p>
            <p class="p-debrief-subtitle dpaam-debrief-stat-activitiesCompleted-modifier">Modifier</p>
          </div>
          <p class="stat-tier-capsule stat-tier-capsule--hidden"></p>
        </div>
      </div>
      <div class="stat stat-hints stat--hidden">
        <p class="p-debrief-title">Hints</p>
        <div class="stat-body">
          <div class="stat-detail">
            <p class="p-debrief-stat dpaam-debrief-stat-hintsUsed"></p>
            <p class="p-debrief-subtitle dpaam-debrief-stat-hintsUsed-modifier">Modifier</p>
          </div>
          <p class="stat-tier-capsule stat-tier-capsule--hidden"></p>
        </div>
      </div>
      <div class="stat stat-time stat--hidden">
        <p class="p-debrief-title">Time</p>
        <div class="stat-body">
          <div class="stat-detail">
            <p class="p-debrief-stat dpaam-debrief-stat-timeRemaining"></p>
            <p class="p-debrief-subtitle dpaam-debrief-stat-timeRemaining-modifier">Modifier</p>
          </div>
          <p class="stat-tier-capsule stat-tier-capsule--hidden"></p>
        </div>
      </div>
      <div class="stat stat-score stat--hidden">
        <p class="p-debrief-title p-debrief-title-finalscore">Final Score</p>
        <div class="stat-body">
          <div class="stat-detail">
            <div class="stat-detail-score">
              <p class="p-debrief-stat dpaam-debrief-stat-finalScore"></p>
              <p class="stat-tier-capsule stat-tier-capsule--final stat-tier-capsule--hidden"></p>
            </div>
            <div class="stat-detail-medal"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // ---- scoped element lookups ----
  const q = (selector) => statsRoot.querySelector(selector);

  const teamSize = q('.dpaam-debrief-stat-teamSize');
  const hintsUsed = q('.dpaam-debrief-stat-hintsUsed');
  const activitiesCompleted = q('.dpaam-debrief-stat-activitiesCompleted');
  const timeRemaining = q('.dpaam-debrief-stat-timeRemaining');
  const finalScoreValue = q('.stat-score .p-debrief-stat');
  const finalScoreCapsule = q('.stat-score .stat-tier-capsule--final');

  const teamSizeModifier = q('.dpaam-debrief-stat-teamSize-modifier');
  const hintsUsedModifier = q('.dpaam-debrief-stat-hintsUsed-modifier');
  const activitiesCompletedModifier = q('.dpaam-debrief-stat-activitiesCompleted-modifier');
  const timeRemainingModifier = q('.dpaam-debrief-stat-timeRemaining-modifier');

  const statTeam = q('.stat-team');
  const statActivities = q('.stat-activities');
  const statTime = q('.stat-time');
  const statHints = q('.stat-hints');
  const statScore = q('.stat-score');
  const regularStats = [statTeam, statActivities, statHints, statTime];
  const capsuleElements = regularStats.map((statEl) => statEl.querySelector('.stat-tier-capsule'));
  const revealStep = 500;
  const cardToCapsuleDelay = 500;
  const finalScoreDelay = 500;
  const finalScoreCountDelay = 1000;
  const finalScoreCountDuration = 3500;
  const statsRevealDuration = regularStats.length * (cardToCapsuleDelay + revealStep) + finalScoreDelay;
  const finalSequenceEnd = statsRevealDuration + finalScoreCountDelay + finalScoreCountDuration;

  const buttonExit = document.querySelector('.button__exit');

  function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return formattedMinutes + ':' + formattedSeconds;
  }

  if (!isNaN(retrievedDebriefStats.timeRemaining) && !isNaN(retrievedDebriefStats.timeStarting)) {
    const totalSeconds = retrievedDebriefStats.timeStarting - retrievedDebriefStats.timeRemaining;
    timeRemainingModifier.textContent = convertSecondsToMinutes(totalSeconds) + ' spent';
  } else {
    timeRemainingModifier.textContent = 'no limit';
  }

  if (retrievedDebriefStats.teamSize == 1) {
    teamSizeModifier.textContent = retrievedDebriefStats.teamSize + ' person';
  } else {
    teamSizeModifier.textContent = retrievedDebriefStats.teamSize + ' people';
  }

  hintsUsedModifier.textContent = retrievedDebriefStats.hintsUsed + ' used';
  activitiesCompletedModifier.textContent = retrievedDebriefStats.activitiesCompleted + ' completed';

  // ---- scoring (identical formulas to updateDebrief) ----
  const teamModifier = 250 - retrievedDebriefStats.teamSize * 42 + 42;
  const activityModifier = Math.min(Math.max(retrievedDebriefStats.activitiesCompleted * 63, 0), 250);
  const hintModifier = Math.max(0, 200 - retrievedDebriefStats.hintsUsed * 50 + 50);

  let timeModifier;
  if (!isNaN(retrievedDebriefStats.timeRemaining) && !isNaN(retrievedDebriefStats.timeStarting)) {
    const timeRatio = 350 / retrievedDebriefStats.timeStarting;
    timeModifier = Math.min(Math.round(timeRatio * retrievedDebriefStats.timeRemaining), 250);
  } else {
    timeModifier = 0;
  }

  const score = Math.round(teamModifier + activityModifier + hintModifier + timeModifier);

  function statTier(value, max = 250) {
    const scale = max / 250;
    if (value < 100 * scale) return { class: 'stat-tier--oof', label: 'Oof' };
    if (value < 150 * scale) return { class: 'stat-tier--mid', label: 'Mid' };
    if (value < 200 * scale) return { class: 'stat-tier--good', label: 'Good' };
    if (value < 250 * scale) return { class: 'stat-tier--great', label: 'Great' };
    return { class: 'stat-tier--perfect', label: 'Perfect' };
  }

  const finalScoreRankTiers = [
    { min: 0, class: 'stat-tier--oof' },
    { min: 350, class: 'stat-tier--mid' },
    { min: 700, class: 'stat-tier--good' },
    { min: 800, class: 'stat-tier--great' },
    { min: 900, class: 'stat-tier--perfect' },
  ];

  function finalScoreRankTier(value) {
    let rankIndex = 0;
    for (let i = finalScoreRankTiers.length - 1; i >= 0; i--) {
      if (value >= finalScoreRankTiers[i].min) {
        rankIndex = i;
        break;
      }
    }
    return {
      class: finalScoreRankTiers[rankIndex].class,
      label: rankArray[rankIndex],
    };
  }

  function prepareStatTier(statEl, value) {
    const tier = statTier(value);
    const capsule = statEl.querySelector('.stat-tier-capsule');

    if (capsule) {
      capsule.classList.add(tier.class);
      capsule.textContent = tier.label;
    }
  }

  prepareStatTier(statTeam, teamModifier);
  prepareStatTier(statActivities, activityModifier);
  prepareStatTier(statHints, hintModifier);
  prepareStatTier(statTime, timeModifier);
  const finalScoreTier = finalScoreRankTier(score);
  finalScoreCapsule.classList.add(finalScoreTier.class);
  finalScoreCapsule.textContent = finalScoreTier.label;

  teamSize.innerHTML = '+' + teamModifier;
  activitiesCompleted.innerHTML = '+' + activityModifier;
  hintsUsed.innerHTML = '+' + hintModifier;
  timeRemaining.innerHTML = '+' + timeModifier;
  finalScoreValue.innerHTML = '0';

  function animateFinalScore(element, target, duration, onComplete) {
    const startTime = performance.now();

    function easeOutQuart(progress) {
      return 1 - Math.pow(1 - progress, 4);
    }

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.round(easeOutQuart(progress) * target);
      element.textContent = String(value);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else if (onComplete) {
        onComplete();
      }
    }

    requestAnimationFrame(frame);
  }

  // ---- reveal sequence (scoped to the dpaam stats column) ----
  function bringInStats() {
    let delay = 0;

    for (let i = 0; i < regularStats.length; i++) {
      setTimeout(toggleClass, delay, regularStats[i], 'stat--hidden', 'stat--visible');
      delay += cardToCapsuleDelay;
      const capsuleDelay = delay;
      setTimeout(() => {
        toggleClass(capsuleElements[i], 'stat-tier-capsule--hidden', 'stat-tier-capsule--visible');
      }, capsuleDelay);
      delay += revealStep;
    }

    const finalScoreRevealDelay = delay + finalScoreDelay;

    setTimeout(() => {
      toggleClass(statScore, 'stat--hidden', 'stat--visible');
      finalScoreValue.classList.add('dpaam-debrief-finalScore--tick');
    }, finalScoreRevealDelay);

    setTimeout(() => {
      animateFinalScore(finalScoreValue, score, finalScoreCountDuration, () => {
        finalScoreValue.classList.remove('dpaam-debrief-finalScore--tick');
        toggleClass(finalScoreCapsule, 'stat-tier-capsule--hidden', 'stat-tier-capsule--visible');
      });
    }, finalScoreRevealDelay + finalScoreCountDelay);
  }

  function bringInExit() {
    toggleClass(buttonExit, 'button__exit--hidden', 'button__exit--visible');
  }

  const debriefDelay = 3200;
  setTimeout(bringInStats, debriefDelay);
  setTimeout(bringInExit, finalSequenceEnd + 2500 + debriefDelay);

  // ---- help modal (reuses the shared modal + copy from debrief.js) ----
  const icon = q('#dpaam-icon-clickable--debrief');
  if (icon && typeof createModal === 'function') {
    icon.addEventListener('click', function () {
      createModal(
        'How is your score calculated?',
        "Your score is determined by <span class = 'p--highlight'>the sum of 4 stats:</span> players, challenges, hints, and time. Each is worth up to 250 points. For a higher score, you must complete every available challenge, all while minimizing the number of players on your team, the number of hints used, and the time spent.<br>",
        'Got it!'
      );
    });
  }

  // ---- initial sizing (debrief.js's listeners also re-run on resize/click) ----
  if (typeof updateFontSize === 'function') updateFontSize();
  if (typeof updateElementHeight === 'function') updateElementHeight();
  if (typeof updateAbsoluteElements === 'function') updateAbsoluteElements();

})();
