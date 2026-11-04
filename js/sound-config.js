// Every decision about sound lives in this file: which file plays, how loud,
// for which game event, and when it loads. js/sound.js only does what this
// file says. Game code fires events (Sound.event('ui.click')); it never names
// a sound file, so remapping or silencing anything is an edit here.
const SOUND_CONFIG = {
  enabled: true,                 // master switch for the whole site
  basePath: 'assets/audio/sfx/',
  formats: ['ogg'],              // later: ['m4a', 'ogg'] — the first one the browser can play wins

  // name → file(s) + mix. src are base names (the extension comes from `formats`), or a
  // full file name like 'correct.wav' to use that file as is. Several = random pick per play.
  // pitch: [min, max] playback rate. maxVoices: drop a play if this many are already sounding.
  sounds: {

    // Use for toggled systems with an open/close state
    open:    { src: ['switch1'],                    volume: 0.4 },
    close:   { src: ['switch2'],                    volume: 0.3 },

    // Use for selecting an item with focus state
    select:  { src: ['switch3'],                 volume: 0.2 },

    click:   { src: ['click3'],                     volume: 0.4 },
    key:     { src: ['click3'], volume: 0.35 },                // code keyboard
    clickWood: { src: ['click-wood'],               volume: 0.1 },                 // global menu student cards sliding in
    slapPaper: { src: ['card-slide-2'], volume: 0.2, pitch: [0.94, 1.06] },                 // splash thumbnail spinning in
    slapMetal: { src: ['match-wood-1'],        volume: 0.05 },                 // game timer landing
    tab:     { src: ['switch12'],                   volume: 0.5 },                 // Undermurk setup tabs
    toggle:  { src: ['switch9'],                    volume: 0.45 },                // global menu Sound toggle
    blip:    { src: ['click2'], volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 }, // activity scene dialogue
    typewriter: { src: ['ken-blip-1'], volume: 0.1, pitch: [1.4, 1.5], maxVoices: 4 }, // cutscene text
    whoosh:  { src: ['swing1'],                     volume: 0.3 },                 // splash swipe-out transitions
    chime:   { src: ['zap-chime.mp3'],           volume: 0.05 },                 // all characters selected
    static:  { src: ['free-static-2.wav'],                 volume: 0.1 },                // cutscene background loop
    tvOn:    { src: ['free-tvOn.wav'],               volume: 0.1 },                 // cutscene coming in
    clickGlitch: { src: ['match-glitch-1.wav'],     volume: 0.1 },                 // cutscene Next, moving to the next scene

    hint:    { src: ['switch18'],                   volume: 0.5 },
    lock:    { src: ['switch_005'],                    volume: 0.3 },                 // placeholder until a lock sound is added
    correct: { src: ['coin'],                volume: 0.1 },                 // made by tools/sfx-library/make-code-sounds.py
    wrong:   { src: ['error_005'],                  volume: 0.45 },                // made by tools/sfx-library/make-code-sounds.py
  },

  // Game events → sound name. null = silent on purpose. Unknown events are ignored.
  // { sound, skipAfterMs } stays quiet if another sound started within skipAfterMs.
  // { sound, delay } plays that many ms after the event fires.
  // { sound, skipIfLocked: true } stays quiet until the player has tapped, for sounds
  // that aren't caused by a tap and would otherwise play late, on the first tap.
  events: {
    'ui.click':          'click',
    'ui.key':            'key',
    'ui.input':          'select',   // tapping a game code box
    'ui.tab':            'tab',
    'ui.setting':        'select',   // escape room setup tabs
    'ui.character':      'select',   // choosing a character
    'character.allReady': 'chime',   // last character picked, with "All punks ready!"
    'ui.toggle':         'toggle',
    'splash.transition': { sound: 'whoosh', delay: 230 },  // tuned by ear against the fly-out
    'splash.thumbnail':  { sound: 'slapPaper', delay: 100, skipIfLocked: true },  // 100ms into the 250ms spin-in; delay fine-tunes it
    'dialogue.letter':   'blip',     // activity scene dialogue
    'cutscene.start':    { sound: 'tvOn', delay: 350 },  // every cutscene; peaks as the scanline opens to the full panel
    'cutscene.next':     'clickGlitch', // Next to the following scene; the last Next stays silent
    'cutscene.skip':     'clickGlitch', // SKIP INTRO
    'cutscene.letter':   'typewriter', // intro and outro cutscenes
    'scene.open':        'open',
    'activity.nodeIn':   { sound: 'slapPaper', delay: 100, skipIfLocked: true },  // each challenge node's first slide-in
    'timer.in':          { sound: 'slapMetal', delay: 50 },  // peaks as the timer lands; 50 + the sound's 150ms peak = the 200ms slam
    'activity.open':     'open',
    'activity.close':    'close',
    'hint.open':         'hint',
    'hint.close':        'close',
    'ui.locked':         'lock',     // tapping a locked item (menu cards, the score page's Undermurk card)

    'modal.open':        'open',
    'modal.close':       'close',
    'modal.open.wrongCode': null,    // "That code didn't work" popup: only the wrong sound plays

    'menu.open':         'open',
    'menu.close':        'close',
    'menu.cardIn':       'clickWood', // once per student card, as it starts sliding in
    
    'access.correct':    { sound: 'correct', delay: 0 },  // fires as the code boxes pop gold; delay fine-tunes it
    'access.wrong':      'wrong',    // game code rejected (wrong, expired or couldn't be checked)
    'code.correct':      null,       // activity code inputs; → 'correct' to turn on
    'code.wrong':        null,       // activity code inputs; → 'wrong' to turn on
    'code.lockout':      null,       // reserved
    'debrief.victory':   null,       // reserved
    'debrief.fail':      null,       // reserved
    'undermurk.tier':    null,       // reserved
  },

  // Looping sounds. Game code calls Sound.startLoop(key) and Sound.stopLoop(key).
  // The volume comes from the sound in `sounds`; remove a key to silence that loop.
  loops: {
    // delayMs: the CRT scanline reaches full panel 690ms in (cutscene-tv-on-beam in css/splash-new.css)
    cutscene: { sound: 'static', delayMs: 690, fadeInMs: 150, fadeOutMs: 400 },  // whole cutscene: intro, outro, fail, Undermurk
  },

  // When sounds load. Keys are the handlePreloading() moments in js/global.js:
  // onPinInput, onSettings, onCharacterSelect, onCutsceneStart, onGameStart,
  // onGameEnd, onDebrief, onUndermurkPage. onPageLoad is fired by sound.js itself
  // as soon as a page opens, keyed by page. Already-loaded sounds aren't fetched again.
  // sounds: '*' = everything in `sounds`, or a list of names. delay in ms.
  // The teacher's Audio setting isn't known until a code is entered, so the
  // code-entry screen plays sound; a code from a teacher with Audio off is silent
  // from then on.
  preload: {
    onPageLoad: {
      // just what the code-entry / room-choice screen needs; the rest loads at onPinInput.
      // whoosh and slapPaper are here because the splash can reach them soon after onPinInput.
      // clickWood is here because the menu can open before a code is entered.
      'index.html':      { sounds: ['click', 'key', 'select', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'clickWood', 'slapPaper'], delay: 0 },
      'answer-key.html': { sounds: ['click', 'key', 'select', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'clickWood', 'slapPaper'], delay: 0 },
      'free-play.html':  { sounds: ['click', 'open', 'close', 'lock', 'whoosh', 'clickWood', 'slapPaper'], delay: 0 },
      'debrief.html':    { sounds: '*', delay: 0 },
    },
    onPinInput:      { sounds: '*', delay: 0 },   // code accepted; all SFX together are ~100 KB
    onUndermurkPage: { sounds: '*', delay: 0 },
    // later, music: onCutsceneStart: { music: ['theme'], delay: 500 },
  },

  // Delegated clicks: first matching selector wins. An element (or ancestor) with
  // data-sfx="<event>" plays that event instead; data-sfx="none" silences it.
  // [disabled], *--disabled and *--inactive elements are ignored.
  // One sound per tap: if the click itself fires a sound (a modal, an activity or
  // the hint opening), that sound replaces the plain click.
  // on: 'press' plays as soon as the control is pressed and is never replaced, so
  // every key clicks, including the last one before a correct/wrong code sound.
  clicks: [
    { match: '.keyboard-button',                      event: 'ui.key', on: 'press' },
    { match: '.access-input',                         event: 'ui.input', on: 'press' },
    { match: '.splash-button, .cutscene-next-button, .code-box-button', event: null }, // Next and Finish: no click (the splash button keeps its swipe-out sound)
    { match: '.tab-button-player-count-, .tab-button-activity-count-, ' +
             '.tab-button-time-limit-, .tab-button-hints-',   event: 'ui.setting' }, // "Set up your escape room" tabs
    { match: '.character-select-button',              event: 'ui.character' },
    { match: '.tab-button',                           event: 'ui.tab' },
    { match: 'button, .button, ' +
             '.activity-button-done, .activity-scene-button-start, ' +
             '.footer-button-menu, .global-menu__kids-link, ' +
             '.icon-clickable--splash, .button-close-modal',  event: 'ui.click' },
  ],

  // Hardware keyboard typing: first matching selector wins. Only keys the game
  // accepts (letters, digits, Backspace/Delete) sound; shortcuts and held-down
  // repeats don't.
  typing: [
    { match: '.access-input, .code-input', event: 'ui.key' },
  ],

  // Typewriter throttle: a blip every N visible letters, never closer than minGapMs
  // (preview runs the typewriter at 5 ms/letter — the gap keeps it from buzzing).
  dialogue: { every: 2, skip: ' .,!?\'"', minGapMs: 45 },

  // data-sfx used in game code (keep this list current):
  //   js/global.js       .button-close-modal, .activity-button-done  "activity.close"
  //                      (they close the activity 50ms after the click)
  //   js/global-menu.js  .global-menu__sound-toggle  "none"  (plays ui.toggle itself when turned on)
};
