# Dingo Punks: All-Access Membership (DPAAM)
### Product Spec — Working Document

---

## Build Order

### Phase 1 — Foundation (2–3 weeks)
- Firebase auth
- Room metadata structure + AI tagging pass (pre-launch task)
- Basic teacher dashboard shell

### Phase 2 — Into the Undermurk! (4–6 weeks)
- Core game mechanics — turn structure, lives, scoring, timer
- Character select screen
- Vocab bank (500 words minimum, grade-leveled)
- "Next Up" interstitial screen
- J.J. Dingo intro sequence

### Phase 3 — Dashboard + Library (6–8 weeks)
- Filtering interface + room catalog
- My Favorites + Active Codes UI
- Class code generation (6-char, 24hr expiry, rate limiting)
- Undermurk tier background art (sprinkled in as palette cleanser)

### Phase 4 — Stripe (2–3 weeks)
- Subscription infrastructure ($49/year, annual billing)
- Rebate mechanic (honor system, format-based validation)
- Account page

### Phase 5 — Polish (2 weeks)
- Classroom Mode labeling + onboarding tooltip
- Full onboarding flow for new subscribers
- Testing + bug fixes

---

**Total estimated timeline: 4–5 months at 3hrs/day**
**Target launch: Spring 2027 (buying season)**

## URL Structure & Code Routing

### Sitemap
- `dingopunks.com` — landing page
- `dingopunks.com/shop` — shop
- `dingopunks.com/teachers` — teacher dashboard login
- `game.dingopunks.com` — single kid entry point
- `game.dingopunks.com/free-play` — free play (unchanged)

### Code Routing
- `game.dingopunks.com` displays a single code input field
- Code format determines routing silently — no kid-facing product distinction
- 5-digit numeric = individual purchase room
- 5-char alphanumeric (A-Z, 1-9, excluding O and 0) = membership room
- 45,435,424 possible membership code combinations — brute force is mathematically pointless
- Rate limiting remains in place as the primary abuse protection
- Secondary option below input: **"No code? Play a free game →"** routes to `/free-play`

---
1. Stripe subscription infrastructure
2. Full library access
3. Gated minigame
4. Teacher dashboard + class codes
5. Classroom Mode

---

## 1. Stripe Subscription Infrastructure

### Pricing
- **$49/year** flat
- **Rebate mechanic:** prior purchasers can apply their most recent single-game purchase price toward the $49 annual fee at checkout (e.g. last purchase was $8.99 → pay $40.01)

### Subscription Behavior
- Annual billing only (no monthly option — keeps it simple, reduces churn surface)
- Auto-renews yearly
- Cancellation stops renewal; access continues until end of paid period
- No refunds after renewal — stated clearly at checkout

### Teacher Account
- Account created at purchase (email + password)
- Stripe customer ID tied to account
- Subscription status checked server-side on each login
- Lapsed subscribers lose dashboard + minigame access; core game remains playable (they paid for it)

### Rebate Implementation
- At checkout, teacher selects purchase platform: Shopify or TPT
- Teacher enters their Order ID from that platform
- Validation is format-based only (honor system) — no API verification at MVP
- If format matches expected pattern for selected platform, rebate is applied automatically
- Cap rebate at $8.99 (one game); no stacking
- Revisit Shopify API verification post-MVP if abuse becomes a real problem

### Free Trial
- No free trial offered
- Teachers already know the product
- "Cancel anytime, access continues through end of paid period" serves as the trust signal instead

---

## 2. Full Library Access

### Catalog
- All ~180 escape rooms available at launch
- New releases are subscription-only (no single-purchase on TPT/Shopify for new titles)
- Free preview versions continue on TPT as acquisition funnel — paid access lives in the subscription
- Room metadata structured and AI-assisted prior to launch (pre-launch task, not a dev task)

### Room Metadata Schema
Each room tagged with:
- **Season/Holiday** (14 values, mutually exclusive)
- **Grade Level** (4 values, mutually exclusive)
- **Subject** (3 values, mutually exclusive)
- **Topic** (~20 values, mutually exclusive)
- **Standards** (displayed on room detail view; not filterable at MVP)

### Filtering Interface
- Four filter dropdowns: Season → Grade → Subject → Topic (presented in this order; season is primary)
- Filters are combinable — teachers narrow by as many dimensions as needed simultaneously
- No search bar at MVP — structured filtering sufficient for catalog size
- Selecting a room opens a detail view: title, description, grade, subject, topic, full standards list
- One-click add to My Favorites from detail view (see Feature 4 for Favorites behavior)

### New Release Workflow
- New rooms plug directly into the system via backend
- No manual exporting or file editing required

---

## 3. Gated Minigame — *Into the Undermurk!*

### Concept
- Arcade-style vocab game unlocked after completing any escape room
- Subscriber-exclusive — primary conversion mechanic for free TPT players
- Target playtime: 5–10 minutes per session
- Hosted on same device; no networking required

### Setup
- Characters are carried over via URL slug from the game at index.html (players have already selected them)
- J.J. Dingo introduces the drop into the Undermurk via the Dingo Spirit

### Structure
- 10 tiers, each representing one grade level (Tier 1 = Grade 1 → Tier 10 = Grade 10)
- Game always starts at Tier 1 regardless of escape room played
- 5 questions per tier, drawn from grade-level vocab bank
- Boss round at end of each tier — single harder question, 6 multiple choice options (vs. standard 3)
- Tier completion advances players to next level with new background art
- Reaching Tier 10 and defeating the final boss = true victory (intentionally difficult)
- Boss art assets sourced from existing escape room assets; backgrounds are stylized and simple (new assets needed)

### Multiplayer — Turn Structure
- Turn-based, same device
- 1–5 players supported; solo play is valid and fully functional
- Each player has 3 independent lives
- On wrong answer: player loses a life, play passes to next player
- On correct answer: player continues their turn to the next question
- Player is eliminated when all 3 lives are lost
- Last player standing wins individually
- "Next Up" interstitial screen with player name and a Start button between every turn
- Solo play: lives and scoring function identically; no interstitial needed

### Vocab Bank
- Questions pulled from grade-appropriate bank per tier (not full bank randomly)
- Launch target: 500 words minimum, 1,000 words goal
- At 500 words: ~27% chance of repeat in a full 50-question run (acceptable at launch)
- At 1,000 words: ~14% chance of repeat (target state)
- Words added post-launch to expand bank over time

### Scoring
- **Individual score:** correct answers only; boss round correct answers = 2x points
- **Team score:** combined correct answers across all players
- Both scores displayed throughout — competitive AND cooperative dynamic
- Scores visualized against depth/level thresholds (UI treatment only)
- Session-based only — no leaderboard, no persistence

### Timer
- 20 seconds at Tier 1
- Decreases by 1 second per tier
- 11 seconds at Tier 10
- Timer is consistent across all players at a given tier

---

## 4. Teacher Dashboard + Class Codes

### Auth
- Email + password login
- Account created at subscription purchase — no separate signup flow
- Password reset via email
- Subscription status verified server-side on every login
- Lapsed subscribers see a renewal prompt; dashboard and minigame inaccessible until renewed

### Dashboard Layout
Single scrolling page, three sections top to bottom:

**1. Active Codes — always visible at top**
- All currently active codes displayed, never collapsed
- Code displayed large and readable
- 24hr countdown timer per code
- Cancel button per code
- Persistent n/12 active indicator

**2. My Favorites — collapsed by default**
- Expandable — could be dozens of rooms long
- Manually reorderable via drag and drop
- Each room shows Generate Code or Regenerate button
- Active rooms display live code + timer inline
- Remove button per room

**3. Library**
- Four filter dropdowns: Season → Grade → Subject → Topic
- Filtered results display as a clean list/grid
- Selecting a room opens detail view: title, description, grade, subject, topic, standards list
- One-click Add to Favorites from detail view

### Account Page
- Separate from main dashboard
- Displays: email, subscription status, renewal date
- Cancel subscription option — triggers confirmation prompt, access continues through paid period
- No self-serve plan changes at MVP

---

## 5. Classroom Mode

### Reality
Classroom Mode already exists — it's simply selecting 1 player and proceeding. No new mechanics, no new dev work required.

### What's Actually Needed
- A clearly labeled **Classroom Mode** entry point or badge on the game setup screen so teachers know it exists
- Brief in-app tooltip or onboarding prompt on first login explaining the mode
- Simple instructions: run on your device → project to screen → call on students → one character represents the class
- Classroom Mode is available for both the core escape room and Into the Undermurk!

### Notes
- Fully teacher-driven; no student devices required
- This is the primary firewall bypass solution — no district network needed if teacher runs from personal device
- Marketing copy should call this out explicitly as a feature