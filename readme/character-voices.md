# Character voices: implementation plan

> Superseded in part by `readme/sound-cleanup.md`: loops now live on the sound (a `loop` field, no `loops` table), and sound names and loop keys are hyphenated.

Branch: `sound-effects`. Builds on `readme/sound-effects.md` (the sound engine and config this plan extends).

## What this changes

Today two speakers have a voice: J.J. Dingo and any `textStyle: 'badguy'` line in a cutscene. Each line plays one short mumble clip in place of the per-letter typewriter blips. Both are hard-coded in `js/splash-new.js`, and the challenge characters in the activity scene (Terrible Topsy, Robustus the Great, …) have no voice at all.

After this plan:

1. `js/sound-config.js` has a `characterVoices` table. Adding or changing a character's voice is a config edit; game code never names a character's sound.
2. The activity scene (`js/scene.js`) voices the challenge character's opening and completed lines through that table. The player's reply keeps its blips.
3. The cutscene code (`js/splash-new.js`) uses the same table instead of its `if` chain.
4. `js/sound.js` decodes each audio file once, however many sounds list it. Without this, every voice would decode its own copy of the five shared mumble clips (see "Why the file cache comes first").
5. The five Midnight Mall challenge characters get voices with starting pitches to tune by ear.

Not changed: the teacher Audio switch, the student toggles, the music bus, loops, preload moments, any CSS.

## Ground rules for the executing agent

- Work on the `sound-effects` branch. The working tree already has **uncommitted changes** in `css/global.css`, `js/global-menu.js`, `js/sound-config.js` (the `ignoreMute` flag) and `js/sound.js` (`isSilenced`/`busFor` honour `ignoreMute`). Keep them. Don't revert, stash or commit them.
- Don't commit unless the user asks.
- Line numbers below are as of writing and will drift as edits land. The quoted code is the anchor, not the number.
- Every call into `Sound` from game code stays guarded with `typeof Sound !== 'undefined' &&`, as the existing calls are. The game must never depend on audio.
- Every new public method on `Sound` is wrapped in `safe(...)` like the others, so a bug in it logs once and returns `undefined`.
- Don't touch `tools/sfx-library/` or add audio files. No new files are needed; every voice reuses the five `VOICE_CLIPS` already in `assets/audio/sfx/`.

## Why the file cache comes first

`js/sound.js` caches decoded audio by **sound name** (`const buffers = new Map(); // sound name → AudioBuffer[]`, line 37). `load()` (line 170) fetches and decodes every file in a sound's `src`. Two sounds that list the same file each decode it. A decoded clip is roughly ten times its `.ogg` size, so the five ~19 KB mumble clips are about 1 MB decoded per sound that uses them. `preload.onPinInput` is `sounds: '*'`, so with ~5 characters × 14 themes plus the cutscene speakers, that would be ~70 voice sounds × 5 clips decoded at code entry, on the order of 70–100 MB on school Chromebooks and iPads. Caching per file brings that back to five decodes in total, whatever the number of characters. It also saves work for sounds that already share a file (`switch3` is used by `select`, `click`, `key` and `clickNext`).

## Step A: decode each file once, `js/sound.js`

Next to `buffers` (line 37) add:

```js
const fileBuffers = new Map();  // file base name → Promise<AudioBuffer>, shared by every sound that lists the file
```

Add a helper next to `load()`:

```js
// One fetch and decode per file, however many sounds list it (every voice-* sound
// shares the same clips). A failed load is forgotten so a later preload can retry.
function loadFile(cfg, base) {
  if (fileBuffers.has(base)) return fileBuffers.get(base);
  const promise = fetch(fileUrl(cfg, base))
    .then(function (response) {
      if (!response.ok) throw new Error(response.status + ' ' + response.url);
      return response.arrayBuffer();
    })
    .then(decode)
    .catch(function (error) {
      fileBuffers.delete(base);
      throw error;
    });
  fileBuffers.set(base, promise);
  return promise;
}
```

In `load()` (line 178–184), replace the inline fetch chain so it reads:

```js
Promise.all(def.src.map(function (base) { return loadFile(cfg, base); }))
```

Everything after `.then(function (decoded) { buffers.set(name, decoded); …` stays as it is. `buffers` still maps a sound name to an array of `AudioBuffer`s; those are now references to shared buffers, not copies. `play()`, `pickFileIndex()`, loops and preload need no change.

Check: `decode` needs `ctx`; `preload()` calls `getContext()` before `load()`, as today, so nothing changes there.

## Step B: the `characterVoices` table, `js/sound-config.js`

### B1. Voice sounds

In `sounds`, after `'voice-badguy'` (line 50), add one entry per Midnight Mall challenge character. All reuse `VOICE_CLIPS`; only `pitch` and `volume` differ. These are **starting values** for the user to tune by ear; say so in the comment.

```js
    // Midnight Mall challenge characters (activity scene). Starting pitches, to tune by ear.
    'voice-topsy':     { src: VOICE_CLIPS, volume: 0.5, pitch: [1.2, 1.4] },   // Terrible Topsy
    'voice-robustus':  { src: VOICE_CLIPS, volume: 0.5, pitch: [0.65, 0.8] },  // Robustus the Great
    'voice-shortnose': { src: VOICE_CLIPS, volume: 0.5, pitch: [1.0, 1.15] },  // Martin Shortnose
    'voice-prisma':    { src: VOICE_CLIPS, volume: 0.5, pitch: [1.05, 1.2] },  // Prisma
    'voice-zeeb':      { src: VOICE_CLIPS, volume: 0.5, pitch: [0.9, 1.05] },  // Zeeb
```

Update the comment on the two existing voice sounds (lines 49–50) so they no longer say which events use them; they are now reached through `characterVoices`.

### B2. The table

Add a new top-level key after `events` (before `loops`):

```js
  // Character voices: one sound as a line starts, in place of the letter blips.
  // Keyed by where the character speaks, then by the character:
  //   cutscene: characterSprite.name exactly as the cutscene file writes it, or 'badguy'
  //             for any line with textStyle: 'badguy' (checked before the name).
  //   <theme folder>: the challenge's intro.asset file name (assets.characterShopkeeper in
  //             the older activityArray format). The portrait, not the name, because the same
  //             character is named differently across challenges ("Terrible Topsy" / "Topsy").
  // Values take the same shapes as `events`: a sound name, { sound, delay }, or null for a
  // speaker that is silent and also gets no letter blips. A character left out keeps the blips.
  characterVoices: {
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
  },
```

The `delay: 50` on the two cutscene entries keeps today's timing exactly (it comes from the events being removed in B3).

### B3. Remove the two events

Delete from `events` (lines 97–98):

```js
    'cutscene.voiceJJDingo': { sound: 'voice-JJDingo', delay: 50 }, …
    'cutscene.voiceBadguy': { sound: 'voice-badguy', delay: 50 }, …
```

Their only callers are the two lines in `js/splash-new.js` that Step E replaces. Confirm with `grep -rn "cutscene.voice" js tools` after Step E: no hits.

### B4. Header comment

The comment above `VOICE_CLIPS` (lines 6–7) says "Each character's voice-* sound below picks from these at random and sets its own pitch." Add: "Which character uses which sound is set in `characterVoices`."

## Step C: `Sound.voice()`, `js/sound.js`

### C1. Factor the event tail out

`event()` (line 301) looks up a mapping and then does everything else. Split it so the "everything else" can be reused:

```js
  function event(eventName, detail) {
    const cfg = config();
    if (!cfg || !cfg.events) return;
    const isLetter = eventName === 'dialogue.letter' || eventName === 'cutscene.letter';
    fireMapping(cfg, cfg.events[eventName], isLetter, detail);
  }

  // mapping is an `events` or `characterVoices` value: a sound name, or { sound, skipAfterMs, delay, skipIfLocked }.
  function fireMapping(cfg, mapping, isLetter, detail) {
    const name = mapping && typeof mapping === 'object' ? mapping.sound : mapping;
    if (typeof name !== 'string' || isSilenced(cfg.sounds && cfg.sounds[name])) return;
    … the rest of today's event() body, unchanged, from the skipAfterMs check to play(name) …
  }
```

Keep the existing comment block above `event()`; move the part that describes the mapping shapes onto `fireMapping()`.

### C2. The lookup

```js
  // A character's voice from SOUND_CONFIG.characterVoices[theme][key]. Plays it (honouring
  // delay) and returns true when the character has an entry, even a null one, so the caller
  // skips its letter blips. false = no entry: the caller keeps the blips.
  function voice(theme, key) {
    const cfg = config();
    const table = cfg && cfg.characterVoices && cfg.characterVoices[theme];
    if (!table || typeof key !== 'string' || !Object.prototype.hasOwnProperty.call(table, key)) return false;
    fireMapping(cfg, table[key], false, undefined);
    return true;
  }
```

Notes:
- Return `true` even while the student has Sound effects off. The blips would be muted too; what matters is that a voiced line never gets blips.
- Return `true` even if the voice's file hasn't loaded yet (`play()` returns quietly). A silent line beats a line that starts blipping and then switches to voice.
- `safe()` returns `undefined` on an exception, which callers treat as "no voice", so a config typo falls back to blips.

### C3. Export

In the returned object (line 526) add `voice: safe('voice', voice),` after `event`.

## Step D: activity scene, `js/scene.js`

`drawScene()` has two near-identical branches: the current `resource.challengeArray` format (✅ block, lines 14–195) and the older `resource.activityArray` format still used by Camp Calamari's reading topics (❌ block, lines 200–372). Each has its own inner `addText(text, element)` that is called **twice**: once for the character's line into `activityScenedialogue`, once for the player's reply into `activityScenePlayerText`. Only the character's line is voiced.

### D1. The ✅ branch

Call sites (lines 172–173):

```js
      setTimeout(addText,delay__addText2,dialogueText, activityScenedialogue);
      setTimeout(addText, activitySceneButtonTimer + delay__addText, activitySceneButtonText, activityScenePlayerText);
```

Change the first to pass the character's portrait file as a third argument:

```js
      setTimeout(addText, delay__addText2, dialogueText, activityScenedialogue, resource.challengeArray[activityArrayIndex].intro.asset);
```

Leave the second as it is (no third argument = no voice).

Change `addText` (lines 175–191). Timing matters: each letter is shown by a timer `delay__addText3` (1000 ms) after `addText` runs, plus `i * typewriterDelay`. The voice must start with the first letter, not when `addText` is called, so it fires inside letter 0's timer. Letters' timers are created in order with non-decreasing delays, so letter 0's callback runs before any other letter's and the `voiced` flag is set before they check it.

```js
      // add text typewriter-style. voiceKey: the speaking character's portrait file; a character
      // with a voice in SOUND_CONFIG.characterVoices plays one sound per line in place of the blips.
      function addText(text, element, voiceKey){
        let voiced = false;
        for (let i = 0; i < text.length; i++) {
          const characterSpan = document.createElement('span');
          characterSpan.innerText = text[i];
          characterSpan.style.opacity = 0;
          setTimeout(addText,delay__addText3);
          function addText(){
              setTimeout(() => {
                  characterSpan.style.opacity = 1;
                  // Text from a closed activity keeps typing off-screen; keep it silent.
                  const onScreen = characterSpan.isConnected && characterSpan.offsetParent !== null;
                  if (i === 0 && voiceKey !== undefined && onScreen) {
                    voiced = typeof Sound !== 'undefined' && Sound.voice(resourceTheme, voiceKey) === true;
                  }
                  if (!voiced && onScreen) {
                    typeof Sound !== 'undefined' && Sound.event('dialogue.letter', text[i]);
                  }
              }, i * typewriterDelay);
          }
          element.appendChild(characterSpan);
        }
      }
```

`resourceTheme` is a global from `js/global.js` (line 47), set by the splash, preview and debug panel before any scene is drawn.

### D2. The ❌ branch (older format)

Same change to its `addText` (around lines 338–355; it uses literal `800`, `700`, `1000` instead of the `delay__` variables) and to its first call site:

```js
      setTimeout(addText, 800, dialogueText, activityScenedialogue, resource.activityArray[activityArrayIndex-1].assets.characterShopkeeper);
```

No Camp Calamari voices are configured in this plan, so this branch behaves as today until someone adds a `'camp-calamari': { 'driftwood-dan.png': … }` table. Making the hook now means that is config-only later.

### D3. Preview mode

`gameMode === 'preview'` sets `typewriterDelay = 5`. Nothing to do: the voice plays once per line regardless of letter speed, and the per-letter `dialogue` throttle in the config already handles the fast blips for unvoiced characters.

## Step E: cutscenes, `js/splash-new.js`

Replace lines 2194–2199:

```js
     // Bad guy lines and J.J.'s intro and outro lines play one voice sound instead of a sound per letter.
     const hasJJVoice = ['intro', 'introNoLimit', 'undermurkIntro', 'outro', 'debugOutro'].includes(section);
     let voiceEvent = null;
     if (cutsceneSection[index].textStyle === 'badguy') voiceEvent = 'cutscene.voiceBadguy';
     else if (hasJJVoice && sc_characterSprite?.name === 'J.J. DINGO') voiceEvent = 'cutscene.voiceJJDingo';
```

with:

```js
     // A speaker with an entry in SOUND_CONFIG.characterVoices.cutscene plays one voice sound per
     // line instead of a sound per letter: bad guy lines in any cutscene, named speakers only in
     // intro and outro cutscenes (not fail).
     const voicedSection = ['intro', 'introNoLimit', 'undermurkIntro', 'outro', 'debugOutro'].includes(section);
     const voiceKey = cutsceneSection[index].textStyle === 'badguy' ? 'badguy'
       : voicedSection ? sc_characterSprite?.name : undefined;
     let voiced = false;
```

In `continueFunction` (line 2218), replace:

```js
          if (voiceEvent) { typeof Sound !== 'undefined' && Sound.event(voiceEvent); }
```

with:

```js
          if (voiceKey !== undefined) { voiced = typeof Sound !== 'undefined' && Sound.voice('cutscene', voiceKey) === true; }
```

And the per-letter call (line 2236):

```js
              if (!voiceEvent) { typeof Sound !== 'undefined' && Sound.event('cutscene.letter', letter); }
```

becomes:

```js
              if (!voiced) { typeof Sound !== 'undefined' && Sound.event('cutscene.letter', letter); }
```

`voiced` is assigned before the letter timers are created, so the order is safe. Behaviour is identical to today for J.J. and bad guys; speakers like EMERGENCY ALERT, CUPID or YETI have no entry and keep the typewriter until someone adds one to `characterVoices.cutscene`.

## Step F: docs

In `readme/sound-effects.md` §3 (Sound config), add a short bullet describing `characterVoices` (keys, value shapes, "add a character here"). In §2 (engine), note that files are decoded once and shared between sounds, and list `Sound.voice(theme, key)` with the other public methods. Nothing else in that document changes.

## Verification

There is no front-end test runner. Do these by hand.

Static:
- `node --check js/sound.js js/sound-config.js js/scene.js js/splash-new.js` all pass.
- `grep -rn "cutscene.voice" js tools` returns nothing.
- `git diff --stat` touches only `js/sound.js`, `js/sound-config.js`, `js/scene.js`, `js/splash-new.js`, `readme/sound-effects.md` on top of the pre-existing uncommitted changes.

In the browser (serve the repo root with any static server, e.g. `npx -y serve .` or `python3 -m http.server`, and open `index.html`; the debug panel is loaded there locally and stripped from production builds):

File cache
- [ ] DevTools Network, filter `554`: after entering a code (or using the debug panel's preload), each of the five `…dialogue_mumble_*.ogg` files is requested **once**, even though eight `voice-*` sounds now list them.
- [ ] `switch3.ogg` is requested once (it was four times before Step A).
- [ ] Every other sound still plays: a click, a modal open, the Midnight Mall map crickets, the debrief song.

Cutscenes (debug panel → Escape the Midnight Mall)
- [ ] Intro: J.J. Dingo lines play one voice ~50 ms after the text box opens, no typewriter under them. EMERGENCY ALERT lines still typewriter. MALLCRAWLERS lines play the low voice.
- [ ] Fail: MALLCRAWLERS voiced, J.J. Dingo typewriter (unchanged rule).
- [ ] Outro: J.J. Dingo voiced.
- [ ] Another theme's intro (e.g. Cupid's Countdown): J.J. voiced, the theme's own speakers typewriter, bad guys voiced. Same as before this change.

Activity scene (play Midnight Mall with a code or `free-play.html`)
- [ ] Open a Terrible Topsy challenge: one high voice as the first letter appears; no blips under the character's line; the player's reply below still blips.
- [ ] Solve it and reopen: the "complete" line voices again.
- [ ] Open a Robustus challenge: low voice. Each of the five portraits sounds different.
- [ ] Close the activity while the line is still typing: no late voice or blips.
- [ ] A Camp Calamari reading challenge (older data format): blips as before, no errors in the console.
- [ ] `preview.html` for a Midnight Mall challenge: one voice per line at the fast typewriter.

Toggles
- [ ] Global menu → Sound effects off: character voices and blips both silent; on again: voices return on the next line.
- [ ] A code from a teacher with Audio off: silent, no `assets/audio/` requests, no console errors from `Sound.voice`.

Tuning
- [ ] Ask the user to listen to the five Midnight Mall voices and adjust `pitch`/`volume` in `sounds` until they're happy. That is the only expected follow-up edit.

## Out of scope (later, if wanted)

- **Repeat the voice on long lines** (`every: N` letters per voice sound). Some challenge lines run past 200 characters; one clip may feel thin. Config field plus a few lines in `scene.js`/`splash-new.js`.
- **Per-theme preload for recorded voices.** If a character ever gets its own recorded clips instead of the shared mumbles, mark those sounds `lazy: true` and add a `preload` moment keyed by theme, rather than `sounds: '*'` at code entry.
- **DingoEdit warning for an unvoiced character.** `tools/dingoedit/lib/validate.mjs` runs in Node and can't read `SOUND_CONFIG` (a browser global, not a module). It would need the table in a shared JSON file or a regex read of `sound-config.js`.
- Voices for the other thirteen themes' challenge characters and named cutscene speakers: config entries only, once the Midnight Mall set sounds right.
