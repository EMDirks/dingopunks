// Every decision about sound lives in this file: which file plays, how loud,
// for which game event, and when it loads. js/sound.js only does what this
// file says. Game code fires events (Sound.event('ui.click')); it never names
// a sound file, so remapping or silencing anything is an edit here.
const SOUND_CONFIG = {
  enabled: true,                 // master switch for the whole site
  basePath: 'assets/audio/sfx/',
  formats: ['ogg'],              // later: ['m4a', 'ogg'] — the first one the browser can play wins

  // name → file(s) + mix. src are base names (no extension). Several = random pick per play.
  // pitch: [min, max] playback rate. maxVoices: drop a play if this many are already sounding.
  sounds: {
    click:   { src: ['click1'],                     volume: 0.5 },
    key:     { src: ['click3', 'click4', 'click5'], volume: 0.35 },                // code keyboard
    tab:     { src: ['switch12'],                   volume: 0.5 },                 // setup tabs, character pick
    toggle:  { src: ['switch9'],                    volume: 0.45 },                // global menu Sound toggle
    blip:    { src: ['click2'], volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 }, // typewriter
    whoosh:  { src: ['switch22'],                   volume: 0.45 },
    open:    { src: ['switch2'],                    volume: 0.45 },
    close:   { src: ['switch3'],                    volume: 0.4 },
    hint:    { src: ['switch18'],                   volume: 0.5 },
    correct: { src: [],                             volume: 0.6 },                 // not in the Kenney UI pack yet
    wrong:   { src: [],                             volume: 0.5 },                 // not in the Kenney UI pack yet
  },

  // Game events → sound name. null = silent on purpose. Unknown events are ignored.
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
    'modal.open':        'open',
    'modal.close':       'close',
    'code.correct':      null,       // → 'correct' once a sound is chosen
    'code.wrong':        null,       // → 'wrong' once a sound is chosen
    'code.lockout':      null,       // reserved
    'menu.open':         null,       // the menu is a modal, so modal.open already plays
    'debrief.victory':   null,       // reserved
    'debrief.fail':      null,       // reserved
    'undermurk.tier':    null,       // reserved
  },

  // When sounds load. Keys are the handlePreloading() moments in js/global.js:
  // onPinInput, onSettings, onCharacterSelect, onCutsceneStart, onGameStart,
  // onGameEnd, onDebrief, onUndermurkPage. onPageLoad is fired by sound.js itself
  // for pages that never call handlePreloading (debrief.html), keyed by page.
  // sounds: '*' = everything in `sounds`, or a list of names. delay in ms.
  preload: {
    onPinInput:      { sounds: '*', delay: 0 },   // first screen; all SFX together are ~70 KB
    onUndermurkPage: { sounds: '*', delay: 0 },
    onPageLoad:      { 'debrief.html': { sounds: '*', delay: 0 } },
    // later, music: onCutsceneStart: { music: ['theme'], delay: 500 },
  },

  // Delegated clicks: first matching selector wins. An element (or ancestor) with
  // data-sfx="<event>" plays that event instead; data-sfx="none" silences it.
  // [disabled], *--disabled and *--inactive elements are ignored.
  // One sound per tap: if the click itself fires a sound (a modal, an activity or
  // the hint opening), that sound replaces the plain click.
  clicks: [
    { match: '.keyboard-button',                      event: 'ui.key' },
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
};
