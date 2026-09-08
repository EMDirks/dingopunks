// Terms a generated share code must never contain. Generation-only: existing
// codes are never re-validated, and resolve/cancel stay blocklist-agnostic.

// Digits that read as letters in the code alphabet. 0 and 6 are absent
// because CODE_ALPHABET has no O, and 6 has no unambiguous letter twin.
const LEET_MAP = { 1: "I", 3: "E", 4: "A", 5: "S", 7: "T", 8: "B" };

// Matched against the raw code only — these are numbers, not words.
const RAW_NUMBER_PATTERNS = ["69", "420", "666", "1312", "1488", "8008"];

const BLOCKED_TERMS = [
  "ACAB", "ACID", "AK47", "ANAL", "ANUS", "AR15", "ARSE", "ASS",
  "BALLS", "BDSM", "BEER", "BIDEN", "BITC", "BITCH", "BLOOD", "BOMB",
  "BONG", "BOOB", "BOOBS", "BOOTY", "BOOZE", "BUTT",
  "CHINK", "CLIT", "CNUT", "COCK", "COK", "COMMIE", "COOM", "COON",
  "CRACK", "CRAP", "CUCK", "CUM", "CUMMY", "CUMS", "CUNT",
  "DCK", "DEAD", "DEATH", "DEEZ", "DEGEN", "DEVIL", "DICK", "DICKS",
  "DIE", "DIES", "DIK", "DILF", "DONG", "DOPE", "DRUG", "DRUGS",
  "DRUNK", "DUMB", "DUMMY", "DYKE",
  "FAG", "FAGG", "FAGS", "FANNY", "FART", "FAT", "FATTY", "FCK",
  "FCUK", "FENT", "FML", "FUCK", "FUCKS", "FUK",
  "GASH", "GAY", "GAYS", "GOD", "GOOK", "GOON", "GORE", "GTFO",
  "GUN", "GUNS", "GYAT", "GYATT", "GYPO",
  "HANG", "HEIL", "HELL", "HIGH", "HOMO", "HORNY", "HUNG",
  "IDIOT", "INCEL", "ISIS",
  "JESUS", "JEW", "JEWS", "JIHAD", "JIZZ", "JIZZY", "JUUL",
  "KET", "KIKE", "KILL", "KILLS", "KINK", "KKK", "KMS", "KNOB",
  "KOCK", "KYS",
  "LES", "LESB", "LEWD", "LIGMA", "LOSER", "LSD", "LYNCH",
  "MAGA", "MDMA", "METH", "MILF", "MOIST", "MUFF", "MURD",
  "NAKED", "NAZI", "NAZIS", "NIG", "NIGG", "NIGGA", "NIP", "NIPS",
  "NOOB", "NUDE", "NUTS", "NUTZ",
  "OHIO", "OWO",
  "PAKI", "PEE", "PEEN", "PENIS", "PIPE", "PISS", "POO", "POOP",
  "PORN", "POT", "PRICK", "PUBE", "PUKE", "PUSSY",
  "RAPE", "RETARD", "RIZZ", "RTRD",
  "SATAN", "SEMEN", "SEX", "SEXT", "SEXY", "SHIT", "SHITS", "SHOOT",
  "SHYT", "SIGMA", "SIMP", "SKEET", "SKIBI", "SLUT", "SMUT", "SPIC",
  "SPUNK", "STAB", "STFU", "STUPD", "SUIC", "SUS",
  "TARD", "THC", "THOT", "TIT", "TITS", "TITTY", "TRAN", "TRIP",
  "TRUMP", "TURD", "TWAT",
  "UGLY", "UWU",
  "VAG", "VAGIN", "VAPE", "VIRGN", "VOMIT", "VOTE",
  "WANG", "WANK", "WEED", "WHOR", "WINE", "WTF",
  "YEET",
];

export { BLOCKED_TERMS, LEET_MAP, RAW_NUMBER_PATTERNS };

export function normalizeLeet(code) {
  let out = "";
  for (const char of code) out += LEET_MAP[char] ?? char;
  return out;
}

/**
 * True if `code` contains a blocked number pattern or a blocked term, either
 * spelled out or written in leet. Terms that contain digits (AK47, AR15) only
 * match the raw code, since normalization would rewrite those digits away.
 */
export function isCodeBlocked(code) {
  const upper = String(code).toUpperCase();
  if (RAW_NUMBER_PATTERNS.some((pattern) => upper.includes(pattern))) {
    return true;
  }
  const normalized = normalizeLeet(upper);
  return BLOCKED_TERMS.some(
    (term) => upper.includes(term) || normalized.includes(term),
  );
}
