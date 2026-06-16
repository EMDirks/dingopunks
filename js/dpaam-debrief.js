// Parallel debrief track for FEATURES.undermurk === true.
//
// Renders the exact same score breakdown as the classic debrief, but inside
// .dpaam-debrief-stats (the left half of .dpaam-debrief-container), leaving
// .dpaam-debrief-minigame for the Into the Undermurk! minigame.
//
// Loads after debrief.js and reuses its globals: FEATURES, retrievedDebriefStats,
// toggleClass, rankArray and createModal. All DOM lookups here are scoped to the
// dpaam stats container, and medal/icon IDs are prefixed so they never collide
// with the (hidden) classic debrief-container.

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
            <p class="p-debrief-stat dpaam-debrief-stat-finalScore"></p>
            <p class="p-debrief-subtitle dpaam-debrief-stat-finalScore">out of 1000</p>
          </div>
        </div>
      </div>
    </div>

    <div class="score-container score-container--hidden">
      <div class="score-meter"></div>
    </div>

    <div class="medal-container medal-container--hidden">
      <div class="div-medal-container" id="dpaam-div-medal-container-1">
        <p class="debrief-stat-rank debrief-stat-rank--light-brown dpaam-debrief-stat-rank-1">0-349</p>
        <img class="img-medal img-medal--hidden" id="dpaam-img-medal-1" src="assets/debrief/medal/medal-1-hidden.png" alt="medal indicating rank 1">
      </div>
      <div class="div-medal-container" id="dpaam-div-medal-container-2">
        <p class="debrief-stat-rank debrief-stat-rank--light-brown dpaam-debrief-stat-rank-2">350-699</p>
        <img class="img-medal img-medal--hidden" id="dpaam-img-medal-2" src="assets/debrief/medal/medal-2-hidden.png" alt="medal indicating rank 2">
      </div>
      <div class="div-medal-container" id="dpaam-div-medal-container-3">
        <p class="debrief-stat-rank debrief-stat-rank--light-brown dpaam-debrief-stat-rank-3">700-799</p>
        <img class="img-medal img-medal--hidden" id="dpaam-img-medal-3" src="assets/debrief/medal/medal-3-hidden.png" alt="medal indicating rank 3">
      </div>
      <div class="div-medal-container" id="dpaam-div-medal-container-4">
        <p class="debrief-stat-rank debrief-stat-rank--light-brown dpaam-debrief-stat-rank-4">800-899</p>
        <img class="img-medal img-medal--hidden" id="dpaam-img-medal-4" src="assets/debrief/medal/medal-4-hidden.png" alt="medal indicating rank 4">
      </div>
      <div class="div-medal-container" id="dpaam-div-medal-container-5">
        <p class="debrief-stat-rank debrief-stat-rank--light-brown dpaam-debrief-stat-rank-5">900+</p>
        <img class="img-medal img-medal--hidden" id="dpaam-img-medal-5" src="assets/debrief/medal/medal-5-hidden.png" alt="medal indicating rank 5">
      </div>
    </div>
  `;

  // ---- scoped element lookups ----
  const q = (selector) => statsRoot.querySelector(selector);

  const teamSize = q('.dpaam-debrief-stat-teamSize');
  const hintsUsed = q('.dpaam-debrief-stat-hintsUsed');
  const activitiesCompleted = q('.dpaam-debrief-stat-activitiesCompleted');
  const timeRemaining = q('.dpaam-debrief-stat-timeRemaining');
  const finalScore = q('.dpaam-debrief-stat-finalScore');

  const teamSizeModifier = q('.dpaam-debrief-stat-teamSize-modifier');
  const hintsUsedModifier = q('.dpaam-debrief-stat-hintsUsed-modifier');
  const activitiesCompletedModifier = q('.dpaam-debrief-stat-activitiesCompleted-modifier');
  const timeRemainingModifier = q('.dpaam-debrief-stat-timeRemaining-modifier');

  const scoreMeter = q('.score-meter');
  const scoreContainer = q('.score-container');
  const medalContainer = q('.medal-container');

  const statTeam = q('.stat-team');
  const statActivities = q('.stat-activities');
  const statTime = q('.stat-time');
  const statHints = q('.stat-hints');
  const statScore = q('.stat-score');
  const regularStats = [statTeam, statActivities, statHints, statTime];
  const capsuleElements = regularStats.map((statEl) => statEl.querySelector('.stat-tier-capsule'));
  const revealStep = 500;
  const cardToCapsuleDelay = 500;
  const statsRevealDuration = regularStats.length * (cardToCapsuleDelay + revealStep);

  const buttonExit = document.querySelector('.button__exit');

  // ---- modifier captions (identical wording to the classic debrief) ----
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

  function statTier(value) {
    if (value < 100) return { class: 'stat-tier--oof', label: 'Oof' };
    if (value < 150) return { class: 'stat-tier--mid', label: 'Mid' };
    if (value < 200) return { class: 'stat-tier--good', label: 'Good' };
    if (value < 250) return { class: 'stat-tier--great', label: 'Great' };
    return { class: 'stat-tier--perfect', label: 'Perfect' };
  }

  function applyStatTier(statEl, value) {
    const tier = statTier(value);
    const capsule = statEl.querySelector('.stat-tier-capsule');

    if (capsule) {
      capsule.classList.add(tier.class);
      capsule.textContent = tier.label;
    }
  }

  applyStatTier(statTeam, teamModifier);
  applyStatTier(statActivities, activityModifier);
  applyStatTier(statHints, hintModifier);
  applyStatTier(statTime, timeModifier);

  teamSize.innerHTML = '+' + teamModifier;
  activitiesCompleted.innerHTML = '+' + activityModifier;
  hintsUsed.innerHTML = '+' + hintModifier;
  timeRemaining.innerHTML = '+' + timeModifier;
  finalScore.innerHTML = '= ' + score;

  // ---- reveal sequence (scoped to the dpaam stats column) ----
  function bringInStats() {
    let delay = 0;

    for (let i = 0; i < regularStats.length; i++) {
      setTimeout(toggleClass, delay, regularStats[i], 'stat--hidden', 'stat--visible');
      delay += cardToCapsuleDelay;
      setTimeout(
        toggleClass,
        delay,
        capsuleElements[i],
        'stat-tier-capsule--hidden',
        'stat-tier-capsule--visible'
      );
      delay += revealStep;
    }

    setTimeout(toggleClass, delay, statScore, 'stat--hidden', 'stat--visible');
  }

  function bringInScoreMeter() {
    if (typeof updateElementHeight === 'function') {
      updateElementHeight();
    }

    toggleClass(scoreContainer, 'score-container--hidden', 'score-container--visible');
    setTimeout(toggleClass, 200, medalContainer, 'medal-container--hidden', 'medal-container--visible');

    setTimeout(bringInNext, 500);

    function bringInNext() {
      if (score < 350) {
        addMedal([1]);
        addScoreMeter('0.045');
      }
      if (score >= 350 && score < 700) {
        addMedal([1, 2]);
        addScoreMeter('0.275');
      }
      if (score >= 700 && score < 800) {
        addMedal([1, 2, 3]);
        addScoreMeter('0.5');
      }
      if (score >= 800 && score < 900) {
        addMedal([1, 2, 3, 4]);
        addScoreMeter('0.725');
      }
      if (score >= 900 && score <= 1000) {
        addMedal([1, 2, 3, 4, 5]);
        addScoreMeter('1');
      }
    }

    function addMedal(array) {
      for (let i = 1; i <= array.length; i++) {
        function staggerMedal() {
          const imgMedal = document.getElementById('dpaam-img-medal-' + i);
          imgMedal.src = 'assets/debrief/medal/medal-' + i + '.png';
          toggleClass(imgMedal, 'img-medal--hidden', 'img-medal--visible');
          const rank = statsRoot.querySelector('.dpaam-debrief-stat-rank-' + i);
          rank.textContent = rankArray[i - 1];
          toggleClass(rank, 'debrief-stat-rank--light-brown', 'debrief-stat-rank--black');
          if (i == array.length) {
            const divMedalContainer = document.getElementById('dpaam-div-medal-container-' + i);
            setTimeout(addEmphasis, 400);
            function addEmphasis() {
              divMedalContainer.classList.add('div-medal-container--hidden');
              setTimeout(toggleClass, 0, divMedalContainer, 'div-medal-container--hidden', 'div-medal-container--visible');
              setTimeout(toggleClass, 0, divMedalContainer, 'div-medal-container--visible', 'div-medal-container--emphasis');
            }
          }
        }
        setTimeout(staggerMedal, i * (1000 / array.length));
      }
    }

    function addScoreMeter(percentage) {
      scoreMeter.style.transform = `scaleX(${percentage})`;
    }
  }

  function bringInExit() {
    toggleClass(buttonExit, 'button__exit--hidden', 'button__exit--visible');
  }

  const debriefDelay = 3200;
  setTimeout(bringInStats, debriefDelay);
  setTimeout(bringInScoreMeter, statsRevealDuration + 100 + debriefDelay);
  setTimeout(bringInExit, statsRevealDuration + 2500 + debriefDelay);

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
