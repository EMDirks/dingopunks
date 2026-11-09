# Sound effects (SFX) implementation plan

Branch: `sound-effects` (rebased onto main at 4.0.68). Target release: 4.0.69.

Add a dependency-free Web Audio sound layer for button clicks, transitions, dialogue blips, correct/wrong feedback, hints, modals and the global menu. **Everything about sound — which file plays, how loud, for which event, and when it loads — lives in one file, `js/sound-config.js`.** Teachers get an **Audio** switch in the dashboard Settings modal (above Bonus Missions) that silences the whole game for their students. When the teacher leaves it on, students get a small **Sound** toggle in the global menu that mutes the current game. Music comes later and plugs into the same module and the same config.

Nothing in the game may depend on audio working. Every hook is a one-line, fire-and-forget call that is a no-op when the module is missing, audio is off, the browser lacks Web Audio, or a file fails to load.

---

## 0. Decisions

| # | Decision | Outcome |
|---|----------|---------|
| 1 | Default state of the teacher switch | **On** (missing = on), same shape as Bonus Missions. Turning it off applies to every code the teacher has already shared. |
| 2 | Audio file format | **Ogg Vorbis as shipped for now.** iPads/Macs below iPadOS 18.4 / macOS 15.4 get silence; nothing breaks (a failed decode = no sound). Converting to a second format is planned for later: `src` entries are written as base names so a fallback slots in without touching game code (§3). |
| 3 | What ships | Only the sounds mapped in the config. Move the rest of the 51-file Kenney library to `tools/sfx-library/` (not copied by `scripts/build-pages.mjs`). |
| 4 | Pages with sound | Play (`index.html`), `free-play.html`, `preview.html` (**fully wired, same as play**), `answer-key.html`, `enter-the-undermurk.html`, `debrief.html`. Not `membership.html` or `404.html`. |
| 5 | Hover ("rollover") sounds | Off. Config supports them if wanted later. |
| 6 | Student mute | **In scope.** Separate Sound and Music on/off toggles in the global menu, per game (§6). Only shown when the teacher hasn't turned Audio off. |

---

## 1. Teacher setting: Audio (end to end)

Mirror the Bonus Missions plumbing exactly (commit `4e34d81`). Field name `playAudio`, stored only when off (missing = on), so existing prefs docs and older servers keep audio on.

### 1a. Firestore rules — `firestore.rules`

`isValidUserPrefs()` line 14: add `'playAudio'` to `hasOnly([...])` and a clause `(!('playAudio' in request.resource.data) || request.resource.data.playAudio is bool)`.

Tests in `firebase-functions/test/firestore.rules.test.js` (~line 155–180): copy the three Bonus Missions assertions (missing favorites fails, string/number fail, boolean alongside favorites succeeds) for `playAudio`.

### 1b. Share-code resolution — `firebase-functions/resolve-code.js`

Lines 216–236: alongside `bonusMissions`, read `prefsSnap.get("playAudio") === false` → `audio = false`; return `{ gameId, plan, bonusMissions, audio }`. Update the JSDoc at line 154. The callable in `index.js:226` returns the whole object, so no change is needed there.

Tests in `firebase-functions/test/resolve-code.test.js`: all 13 `assert.deepEqual(await resolve(...), {...})` expectations gain `audio: true`. Add two tests modelled on lines 229–250: "returns the owner's Audio setting on any plan" and "keeps Audio on unless the setting is explicitly false".

Run with the emulator jar per the memory note (`FIRESTORE_EMULATOR_HOST`, `node --test`), or `npx -y firebase-tools@15.34.2 emulators:exec`.

### 1c. Dashboard state and persistence — `js/membership/`

- `context.js` line 34: `playAudio: true,  // teacher setting; false silences sound effects for students`. Line ~106: add `settingsAudioToggle: document.getElementById("dpaam-settings-audio")`.
- `user-prefs.js`:
  - `persistPrefs()`: `if (state.playAudio === false) prefs.playAudio = false;`
  - `loadUserPrefs()`: `state.playAudio = data.playAudio !== false;`
  - New `savePlayAudio(value)` — copy `saveShowBonusMissions` (optimistic set, revert on failure, toast "Audio is turned on/off", `SETTINGS_SAVE_ERROR`).
  - `resetUserPrefs()`: `state.playAudio = true`.

### 1d. Settings modal — `membership.html` + `js/membership.js`

`membership.html` line 1132: insert a new `<section class="dpaam-settings-row">` **before** the Bonus Missions row, same markup, ids `dpaam-settings-audio-label`, `-desc`, `-audio` (the checkbox). No member/free variant.

| Element | Text |
|---------|------|
| Title | Sound |
| Description | Students hear sound effects and music while they play, and can turn each one off from the game menu. Turn this off to keep escape rooms silent for everyone. |

Two stacked rows need a divider: add `.dpaam-settings-row + .dpaam-settings-row { margin-top: var(--dpaam-pad-lg); padding-top: var(--dpaam-pad-lg); border-top: 1px solid var(--dpaam-border); }` in `css/membership.css` next to `.dpaam-settings-row` (line 2037).

`js/membership.js`:
- `openSettingsModal()` (line 2228): `els.settingsAudioToggle.checked = state.playAudio;`
- New `onAudioToggleChange()` — copy `onBonusMissionsToggleChange` (2244), calling `savePlayAudio`, `track("change_setting", { setting: "audio", value })`.
- Line ~2907: `els.settingsAudioToggle?.addEventListener("change", onAudioToggleChange);`
- Import `savePlayAudio` next to `saveShowBonusMissions` (line 61).

### 1e. Play page bridge — `js/play-share-code.js` + `js/splash-new.js`

- `lookupShareCode()` return (line 53): `audio: response?.data?.audio !== false,` (comment: older server omits it, audio stays on). Update the JSDoc at line 31.
- `launchMembershipGame()` line 368, next to the `undermurk` block (it runs before `handlePreloading('onPinInput')`, so the flag is set before any sound loads):
  ```js
  delete debriefStats.audio;
  if (game.audio === false) { debriefStats.audio = 0; }
  ```
  `debriefStats` is serialised into the debrief URL (`splash-new.js:1664`), and the debrief passes `window.location.search` on to Enter the Undermurk (`dpaam-debrief.js:130`, `appendLocationSearch()` in `global-menu.js:177`). So `audio=0` reaches all three pages with no further plumbing, exactly like `undermurk=0`.

Legacy purchase codes, free-play, preview and answer-key never set the flag → audio on.

Phase 1 is deployable on its own: nothing listens to the flag yet.

---

## 2. Sound engine — `js/sound.js` (new, ~180 lines, classic script, no imports)

Global `Sound` object. Contains **no sound names, file names, volumes or timings** — all of that comes from `SOUND_CONFIG`. Loaded on the six pages in §0.4 (see §7). Must not depend on `global.js` (debrief.html doesn't load it). Reads `debriefStats` and `version` only via `typeof` guards.

### Two separate "off" switches

| | Teacher off | Student muted |
|---|---|---|
| Set by | Dashboard Audio setting (§1) | Global menu Sound toggle (§6) |
| Carried as | `debriefStats.audio = 0` / `?audio=0` | `debriefStats.mute = 1` / `?mute=1` |
| Effect | Engine **unavailable**: no `AudioContext`, no fetches, toggle hidden | Engine available but master gain at 0; sounds still preload so unmuting is instant |
| Query | `Sound.isAvailable()` → false | `Sound.isMuted()` → true |

`isAvailable()` is a function evaluated on each call, not a cached boolean, because `debriefStats.audio` is set inside `launchMembershipGame` after `DOMContentLoaded`. It returns false when any of:
- `typeof debriefStats !== 'undefined' && debriefStats.audio === 0`
- `new URLSearchParams(location.search).get('audio') === '0'`
- `!(window.AudioContext || window.webkitAudioContext)`
- `SOUND_CONFIG` missing or `SOUND_CONFIG.enabled === false`

Muted starts true when `debriefStats.mute === 1` or `?mute=1`.

### Pipeline

```
AudioContext (created on first preload)
  fetch(url) → arrayBuffer → decodeAudioData → buffers Map (name → AudioBuffer[])
  unlock: pointerdown / touchend / keydown / click on document (capture, passive)
          → ctx.resume() — keep listeners until ctx.state === 'running'
  play(name): BufferSource → per-play Gain (volume) → master Gain → destination
              playbackRate = random in pitch range (if set)
```

### Public API

| Method | Behaviour |
|--------|-----------|
| `Sound.onPreloadEvent(eventName)` | Called from `handlePreloading` (§4). Looks up `SOUND_CONFIG.preload[eventName]` and preloads what it lists, honouring `delay`. Unknown events are ignored. |
| `Sound.preload(names?)` | Fetch + decode. `'*'` or no arg = every sound in `SOUND_CONFIG.sounds`. Idempotent; a failed fetch logs once and marks the name missing (never retried, never throws). |
| `Sound.event(eventName, detail?)` | Looks up `SOUND_CONFIG.events[eventName]` → sound name (`null` = silent) and plays it. **All game code calls this, never a sound name directly**, so remapping is config-only. Applies the `SOUND_CONFIG.dialogue` throttle for `dialogue.letter`. |
| `Sound.voice(theme, key)` | Looks up `SOUND_CONFIG.characterVoices[theme][key]` (§3, Character voices) and plays it, honouring `delay`. Returns `true` when the character has an entry (even `null`), so the caller skips its letter blips; `false` = no entry, keep the blips. A voice never replaces a tap's click sound. Used by `js/scene.js` (theme folder + portrait file, or `'player'` + the player character's asset file) and `js/splash-new.js` (`'cutscene'` + speaker name or `'badguy'`). |
| `Sound.setMuted(bool)` / `Sound.isMuted()` | Master gain to 0 / back. Per game only: no `localStorage` (§6). |
| `Sound.isAvailable()` | False when the teacher turned Audio off or the browser can't play audio. The menu uses it to decide whether to show the toggle. |

Internal `play(name)`: picks a random `src` if several, applies volume/pitch, respects `maxVoices` (drops the play if that many instances are already live). Silent no-op when unavailable, when the sound name is unknown, when its `src` is empty, or when the buffer isn't decoded yet (no queuing). **If the context is still suspended (the student's first tap on iPad), it calls `ctx.resume()` and still starts the sound**, which plays as soon as the context resumes a few ms later — so the first tap is never silent.

Files are fetched and decoded **once per file**, not once per sound: `loadFile()` keeps a promise per file name, and every sound that lists the file shares the decoded buffer. The `voice-*` sounds all list the same five mumble clips, so adding characters costs no memory or download.

### Per-game overrides (for later)

If a game's resource script defines `localSoundConfig` (same idea as the existing `localAssetArrays`), the engine merges its `sounds`, `events` and `preload` over `SOUND_CONFIG` when first used. Nothing defines it in this pass; it's how per-game music will be configured.

### Safety rules

- Every public method body is wrapped in `try { … } catch (e) { /* log once */ }`.
- Call sites use `typeof Sound !== 'undefined' && Sound.event('x')` so a 404 on `sound.js` can't throw `ReferenceError` in game code.
- Delegated click listener on `document` in the **capture** phase, no `preventDefault`/`stopPropagation`, so it fires before and regardless of any handler (e.g. the global-menu document listener at `global-menu.js:300`).
- `visibilitychange`: `ctx.suspend()` when hidden, `ctx.resume().catch(()=>{})` when visible (only if previously unlocked).
- iPad side switch on mute silences Web Audio by default; leave that (expected in classrooms).
- Cache-busting: append `?v=<version>` to audio URLs when a global `version` const exists (`splash-new.js:19`, `debrief.js:1`), so a replaced file with the same name reaches students.

---

## 3. Sound config — `js/sound-config.js` (new; the one file to edit)

Loaded right before `sound.js`. Plain object, no code. **Rule: if it's a decision about sound, it goes here.** Any `data-sfx` attribute used in game code must also be listed in the comment at the bottom of this file so nothing is hidden elsewhere.

```js
const SOUND_CONFIG = {
  enabled: true,                 // master switch for the whole site
  basePath: 'assets/audio/',     // src names start with their folder: sfx/ or loop/
  formats: ['ogg'],              // later: ['m4a', 'ogg'] — engine picks the first the browser can play

  // name → file(s) + mix. src are folder/base names (no extension), e.g. 'sfx/click1'. Several = random pick per play.
  sounds: {
    click:   { src: ['sfx/click1'],                     volume: 0.5 },
    key:     { src: ['sfx/click3', 'sfx/click4', 'sfx/click5'], volume: 0.35 },              // code keyboard
    tab:     { src: ['sfx/switch12'],                   volume: 0.5 },               // setup tabs, character pick
    toggle:  { src: ['sfx/switch9'],                    volume: 0.45 },              // global menu Sound toggle (audition)
    blip:    { src: ['sfx/click2'], volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 }, // typewriter
    whoosh:  { src: ['sfx/switch22'],                   volume: 0.45 },              // audition
    open:    { src: ['sfx/switch2'],                    volume: 0.45 },
    close:   { src: ['sfx/switch3'],                    volume: 0.4 },
    hint:    { src: ['sfx/switch18'],                   volume: 0.5 },
    correct: { src: [],                             volume: 0.6 },               // not in the Kenney UI pack yet
    wrong:   { src: [],                             volume: 0.5 },               // not in the Kenney UI pack yet
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

  // When sounds load. Keys are the existing handlePreloading() moments:
  // onPinInput, onSettings, onCharacterSelect, onCutsceneStart, onGameStart,
  // onGameEnd, onDebrief, onUndermurkPage. onPageLoad is fired by sound.js itself
  // for pages that never call handlePreloading (debrief.html), keyed by page.
  // sounds: '*' = everything in `sounds`, or a list of names. delay in ms.
  preload: {
    onPinInput:      { sounds: '*', delay: 0 },   // first screen; all SFX together are ~100 KB
    onUndermurkPage: { sounds: '*', delay: 0 },
    onPageLoad:      { 'debrief.html': { sounds: '*', delay: 0 } },
    // later, music: onCutsceneStart: { music: ['theme'], delay: 500 },
  },

  // Delegated clicks: first matching selector wins. Element attr data-sfx="name"
  // overrides; data-sfx="none" silences. [disabled] and *--inactive elements are ignored.
  // Elements that fire an explicit event (activity nodes, hint button, menu button)
  // are deliberately left out so each action plays exactly one sound.
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
  //   global-menu.js  .global-menu__sound-toggle  data-sfx="none"  (plays ui.toggle itself, §6)
  //   activity.js     .activity-button-hint        data-sfx="none"  (plays hint.open/close)
  //   global-menu.js  .button-menu-global          data-sfx="none"  (plays modal.open)
};
```

Notes:
- `correct` / `wrong`: pick from Kenney "Digital Audio" / "Interface Sounds" (CC0) or generate with jsfxr, then point `code.correct` / `code.wrong` at them. No code change.
- Verified classes on 4.0.68: `.splash-button` (`splash-new.js:500`), `.character-select-button` (`splash-new.js:1466`), `.tab-button` (`splash-new.js:1265`, `enter-the-undermurk.js:56`), `.global-menu__kids-link` (`global-menu.js:37`, inactive cards are `span`s with `--inactive`, ignored by the rule above).

### Character voices — `characterVoices`

One sound as a character's line starts, in place of the letter blips. Plan and rationale: `readme/character-voices.md`.

- `characterVoices.cutscene`: keyed by `characterSprite.name` exactly as the cutscene file writes it (`'J.J. DINGO'`), plus `'badguy'` for any `textStyle: 'badguy'` line. Named speakers are voiced in intro and outro cutscenes only, not fail (the rule lives in `js/splash-new.js`).
- `characterVoices.player`: the player-selected characters, keyed by their `asset` file in `characterArray` (`js/global.js`), e.g. `'mint.png'`. Voices the player's reply in every theme's activity scene, in place of the letter blips.
- `characterVoices['<theme folder>']`: challenge characters in the activity scene, keyed by the challenge's `intro.asset` portrait file (`assets.characterShopkeeper` in the older `activityArray` format). The portrait, not the name, because names vary between challenges ("Terrible Topsy" / "Topsy").
- Values take the same shapes as `events`: a sound name, `{ sound, delay }`, or `null` for a speaker that is silent with no blips. A character left out keeps the blips. The player's reply line always blips.
- **To add a character:** add a `voice-<name>` entry to `sounds` (usually `src: VOICE_CLIPS` with its own `pitch`), then map it here.

---

## 4. Explicit hooks in game code (small, auditable edits)

Every insertion is the single line `typeof Sound !== 'undefined' && Sound.…;`. Clicks need no edits (delegation).

| Where | Call |
|-------|------|
| `js/global.js` `handlePreloading()` line 2062, first line of the function | `Sound.onPreloadEvent(eventName)` — the **only** preload hook; which sounds load at which moment is decided in `SOUND_CONFIG.preload`. Covers play, free-play, preview, answer-key and Undermurk (all call `handlePreloading`). |
| `js/splash-new.js` `transitionSplash()` 554, top of function | `Sound.event('splash.transition')` |
| `js/splash-new.js` `addTextByTypewriter()` 1956, inside the per-letter `setTimeout` | `Sound.event('dialogue.letter', letter)` |
| `js/scene.js` `addText()` 175 and 337, inside the per-letter `setTimeout` (the `opacity = 1` callback) | `Sound.event('dialogue.letter', letter)` |
| `js/scene.js` 113 and 283, the `setTimeout(toggleClass, 1300, …--open)` — wrap in a tiny function that also fires the event | `Sound.event('scene.open')` |
| `js/activity.js` `openActivityModal()` 654 / `closeActivityModal()` 766 | `activity.open` / `activity.close` |
| `js/activity.js` `openHintModal()` 620, in the open/close branches. Pass a flag from `closeActivityModal()` (line 768, which closes an open hint) so closing an activity plays only `activity.close`. | `hint.open` / `hint.close` |
| `js/activity.js` `setComplete()`: wrong — just inside `if (…answer !== userArray… && numInputsFilled == …)` at 349 and the mirror at 471, so it fires once per check, not per letter. Correct — inside `if (state !== "complete")` at 390 and the mirror, so the re-checks `syncUpdates` triggers don't repeat it. | `code.wrong` / `code.correct` |
| `js/global.js` `toggleModalVisibility()` 1801 **and** `js/debrief.js` `toggleModalVisibility()` 412 (debrief has its own copy), branching on `isModalVisible` | `modal.open` / `modal.close` — one site per file covers every way a modal opens or closes (button, X, blackout, global menu) |

`openGlobalMenu()` needs no sound hook: the menu opens through `createModal` → `toggleModalVisibility`.

Leave `enter-the-undermurk.js` and `dpaam-debrief.js` untouched in this pass apart from delegation.

---

## 5. Teacher switch × student toggle

```
Teacher Audio OFF  → audio=0 → Sound unavailable → no sound, toggle not shown
Teacher Audio ON   → Sound available → toggle shown in global menu
                       ├─ Sound On  (default for every new game)
                       └─ Sound Off → mute=1 for the rest of this game
```

---

## 6. Student Sound and Music toggles — `js/global-menu.js` + `css/global.css`

> **Update:** there are now two switches side by side. **Sound** works as described below. **Music** does the same for every sound marked `music: true` in `SOUND_CONFIG` (just the music: today, the Wiggleworm song; background loops like the Midnight Mall crickets count as sound effects), using `Sound.setMusicMuted()` / `Sound.isMusicMuted()` and `debriefStats.muteMusic = 1` / `?muteMusic=1`. Each has its own gain bus into the master gain, so `Sound.setMuted()` only touches sound effects. Both switches play `ui.toggle` after a change, which stays silent while Sound is off. The teacher's single dashboard setting still turns off both.

A simple on/off switch in the global menu, below the kid cards. Per game: muting lasts through this game's play, debrief and Undermurk pages; the next game starts with sound on.

**When it shows:** only when `typeof Sound !== 'undefined' && Sound.isAvailable()`. If the teacher turned Audio off (or sound can't play), the toggle isn't rendered at all. `preview.html` doesn't load `global-menu.js`, so it has sound but no toggle (teachers use device volume there).

**Markup** (appended inside `.global-menu` in `buildGlobalMenuHTML()`, line 182):

```html
<button type="button" class="global-menu__sound-toggle" role="switch"
        aria-checked="true" data-sfx="none">
  <span class="global-menu__sound-toggle-label">Sound</span>
  <span class="global-menu__sound-toggle-track"><span class="global-menu__sound-toggle-thumb"></span></span>
</button>
```

`aria-checked` reflects `!Sound.isMuted()` each time the menu is built.

**Behaviour** (one delegated click handler next to the existing one at `global-menu.js:300`):
1. Flip `Sound.setMuted(!Sound.isMuted())` and update `aria-checked`.
2. Record it for the rest of the game:
   - Play pages: `debriefStats.mute = 1` when muted, `delete debriefStats.mute` when unmuted — it then rides the debrief URL like `undermurk`.
   - `debrief.html` / `enter-the-undermurk.html`: update `mute=1` in the URL with `history.replaceState`, so links built from `location.search` (`appendLocationSearch`, `dpaam-debrief.js:130`) carry it.
3. When turning sound **on**, play `Sound.event('ui.toggle')` as confirmation (it's `data-sfx="none"`, so muting is silent).

No `localStorage`: a new game, a page refresh, or "Play Another Escape Room" (fresh `debriefStats`, no `mute` in the URL) starts with sound on.

**CSS** (`css/global.css`, next to `.global-menu` at line 558): a small pill switch, centred under the cards, matching the menu's existing colours; thumb slides right and track fills when on. Include the mobile block at line 502. Keep it visually quiet — it's secondary to the cards.

---

## 7. Page wiring

On each of `index.html`, `free-play.html`, `preview.html`, `answer-key.html`, `enter-the-undermurk.html`, `debrief.html`, add these as the **first two classic scripts** in the body script list (before `global.js`; on `debrief.html` before `debrief.js`). `preview.html` has no `config.js`, so "after `config.js`" doesn't work everywhere.

```html
<script type="text/javascript" src="js/sound-config.js?version=4.0.68"></script>
<script type="text/javascript" src="js/sound.js?version=4.0.68"></script>
```

`scripts/bump-version.mjs` rewrites these with the others. `scripts/build-pages.mjs` copies `js/` and `assets/`, so the new files and `assets/audio/` ship automatically.

---

## 8. Order of work (each step leaves `main`-mergeable state)

1. **Audio assets**: audition and adjust the picks in `sound-config.js` (especially `whoosh` and `toggle`), then move unmapped files to `tools/sfx-library/`.
2. **Teacher setting** (§1): rules + tests → resolve-code + tests → `user-prefs` / `context` → modal markup + CSS → `membership.js` handlers → `play-share-code` / `launchMembershipGame`. Run `npm test` in `firebase-functions/`. Deploy backend before site (`firestore:rules,functions`).
3. **Engine + config + page wiring** (§2, §3, §7) with only delegated clicks and the `handlePreloading` hook active. Verify zero console errors on all six pages, with audio on and with `?audio=0`.
4. **Explicit hooks** (§4), one file at a time, re-testing the flow after each.
5. **Student toggle** (§6).
6. **QA** (§9), then `node scripts/bump-version.mjs`, `node scripts/build-pages.mjs`, publish per the usual sequence.

Commit after each numbered step with a message in the repo's style.

---

## 9. QA checklist

Teacher switch
- [ ] Share code from an account with Audio **on**: clicks, keyboard, tabs, transitions, dialogue blips, hint, modals, menu all sound; debrief and Undermurk pages too.
- [ ] Toggle Audio **off** in dashboard → new launch of the *same existing* code is silent on play, debrief and Undermurk; URL carries `audio=0`; no network requests for `assets/audio/`; **no Sound toggle in the global menu**.
- [ ] Toggle back on → sound and the menu toggle return without re-sharing the code.
- [ ] Dashboard: toggle state persists across reload; Bonus Missions toggle still saves; a favorites save doesn't clobber either setting.

Student toggle
- [ ] Menu shows Sound On by default; switching off silences everything immediately; switching on plays the confirmation sound.
- [ ] Muted during play → debrief and Undermurk stay muted; URL carries `mute=1`; toggle shows Off there.
- [ ] Muted on the debrief page → going to Undermurk stays muted.
- [ ] "Play Another Escape Room" and a fresh code launch start with sound on.
- [ ] Toggle is keyboard-operable and announced as a switch by VoiceOver.

Pages and preloading
- [ ] Legacy purchase code, `free-play.html`, `answer-key.html`: sound on, nothing else changed.
- [ ] `preview.html`: fully wired — clicks, dialogue blips (throttled at 5 ms/letter, no buzz), hint, modals.
- [ ] Network tab: audio loads at the moments in `SOUND_CONFIG.preload`; changing a key there (e.g. `onPinInput` → `onSettings`) moves it with no code change.
- [ ] Rename `sound.js` temporarily (simulate 404): game fully playable, no errors.
- [ ] Rename one audio file: single console warning, everything else plays.

Single sounds
- [ ] Global menu button: exactly one sound (`modal.open`).
- [ ] Activity node: one `activity.open`, no extra click.
- [ ] Hint button: one `hint.open` / `hint.close`; closing an activity with the hint open plays only `activity.close`.
- [ ] Rapid clicks / fast typing on the code keyboard: overlap cleanly, no clipping.
- [ ] Tab hidden → sounds stop; tab visible → resume on next interaction.

Browsers / devices
- [ ] Chrome (desktop + Chromebook), Firefox, Safari macOS 15.4+, iPad Safari 18.4+ (side switch both ways), Android Chrome.
- [ ] **First tap on iPad plays its sound** (not silent).
- [ ] iPad/Mac below 18.4 / 15.4: silent, no errors, game fully playable (known gap, §0.2).

Backend
- [ ] `npm test` in `firebase-functions/` green (rules + resolve updated).
- [ ] Deployed rules accept `{favorites, showBonusMissions, playAudio}` and reject non-bool `playAudio`.

---

## 10. Later (not in this branch)

- **Second audio format** for older iPads: convert the mapped files, set `formats: ['m4a', 'ogg']`. Config-only.
- **Music**: `Sound.music.play(name, { fade })` streaming through an `<audio>` element + `createMediaElementSource` into the master gain (no decoding of multi-MB buffers); ducking under dialogue; loaded per moment via `music:` entries in `SOUND_CONFIG.preload`, per game via `localSoundConfig`. The teacher switch and student toggle cover it automatically.
- `correct` / `wrong` sounds, debrief outcome stings and Undermurk tier transitions (events already reserved as `null`).
- Hover sounds on desktop if ever wanted (`rollover*` kept in `tools/sfx-library/`).
