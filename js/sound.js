// Sound effects engine (Web Audio, no dependencies). It holds no sound names,
// files, volumes or timings: everything comes from SOUND_CONFIG in
// js/sound-config.js. Every public method is a silent no-op when sound is
// unavailable or something fails, so the game never depends on audio.
//
// Three separate "off" switches:
//   - Teacher off (dashboard Audio setting): debriefStats.audio = 0 / ?audio=0.
//     Sound is unavailable: nothing loads and the menu toggles are hidden.
//   - Student Sound effects off (global menu toggle): debriefStats.mute = 1 / ?mute=1.
//     Sound effects stay silent; they still load so turning them on is instant.
//   - Student Music & ambience off (global menu toggle): debriefStats.muteMusic = 1 /
//     ?muteMusic=1. The same, for every loop and the one-shots marked music: true.
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
  let muted = new URLSearchParams(window.location.search).get('mute') === '1';
  let musicMuted = new URLSearchParams(window.location.search).get('muteMusic') === '1';
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

  // A game's resource script may define localSoundConfig to add or override
  // sounds, events and preload moments for that game only.
  function config() {
    if (typeof SOUND_CONFIG === 'undefined' || !SOUND_CONFIG) return null;
    if (typeof localSoundConfig === 'undefined' || !localSoundConfig) return SOUND_CONFIG;
    return Object.assign({}, SOUND_CONFIG, {
      sounds: Object.assign({}, SOUND_CONFIG.sounds, localSoundConfig.sounds),
      events: Object.assign({}, SOUND_CONFIG.events, localSoundConfig.events),
      preload: Object.assign({}, SOUND_CONFIG.preload, localSoundConfig.preload),
    });
  }

  function teacherTurnedOff() {
    if (typeof debriefStats !== 'undefined' && String(debriefStats.audio) === '0') return true;
    return new URLSearchParams(window.location.search).get('audio') === '0';
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

  function masterLevel() {
    const cfg = config();
    return cfg && typeof cfg.masterVolume === 'number' ? cfg.masterVolume : 1;
  }

  // ignoreMute: true plays a sound even while the student has its channel off
  // (the global menu toggles, so turning a channel off still clicks).
  function isSilenced(def) {
    if (def && def.ignoreMute) return false;
    return def && def.music ? musicMuted : muted;
  }

  function busFor(def) {
    if (def && def.ignoreMute) return master;
    return def && def.music ? musicBus : sfxBus;
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
        wantedLoops.forEach(function (askedAt, key) {
          if (cfg.loops[key].sound === name) playLoop(key);
        });
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
  function play(name, offsetSec) {
    if (!isAvailable()) return;
    const decoded = buffers.get(name);
    if (!decoded) return;
    const def = config().sounds[name] || {};
    if (isSilenced(def)) return;
    const live = voices.get(name) || 0;
    if (def.maxVoices && live >= def.maxVoices && offsetSec === undefined) return;

    // On the first tap the context may still be resuming. A source started
    // now plays as soon as it does, so that first tap isn't silent.
    if (ctx.state !== 'running') ctx.resume().catch(function () {});

    const source = ctx.createBufferSource();
    source.buffer = decoded[pickFileIndex(name, decoded.length)];
    if (Array.isArray(def.pitch)) {
      source.playbackRate.value = def.pitch[0] + Math.random() * (def.pitch[1] - def.pitch[0]);
    }
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
    // fadeOutMs cuts a one-shot short: full volume for fadeOutAfterMs, then a fade to silence.
    if (def.fadeOutMs) {
      const fadeFrom = startAt + (def.fadeOutAfterMs || 0) / 1000;
      const fadeTo = fadeFrom + def.fadeOutMs / 1000;
      gain.gain.setValueAtTime(gain.gain.value, fadeFrom);
      gain.gain.linearRampToValueAtTime(0, fadeTo);
      source.stop(fadeTo);
    }
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

  // Plays a game event from SOUND_CONFIG.events.
  function event(eventName, detail) {
    const cfg = config();
    if (!cfg || !cfg.events) return;
    const isLetter = eventName === 'dialogue.letter' || eventName === 'cutscene.letter';
    fireMapping(cfg, cfg.events[eventName], isLetter, detail);
  }

  // mapping is an `events` or `characterVoices` value: a sound name, or
  // { sound, skipAfterMs, delay, skipIfLocked, keepClick }. skipAfterMs stays quiet when
  // another sound started within that many ms (e.g. a popup that opens right
  // after the wrong-code sound); delay plays the sound that many ms later, to
  // line it up with an animation; skipIfLocked stays quiet while the browser
  // still has audio locked (no tap yet); keepClick plays alongside the tap's
  // click sound instead of replacing it.
  // keepsClicks: true for sounds no tap causes (character voices), so they never
  // replace a tap's click sound.
  function fireMapping(cfg, mapping, isLetter, detail, keepsClicks) {
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
    if (mapping.delay > 0) {
      setTimeout(safe('event', function () { play(name); }), mapping.delay);
      return;
    }
    play(name);
  }

  // Plays an event's sound `count` times, `gapMs` apart, scheduled on the audio clock.
  // setTimeout runs bunch up while the page is busy (a cutscene scene building), which
  // stacked blips together and dropped the ones past maxVoices.
  function eventRun(eventName, count, gapMs) {
    const cfg = config();
    const mapping = cfg && cfg.events && cfg.events[eventName];
    const name = mapping && typeof mapping === 'object' ? mapping.sound : mapping;
    if (typeof name !== 'string' || isSilenced(cfg.sounds && cfg.sounds[name])) return;
    for (let i = 0; i < count; i++) play(name, (i * gapMs) / 1000);
  }

  // A character's voice from SOUND_CONFIG.characterVoices[theme][key]. Plays it (honouring
  // delay) and returns true when the character has an entry, even a null one, so the caller
  // skips its letter blips. false = no entry: the caller keeps the blips.
  // extraDelay: ms added to the entry's own delay (the caller's animation timing).
  function voice(theme, key, extraDelay) {
    const cfg = config();
    const table = cfg && cfg.characterVoices && cfg.characterVoices[theme];
    if (!table || typeof key !== 'string' || !Object.prototype.hasOwnProperty.call(table, key)) return false;
    let mapping = table[key];
    if (mapping && extraDelay > 0) {
      mapping = typeof mapping === 'object'
        ? Object.assign({}, mapping, { delay: (mapping.delay || 0) + extraDelay })
        : { sound: mapping, delay: extraDelay };
    }
    fireMapping(cfg, mapping, false, undefined, true);
    return true;
  }

  // Looping sounds, keyed by SOUND_CONFIG.loops. Every loop counts as music & ambient
  // sound and runs through the music bus, so muting silences it and unmuting mid-loop
  // brings it back. A loop
  // started before its file has loaded begins when the file arrives, if still wanted.
  // delayMs counts from startLoop, so a slow load doesn't push the loop back further.
  function startLoop(key) {
    const cfg = config();
    const def = cfg && cfg.loops && cfg.loops[key];
    if (!def || !isAvailable()) return;
    if (!wantedLoops.has(key)) wantedLoops.set(key, performance.now());
    if (buffers.has(def.sound)) {
      playLoop(key);
    } else {
      preload([def.sound]);
    }
  }

  function playLoop(key) {
    if (liveLoops.has(key) || !wantedLoops.has(key)) return;
    const cfg = config();
    const def = cfg.loops[key];
    const soundDef = cfg.sounds[def.sound] || {};
    const volume = typeof soundDef.volume === 'number' ? soundDef.volume : 1;
    if (ctx.state !== 'running') ctx.resume().catch(function () {});

    const source = ctx.createBufferSource();
    source.buffer = buffers.get(def.sound)[0];
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
    const def = cfg && cfg.loops && cfg.loops[key];
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
    const soundDef = cfg.sounds[cfg.loops[key].sound] || {};
    const volume = typeof soundDef.volume === 'number' ? soundDef.volume : 1;
    const now = ctx.currentTime;
    live.gain.gain.cancelScheduledValues(now);
    live.gain.gain.setValueAtTime(live.gain.gain.value, now);
    live.gain.gain.linearRampToValueAtTime(faded ? 0 : volume, now + fade / 1000);
  }

  // The map view's background loop for a theme (SOUND_CONFIG.mapLoops), or null.
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
    setMuted: safe('setMuted', setMuted),
    isMuted: function () { return muted; },
    setMusicMuted: safe('setMusicMuted', setMusicMuted),
    isMusicMuted: function () { return musicMuted; },
    isAvailable: safe('isAvailable', isAvailable),
  };
})();
