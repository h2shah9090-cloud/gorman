# assets/

Brand assets for the MongoDB Design System.

## ⚠️ Logo — placeholder only
The MongoDB **leaf logo is a trademark** and was not provided to this build.
The UI kits render a **text wordmark** ("MongoDB" in the display face, ink
color) alongside a neutral placeholder leaf glyph drawn from the substitute
icon set.

**Before any real/production use:** obtain the official MongoDB logo SVGs
(light + dark variants) from the brand team and place them here as
`logo-mark.svg`, `logo-lockup.svg`, `logo-lockup-on-dark.svg`, then update the
`Logo` component in `ui_kits/marketing-web/`.

## Icons
No local icon files. The kits use **Lucide** via CDN as the closest match for
the proprietary `@leafygreen-ui/icon` set (see README → Iconography). To switch
to the real set, export the LeafyGreen SVGs here and replace the `<i data-lucide>`
usages.

## Illustrations / imagery
The source surfaces use atmospheric, cool-toned product imagery and embedded
**terminal-style code mockups** (which are built in code, not as image files —
see `CodeMockup.jsx`). No raster illustrations were provided. Use
`image-slot` placeholders or supply real assets here.
