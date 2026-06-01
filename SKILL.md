---
name: mongodb-design
description: Use this skill to generate well-branded interfaces and assets for MongoDB, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — product context, voice, visual foundations, iconography, manifest
- `colors_and_type.css` — all design tokens as CSS variables (link this + wrap content in `.ds-scope`)
- `fonts/` — self-hosted Montserrat (display) + Source Code Pro via CDN
- `preview/` — small spec cards for colors / type / spacing / components
- `ui_kits/marketing-web/` — high-fidelity React UI kit (home, pricing, University) you can lift components from

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, copy assets and read the rules here to become an expert in
designing with this brand.

Core brand rules to honor:
- Bright MongoDB green `#00ED64` for primary CTAs only — never body text or large fills.
- Pair deep-teal `#001E2B` hero/footer/CTA bands with green pill CTAs.
- Every button and status badge is a full pill; cards are 12px radius with a 1px hairline, flat by default.
- Category accent colors (purple/orange/pink/blue) appear ONLY on course tags.
- Montserrat across every surface; Source Code Pro for code only. No emoji.

If the user invokes this skill without other guidance, ask them what they want
to build or design, ask a few questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
