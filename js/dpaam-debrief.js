// Parallel debrief track for UNDERMURK === true.
//
// Renders the exact same score breakdown as the classic debrief, but inside
// .dpaam-debrief-stats (the left half of .dpaam-debrief-container), leaving
// .dpaam-debrief-minigame for the Enter the Undermurk! minigame.
//
// Loads after debrief.js and reuses its globals: UNDERMURK, retrievedDebriefStats,
// toggleClass and createModal. All DOM lookups here are scoped to the dpaam stats
// container so they never collide with the (hidden) classic debrief-container.

(function () {

  if (typeof UNDERMURK === 'undefined' || !UNDERMURK) {
    return;
  }

  const statsRoot = document.querySelector('.dpaam-debrief-stats');
  if (!statsRoot) {
    return;
  }

  const dpaamContainer = document.querySelector('.dpaam-debrief-container');
  const minigameEl = document.querySelector('.dpaam-debrief-minigame');

  // The minigame panel launches Enter the Undermurk!, carrying over the full
  // debrief URL slug so score data and character preselection are preserved.
  if (minigameEl) {
    minigameEl.addEventListener('click', function () {
      window.location.href = 'enter-the-undermurk.html' + window.location.search;
    });
  }

  if (minigameEl && minigameEl.parentNode) {
    minigameEl.remove();
  }

  if (dpaamContainer) {
    dpaamContainer.classList.add('dpaam-debrief-container--stats-centered');
  }

  // ---- markup (mirrors the classic debrief-container, with scoped IDs) ----
  statsRoot.innerHTML = `
    <p class="p-title">Score<span class="icon-clickable--debrief style-border--debrief" id="dpaam-icon-clickable--debrief">?</span></p>

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
              <div class="dpaam-debrief-final-rank-group dpaam-debrief-final-rank-group--hidden">
                <p class="stat-tier-capsule stat-tier-capsule--final">
                  <span class="stat-tier-capsule-rank-heading">Rank:</span>
                  <span class="dpaam-debrief-final-rank-value"></span>
                </p>
                <p class="dpaam-debrief-next-rank-label"></p>
              </div>
            </div>
            <div class="stat-detail-medal">
              <div class="dpaam-debrief-final-medal-stage">
                <img class="dpaam-debrief-final-medal dpaam-debrief-final-medal--pending" alt="">
              </div>
            </div>
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
  const finalScoreRankGroup = q('.dpaam-debrief-final-rank-group');
  const finalScoreRankValue = q('.dpaam-debrief-final-rank-value');
  const finalScoreNextRankLabel = q('.dpaam-debrief-next-rank-label');
  const finalMedalImg = q('.dpaam-debrief-final-medal');
  const finalMedalStage = q('.dpaam-debrief-final-medal-stage');

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
  const finalScoreCountDuration = 10500;
  const finalScoreRevealAfterTickDelay = 500;
  const minigameDelayAfterStats = 1000;
  const statsRevealDuration = regularStats.length * (cardToCapsuleDelay + revealStep) + finalScoreDelay;

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

  const dpaamRankArray = ['ROOKIE', 'APPRENTICE', 'ENIGMA', 'LEGEND', 'BRAINWAVE'];

  const finalScoreRankTiers = [
    { min: 0, class: 'stat-tier--oof' },
    { min: 250, class: 'stat-tier--mid' },
    { min: 500, class: 'stat-tier--good' },
    { min: 750, class: 'stat-tier--great' },
    { min: 900, class: 'stat-tier--perfect' },
  ];

  function finalScoreRankIndex(value) {
    for (let i = finalScoreRankTiers.length - 1; i >= 0; i--) {
      if (value >= finalScoreRankTiers[i].min) {
        return i;
      }
    }
    return 0;
  }

  function nextRankLabelText(value) {
    const rankIndex = finalScoreRankIndex(value);
    if (rankIndex >= finalScoreRankTiers.length - 1) {
      return 'Max Rank!';
    }
    return 'Next Rank: ' + finalScoreRankTiers[rankIndex + 1].min;
  }

  function finalScoreRankTier(value) {
    const rankIndex = finalScoreRankIndex(value);
    return {
      class: finalScoreRankTiers[rankIndex].class,
      label: dpaamRankArray[rankIndex],
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
  finalScoreRankValue.textContent = finalScoreTier.label;
  finalScoreNextRankLabel.textContent = nextRankLabelText(score);

  teamSize.innerHTML = '+' + teamModifier;
  activitiesCompleted.innerHTML = '+' + activityModifier;
  hintsUsed.innerHTML = '+' + hintModifier;
  timeRemaining.innerHTML = '+' + timeModifier;
  finalScoreValue.innerHTML = '0';

  function medalCountForScore(value) {
    if (value < 250) return 1;
    if (value < 500) return 2;
    if (value < 750) return 3;
    if (value < 900) return 4;
    return 5;
  }

  const earnedMedalCount = medalCountForScore(score);
  let displayedMedalIndex = 0;

  function spawnFallingMedal(src) {
    const mainRect = finalMedalImg.getBoundingClientRect();
    const stageRect = finalMedalStage.getBoundingClientRect();
    const fallout = document.createElement('img');
    fallout.className = 'dpaam-debrief-final-medal dpaam-debrief-final-medal-fallout';
    fallout.src = src;
    fallout.alt = '';
    fallout.style.left = (mainRect.left - stageRect.left) + 'px';
    fallout.style.top = (mainRect.top - stageRect.top) + 'px';
    fallout.style.width = mainRect.width + 'px';
    fallout.style.height = mainRect.height + 'px';
    finalMedalStage.appendChild(fallout);
    fallout.addEventListener('animationend', () => fallout.remove());
  }

  function playMedalFlyIn() {
    finalMedalImg.classList.remove('dpaam-debrief-final-medal--fly-in');
    void finalMedalImg.offsetWidth;
    finalMedalImg.classList.add('dpaam-debrief-final-medal--fly-in');
    finalMedalImg.addEventListener('animationend', () => {
      finalMedalImg.classList.remove('dpaam-debrief-final-medal--fly-in');
    }, { once: true });
  }

  function setFinalMedal(index) {
    if (index === displayedMedalIndex) {
      return;
    }

    const previousIndex = displayedMedalIndex;
    const oldSrc = finalMedalImg.src;
    displayedMedalIndex = index;
    finalMedalImg.src = 'assets/debrief/medal/dpaam-medal-' + index + '.png';
    finalMedalImg.classList.remove('dpaam-debrief-final-medal--pending');

    if (previousIndex > 0) {
      spawnFallingMedal(oldSrc);
    }

    playMedalFlyIn();
  }

  function updateFinalMedalForValue(value) {
    setFinalMedal(medalCountForScore(value));
  }

  function animateFinalScore(element, target, duration, onValue, onComplete) {
    const startTime = performance.now();

    function easeOutQuart(progress) {
      return 1 - Math.pow(1 - progress, 4);
    }

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const value = Math.round(easedProgress * target);
      element.textContent = String(value);

      if (onValue) {
        onValue(value);
      }

      if (value >= target) {
        element.textContent = String(target);
        if (onValue) {
          onValue(target);
        }
        if (onComplete) {
          onComplete();
        }
        return;
      }

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
      animateFinalScore(finalScoreValue, score, finalScoreCountDuration, updateFinalMedalForValue, () => {
        setTimeout(() => {
          finalScoreValue.classList.remove('dpaam-debrief-finalScore--tick');
          setFinalMedal(earnedMedalCount);
          toggleClass(finalScoreRankGroup, 'dpaam-debrief-final-rank-group--hidden', 'dpaam-debrief-final-rank-group--visible');
          finalMedalImg.classList.add('dpaam-debrief-final-medal--emphasis');
          finishStatsDisplay();
        }, finalScoreRevealAfterTickDelay);
      });
    }, finalScoreRevealDelay + finalScoreCountDelay);
  }

  function revealMinigame() {
    if (!dpaamContainer || !minigameEl || minigameEl.parentNode) {
      return;
    }

    minigameEl.classList.add('dpaam-debrief-minigame--enter');
    dpaamContainer.appendChild(minigameEl);
    dpaamContainer.classList.remove('dpaam-debrief-container--stats-centered');

    requestAnimationFrame(() => {
      minigameEl.classList.remove('dpaam-debrief-minigame--enter');
    });

    if (typeof updateElementHeight === 'function') updateElementHeight();
    if (typeof updateAbsoluteElements === 'function') updateAbsoluteElements();
  }

  function finishStatsDisplay() {
    setTimeout(revealMinigame, minigameDelayAfterStats);
  }

  const debriefDelay = 3200;
  setTimeout(bringInStats, debriefDelay);

  // ---- help modal (reuses the shared modal + copy from debrief.js) ----
  const icon = q('#dpaam-icon-clickable--debrief');
  if (icon && typeof createModal === 'function') {
    icon.addEventListener('click', function () {
      createModal(
        'How is your score calculated?',
        "Your score is determined by <span class = 'p--highlight'>the sum of 4 stats:</span> players, challenges, hints, and time. Each is worth up to 250 points. For a higher score, you must complete every available challenge, all while minimizing the number of players on your team, the number of hints used, and the time spent.<br>",
        'Close'
      );
    });
  }

  // ---- initial sizing (debrief.js's listeners also re-run on resize/click) ----
  if (typeof updateFontSize === 'function') updateFontSize();
  if (typeof updateElementHeight === 'function') updateElementHeight();
  if (typeof updateAbsoluteElements === 'function') updateAbsoluteElements();

})();
