// Sound effects engine (Web Audio, no dependencies). It holds no sound names,
// files, volumes or timings: everything comes from SOUND_CONFIG in
// js/sound-config.js. Every public method is a silent no-op when sound is
// unavailable or something fails, so the game never depends on audio.
//
// Two separate "off" switches:
//   - Teacher off (dashboard Audio setting): debriefStats.audio = 0 / ?audio=0.
//     Sound is unavailable: nothing loads and the menu toggle is hidden.
//   - Student muted (global menu toggle): debriefStats.mute = 1 / ?mute=1.
//     Sounds still load so unmuting is instant; nothing plays.
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
  let unlocked = false;
  let muted = new URLSearchParams(window.location.search).get('mute') === '1';
  let format;                    // undefined = not checked yet, null = nothing playable
  let lettersSinceBlip = 0;
  let lastBlipAt = 0;
  let pendingClick = null;       // a click's event, held until the click is handled
  let lastSoundAt = -Infinity;   // performance.now() of the last sound started
  let lastGameSoundAt = -Infinity; // same, for sounds the game fired (not click sounds)
  let playingClick = false;

  const buffers = new Map();     // sound name → AudioBuffer[]
  const loading = new Set();     // sound names being fetched or decoded
  const missing = new Set();     // sound names that failed or have no files
  const voices = new Map();      // sound name → how many are sounding now
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

  function getContext() {
    if (ctx) return ctx;
    ctx = new AudioContextClass();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 1;
    master.connect(ctx.destination);
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

  function load(cfg, name) {
    if (buffers.has(name) || loading.has(name) || missing.has(name)) return;
    const def = cfg.sounds && cfg.sounds[name];
    if (!def || !Array.isArray(def.src) || def.src.length === 0) {
      missing.add(name);
      return;
    }
    loading.add(name);
    Promise.all(def.src.map(function (base) {
      return fetch(fileUrl(cfg, base))
        .then(function (response) {
          if (!response.ok) throw new Error(response.status + ' ' + response.url);
          return response.arrayBuffer();
        })
        .then(decode);
    }))
      .then(function (decoded) {
        buffers.set(name, decoded);
      })
      .catch(function (error) {
        missing.add(name);
        logOnce('could not load "' + name + '"', error);
      })
      .then(function () {
        loading.delete(name);
      });
  }

  // names: '*' or omitted = every sound in the config, or an array of names.
  function preload(names) {
    if (!isAvailable()) return;
    const cfg = config();
    getContext();
    const list = !names || names === '*' ? Object.keys(cfg.sounds || {}) : names;
    list.forEach(function (name) {
      load(cfg, name);
    });
  }

  function runPreloadEntry(entry) {
    if (!entry || !entry.sounds) return;
    if (entry.delay > 0) {
      setTimeout(safe('preload', function () { preload(entry.sounds); }), entry.delay);
    } else {
      preload(entry.sounds);
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

  function play(name) {
    if (muted || !isAvailable()) return;
    const decoded = buffers.get(name);
    if (!decoded) return;
    const def = config().sounds[name] || {};
    const live = voices.get(name) || 0;
    if (def.maxVoices && live >= def.maxVoices) return;

    // On the first tap the context may still be resuming. A source started
    // now plays as soon as it does, so that first tap isn't silent.
    if (ctx.state !== 'running') ctx.resume().catch(function () {});

    const source = ctx.createBufferSource();
    source.buffer = decoded[Math.floor(Math.random() * decoded.length)];
    if (Array.isArray(def.pitch)) {
      source.playbackRate.value = def.pitch[0] + Math.random() * (def.pitch[1] - def.pitch[0]);
    }
    const gain = ctx.createGain();
    gain.gain.value = typeof def.volume === 'number' ? def.volume : 1;
    source.connect(gain);
    gain.connect(master);

    voices.set(name, live + 1);
    lastSoundAt = performance.now();
    source.onended = function () {
      voices.set(name, Math.max(0, (voices.get(name) || 1) - 1));
      gain.disconnect();
    };
    source.start(0);
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

  // An event maps to a sound name, or to { sound, skipAfterMs } to stay quiet
  // when another sound started within that many ms (e.g. a popup that opens
  // right after the wrong-code sound).
  function event(eventName, detail) {
    const cfg = config();
    if (!cfg || !cfg.events || muted) return;
    const mapping = cfg.events[eventName];
    const name = mapping && typeof mapping === 'object' ? mapping.sound : mapping;
    if (typeof name !== 'string') return;
    if (mapping.skipAfterMs && performance.now() - lastSoundAt < mapping.skipAfterMs) {
      pendingClick = null;
      return;
    }
    if (eventName === 'dialogue.letter' && !shouldBlip(cfg, detail)) return;
    // A sound fired while a click is being handled replaces its plain click.
    pendingClick = null;
    if (!playingClick && eventName !== 'dialogue.letter') lastGameSoundAt = performance.now();
    play(name);
  }

  function setMuted(value) {
    muted = Boolean(value);
    if (master) master.gain.value = muted ? 0 : 1;
    return muted;
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
    onPreloadEvent: safe('onPreloadEvent', onPreloadEvent),
    event: safe('event', event),
    setMuted: safe('setMuted', setMuted),
    isMuted: function () { return muted; },
    isAvailable: safe('isAvailable', isAvailable),
  };
})();
