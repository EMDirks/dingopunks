// Every decision about sound lives in this file: which file plays, how loud,
// for which game event, and when it loads. js/sound.js only does what this
// file says. Game code fires events (Sound.event('ui.click')); it never names
// a sound file, so remapping or silencing anything is an edit here.

// Character voice clip sets. Each character's voice-* sound below picks one set
// (src: VOICE_CLIPS.<set>), plays a clip from it at random and sets its own pitch.
// Which character uses which sound is set in `characterVoices`. To add a set, drop its
// files in assets/audio/voice/<set>/ as <set>-1, <set>-2, … and list it here.
const voiceSet = (name, count) => Array.from({ length: count }, (_, i) => `voice/${name}/${name}-${i + 1}`);
const VOICE_CLIPS = {
  mumble:  voiceSet('mumble', 5),   // the default mumbles (J.J. Dingo, bad guys)
  woman:   voiceSet('woman', 5),
  man:     voiceSet('man', 5),
  andro:   voiceSet('andro', 5),
  monster: voiceSet('monster', 5),
  girl:    voiceSet('girl', 5),
  boy:     voiceSet('boy', 5),
  robot:   voiceSet('robot', 5),
  woof:    voiceSet('woof', 3),
  old:     voiceSet('old', 5),
};

// A theme's map view and outro loop: lazy (a big file, loaded as the theme's intro starts, see
// mapLoops), fading 300ms in and 1s out.
const ambience = (file, volume) => ({ src: ['ambience/' + file], volume, lazy: true, loop: { fadeInMs: 300, fadeOutMs: 1000 } });

// Everything the debrief page plays (js/debrief.js, js/dpaam-debrief.js and the global menu),
// loaded there instead of '*'. clap and the song are lazy, so naming them here is what loads them.
const DEBRIEF_SOUNDS = ['click', 'open', 'close', 'lock', 'toggle', 'click-wood', 'whoosh', 'whoosh-scene',
  'slap-paper', 'slap-metal', 'score-tick', 'medal-1', 'medal-2', 'medal-3', 'medal-4', 'medal-5',
  'rank-chime', 'clap', 'music-dingo-punks-debrief'];

const SOUND_CONFIG = {
  enabled: true,                 // master switch for the whole site
  masterVolume: 1.5625,          // multiplies every sound and loop; 1 = the mix below as written
  basePath: 'assets/audio/',     // src names start with their folder: sfx/<ui|feedback|motion|cutscene>/ for one-shots, voice/ for character voices, music/ for songs, ambience/ for background loops
  formats: ['ogg'],              // ogg only (readme/sound-cleanup.md, Decision 1); a browser that can't decode it gets no sound
  vocalizeEveryMs: 100,           // default ms between clips for a vocalize: true voice; a sound's own vocalizeEveryMs overrides it
  vocalizeInGame: true,         // every in-game (activity scene) character voice vocalizes, as if it had vocalize: true; vocalize: false on a sound opts it out. Cutscene voices only vocalize with their own vocalize: true
  npcVoiceMaxClips: 3,            // a number caps every NPC's vocalized voice (every characterVoices table but player, cutscene speakers included) at that many clips per line; a short line still stops early. null = no cap. An entry's own clips overrides it

  // name → file(s) + mix. src are base names (the extension comes from `formats`), or a
  // full file name like 'correct.wav' to use that file as is. Several = random pick per play, never the same one twice in a row.
  // pitch: [min, max] playback rate. maxVoices: drop a play if this many are already sounding.
  // lazy: true leaves a big file out of sounds: '*', so it only loads where `preload` names it.
  // ignoreMute: true plays it even while the student has Sound effects or Music & ambience off.
  // vocalize: true (character voices) keeps talking for the whole line as it types: a new random
  // clip from src every vocalizeEveryMs (default: the top-level vocalizeEveryMs), overlapping, instead of one clip per line.
  // fadeOutMs: cut a one-shot short, fading to silence over this long after fadeOutAfterMs at full volume.
  // Two categories, each with its own global menu toggle:
  //   Sound effects: everything not listed below.
  //   Music & ambience: every sound with a `loop` field (always, no flag needed), plus any
  //   one-shot marked music: true.
  sounds: {

    // Use for toggled systems with an open/close state
    open:    { src: ['sfx/ui/open'],                    volume: 0.3 },
    close:   { src: ['sfx/ui/close'],                    volume: 0.225 },

    // Use for selecting an item with focus state
    select:  { src: ['sfx/ui/click'],                 volume: 0.2 },

    click:   { src: ['sfx/ui/click'],                     volume: 0.2 },
    'code-box': { src: ['sfx/ui/close'],                      volume: 0.2 },                 // tapping a game code box (splash) or a secret code box (in-game)
    'code-box-soft': { src: ['sfx/ui/close'],                  volume: 0.15 },                // code-box 25% softer: tapping a crossword or cryptogram cell (in-game)
    choice:  { src: ['sfx/ui/toggle'],                     volume: 0.1 },                 // picking a multiple choice answer: the settings ON / OFF sound (toggle), but it respects mute
    key:     { src: ['sfx/ui/click'], volume: 0.2 },                // code keyboard
    'click-wood': { src: ['sfx/ui/click-wood'],               volume: 0.1 },                 // global menu student cards sliding in
    'click-wood-soft': { src: ['sfx/ui/click-wood'],        volume: 0.075 },               // Undermurk player arrow: click-wood, 25% quieter
    'slap-paper': { src: ['sfx/motion/card-slide'], volume: 0.2, pitch: [0.94, 1.06] },                 // splash thumbnail spinning in
    'slap-metal': { src: ['sfx/motion/wood-slam'],        volume: 0.05 },                 // game timer landing
    tab:     { src: ['sfx/ui/tab'],                   volume: 0.5 },                 // Undermurk setup tabs
    toggle:  { src: ['sfx/ui/toggle'],                    volume: 0.1, ignoreMute: true }, // global menu Audio toggle; ignoreMute, so it clicks on and off
    blip:    { src: ['sfx/ui/blip'], volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 }, // activity scene dialogue
    typewriter: { src: ['sfx/cutscene/typewriter'], volume: 0.2, pitch: [1.3,1.4], maxVoices: 4 }, // cutscene text (outro and fail, per letter)
    'typewriter-soft': { src: ['sfx/cutscene/typewriter'], volume: 0.1, pitch: [1.3,1.4], maxVoices: 4 }, // intro cutscenes' typewriter run: typewriter, 50% softer
    'voice-jj-dingo': { src: VOICE_CLIPS.mumble, volume: 0.43, pitch: [0.8,1] },              // J.J. Dingo (characterVoices.cutscene); pitch: [min, max], 1 = normal
    'voice-jj-dingo-intro': { src: VOICE_CLIPS.mumble, volume: 0.43, pitch: [0.9, 1.1], vocalize: true }, // J.J. Dingo in intro cutscenes (characterVoices.cutscene['intro:J.J. DINGO'])
    'voice-badguy': { src: VOICE_CLIPS.mumble, volume: 0.51, pitch: [0.6,0.7] },              // bad guy lines (characterVoices.cutscene); pitch: [min, max], 1 = normal
    // In-game (activity scene) voices from here to voice-lavender are at 0.32: 25% under J.J. Dingo's 0.43 (both 15% softer on 2026-11-10).
    // Midnight Mall challenge characters (activity scene). Starting pitches, to tune by ear.
    'voice-topsy':     { src: VOICE_CLIPS.girl, volume: 0.32, pitch: [0.8, 1.2] },   // Terrible Topsy
    'voice-robustus':  { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [0.9, 1.1] },  // Robustus the Great
    'voice-shortnose': { src: VOICE_CLIPS.man, volume: 0.32, pitch: [1.1, 1.2], vocalize: true },  // Martin Shortnose
    'voice-prisma':    { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.9, 1.1], vocalize: true},  // Prisma
    'voice-zeeb':      { src: VOICE_CLIPS.andro,  volume: 0.32, pitch: [0.9, 1.1] },  // Zeeb
    // Every other theme's challenge characters. Placeholder pitches, to tune by ear. A character in
    // more than one theme shares one voice.
    'voice-basil-rabbit':           { src: VOICE_CLIPS.man, volume: 0.32, pitch: [1.2, 1.4] },  // Basil Rabbit
    'voice-grumblegrub':            { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [0.9, 1] },  // Grumblegrub (Beehive Blitz, Cupid's Countdown)
    'voice-queen-bella':            { src: VOICE_CLIPS.old, volume: 0.32, pitch: [1, 1.1] },  // Queen Bella
    'voice-riff-wingman':           { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.9, 1] },  // Riff Wingman
    'voice-sunny-snap':             { src: VOICE_CLIPS.girl, volume: 0.32, pitch: [1, 1.2] },  // Sunny Snap (Beehive Blitz, Rainbow Rescue)
    'voice-chef-gumbo':             { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [1.2, 1.4] },  // Chef Gumbo
    'voice-driftwood-dan':          { src: VOICE_CLIPS.andro, volume: 0.32, pitch: [1, 1.2] },  // Driftwood Dan
    'voice-fishbeard':              { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [1, 1.2] },  // Fishbeard (Camp Calamari, The Yeti and the Yam)
    'voice-madame-mystica':         { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.9, 1.2] },  // Madame Mystica (Camp Calamari, Rainbow Rescue)
    'voice-melodina':               { src: VOICE_CLIPS.robot, volume: 0.32, pitch: [1.3, 1.7] },  // Melodina
    'voice-broken-animatronic':     { src: VOICE_CLIPS.robot, volume: 0.32, pitch: [1.3, 1.7] },  // Broken Animatronic
    'voice-stefan-sage':            { src: VOICE_CLIPS.old, volume: 0.32, pitch: [0.6, 0.9] },  // Stefan Sage
    'voice-tater-durant':           { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.9, 1.1] },  // Tater Durant
    'voice-cornelius-rabbit':       { src: VOICE_CLIPS.man, volume: 0.32, pitch: [1.2, 1.4] },  // Cornelius Rabbit
    'voice-eva':                    { src: VOICE_CLIPS.robot, volume: 0.32, pitch: [1.1, 1.3] },  // Eva
    'voice-shelly-sunny-and-yoko':  { src: VOICE_CLIPS.girl, volume: 0.32, pitch: [1.2, 1.7] },  // Shelly, Sunny and Yoko
    'voice-sir-eggbert':            { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.8, 1] },  // Sir Eggbert (Eggworld Emergency, Rainbow Rescue)
    'voice-ziggy-voss':             { src: VOICE_CLIPS.andro, volume: 0.32, pitch: [1.0, 1.3] },  // Ziggy Voss
    'voice-final-bell-1':           { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.9, 1.2] },  // Final Bell Breakout character-1
    'voice-final-bell-2':           { src: VOICE_CLIPS.boy, volume: 0.32, pitch: [0.8, 1.2] },  // Final Bell Breakout character-2
    'voice-final-bell-3':           { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [0.9, 1.1] },  // Final Bell Breakout character-3
    'voice-final-bell-4':           { src: VOICE_CLIPS.andro, volume: 0.32, pitch: [1.3, 1.5] },  // Final Bell Breakout character-4
    'voice-final-bell-5':           { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [1.8, 2] },  // Final Bell Breakout character-5
    'voice-boiler-belle':           { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.8, 1] },  // Boiler Belle
    'voice-count-visage':           { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.8, 1] },  // Count Visage
    'voice-miss-tally':             { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [1, 1.3] },  // Miss Tally
    'voice-pippo-fizzlepop':        { src: VOICE_CLIPS.boy, volume: 0.32, pitch: [0.8, 1.2] },  // Pippo Fizzlepop (Funhouse Fright, The Yeti and the Yam)
    'voice-plucky-the-clown':       { src: VOICE_CLIPS.old, volume: 0.32, pitch: [0.9, 1.1] },  // Plucky the Clown
    'voice-paradise-1':             { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [1, 1.3] },  // Paradise Panic character1
    'voice-paradise-2':             { src: VOICE_CLIPS.old, volume: 0.32, pitch: [0.8, 1] },  // Paradise Panic character2
    'voice-paradise-3':             { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.9, 1.1] },  // Paradise Panic character3
    'voice-paradise-4':             { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.9, 1.1] },  // Paradise Panic character4
    'voice-paradise-5':             { src: VOICE_CLIPS.girl, volume: 0.32, pitch: [1.1, 1.3] },  // Paradise Panic character5
    'voice-banana-gunk-jr':         { src: VOICE_CLIPS.robot, volume: 0.32, pitch: [0.8, 1] },  // Banana Gunk Jr.
    'voice-gribba':                 { src: VOICE_CLIPS.old, volume: 0.32, pitch: [1, 1.2] },  // Gribba
    'voice-king-kevin':             { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [1.8, 2] },  // King Kevin
    'voice-merriwig':               { src: VOICE_CLIPS.girl, volume: 0.32, pitch: [0.9, 1.1] },  // Merriwig
    'voice-twisted-tori':           { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.9, 1.1] },  // Twisted Tori
    'voice-charm':                  { src: VOICE_CLIPS.robot, volume: 0.32, pitch: [0.8, 1.2] },  // Charm
    'voice-sparklepants':           { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [1.2, 1.4] },  // Sparklepants (Rainbow Rescue, Turkey Takedown)
    'voice-candlewick':             { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.7, 0.9] },  // Candlewick
    'voice-crispin-the-cider-sage': { src: VOICE_CLIPS.old, volume: 0.32, pitch: [0.6, 0.9] },  // Crispin the Cider Sage
    'voice-hollow-jack':             { src: VOICE_CLIPS.robot, volume: 0.32, pitch: [0.8, 1.2] },  // Hollow Jack
    'voice-mabel-mallow':           { src: VOICE_CLIPS.andro, volume: 0.32, pitch: [1.3, 1.5] },  // Mabel Mallow
    'voice-the-gnomads':            { src: VOICE_CLIPS.boy, volume: 0.32, pitch: [1, 1.4] },  // The Gnomads
    'voice-dr-seraphina':           { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.8, 1.1] },  // Dr. Seraphina
    'voice-tater-drift':            { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.9, 1.1] },  // Tater Drift
    'voice-the-frozen-knight':      { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [0.7, 0.9] },  // The Frozen Knight
    'voice-bix-gribble':            { src: VOICE_CLIPS.woman, volume: 0.32, pitch: [1.2, 1.4] },  // Bix Gribble
    'voice-ched-muckley':           { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.9, 1.1] },  // Ched Muckley
    'voice-dale':                   { src: VOICE_CLIPS.andro, volume: 0.32, pitch: [0.7, 0.8] },  // Dale
    'voice-lady-thistledown':       { src: VOICE_CLIPS.old, volume: 0.32, pitch: [1.1, 1.3] },  // Lady Thistledown
    'voice-mister-lump':            { src: VOICE_CLIPS.boy, volume: 0.32, pitch: [0.6, 0.8] },  // Mister Lump
    'voice-patchpaw':               { src: VOICE_CLIPS.andro, volume: 0.32, pitch: [1.0, 1.2] },  // Patchpaw
    'voice-seaweed-sally':          { src: VOICE_CLIPS.girl, volume: 0.32, pitch: [0.9, 1.1] },  // Seaweed Sally
    'voice-sir-bobble':             { src: VOICE_CLIPS.man, volume: 0.32, pitch: [0.9, 1.1] },  // Sir Bobble
    'voice-yo-yeti':                { src: VOICE_CLIPS.monster, volume: 0.32, pitch: [0.9, 1.1] },  // Yo Yeti
    // The player-selected characters (characterVoices.player): one random clip when picked at
    // character select, and the vocalize engine for their replies in the activity scene.
    // Two pairs share a clip set, split by pitch (Mint/Hydrax, Antares/Lavender).
    'voice-mint':     { src: VOICE_CLIPS.woman,   volume: 0.32, pitch: [1, 1.1] },    // Mint
    'voice-antares':  { src: VOICE_CLIPS.man,   volume: 0.32, pitch: [0.9, 1.1] },  // Antares
    'voice-tubu':     { src: VOICE_CLIPS.boy,     volume: 0.32, pitch: [0.9, 1.1] },  // Tu-Bu
    'voice-jelly':    { src: VOICE_CLIPS.girl,    volume: 0.32, pitch: [0.9, 1.1] },  // Jelly
    'voice-targ':     { src: VOICE_CLIPS.robot,   volume: 0.32, pitch: [0.9, 1.1] },    // T.O.R.G.
    'voice-winston':  { src: VOICE_CLIPS.monster,     volume: 0.32, pitch: [0.9, 1.1] },  // Winston
    'voice-hydrax':   { src: VOICE_CLIPS.andro,   volume: 0.32, pitch: [0.9, 1.1] },    // Hydrax
    'voice-lavender': { src: VOICE_CLIPS.woof,    volume: 0.32, pitch: [0.9, 1.1] },    // Lavender
    whoosh:  { src: ['sfx/motion/whoosh'],                     volume: 0.3 },                 // splash swipe-out transitions
    'whoosh-scene': { src: ['sfx/motion/whoosh'],              volume: 0.225 },               // activity scene character and player sliding in: whoosh, 25% quieter
    clap:    { src: ['sfx/feedback/clap'],          volume: 0.3, lazy: true },      // the debrief's rank coming in, after its chime; lazy, preloaded on the debrief only
    'whoosh-cutscene': { src: ['sfx/motion/whoosh-soft'],           volume: 0.15 },                // Midnight Mall intro character moves
    'whoosh-badguy': { src: ['sfx/motion/crash'],        volume: 0.105 },                // bad guy slamming in/out of cutscenes
    chime:   { src: ['sfx/feedback/chime'],           volume: 0.04 },                 // all characters selected
    dangle:  { src: ['sfx/motion/metal-dangle'],     volume: 0.05 },                 // Dingo Punks bumper logo swinging loose
    'whoosh-node': { src: ['sfx/motion/whoosh-node'],    volume: 0.2 },                 // node tapped, challenge modal scaling in
    'tv-on':    { src: ['sfx/cutscene/tv-on'],               volume: 0.1 },                 // cutscene coming in
    'click-next': { src: ['sfx/ui/click'],       volume: 0.2 },                // cutscene Next, moving to the next scene

    lock:    { src: ['sfx/ui/locked'],                    volume: 0.3 },                 // placeholder until a lock sound is added
    correct: { src: ['sfx/feedback/coin'],                volume: 0.1 },
    bell:    { src: ['sfx/feedback/bell'],      volume: 0.05, fadeOutAfterMs: 200, fadeOutMs: 1000 },                 // Undermurk: a right answer (undermurk.correct)
    // Debrief medals lighting up one by one as the score meter fills: the correct coin,
    // a step higher each time (fixed pitch, so the run always climbs the same way).
    'medal-1': { src: ['sfx/feedback/coin'], volume: 0.1, pitch: [0.9, 0.9] },
    'medal-2': { src: ['sfx/feedback/coin'], volume: 0.1, pitch: [1.01, 1.01] },
    'medal-3': { src: ['sfx/feedback/coin'], volume: 0.1, pitch: [1.125, 1.125] },
    'medal-4': { src: ['sfx/feedback/coin'], volume: 0.1, pitch: [1.2, 1.2] },
    'medal-5': { src: ['sfx/feedback/coin'], volume: 0.1, pitch: [1.35, 1.35] },
    'rank-chime': { src: ['sfx/feedback/chime'], volume: 0.06 },                 // debrief: the rank popping up, the all-ready chime a little louder
    'rank-chime-soft': { src: ['sfx/feedback/chime'], volume: 0.03 },          // Undermurk new level: rank-chime at half volume
    'score-tick': { src: ['sfx/ui/blip'], volume: 0.06, pitch: [0.95, 1.05], maxVoices: 2 },  // debrief: the total score counting up
    wrong:   { src: ['sfx/feedback/error'],                  volume: 0.45 },

    // Enter the Undermurk (js/enter-the-undermurk.js). Starting levels, to tune by ear.
    tick:    { src: ['sfx/ui/tick'], volume: 0.15 },                                   // Undermurk: the question timer's last quarter, once a second

    // Songs and ambience. A sound with `loop` is started with Sound.startLoop(name), runs on the
    // music bus (Music & ambience) and is stopped with Sound.stopLoop(name). A cutscene file can
    // also tag an animation with startLoop: '<name>' or stopLoop: '<name>'.
    //   loop: { fadeInMs, fadeOutMs, delayMs, once }. delayMs counts from startLoop; once: true plays
    //   the file through one time instead of looping.
    // An intro song plays from the first scene through the last; when the intro ends (last Next or
    // SKIP INTRO) it keeps playing under the map view and fades out over fadeOutMs.
    'music-dingo-punks-intro':   { src: ['music/dingo-punks-intro'],   volume: 0.225, lazy: true, loop: { delayMs: 500, fadeOutMs: 5000 } },  // every theme's intro, from its first scene
    'music-dingo-punks-debrief': { src: ['music/dingo-punks-debrief'], volume: 0.2,   lazy: true, loop: { delayMs: 700, fadeOutMs: 500, once: true } },  // the debrief page, once through, hard start 700ms after the VIEW SCORE press (js/debrief.js)
    'music-undermurk-intro':     { src: ['music/undermurk-intro'],     volume: 0.15,  lazy: true, loop: { delayMs: 500, fadeOutMs: 5000 } },  // Enter the Undermurk's intro, fading out under the minigame's entrance
    'music-undermurk-end':       { src: ['music/undermurk-end'],       volume: 0.1,   lazy: true, loop: { fadeOutMs: 500, once: true } },  // the Undermurk end screen, from the "Your team..." line, after VICTORY / FAIL has left
    'ambience-creepy':           { src: ['ambience/creepy'],           volume: 0.1,   loop: { fadeInMs: 300, fadeOutMs: 500 } },  // the bad guys on screen in every fail cutscene; small, so not lazy
    // Each theme's map view and outro loop (mapLoops). The Enter the Undermurk minigame has none.
    'ambience-crickets':               ambience('crickets', 0.4),  // Escape the Midnight Mall
    'ambience-beehive-blitz':          ambience('beehive-blitz', 0.4),
    'ambience-camp-calamari':          ambience('camp-calamari', 0.2),
    'ambience-cupids-countdown':       ambience('cupids-countdown', 0.4),
    'ambience-eggworld-emergency':     ambience('eggworld-emergency', 0.15),
    'ambience-final-bell-breakout':    ambience('final-bell-breakout', 0.3),
    'ambience-funhouse-fright':        ambience('funhouse-fright', 0.08),
    'ambience-paradise-panic':         ambience('paradise-panic', 0.1),
    'ambience-pickles-playground':     ambience('pickles-playground', 0.3),
    'ambience-rainbow-rescue':         ambience('rainbow-rescue', 0.4),
    'ambience-the-hasty-harvest':      ambience('the-hasty-harvest', 0.3),
    'ambience-the-yeti-and-the-yam':   ambience('the-yeti-and-the-yam', 0.25),
    'ambience-turkey-takedown':        ambience('turkey-takedown', 0.12),
    'ambience-wacky-workshop':         ambience('wacky-workshop', 0.12),
  },

  // Game events → sound name. null = silent on purpose. Unknown events are ignored.
  // { sound, skipAfterMs } stays quiet if another sound started within skipAfterMs.
  // { sound, delay } plays that many ms after the event fires.
  // { sound, skipIfLocked: true } stays quiet until the player has tapped, for sounds
  // that aren't caused by a tap and would otherwise play late, on the first tap.
  events: {
    'ui.click':          'click',
    'ui.choice':         'choice',   // a multiple choice answer selected (not re-tapping the one already picked)
    'ui.key':            'key',
    'ui.input':          'code-box',  // tapping a game code box (splash) or a secret code box (in-game) (was 'select')
    'ui.inputPuzzle':    'code-box-soft', // tapping a crossword or cryptogram cell (in-game)
    'ui.tab':            'tab',
    'ui.setting':        'select',   // escape room setup tabs
    'ui.character':      'select',   // choosing a character
    'character.allReady': 'chime',   // last character picked, with "All punks ready!"
    'code.inputsIn':     'chime',    // the secret code boxes come in after the student answers every question
    'game.finish':       'click',    // the map's Finish button (launches the outro): the standard button click (was 'chime')
    'ui.toggle':         'toggle',
    'splash.transition': { sound: 'whoosh', delay: 280 },  // tuned by ear against the fly-out
    'splash.thumbnail':  { sound: 'slap-paper', delay: 100, skipIfLocked: true },  // 100ms into the 250ms spin-in; delay fine-tunes it
    'dialogue.letter':   'blip',     // activity scene dialogue
    'bumper.dangle':     { sound: 'dangle', delay: 200 },  // START pressed; 120 + the sound's 160ms clink lands just after the bottom of the logo's first swing (200ms)
    'bumper.dangleUndermurk': { sound: 'dangle', delay: 217 },  // START pressed on Enter the Undermurk's bumper: 70ms after the logo starts falling from its pop (42% of the 350ms bumper-logo-pop-slam in css/splash-new.css = 147ms)
    'bumper.dangleAuto': { sound: 'dangle', delay: 120, skipIfLocked: true },  // the same, on the bumpers that play with no tap (direct links, free play)
    'cutscene.start':    { sound: 'tv-on', delay: 350 },  // every cutscene; peaks as the scanline opens to the full panel
    'cutscene.next':     'click-next', // Next to the following scene
    'cutscene.nextLast': 'click',    // the last Next of any cutscene: the standard button click
    'cutscene.skip':     'click',    // SKIP INTRO: the standard button click
    'cutscene.finish':   null,       // an intro's last Next or SKIP INTRO: no one-shot; the intro song fades out instead (its loop's fadeOutMs)
    'cutscene.finishChime': null,    // SKIP INTRO, with cutscene.finish: no chime (was 'chime')
    'cutscene.letter':   'typewriter', // outro and fail cutscenes, per letter (intros use cutscene.typewriterRun)
    'cutscene.typewriterRun': 'typewriter-soft', // intro cutscenes: one of a fixed run per line, see cutsceneTypewriter
    // Animations tagged sfx: '<event>' in a cutscene file (Midnight Mall). In = coming from off screen.
    'cutscene.moveIn':   { sound: 'whoosh-cutscene', delay: 200 },
    'cutscene.move':     { sound: 'whoosh-cutscene', delay: 75 },  // on-screen moves and exits
    'cutscene.moveBadguyIn': { sound: 'whoosh-badguy', delay: 150 },  // delays land the crash with the slide's end and the screen shake (BADGUY_MOVE_MS in js/splash-new.js)
    'cutscene.moveBadguy': null,  // bad guy exits: silent; → { sound: 'whoosh-cutscene', delay: 75 } for the standard whoosh
    'cutscene.moveBadguyFail': { sound: 'whoosh-badguy', delay: 150 },  // the fail cutscene
    'scene.characterIn': { sound: 'whoosh-scene', delay: 50 },  // a challenge character sliding in from off screen (a 200ms slide)
    'scene.playerIn':    { sound: 'whoosh-scene', delay: 60 },  // the player's graphic sliding in (a 160ms slide)
    'scene.open':        null,  // a challenge character's dialogue box sliding in: silent, the voice clip carries it
    'activity.nodeIn':   { sound: 'slap-paper', delay: 100, skipIfLocked: true },  // each challenge node's first slide-in
    'activity.nodeOut':  { sound: 'slap-paper', delay: 100 },  // each node sliding out after Finish: the slide-in sound, 100ms after the node starts moving
    'timer.in':          { sound: 'slap-metal', delay: 50 },  // peaks as the timer lands; 50 + the sound's 150ms peak = the 200ms slam
    'activity.open':     'open',
    'scene.startWhoosh': { sound: 'whoosh-node', delay: 350, keepClick: true },  // the intro view's START (NEXT in preview), with its click: the node-open whoosh 50ms after the view starts sliding away (it holds 300ms first)
    'activity.close':    'close',
    'activity.openWhoosh':  { sound: 'whoosh-node', delay: 650 },  // node opened: just after the challenge modal starts scaling in (600ms after the tap)
    'activity.closeWhoosh': null,      // challenge modal closing back to the map; → 'whoosh' to turn on
    'hint.open':         'click',    // the hint button: the standard button click
    'hint.close':        'close',
    'ui.locked':         'lock',     // tapping a locked item (menu cards, the score page's Undermurk card)

    'modal.open':        'open',
    'modal.close':       'close',
    'modal.open.wrongCode': null,    // "That code didn't work" popup: only the wrong sound plays

    'menu.open':         'open',
    'menu.close':        'close',
    'menu.cardIn':       'click-wood', // once per student card, as it starts sliding in
    
    'access.correct':    { sound: 'correct', delay: 0 },  // fires as the code boxes pop gold; delay fine-tunes it
    'access.wrong':      'wrong',    // game code rejected (wrong, expired or couldn't be checked)
    'code.correct':      { sound: 'correct', delay: 200 },  // a secret code solved in-game: the same sound as access.correct, 200ms later
    'code.wrong':        'wrong',    // a secret code rejected in-game: the same sound as access.wrong
    'code.lockout':      null,       // reserved
    'debrief.victory':   null,       // reserved
    'debrief.fail':      null,       // reserved
    // The debrief's scoring sequence: js/dpaam-debrief.js (the live debrief, UNDERMURK on), and the
    // older js/debrief.js updateDebrief (UNDERMURK off). None of these come from a tap, so
    // skipIfLocked keeps them from all playing late on the first tap if audio is still locked.
    'debrief.outcomeOut': { sound: 'whoosh', delay: 240, keepClick: true },  // VICTORY / FAIL popping and shrinking away after VIEW SCORE (.image-outcome--leave, 320ms): 240ms in, 150ms after the shrink starts; keepClick keeps the button's own click
    'debrief.statIn':    { sound: 'slap-paper', delay: 100, skipIfLocked: true },  // each stat card dropping in (a 0.3s slide): the node slide-in sound, 100ms in
    'debrief.tierIn':    { sound: 'slap-metal', delay: 50, skipIfLocked: true },   // each card's tier capsule (Oof … Perfect) stamping on (0.2s): a thud that peaks (150ms into the sound) as it lands
    'debrief.scoreIn':   { sound: 'slap-paper', delay: 100, skipIfLocked: true },  // the total score card dropping in
    'debrief.scoreTick': { sound: 'score-tick', skipIfLocked: true, pitchRamp: [1, 1.5] },  // the total counting up; dpaam-debrief.js spaces these at least 70ms apart. pitchRamp: climbs from 1x to 1.5x pitch as the number rises
    'debrief.medal1':    { sound: 'medal-1', delay: 150, skipIfLocked: true },  // each new medal as the count passes its score: lands at the end of the 0.15s fly-in
    'debrief.medal2':    { sound: 'medal-2', delay: 150, skipIfLocked: true },
    'debrief.medal3':    { sound: 'medal-3', delay: 150, skipIfLocked: true },
    'debrief.medal4':    { sound: 'medal-4', delay: 150, skipIfLocked: true },
    'debrief.medal5':    { sound: 'medal-5', delay: 150, skipIfLocked: true },
    'debrief.rank':      { sound: 'rank-chime', delay: 50, skipIfLocked: true },  // the rank (ROOKIE … BRAINWAVE) popping in once the count finishes (0.2s)
    'debrief.bonusIn':   { sound: 'whoosh-scene', skipIfLocked: true },  // the Bonus Mission panel sliding in, 1s after the rank
    'debrief.rankClap':  { sound: 'clap', delay: 350, skipIfLocked: true },  // with debrief.rank: 300ms after the rank chime starts (chime at 50ms)
    'debrief.meterIn':   { sound: 'whoosh-scene', delay: 50, skipIfLocked: true }, // older debrief only: score meter and medal row sliding in
    // Enter the Undermurk (js/enter-the-undermurk.js). The setup, character select and intro
    // cutscene use the main game's events above; these are the minigame's own.
    // Entrance (umAnimateEntrance), each fired as its piece starts moving:
    'undermurk.frameIn':     { sound: 'slap-metal', delay: 50 },      // the frame slamming in from 2× (200ms): peaks as it lands, like timer.in
    'undermurk.stripIn':     { sound: 'whoosh-scene', delay: 50 },   // the player strip sliding down (200ms)
    'undermurk.cardIn':      { sound: 'slap-paper', delay: 50 },      // each player card sliding in (200ms)
    'undermurk.tierArtIn':   { sound: 'whoosh-node', delay: 100 },   // a level's art zooming in from 2× (500ms), at the entrance and on every level change
    'undermurk.tierBlockIn': { sound: 'slap-paper', delay: 50 },      // the level badge sliding up (200ms)
    'undermurk.indicatorIn': { sound: 'click-wood-soft', delay: 100 },   // the player indicator sliding in (300ms)
    'undermurk.indicatorMove': { sound: 'click-wood-soft', delay: 100 }, // the indicator sliding to the next player (0.35s)
    // Turns:
    'undermurk.panelIn':     { sound: 'whoosh-scene', delay: 50 },   // First Up / Next Up sliding in (300ms); no player voice in Enter the Undermurk
    'undermurk.start':       { sound: 'whoosh-node', delay: 350, keepClick: true },  // First Up / Next Up START, with its click: held 300ms like the activity scene's START, then the whoosh as the panel leaves
    'undermurk.questionIn':  { sound: 'click', delay: 30 },          // each question card sliding in (180ms): the standard click, not a whoosh
    'undermurk.bossIn':      null,                                   // a BOSS ROUND question sliding in: no extra sound, just questionIn like any other round
    'undermurk.correct':     'bell',                                 // a right answer (replaces the option's click)
    'undermurk.wrong':       'wrong',                                // a wrong answer (replaces the option's click)
    'undermurk.timeout':     'wrong',                                // the timer running out
    'undermurk.eliminated':  null,                                   // last life lost: silent
    'undermurk.timerTick':   'tick',                                 // once a second while the timer is in its last quarter
    'undermurk.tier':        { sound: 'rank-chime-soft', delay: 300 },     // a new level reached (boss beaten): with the new level's name coming in
    'undermurk.playerFinished': { sound: 'rank-chime', delay: 100 },  // a player beats the last level's boss
    // End (umShowEndScreen and the results reveal):
    'undermurk.hudOut':      'whoosh-scene',                         // the player strip and level badge leaving
    'undermurk.outcomeVictory': { sound: 'whoosh-node', delay: 150 }, // VICTORY smashing in: the node-open whoosh, 50ms after the smash starts (its animation waits 100ms)
    'undermurk.outcomeFail': { sound: 'whoosh-node', delay: 150 },    // FAIL smashing in: the same sound as VICTORY, no bad guy crash
    // The end song (music-undermurk-end) starts with the "Your team..." line, after VICTORY / FAIL leaves.
    'undermurk.outcomeOut':  'whoosh-scene',                         // the outcome image shrinking away before the results
    'undermurk.resultIn':    { sound: 'slap-paper', delay: 100 },     // each player's column and the team total rising in (300ms), like debrief.statIn
    'undermurk.scoreTick':   { sound: 'score-tick', pitchRamp: [1, 1.5] },  // each point as a score counts up (at least 45ms apart), climbing from 1x to 1.5x pitch from the first point to the last; each score (and the team total) climbs on its own
    'undermurk.teamTotal':   null,                                   // the team total finishing its count, 200ms before Play Again rises: silent, so only Play Again's chime marks the end
    'undermurk.playAgainIn': 'chime',                                // Play Again rising in (300ms) at the end of the results
    'undermurk.playAgain':   { sound: 'whoosh', keepClick: true },   // Play Again, with its click: the setup step sliding back in, after the button's 200ms shrink (playAgainHold). Only with UNDERMURK_BUMPER off; with it on, Play Again goes to the bumper with just the click
  },

  // Character voices: one sound as a line starts, in place of the letter blips.
  // Keyed by where the character speaks, then by the character:
  //   cutscene: characterSprite.name exactly as the cutscene file writes it, or 'badguy'
  //             for any line with textStyle: 'badguy' (checked before the name). In intro
  //             cutscenes, 'intro:<name>' is used in place of '<name>' when it's listed.
  //   <theme folder>: the challenge's intro.asset file name (assets.characterShopkeeper in
  //             the older activityArray format). The portrait, not the name, because the same
  //             character is named differently across challenges ("Terrible Topsy" / "Topsy").
  //   player:   the player-selected characters' asset file (characterArray in js/global.js),
  //             for their reply in every theme's activity scene.
  // Values take the same shapes as `events`: a sound name, { sound, delay, clips }, or null for a
  // speaker that is silent and also gets no letter blips. A character left out keeps the blips.
  characterVoices: {
    player: {   // delay: on top of the 300ms scene.js waits for the player's box to open. clips: 2 clips per reply, however long the line
      'mint.png':     { sound: 'voice-mint', delay: 50, clips: 2 },
      'antares.png':  { sound: 'voice-antares', delay: 50, clips: 2 },
      'tubu.png':     { sound: 'voice-tubu', delay: 50, clips: 2 },
      'jelly.png':    { sound: 'voice-jelly', delay: 50, clips: 2 },
      'targ.png':     { sound: 'voice-targ', delay: 50, clips: 2 },
      'winston.png':  { sound: 'voice-winston', delay: 50, clips: 2 },
      'hydrax.png':   { sound: 'voice-hydrax', delay: 50, clips: 2 },
      'lavender.png': { sound: 'voice-lavender', delay: 50, clips: 2 },
    },
    cutscene: {
      'J.J. DINGO': { sound: 'voice-jj-dingo', delay: 50 }, // intro and outro cutscenes only (not fail); js/splash-new.js keeps that rule
      'intro:J.J. DINGO': { sound: 'voice-jj-dingo-intro', delay: 50, clips: 1 }, // intro cutscenes: 1 clip per line, in place of the entry above
      badguy:       { sound: 'voice-badguy', delay: 50 },  // any cutscene
    },
    'escape-the-midnight-mall': {
      'topsy.png':              'voice-topsy',
      'robustus-the-great.png': 'voice-robustus',
      'noah-shortnose.png':     'voice-shortnose',
      'prisma.png':             'voice-prisma',
      'zeeb.png':               'voice-zeeb',
    },
    'beehive-blitz': {
      'basil-rabbit.png': 'voice-basil-rabbit',
      'grumblegrub.png':  'voice-grumblegrub',
      'queen-bella.png':  'voice-queen-bella',
      'riff-wingman.png': 'voice-riff-wingman',
      'sunny-snap.png':   'voice-sunny-snap',
    },
    'camp-calamari': {
      'chef-gumbo.png':     'voice-chef-gumbo',
      'driftwood-dan.png':  'voice-driftwood-dan',
      'fishbeard.png':      'voice-fishbeard',
      'madame-mystica.png': 'voice-madame-mystica',
      'melodina.png':       'voice-melodina',
    },
    'cupids-countdown': {
      'broken-animatronic.png': 'voice-broken-animatronic',
      'grumblegrub.png':        'voice-grumblegrub',
      'stefan-sage.png':        'voice-stefan-sage',
      'tater-durant.png':       'voice-tater-durant',
      'topsy.png':              'voice-topsy',
    },
    'eggworld-emergency': {
      'cornelius-rabbit.png':      'voice-cornelius-rabbit',
      'eva.png':                   'voice-eva',
      'shelly-sunny-and-yoko.png': 'voice-shelly-sunny-and-yoko',
      'sir-eggbert.png':           'voice-sir-eggbert',
      'ziggy-voss.png':            'voice-ziggy-voss',
    },
    'final-bell-breakout': {
      'character-1.png': 'voice-final-bell-1',
      'character-2.png': 'voice-final-bell-2',
      'character-3.png': 'voice-final-bell-3',
      'character-4.png': 'voice-final-bell-4',
      'character-5.png': 'voice-final-bell-5',
    },
    'funhouse-fright': {
      'boiler-belle.png':     'voice-boiler-belle',
      'count-visage.png':     'voice-count-visage',
      'miss-tally.png':       'voice-miss-tally',
      'pippo-fizzlepop.png':  'voice-pippo-fizzlepop',
      'plucky-the-clown.png': 'voice-plucky-the-clown',
    },
    'paradise-panic': {
      'character1.png': 'voice-paradise-1',
      'character2.png': 'voice-paradise-2',
      'character3.png': 'voice-paradise-3',
      'character4.png': 'voice-paradise-4',
      'character5.png': 'voice-paradise-5',
    },
    'pickles-playground': {
      'banana-gunk-jr.png': 'voice-banana-gunk-jr',
      'gribba.png':         'voice-gribba',
      'king-kevin.png':     'voice-king-kevin',
      'merriwig.png':       'voice-merriwig',
      'twisted-tori.png':   'voice-twisted-tori',
    },
    'rainbow-rescue': {
      'charm.png':          'voice-charm',
      'madame-mystica.png': 'voice-madame-mystica',
      'sir-eggbert.png':    'voice-sir-eggbert',
      'sparklepants.png':   'voice-sparklepants',
      'sunny-snap.png':     'voice-sunny-snap',
    },
    'the-hasty-harvest': {
      'candlewick.png':             'voice-candlewick',
      'crispin-the-cider-sage.png': 'voice-crispin-the-cider-sage',
      'hollow-jack.png':            'voice-hollow-jack',
      'mabel-mallow.png':           'voice-mabel-mallow',
      'the-gnomads.png':            'voice-the-gnomads',
    },
    'the-yeti-and-the-yam': {
      'dr-seraphina.png':      'voice-dr-seraphina',
      'fishbeard.png':         'voice-fishbeard',
      'pippo-fizzlepop.png':   'voice-pippo-fizzlepop',
      'tater-drift.png':       'voice-tater-drift',
      'the-frozen-knight.png': 'voice-the-frozen-knight',
    },
    'turkey-takedown': {
      'bix-gribble.png':      'voice-bix-gribble',
      'ched-muckley.png':     'voice-ched-muckley',
      'dale.png':             'voice-dale',
      'lady-thistledown.png': 'voice-lady-thistledown',
      'sparklepants.png':     'voice-sparklepants',
    },
    'wacky-workshop': {
      'mister-lump.png':   'voice-mister-lump',
      'patchpaw.png':      'voice-patchpaw',
      'seaweed-sally.png': 'voice-seaweed-sally',
      'sir-bobble.png':    'voice-sir-bobble',
      'yo-yeti.png':       'voice-yo-yeti',
    },
  },

  // The map view (the challenge nodes and timer) loops one sound with a `loop` field per theme
  // folder; the values are sound names. Each theme's loop is preloaded as its intro cutscene
  // starts (addCutscene in js/splash-new.js), so it is ready when the map appears.
  // It starts as the map builds and ends when the outro or fail cutscene starts; if that
  // cutscene starts the same loop, it carries straight on instead. A theme left out is quiet.
  // It fades out while a challenge is open and back in on return to the map (loopFade).
  mapLoops: {
    'escape-the-midnight-mall': 'ambience-crickets',
    'beehive-blitz':        'ambience-beehive-blitz',
    'camp-calamari':        'ambience-camp-calamari',
    'cupids-countdown':     'ambience-cupids-countdown',
    'eggworld-emergency':   'ambience-eggworld-emergency',
    'final-bell-breakout':  'ambience-final-bell-breakout',
    'funhouse-fright':      'ambience-funhouse-fright',
    'paradise-panic':       'ambience-paradise-panic',
    'pickles-playground':   'ambience-pickles-playground',
    'rainbow-rescue':       'ambience-rainbow-rescue',
    'the-hasty-harvest':    'ambience-the-hasty-harvest',
    'the-yeti-and-the-yam': 'ambience-the-yeti-and-the-yam',
    'turkey-takedown':      'ambience-turkey-takedown',
    'wacky-workshop':       'ambience-wacky-workshop',
  },
  loopFade: { outMs: 2000, inMs: 1000 },

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
      // whoosh and slap-paper are here because the splash can reach them soon after onPinInput.
      // click-wood is here because the menu can open before a code is entered.
      // dangle is here because the bumper plays before a code is entered.
      'index.html':      { sounds: ['click', 'key', 'select', 'code-box', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'click-wood', 'slap-paper', 'dangle'], delay: 0 },
      'answer-key.html': { sounds: ['click', 'key', 'select', 'code-box', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'click-wood', 'slap-paper'], delay: 0 },
      'free-play.html':  { sounds: ['click', 'open', 'close', 'lock', 'whoosh', 'click-wood', 'slap-paper', 'dangle'], delay: 0 },
      'debrief.html':    { sounds: DEBRIEF_SOUNDS, delay: 0 },
    },
    onPinInput:      { sounds: '*', delay: 0 },   // code accepted
    // also: lazy sounds to load with '*' (the intro and end songs, so neither waits on its file)
    onUndermurkPage: { sounds: '*', also: ['music-undermurk-intro', 'music-undermurk-end'], delay: 0 },
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
    { match: '.machine-crossword-input, .machine-item-cryptogram-input', event: 'ui.inputPuzzle' }, // crossword and cryptogram cells (in-game): the code box sound, 25% softer, on release
    { match: '.access-input, .code-input', event: 'ui.input' }, // game code boxes (splash) and secret code boxes (in-game), on release
    { match: '.cutscene-next-button',                 event: null }, // cutscene Next: its sounds come from cutscene.next / cutscene.nextLast
    { match: '.code-box-button',                      event: 'game.finish' }, // the map's Finish (launches the outro)
    { match: '.tab-button-player-count-, .tab-button-activity-count-, ' +
             '.tab-button-time-limit-, .tab-button-hints-, ' +
             '.tab-button-undermurk-players-, .tab-button-undermurk-lives-, ' +
             '.tab-button-undermurk-speed-',                  event: 'ui.setting' }, // "Set up your escape room" tabs, and Undermurk's "Set up your game." tabs (the same sound)
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
    { match: '.access-input, .code-input, .machine-crossword-input, .machine-item-cryptogram-input', event: 'ui.key' },
  ],

  // Intro cutscenes: instead of a sound per letter, each line plays cutscene.typewriterRun
  // a set number of times in a row, `gapMs` apart (the typewriter clip is 70ms, so at 60ms each blip overlaps the last by 10ms),
  // starting as the text appears. Lines with a character voice play the voice instead.
  // counts: per scene, first scene first ([7, 10] = 7 in scene 1, 10 in scene 2); scenes past the list use `count`.
  cutsceneTypewriter: { sections: ['intro', 'introNoLimit', 'undermurkIntro'], counts: [7, 10], count: 7, gapMs: 60 },

  // Typewriter throttle: a blip every N visible letters, never closer than minGapMs
  // (preview runs the typewriter at 5 ms/letter — the gap keeps it from buzzing).
  dialogue: { every: 2, skip: ' .,!?\'"', minGapMs: 45 },

  // data-sfx used in game code (keep this list current):
  //   js/global.js       .button-close-modal, .activity-button-done  "activity.close"
  //                      (they close the activity 50ms after the click)
  //   js/global-menu.js  .global-menu__sound-toggle  "none"  (plays ui.toggle itself)
};
