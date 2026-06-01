# Marketing Web — UI Kit

High-fidelity recreation of MongoDB's public marketing surfaces. A clickable
single-page app with three views; navigate via the top nav.

## Run
Open `index.html`. It loads `../../colors_and_type.css` (tokens + fonts) and
`kit.css` (component styles), then React + Babel + Lucide from CDN.

## Views
- **Home** (`Home.jsx`) — deep-teal hero with "One data platform. Unlimited AI
  potential.", embedded terminal code mockup, 3-up feature grid, logo wall,
  dark CTA banner.
- **Pricing** (`Pricing.jsx`) — pill-tab switcher, 3-tier card row (Free / Flex
  featured / Dedicated), and a feature comparison table.
- **University** (`University.jsx`) — search hero, category filter pills, and a
  3-up course catalog with colored category tags.

## Components
| File | Exports |
|---|---|
| `primitives.jsx` | `Icon` (Lucide wrapper), `Logo`, `Button`, `Tag`, `Eyebrow` |
| `CodeMockup.jsx` | `CodeMockup` — terminal card with syntax highlighting |
| `TopNav.jsx` | `TopNav` — promo banner + sticky nav |
| `Home.jsx` / `Pricing.jsx` / `University.jsx` / `Footer.jsx` | page sections |
| `app.jsx` | `App` router shell + mount |

Each file exports to `window` (Babel scripts don't share scope otherwise).

## Fidelity notes
- Recreation, not production code — interactions are cosmetic (tab/category
  switches, page nav). No real data or auth.
- **Logo** is a text wordmark + placeholder leaf glyph; swap in the official
  SVG (see `/assets/README.md`).
- **Icons** are Lucide (substitute for `@leafygreen-ui/icon`).
- Built from the written design spec + LeafyGreen palette — no source codebase
  was available, so section coverage favors the signature patterns over an
  exhaustive page clone.
