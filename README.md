# Lexicon v73 — Consistent navigation and semantic surfaces

Lexicon is a local-first bilingual dictionary and vocabulary learning studio. This release unifies eleven search controls and fixes dark-theme search, dropdown and inset-option surfaces using the established depth model. It also adds carefully edited English/Chinese explanations, usage patterns and contrasts.

## Run

- **Windows:** unpack `Lexicon-v73-PWA-Windows.zip` into a directory and run `Lexicon-Start.exe`. Default origin: `http://127.0.0.1:8765/`.
- **Web / PWA:** deploy `Lexicon-v73-PWA-Web.zip` under an HTTPS site or localhost. Open `index.html` through the origin, not `file://`.
- **Standalone:** open `Lexicon-v73-Standalone.html` in Chrome/Edge (offline with embedded word and editorial data).
- **Upgrade from v72:** stop the server, extract `Lexicon-v73-Update-from-v72.zip` over the v72 directory, execute `Cleanup-Lexicon-v72.cmd`, restart **at the same port and browser profile** to preserve site-local review state. Browser site data is not cleared.

## Semantic depth

The three independent ideas are deliberately separated:

- **Surface elevation** describes material and luminance (canvas, chrome, panel, raised workbench, floating content). `data-surface` explicitly annotates principal DOM nodes. `src/styles/tokens.css` owns the light/dark surface/border/shadow tokens; `src/styles/app.css` owns their component applications.
- **Stack order** describes overlay behavior (sticky header, drawer scrim, drawer, semantic preview, dropdown, notice). It is controlled by named `--z-*` tokens. A surface can be *visually* raised without receiving a large z-index.
- **Interaction state** describes hover, focus and selection. Ordinary reading rows remain flat; selectable cards lift only for a fine pointer; accessible focus remains visible and reduced-motion mode disables decoration transitions.

Shared control and depth contract: `docs/DESIGN-CONSISTENCY-v73.md`.

## Architecture

- `src/styles/tokens.css` + `src/styles/app.css` → one generated `css/tailwind.css` using Tailwind CSS v4. Both source sheets and the compiled CSS contain **zero `!important` declarations**.
- `js/app.js` builds the dictionary and learning features from `data/words-v28.json.gz` and `data/curated-bilingual-v73.json`.
- `Lexicon-Start.go` is the simple localhost server. It does not require Node.js at runtime. Run `node scripts/build_tailwind.mjs` for editable UI builds; run `python scripts/build_standalone.py` for the single HTML.
- Test: `node scripts/style_check_v73.mjs`, `python scripts/check_data_v73.py`, `python scripts/browser_consistency_v73.py`, `python scripts/check_responsive_v73.py`, `python scripts/check_sections_v73.py`.

The original 20,821 dictionary headwords remain unchanged. The curated editorial layer contains 4,093 bilingual explanations, 1,167 usage sets and 314 contrast guides; it is not a line-by-line translation of all original dictionary definitions.

## Notes

- Windows cross-build is verified as PE32+; Windows GUI usage requires real-device validation.
- Browser screenshots and tests are made using Chromium and the same compiled stylesheet and app source as the release.
- The base dictionary retains the attribution of its original sources; user learning data remains in browser local storage, not the installation directory.
