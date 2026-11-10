# Sound cleanup plan

Branch: `sound-effects`. Follows the 2026-11-10 review of the audio system. Builds on `readme/sound-effects.md` (the engine) and `readme/character-voices.md` (the voice tables).

The engine in `js/sound.js` stays as it is in shape: config-driven, every public method wrapped in `safe()`, one decode per file, loops on the music bus. This plan renames things so one name means one thing, folds the `loops` table into `sounds`, loads each theme's ambience during the intro instead of at the map, and clears the small items the review listed. No new features.

Line numbers are as of writing and will drift. The quoted code is the anchor, not the number.

---

## 0. Decisions

| # | Decision | Outcome |
|---|----------|---------|
| 1 | Audio format | **Ogg Vorbis only.** `formats: ['ogg']` stays. Safari and iPadOS below 18.4 cannot decode it and get silence with the Audio row hidden, as `readme/sound-effects.md` Decision 2 already records. No second export per file. |
| 2 | Name convention | **Hyphens everywhere** in sound names and loop keys (`click-wood`, `slap-paper`, `music-dingo-punks-intro`). Event names keep their `dot.camelCase` form (`ui.click`, `cutscene.moveBadguyIn`): they are a separate namespace and touching them means ~200 edits across every cutscene file for no gain. |
| 3 | Song and ambience names | **Sound name = loop key = `<folder>-<file stem>`.** `music/dingo-punks-intro.ogg` is the sound `music-dingo-punks-intro`, started with `Sound.startLoop('music-dingo-punks-intro')`. `ambience/crickets.ogg` is `ambience-crickets`. One name, three places. |
| 4 | Loops table | **Removed.** A sound that loops carries a `loop: { fadeInMs, fadeOutMs, delayMs, once }` field. `mapLoops` stays, keyed by theme, and its values are sound names. |
| 5 | File names | **By role, not by source pack.** No `ken-`, `match-`, `free-` prefixes under `assets/audio/`. Attribution moves to `readme/sound-credits.md`. |
| 6 | Unconverted files | **Renamed now under their current extension** (`sfx/motion/whoosh-node.wav`). Ethan's ogg conversion later drops the extension from each `src` (section 8). |
| 7 | Voice preload | **Stays site-wide** (`'*'` at `onPinInput`). Per-theme voice loading is not worth the engine learning the theme for ~400 KB. |
| 8 | `clickGlitch` | **Deleted.** `cutscene.skip` deliberately plays the standard click. The file goes back to `tools/sfx-library/`. |

---

## Ground rules for the executing agent

- Work on `sound-effects`. **Commit the current working tree first** (section 10, step 0): it already holds the `assets/audio/<folder>/` reorganization as 98 deletes plus 7 untracked folders, and `git add -A` records those as renames. Everything below builds on that commit.
- Don't commit after that unless the user asks. Don't touch `main`.
- Every call into `Sound` from game code keeps its `typeof Sound !== 'undefined' &&` guard.
- Every public method on `Sound` stays wrapped in `safe(...)`.
- Rename files with `git mv` so history follows them.
- Don't add, trim or convert audio files. Section 8 is Ethan's pass, after the code lands.
- After each section, run the check script from section 9. It must print no missing files, no unreferenced files and no unknown names before moving on.

---

## 1. File renames

Every file under `assets/audio/` keeps its folder. Only stems with a source-pack prefix change. `git mv` each one.

| Current | New | Used by sound(s) |
|---|---|---|
| `sfx/cutscene/ken-typewriter.ogg` | `sfx/cutscene/typewriter.ogg` | `typewriter` |
| `sfx/cutscene/match-tv-on.ogg` | `sfx/cutscene/tv-on.ogg` | `tv-on` |
| `sfx/cutscene/match-glitch.wav` | `tools/sfx-library/match-glitch.wav` | nothing (Decision 8) |
| `sfx/feedback/match-bell.wav` | `sfx/feedback/bell.wav` | `bell` |
| `sfx/feedback/match-clap.wav` | `sfx/feedback/clap.wav` | `clap` |
| `sfx/motion/ken-whoosh.ogg` | `sfx/motion/whoosh-soft.ogg` | `whoosh-cutscene` |
| `sfx/motion/match-whoosh.wav` | `sfx/motion/whoosh-node.wav` | `whoosh-node` |
| `sfx/motion/match-crash.ogg` | `sfx/motion/crash.ogg` | `whoosh-badguy` |
| `sfx/motion/match-metal-dangle.ogg` | `sfx/motion/metal-dangle.ogg` | `dangle` |
| `sfx/motion/match-wood-slam.ogg` | `sfx/motion/wood-slam.ogg` | `slap-metal` |
| `voice/mumble/free-mumble-huh.ogg` | `voice/mumble/mumble-1.ogg` | `VOICE_CLIPS.mumble` |
| `voice/mumble/free-mumble-heh.ogg` | `voice/mumble/mumble-2.ogg` | |
| `voice/mumble/free-mumble-hah.ogg` | `voice/mumble/mumble-3.ogg` | |
| `voice/mumble/free-mumble-haeh.ogg` | `voice/mumble/mumble-4.ogg` | |
| `voice/mumble/free-mumble-huuh.ogg` | `voice/mumble/mumble-5.ogg` | |
| `ambience/free-crickets.ogg` | `ambience/crickets.ogg` | `ambience-crickets` |

Unchanged: everything in `sfx/ui/`, `sfx/feedback/{chime.mp3,coin.ogg,error.ogg}`, `sfx/motion/{card-slide,whoosh}.ogg`, every numbered voice set, all four `music/` files, the other 14 `ambience/` files.

With the mumbles numbered, `VOICE_CLIPS.mumble` in `js/sound-config.js:12` becomes `voiceSet('mumble', 5)` like every other set, and the special-case line goes.

Update the folder comment on `basePath` (`js/sound-config.js:27`) only if it still reads true; it does.

---

## 2. Sound and loop key renames

### 2a. Sound names (all in `js/sound-config.js`, plus the two spots noted)

| Old | New |
|---|---|
| `codeBox` | `code-box` |
| `codeBoxSoft` | `code-box-soft` |
| `clickWood` | `click-wood` |
| `clickWood-soft` | `click-wood-soft` |
| `slapPaper` | `slap-paper` |
| `slapMetal` | `slap-metal` |
| `voice-JJDingo` | `voice-jj-dingo` |
| `tvOn` | `tv-on` |
| `clickNext` | `click-next` |
| `rankChime` | `rank-chime` |
| `rankChime-soft` | `rank-chime-soft` |
| `scoreTick` | `score-tick` |
| `clickGlitch` | *(deleted, with its file)* |
| `dingo-punks-loop` | `music-dingo-punks-intro` |
| `dingo-punks-end` | `music-dingo-punks-debrief` |
| `enter-the-undermurk-loop` | `music-undermurk-intro` |
| `enter-the-undermurk-end` | `music-undermurk-end` |
| `background-creepy` | `ambience-creepy` |
| `background-crickets` | `ambience-crickets` |
| `background-<theme>` (13) | `ambience-<theme>` |

Sound names appear in: the `sounds` block, every `events` value, every `characterVoices` value, the `preload` lists, and one place outside the config: the label map in `js/debug-panel.js:129` (`'voice-JJDingo': 'J.J. Dingo'`). Nothing in game code names a sound; `grep -rn "voice-JJDingo\|clickWood\|slapPaper\|slapMetal\|rankChime\|scoreTick\|tvOn\|clickNext\|codeBox" js resource` must come back empty when done (the `js/sound-config.js` matches excepted until it is edited).

### 2b. Loop keys (now the same as the sound names)

| Old key | New key | Where it is used |
|---|---|---|
| `dingo-punks-loop` | `music-dingo-punks-intro` | `startLoop:` tag at line 18 of all 14 `resource/<theme>/cutscene/cutscene.js` |
| `debrief` | `music-dingo-punks-debrief` | `js/debrief.js:113` `Sound.startLoop('debrief')` |
| `enter-the-undermurk-loop` | `music-undermurk-intro` | `js/enter-the-undermurk.js:120` `startLoop:` tag |
| `undermurk-end` | `music-undermurk-end` | `js/enter-the-undermurk.js:1538, 2397`; `js/undermurk-debug-panel.js:87`; comment at `enter-the-undermurk.js:284` |
| `background-creepy` | `ambience-creepy` | `startLoop:` tag in the fail cutscene of all 14 themes |
| `background-crickets` | `ambience-crickets` | `resource/escape-the-midnight-mall/cutscene/cutscene.js:288` |
| `background-<theme>` | `ambience-<theme>` | the outro `startLoop:` tag in the other 13 themes |

The cutscene files can be done in one pass:

```sh
sed -i '' -E "s/startLoop: 'dingo-punks-loop'/startLoop: 'music-dingo-punks-intro'/; s/startLoop: 'background-/startLoop: 'ambience-/" resource/*/cutscene/cutscene.js
```

Then `grep -rn "startLoop: '\|stopLoop: '" resource js` and confirm every key is one of the new names.

`handOffMapLoop()` in `js/splash-new.js:1870` compares `element.animation.startLoop === mapLoopKey`; both sides are sound names after this change, so it keeps working.

---

## 3. Fold `loops` into `sounds`

### 3a. Config shape

Delete the `loops:` block (`js/sound-config.js:447-473`). Each looping sound gains a `loop` field. Write the two music pairs out in full and use a small helper for the 14 ambience loops, matching the `voiceSet` precedent at the top of the file:

```js
// A theme's map view and outro loop: lazy (loaded by the intro, section 5), fading 300ms in and 1s out.
const ambience = (file, volume) => ({ src: ['ambience/' + file], volume, lazy: true, loop: { fadeInMs: 300, fadeOutMs: 1000 } });
```

```js
    // Songs and ambience. A sound with `loop` is started with Sound.startLoop(name) and runs on
    // the music bus. loop: { fadeInMs, fadeOutMs, delayMs, once }. once: true plays the file through one time.
    'music-dingo-punks-intro':   { src: ['music/dingo-punks-intro'],   volume: 0.225, lazy: true, loop: { delayMs: 500, fadeOutMs: 5000 } },  // every theme's intro, from the first scene; fades out under the map view
    'music-dingo-punks-debrief': { src: ['music/dingo-punks-debrief'], volume: 0.2,   lazy: true, loop: { delayMs: 700, fadeOutMs: 500, once: true } },  // debrief page, once through, hard start after VIEW SCORE
    'music-undermurk-intro':     { src: ['music/undermurk-intro'],     volume: 0.15,  lazy: true, loop: { delayMs: 500, fadeOutMs: 5000 } },
    'music-undermurk-end':       { src: ['music/undermurk-end'],       volume: 0.1,   lazy: true, loop: { fadeOutMs: 500, once: true } },
    'ambience-creepy':   { src: ['ambience/creepy'], volume: 0.1, loop: { fadeInMs: 300, fadeOutMs: 500 } },  // bad guys on screen in every fail cutscene; small, so not lazy
    'ambience-crickets':           ambience('crickets', 0.4),  // Midnight Mall map view and outro
    'ambience-beehive-blitz':      ambience('beehive-blitz.wav', 0.4),
    'ambience-camp-calamari':      ambience('camp-calamari.wav', 0.2),
    … (one line per theme, same volumes as today)
```

`ambience-crickets` becomes lazy like the others; section 5 loads it during the intro. Keep the per-theme volumes exactly as they are now.

`mapLoops` (`js/sound-config.js:479`) keeps its shape; only the values change to `ambience-<theme>` / `ambience-crickets`. `loopFade` stays.

Update the comment block above `sounds` (`:40-43`): the "Music & ambience" category is now "every sound with `loop`, plus one-shots marked `music: true`". Update the `mapLoops` comment (`:475-478`) to say its values are sound names.

### 3b. Engine (`js/sound.js`)

Add one helper and use it everywhere `cfg.loops[key]` is read today:

```js
  // The loop settings of a sound that loops (sounds[key].loop), or null.
  function loopDef(cfg, key) {
    const def = cfg && cfg.sounds && cfg.sounds[key];
    return def && def.loop ? def.loop : null;
  }
```

| Function | Today | Change |
|---|---|---|
| `load()` `:201-203` | `wantedLoops.forEach(... if (cfg.loops[key].sound === name) playLoop(key))` | `if (wantedLoops.has(name)) playLoop(name);` |
| `startLoop()` `:461-471` | `const def = cfg.loops[key]`, `buffers.has(def.sound)`, `preload([def.sound])` | `if (!loopDef(cfg, key) \|\| !isAvailable()) return;` then `buffers.has(key)` / `preload([key])` |
| `playLoop()` `:473-503` | `const def = cfg.loops[key]; const soundDef = cfg.sounds[def.sound]`, `buffers.get(def.sound)[0]` | `const soundDef = cfg.sounds[key]; const def = soundDef.loop;`, `buffers.get(key)[0]` |
| `stopLoop()` `:512` | `cfg.loops[key]` | `loopDef(cfg, key)` |
| `setLoopFaded()` `:529` | `cfg.sounds[cfg.loops[key].sound]` | `cfg.sounds[key]` |
| `isSilenced()` / `busFor()` `:116-124` | `def.music` | `def.music \|\| def.loop` so a looping sound is music whichever path plays it |
| `mapLoopFor()` | returns a loop key | unchanged; it now returns a sound name |

Update the header comment in `sound.js` (`:1-14`) and the comment above `startLoop` (`:453-458`): loops are "sounds with a `loop` field, keyed by sound name".

`readme/sound-effects.md` and `readme/character-voices.md` describe the old `loops` table. Add one line at the top of each: "Superseded in part by `readme/sound-cleanup.md`: loops now live on the sound, and names are hyphenated."

---

## 4. Preload comment fixes that go with sections 1 to 3

`preload:` (`js/sound-config.js:505-519`) after the renames:

```js
  preload: {
    onPageLoad: {
      'index.html':      { sounds: ['click', 'key', 'select', 'code-box', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'click-wood', 'slap-paper', 'dangle'], delay: 0 },
      'answer-key.html': { sounds: ['click', 'key', 'select', 'code-box', 'open', 'close', 'lock', 'correct', 'wrong', 'whoosh', 'click-wood', 'slap-paper'], delay: 0 },
      'free-play.html':  { sounds: ['click', 'open', 'close', 'lock', 'whoosh', 'click-wood', 'slap-paper', 'dangle'], delay: 0 },
      'debrief.html':    { sounds: DEBRIEF_SOUNDS, delay: 0 },   // section 6d
    },
    onPinInput:      { sounds: '*', delay: 0 },
    onUndermurkPage: { sounds: '*', also: ['music-undermurk-intro', 'music-undermurk-end'], delay: 0 },
  },
```

---

## 5. Load the theme's ambience during the intro

Today `ambience-<theme>` is lazy and nothing fetches it until `startMapLoop()` calls `Sound.startLoop` (`js/splash-new.js:1852`), when the map appears. On school wifi the map is silent until the file arrives.

In `addCutscene()` (`js/splash-new.js:1893-1899`), right after `handlePreloading('onCutsceneStart');` in the intro branch:

```js
    handlePreloading('onCutsceneStart');
    // The theme's map loop is lazy (a big file); the intro gives it 30s of cover to load.
    if (typeof Sound !== 'undefined') {
      const mapLoop = Sound.mapLoopFor(resourceTheme);
      if (mapLoop) Sound.preload([mapLoop]);
    }
```

That is the whole change. `preload()` already skips names that are loading or loaded, `startLoop()` already waits for a file in flight, and `mapLoopFor` returns the sound name. Preview and free play reach the intro through the same function. Enter the Undermurk has no map loop and is unaffected.

Put a note on `mapLoops` in the config: "Each theme's loop is preloaded as its intro cutscene starts (js/splash-new.js addCutscene)."

---

## 6. Smaller cleanups

### 6a. Remove `localSoundConfig`

No resource defines it, and `config()` (`js/sound.js:66-74`) checks for it on every play, tap and keypress. Replace the function body with:

```js
  function config() {
    return typeof SOUND_CONFIG !== 'undefined' && SOUND_CONFIG ? SOUND_CONFIG : null;
  }
```

Delete the comment above it. `readme/sound-effects.md:133` describes the feature; leave the history, the note from section 3b covers it.

### 6b. Read the `?audio=0` flag once

`teacherTurnedOff()` (`js/sound.js:78-81`) builds a `URLSearchParams` on every `isAvailable()` call. Next to `muted` and `musicMuted` at the top of the module add:

```js
  const urlAudioOff = new URLSearchParams(window.location.search).get('audio') === '0';
```

and have `teacherTurnedOff()` return `urlAudioOff || (typeof debriefStats !== 'undefined' && String(debriefStats.audio) === '0')`. The `debriefStats` check must stay live: a share code sets it after load.

### 6c. Warn once on an unknown event name

In `event()` (`js/sound.js:368-373`), before `fireMapping`:

```js
    if (!Object.prototype.hasOwnProperty.call(cfg.events, eventName)) {
      logOnce('unknown event "' + eventName + '"');
      return;
    }
```

Same guard at the top of `eventRun()` (`:428`). A `null` mapping is still silent on purpose; only a name that is not a key warns. Run through a whole game and the debrief afterwards with the console open: no `[sound] unknown event` lines should appear. If one does, it is a typo somewhere in game code; fix the call, not the config.

### 6d. Give the debrief its own preload list

`debrief.html` loads `'*'` today, which includes all nine voice sets and both Midnight Mall ambience files. Above `SOUND_CONFIG` in `js/sound-config.js`:

```js
// Everything the debrief page plays (js/debrief.js, js/dpaam-debrief.js, the global menu), instead of '*'.
const DEBRIEF_SOUNDS = ['click', 'open', 'close', 'lock', 'toggle', 'click-wood', 'whoosh', 'whoosh-scene',
  'slap-paper', 'slap-metal', 'score-tick', 'medal-1', 'medal-2', 'medal-3', 'medal-4', 'medal-5',
  'rank-chime', 'clap', 'music-dingo-punks-debrief'];
```

`clap` and the song are lazy, so naming them here is what loads them; the `also:` entry goes. Check it against the `debrief.*`, `menu.*`, `modal.*`, `ui.click`, `ui.locked` and `ui.toggle` events before trusting the list.

### 6e. Delete `clickGlitch`

Remove the sound (`js/sound-config.js:170`) and `git mv` its file to `tools/sfx-library/` (section 1). Nothing maps to it.

### 6f. Cache header for audio

Every audio URL carries `?v=<version>`, so the files can be immutable. In `_headers`, after the `/css/*` block:

```
# Audio URLs carry ?v=<version> (js/sound.js fileUrl), so a file never changes under its URL.
/assets/audio/*
  Cache-Control: public, max-age=31536000, immutable
```

Cloudflare Pages reads this file; Firebase hosting is a placeholder and needs nothing.

### 6g. Comment and documentation touch-ups

- `js/sound-config.js:28` `formats:` comment: replace "later: ['m4a', 'ogg']" with "ogg only (readme/sound-effects.md, Decision 2); browsers that can't decode it get silence".
- `js/sound-config.js:40-43` and `:173-174, 192-193` comments that mention `loops[...]` or `loops.debrief`: reword to the new names.
- `js/enter-the-undermurk.js:284` comment: `loops['undermurk-end']` becomes `music-undermurk-end`.
- `tools/sfx-library/README.md`: add "Attribution for every shipped file is in `readme/sound-credits.md`." and note that `match-glitch.wav` lives here.
- `sound.js` `FORMAT_TYPES` (`:16-20`) can keep its three entries; they cost nothing and document what `formats` accepts.

---

## 7. Credits: `readme/sound-credits.md`

A new file, not deployed (`scripts/build-pages.mjs` copies only `assets`, `css`, `js`, `resource` and the root pages). One row per shipped file, with the file name it had when it was added (from `git log --diff-filter=A --name-only -- assets/audio`), so a source can be traced back even where the pack is not recorded. Rows marked **fill in** are ones the repository does not identify; Ethan completes them.

```markdown
# Sound credits

Every audio file shipped under `assets/audio/`, where it came from and its licence.
Unused files from the same packs are in `tools/sfx-library/`.

| File | Original name | Source | Licence |
|---|---|---|---|
| sfx/ui/open.ogg | switch1.ogg | Kenney, UI Audio | CC0 |
| sfx/ui/close.ogg | switch2.ogg | Kenney, UI Audio | CC0 |
| sfx/ui/click.ogg | switch3.ogg | Kenney, UI Audio | CC0 |
| sfx/ui/toggle.ogg | switch9.ogg | Kenney, UI Audio | CC0 |
| sfx/ui/tab.ogg | switch12.ogg | Kenney, UI Audio | CC0 |
| sfx/ui/blip.ogg | click2.ogg | Kenney, UI Audio | CC0 |
| sfx/ui/tick.ogg | click3.ogg | Kenney, UI Audio | CC0 |
| sfx/ui/locked.ogg | switch_005.ogg | Kenney, Interface Sounds | CC0 |
| sfx/ui/click-wood.ogg | click-wood.ogg | fill in | |
| sfx/feedback/error.ogg | error_005.ogg | Kenney, Interface Sounds | CC0 |
| sfx/feedback/coin.ogg | coin.ogg | fill in (Kenney?) | |
| sfx/feedback/chime.mp3 | zap-chime.mp3 | fill in | |
| sfx/feedback/bell.wav | match-bell.wav | fill in ("match" pack) | |
| sfx/feedback/clap.wav | match-clap.wav | fill in ("match" pack) | |
| sfx/motion/card-slide.ogg | card-slide-2.ogg | Kenney, Casino Audio | CC0 |
| sfx/motion/whoosh.ogg | swing1.ogg | fill in | |
| sfx/motion/whoosh-soft.ogg | ken-whoosh-1.ogg | Kenney (which pack?) | CC0 |
| sfx/motion/whoosh-node.wav | match-call-2.wav | fill in ("match" pack) | |
| sfx/motion/crash.ogg | match-crash.ogg | fill in ("match" pack) | |
| sfx/motion/metal-dangle.ogg | match-metal-dangle.ogg | fill in ("match" pack) | |
| sfx/motion/wood-slam.ogg | match-wood-1.ogg | fill in ("match" pack) | |
| sfx/cutscene/typewriter.ogg | ken-blip-3.ogg | Kenney (which pack?) | CC0 |
| sfx/cutscene/tv-on.ogg | match-power-15.ogg | fill in ("match" pack) | |
| voice/mumble/mumble-1..5.ogg | 554017–554023__dodrio__dialogue_mumble_*.ogg | Freesound, user dodrio (#554017, 554018, 554019, 554020, 554023) | fill in (check each sound's licence on Freesound) |
| voice/<set>/<set>-N.ogg (andro, boy, girl, man, monster, old, robot, woman, woof) | voice-clip-<set>-N.ogg | fill in | |
| music/dingo-punks-intro.ogg | dingo-punks-loop.ogg | fill in (original?) | |
| music/dingo-punks-debrief.ogg | dingo-punks-end.ogg | fill in (original?) | |
| music/undermurk-intro.ogg | enter-the-undermurk-loop.ogg | fill in (original?) | |
| music/undermurk-end.ogg | enter-the-undermurk-end.ogg | fill in (original?) | |
| ambience/crickets.ogg | free-crickets.ogg | Freesound, fill in author and id | |
| ambience/creepy.ogg | background-creepy.ogg | fill in | |
| ambience/<theme>.wav/.mp3/.ogg (14) | same stems | fill in | |
```

The "match" prefix was a pack name only Ethan knows; the agent must not guess it. Kenney packs are CC0 and need no attribution, but the row still records the pack.

---

## 8. Asset pass (Ethan, after the code lands)

None of this is code. The decoded size of a file in memory depends on its length and channel count, not its format, so converting alone does not fix the first two items.

1. **Trim `voice/monster/monster-1..5.ogg`.** Each decodes to 26.3 s: a quarter second of sound and then silence. In vocalize mode a line starts a new clip every 100 ms, so one line stacks dozens of 26 s sources. Re-export each to its audible part (the other sets are 0.12 to 0.25 s).
2. **Trim the ambience loops to 20 to 40 s seamless loops**, mono where the source is effectively mono. Today's decoded sizes: eggworld-emergency 283 s stereo ≈ 109 MB, beehive-blitz 178 s ≈ 68 MB, turkey-takedown 121 s ≈ 46 MB, cupids-countdown 148 s mono ≈ 28 MB, rainbow-rescue 82 s ≈ 31 MB. A 30 s stereo loop is ≈ 11 MB; the 4 s crickets loop is 1.4 MB.
3. **Convert to ogg.** `ffmpeg` is not installed on this Mac (`brew install ffmpeg`). Quality 4 is about 128 kbps and is plenty for music and ambience; quality 3 for sound effects:

   ```sh
   cd assets/audio
   for f in ambience/*.wav ambience/*.mp3; do ffmpeg -i "$f" -c:a libvorbis -q:a 4 "${f%.*}.ogg" && git rm -q "$f"; done
   for f in sfx/feedback/bell.wav sfx/feedback/clap.wav sfx/feedback/chime.mp3 sfx/motion/whoosh-node.wav; do ffmpeg -i "$f" -c:a libvorbis -q:a 3 "${f%.*}.ogg" && git rm -q "$f"; done
   ```

   Add `-ac 1` to any file that should be mono.
4. **Drop the extensions in the config.** After step 3 these `src` entries lose their `.wav` / `.mp3`: the 13 `ambience(...)` calls, `bell`, `clap`, `chime`, `rank-chime`, `rank-chime-soft`, `whoosh-node`. Then run the check script (section 9): it must report no missing files.

---

## 9. Verification

### 9a. `scripts/check-sound-config.mjs` (new, run with `node scripts/check-sound-config.mjs`)

A small script, no dependencies, modelled on the one used for the review. It loads `js/sound-config.js` with `new Function(src + '\nreturn SOUND_CONFIG;')()` and checks:

- every `src` resolves to a file under `assets/audio/` (base name + `.ogg`, or the explicit extension);
- every file under `assets/audio/` is referenced by some `src`;
- every `events` and `characterVoices` value that is not `null` names a sound;
- every `mapLoops` value names a sound with a `loop` field;
- every `preload` name (including `also`) names a sound;
- every `startLoop:` / `stopLoop:` tag in `resource/*/cutscene/cutscene.js` and `js/*.js`, and every `Sound.startLoop('…')` / `umStartLoop('…')` / `umStopLoop('…')` string, names a sound with a `loop` field;
- every `Sound.event('…')` / `sfx('…')` / `umSfx('…')` / `sfx: '…'` / `data-sfx="…"` string in `js`, `resource` and the root pages is a key in `events` (skipping `none` and the computed `debrief.medal` + n);
- every sound name and loop key is lowercase with hyphens only (`/^[a-z0-9-]+$/`).

Exit non-zero on any finding, so it can sit in front of `scripts/build-pages.mjs` later.

### 9b. Manual run-through (local server, console open)

- **Midnight Mall, full game**: intro song from the first scene; fades over 5 s under the map; crickets fade in; open a challenge (crickets fade out), close it (back in); Finish; outro keeps the crickets going; the fail cutscene (debug panel Fail button) starts the creepy loop over the bad guys.
- **Network tab during the intro**: the theme's ambience file is requested as the first cutscene scene appears, not when the map appears. Check one wav theme too (Beehive Blitz).
- **Debrief**: VIEW SCORE starts the song 700 ms later; stats, tiers, ticks, medals, rank, clap, bonus panel all sound; the Undermurk card plays the lock sound when locked.
- **Enter the Undermurk**: intro song from the first scene; end song with the results; Play Again stops it; the debug panel's end-screen button stops it.
- **Settings**: Audio OFF then ON still clicks (ignoreMute); with Audio off, the map loop is silent and comes back on ON mid-loop.
- **Debug panel voice looper**: every character still has a voice (the renamed `voice-jj-dingo` included); the set looper still works.
- **Preview, free play, answer key**: a tap on the first screen clicks; no `[sound]` warnings in the console.
- **Build**: `node scripts/build-pages.mjs` finishes; `dist/assets/audio/` has the new file names and no `tools/` files; `dist/_headers` has the audio rule.

---

## 10. Order of work

| Step | Content | Commit? |
|---|---|---|
| 0 | `git add -A && git commit` the current tree (the folder reorganization and the voice sets) so later renames diff cleanly. Use the existing checkpoint message style. | yes, with the user's go-ahead |
| 1 | Section 1 file renames + the matching `src` edits + `voiceSet('mumble', 5)` | one commit |
| 2 | Sections 2 and 3: sound names, loop keys, cutscene sed, `loops` fold, engine changes, section 4 preload lists | one commit |
| 3 | Sections 5 and 6: intro preload hook, the small cleanups, `_headers` | one commit |
| 4 | Section 7 credits file, README notes, section 9a check script | one commit |
| 5 | Section 8 asset pass (Ethan), then the extension drop and a final check-script run | one commit |

Steps 1 to 4 are safe to do in one sitting; run the check script and the Midnight Mall run-through after step 2 and again after step 3.
