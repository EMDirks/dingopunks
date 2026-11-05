// Local testing panel: pick a theme and watch its intro or outro cutscene, or
// launch its 4th grade mixed reading escape room.
// scripts/build-pages.mjs leaves this file and its index.html tag out of the
// production build. The host check is a backstop if the site is ever served
// straight from the repo.
(function() {
  const host = location.hostname;
  if (host !== 'localhost' && host !== '127.0.0.1') return;

  // Cutscenes run on plain setTimeouts with no handle to cancel them, so timers
  // are tracked from the first play on. Replaying then can't leave the last
  // cutscene typing (and clicking) over the new one.
  const cutsceneTimers = new Set();
  const nativeSetTimeout = window.setTimeout;
  let tracking = false;
  window.setTimeout = function() {
    const id = nativeSetTimeout.apply(window, arguments);
    if (tracking) cutsceneTimers.add(id);
    return id;
  };

  // Game scripts declare top-level `let`s and Intro/Outro stub out game functions,
  // so a game gets a fresh page: Game reloads with ?debugGame=<theme>, and that
  // page boots straight to the map instead of drawing the splash.
  const debugGameTheme = new URLSearchParams(location.search).get('debugGame');
  if (debugGameTheme) startSplash = startDebugGame;

  const DEBUG_GAME_SETTINGS = { playerCount: 5, activityCount: 5, timeLimit: '50 min', hints: 'Yes' };

  async function startDebugGame() {
    const { games } = await import('./games.js');
    const folder = 'resource/' + debugGameTheme + '/';
    const game = games.find(function(candidate) {
      return candidate.topic === 'mixed-reading-skills' &&
        candidate.grades.includes(4) &&
        candidate.path.startsWith(folder);
    });
    if (!game) throw new Error('No 4th grade mixed reading game for ' + debugGameTheme);

    loadResourceGame(debugGameTheme, game.path.slice(folder.length), function() {
      // What the skipped splash steps and intro cutscene would have set up.
      ['onPinInput', 'onSettings', 'onCharacterSelect', 'onCutsceneStart'].forEach(handlePreloading);
      window.globalMenuSplashStarted = true;
      hideModalElement();
      initializeSave();
      Object.assign(settings, DEBUG_GAME_SETTINGS);
      debriefStats.timeStarting = parseInt(settings.timeLimit) * 60;
      debriefStats.teamSize = settings.playerCount;
      playerCharacters = characterArray.slice(0, settings.playerCount).map(function(character) {
        return character.name;
      });

      toggleClass(splash, 'splash--visible', 'splash--hidden');
      removeSplash();
      createActivityNodes();
      createCodeBox();
      createFooter();
    });
  }

  let select;

  function buildPanel(themes) {
    const style = document.createElement('style');
    style.textContent = `
      .debug-panel {
        position: fixed; top: 8px; left: 8px; z-index: 10000;
        display: flex; gap: 6px; align-items: center;
        padding: 6px; border-radius: 6px;
        background: rgba(0, 0, 0, 0.8); color: #fff;
        font: 12px/1.2 system-ui, sans-serif;
      }
      .debug-panel select, .debug-panel button { font: inherit; padding: 3px 6px; }
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.className = 'debug-panel';

    select = document.createElement('select');
    select.setAttribute('aria-label', 'Theme');
    themes.forEach(function(theme) {
      select.add(new Option(theme.title, theme.main.split('/')[1]));
    });
    if (debugGameTheme) select.value = debugGameTheme;
    panel.appendChild(select);

    [['Intro', 'intro'], ['Outro', 'outro']].forEach(function([label, section]) {
      const button = document.createElement('button');
      button.textContent = label;
      button.addEventListener('click', function() {
        playCutscene(section).catch(function(error) {
          console.error('Debug panel: could not play cutscene', error);
        });
      });
      panel.appendChild(button);
    });

    const gameButton = document.createElement('button');
    gameButton.textContent = 'Game';
    gameButton.addEventListener('click', launchGame);
    panel.appendChild(gameButton);

    document.body.appendChild(panel);
  }

  function launchGame() {
    // A running game asks before the page unloads; this is a deliberate restart.
    canRefresh = true;
    const params = new URLSearchParams(location.search);
    params.set('debugGame', select.value);
    location.search = params.toString();
  }

  async function loadCutscene(theme) {
    const response = await fetch('resource/' + theme + '/cutscene/cutscene.js');
    if (!response.ok) throw new Error('No cutscene for ' + theme);
    // cutscene.js declares its data with top-level `let`, which can only run once
    // on a page. Evaluating it in a function scope allows switching themes.
    const source = await response.text();
    const loaded = new Function(source + '\nreturn { cutscene, localAssetArrays };')();

    // Deliberately bare: these update the game's globals, whether or not a
    // real game has already declared them on this page.
    cutscene = loaded.cutscene;
    localAssetArrays = loaded.localAssetArrays;
    resourceTheme = theme;
  }

  function resetStage() {
    cutsceneTimers.forEach(clearTimeout);
    cutsceneTimers.clear();
    typeof Sound !== 'undefined' && Sound.stopLoop('cutscene');

    // A running game sits above the splash and would cover the cutscene.
    document.querySelectorAll('.activity-node-container, .activity, .footer').forEach(function(element) {
      element.style.display = 'none';
    });

    splash.classList.remove('splash--hidden', 'state-display-none');
    splash.classList.add('splash--visible');
    splashContainerWrapper.querySelectorAll('*').forEach(function(child) { child.remove(); });
    splashContainer = createElement('div', ['splash-container', 'splash-container--off-right'], splashContainerWrapper);
  }

  async function playCutscene(section) {
    await loadCutscene(select.value);
    tracking = true;
    resetStage();

    if (section === 'intro') {
      // The real end of an intro builds the game map; stop on a blank stage instead.
      createActivityNodes = resetStage;
      createCodeBox = function() {};
      addCutscene(0, 'introNoLimit');
    } else {
      // The 'outro' section ends by leaving for the debrief, so play the same
      // scenes under another name. The last Next click then just stays put.
      cutscene.debugOutro = cutscene.outro;
      addCutscene(0, 'debugOutro');
    }
  }

  import('./games.js').then(function({ themes }) {
    buildPanel(themes.filter(function(theme) { return theme.main; }));
    // Most sounds normally load when a game code is accepted, which the panel
    // skips. Without this, cutscene sound events are silently dropped.
    typeof Sound !== 'undefined' && Sound.onPreloadEvent('onPinInput');
  });
})();
