# cascinobuilders.com: rules for working on this site

Plain static site, no build step. Every page is a hand-written `index.html` in its folder.
Shared look lives in `assets/site.css`; the home page adds `assets/home.css`.

## The look: a shop drawing
The site reads like a carpenter's drawing sheet, because the shop builds tools for builders.
Keep every new page inside this system; don't drift back to a generic app-landing look.

- **Paper and ink.** Drafting-grid paper `--paper #f3eee3`, graphite `--ink #1d1b17`,
  one accent: lumber-crayon red `--mark #c2401f` (`--mark-ink #9e3115` for small text).
  Red is for marks, dimensions, numbers and the single emphasised word. Never a gradient.
  An app page may carry its own brand accent (StairSmith uses amber), still on the paper and ink.
- **Type** (self-hosted in `assets/fonts/`, SIL OFL):
  - Archivo, stretched to 125% and heavy (800–900), uppercase, for display.
  - Newsreader for reading text; italic for ledes and subtitles.
  - Spline Sans Mono, uppercase and tracked, for labels, specs, buttons and dimensions.
  - Not Inter, Roboto, system-ui or Space Grotesk.
- **Drawing vocabulary.** Rulers, dimension lines with end ticks, callout bubbles, cut lists,
  spec tables, grade stamps and a title-block footer. Line drawings are inline SVG with the
  `.ln`, `.ln-thin`, `.dim`, `.dim-t`, `.callout` classes, and they show the real thing
  (real riser maths, a real pickleball score, a real set log).
- **Shapes.** Square corners (2px at most), 1–1.5px ink rules, hard offset shadows
  (`3px 3px 0`) and no soft drop shadows. No rounded "cards" floating on blur.
- **Motion.** There's one orchestrated entrance on the home page, drawings ink in once
  when they're scrolled to, and the ruler mark tracks scroll where the browser supports it.
  Wrap everything in `prefers-reduced-motion: no-preference`, and the page must read
  fully with JS off.

## Copy
- Write in the first person: one person runs the shop. Say plain, specific things.
- Only claim what the app's own privacy, support or FAQ page says. Don't invent
  features, prices or App Store links. Prices go on the app's own page, not the home page.
- Headlines say what the thing is. No puns, idioms or wordplay taglines.
- Avoid filler like "seamless", "elevate", "unlock", "effortless" or "revolutionary".
  Avoid em-dash chains and three-adjective lists.

## Pages
- New support, privacy or FAQ page: copy `kitchencounter/privacy/index.html` and keep the
  header (ruler, brand, app sub-nav with `aria-current`), crumbs, `main.doc`, and title-block footer.
  Number the `h2`s with `data-n="01"`, `"02"`, and so on.
- New app: add a `.part` to the cut list in `index.html`, a sheet code for the
  title block (SS, KC, RT…), and its URLs to `sitemap.xml`.
- `citadel-legacy/` is a stand-alone tool with its own style; leave it alone.
- After changing `tools/og.html` or `favicon.svg`, re-render `og.jpg` and `apple-touch-icon.png`
  with `node tools/render-images.js` (needs Playwright and a local server on port 4173).

## Before you push
- Screenshot at 1440×900 and 390×844: no sideways scroll, no console errors.
- Check once with reduced motion on; drawings and the stamp must be fully visible.
- Tab once from the top: the first stop is "Skip to content".
- Pushing to `main` publishes the site, so work on a branch and open a PR.
