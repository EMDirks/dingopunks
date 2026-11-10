// Every decision about sound lives in this file: which file plays, how loud,
// for which game event, and when it loads. js/sound.js only does what this
// file says. Game code fires events (Sound.event('ui.click')); it never names
// a sound file, so remapping or silencing anything is an edit here.

// Character voice clip sets. Each character's voice-* sound below picks one set
// (src: VOICE_CLIPS.<set>), plays a clip from it at random and sets its own pitch.
// Which character uses which sound is set in `characterVoices`. To add a set, drop its
// files in a folder under sfx/ and list them here.
const VOICE_CLIPS = {
  dodrio: [   // the default mumbles
    'sfx/554017__dodrio__dialogue_mumble_huh',
    'sfx/554018__dodrio__dialogue_mumble_heh',
    'sfx/554019__dodrio__dialogue_mumble_hah',
    'sfx/554020__dodrio__dialogue_mumble_haeh',
    'sfx/554023__dodrio__dialogue_mumble_huuh',
  ],
  woman: [
    'sfx/voice-clips-woman/voice-clip-woman-1',
    'sfx/voice-clips-woman/voice-clip-woman-2',
    'sfx/voice-clips-woman/voice-clip-woman-3',
    'sfx/voice-clips-woman/voice-clip-woman-4',
    'sfx/voice-clips-woman/voice-clip-woman-5',
  ],
  man: [
    'sfx/voice-clips-man/voice-clip-man-1',
    'sfx/voice-clips-man/voice-clip-man-2',
    'sfx/voice-clips-man/voice-clip-man-3',
    'sfx/voice-clips-man/voice-clip-man-4',
    'sfx/voice-clips-man/voice-clip-man-5',
  ],
  andro: [
    'sfx/voice-clip-andro/voice-clip-andro-1',
    'sfx/voice-clip-andro/voice-clip-andro-2',
    'sfx/voice-clip-andro/voice-clip-andro-3',
    'sfx/voice-clip-andro/voice-clip-andro-4',
    'sfx/voice-clip-andro/voice-clip-andro-5',
  ],
  monster: [
    'sfx/voice-clips-monster/voice-clip-monster-1',
    'sfx/voice-clips-monster/voice-clip-monster-2',
    'sfx/voice-clips-monster/voice-clip-monster-3',
    'sfx/voice-clips-monster/voice-clip-monster-4',
    'sfx/voice-clips-monster/voice-clip-monster-5',
  ],
  girl: [
    'sfx/voice-clips-girl/voice-clip-girl-1',
    'sfx/voice-clips-girl/voice-clip-girl-2',
    'sfx/voice-clips-girl/voice-clip-girl-3',
    'sfx/voice-clips-girl/voice-clip-girl-4',
    'sfx/voice-clips-girl/voice-clip-girl-5',
  ],
  boy: [
    'sfx/voice-clips-boy/voice-clip-boy-1',
    'sfx/voice-clips-boy/voice-clip-boy-2',
    'sfx/voice-clips-boy/voice-clip-boy-3',
    'sfx/voice-clips-boy/voice-clip-boy-4',
    'sfx/voice-clips-boy/voice-clip-boy-5',
  ],
  robot: [
    'sfx/voice-clips-robot/voice-clip-robot-1',
    'sfx/voice-clips-robot/voice-clip-robot-2',
    'sfx/voice-clips-robot/voice-clip-robot-3',
    'sfx/voice-clips-robot/voice-clip-robot-4',
    'sfx/voice-clips-robot/voice-clip-robot-5',
  ],
  woof: [
    'sfx/voice-clips-woof/voice-clip-woof-1',
    'sfx/voice-clips-woof/voice-clip-woof-2',
    'sfx/voice-clips-woof/voice-clip-woof-3',
  ],
  old: [
    'sfx/voice-clips-old/voice-clips-old-1',
    'sfx/voice-clips-old/voice-clips-old-2',
    'sfx/voice-clips-old/voice-clips-old-3',
    'sfx/voice-clips-old/voice-clips-old-4',
    'sfx/voice-clips-old/voice-clips-old-5',
  ],
};

const SOUND_CONFIG = {
  enabled: true,                 // master switch for the whole site
  masterVolume: 1.5625,          // multiplies every sound and loop; 1 = the mix below as written
  basePath: 'assets/audio/',     // src names start with their folder: sfx/ for one-shots, loop/ for looping music and ambience
  formats: ['ogg'],              // later: ['m4a', 'ogg'] — the first one the browser can play wins
  vocalizeEveryMs: 100,           // default ms between clips for a vocalize: true voice; a sound's own vocalizeEveryMs overrides it
  vocalizeInGame: true,         // every in-game (activity scene) character voice vocalizes, as if it had vocalize: true; vocalize: false on a sound opts it out. Cutscene voices only vocalize with their own vocalize: true

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
  //   Music & ambience: every loop in `loops` (always, no flag needed), plus the
  //   one-shots that play as a game starts or finishes, which are marked music: true.
  sounds: {

    // Use for toggled systems with an open/close state
    open:    { src: ['sfx/switch1'],                    volume: 0.3 },
    close:   { src: ['sfx/switch2'],                    volume: 0.225 },

    // Use for selecting an item with focus state
    select:  { src: ['sfx/switch3'],                 volume: 0.2 },

    click:   { src: ['sfx/switch3'],                     volume: 0.2 },
    codeBox: { src: ['sfx/switch2'],                      volume: 0.2 },                 // tapping a game code box (splash) or a secret code box (in-game)
    choice:  { src: ['sfx/switch9'],                     volume: 0.1 },                 // picking a multiple choice answer: the settings ON / OFF sound (toggle), but it respects mute
    key:     { src: ['sfx/switch3'], volume: 0.2 },                // code keyboard
    clickWood: { src: ['sfx/click-wood'],               volume: 0.1 },                 // global menu student cards sliding in
    'clickWood-soft': { src: ['sfx/click-wood'],        volume: 0.075 },               // Undermurk player arrow: clickWood, 25% quieter
    slapPaper: { src: ['sfx/card-slide-2'], volume: 0.2, pitch: [0.94, 1.06] },                 // splash thumbnail spinning in
    slapMetal: { src: ['sfx/match-wood-1'],        volume: 0.05 },                 // game timer landing
    tab:     { src: ['sfx/switch12'],                   volume: 0.5 },                 // Undermurk setup tabs
    toggle:  { src: ['sfx/switch9'],                    volume: 0.1, ignoreMute: true }, // global menu Sound effects and Music & ambience toggles; ignoreMute, so they click on and off
    blip:    { src: ['sfx/click2'], volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 }, // activity scene dialogue
    typewriter: { src: ['sfx/ken-blip-3'], volume: 0.2, pitch: [1.3,1.4], maxVoices: 4 }, // cutscene text
    'voice-JJDingo': { src: VOICE_CLIPS.dodrio, volume: 0.5, pitch: [0.8,1] },              // J.J. Dingo (characterVoices.cutscene); pitch: [min, max], 1 = normal
    'voice-badguy': { src: VOICE_CLIPS.dodrio, volume: 0.6, pitch: [0.5,0.6] },              // bad guy lines (characterVoices.cutscene); pitch: [min, max], 1 = normal
    // In-game (activity scene) voices from here to voice-lavender are at 0.375: 25% under the 0.5 the cutscene voices use.
    // Midnight Mall challenge characters (activity scene). Starting pitches, to tune by ear.
    'voice-topsy':     { src: VOICE_CLIPS.girl, volume: 0.375, pitch: [0.9, 1.1] },   // Terrible Topsy
    'voice-robustus':  { src: VOICE_CLIPS.monster, volume: 0.375, pitch: [0.9, 1.1] },  // Robustus the Great
    'voice-shortnose': { src: VOICE_CLIPS.man, volume: 0.375, pitch: [0.9, 1.1], vocalize: true },  // Martin Shortnose
    'voice-prisma':    { src: VOICE_CLIPS.woman, volume: 0.375, pitch: [0.9, 1.1], vocalize: true},  // Prisma
    'voice-zeeb':      { src: VOICE_CLIPS.andro,  volume: 0.375, pitch: [0.9, 1.1] },  // Zeeb
    // Every other theme's challenge characters. Placeholder pitches, to tune by ear. A character in
    // more than one theme shares one voice.
    'voice-basil-rabbit':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.9, 1.05] },  // Basil Rabbit
    'voice-grumblegrub':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.6, 0.75] },  // Grumblegrub (Beehive Blitz, Cupid's Countdown)
    'voice-queen-bella':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.1, 1.25] },  // Queen Bella
    'voice-riff-wingman':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.95, 1.1] },  // Riff Wingman
    'voice-sunny-snap':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.2, 1.35] },  // Sunny Snap (Beehive Blitz, Rainbow Rescue)
    'voice-chef-gumbo':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.7, 0.85] },  // Chef Gumbo
    'voice-driftwood-dan':          { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.8, 0.95] },  // Driftwood Dan
    'voice-fishbeard':              { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.65, 0.8] },  // Fishbeard (Camp Calamari, The Yeti and the Yam)
    'voice-madame-mystica':         { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.0, 1.15] },  // Madame Mystica (Camp Calamari, Rainbow Rescue)
    'voice-melodina':               { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.25, 1.4] },  // Melodina
    'voice-broken-animatronic':     { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.55, 0.7] },  // Broken Animatronic
    'voice-stefan-sage':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.85, 1.0] },  // Stefan Sage
    'voice-tater-durant':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.9, 1.05] },  // Tater Durant
    'voice-cornelius-rabbit':       { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.85, 1.0] },  // Cornelius Rabbit
    'voice-eva':                    { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.15, 1.3] },  // Eva
    'voice-shelly-sunny-and-yoko':  { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.3, 1.45] },  // Shelly, Sunny and Yoko
    'voice-sir-eggbert':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.75, 0.9] },  // Sir Eggbert (Eggworld Emergency, Rainbow Rescue)
    'voice-ziggy-voss':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.0, 1.15] },  // Ziggy Voss
    'voice-final-bell-1':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.8, 0.95] },  // Final Bell Breakout character-1
    'voice-final-bell-2':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.1, 1.25] },  // Final Bell Breakout character-2
    'voice-final-bell-3':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.65, 0.8] },  // Final Bell Breakout character-3
    'voice-final-bell-4':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.2, 1.35] },  // Final Bell Breakout character-4
    'voice-final-bell-5':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.95, 1.1] },  // Final Bell Breakout character-5
    'voice-boiler-belle':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.05, 1.2] },  // Boiler Belle
    'voice-count-visage':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.6, 0.75] },  // Count Visage
    'voice-miss-tally':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.15, 1.3] },  // Miss Tally
    'voice-pippo-fizzlepop':        { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.3, 1.45] },  // Pippo Fizzlepop (Funhouse Fright, The Yeti and the Yam)
    'voice-plucky-the-clown':       { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.2, 1.35] },  // Plucky the Clown
    'voice-paradise-1':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.8, 0.95] },  // Paradise Panic character1
    'voice-paradise-2':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.1, 1.25] },  // Paradise Panic character2
    'voice-paradise-3':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.65, 0.8] },  // Paradise Panic character3
    'voice-paradise-4':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.2, 1.35] },  // Paradise Panic character4
    'voice-paradise-5':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.95, 1.1] },  // Paradise Panic character5
    'voice-banana-gunk-jr':         { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.2, 1.35] },  // Banana Gunk Jr.
    'voice-gribba':                 { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.7, 0.85] },  // Gribba
    'voice-king-kevin':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.8, 0.95] },  // King Kevin
    'voice-merriwig':               { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.05, 1.2] },  // Merriwig
    'voice-twisted-tori':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.1, 1.25] },  // Twisted Tori
    'voice-charm':                  { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.25, 1.4] },  // Charm
    'voice-sparklepants':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.15, 1.3] },  // Sparklepants (Rainbow Rescue, Turkey Takedown)
    'voice-candlewick':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.0, 1.15] },  // Candlewick
    'voice-crispin-the-cider-sage': { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.75, 0.9] },  // Crispin the Cider Sage
    'voice-hollow-jack':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.6, 0.75] },  // Hollow Jack
    'voice-mabel-mallow':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.15, 1.3] },  // Mabel Mallow
    'voice-the-gnomads':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.3, 1.45] },  // The Gnomads
    'voice-dr-seraphina':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.05, 1.2] },  // Dr. Seraphina
    'voice-tater-drift':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.9, 1.05] },  // Tater Drift
    'voice-the-frozen-knight':      { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.6, 0.75] },  // The Frozen Knight
    'voice-bix-gribble':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.2, 1.35] },  // Bix Gribble
    'voice-ched-muckley':           { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.75, 0.9] },  // Ched Muckley
    'voice-dale':                   { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.85, 1.0] },  // Dale
    'voice-lady-thistledown':       { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.1, 1.25] },  // Lady Thistledown
    'voice-mister-lump':            { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.65, 0.8] },  // Mister Lump
    'voice-patchpaw':               { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.0, 1.15] },  // Patchpaw
    'voice-seaweed-sally':          { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [1.15, 1.3] },  // Seaweed Sally
    'voice-sir-bobble':             { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.85, 1.0] },  // Sir Bobble
    'voice-yo-yeti':                { src: VOICE_CLIPS.dodrio, volume: 0.375, pitch: [0.6, 0.75] },  // Yo Yeti
    // The player-selected characters (characterVoices.player): one random clip when picked at
    // character select, and the vocalize engine for their replies in the activity scene.
    // Two pairs share a clip set, split by pitch (Mint/Hydrax, Antares/Lavender).
    'voice-mint':     { src: VOICE_CLIPS.woman,   volume: 0.375, pitch: [0.9, 1.1] },    // Mint
    'voice-antares':  { src: VOICE_CLIPS.man,   volume: 0.375, pitch: [0.9, 1.1] },  // Antares
    'voice-tubu':     { src: VOICE_CLIPS.boy,     volume: 0.375, pitch: [0.9, 1.1] },  // Tu-Bu
    'voice-jelly':    { src: VOICE_CLIPS.girl,    volume: 0.375, pitch: [0.9, 1.1] },  // Jelly
    'voice-targ':     { src: VOICE_CLIPS.robot,   volume: 0.375, pitch: [0.9, 1.1] },    // T.O.R.G.
    'voice-winston':  { src: VOICE_CLIPS.monster,     volume: 0.375, pitch: [0.9, 1.1] },  // Winston
    'voice-hydrax':   { src: VOICE_CLIPS.andro,   volume: 0.375, pitch: [0.9, 1.1] },    // Hydrax
    'voice-lavender': { src: VOICE_CLIPS.woof,    volume: 0.375, pitch: [0.9, 1.1] },    // Lavender
    whoosh:  { src: ['sfx/swing1'],                     volume: 0.3 },                 // splash swipe-out transitions
    'whoosh-scene': { src: ['sfx/swing1'],              volume: 0.225 },               // activity scene character and player sliding in: whoosh, 25% quieter
    'whoosh-cutscene': { src: ['sfx/ken-whoosh-1'],           volume: 0.15 },                // Midnight Mall intro character moves
    'whoosh-badguy': { src: ['sfx/match-crash'],        volume: 0.07 },                 // Midnight Mall bad guy moves
    chime:   { src: ['sfx/zap-chime.mp3'],           volume: 0.04 },                 // all characters selected
    'background-creepy': { src: ['loop/background-creepy'], volume: 0.1 },                // Midnight Mall fail cutscene bad guy loop
    'background-crickets': { src: ['loop/free-crickets'],   volume: 0.4 },                // Midnight Mall map view and outro loop
    // Each theme's own map view and outro ambient loop. lazy: these are big files, so each loads only when its loop starts.
    'background-beehive-blitz':         { src: ['loop/beehive-blitz.wav'], volume: 0.4, lazy: true },
    'background-camp-calamari':         { src: ['loop/camp-calamari.wav'], volume: 0.2, lazy: true },
    'background-cupids-countdown':      { src: ['loop/cupids-countdown.wav'], volume: 0.4, lazy: true },
    'background-eggworld-emergency':    { src: ['loop/eggworld-emergency.wav'], volume: 0.15, lazy: true },
    'background-final-bell-breakout':   { src: ['loop/final-bell-breakout.wav'], volume: 0.3, lazy: true },
    'background-funhouse-fright':       { src: ['loop/funhouse-fright.wav'], volume: 0.08, lazy: true },
    'background-paradise-panic':        { src: ['loop/paradise-panic.wav'], volume: 0.1, lazy: true },
    'background-pickles-playground':    { src: ['loop/pickles-playground.wav'], volume: 0.3, lazy: true },
    'background-rainbow-rescue':        { src: ['loop/rainbow-rescue.mp3'], volume: 0.4, lazy: true },
    'background-the-hasty-harvest':     { src: ['loop/the-hasty-harvest.wav'], volume: 0.3, lazy: true },
    'background-the-yeti-and-the-yam':  { src: ['loop/the-yeti-and-the-yam'], volume: 0.25, lazy: true },
    'background-turkey-takedown':       { src: ['loop/turkey-takedown.wav'], volume: 0.2, lazy: true },
    'background-wacky-workshop':        { src: ['loop/wacky-workshop.mp3'], volume: 0.15, lazy: true },
    dangle:  { src: ['sfx/match-metal-dangle'],     volume: 0.05 },                 // Dingo Punks bumper logo swinging loose
    'whoosh-node': { src: ['sfx/match-call-2.wav'],    volume: 0.2 },                 // node tapped, challenge modal scaling in
    dialogueOpen: { src: ['sfx/match-open'],           volume: 0.2 },                 // challenge character's dialogue box sliding in
    tvOn:    { src: ['sfx/match-power-15'],               volume: 0.1 },                 // cutscene coming in
    clickGlitch: { src: ['sfx/match-glitch-1.wav'],     volume: 0.1 },                 // SKIP INTRO
    clickNext: { src: ['sfx/switch3'],       volume: 0.2 },                // cutscene Next, moving to the next scene

    'dingo-punks-end': { src: ['loop/dingo-punks-end'], volume: 0.2, lazy: true },   // song, played once on the debrief page (loops.debrief, once: true)
    'dingo-punks-loop': { src: ['loop/dingo-punks-loop'], volume: 0.225, lazy: true },   // song, looping in every theme's intro from its first scene (was 0.3); lazy, so it loads when the loop starts

    hint:    { src: ['sfx/switch18'],                   volume: 0.5 },
    lock:    { src: ['sfx/switch_005'],                    volume: 0.3 },                 // placeholder until a lock sound is added
    correct: { src: ['sfx/coin'],                volume: 0.1 },
    bell:    { src: ['sfx/match-bell.wav'],      volume: 0.05, fadeOutAfterMs: 200, fadeOutMs: 1000 },                 // Undermurk: a right answer (undermurk.correct); .wav until converted
    // Debrief medals lighting up one by one as the score meter fills: the correct coin,
    // a step higher each time (fixed pitch, so the run always climbs the same way).
    'medal-1': { src: ['sfx/coin'], volume: 0.1, pitch: [0.9, 0.9] },
    'medal-2': { src: ['sfx/coin'], volume: 0.1, pitch: [1.01, 1.01] },
    'medal-3': { src: ['sfx/coin'], volume: 0.1, pitch: [1.125, 1.125] },
    'medal-4': { src: ['sfx/coin'], volume: 0.1, pitch: [1.2, 1.2] },
    'medal-5': { src: ['sfx/coin'], volume: 0.1, pitch: [1.35, 1.35] },
    rankChime: { src: ['sfx/zap-chime.mp3'], volume: 0.06 },                 // debrief: the rank popping up, the all-ready chime a little louder
    'rankChime-soft': { src: ['sfx/zap-chime.mp3'], volume: 0.03 },          // Undermurk new level: rankChime at half volume
    scoreTick: { src: ['sfx/click2'], volume: 0.06, pitch: [0.95, 1.05], maxVoices: 2 },  // debrief: the total score counting up
    wrong:   { src: ['sfx/error_005'],                  volume: 0.45 },

    // Enter the Undermurk (js/enter-the-undermurk.js). Starting levels, to tune by ear.
    'enter-the-undermurk-end':  { src: ['loop/enter-the-undermurk-end'], volume: 0.1, lazy: true },   // Undermurk end screen song (loops['undermurk-end']), at dingo-punks-end's level; lazy, preloaded on the Undermurk page
    'enter-the-undermurk-loop': { src: ['loop/enter-the-undermurk-loop'], volume: 0.225, lazy: true },  // Undermurk intro song (loops['enter-the-undermurk-loop']), at dingo-punks-loop's level; lazy, preloaded on the Undermurk page
    tick:    { src: ['sfx/click3'], volume: 0.15 },                                   // Undermurk: the question timer's last quarter, once a second
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
    'ui.input':          'codeBox',  // tapping a game code box (splash) or a secret code box (in-game) (was 'select')
    'ui.tab':            'tab',
    'ui.setting':        'select',   // escape room setup tabs
    'ui.character':      'select',   // choosing a character
    'character.allReady': 'chime',   // last character picked, with "All punks ready!"
    'code.inputsIn':     'chime',    // the secret code boxes come in after the student answers every question
    'game.finish':       'click',    // the map's Finish button (launches the outro): the standard button click (was 'chime')
    'ui.toggle':         'toggle',
    'splash.transition': { sound: 'whoosh', delay: 280 },  // tuned by ear against the fly-out
    'splash.thumbnail':  { sound: 'slapPaper', delay: 100, skipIfLocked: true },  // 100ms into the 250ms spin-in; delay fine-tunes it
    'dialogue.letter':   'blip',     // activity scene dialogue
    'bumper.dangle':     { sound: 'dangle', delay: 200 },  // START pressed; 120 + the sound's 160ms clink lands just after the bottom of the logo's first swing (200ms)
    'bumper.dangleAuto': { sound: 'dangle', delay: 120, skipIfLocked: true },  // the same, on the bumpers that play with no tap (direct links, free play)
    'cutscene.start':    { sound: 'tvOn', delay: 350 },  // every cutscene; peaks as the scanline opens to the full panel
    'cutscene.next':     'clickNext', // Next to the following scene
    'cutscene.nextLast': 'click',    // the last Next of any cutscene: the standard button click
    'cutscene.skip':     'click',    // SKIP INTRO: the standard button click
    'cutscene.finish':   null,       // an intro's last Next or SKIP INTRO: no one-shot; the intro song fades out instead (its loop's fadeOutMs)
    'cutscene.finishChime': null,    // SKIP INTRO, with cutscene.finish: no chime (was 'chime')
    'cutscene.letter':   'typewriter', // outro and fail cutscenes, per letter (intros use cutscene.typewriterRun)
    'cutscene.typewriterRun': 'typewriter', // intro cutscenes: one of a fixed run per line, see cutsceneTypewriter
    // Animations tagged sfx: '<event>' in a cutscene file (Midnight Mall). In = coming from off screen.
    'cutscene.moveIn':   { sound: 'whoosh-cutscene', delay: 200 },
    'cutscene.move':     { sound: 'whoosh-cutscene', delay: 75 },  // on-screen moves and exits
    'cutscene.moveBadguyIn': { sound: 'whoosh-badguy', delay: 200 },
    'cutscene.moveBadguy': { sound: 'whoosh-badguy', delay: 75 },  // bad guy on-screen moves and exits
    'cutscene.moveBadguyFail': 'whoosh-badguy',  // the fail cutscene, no delay
    'scene.characterIn': { sound: 'whoosh-scene', delay: 50 },  // a challenge character sliding in from off screen (a 200ms slide)
    'scene.playerIn':    { sound: 'whoosh-scene', delay: 60 },  // the player's graphic sliding in (a 160ms slide)
    'scene.open':        null,  // a challenge character's dialogue box sliding in: silent, the voice clip carries it (was { sound: 'dialogueOpen', delay: 50 })
    'activity.nodeIn':   { sound: 'slapPaper', delay: 100, skipIfLocked: true },  // each challenge node's first slide-in
    'activity.nodeOut':  { sound: 'slapPaper', delay: 100 },  // each node sliding out after Finish: the slide-in sound, 100ms after the node starts moving
    'timer.in':          { sound: 'slapMetal', delay: 50 },  // peaks as the timer lands; 50 + the sound's 150ms peak = the 200ms slam
    'activity.open':     'open',
    'scene.startWhoosh': { sound: 'whoosh-node', delay: 350, keepClick: true },  // the intro view's START (NEXT in preview), with its click: the node-open whoosh 50ms after the view starts sliding away (it holds 300ms first)
    'activity.close':    'close',
    'activity.openWhoosh':  { sound: 'whoosh-node', delay: 650 },  // node opened: just after the challenge modal starts scaling in (600ms after the tap)
    'activity.closeWhoosh': null,      // challenge modal closing back to the map; → 'whoosh' to turn on
    'hint.open':         'click',    // the hint button: the standard button click (was 'hint')
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
    'code.correct':      { sound: 'correct', delay: 200 },  // a secret code solved in-game: the same sound as access.correct, 200ms later
    'code.wrong':        'wrong',    // a secret code rejected in-game: the same sound as access.wrong
    'code.lockout':      null,       // reserved
    'debrief.victory':   null,       // reserved
    'debrief.fail':      null,       // reserved
    // The debrief's scoring sequence: js/dpaam-debrief.js (the live debrief, UNDERMURK on), and the
    // older js/debrief.js updateDebrief (UNDERMURK off). None of these come from a tap, so
    // skipIfLocked keeps them from all playing late on the first tap if audio is still locked.
    'debrief.outcomeOut': { sound: 'whoosh', delay: 90, keepClick: true },  // VICTORY / FAIL popping and shrinking away after VIEW SCORE (.image-outcome--leave, 320ms): lands as the shrink starts, 90ms in; keepClick keeps the button's own click
    'debrief.statIn':    { sound: 'slapPaper', delay: 100, skipIfLocked: true },  // each stat card dropping in (a 0.3s slide): the node slide-in sound, 100ms in
    'debrief.tierIn':    { sound: 'slapMetal', delay: 50, skipIfLocked: true },   // each card's tier capsule (Oof … Perfect) stamping on (0.2s): a thud that peaks (150ms into the sound) as it lands
    'debrief.scoreIn':   { sound: 'slapPaper', delay: 100, skipIfLocked: true },  // the total score card dropping in
    'debrief.scoreTick': { sound: 'scoreTick', skipIfLocked: true, pitchRamp: [1, 1.5] },  // the total counting up; dpaam-debrief.js spaces these at least 70ms apart. pitchRamp: climbs from 1x to 1.5x pitch as the number rises
    'debrief.medal1':    { sound: 'medal-1', delay: 150, skipIfLocked: true },  // each new medal as the count passes its score: lands at the end of the 0.15s fly-in
    'debrief.medal2':    { sound: 'medal-2', delay: 150, skipIfLocked: true },
    'debrief.medal3':    { sound: 'medal-3', delay: 150, skipIfLocked: true },
    'debrief.medal4':    { sound: 'medal-4', delay: 150, skipIfLocked: true },
    'debrief.medal5':    { sound: 'medal-5', delay: 150, skipIfLocked: true },
    'debrief.rank':      { sound: 'rankChime', delay: 50, skipIfLocked: true },  // the rank (ROOKIE … BRAINWAVE) popping in once the count finishes (0.2s)
    'debrief.bonusIn':   { sound: 'whoosh-scene', skipIfLocked: true },  // the Bonus Mission panel sliding in, 1s after the rank
    'debrief.meterIn':   { sound: 'whoosh-scene', delay: 50, skipIfLocked: true }, // older debrief only: score meter and medal row sliding in
    // Enter the Undermurk (js/enter-the-undermurk.js). The setup, character select and intro
    // cutscene use the main game's events above; these are the minigame's own.
    // Entrance (umAnimateEntrance), each fired as its piece starts moving:
    'undermurk.frameIn':     { sound: 'slapMetal', delay: 50 },      // the frame slamming in from 2× (200ms): peaks as it lands, like timer.in
    'undermurk.stripIn':     { sound: 'whoosh-scene', delay: 50 },   // the player strip sliding down (200ms)
    'undermurk.cardIn':      { sound: 'slapPaper', delay: 50 },      // each player card sliding in (200ms)
    'undermurk.tierArtIn':   { sound: 'whoosh-node', delay: 100 },   // a level's art zooming in from 2× (500ms), at the entrance and on every level change
    'undermurk.tierBlockIn': { sound: 'slapPaper', delay: 50 },      // the level badge sliding up (200ms)
    'undermurk.indicatorIn': { sound: 'clickWood-soft', delay: 100 },   // the player indicator sliding in (300ms)
    'undermurk.indicatorMove': { sound: 'clickWood-soft', delay: 100 }, // the indicator sliding to the next player (0.35s)
    // Turns:
    'undermurk.panelIn':     { sound: 'whoosh-scene', delay: 50 },   // First Up / Next Up sliding in (300ms); the player's voice (characterVoices.player) plays with it
    'undermurk.start':       { sound: 'whoosh-node', delay: 350, keepClick: true },  // First Up / Next Up START, with its click: held 300ms like the activity scene's START, then the whoosh as the panel leaves
    'undermurk.questionIn':  { sound: 'click', delay: 30 },          // each question card sliding in (180ms): the standard click, not a whoosh
    'undermurk.bossIn':      null,                                   // a BOSS ROUND question sliding in: no extra sound, just questionIn like any other round
    'undermurk.correct':     'bell',                                 // a right answer (replaces the option's click)
    'undermurk.wrong':       'wrong',                                // a wrong answer (replaces the option's click)
    'undermurk.timeout':     'wrong',                                // the timer running out
    'undermurk.eliminated':  null,                                   // last life lost: silent
    'undermurk.timerTick':   'tick',                                 // once a second while the timer is in its last quarter
    'undermurk.tier':        { sound: 'rankChime-soft', delay: 300 },     // a new level reached (boss beaten): with the new level's name coming in
    'undermurk.playerFinished': { sound: 'rankChime', delay: 100 },  // a player beats the last level's boss
    // End (umShowEndScreen and the results reveal):
    'undermurk.hudOut':      'whoosh-scene',                         // the player strip and level badge leaving
    'undermurk.outcomeVictory': { sound: 'slapMetal', delay: 50 },   // VICTORY smashing in. Placeholder until a Success sound is added
    'undermurk.outcomeFail': { sound: 'slapMetal', delay: 50 },      // FAIL smashing in: the same sound as VICTORY, no bad guy crash
    // The end song (loops['undermurk-end']) starts with the "Your team..." line, after VICTORY / FAIL leaves.
    'undermurk.outcomeOut':  'whoosh-scene',                         // the outcome image shrinking away before the results
    'undermurk.resultIn':    { sound: 'slapPaper', delay: 100 },     // each player's column and the team total rising in (300ms), like debrief.statIn
    'undermurk.scoreTick':   { sound: 'scoreTick', pitchRamp: [1, 1.5] },  // each point as a score counts up (at least 45ms apart), climbing from 1x to 1.5x pitch from the first point to the last; each score (and the team total) climbs on its own
    'undermurk.teamTotal':   null,                                   // the team total finishing its count, 200ms before Play Again rises: silent, so only Play Again's chime marks the end
    'undermurk.playAgainIn': 'chime',                                // Play Again rising in (300ms) at the end of the results
    'undermurk.playAgain':   { sound: 'whoosh', keepClick: true },   // Play Again, with its click: the setup step sliding back in, after the button's 200ms shrink (playAgainHold). Only with UNDERMURK_BUMPER off; with it on, Play Again goes to the bumper with just the click
  },

  // Character voices: one sound as a line starts, in place of the letter blips.
  // Keyed by where the character speaks, then by the character:
  //   cutscene: characterSprite.name exactly as the cutscene file writes it, or 'badguy'
  //             for any line with textStyle: 'badguy' (checked before the name).
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
      'J.J. DINGO': { sound: 'voice-JJDingo', delay: 50 }, // intro and outro cutscenes only (not fail); js/splash-new.js keeps that rule
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

  // Looping sounds. Game code calls Sound.startLoop(key) and Sound.stopLoop(key).
  // The volume comes from the sound in `sounds`; remove a key to silence that loop.
  // A cutscene file can also tag an animation with startLoop: '<key>' or stopLoop: '<key>'.
  // once: true plays the file through one time instead of looping; it is still music & ambience.
  loops: {
    // An intro song plays from the first scene through the last; when the intro ends (last
    // Next or SKIP INTRO) it keeps playing under the map view and fades out over fadeOutMs.
    // Every theme's intro song follows this pattern.
    'dingo-punks-loop': { sound: 'dingo-punks-loop', delayMs: 500, fadeOutMs: 5000 },  // Midnight Mall intro song
    'background-creepy': { sound: 'background-creepy', fadeInMs: 300, fadeOutMs: 500 },  // while the Midnight Mall bad guys are on screen in the fail cutscene
    debrief: { sound: 'dingo-punks-end', delayMs: 700, fadeOutMs: 500, once: true },  // debrief page song, played once through (once: true, no loop), hard start (no fadeInMs); still music & ambience; starts 300ms after the VIEW SCORE press (js/debrief.js)
    'background-crickets': { sound: 'background-crickets', fadeInMs: 300, fadeOutMs: 1000 },  // Midnight Mall map view and outro; snappy fade-in under the intro song's fade-out
    // Every other theme's map view and outro loop, the same way as Midnight Mall's crickets.
    'background-beehive-blitz':         { sound: 'background-beehive-blitz', fadeInMs: 300, fadeOutMs: 1000 },
    'background-camp-calamari':         { sound: 'background-camp-calamari', fadeInMs: 300, fadeOutMs: 1000 },
    'background-cupids-countdown':      { sound: 'background-cupids-countdown', fadeInMs: 300, fadeOutMs: 1000 },
    'background-eggworld-emergency':    { sound: 'background-eggworld-emergency', fadeInMs: 300, fadeOutMs: 1000 },
    'background-final-bell-breakout':   { sound: 'background-final-bell-breakout', fadeInMs: 300, fadeOutMs: 1000 },
    'background-funhouse-fright':       { sound: 'background-funhouse-fright', fadeInMs: 300, fadeOutMs: 1000 },
    'background-paradise-panic':        { sound: 'background-paradise-panic', fadeInMs: 300, fadeOutMs: 1000 },
    'background-pickles-playground':    { sound: 'background-pickles-playground', fadeInMs: 300, fadeOutMs: 1000 },
    'background-rainbow-rescue':        { sound: 'background-rainbow-rescue', fadeInMs: 300, fadeOutMs: 1000 },
    'background-the-hasty-harvest':     { sound: 'background-the-hasty-harvest', fadeInMs: 300, fadeOutMs: 1000 },
    'background-the-yeti-and-the-yam':  { sound: 'background-the-yeti-and-the-yam', fadeInMs: 300, fadeOutMs: 1000 },
    'background-turkey-takedown':       { sound: 'background-turkey-takedown', fadeInMs: 300, fadeOutMs: 1000 },
    'background-wacky-workshop':        { sound: 'background-wacky-workshop', fadeInMs: 300, fadeOutMs: 1000 },
    // Enter the Undermurk. Its intro song follows every theme's pattern: from the first scene, then
    // fading out under the minigame's entrance. The minigame has no ambient loop of its own.
    'enter-the-undermurk-loop': { sound: 'enter-the-undermurk-loop', delayMs: 500, fadeOutMs: 5000 },  // Undermurk intro song
    'undermurk-end': { sound: 'enter-the-undermurk-end', fadeOutMs: 500, once: true },  // the end screen: starts with the "Your team..." line rising, after VICTORY / FAIL has left
  },

  // The map view (the challenge nodes and timer) loops one of `loops` per theme folder.
  // It starts as the map builds and ends when the outro or fail cutscene starts; if that
  // cutscene starts the same loop, it carries straight on instead. A theme left out is quiet.
  // It fades out while a challenge is open and back in on return to the map (loopFade).
  mapLoops: {
    'escape-the-midnight-mall': 'background-crickets',
    'beehive-blitz':        'background-beehive-blitz',
    'camp-calamari':        'background-camp-calamari',
    'cupids-countdown':     'background-cupids-countdown',
    'eggworld-emergency':   'background-eggworld-emergency',
    'final-bell-breakout':  'background-final-bell-breakout',
    'funhouse-fright':      'background-funhouse-fright',
    'paradise-panic':       'background-paradise-panic',
    'pickles-playground':   'background-pickles-playground',
    'rainbow-rescue':       'background-rainbow-rescue',
    'the-hasty-harvest':    'background-the-hasty-harvest',
    'the-yeti-and-the-yam': 'background-the-yeti-and-the-yam',
    'turkey-takedown':      'background-turkey-takedown',
    'wacky-workshop':       'background-wacky-workshop',
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
      'index.html':      { sounds: ['click', 'key', 'select', 'codeBox', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'clickWood', 'slapPaper', 'dangle'], delay: 0 },
      'answer-key.html': { sounds: ['click', 'key', 'select', 'codeBox', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'clickWood', 'slapPaper'], delay: 0 },
      'free-play.html':  { sounds: ['click', 'open', 'close', 'lock', 'whoosh', 'clickWood', 'slapPaper', 'dangle'], delay: 0 },
      'debrief.html':    { sounds: '*', delay: 0 },
    },
    onPinInput:      { sounds: '*', delay: 0 },   // code accepted; all SFX together are ~100 KB
    // also: lazy sounds to load with '*' (the intro and end songs, so neither waits on its file)
    onUndermurkPage: { sounds: '*', also: ['enter-the-undermurk-loop', 'enter-the-undermurk-end'], delay: 0 },
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
    { match: '.access-input, .code-input, .machine-crossword-input, .machine-item-cryptogram-input', event: 'ui.input' }, // game code boxes (splash), secret code boxes, crossword and cryptogram cells (in-game) sound the same, on release
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
  // a set number of times in a row, `gapMs` apart (ken-blip-3 is 70ms, so at 60ms each blip overlaps the last by 10ms),
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
