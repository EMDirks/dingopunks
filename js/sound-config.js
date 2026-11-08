// Every decision about sound lives in this file: which file plays, how loud,
// for which game event, and when it loads. js/sound.js only does what this
// file says. Game code fires events (Sound.event('ui.click')); it never names
// a sound file, so remapping or silencing anything is an edit here.

// Character voice clips. Each character's voice-* sound below picks from these at
// random and sets its own pitch.
const VOICE_CLIPS = [
  '554017__dodrio__dialogue_mumble_huh',
  '554018__dodrio__dialogue_mumble_heh',
  '554019__dodrio__dialogue_mumble_hah',
  '554020__dodrio__dialogue_mumble_haeh',
  '554023__dodrio__dialogue_mumble_huuh',
];

const SOUND_CONFIG = {
  enabled: true,                 // master switch for the whole site
  masterVolume: 1.5625,          // multiplies every sound and loop; 1 = the mix below as written
  basePath: 'assets/audio/sfx/',
  formats: ['ogg'],              // later: ['m4a', 'ogg'] — the first one the browser can play wins

  // name → file(s) + mix. src are base names (the extension comes from `formats`), or a
  // full file name like 'correct.wav' to use that file as is. Several = random pick per play, never the same one twice in a row.
  // pitch: [min, max] playback rate. maxVoices: drop a play if this many are already sounding.
  // lazy: true leaves a big file out of sounds: '*', so it only loads where `preload` names it.
  // Two categories, each with its own global menu toggle:
  //   Sound effects: everything not listed below.
  //   Music & ambience: every loop in `loops` (always, no flag needed), plus the
  //   one-shots that play as a game starts or finishes, which are marked music: true.
  sounds: {

    // Use for toggled systems with an open/close state
    open:    { src: ['switch1'],                    volume: 0.3 },
    close:   { src: ['switch2'],                    volume: 0.225 },

    // Use for selecting an item with focus state
    select:  { src: ['switch3'],                 volume: 0.2 },

    click:   { src: ['switch3'],                     volume: 0.2 },
    key:     { src: ['switch3'], volume: 0.35 },                // code keyboard
    clickWood: { src: ['click-wood'],               volume: 0.1 },                 // global menu student cards sliding in
    slapPaper: { src: ['card-slide-2'], volume: 0.2, pitch: [0.94, 1.06] },                 // splash thumbnail spinning in
    slapMetal: { src: ['match-wood-1'],        volume: 0.05 },                 // game timer landing
    tab:     { src: ['switch12'],                   volume: 0.5 },                 // Undermurk setup tabs
    toggle:  { src: ['switch9'],                    volume: 0.1 },                // global menu Sound effects and Music & ambience toggles
    blip:    { src: ['click2'], volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 }, // activity scene dialogue
    typewriter: { src: ['ken-blip-3'], volume: 0.1, pitch: [1,1.1], maxVoices: 4 }, // cutscene text
    'voice-JJDingo': { src: VOICE_CLIPS, volume: 0.5, pitch: [0.8,1] },              // J.J. Dingo's lines in intro and outro cutscenes; pitch: [min, max], 1 = normal
    'voice-badguy': { src: VOICE_CLIPS, volume: 0.6, pitch: [0.5,0.6] },              // lines with textStyle: 'badguy' in any cutscene; pitch: [min, max], 1 = normal
    whoosh:  { src: ['swing1'],                     volume: 0.3 },                 // splash swipe-out transitions
    'whoosh-cutscene': { src: ['ken-whoosh-1'],           volume: 0.15 },                // Midnight Mall intro character moves
    'whoosh-badguy': { src: ['match-crash'],        volume: 0.07 },                 // Midnight Mall bad guy moves
    chime:   { src: ['zap-chime.mp3'],           volume: 0.05 },                 // all characters selected
    'background-creepy': { src: ['background-creepy'], volume: 0.1 },                // Midnight Mall bad guy loop
    'background-crickets': { src: ['free-crickets'],   volume: 0.4 },                // Midnight Mall background loop
    dangle:  { src: ['match-metal-dangle'],     volume: 0.05 },                 // Dingo Punks bumper logo swinging loose
    tvOn:    { src: ['match-power-15'],               volume: 0.1 },                 // cutscene coming in
    clickGlitch: { src: ['match-glitch-1.wav'],     volume: 0.1 },                 // SKIP INTRO
    clickNext: { src: ['switch3'],       volume: 0.2 },                // cutscene Next, moving to the next scene

    'dingo-punks-end': { src: ['dingo-punks-end'], volume: 0.2, lazy: true },   // song, looping on the debrief page
    'dingo-punks-loop': { src: ['dingo-punks-loop'], volume: 0.3, lazy: true },   // song, looping in the Midnight Mall intro from its first scene; lazy, so it loads when the loop starts
    wiggleworm: { src: ['dingo-punks-start'], volume: 0.3, maxVoices: 1, lazy: true, music: true },   // song, once as an intro finishes and the game starts

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
    'splash.transition': { sound: 'whoosh', delay: 280 },  // tuned by ear against the fly-out
    'splash.thumbnail':  { sound: 'slapPaper', delay: 100, skipIfLocked: true },  // 100ms into the 250ms spin-in; delay fine-tunes it
    'dialogue.letter':   'blip',     // activity scene dialogue
    'bumper.dangle':     { sound: 'dangle', delay: 200 },  // START pressed; 120 + the sound's 160ms clink lands just after the bottom of the logo's first swing (200ms)
    'bumper.dangleAuto': { sound: 'dangle', delay: 120, skipIfLocked: true },  // the same, on the bumpers that play with no tap (direct links, free play)
    'cutscene.start':    { sound: 'tvOn', delay: 350 },  // every cutscene; peaks as the scanline opens to the full panel
    'cutscene.next':     'clickNext', // Next to the following scene; no click on the last Next of any cutscene
    'cutscene.skip':     null,       // SKIP INTRO: no click (was 'clickGlitch')
    'cutscene.finish':   'wiggleworm', // an intro's last Next or SKIP INTRO, every theme except Undermurk
    'cutscene.finishChime': null,    // SKIP INTRO, with cutscene.finish: no chime (was 'chime')
    'cutscene.letter':   'typewriter', // intro and outro cutscenes
    'cutscene.voiceJJDingo': { sound: 'voice-JJDingo', delay: 50 }, // once per J.J. Dingo line in an intro or outro, replacing the letter sounds
    'cutscene.voiceBadguy': { sound: 'voice-badguy', delay: 50 }, // once per textStyle: 'badguy' line, replacing the letter sounds
    // Animations tagged sfx: '<event>' in a cutscene file (Midnight Mall). In = coming from off screen.
    'cutscene.moveIn':   { sound: 'whoosh-cutscene', delay: 200 },
    'cutscene.move':     { sound: 'whoosh-cutscene', delay: 75 },  // on-screen moves and exits
    'cutscene.moveBadguyIn': { sound: 'whoosh-badguy', delay: 200 },
    'cutscene.moveBadguy': { sound: 'whoosh-badguy', delay: 75 },  // bad guy on-screen moves and exits
    'cutscene.moveBadguyFail': 'whoosh-badguy',  // the fail cutscene, no delay
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
  // A cutscene file can also tag an animation with startLoop: '<key>' or stopLoop: '<key>'.
  loops: {
    'dingo-punks-loop': { sound: 'dingo-punks-loop', delayMs: 500, fadeOutMs: 50 },  // Midnight Mall intro, from the first scene until the bad guys crash in (or SKIP INTRO); 50ms cuts it off without a pop
    'background-creepy': { sound: 'background-creepy', fadeInMs: 300, fadeOutMs: 500 },  // while the Midnight Mall bad guys are on screen, intro and fail
    debrief: { sound: 'dingo-punks-end', delayMs: 500, fadeInMs: 300, fadeOutMs: 500 },  // whole debrief page; delayMs lines up with the outcome image coming in
    'background-crickets': { sound: 'background-crickets', fadeInMs: 1000, fadeOutMs: 1000 },  // Midnight Mall intro from J.J. Dingo's return after the bad guys, the map view, and outro
  },

  // The map view (the challenge nodes and timer) loops one of `loops` per theme folder.
  // It starts as the map builds and ends when the outro or fail cutscene starts; if that
  // cutscene starts the same loop, it carries straight on instead. A theme left out is quiet.
  // It fades out while a challenge is open and back in on return to the map (loopFade).
  mapLoops: {
    'escape-the-midnight-mall': 'background-crickets',
  },
  loopFade: { outMs: 500, inMs: 1000 },

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
      // dangle is here because the bumper plays before a code is entered.
      'index.html':      { sounds: ['click', 'key', 'select', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'clickWood', 'slapPaper', 'dangle'], delay: 0 },
      'answer-key.html': { sounds: ['click', 'key', 'select', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'clickWood', 'slapPaper'], delay: 0 },
      'free-play.html':  { sounds: ['click', 'open', 'close', 'lock', 'whoosh', 'clickWood', 'slapPaper', 'dangle'], delay: 0 },
      'debrief.html':    { sounds: '*', delay: 0 },
    },
    onPinInput:      { sounds: '*', delay: 0 },   // code accepted; all SFX together are ~100 KB
    onUndermurkPage: { sounds: '*', delay: 0 },
    onCutsceneStart: { sounds: ['wiggleworm'], delay: 0 },  // fired as an intro starts, so the song is ready by its end
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
    { match: '.cutscene-next-button, .code-box-button', event: null }, // Next and Finish: no click
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
  //   js/global-menu.js  .global-menu__sound-toggle  "none"  (plays ui.toggle itself)
};
