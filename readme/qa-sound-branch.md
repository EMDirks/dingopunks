# QA — sound-effects branch (Nov 12–13, 2026)

Covers every commit on `sound-effects` since `main` (42 commits, Oct 29 – Nov 11) plus the **uncommitted puzzle work** (pile fly-in, snap/swap). Mark each cell ☐ → ✅ (pass) or ❌ (fail, note below).

**Devices:** **Mac** = MacBook (test Safari *and* Chrome) · **CB** = Chromebook · **iPad** = iPad Safari · **iPh** = iPhone Safari

**Setup:** Test from a production build (`node scripts/build-pages.mjs`) for the main pass, so the debug panels are stripped. Use localhost only for the debug-panel rows. Flags as shipped: Harper + Dingo Punks + Undermurk bumpers **on**, UNDERMURK_BUTTON **on**, SPLASH_BACK_BUTTON **off**, CUTSCENE_HANDHELD_CAMERA **off**.

---

BACKLOG

• Remove crickets on Pickle's Playground loop

• Make student buttons in the global menu smaller
• Full screen mode
• remove "buzz/whine" on iPad/mobile "Quit" click
• Simpify "what's a game code modal"
• Gate multiple choice answers to solving puzzle first / sorting activities first

---

## 1. Every device

### Account page (membership.html)
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.1 | Opens on the "Hello!" gate with two picture buttons (teacher or parent / student). Images load right away with no pop-in | ✅ | ✅ | ✅ | ✅ |
| 1.2 | "I'm a student" → "No login needed" card → the link opens play.dingopunks.com | ✅ | ✅ | ✅ | ✅ |
| 1.3 | "I'm a teacher or parent" → Log in. With `?auth=signup` it opens Sign up instead | ✅ | ✅ | ✅ | ✅ |
| 1.4 | Forms are titled Log in / Sign up. Shorter legal and consent lines. Card titles are bigger and balanced | ✅ | ✅ | ✅ | ✅ |
| 1.5 | Student-email block: `x@stu.school.org`, `x@st.school.org`, `jsmithstu@school.org`, `27jsmith@school.org` are rejected. A gmail address like `27jsmith@gmail.com` is allowed | ✅ | ✅ | ✅ | ✅ |


### Teacher Audio setting
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.6 | Dashboard Settings: the Audio row has the new wording, saves, and survives a reload. Bonus Missions and favorites still save without resetting it | ✅ | ✅ | ✅ | ✅ |
| 1.7 | Audio **off** → relaunch the *same* share code: silent everywhere (play, debrief, Undermurk). URL has `audio=0`. No Audio row in the student Settings | ✅ | ✅ | ✅ | ✅ |
| 1.8 | Audio back **on** → sound and the student Audio row come back without re-sharing the code | ✅ | ✅ | ✅ | ✅ |

### Opening: bumpers and splash
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.9 | Harper bumper (white, animated logo, frames re-exported at 661×406) is sharp and correctly sized, not stretched | ✅ | ✅ | ✅ | ✅ |
| 1.10 | Dingo Punks bumper: logo slams in, dangles, hangs and falls with the dangle sound. Pressing START unlocks sound on the first tap | ✅ | ✅ | ✅ | ✅ |
| 1.11 | Splash: the logo is smaller, the thumbnail tosses in (paper slap), swipe-outs wind up with a whoosh. No Harper corner logo or "presents" frames | ✅ | ✅ | ✅ | ✅ |
| 1.12 | Code entry: each box tap plays the code-box sound. The on-screen keyboard clicks on press, including the 5th key | ✅ | ✅ | ✅ | ✅ |
| 1.13 | Correct code: the sound plays as the boxes pop gold, not on the last key | ✅ | ✅ | ✅ | ✅ |
| 1.14 | Wrong code: shake → uh-oh → the "That code didn't work" popup opens after the shake, silently. The first empty box gets focus again | ✅ | ✅ | ✅ | ✅ |
| 1.15 | Can't-connect modal: new wording, and the teacher help link works | ✅ | ✅ | ✅ | ✅ |
| 1.16 | RESET next to START GAME works. Setup tabs and character picks click | ✅ | ✅ | ✅ | ✅ |
| 1.17 | Character select: after the last pick, the lock, fade, "All punks ready!", buttons and chime all come in together about 300ms later | ✅ | ✅ | ✅ | ✅ |
| 1.18 | START is held for 300ms with the node-open whoosh | ✅ | ✅ | ✅ | ✅ |

### Intro cutscene (check Midnight Mall plus at least 2 other themes, one of them Wacky Workshop because its images were recompressed)
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.19 | CRT power-on with static, with the first scene drawn behind it. Off-white frame | ✅ | ✅ | ✅ | ✅ |
| 1.20 | The intro song starts on the first scene and plays to the end | ✅ | ✅ | ✅ | ✅ |
| 1.21 | Typewriter is a fixed run per scene (7 / 9 / 7) at 75% volume, not one blip per letter | ✅ | ✅ | ✅ | ✅ |
| 1.22 | Character moves whoosh. The speaker pops as their line starts, with no subpixel jump (Safari) | ✅ | ✅ | ✅ | ✅ |
| 1.23 | Voice clips: J.J. Dingo mumbles once per line (intro only). Other voices are 15% softer and never more than 3 clips per line | ✅ | ✅ | ✅ | ✅ |
| 1.24 | Bad guy slams in fast (150ms) with a screen shake and crash, and leaves silently | ✅ | ✅ | ✅ | ✅ |
| 1.25 | Camera holds still (handheld flag off). Background settle still plays | ✅ | ✅ | ✅ | ✅ |
| 1.26 | SKIP INTRO fades in 1s after the cutscene opens and is silent | ✅ | ✅ | ✅ | ✅ |
| 1.27 | Intro ends: about 500ms of off-black, the song fades out over 5s under the map, and the theme's ambience fades in | ✅ | ✅ | ✅ | ✅ |

### Map and challenges
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.28 | Nodes build, then scale, faster than before, with their slide-in sound. The timer lands with a metal slap | ✅ | ✅ | ✅ | ✅ |
| 1.29 | Ambience is audible right away, even on slow wifi (preloaded), and fades while a challenge is open | ✅ | ✅ | ✅ | ✅ |
| 1.30 | Opening a node plays one sound, with no extra click. Hint open/close each play one sound | ✅ | ✅ | ✅ | ✅ |
| 1.31 | Challenge modal: no double bounce on open (Safari). On close it pops out, DONE/X vanish, and it closes only once even on a double tap | ✅ | ✅ | ✅ | ✅ |
| 1.32 | Activity scene: player replies are voiced, the speaker pops, Midnight Mall characters have their own voices | ✅ | ✅ | ✅ | ✅ |
| 1.33 | Multiple choice answer sound | ✅ | ✅ | ✅ | ✅ |
| 1.34 | Secret code boxes: chime as they come in, first box focused, wrong code shakes then refocuses the first empty box | ☐ | ☐ | ☐ | ☐ |
| 1.35 | Crossword: typing from a word's lettered cell moves through the word on its own. Tapping a crossword or cryptogram cell is silent (typing still clicks) | ✅ | ✅ | ✅ | ✅ |
| 1.36 | Copy fixes: Camp Calamari's slime intro is reworded. Yeti and the Yam 4th/5th reading has the two answer letters marked. Final Bell says "detention" | ✅ | ✅ | ✅ | ✅ |
| 1.37 | Finish button clicks. Nodes leave with a reversed slide-in (0.18s, staggered) | ☐ | ☐ | ☐ | ☐ |

### Puzzle (uncommitted, check on a legacy *and* a dynamic puzzle)
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.38 | First open: pieces fly in from the right, one after another, into a tilted pile in the bottom-right corner, under one card-fan sound | ✅ | ✅ | ✅ | ✅ |
| 1.39 | Picking up a piece straightens it and plays the choice sound. Grabbing a piece mid-flight lands it at once. The piece stays under your finger (iPhone in landscape too), and so do column-sort blocks | ✅ | ✅ | ✅ | ✅ |
| 1.40 | Dropping on the grid snaps to the nearest slot with a click and a small overshoot. Dropping on a taken slot swaps the two pieces | ✅ | ✅ | ✅ | ✅ |
| 1.41 | Dropping outside the grid leaves the piece loose | ✅ | ✅ | ✅ | ✅ |
| 1.42 | Close and reopen: positions **and tilts** are restored, with no second fly-in and no pop-in (the pieces are just there when the puzzle shows). A finished puzzle still checks as correct | ✅ | ✅ | ✅ | ✅ |
| 1.43 | Answer key and preview show the solved layout. Preview stays non-draggable | ✅ | ✅ | ✅ | ✅ |

### Column sort snapping (codes 48857 = 1 column, 16895 = 2, 11378 = 3)
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.43a | First open: cards fly in from the right into a tilted pile in the bottom-right corner, under one card-fan sound. The 1-column pile sits above the down arrow, not over it | ☐ | ☐ | ☐ | ☐ |
| 1.43b | Picking up a card straightens it and plays the choice sound. Dropping it in an empty column snaps it to the top with a click | ☐ | ☐ | ☐ | ☐ |
| 1.43c | Dropping below, above or between cards in a column puts it there: the others shift to make room, stacked 3px apart at their own heights, centred in the column under its header | ☐ | ☐ | ☐ | ☐ |
| 1.43d | While dragging over a column, the cards part to show where it will land, and close up again when you drag away. Taking a card out of a column closes its gap | ☐ | ☐ | ☐ | ☐ |
| 1.43e | Dropping outside every column leaves the card loose. A column with no room for the card doesn't part, and the card goes back where it was picked up | ☐ | ☐ | ☐ | ☐ |
| 1.43f | Close and reopen: columns keep their order, loose cards stay put, no second fly-in or pop-in. Rotating the iPad/iPhone or resizing the window restacks the columns cleanly | ☐ | ☐ | ☐ | ☐ |
| 1.43g | Answer key and preview show each column stacked as before, non-draggable | ☐ | ☐ | ☐ | ☐ |
| 1.43h | Puzzles still pile, snap and swap as in 1.38–1.43 | ☐ | ☐ | ☐ | ☐ |

### Global menu (student)
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.44 | Menu button plays one sound. Cards slide in with wood clicks. Small-screen layout starts at 650px | ☐ | ☐ | ☐ | ☐ |
| 1.45 | Quit This Escape Room is first. Before the game starts it quits right away. Once started, it shows "Are you sure?" with Keep Playing / Quit | ☐ | ☐ | ☐ | ☐ |
| 1.46 | My Escape Room card shows only after the map comes up: theme, "N/N DONE" pill, one bar per challenge | ☐ | ☐ | ☐ | ☐ |
| 1.47 | Settings modal: one Audio row with ON/OFF that clicks even when muted. Turning it off silences everything at once | ☐ | ☐ | ☐ | ☐ |
| 1.48 | Information modal: Terms, Privacy, Licensing and Credits links all open | ☐ | ☐ | ☐ | ☐ |
| 1.49 | Locked card tap → lock sound. Card taps wait about 200ms so their click plays before the page changes | ☐ | ☐ | ☐ | ☐ |

### Outro and fail cutscenes
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.50 | Win: end cutscene waits for the CRT power-on, and SKIP OUTRO works | ☐ | ☐ | ☐ | ☐ |
| 1.51 | Fail (let the timer run out): salmon backgrounds, creepy ambience while the bad guys are on screen, SKIP OUTRO works | ☐ | ☐ | ☐ | ☐ |

### Debrief
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.52 | The outcome screen waits on VIEW SCORE. Tapping it unlocks sound and starts the debrief song, played once | ☐ | ☐ | ☐ | ☐ |
| 1.53 | Stat, tier, score, medal (pitched up per medal), rank and bonus panel sounds. Count-up ticks rise in pitch and stay in sync with the number | ☐ | ☐ | ☐ | ☐ |
| 1.54 | Scoring runs **once**, including on the older (non-DPAAM) debrief. Bonus panel slides in quickly. Score card is teal, Undermurk card is blue | ☐ | ☐ | ☐ | ☐ |
| 1.55 | Undermurk logo shows on the debrief. My Escape Room carries over in the menu. Bumper and outcome stay under the menu's blackout | ☐ | ☐ | ☐ | ☐ |
| 1.56 | PLAY NOW hides at once, clicks, and opens Undermurk about 200ms later | ☐ | ☐ | ☐ | ☐ |

### Enter the Undermurk
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.57 | Bumper: Undermurk logo on blue, off-black pop and slam, dangle lands as the logo falls. Also replays after Play Again | ☐ | ☐ | ☐ | ☐ |
| 1.58 | Intro cutscene: plane and J.J. shake through flak, hands grasp over a 1.5x zoom out, paraglider sways, intro song plays | ☐ | ☐ | ☐ | ☐ |
| 1.59 | Setup: tabs click. Bonus Missions shows a lock in its pill, and tapping it plays the lock sound and jiggles the pill | ☐ | ☐ | ☐ | ☐ |
| 1.60 | Gameplay: entrance, turn, question and answer sounds. Correct answer rings a bell that fades. Question cards click. Player arrow plays a soft wood click. No ambience. No player voice | ☐ | ☐ | ☐ | ☐ |
| 1.61 | Ending: VICTORY/FAIL slams in with a whoosh (FAIL gets a crash about 100ms in), then shrinks out in 250ms. The end song starts on "Your team…" | ☐ | ☐ | ☐ | ☐ |
| 1.62 | Team total pops. START and Play Again shrink away when pressed, and the game resets cleanly | ☐ | ☐ | ☐ | ☐ |

### Mute carry-through and other pages
| # | Check | Mac | CB | iPad | iPh |
|---|---|---|---|---|---|
| 1.63 | Muted in play → debrief and Undermurk stay muted (`mute=1`) and the toggle shows OFF. Muted on the debrief → Undermurk stays muted | ☐ | ☐ | ☐ | ☐ |
| 1.64 | Play Another Escape Room or a fresh code starts with sound on | ☐ | ☐ | ☐ | ☐ |
| 1.65 | Legacy purchase code, free-play.html, answer-key.html and preview.html all play sound and work as before. 404 page is fine | ☐ | ☐ | ☐ | ☐ |
| 1.66 | Rapid tapping and typing: sounds overlap cleanly without clipping. Background the tab or app → sound stops, and it comes back on the next tap | ☐ | ☐ | ☐ | ☐ |
| 1.67 | No console errors, no 404s in the Network tab (there are no `.wav`/`.mp3` files any more, all audio is `.ogg`) | ☐ | ☐ | ☐ | ☐ |

---

## 2. Device-specific

### MacBook
- [ ] Do section 1 in **both Safari and Chrome** (Safari 15.4+). Safari is where the double-bounce and subpixel fixes live.
- [ ] Hardware keyboard: typing into code boxes plays key sounds for accepted keys only. Tab/Enter work in the Settings ON/OFF buttons and the gate buttons.
- [ ] Resize the window through 650px. The menu switches layouts cleanly.
- [ ] Localhost debug panel: minimizes, voice gallery and looper, Fail and Debrief buttons, preload. The Undermurk debug panel works. **Neither panel is in the production build.**
- [ ] `node scripts/check-sound-config.mjs` passes, with no missing, unused or misnamed sounds.
- [ ] `npm test` in `firebase-functions/` is green (student-email mirror, rules accept `playAudio`).
- [ ] VoiceOver reads the Audio row as a switch, and the gate buttons read sensibly.

### Chromebook
- [ ] Performance: the CRT static, card-fan pile fly-in, node build, count-up ticks and Undermurk shake run smoothly on school hardware. Sound stays in sync with motion.
- [ ] Touchscreen *and* trackpad: puzzle drag, snap and swap work with both. Crossword auto-advance works on the physical keyboard.
- [ ] Ambience and music volumes are balanced on the built-in speakers (laptop speakers are where quiet loops like Funhouse 0.08 can disappear).
- [ ] On a school-managed account, if you have one: audio files load. The known share-code filter issue is unchanged, not made worse.

### iPad
- [ ] **The first tap plays its sound** (the bumper START). It shouldn't be silent.
- [ ] Silent/side switch both ways. Note what happens. Also test with the volume at 0, then turned back up.
- [ ] Puzzle with touch: no page scroll or rubber-banding while dragging. Pick-up, snap and swap feel right with a finger.
- [ ] Portrait and landscape, and rotating mid-cutscene and mid-puzzle. Pieces stay in the right places.
- [ ] Leave the app and come back (Home, then reopen Safari): audio resumes on the next tap, and loops don't pile up.
- [ ] Challenge modal opens without a double bounce, and the speaking pop doesn't jitter.

### iPhone
- [ ] **The first tap plays its sound.** Ring/silent switch both ways.
- [ ] Account gate on a phone: J.J. Dingo is smaller, both picture buttons fit with no horizontal scroll, and the forms are usable with the keyboard up.
- [ ] Menu on the phone layout (<650px): My Escape Room card, Quit modal and Settings/Information modals fit with no clipping.
- [ ] Code entry and crossword with the iOS keyboard: auto-advance works, refocusing after a wrong code doesn't make the page jump, and the screen doesn't zoom.
- [ ] Puzzle pieces are big enough to grab, and the corner pile doesn't sit under the Safari toolbar.
- [ ] Cutscenes, debrief panels and the Undermurk end screen fit in portrait. Check landscape too.
- [ ] Lock the phone mid-game and unlock it: no stuck loops, and sound resumes on the next tap.

---

## 3. Before merging to main
- [x] Commit the puzzle work (committed in 2adc8ce).
- [ ] Fill in the empty rows in `readme/sound-credits.md`, including card-fan.
- [ ] Bump the version, build the pages, and publish per the usual sequence.

## Failures / notes
| # | Device | What happened |
|---|---|---|
| | | |
