## Cursor Cloud specific instructions

This is a static portfolio website (HTML/CSS/vanilla JS) with no build system, no package manager, and no dependencies to install.

### Running the dev server

Serve from the workspace root with any static HTTP server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in a browser. The site uses ES modules (`<script type="module">`) and root-relative asset paths (`/Site/MainSite.js`, `/Assets/...`), so it **must** be served over HTTP — `file://` will not work.

### Lint / Test / Build

- **No linter, test suite, or build step exists.** The site is plain HTML/CSS/JS loaded via CDN (Tailwind CSS, Google Fonts, Material Icons).
- Validation is manual: open in a browser and verify pages render correctly.

### Key structure

| Path | Purpose |
|---|---|
| `index.html` | Homepage |
| `ProjectPages/*.html` | Individual project detail pages |
| `Site/MainSite.js` | Shared JS (email copy button) |
| `Site/styles.css` | Shared styles + CSS custom properties |
| `Assets/` | Fonts, images, CV PDF |
| `CNAME` | GitHub Pages custom domain |
