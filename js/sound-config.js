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
    click:   { src: ['click1'],                     volume: 0.5 },
    key:     { src: ['click3'], volume: 0.35 },                // code keyboard
    tab:     { src: ['switch12'],                   volume: 0.5 },                 // setup tabs, character pick
    toggle:  { src: ['switch9'],                    volume: 0.45 },                // global menu Sound toggle
    blip:    { src: ['click2'], volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 }, // typewriter
    whoosh:  { src: ['switch22'],                   volume: 0.45 },
    open:    { src: ['switch2'],                    volume: 0.45 },
    close:   { src: ['switch3'],                    volume: 0.4 },
    hint:    { src: ['switch18'],                   volume: 0.5 },
    correct: { src: ['correct.wav'],                volume: 0.5 },                 // made by tools/sfx-library/make-code-sounds.py
    wrong:   { src: ['wrong.wav'],                  volume: 0.45 },                // made by tools/sfx-library/make-code-sounds.py
  },

  // Game events → sound name. null = silent on purpose. Unknown events are ignored.
  // { sound, skipAfterMs } stays quiet if another sound started within skipAfterMs.
  events: {
    'ui.click':          'click',
    'ui.key':            'key',
    'ui.tab':            'tab',
    'ui.toggle':         'toggle',
    'splash.transition': 'whoosh',
    'dialogue.letter':   'blip',
    'scene.open':        'open',
    'activity.open':     'open',
    'activity.close':    'close',
    'hint.open':         'hint',
    'hint.close':        'close',
    'modal.open':        { sound: 'open', skipAfterMs: 150 },  // quiet when it follows another sound
    'modal.close':       'close',
    'menu.open':         'click',    // the global menu (it opens as a modal, instead of modal.open)
    'menu.close':        'close',
    'access.correct':    'correct',  // game code accepted on the code-entry screen
    'access.wrong':      'wrong',    // game code rejected (wrong, expired or couldn't be checked)
    'code.correct':      null,       // activity code inputs; → 'correct' to turn on
    'code.wrong':        null,       // activity code inputs; → 'wrong' to turn on
    'code.lockout':      null,       // reserved
    'debrief.victory':   null,       // reserved
    'debrief.fail':      null,       // reserved
    'undermurk.tier':    null,       // reserved
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
      // just what the code-entry / room-choice screen needs; the rest loads at onPinInput
      'index.html':      { sounds: ['click', 'key', 'open', 'close', 'correct', 'wrong'], delay: 0 },
      'answer-key.html': { sounds: ['click', 'key', 'open', 'close', 'correct', 'wrong'], delay: 0 },
      'free-play.html':  { sounds: ['click', 'open', 'close'], delay: 0 },
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
    { match: '.tab-button, .character-select-button', event: 'ui.tab' },
    { match: 'button, .button, .splash-button, .cutscene-next-button, ' +
             '.activity-button-done, .activity-scene-button-start, ' +
             '.code-box-button, .footer-button-menu, .global-menu__kids-link, ' +
             '.icon-clickable--splash, .button-close-modal',  event: 'ui.click' },
  ],

  // Typewriter throttle: a blip every N visible letters, never closer than minGapMs
  // (preview runs the typewriter at 5 ms/letter — the gap keeps it from buzzing).
  dialogue: { every: 2, skip: ' .,!?\'"', minGapMs: 45 },

  // data-sfx used in game code (keep this list current):
  //   js/global.js       .button-close-modal, .activity-button-done  "activity.close"
  //                      (they close the activity 50ms after the click)
  //   js/global-menu.js  .global-menu__sound-toggle  "none"  (plays ui.toggle itself when turned on)
};
