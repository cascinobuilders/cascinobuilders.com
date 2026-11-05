# cascinobuilders.com

The public side of the Cascino Builders workshop: the iPhone and Apple Watch apps
(StairSmith, Kitchen Counter, Rep Track) with their support and privacy pages, plus other
projects. The App Store listings point at the support and privacy URLs, so keep them stable.

Plain static site with no build step; the repo root is published as-is.

```
index.html                 home: hero, apps and app rules, other projects, contact
assets/site.css            shared tokens, fonts, ruler header, buttons, doc pages, title-block footer
assets/home.css            home page only
assets/site.js             drawings ink in on scroll, "copy address" button
assets/fonts/              Archivo, Newsreader, Spline Sans Mono (SIL Open Font License)
stairsmith/                marketing page (with preview clips), support, privacy
kitchencounter/            FAQ, support, privacy
reptrack/privacy/          privacy
citadel-legacy/            board-game house rules tool (stand-alone, own style)
404.html, robots.txt, sitemap.xml, favicon.svg, apple-touch-icon.png, og.jpg
tools/og.html              source for og.jpg + apple-touch-icon.png (tools/render-images.js)
```

Design and copy rules are in `CLAUDE.md`.

## Local preview

```
python3 -m http.server 4173     # then open http://localhost:4173
```
