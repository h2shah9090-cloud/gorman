# fonts/

**Display face — self-hosted.** The brand display face is **Montserrat**
(supplied by the user as a stand-in for the proprietary Euclid Circular A).
It's wired via `@font-face` in `colors_and_type.css` using the variable fonts:

- `Montserrat-VariableFont_wght.ttf` — upright, weight 100–900
- `Montserrat-Italic-VariableFont_wght.ttf` — italic, weight 100–900

(The static-weight `.ttf` files are also here as fallbacks.)

**Code face — CDN.** Source Code Pro loads from Google Fonts (the real face).

## To use the real Euclid Circular A
1. Drop the licensed `.woff2` files here.
2. Add an `@font-face` block for each in `colors_and_type.css`.
3. Put `'Euclid Circular A'` first in the `--font-display` stack.
