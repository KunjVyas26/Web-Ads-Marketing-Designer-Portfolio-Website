# Kunj Vyas — Portfolio

Static site. Host on GitHub Pages with no build step.

## Deploy to GitHub Pages
1. Create a new repo (e.g. `portfolio`) and upload **all** files in this folder, keeping the structure:
   - `index.html` (entry point)
   - `Portfolio.dc.html`, `SaasHomepage.dc.html`, `ProjectScreen.dc.html`, `DashboardMock.dc.html`, `EmailScreen.dc.html`
   - `support.js`
   - `_ds/` (design-system styles)
   - `uploads/` (your photo + assets)
2. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, pick `main` / `/root`, Save.
3. Wait ~1 minute. Your live link appears at the top of the Pages settings, e.g. `https://<username>.github.io/portfolio/`.

That's it — the page loads `index.html` and pulls in the rest via relative paths.

## Notes
- Keep the folder structure and filenames exactly as-is (paths are relative).
- Fonts load from Google Fonts (needs internet, which any live site has).
- If you edit the design in Claude later, re-export and replace the files (remember to re-copy `Portfolio.dc.html` over `index.html`).
