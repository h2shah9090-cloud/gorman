# MongoDB Design System

A design system for recreating MongoDB-branded interfaces and marketing
surfaces — colors, type, spacing, components, and high-fidelity UI kits — so a
design agent can produce on-brand mocks, prototypes, and slides.

> **Provenance & sources.** This system was built from a written design spec
> supplied by the user (a `DESIGN.md`-style token document covering colors,
> typography, layout, components, and responsive behavior). No codebase, Figma
> file, or asset bundle was attached. Color/type/spacing values were resolved
> from MongoDB's **public LeafyGreen design system** to match the spec's token
> names:
> - LeafyGreen palette — https://github.com/mongodb/leafygreen-ui (`packages/palette`)
> - MongoDB design site — https://www.mongodb.design/foundations/palette
> - Surfaces referenced by the spec: mongodb.com (homepage), /products/platform/atlas-database,
>   /pricing, learn.mongodb.com (MongoDB University), /solutions/use-cases/artificial-intelligence
>
> The reader is **not** assumed to have access to these; links are recorded for
> traceability only.

---

## What MongoDB is (product context)

MongoDB is a developer data platform built around a document database. The
public-facing surfaces this system models fall into a few families:

- **Marketing / product pages** (mongodb.com) — the homepage hero "One data
  platform. Unlimited AI potential.", Atlas product pages, AI use-case pages.
  Deep navy-teal hero bands, bright-green CTA pills, embedded terminal-style
  code mockups, white feature-card sections below.
- **Pricing** (/pricing) — a 3-tier comparison (Free / Flex / Dedicated) with a
  featured mint-highlight tier and a dense feature-comparison table.
- **MongoDB University** (learn.mongodb.com) — a course catalog grid where each
  tile carries a colored category tag (purple / orange / green / blue). This is
  the only place saturated color appears outside the brand green.

The visual identity is **dual-mode**: dark deep-teal hero/footer/CTA bands
against stark-white documentation and pricing surfaces, stitched together by
the one unmistakable signal — the bright **MongoDB green (`#00ED64`)** CTA pill.

### Products / surfaces represented here
| Surface | Where | UI kit |
|---|---|---|
| Marketing web (home, pricing, University) | `ui_kits/marketing-web/` | ✅ |

---

## Font substitution ⚠️

The display face is **Euclid Circular A** — a proprietary geometric sans that
is **not** web-distributable. The user supplied **Montserrat** as the brand
display face; it is **self-hosted** from `fonts/` (variable weight 100–900,
upright + italic) and wired via `@font-face` in `colors_and_type.css`.
Montserrat is a geometric sans with circular bowls — a close stand-in for
Euclid's proportions. Code is set in **Source Code Pro** (the real face, loaded
from Google Fonts CDN).

**Action for the user:** if you later obtain a licensed Euclid Circular A web
kit, drop the `.woff2` files into `fonts/`, add `@font-face` blocks, and put
`'Euclid Circular A'` first in the `--font-display` stack.

---

## Content fundamentals (voice & copy)

MongoDB's copy is **developer-confident but plain-spoken** — it sells scale and
capability without hype-words, and it talks to builders.

- **Person & address.** Second person, imperative — *"Build faster. Build
  smarter."* / *"Start free."* The reader is *you*; the product does the work.
  First-person plural ("we") appears only in company/about contexts.
- **Casing.** Sentence case for headlines and buttons (*"Try Free"*, *"Get
  started"*). Reserved Title Case for proper product names (*MongoDB Atlas*,
  *Enterprise Advanced*, *MongoDB University*). ALL-CAPS only for tiny
  eyebrows/category tags (`micro-uppercase`, 11px, +1px tracking).
- **Headline shape.** Short, declarative, often a two-beat structure with a
  period: *"One data platform. Unlimited AI potential."* Confident claims,
  concrete nouns (data, platform, AI, scale), minimal adjectives.
- **Body tone.** Explanatory and technical-credible. Sentences are complete and
  generously leaded (1.55) for documentation readability. Numbers and product
  facts over vibes — *"Deploy a database in seconds"*, *"Free forever"*.
- **CTAs.** Verb-first and short: *Try Free*, *Get started*, *Start free*,
  *Contact sales*, *Learn more*, *Get Started →* (course tiles append an arrow).
- **No emoji.** The brand does not use emoji in UI or marketing. Don't add them.
- **Vibe.** Trustworthy infrastructure for serious work — quietly modern, never
  cute. The energy comes from the green CTA and the code mockups, not from
  exclamation marks.

**Examples to imitate:** *"One data platform. Unlimited AI potential."* ·
*"The database for modern applications."* · *"Start free, scale as you grow."* ·
*"Loved by developers, trusted by enterprises."*

---

## Visual foundations

**Colors.** White-dominant surfaces (`#FFFFFF`) with a neutral gray ramp for
text/borders, anchored by **MongoDB Black `#001E2B`** (a deep navy-teal) for
ink and for all dark bands. The single hero accent is **bright green
`#00ED64`**, used *only* for CTAs, key indicators, and on-dark links — never
for body text or large fills. Inline links use the darker `#00684A`. A small
category-accent set (purple/orange/pink/blue) is quarantined to **course tags
only**. Don't introduce colors beyond green + the category set.

**Type.** One display family (Euclid Circular A → Montserrat, self-hosted) across
every surface, weight 500 for display/headlines, 400 for body, **600 reserved
for buttons and small emphasis** (FAQ headings, badges, eyebrows). Display
sizes carry negative tracking (-1.5px at 72px easing to -0.5px); hero leading is
tight (1.10). Body is generously leaded (1.55). Code is Source Code Pro — never
used for prose.

**Spacing & layout.** 4px base, 8px primary increment. 1280px max-width
container with 32px gutters. Marketing surfaces breathe — up to 120px hero
padding, 96px section rhythm — while pricing/learn tighten to 64px. Grids:
3-tier pricing row, 3-up course catalog, 6-up service tiles, 2-col AI hero.

**Backgrounds.** Two modes. (1) Stark white / `#F9FBFA` surfaces for
docs/pricing/catalog. (2) Deep-teal `#001E2B` bands for heroes, footer, and
bottom CTA banners, carrying subtle atmospheric gradient depth and often an
embedded **terminal-aesthetic code mockup card** on a `#001E2B` canvas. No
busy textures, no repeating patterns. Imagery is full-bleed and atmospheric
(cool-toned, techy) when present; otherwise the code mockup is the hero image.

**Cards.** 12px radius (`--r-lg`), 1px `#E8EDEB` hairline border, white
background, **flat by default** (no shadow). Elevation is *earned*: feature
cards get a soft `0 4px 12px rgba(0,30,43,.08)`; code mockups floating over the
hero get the strongest `0 12px 24px -4px rgba(0,30,43,.12)`. Don't pile shadows
on flat documentation cards.

**Corner radii.** Cards/tiles 12px; inputs/code blocks 8px; badges/chips 6px;
course category tags 4px; larger panels 16–24px; and **every button + status
badge is a full pill (`9999px`)** — the pill is a brand signature, never soften
it to a rounded rectangle.

**Borders.** Hairlines do most of the structural work: `#E8EDEB` for dividers
and card edges, `#C1C7C6` (stronger) for input borders, a translucent white
`rgba(255,255,255,.16)` for borders on dark bands. The featured pricing tier
uses a 2px **green** border as its highlight.

**Elevation/shadows.** All shadows are tinted with the brand-teal-deep
(`rgba(0,30,43,…)`) rather than neutral black, so they read cool. Four levels
(subtle → modal); see `colors_and_type.css` and the Spacing cards.

**Motion (not in source — recommendation).** The spec follows a no-hover-doc
policy and didn't extract timings. Recommend restrained 150–200ms ease
transitions, simple fades and color shifts. No bounces, no parallax, no
attention-seeking motion. Press state: slight color deepen (green →
`#00A35C`); avoid scale tricks.

**Transparency & blur.** Used sparingly — translucent white for on-dark borders
and muted on-dark text (`rgba(255,255,255,.72)`). No heavy glassmorphism.

---

## Iconography

> ⚠️ **Substitution.** MongoDB ships its own icon set (`@leafygreen-ui/icon`)
> — single-weight, ~16px, geometric line/solid SVGs. Those assets were **not**
> available to this build. We substitute **Lucide** (https://lucide.dev) loaded
> from CDN: it shares the closest profile (clean ~1.5–2px stroke, 24px grid,
> rounded joins, single weight). Flag this if exact icon parity matters and
> provide the LeafyGreen SVGs to swap in.

- **System.** Lucide via CDN (`lucide@latest`), used inline in the UI kits for
  nav, search, chevrons, checkmarks, and course-tile glyphs.
- **Style.** Line icons, single weight, no duotone, no filled-color icons
  except brand-green checkmarks in pricing/feature lists. Keep icons monochrome
  in `--c-steel`/`--c-ink`, or green for affirmative ticks.
- **Emoji / unicode.** None. The brand does not use emoji as iconography. The
  only "glyph" liberties are the `→` arrow on course-tile / link CTAs.
- **Logo.** The official **Gorman Medical and Specialty Center** logo is
  provided in `assets/` (`logo-stacked.png`, `logo-horizontal.png`) — a
  green/blue circular swirl around a medical cross with a heart. Its two colors
  (**leaf-green `#84C048`**, **swirl-blue `#4884C0`**) are the brand's primary
  color source.

---

## Index / manifest

| File | What it is |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography, manifest |
| `colors_and_type.css` | All tokens as CSS vars (base + semantic) + type-role classes |
| `SKILL.md` | Agent Skill entry point (Claude Code compatible) |
| `fonts/` | Webfont drop-zone (currently Google Fonts via CDN; see Font substitution) |
| `assets/` | Logos, icon notes, illustration placeholders |
| `preview/` | Small HTML cards powering the Design System tab (colors, type, spacing, components) |
| `ui_kits/marketing-web/` | High-fidelity marketing-site UI kit (home, pricing, University) + JSX components |

**Quick start:** link `colors_and_type.css`, wrap content in `.ds-scope`, use
the `--c-*`, `--sp-*`, `--r-*`, and `--fs-*` tokens. For full screens, copy the
relevant `ui_kits/marketing-web/*.jsx` component and its assets.
