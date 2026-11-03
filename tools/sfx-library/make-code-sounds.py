"""Generates assets/audio/sfx/correct.wav, wrong.wav and select.wav, the game
code entry sounds (the Kenney UI pack has none). Run from the repo root:
    python3 tools/sfx-library/make-code-sounds.py
Tweak the notes below and rerun to change them."""
import math, struct, wave

RATE = 22050


def tone(freq, length, wave_shape="sine", volume=1.0):
    samples = []
    count = int(RATE * length)
    for i in range(count):
        t = i / RATE
        phase = 2 * math.pi * freq * t
        if wave_shape == "sine":
            value = math.sin(phase) + 0.25 * math.sin(2 * phase)
        else:  # soft square: odd harmonics only, gentler than a real square
            value = sum(math.sin(k * phase) / k for k in (1, 3, 5, 7))
        attack = min(1.0, i / (RATE * 0.005))
        decay = math.exp(-5.0 * t / length)
        samples.append(value * attack * decay * volume)
    return samples


def glide(start_freq, end_freq, length, volume=1.0):
    """A sine that slides in pitch, with a fast decay: a soft "pop"."""
    samples = []
    count = int(RATE * length)
    phase = 0.0
    for i in range(count):
        t = i / RATE
        freq = start_freq + (end_freq - start_freq) * (i / count)
        phase += 2 * math.pi * freq / RATE
        attack = min(1.0, i / (RATE * 0.003))
        decay = math.exp(-7.0 * t / length)
        samples.append((math.sin(phase) + 0.15 * math.sin(2 * phase)) * attack * decay * volume)
    return samples


def write(path, parts):
    mixed = []
    for start, samples in parts:
        offset = int(RATE * start)
        mixed.extend([0.0] * max(0, offset + len(samples) - len(mixed)))
        for i, value in enumerate(samples):
            mixed[offset + i] += value
    tail = int(RATE * 0.01)  # fade the last 10 ms so it never clicks
    for i in range(tail):
        mixed[-1 - i] *= i / tail
    peak = max(abs(v) for v in mixed) or 1.0
    with wave.open(path, "wb") as out:
        out.setnchannels(1)
        out.setsampwidth(2)
        out.setframerate(RATE)
        out.writeframes(b"".join(struct.pack("<h", int(v / peak * 0.9 * 32767)) for v in mixed))


# Correct: a bright rising two-note chime (E5 then B5).
write("assets/audio/sfx/correct.wav", [(0.0, tone(659.25, 0.18)), (0.09, tone(987.77, 0.32))])
# Wrong: a soft low two-note "uh-oh" (A3 then F3).
write("assets/audio/sfx/wrong.wav", [(0.0, tone(220.0, 0.16, "square", 0.8)), (0.13, tone(174.61, 0.26, "square", 0.8))])
# Select: a quick soft rising pop for tapping a game code box.
write("assets/audio/sfx/select.wav", [(0.0, glide(520.0, 900.0, 0.09))])
