// Local testing panel: pick a theme and watch its intro, outro or fail cutscene,
// launch its 4th grade mixed reading escape room, jump to a victory debrief, or
// open the answer key of one of its puzzles to line the grid up with the art.
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
  // The Puzzle menu does the same with ?debugPuzzle=<game id>:<challenge index>,
  // and that page opens the challenge's answer key, or with &debugPuzzleMode=play,
  // the challenge as a player gets it (pieces in the pile, fresh save).
  const debugParams = new URLSearchParams(location.search);
  const debugGameTheme = debugParams.get('debugGame');
  const debugPuzzle = debugParams.get('debugPuzzle');
  const debugPuzzlePlay = debugParams.get('debugPuzzleMode') === 'play';
  if (debugGameTheme) startSplash = startDebugGame;
  else if (debugPuzzle) startSplash = startDebugPuzzle;

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

    loadDebugGame(game, function() {
      createActivityNodes();
      createCodeBox();
      createFooter();
      startMapLoop();
    });
  }

  async function startDebugPuzzle() {
    const { games } = await import('./games.js');
    const [gameId, index] = debugPuzzle.split(':');
    const game = games.find(function(candidate) { return candidate.id === gameId; });
    if (!game) throw new Error('No game ' + gameId);

    // Answer key mode, as answer-key.html sets it: every piece in its solved slot.
    // Play mode keeps this page's own mode, as in a normal game.
    if (!debugPuzzlePlay) {
      gameMode = 'preview';
      dragAndDropEdit = false;
    }
    loadDebugGame(game, function() {
      // Keep every challenge (createActivityNodes trims to activityCount).
      settings.activityCount = (resource.challengeArray || resource.activityArray).length;
      createActivityNodes();
      // The node's own click handler, then the scene's START, as the editor preview does.
      document.getElementById('activity-node-' + (Number(index) + 1)).click();
      const start = document.querySelector('.activity-scene-button-start');
      if (start) start.click();
      const challenge = resource.challengeArray && resource.challengeArray[Number(index)];
      const isSort = Boolean(challenge && challenge.activity.info.columnArray);
      buildGridNudge(isSort ? null : puzzleBackgroundKey());
    });
  }

  function loadDebugGame(game, onReady) {
    const theme = game.path.split('/')[1];
    loadResourceGame(theme, game.path.slice(('resource/' + theme + '/').length), function() {
      // What the skipped splash steps and intro cutscene would have set up.
      ['onPinInput', 'onSettings', 'onCharacterSelect', 'onCutsceneStart'].forEach(handlePreloading);
      window.globalMenuSplashStarted = true;
      window.globalMenuGameStarted = true;
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
      onReady();
    });
  }

  // Grid nudges (PUZZLE_GRID_OFFSETS in js/activity/puzzle.js), kept for this tab
  // so jumping between puzzles doesn't lose them before they're pasted into the code.
  // Applied now, before the puzzle draws.
  const GRID_TWEAKS_KEY = 'debugPuzzleGridTweaks';
  const GRID_STEP = 0.1;
  const GRID_STEP_BIG = 0.5; // with Shift
  const codeGridOffsets = typeof PUZZLE_GRID_OFFSETS === 'undefined' ? {} : JSON.parse(JSON.stringify(PUZZLE_GRID_OFFSETS));
  let gridTweaks = {};
  if (debugPuzzle && typeof PUZZLE_GRID_OFFSETS !== 'undefined') {
    try { gridTweaks = JSON.parse(sessionStorage.getItem(GRID_TWEAKS_KEY)) || {}; } catch (e) { /* ignore */ }
    Object.assign(PUZZLE_GRID_OFFSETS, gridTweaks);
  }

  // Reloads the same puzzle as its answer key, or to play.
  function switchPuzzleMode(play) {
    canRefresh = true;
    const params = new URLSearchParams(location.search);
    if (play) params.set('debugPuzzleMode', 'play');
    else params.delete('debugPuzzleMode');
    location.search = params.toString();
  }

  // Bottom-left box on a Puzzle menu page (puzzles and column sorts). Answer key: arrow buttons (or the arrow
  // keys) move the whole grid, and the line to paste into PUZZLE_GRID_OFFSETS shows
  // beside them. Play: the pieces start in the pile and snap to the grid as tuned;
  // Restart deals them out again.
  function buildGridNudge(key) {
    const box = document.createElement('div');
    box.className = 'debug-panel debug-panel--grid';

    const modeButton = document.createElement('button');
    modeButton.textContent = debugPuzzlePlay ? 'Answer key' : 'Play';
    modeButton.title = debugPuzzlePlay ? 'Back to the answer key, to nudge the grid' : 'Play this puzzle from the pile';
    modeButton.addEventListener('click', function() { switchPuzzleMode(!debugPuzzlePlay); });

    // A column sort (key null) has no grid to nudge: just the mode buttons.
    if (debugPuzzlePlay || !key) {
      const label = document.createElement('span');
      label.textContent = key ? 'Playing ' + key : (debugPuzzlePlay ? 'Playing sort' : 'Sort answer key');
      box.appendChild(label);
      if (debugPuzzlePlay) {
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', function() { switchPuzzleMode(true); });
        box.appendChild(restartButton);
      }
      box.appendChild(modeButton);
      document.body.appendChild(box);
      return;
    }

    const readout = document.createElement('code');
    readout.className = 'debug-panel__grid-line';
    const status = document.createElement('span');

    function offset() {
      const current = PUZZLE_GRID_OFFSETS[key] || {};
      return { x: current.x || 0, y: current.y || 0 };
    }
    function line() {
      const at = offset();
      return "'" + key + "': { x: " + at.x + ', y: ' + at.y + ' },';
    }
    function render() {
      readout.textContent = line();
      const at = offset();
      const inCode = codeGridOffsets[key] || {};
      const saved = at.x === (inCode.x || 0) && at.y === (inCode.y || 0);
      status.textContent = saved ? 'matches code' : 'not in code yet';
    }
    function setOffset(next) {
      PUZZLE_GRID_OFFSETS[key] = next;
      gridTweaks[key] = next;
      try { sessionStorage.setItem(GRID_TWEAKS_KEY, JSON.stringify(gridTweaks)); } catch (e) { /* ignore */ }
      document.querySelectorAll('[data-puzzle-slot]').forEach(function(piece) {
        placePuzzlePieceSolved(piece, Number(piece.dataset.puzzleSlot));
      });
      render();
    }
    function nudge(dx, dy, big) {
      const step = big ? GRID_STEP_BIG : GRID_STEP;
      const at = offset();
      const round = function(value) { return Math.round(value * 100) / 100; };
      setOffset({ x: round(at.x + dx * step), y: round(at.y + dy * step) });
    }

    const label = document.createElement('span');
    label.textContent = 'Grid';
    box.appendChild(label);

    const ARROWS = { ArrowLeft: ['←', -1, 0], ArrowUp: ['↑', 0, -1], ArrowDown: ['↓', 0, 1], ArrowRight: ['→', 1, 0] };
    Object.keys(ARROWS).forEach(function(arrowKey) {
      const [text, dx, dy] = ARROWS[arrowKey];
      const button = document.createElement('button');
      button.textContent = text;
      button.title = 'Move the grid ' + GRID_STEP + '% (Shift: ' + GRID_STEP_BIG + '%), or use the arrow keys';
      button.addEventListener('click', function(event) { nudge(dx, dy, event.shiftKey); });
      box.appendChild(button);
    });
    document.addEventListener('keydown', function(event) {
      const arrow = ARROWS[event.key];
      if (!arrow || event.target.closest('input, textarea, select, [contenteditable]')) return;
      event.preventDefault();
      nudge(arrow[1], arrow[2], event.shiftKey);
    });

    box.appendChild(readout);

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.addEventListener('click', function() {
      const text = line();
      console.log(text);
      navigator.clipboard.writeText(text).then(function() {
        copyButton.textContent = 'Copied';
        setTimeout(function() { copyButton.textContent = 'Copy'; }, 1200);
      }).catch(function() { copyButton.textContent = 'See console'; });
    });
    box.appendChild(copyButton);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.title = 'Back to the value in the code';
    resetButton.addEventListener('click', function() {
      setOffset(Object.assign({ x: 0, y: 0 }, codeGridOffsets[key]));
      delete gridTweaks[key];
      try { sessionStorage.setItem(GRID_TWEAKS_KEY, JSON.stringify(gridTweaks)); } catch (e) { /* ignore */ }
    });
    box.appendChild(resetButton);
    box.appendChild(modeButton);

    box.appendChild(status);
    render();
    document.body.appendChild(box);
  }

  // Each background art with a puzzle in a theme, scanned from the theme's game
  // files, with the first challenge that puts a puzzle on it: [{ file, value }],
  // value being a debugPuzzle param. Puzzles are dynamic drag-and-drop challenges
  // without columns, or legacy activities with content.puzzle.
  const themePuzzleScans = {};
  function themePuzzles(theme, games) {
    if (!themePuzzleScans[theme]) themePuzzleScans[theme] = scanThemePuzzles(theme, games);
    return themePuzzleScans[theme];
  }

  async function scanThemePuzzles(theme, games) {
    const themeGames = games.filter(function(game) { return game.path.startsWith('resource/' + theme + '/'); });
    const resources = await Promise.all(themeGames.map(async function(game) {
      try {
        const response = await fetch(game.path);
        // Evaluated in a function scope: game files declare a top-level const resource.
        return new Function(await response.text() + '\nreturn resource;')();
      } catch (error) {
        console.error('Debug panel: could not read ' + game.path, error);
        return null;
      }
    }));

    const found = new Map();
    const sorts = [];
    function add(file, game, index) {
      if (file && typeof file === 'object') file = file.path;
      if (file && !found.has(file)) found.set(file, game.id + ':' + index);
    }
    resources.forEach(function(gameResource, g) {
      if (!gameResource) return;
      (gameResource.challengeArray || []).forEach(function(challenge, i) {
        const info = challenge.activity && challenge.activity.info;
        if (info && info.functionality === 'drag-and-drop' && !info.columnArray) add(info.asset, themeGames[g], i);
        // Column sorts: every one, named by game (sorts don't depend on the art).
        if (info && info.functionality === 'drag-and-drop' && info.columnArray) {
          const game = themeGames[g];
          sorts.push({
            file: 'Sort: ' + game.topic + ' ' + game.grades.join('/') + ' (' + info.columnArray.length + ' col)',
            value: game.id + ':' + i,
          });
        }
      });
      (gameResource.activityArray || []).forEach(function(activity, i) {
        // Legacy pieces sit differently on the same art: their own entry (puzzleBackgroundKey).
        if (activity.content && activity.content.puzzle) add(activity.assets.activityBackground + ' (legacy)', themeGames[g], i);
      });
    });
    return Array.from(found, function([file, value]) { return { file: 'Puzzle: ' + file, value: value }; })
      .sort(function(a, b) { return a.file.localeCompare(b.file); })
      .concat(sorts.sort(function(a, b) { return a.file.localeCompare(b.file); }));
  }

  let select;

  function buildPanel(themes, games) {
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
      .debug-panel--minimized > :not(.debug-panel__toggle) { display: none; }
      .debug-panel--grid { top: auto; bottom: 8px; }
      .debug-panel--grid span { font: inherit; }
      .debug-panel__grid-line { font: 12px/1.2 ui-monospace, Menlo, monospace; user-select: all; }
      .debug-show-drop-areas .activity-sort__column { background: rgba(255, 0, 0, 0.25); }
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.className = 'debug-panel';

    // Minimize down to just this button. Remembered across reloads (Game reloads the page).
    const MINIMIZED_KEY = 'debugPanelMinimized';
    const toggle = document.createElement('button');
    toggle.className = 'debug-panel__toggle';
    function setMinimized(minimized) {
      panel.classList.toggle('debug-panel--minimized', minimized);
      toggle.textContent = minimized ? '▸' : '◂';
      toggle.title = minimized ? 'Show debug panel' : 'Minimize debug panel';
      toggle.setAttribute('aria-label', toggle.title);
      toggle.setAttribute('aria-expanded', String(!minimized));
    }
    let startMinimized = false;
    try { startMinimized = localStorage.getItem(MINIMIZED_KEY) === '1'; } catch (e) { /* ignore */ }
    setMinimized(startMinimized);
    toggle.addEventListener('click', function() {
      const minimized = !panel.classList.contains('debug-panel--minimized');
      setMinimized(minimized);
      try { localStorage.setItem(MINIMIZED_KEY, minimized ? '1' : '0'); } catch (e) { /* ignore */ }
    });
    panel.appendChild(toggle);

    select = document.createElement('select');
    select.setAttribute('aria-label', 'Theme');
    themes.forEach(function(theme) {
      select.add(new Option(theme.title, theme.main.split('/')[1]));
    });
    if (debugGameTheme) select.value = debugGameTheme;
    if (debugPuzzle) {
      const puzzleGame = games.find(function(game) { return game.id === debugPuzzle.split(':')[0]; });
      if (puzzleGame) select.value = puzzleGame.path.split('/')[1];
    }
    select.addEventListener('change', function() {
      preloadTheme(select.value);
      fillPuzzleSelect();
    });
    panel.appendChild(select);

    [['Intro', 'intro'], ['Outro', 'outro'], ['Fail', 'fail']].forEach(function([label, section]) {
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

    const debriefButton = document.createElement('button');
    debriefButton.textContent = 'Debrief';
    debriefButton.addEventListener('click', launchDebrief);
    panel.appendChild(debriefButton);

    // Opens the answer key of the theme's puzzle on that background art.
    const puzzleSelect = document.createElement('select');
    puzzleSelect.setAttribute('aria-label', 'Puzzle answer key');
    async function fillPuzzleSelect() {
      const theme = select.value;
      puzzleSelect.replaceChildren(new Option('Puzzle: loading…', ''));
      const puzzles = await themePuzzles(theme, games);
      if (select.value !== theme) return;
      puzzleSelect.replaceChildren(new Option(puzzles.length ? 'Puzzle…' : 'No puzzles', ''));
      puzzles.forEach(function(puzzle) {
        puzzleSelect.add(new Option(puzzle.file.replace('.png', ''), puzzle.value));
      });
      if (debugPuzzle) puzzleSelect.value = debugPuzzle;
      if (!puzzleSelect.value) puzzleSelect.selectedIndex = 0;
    }
    puzzleSelect.addEventListener('change', function() {
      if (puzzleSelect.value) launchPuzzle(puzzleSelect.value);
    });
    panel.appendChild(puzzleSelect);
    fillPuzzleSelect();

    // Tints each column sort column red: the area a card has to be centred over
    // to drop into that column (sort.js). Off by default; remembered across reloads.
    const DROP_AREAS_KEY = 'debugShowDropAreas';
    const dropAreasButton = document.createElement('button');
    function setDropAreas(show) {
      document.documentElement.classList.toggle('debug-show-drop-areas', show);
      dropAreasButton.textContent = show ? 'Drop areas: on' : 'Drop areas: off';
    }
    let showDropAreas = false; // off unless turned on
    try { showDropAreas = localStorage.getItem(DROP_AREAS_KEY) === '1'; } catch (e) { /* ignore */ }
    setDropAreas(showDropAreas);
    dropAreasButton.addEventListener('click', function() {
      showDropAreas = !showDropAreas;
      setDropAreas(showDropAreas);
      try { localStorage.setItem(DROP_AREAS_KEY, showDropAreas ? '1' : '0'); } catch (e) { /* ignore */ }
    });
    panel.appendChild(dropAreasButton);

    buildVoiceControls(panel);
    buildCharacterVoices(panel, themes);

    document.body.appendChild(panel);
  }

  // Every character voice in the game, from SOUND_CONFIG.characterVoices: the player
  // characters, the cutscene speakers and each theme's challenge characters, as tiles
  // with the character's name over their picture. Clicking a tile loops that voice
  // through the real Sound.voice path (same table and key the game uses), so it sounds
  // as it does in play; clicking it again, or closing the gallery, stops it. A character
  // in more than one theme shows under each, sharing one voice.
  const CHARACTER_LINE_MS = 2000;

  // Display names, keyed by voice sound. Names in the theme files vary from game to
  // game, so these are the ones in js/sound-config.js. A voice missing here is named
  // after its picture's file.
  const VOICE_NAMES = {
    'voice-jj-dingo': 'J.J. Dingo', 'voice-jj-dingo-intro': 'J.J. Dingo (intro)', 'voice-badguy': 'Bad guy',
    'voice-mint': 'Mint', 'voice-antares': 'Antares', 'voice-tubu': 'Tu-Bu', 'voice-jelly': 'Jelly',
    'voice-targ': 'T.O.R.G.', 'voice-winston': 'Winston', 'voice-hydrax': 'Hydrax', 'voice-lavender': 'Lavender',
    'voice-topsy': 'Terrible Topsy', 'voice-robustus': 'Robustus the Great', 'voice-shortnose': 'Martin Shortnose',
    'voice-prisma': 'Prisma', 'voice-zeeb': 'Zeeb',
    'voice-basil-rabbit': 'Basil Rabbit', 'voice-grumblegrub': 'Grumblegrub', 'voice-queen-bella': 'Queen Bella',
    'voice-riff-wingman': 'Riff Wingman', 'voice-sunny-snap': 'Sunny Snap',
    'voice-chef-gumbo': 'Chef Gumbo', 'voice-driftwood-dan': 'Driftwood Dan', 'voice-fishbeard': 'Fishbeard',
    'voice-madame-mystica': 'Madame Mystica', 'voice-melodina': 'Melodina',
    'voice-broken-animatronic': 'Broken Animatronic', 'voice-stefan-sage': 'Stefan Sage', 'voice-tater-durant': 'Tater Durant',
    'voice-cornelius-rabbit': 'Cornelius Rabbit', 'voice-eva': 'E.V.A.', 'voice-shelly-sunny-and-yoko': 'Shelly, Sunny and Yoko',
    'voice-sir-eggbert': 'Sir Eggbert', 'voice-ziggy-voss': 'Ziggy Voss',
    'voice-final-bell-1': 'Student Mystica', 'voice-final-bell-2': 'Student Pippo', 'voice-final-bell-3': 'Student Robustus',
    'voice-final-bell-4': 'Student Mabel', 'voice-final-bell-5': 'Student Kevin',
    'voice-boiler-belle': 'Boiler Belle', 'voice-count-visage': 'Count Visage', 'voice-miss-tally': 'Miss Tally',
    'voice-pippo-fizzlepop': 'Pippo Fizzlepop', 'voice-plucky-the-clown': 'Plucky the Clown',
    'voice-paradise-1': 'Demi Voss', 'voice-paradise-2': 'Old Stavros', 'voice-paradise-3': 'Thessaly Tidewater',
    'voice-paradise-4': "Kastor's Ghost", 'voice-paradise-5': 'Ned',
    'voice-banana-gunk-jr': 'Banana Gunk Jr.', 'voice-gribba': 'Gribba', 'voice-king-kevin': 'King Kevin',
    'voice-merriwig': 'Merriwig', 'voice-twisted-tori': 'Twisted Tori',
    'voice-charm': 'C.H.A.R.M.', 'voice-sparklepants': 'Sparklepants',
    'voice-candlewick': 'Candlewick', 'voice-crispin-the-cider-sage': 'Crispin the Cider Sage', 'voice-hollow-jack': 'Hollow Jack',
    'voice-mabel-mallow': 'Mabel Mallow', 'voice-the-gnomads': 'The Gnomads',
    'voice-dr-seraphina': 'Dr. Seraphina', 'voice-tater-drift': 'Tater Drift', 'voice-the-frozen-knight': 'The Frozen Knight',
    'voice-bix-gribble': 'Bix Gribble', 'voice-ched-muckley': 'Ched Muckley', 'voice-dale': 'Dale',
    'voice-lady-thistledown': 'Lady Thistledown',
    'voice-mister-lump': 'Mister Lump', 'voice-patchpaw': 'Patchpaw', 'voice-seaweed-sally': 'Seaweed Sally',
    'voice-sir-bobble': 'Sir Bobble', 'voice-yo-yeti': 'Yo Yeti',
  };

  // The picture for a characterVoices entry: player portraits, the cutscene speakers'
  // art (the bad guy voice is shared by every theme; Midnight Mall's is shown), or the
  // theme's challenge character art.
  function voiceImage(table, key) {
    if (table === 'player') return 'assets/player/' + key;
    if (table === 'cutscene') {
      return key === 'badguy' ? 'resource/escape-the-midnight-mall/assets/cutscene/badguy.png' : 'assets/cutscene/jjcrispy-0.png';
    }
    return 'resource/' + table + '/assets/activity/character/' + key;
  }

  function voiceSound(mapping) {
    return typeof mapping === 'object' ? mapping.sound : mapping;
  }

  function voiceName(mapping, key) {
    return VOICE_NAMES[voiceSound(mapping)] || key.replace(/\.png$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
  }

  function buildCharacterVoices(panel, themes) {
    if (typeof SOUND_CONFIG === 'undefined' || !SOUND_CONFIG.characterVoices || typeof Sound === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      .debug-voices {
        position: fixed; inset: 48px 8px 8px; z-index: 10001;
        overflow-y: auto; padding: 10px 14px 16px; border-radius: 8px;
        background: rgba(10, 10, 14, 0.94); color: #fff;
        font: 12px/1.2 system-ui, sans-serif;
      }
      .debug-voices[hidden] { display: none; }
      .debug-voices__bar { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
      .debug-voices__bar button { font: inherit; padding: 3px 8px; }
      .debug-voices h3 { margin: 14px 0 6px; font-size: 13px; font-weight: 600; opacity: 0.8; }
      .debug-voices__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 8px; }
      .debug-voices__tile {
        position: relative; aspect-ratio: 1; padding: 0; overflow: hidden; cursor: pointer;
        border: 2px solid transparent; border-radius: 6px;
        background: #2a2a33 center 20% / contain no-repeat; color: #fff; font: inherit;
      }
      .debug-voices__tile:hover { border-color: rgba(255, 255, 255, 0.4); }
      .debug-voices__tile--on { border-color: #4be37a; box-shadow: 0 0 0 2px rgba(75, 227, 122, 0.35); }
      .debug-voices__name {
        position: absolute; left: 0; right: 0; bottom: 0; padding: 18px 4px 5px;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
        font-weight: 700; text-align: center; text-shadow: 0 1px 2px #000;
      }
      .debug-voices__tile--on .debug-voices__name::before { content: '\\25B6  '; color: #4be37a; }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.className = 'debug-voices';
    overlay.hidden = true;

    const bar = document.createElement('div');
    bar.className = 'debug-voices__bar';
    const heading = document.createElement('strong');
    heading.textContent = 'Character voices: click one to loop it';
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    bar.append(heading, closeButton);
    overlay.appendChild(bar);

    const themeTitles = {};
    themes.forEach(function(theme) { themeTitles[theme.main.split('/')[1]] = theme.title; });
    const sectionTitle = function(table) {
      if (table === 'player') return 'Player characters';
      if (table === 'cutscene') return 'Cutscenes';
      return themeTitles[table] || table;
    };

    let timer = null;
    let activeTile = null;

    function stop() {
      clearInterval(timer);
      timer = null;
      Sound.stopVocalize();
      if (activeTile) activeTile.classList.remove('debug-voices__tile--on');
      activeTile = null;
    }

    function start(tile, table, key, sound) {
      stop();
      activeTile = tile;
      tile.classList.add('debug-voices__tile--on');
      Sound.preload([sound]);
      const talk = function() { Sound.voice(table, key, 0, CHARACTER_LINE_MS); };
      talk();
      timer = setInterval(talk, CHARACTER_LINE_MS);
    }

    Object.keys(SOUND_CONFIG.characterVoices).forEach(function(table) {
      if (table === 'debug') return;   // the clip set looper's own entries
      const voices = SOUND_CONFIG.characterVoices[table];
      const section = document.createElement('h3');
      section.textContent = sectionTitle(table);
      const grid = document.createElement('div');
      grid.className = 'debug-voices__grid';
      Object.keys(voices).forEach(function(key) {
        const mapping = voices[key];
        const sound = voiceSound(mapping);
        const tile = document.createElement('button');
        tile.className = 'debug-voices__tile';
        tile.style.backgroundImage = 'url("' + voiceImage(table, key) + '")';
        tile.title = sound;
        const name = document.createElement('span');
        name.className = 'debug-voices__name';
        name.textContent = voiceName(mapping, key);
        tile.appendChild(name);
        tile.addEventListener('click', function() {
          activeTile === tile ? stop() : start(tile, table, key, sound);
        });
        grid.appendChild(tile);
      });
      overlay.append(section, grid);
    });

    document.body.appendChild(overlay);

    function close() {
      stop();
      overlay.hidden = true;
    }

    const openButton = document.createElement('button');
    openButton.textContent = 'Voices';
    openButton.addEventListener('click', function() {
      overlay.hidden ? (overlay.hidden = false) : close();
    });
    panel.appendChild(openButton);
    closeButton.addEventListener('click', close);
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !overlay.hidden) close();
    });
  }

  // Voice clip sets (VOICE_CLIPS in js/sound-config.js), looped the way an in-game
  // voice talks: a new random clip every vocalizeEveryMs, overlapping, at the in-game
  // voice volume and pitch spread. Each set gets a debug-only sound and a 'debug'
  // characterVoices entry, so playback runs through the real vocalize path.
  const VOICE_CHUNK_MS = 2000;
  let voiceTimer = null;

  function buildVoiceControls(panel) {
    if (typeof VOICE_CLIPS === 'undefined' || typeof Sound === 'undefined') return;
    const sets = Object.keys(VOICE_CLIPS);
    SOUND_CONFIG.characterVoices = SOUND_CONFIG.characterVoices || {};
    const table = SOUND_CONFIG.characterVoices.debug = {};
    sets.forEach(function(set) {
      const name = 'debug-voice-' + set;
      SOUND_CONFIG.sounds[name] = { src: VOICE_CLIPS[set], volume: 0.32, pitch: [0.9, 1.1], vocalize: true, lazy: true };
      table[set] = name;
    });

    const voiceSelect = document.createElement('select');
    voiceSelect.setAttribute('aria-label', 'Voice clips');
    sets.forEach(function(set) { voiceSelect.add(new Option('Voice: ' + set, set)); });
    panel.appendChild(voiceSelect);

    const loopButton = document.createElement('button');
    loopButton.textContent = 'Loop';
    panel.appendChild(loopButton);

    function stopVoiceLoop() {
      clearInterval(voiceTimer);
      voiceTimer = null;
      Sound.stopVocalize();
      loopButton.textContent = 'Loop';
    }

    function startVoiceLoop() {
      stopVoiceLoop();
      const set = voiceSelect.value;
      Sound.preload([table[set]]);
      const talk = function() { Sound.voice('debug', set, 0, VOICE_CHUNK_MS); };
      talk();
      voiceTimer = setInterval(talk, VOICE_CHUNK_MS);
      loopButton.textContent = 'Stop';
    }

    loopButton.addEventListener('click', function() {
      voiceTimer ? stopVoiceLoop() : startVoiceLoop();
    });
    // Switching sets while one loops moves straight to the new set.
    voiceSelect.addEventListener('change', function() {
      if (voiceTimer) startVoiceLoop();
      else Sound.preload([table[voiceSelect.value]]);
    });
    Sound.preload([table[voiceSelect.value]]);
  }

  // A strong win: 2 players, every challenge done, no hints, 40 of 50 minutes left.
  // That scores 958 (all 5 medals), so the whole scoring sequence plays.
  const DEBUG_DEBRIEF_VICTORY = {
    teamSize: 2,
    hintsUsed: 0,
    activitiesCompleted: 5,
    timeStarting: 3000,
    timeRemaining: 2400,
    outcome: 'victory',
  };

  function launchDebrief() {
    canRefresh = true;
    // Starts from debriefStats so the student's sound settings (mute, muteMusic) carry over.
    const stats = Object.assign(addMyEscapeRoomToStats({}), debriefStats, DEBUG_DEBRIEF_VICTORY, {
      characters: characterArray.slice(0, DEBUG_DEBRIEF_VICTORY.teamSize).map(function(character) {
        return character.name;
      }).join(','),
    });
    const queryString = Object.entries(stats)
      .filter(function([, value]) { return value !== null && value !== undefined; })
      .map(function([key, value]) { return encodeURIComponent(key) + '=' + encodeURIComponent(value); })
      .join('&');
    location.href = 'debrief.html?' + queryString;
  }

  function launchGame() {
    // A running game asks before the page unloads; this is a deliberate restart.
    canRefresh = true;
    const params = new URLSearchParams(location.search);
    params.delete('debugPuzzle');
    params.set('debugGame', select.value);
    location.search = params.toString();
  }

  function launchPuzzle(value) {
    canRefresh = true;
    const params = new URLSearchParams(location.search);
    params.delete('debugGame');
    params.set('debugPuzzle', value);
    location.search = params.toString();
  }

  async function fetchCutscene(theme) {
    const response = await fetch('resource/' + theme + '/cutscene/cutscene.js');
    if (!response.ok) throw new Error('No cutscene for ' + theme);
    // cutscene.js declares its data with top-level `let`, which can only run once
    // on a page. Evaluating it in a function scope allows switching themes.
    const source = await response.text();
    return new Function(source + '\nreturn { cutscene, localAssetArrays };')();
  }

  // The panel skips the splash steps that load cutscene images, so load the
  // selected theme's ahead of a click, as a real run would have by then. This
  // reads the lists directly: handlePreloading needs a loaded resource for
  // 'preview-logo', and the theme's globals must stay put under a running game.
  async function preloadTheme(theme) {
    try {
      const loaded = await fetchCutscene(theme);
      ['onPinInput', 'onSettings', 'onCharacterSelect', 'onCutsceneStart', 'onGameFinish'].forEach(function(moment) {
        [globalAssetArrays, loaded.localAssetArrays].forEach(function(assets) {
          const entry = assets.priority.low[moment];
          if (entry) preloadImages(entry.asset.filter(function(path) { return path !== 'preview-logo'; }), 'low');
        });
      });
    } catch (error) {
      console.error('Debug panel: could not preload ' + theme, error);
    }
  }

  async function loadCutscene(theme) {
    const loaded = await fetchCutscene(theme);

    // Deliberately bare: these update the game's globals, whether or not a
    // real game has already declared them on this page.
    cutscene = loaded.cutscene;
    localAssetArrays = loaded.localAssetArrays;
    resourceTheme = theme;
  }

  function resetStage() {
    cutsceneTimers.forEach(clearTimeout);
    cutsceneTimers.clear();
    stopCutsceneLoops();
    stopMapLoop();

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
    } else if (section === 'outro') {
      // The 'outro' and 'fail' sections end by leaving for the debrief, so play
      // the same scenes under another name. The last Next click then just stays put.
      cutscene.debugOutro = cutscene.outro;
      addCutscene(0, 'debugOutro');
    } else {
      cutscene.debugFail = cutscene.fail;
      addCutscene(0, 'debugFail');
    }
  }

  import('./games.js').then(function({ themes, games }) {
    buildPanel(themes.filter(function(theme) { return theme.main; }), games);
    // Most sounds normally load when a game code is accepted, which the panel
    // skips. Without this, cutscene sound events are silently dropped.
    typeof Sound !== 'undefined' && Sound.onPreloadEvent('onPinInput');
    preloadTheme(select.value);
  });
})();
