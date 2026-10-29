# Sound effects (SFX) implementation plan

Branch: `sound-effects`. Target release: next patch after 4.0.65.

Add a dependency-free Web Audio sound layer for button clicks, transitions, dialogue blips, correct/wrong feedback, hints, modals and the global menu, with one config file where every sound is assigned. Teachers get an **Audio** switch in the dashboard Settings modal (above Bonus Missions) that silences the whole game for their students. Music comes later and plugs into the same module.

Nothing in the game may depend on audio working. Every hook is a one-line, fire-and-forget call that is a no-op when the module is missing, audio is off, the browser lacks Web Audio, or a file fails to load.

---

## 0. Decisions to confirm before starting

| # | Decision | Recommendation |
|---|----------|----------------|
| 1 | Default state of the teacher switch | **On** (missing = on), same shape as Bonus Missions. Teachers who run 30 Chromebooks can turn it off once and it sticks for every code they share. |
| 2 | Audio file format | **Decided: Ogg Vorbis as shipped** (Kenney UI Audio pack, no conversion). Known gap: Safari only plays Ogg Vorbis from iOS/iPadOS 18.4 and macOS 15.4 (March 2025), so older iPads and Macs get silence. The engine already treats a failed decode as "no sound", so nothing breaks. Revisit with GA iPadOS version data or when music lands; an `.mp3` fallback would slot into `src` without touching game code. |
| 3 | What ships | Only the sounds actually mapped in the config. Move the full 53-file Kenney library out of `assets/` (e.g. `tools/sfx-library/`, not copied by `scripts/build-pages.mjs`) so unused files aren't deployed. |
| 4 | Pages with sound | Play (`index.html`), `free-play.html`, `preview.html`, `answer-key.html`, `enter-the-undermurk.html`, `debrief.html`. Not `membership.html` (teacher dashboard) and not `404.html`. |
| 5 | Hover ("rollover") sounds | Off. They would fire constantly on desktop and never on touch; config supports them if wanted later. |
| 6 | Student-side mute | Out of scope for this pass. The engine exposes `Sound.setMuted()`, so a mute button in the global menu is a small follow-up. |

---

## 1. Teacher setting: Audio (end to end)

Mirror the Bonus Missions plumbing exactly (commit `4e34d81`). Field name `playAudio`, stored only when off (missing = on), so existing prefs docs and older servers keep audio on.

### 1a. Firestore rules — `firestore.rules`

`isValidUserPrefs()` line 14: add `'playAudio'` to `hasOnly([...])` and a clause `(!('playAudio' in request.resource.data) || request.resource.data.playAudio is bool)`.

Tests in `firebase-functions/test/firestore.rules.test.js` (~line 155–180): copy the three Bonus Missions assertions (missing favorites fails, string/number fail, boolean alongside favorites succeeds) for `playAudio`.

### 1b. Share-code resolution — `firebase-functions/resolve-code.js`

Lines 216–236: alongside `bonusMissions`, read `prefsSnap.get("playAudio") === false` → `audio = false`; return `{ gameId, plan, bonusMissions, audio }`. Update the JSDoc at line 154.

Tests in `firebase-functions/test/resolve-code.test.js`: every `assert.deepEqual(await resolve(...), {...})` compares the whole object, so all ~14 expectations gain `audio: true`. Add two tests modelled on lines 229–250: "returns the owner's Audio setting on any plan" and "keeps Audio on unless the setting is explicitly false".

Run with the emulator jar per the memory note (`FIRESTORE_EMULATOR_HOST`, `node --test`), or `npx -y firebase-tools@15.34.2 emulators:exec`.

### 1c. Dashboard state and persistence — `js/membership/`

- `context.js` line 34: `playAudio: true,  // teacher setting; false silences sound effects for students`. Lines ~106: add `settingsAudioToggle: document.getElementById("dpaam-settings-audio")`.
- `user-prefs.js`:
  - `persistPrefs()`: `if (state.playAudio === false) prefs.playAudio = false;`
  - `loadUserPrefs()`: `state.playAudio = data.playAudio !== false;`
  - New `savePlayAudio(value)` — copy `saveShowBonusMissions` (optimistic set, revert on failure, toast "Audio is turned on/off", `SETTINGS_SAVE_ERROR`).
  - `resetUserPrefs()`: `state.playAudio = true`.

### 1d. Settings modal — `membership.html` + `js/membership.js`

`membership.html` line 1132: insert a new `<section class="dpaam-settings-row">` **before** the Bonus Missions row, same markup, ids `dpaam-settings-audio-label`, `-desc`, `-audio` (the checkbox). No member/free variant.

Copy:

| Element | Text |
|---------|------|
| Title | Audio |
| Description | Students hear sound effects for buttons, dialogue, and transitions while they play. Turn this off to keep escape rooms silent. |

Two stacked rows need a divider: add `.dpaam-settings-row + .dpaam-settings-row { margin-top: var(--dpaam-pad-lg); padding-top: var(--dpaam-pad-lg); border-top: 1px solid var(--dpaam-border); }` in `css/membership.css` next to `.dpaam-settings-row` (~line 2036). `--dpaam-border` is an existing token in that file.

`js/membership.js`:
- `openSettingsModal()` (line 2228): `els.settingsAudioToggle.checked = state.playAudio;`
- New `onAudioToggleChange()` — copy `onBonusMissionsToggleChange`, calling `savePlayAudio`, `track("change_setting", { setting: "audio", value })`.
- Line ~2907: `els.settingsAudioToggle?.addEventListener("change", onAudioToggleChange);`
- Import `savePlayAudio` wherever `saveShowBonusMissions` is imported.

### 1e. Play page bridge — `js/play-share-code.js` + `js/splash-new.js`

- `lookupShareCode()` return: `audio: response?.data?.audio !== false,` (comment: older server omits it, audio stays on). Update the JSDoc.
- `launchMembershipGame()` line 368: next to the `undermurk` block,
  ```js
  delete debriefStats.audio;
  if (game.audio === false) { debriefStats.audio = 0; }
  ```
  `debriefStats` is serialised into the debrief URL (line 1662), and the debrief passes `window.location.search` on to Enter the Undermurk (`dpaam-debrief.js` 130, `global-menu.js` 167). So `audio=0` reaches all three pages with no further plumbing, exactly like `undermurk=0`.

Legacy purchase codes, free-play, preview and answer-key never set the flag → audio on.

Phase 1 is deployable on its own: nothing listens to the flag yet.

---

## 2. Sound engine — `js/sound.js` (new, ~150 lines, classic script, no imports)

Global `Sound` object. Loaded immediately after `config.js` on the six pages in §0.4, with `?version=4.0.65` so `scripts/bump-version.mjs` picks it up (it rewrites every `?version=` in the listed HTML files). `_headers` already makes `/js/*` revalidate.

Must not depend on `global.js` (debrief.html doesn't load it). Reads `debriefStats` and `version` only via `typeof` guards.

### Enabled check (runs once on `DOMContentLoaded`)

Audio is **off** when any of:
- `typeof debriefStats !== 'undefined' && debriefStats.audio === 0` (set during play by §1e)
- `new URLSearchParams(location.search).get('audio') === '0'` (debrief / Undermurk pages)
- `!(window.AudioContext || window.webkitAudioContext)`
- `SOUND_CONFIG` missing or `SOUND_CONFIG.enabled === false`

When off: no `AudioContext`, no fetches, every public method returns immediately. Zero cost.

Note: `debriefStats.audio` is set inside `launchMembershipGame`, after `DOMContentLoaded`. So the check must be lazy: evaluate on first `play()`/`preload()` call *and* re-check `debriefStats.audio` on every `play()` (cheap). Simplest: `isEnabled()` is a function, not a cached boolean, and `preload` is only triggered by `handlePreloading('onPinInput')`, which runs after the flag is set.

### Pipeline

```
AudioContext (created suspended on first preload)
  fetch(url) → arrayBuffer → decodeAudioData → buffers Map (name → AudioBuffer[])
  unlock: pointerdown / touchend / keydown / click on document (capture, passive)
          → ctx.resume() — keep listeners until ctx.state === 'running'
  play(name): BufferSource → per-play Gain (volume) → master Gain → destination
              playbackRate = random in pitch range (if set)
```

### Public API

| Method | Behaviour |
|--------|-----------|
| `Sound.preload(names?)` | Fetch + decode. No arg = every sound in `SOUND_CONFIG.sounds`. Idempotent; a failed fetch logs once and marks the name missing (never retried, never throws). |
| `Sound.play(name, opts?)` | Picks a random `src` if several, applies volume/pitch, respects `maxVoices` (drops the play if that many instances of the sound are already live). Silent no-op before unlock, when disabled, or when the buffer isn't decoded yet (no queuing). |
| `Sound.event(eventName, detail?)` | Looks up `SOUND_CONFIG.events[eventName]` → sound name (or `null` = silent) and calls `play`. **All game code calls this, never `play` directly**, so remapping is config-only. For `dialogue.letter` applies the throttle in `SOUND_CONFIG.dialogue`. |
| `Sound.setMuted(bool)` / `Sound.setVolume(0–1)` | Master gain. Persist in `localStorage` (try/catch) for the follow-up student mute. |
| `Sound.isEnabled()` | For UI. |

### Safety rules

- Every public method body is wrapped in `try { … } catch (e) { /* log once */ }`.
- Call sites use `typeof Sound !== 'undefined' && Sound.event('x')` so a 404 on `sound.js` can't throw `ReferenceError` in game code.
- Delegated click listener on `document` in the **capture** phase, no `preventDefault`/`stopPropagation`, so it fires before and regardless of any handler (e.g. the global-menu document listener at `global-menu.js:285`).
- `visibilitychange`: `ctx.suspend()` when hidden, `ctx.resume().catch(()=>{})` when visible (only if previously unlocked).
- iPad side switch on mute silences Web Audio by default; leave that (expected in classrooms).
- Cache-busting: append `?v=<version>` to audio URLs when a global `version` const exists (defined by `splash-new.js`/`debrief.js`, which load before preload runs). Lets a replaced file with the same name reach students.

### Preload timing

All mapped SFX together are ~100 KB; decoding a dozen short buffers is a few ms. So `handlePreloading` triggers it on the existing `onPinInput` event (first user screen, well before any sound is needed) — see §4. On `debrief.html` and `enter-the-undermurk.html` (no `onPinInput`), `sound.js` self-preloads on `DOMContentLoaded` via `setTimeout(…, 0)`.

---

## 3. Sound config — `js/sound-config.js` (new; the one file to edit)

Loaded right before `sound.js`. Plain object, no code. Proposed defaults, pointing straight at the Kenney `.ogg` files in `assets/audio/sfx/` (filenames kept as shipped; the config gives them meaningful names):

```js
const SOUND_CONFIG = {
  enabled: true,
  basePath: 'assets/audio/sfx/',

  // name → file(s) + mix. Several src = random pick per play.
  sounds: {
    click:      { src: ['click1.ogg'],                          volume: 0.5 },               // from click1
    key:        { src: ['click3.ogg', 'click4.ogg', 'click5.ogg'],   volume: 0.35 },              // click3/4/5 — code keyboard
    tab:        { src: ['switch12.ogg'],                            volume: 0.5 },               // switch12 — setup tabs, character pick
    blip:       { src: ['click2.ogg'],  volume: 0.22, pitch: [0.94, 1.06], maxVoices: 2 },       // click2 — typewriter
    whoosh:     { src: ['switch22.ogg'],                            volume: 0.45 },              // switch22-ish; audition
    open:       { src: ['switch2.ogg'],                        volume: 0.45 },              // switch2
    close:      { src: ['switch3.ogg'],                       volume: 0.4 },               // switch3
    correct:    { src: [],                           volume: 0.6 },               // NEW: not in the Kenney UI pack — see note
    wrong:      { src: [],                             volume: 0.5 },               // NEW
    hint:       { src: ['switch18.ogg'],                              volume: 0.5 },               // switch18
  },

  // Game events → sound name. null = silent. Add keys freely; unknown events are ignored.
  events: {
    'ui.click':            'click',
    'ui.key':              'key',
    'ui.tab':              'tab',
    'splash.transition':   'whoosh',
    'cutscene.next':       'click',
    'dialogue.letter':     'blip',
    'scene.open':          'open',
    'activity.open':       'open',
    'activity.close':      'close',
    'hint.open':           'hint',
    'hint.close':          'close',
    'code.correct':        'correct',
    'code.wrong':          'wrong',
    'modal.open':          'open',
    'modal.close':         'close',
    'menu.open':           'open',
    'menu.close':          'close',
    'debrief.victory':     null,      // phase 5
    'debrief.fail':        null,
    'undermurk.tier':      null,
  },

  // Delegated clicks: first matching selector wins. Element attr data-sfx="name"
  // overrides; data-sfx="none" silences. Elements with [disabled] are ignored.
  clicks: [
    { match: '.keyboard-button',                                   event: 'ui.key' },
    { match: '.tab-button, .character-select-button',              event: 'ui.tab' },
    { match: 'button, .button, .splash-button, .cutscene-next-button, .activity-node, ' +
             '.activity-button-done, .activity-button-hint, .activity-scene-button-start, ' +
             '.code-box-button, .button-menu-global, .footer-button-menu, .global-menu__kids-link, ' +
             '.icon-clickable--splash, .button-close-modal',          event: 'ui.click' },
  ],

  // Typewriter throttle: a blip every N visible letters, never closer than minGapMs
  // (preview mode runs the typewriter at 5 ms/letter — the gap keeps it from buzzing).
  dialogue: { every: 2, skip: ' .,!?\'"', minGapMs: 45 },
};
```

Notes:
- `correct` / `wrong` need two sounds the Kenney UI pack doesn't have. Options: Kenney "Digital Audio" or "Interface Sounds" packs (CC0), or generate with jsfxr. Until chosen, map both to `null` — the engine ignores nulls.
- Verified classes: `.splash-button` (`splash-new.js:500`, a real `<button>`), `.activity-node` (`home.js:49`, a `div`), `.global-menu__kids-link` (`global-menu.js:37`, an `<a>`; inactive cards are `span`s with `--inactive` and should be excluded). `.character-select-button` (`splash-new.js:1466`, a `<button>`). Grep the CSS button list: `.activity-button-*`, `.activity-scene-button*`, `.button`, `.button-close-modal`, `.button-menu-global`, `.code-box-button`, `.cutscene-next-button`, `.footer-button-menu`, `.keyboard-button`, `.menu-button`, `.tab-button`.
- Elements that both have a delegated click sound *and* trigger an explicit event (e.g. the hint button → `ui.click` + `hint.open`) would double up. Rule: anything with an explicit event gets `data-sfx="none"` at creation, or its selector is left out of `clicks`. Decide per element while implementing; list them in the PR.

---

## 4. Explicit hooks in game code (small, auditable edits)

Every insertion is the single line `typeof Sound !== 'undefined' && Sound.event('…');`. Clicks need no edits (delegation).

| Where | Event |
|-------|-------|
| `js/global.js` `handlePreloading()` ~2077: after the image branches, `if (eventName === 'onPinInput' && typeof Sound !== 'undefined') Sound.preload();` — plus forward an optional `sound: [...]` list on any event's asset entry to `Sound.preload(list)` (future music). | — |
| `js/splash-new.js` `transitionSplash()` 554, top of function | `splash.transition` |
| `js/splash-new.js` `addTextByTypewriter()` ~1975, inside the per-letter `setTimeout` | `dialogue.letter`, pass the letter |
| `js/splash-new.js` cutscene next button handler 1606 | covered by delegation (`.cutscene-next-button`) |
| `js/scene.js` `addText()` 175 and 337, inside the per-letter `setTimeout` (the `opacity = 1` callback) | `dialogue.letter`, pass the letter |
| `js/scene.js` 113 and ~283, when the dialogue wrapper opens (`setTimeout(toggleClass, 1300, …--open)`) — wrap in a tiny function that also fires the event | `scene.open` |
| `js/activity.js` `openActivityModal()` 654 / `closeActivityModal()` 766 | `activity.open` / `activity.close` |
| `js/activity.js` `openHintModal()` 620, in the open/close branches | `hint.open` / `hint.close` |
| `js/activity.js` `setComplete()`: in `findNonIdenticalIndices` before the loop (349 and the mirror ~471) and in the "answer matches" branch (389 and mirror). The wrong branch fires once per *check*, not per letter: put the call just inside `if (…answer !== userArray… && numInputsFilled == …)`. Guard the correct branch so it fires only on the transition to complete (inside `if (state !== "complete")`), not on every subsequent `syncUpdates`. | `code.wrong` / `code.correct` |
| `js/global.js` `createModal()` 1752 and its close handlers 1784–1796 | `modal.open` / `modal.close` |
| `js/global-menu.js` `openGlobalMenu()` 232 | `menu.open` (the menu is a `createModal` popup, so its close already fires `modal.close`; drop the `menu.close` event or map it to `null`) |

Keep `enter-the-undermurk.js` and `debrief.js` untouched in this pass apart from delegation (events are mapped to `null`).

---

## 5. Page wiring

Add to each of `index.html`, `free-play.html`, `preview.html`, `answer-key.html`, `enter-the-undermurk.html`, `debrief.html`, directly after `js/config.js`:

```html
<script type="text/javascript" src="js/sound-config.js?version=4.0.65"></script>
<script type="text/javascript" src="js/sound.js?version=4.0.65"></script>
```

Both files are copied by `scripts/build-pages.mjs` (`js/` is a public directory). `assets/audio/` ships automatically.

---

## 6. Order of work (each step leaves `main`-mergeable state)

1. **Audio assets**: audition and adjust the picks in `sound-config.js` (especially `whoosh`), then move unmapped files to `tools/sfx-library/` so they aren't deployed.
2. **Teacher setting** (§1): rules + tests → resolve-code + tests → `user-prefs` / `context` → modal markup + CSS → `membership.js` handlers → `play-share-code` / `launchMembershipGame`. Run `npm test` in `firebase-functions/`. Deploy backend before site when publishing (`firestore:rules,functions`).
3. **Engine + config + page wiring** (§2, §3, §5) with only delegated clicks active. Verify zero console errors on all six pages, with audio on and with `?audio=0`.
4. **Explicit hooks** (§4), one file at a time, re-testing the flow after each.
5. **QA matrix** (§7), then `node scripts/bump-version.mjs`, `node scripts/build-pages.mjs`, publish per the usual sequence.

Commit after each numbered step with a message in the repo's style.

---

## 7. QA checklist

Functional
- [ ] Share code from an account with Audio **on**: clicks, keyboard, tabs, transitions, dialogue blips, correct/wrong, hint, modals, menu all sound; debrief and Undermurk pages too.
- [ ] Toggle Audio **off** in dashboard → new launch of the *same existing* code is silent on play, debrief and Undermurk; URL carries `audio=0`; no network requests for `assets/audio/`.
- [ ] Toggle back on → sound returns without re-sharing the code.
- [ ] Dashboard: toggle state persists across reload; Bonus Missions toggle still saves; a favorites save doesn't clobber either setting (`persistPrefs` writes both).
- [ ] Legacy purchase code, `free-play.html`, `preview.html`, `answer-key.html`: audio on, nothing else changed.
- [ ] Rename `sound.js` temporarily (simulate 404): game fully playable, no errors.
- [ ] Rename one audio file: single console warning, everything else plays.
- [ ] Preview mode (typewriter at 5 ms): blips throttled, no buzz; player reply text also blips.
- [ ] Rapid clicks / fast typing on the code keyboard: sounds overlap cleanly, no clipping.
- [ ] Wrong code: one `wrong` per check, not per flashing cell; correct code: one `correct`.
- [ ] Hint button: not doubled (`ui.click` + `hint.open`).
- [ ] Tab hidden → sounds stop; tab visible → resume on next interaction.

Browsers / devices
- [ ] Chrome (desktop + Chromebook), Firefox, Safari macOS 15.4+, iPad Safari 18.4+ (with side switch both ways), Android Chrome.
- [ ] An iPad or Mac below 18.4 / 15.4: silent, no errors, game fully playable.
- [ ] First sound plays on the very first tap on iPad (unlock via `touchend`).

Backend
- [ ] `npm test` in `firebase-functions/` green (rules + resolve updated).
- [ ] Deployed rules accept `{favorites, showBonusMissions, playAudio}` and reject non-bool `playAudio`.

---

## 8. Later (not in this branch)

- **Music**: `Sound.music.play(name, { fade })` streaming through an `<audio>` element + `createMediaElementSource` into the master gain (no decoding of multi-MB buffers); ducking under dialogue; preload via the `sound:` list on `handlePreloading` events. The teacher Audio switch covers it automatically.
- **Student mute** in the global menu (`Sound.setMuted`, `localStorage`).
- Debrief outcome stings and Undermurk tier transitions (events already reserved as `null`).
- Hover sounds on desktop if ever wanted (`rollover*.ogg` kept in `tools/sfx-library/`).
