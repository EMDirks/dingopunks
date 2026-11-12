// Sound effects engine (Web Audio, no dependencies). It holds no sound names,
// files, volumes or timings: everything comes from SOUND_CONFIG in
// js/sound-config.js. Every public method is a silent no-op when sound is
// unavailable or something fails, so the game never depends on audio.
//
// Three separate "off" switches:
//   - Teacher off (dashboard Audio setting): debriefStats.audio = 0 / ?audio=0.
//     Sound is unavailable: nothing loads and the menu toggles are hidden.
//   - Student Sound effects off: debriefStats.mute = 1 / ?mute=1.
//     Sound effects stay silent; they still load so turning them on is instant.
//   - Student Music & ambience off: debriefStats.muteMusic = 1 / ?muteMusic=1.
//     The same, for every loop and the one-shots marked music: true.
//   The global menu's single Audio toggle sets both student switches together.
const Sound = (function () {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  const FORMAT_TYPES = {
    ogg: 'audio/ogg; codecs="vorbis"',
    m4a: 'audio/mp4; codecs="mp4a.40.2"',
    mp3: 'audio/mpeg',
  };
  const UNLOCK_EVENTS = ['pointerdown', 'touchend', 'keydown', 'click'];

  let ctx = null;
  let master = null;
  let sfxBus = null;             // gain for sound effects, into master
  let musicBus = null;           // gain for music & ambience (loops, music: true), into master
  let unlocked = false;
  const urlParams = new URLSearchParams(window.location.search);
  const urlAudioOff = urlParams.get('audio') === '0';
  let muted = urlParams.get('mute') === '1';
  let musicMuted = urlParams.get('muteMusic') === '1';
  let format;                    // undefined = not checked yet, null = nothing playable
  let lettersSinceBlip = 0;
  let lastBlipAt = 0;
  let pendingClick = null;       // a click's event, held until the click is handled
  let lastSoundAt = -Infinity;   // performance.now() of the last sound started
  let lastGameSoundAt = -Infinity; // same, for sounds the game fired (not click sounds)
  let playingClick = false;

  const buffers = new Map();     // sound name → AudioBuffer[]
  const fileBuffers = new Map(); // file base name → Promise<AudioBuffer>, shared by every sound that lists the file
  const loading = new Set();     // sound names being fetched or decoded
  const missing = new Set();     // sound names that failed or have no files
  const wantedLoops = new Map(); // loop key → performance.now() when it was asked for
  const liveLoops = new Map();   // loop key → { source, gain } while playing
  const fadedLoops = new Set();  // loop keys faded out by setLoopFaded, still running silently
  const voices = new Map();      // sound name → how many are sounding now
  const lastFileIndex = new Map(); // sound name → index of the file it played last
  const logged = new Set();

  function logOnce(key, error) {
    if (logged.has(key)) return;
    logged.add(key);
    console.warn('[sound] ' + key, error || '');
  }

  // Guards every public method: a sound bug must never break the game.
  function safe(name, fn) {
    return function () {
      try {
        return fn.apply(null, arguments);
      } catch (error) {
        logOnce(name + ' failed', error);
      }
    };
  }

  function config() {
    return typeof SOUND_CONFIG !== 'undefined' && SOUND_CONFIG ? SOUND_CONFIG : null;
  }

  // The URL flag can't change while the page is open; debriefStats.audio is set by a
  // share code after load, so it's checked live.
  function teacherTurnedOff() {
    if (urlAudioOff) return true;
    return typeof debriefStats !== 'undefined' && String(debriefStats.audio) === '0';
  }

  // First format in SOUND_CONFIG.formats this browser can play, or null.
  function pickFormat(cfg) {
    if (format !== undefined) return format;
    format = null;
    const probe = document.createElement('audio');
    const formats = cfg.formats || ['ogg'];
    for (let i = 0; i < formats.length; i++) {
      const type = FORMAT_TYPES[formats[i]];
      if (type && probe.canPlayType && probe.canPlayType(type) !== '') {
        format = formats[i];
        break;
      }
    }
    return format;
  }

  // Checked on every call: the teacher flag is set during launch, after load.
  function isAvailable() {
    const cfg = config();
    if (!cfg || cfg.enabled === false || !AudioContextClass) return false;
    if (teacherTurnedOff()) return false;
    return pickFormat(cfg) !== null;
  }

  // SOUND_CONFIG.silentScreens: no audio at all on the bumper or the game code screen.
  // An event is checked when it fires (by its name and the screen), so a delayed sound
  // fired there stays silent too. Events in silentScreens.allow always play.
  function silentScreenAllows(cfg, eventName) {
    const allow = (cfg.silentScreens && cfg.silentScreens.allow) || [];
    return allow.indexOf(eventName) !== -1;
  }

  function onSilentScreen(cfg, eventName) {
    const screens = cfg.silentScreens || {};
    const name = eventName || '';
    if (screens.bumper && (name.indexOf('bumper.') === 0
      || document.querySelector('.bumper-container--visible'))) return true;
    // The code boxes stay on screen, accepted, until the screen has flown out.
    if (screens.codeEntry && (name.indexOf('access.') === 0
      || document.querySelector('.access-input'))) return true;
    return false;
  }

  function masterLevel() {
    const cfg = config();
    return cfg && typeof cfg.masterVolume === 'number' ? cfg.masterVolume : 1;
  }

  // ignoreMute: true plays a sound even while the student has its channel off
  // (the global menu toggles, so turning a channel off still clicks).
  function isSilenced(def) {
    if (def && def.ignoreMute) return false;
    return isMusic(def) ? musicMuted : muted;
  }

  function busFor(def) {
    if (def && def.ignoreMute) return master;
    return isMusic(def) ? musicBus : sfxBus;
  }

  // Music & ambience: every sound that loops, and one-shots marked music: true.
  function isMusic(def) {
    return Boolean(def && (def.music || def.loop));
  }

  // The loop settings of a sound that loops (sounds[name].loop), or null.
  function loopDef(cfg, name) {
    const def = cfg && cfg.sounds && cfg.sounds[name];
    return def && def.loop ? def.loop : null;
  }

  function getContext() {
    if (ctx) return ctx;
    ctx = new AudioContextClass();
    master = ctx.createGain();
    master.gain.value = masterLevel();
    master.connect(ctx.destination);
    sfxBus = ctx.createGain();
    sfxBus.gain.value = muted ? 0 : 1;
    sfxBus.connect(master);
    musicBus = ctx.createGain();
    musicBus.gain.value = musicMuted ? 0 : 1;
    musicBus.connect(master);
    UNLOCK_EVENTS.forEach(function (type) {
      document.addEventListener(type, unlock, { capture: true, passive: true });
    });
    unlock();
    return ctx;
  }

  // Browsers keep audio suspended until the player taps or types. Keep
  // listening until the context is actually running.
  function unlock() {
    if (!ctx) return;
    if (ctx.state === 'running') {
      unlocked = true;
      UNLOCK_EVENTS.forEach(function (type) {
        document.removeEventListener(type, unlock, { capture: true });
      });
      return;
    }
    ctx.resume().then(unlock).catch(function () {});
  }

  // A src with its own extension (e.g. 'correct.wav') is used as is.
  function fileUrl(cfg, base) {
    const cacheBust = typeof version !== 'undefined' ? '?v=' + version : '';
    const file = /\.[a-z0-9]+$/i.test(base) ? base : base + '.' + format;
    return (cfg.basePath || '') + file + cacheBust;
  }

  // Older Safari only supports the callback form of decodeAudioData.
  function decode(arrayBuffer) {
    return new Promise(function (resolve, reject) {
      const result = ctx.decodeAudioData(arrayBuffer, resolve, reject);
      if (result && typeof result.then === 'function') result.then(resolve, reject);
    });
  }

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

  function load(cfg, name) {
    if (buffers.has(name) || loading.has(name) || missing.has(name)) return;
    const def = cfg.sounds && cfg.sounds[name];
    if (!def || !Array.isArray(def.src) || def.src.length === 0) {
      missing.add(name);
      return;
    }
    loading.add(name);
    Promise.all(def.src.map(function (base) { return loadFile(cfg, base); }))
      .then(function (decoded) {
        buffers.set(name, decoded);
        if (wantedLoops.has(name)) playLoop(name);
      })
      .catch(function (error) {
        missing.add(name);
        logOnce('could not load "' + name + '"', error);
      })
      .then(function () {
        loading.delete(name);
      });
  }

  // names: '*' or omitted = every sound in the config except lazy ones, or an array of names.
  function preload(names) {
    if (!isAvailable()) return;
    const cfg = config();
    getContext();
    const list = !names || names === '*'
      ? Object.keys(cfg.sounds || {}).filter(function (name) { return !cfg.sounds[name].lazy; })
      : names;
    list.forEach(function (name) {
      load(cfg, name);
    });
  }

  // also: a list of extra names, so '*' can bring lazy sounds with it.
  function runPreloadEntry(entry) {
    if (!entry || !entry.sounds) return;
    const run = function () {
      preload(entry.sounds);
      if (Array.isArray(entry.also)) preload(entry.also);
    };
    if (entry.delay > 0) {
      setTimeout(safe('preload', run), entry.delay);
    } else {
      run();
    }
  }

  // Cloudflare serves pages with and without .html; "/" is index.html.
  function currentPage() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    return page.endsWith('.html') ? page : page + '.html';
  }

  // Called from handlePreloading() in js/global.js (and onPageLoad below).
  function onPreloadEvent(eventName) {
    const cfg = config();
    if (!cfg || !cfg.preload) return;
    const entry = cfg.preload[eventName];
    if (eventName === 'onPageLoad') {
      runPreloadEntry(entry && entry[currentPage()]);
    } else {
      runPreloadEntry(entry);
    }
  }

  // A random file for this sound, never the one it played last.
  function pickFileIndex(name, count) {
    const last = lastFileIndex.get(name);
    const hasLast = last !== undefined && count > 1;
    let index = Math.floor(Math.random() * (hasLast ? count - 1 : count));
    if (hasLast && index >= last) index += 1;
    lastFileIndex.set(name, index);
    return index;
  }

  // offsetSec: start that far ahead on the audio clock (exact spacing, unlike timers).
  // A scheduled sound skips the maxVoices check, since its run never overlaps itself.
  // rate: a pitch (playback rate) from an event's pitchRamp. The sound's own `pitch`
  // range still varies it a little around that.
  // Returns { source, duration } (duration: seconds of real time the clip plays for), or
  // nothing when it didn't play.
  // allowed: true for an event in silentScreens.allow, which plays on a silent screen.
  function play(name, offsetSec, rate, allowed) {
    if (!isAvailable()) return;
    const decoded = buffers.get(name);
    if (!decoded) return;
    const def = config().sounds[name] || {};
    if (isSilenced(def)) return;
    if (!allowed && onSilentScreen(config())) return;
    const live = voices.get(name) || 0;
    if (def.maxVoices && live >= def.maxVoices && offsetSec === undefined) return;

    // On the first tap the context may still be resuming. A source started
    // now plays as soon as it does, so that first tap isn't silent.
    if (ctx.state !== 'running') ctx.resume().catch(function () {});

    const source = ctx.createBufferSource();
    source.buffer = decoded[pickFileIndex(name, decoded.length)];
    let playbackRate = rate > 0 ? rate : 1;
    if (Array.isArray(def.pitch)) {
      playbackRate *= def.pitch[0] + Math.random() * (def.pitch[1] - def.pitch[0]);
    }
    if (playbackRate !== 1) source.playbackRate.value = playbackRate;
    const gain = ctx.createGain();
    gain.gain.value = typeof def.volume === 'number' ? def.volume : 1;
    source.connect(gain);
    gain.connect(busFor(def));

    voices.set(name, live + 1);
    lastSoundAt = performance.now();
    source.onended = function () {
      voices.set(name, Math.max(0, (voices.get(name) || 1) - 1));
      gain.disconnect();
    };
    const startAt = offsetSec > 0 ? ctx.currentTime + offsetSec : ctx.currentTime;
    source.start(startAt);
    let duration = source.buffer.duration / playbackRate;
    // fadeOutMs cuts a one-shot short: full volume for fadeOutAfterMs, then a fade to silence.
    if (def.fadeOutMs) {
      const fadeFrom = startAt + (def.fadeOutAfterMs || 0) / 1000;
      const fadeTo = fadeFrom + def.fadeOutMs / 1000;
      gain.gain.setValueAtTime(gain.gain.value, fadeFrom);
      gain.gain.linearRampToValueAtTime(0, fadeTo);
      source.stop(fadeTo);
      duration = Math.min(duration, fadeTo - startAt);
    }
    return { source: source, duration: duration };
  }

  // vocalize: true on a sound keeps it talking for a whole line of dialogue: a new random
  // clip from its src every vocalizeEveryMs (the sound's own, else SOUND_CONFIG's), overlapping the ones still
  // sounding, for durationMs. Scheduled on the audio clock so a busy page can't bunch them
  // up. One character talks at a time: starting a vocalization (or stopVocalize) cuts off
  // the one before.
  let vocalSources = [];
  // clips: play exactly this many, vocalizeEveryMs apart, however long the line (a
  // characterVoices entry's clips); left out, clips keep coming until durationMs is up.
  // maxClips: with clips left out, stop after this many even if the line is still typing
  // (SOUND_CONFIG.npcVoiceMaxClips).
  function vocalize(name, durationMs, delayMs, clips, maxClips) {
    stopVocalize();
    const def = config().sounds[name] || {};
    const everyMs = typeof def.vocalizeEveryMs === 'number' ? def.vocalizeEveryMs
      : typeof config().vocalizeEveryMs === 'number' ? config().vocalizeEveryMs : 50;
    const everySec = Math.max(10, everyMs) / 1000;
    const startAt = Math.max(0, delayMs || 0) / 1000;
    const endAt = startAt + durationMs / 1000;
    const count = clips > 0 ? clips : maxClips > 0 ? maxClips : Infinity;
    for (let i = 0, at = startAt; i < count && (clips > 0 || at < endAt); i++, at += everySec) {
      const played = play(name, at);
      if (!played) break;
      vocalSources.push(played.source);
    }
  }

  function stopVocalize() {
    const sources = vocalSources;
    vocalSources = [];
    sources.forEach(function (source) {
      try { source.stop(); } catch (e) { /* already ended */ }
    });
  }

  // The dialogue typewriter fires per letter; blip only every few letters.
  function shouldBlip(cfg, letter) {
    const rules = cfg.dialogue || {};
    if (typeof letter === 'string' && (rules.skip || '').indexOf(letter) !== -1) return false;
    lettersSinceBlip += 1;
    if (lettersSinceBlip < (rules.every || 1)) return false;
    const now = performance.now();
    if (now - lastBlipAt < (rules.minGapMs || 0)) return false;
    lettersSinceBlip = 0;
    lastBlipAt = now;
    return true;
  }

  // An event name that isn't a key in SOUND_CONFIG.events is a typo in game code: warn once.
  // A null mapping is silent on purpose and isn't warned about.
  function knownEvent(cfg, eventName) {
    if (Object.prototype.hasOwnProperty.call(cfg.events, eventName)) return true;
    logOnce('unknown event "' + eventName + '"');
    return false;
  }

  // Plays a game event from SOUND_CONFIG.events. detail: the letter, for the typewriter
  // events; or { progress } (0 to 1) for an event with a pitchRamp, like a score counting up.
  function event(eventName, detail) {
    const cfg = config();
    if (!cfg || !cfg.events || !knownEvent(cfg, eventName)) return;
    const allowed = silentScreenAllows(cfg, eventName);
    if (!allowed && onSilentScreen(cfg, eventName)) return;
    const isLetter = eventName === 'dialogue.letter' || eventName === 'cutscene.letter';
    fireMapping(cfg, cfg.events[eventName], isLetter, detail, false, allowed);
  }

  // mapping is an `events` or `characterVoices` value: a sound name, or
  // { sound, skipAfterMs, delay, skipIfLocked, keepClick }. skipAfterMs stays quiet when
  // another sound started within that many ms (e.g. a popup that opens right
  // after the wrong-code sound); delay plays the sound that many ms later, to
  // line it up with an animation; skipIfLocked stays quiet while the browser
  // still has audio locked (no tap yet); keepClick plays alongside the tap's
  // click sound instead of replacing it; pitchRamp: [from, to] pitches the sound
  // from `from` at progress 0 up to `to` at progress 1 (detail.progress).
  // keepsClicks: true for sounds no tap causes (character voices), so they never
  // replace a tap's click sound.
  // allowed: the event is in silentScreens.allow (see play).
  function fireMapping(cfg, mapping, isLetter, detail, keepsClicks, allowed) {
    const name = mapping && typeof mapping === 'object' ? mapping.sound : mapping;
    if (typeof name !== 'string' || isSilenced(cfg.sounds && cfg.sounds[name])) return;
    if (mapping.skipAfterMs && performance.now() - lastSoundAt < mapping.skipAfterMs) {
      pendingClick = null;
      return;
    }
    if (mapping.skipIfLocked && (!ctx || ctx.state !== 'running')) return;
    if (isLetter && !shouldBlip(cfg, detail)) return;
    // A sound fired while a click is being handled replaces its plain click.
    if (!keepsClicks && !mapping.keepClick) {
      pendingClick = null;
      if (!playingClick && !isLetter) lastGameSoundAt = performance.now();
    }
    const def = cfg.sounds && cfg.sounds[name];
    // In-game voices (every characterVoices table but cutscene) vocalize when SOUND_CONFIG
    // says vocalizeInGame: true, unless the sound itself says vocalize: false.
    const vocalizes = def && (def.vocalize === true
      || (def.vocalize !== false && detail && detail.inGame && cfg.vocalizeInGame === true));
    // An entry with clips vocalizes its count even when the line is done typing before the
    // voice starts (a short player reply types in under the 300ms its box takes to open).
    if (vocalizes && detail && (detail.durationMs > 0 || mapping.clips > 0)) {
      vocalize(name, detail.durationMs, mapping.delay, mapping.clips, detail.maxClips);
      return;
    }
    const rate = rampedRate(mapping, detail);
    if (mapping.delay > 0) {
      setTimeout(safe('event', function () { play(name, undefined, rate, allowed); }), mapping.delay);
      return;
    }
    play(name, undefined, rate, allowed);
  }

  function rampedRate(mapping, detail) {
    const ramp = mapping && mapping.pitchRamp;
    if (!Array.isArray(ramp) || !detail || typeof detail.progress !== 'number') return undefined;
    const progress = Math.min(1, Math.max(0, detail.progress));
    return ramp[0] + (ramp[1] - ramp[0]) * progress;
  }

  // Plays an event's sound `count` times, `gapMs` apart, scheduled on the audio clock.
  // setTimeout runs bunch up while the page is busy (a cutscene scene building), which
  // stacked blips together and dropped the ones past maxVoices.
  function eventRun(eventName, count, gapMs) {
    const cfg = config();
    if (!cfg || !cfg.events || !knownEvent(cfg, eventName)) return;
    const mapping = cfg.events[eventName];
    const name = mapping && typeof mapping === 'object' ? mapping.sound : mapping;
    if (typeof name !== 'string' || isSilenced(cfg.sounds && cfg.sounds[name])) return;
    for (let i = 0; i < count; i++) play(name, (i * gapMs) / 1000);
  }

  // A character's voice from SOUND_CONFIG.characterVoices[theme][key]. Plays it (honouring
  // delay) and returns true when the character has an entry, even a null one, so the caller
  // skips its letter blips. false = no entry: the caller keeps the blips.
  // extraDelay: ms added to the entry's own delay (the caller's animation timing).
  // durationMs: how long the line takes to type, for a sound with vocalize: true (left
  // out, a vocalize sound plays once like any other voice).
  function voice(theme, key, extraDelay, durationMs) {
    const cfg = config();
    const table = cfg && cfg.characterVoices && cfg.characterVoices[theme];
    if (!table || typeof key !== 'string' || !Object.prototype.hasOwnProperty.call(table, key)) return false;
    let mapping = table[key];
    if (mapping && extraDelay > 0) {
      mapping = typeof mapping === 'object'
        ? Object.assign({}, mapping, { delay: (mapping.delay || 0) + extraDelay })
        : { sound: mapping, delay: extraDelay };
    }
    // Every speaker but the player's character (and the debug panel's clip sets) is an NPC,
    // capped at SOUND_CONFIG.npcVoiceMaxClips clips per line.
    const isNpc = theme !== 'player' && theme !== 'debug';
    const maxClips = isNpc && cfg.npcVoiceMaxClips > 0 ? cfg.npcVoiceMaxClips : undefined;
    fireMapping(cfg, mapping, false, typeof durationMs === 'number' ? { durationMs: durationMs, inGame: theme !== 'cutscene', maxClips: maxClips } : undefined, true);
    return true;
  }

  // Looping sounds: a sound with a `loop` field in SOUND_CONFIG.sounds, keyed by its name.
  // Every loop counts as music & ambience and runs through the music bus, so muting
  // silences it and unmuting mid-loop brings it back. A loop started before its file has
  // loaded begins when the file arrives, if still wanted. loop.delayMs counts from
  // startLoop, so a slow load doesn't push the loop back further.
  function startLoop(key) {
    const cfg = config();
    if (!loopDef(cfg, key) || !isAvailable()) return;
    if (!wantedLoops.has(key)) wantedLoops.set(key, performance.now());
    if (buffers.has(key)) {
      playLoop(key);
    } else {
      preload([key]);
    }
  }

  function playLoop(key) {
    if (liveLoops.has(key) || !wantedLoops.has(key)) return;
    const cfg = config();
    const soundDef = cfg.sounds[key];
    const def = soundDef.loop;
    const volume = typeof soundDef.volume === 'number' ? soundDef.volume : 1;
    if (ctx.state !== 'running') ctx.resume().catch(function () {});

    const source = ctx.createBufferSource();
    source.buffer = buffers.get(key)[0];
    source.loop = !def.once;   // once: true plays the file through one time, still on the music bus
    const gain = ctx.createGain();
    const waitMs = Math.max(0, (def.delayMs || 0) - (performance.now() - wantedLoops.get(key)));
    const startAt = ctx.currentTime + waitMs / 1000;
    gain.gain.setValueAtTime(0, startAt);
    if (!fadedLoops.has(key)) gain.gain.linearRampToValueAtTime(volume, startAt + (def.fadeInMs || 0) / 1000);
    source.connect(gain);
    gain.connect(musicBus);
    const live = { source: source, gain: gain };
    source.onended = function () {
      gain.disconnect();
      // A once: true track that played to its end is done; forget it so startLoop can play it again.
      if (liveLoops.get(key) === live) {
        liveLoops.delete(key);
        wantedLoops.delete(key);
        fadedLoops.delete(key);
      }
    };
    source.start(startAt);
    liveLoops.set(key, live);
  }

  function stopLoop(key) {
    wantedLoops.delete(key);
    fadedLoops.delete(key);
    const live = liveLoops.get(key);
    if (!live) return;
    liveLoops.delete(key);
    const cfg = config();
    const def = loopDef(cfg, key);
    const fade = ((def && def.fadeOutMs) || 0) / 1000;
    const now = ctx.currentTime;
    live.gain.gain.cancelScheduledValues(now);
    live.gain.gain.setValueAtTime(live.gain.gain.value, now);
    live.gain.gain.linearRampToValueAtTime(0, now + fade);
    live.source.stop(now + fade);
  }

  // Fades a loop out (faded = true) or back in without stopping it, so it picks up
  // where it has got to. Fade lengths come from SOUND_CONFIG.loopFade.
  function setLoopFaded(key, faded) {
    if (faded) fadedLoops.add(key); else fadedLoops.delete(key);
    const live = liveLoops.get(key);
    if (!live) return;
    const cfg = config();
    const fade = (cfg.loopFade && cfg.loopFade[faded ? 'outMs' : 'inMs']) || 0;
    const soundDef = cfg.sounds[key] || {};
    const volume = typeof soundDef.volume === 'number' ? soundDef.volume : 1;
    const now = ctx.currentTime;
    live.gain.gain.cancelScheduledValues(now);
    live.gain.gain.setValueAtTime(live.gain.gain.value, now);
    live.gain.gain.linearRampToValueAtTime(faded ? 0 : volume, now + fade / 1000);
  }

  // The map view's background loop for a theme (SOUND_CONFIG.mapLoops): a sound name, or null.
  function mapLoopFor(theme) {
    const cfg = config();
    return (cfg && cfg.mapLoops && cfg.mapLoops[theme]) || null;
  }

  function setMuted(value) {
    muted = Boolean(value);
    if (sfxBus) sfxBus.gain.value = muted ? 0 : 1;
    return muted;
  }

  function setMusicMuted(value) {
    musicMuted = Boolean(value);
    if (musicBus) musicBus.gain.value = musicMuted ? 0 : 1;
    return musicMuted;
  }

  function isDisabledControl(el) {
    return el.matches('[disabled], [aria-disabled="true"]') ||
      /--(disabled|inactive)\b/.test(el.className || '');
  }

  // Delegated click sounds. Capture phase, and it never stops or prevents the
  // click, so it can't interfere with the game's own handlers. The sound waits
  // until the click has been handled: if a handler plays its own sound during
  // the click (a modal, an activity or the hint opening), that one plays instead.
  // Some controls (the code keyboard) act on pointerdown, before the click, so
  // a game sound that started a moment ago belongs to this same tap.
  const SAME_TAP_MS = 250;

  function flushClick() {
    const eventName = pendingClick;
    pendingClick = null;
    if (!eventName || performance.now() - lastGameSoundAt < SAME_TAP_MS) return;
    playClickNow(eventName);
  }

  function holdClick(eventName) {
    pendingClick = eventName;
    // Normally flushed by the window listener below; this covers a handler
    // that stops the click from bubbling.
    setTimeout(safe('click', flushClick), 0);
  }

  function playClickNow(eventName) {
    playingClick = true;
    try {
      event(eventName);
    } finally {
      playingClick = false;
    }
  }

  // Finds the sound for a tap. Rules with on: 'press' sound on pointerdown
  // (before the game reacts) and are skipped on the click that follows.
  function onDocumentTap(e) {
    const cfg = config();
    if (!cfg || muted || !isAvailable()) return;
    const isPress = e.type === 'pointerdown';
    if (isPress && e.button !== 0) return;
    const target = e.target instanceof Element ? e.target : e.target && e.target.parentElement;
    if (!target) return;

    const override = target.closest('[data-sfx]');
    if (override) {
      const value = override.getAttribute('data-sfx');
      if (!isPress && value !== 'none' && !isDisabledControl(override)) holdClick(value);
      return;
    }

    const rules = cfg.clicks || [];
    for (let i = 0; i < rules.length; i++) {
      const control = target.closest(rules[i].match);
      if (control) {
        if (isPress !== (rules[i].on === 'press') || isDisabledControl(control)) return;
        if (isPress) {
          playClickNow(rules[i].event);
        } else {
          holdClick(rules[i].event);
        }
        return;
      }
    }
  }

  // The same keys the game's own input handler accepts (js/global.js), so a
  // rejected key stays silent. Falls back to letters and digits on pages without it.
  function isTypingKey(e) {
    if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return false;
    if (typeof allowedKeys !== 'undefined' && typeof allowedLetters !== 'undefined') {
      return allowedKeys.includes(e.key) || allowedLetters.test(e.key);
    }
    return /^[a-z0-9]$/i.test(e.key) || e.key === 'Backspace' || e.key === 'Delete';
  }

  // Hardware keyboard sounds. Capture phase, so the key sounds before the game
  // checks the code and plays correct/wrong.
  function onDocumentKeydown(e) {
    const cfg = config();
    if (!cfg || muted || !isAvailable() || !(e.target instanceof Element)) return;
    const rules = cfg.typing || [];
    for (let i = 0; i < rules.length; i++) {
      if (e.target.matches(rules[i].match)) {
        if (!isDisabledControl(e.target) && isTypingKey(e)) playClickNow(rules[i].event);
        return;
      }
    }
  }

  document.addEventListener('keydown', safe('keydown', onDocumentKeydown), true);
  document.addEventListener('pointerdown', safe('click', onDocumentTap), true);
  document.addEventListener('click', safe('click', onDocumentTap), true);
  window.addEventListener('click', safe('click', flushClick));

  document.addEventListener('visibilitychange', safe('visibility', function () {
    if (!ctx) return;
    if (document.hidden) {
      if (ctx.state === 'running') ctx.suspend().catch(function () {});
    } else if (unlocked) {
      ctx.resume().catch(function () {});
    }
  }));

  document.addEventListener('DOMContentLoaded', safe('onPageLoad', function () {
    onPreloadEvent('onPageLoad');
  }));

  return {
    preload: safe('preload', preload),
    startLoop: safe('startLoop', startLoop),
    stopLoop: safe('stopLoop', stopLoop),
    mapLoopFor: safe('mapLoopFor', mapLoopFor),
    setLoopFaded: safe('setLoopFaded', setLoopFaded),
    onPreloadEvent: safe('onPreloadEvent', onPreloadEvent),
    event: safe('event', event),
    eventRun: safe('eventRun', eventRun),
    voice: safe('voice', voice),
    stopVocalize: safe('stopVocalize', stopVocalize),
    setMuted: safe('setMuted', setMuted),
    isMuted: function () { return muted; },
    setMusicMuted: safe('setMusicMuted', setMusicMuted),
    isMusicMuted: function () { return musicMuted; },
    isAvailable: safe('isAvailable', isAvailable),
  };
})();
