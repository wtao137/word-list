# Lexicon v63 — Unified interactive controls

A bilingual vocabulary studio with 20,821 headwords, filtered dictionary search, regional usage, morphology and learning tools.

## Start

- Windows: extract `Lexicon-v63-PWA-Windows.zip` to a fresh folder, then launch `Lexicon-Start.exe` (default `http://127.0.0.1:8765`).
- Web/PWA: deploy the Web ZIP to HTTPS or serve it locally; the service worker uses the v63 cache namespace.
- One-file: open `Lexicon-v63-Standalone.html` in Chrome/Edge.
- Linux: run `./Lexicon-Start-Linux`, with `-no-browser` to avoid opening a browser.

## Styles

Only `src/styles/tokens.css` and `src/styles/app.css` are maintained; browsers load `css/tailwind.css` compiled with offline Tailwind v4. `scripts/build_tailwind.mjs` exposes icon/control semantic colors via `@theme inline` and `app.css` uses Tailwind `@apply` for the shared control family. Theme colors reside in tokens, not dark-mode hard-coded overlays. Avoid introducing new broad `!important` overrides.

The v63 changes specifically remove the old charcoal `!important` declarations affecting dark filter buttons, expand chevrons, selects and pagination; controls inherit semantic `--lx-icon-*` values. Do not clear browser site data when upgrading: it holds reading and study progress.

## Data

Base dictionary: `data/words-v28.json.gz` (unchanged). Curated bilingual explanations: `data/curated-bilingual-v63.json`, with 3,665 paired definitions, 899 usage sets and 230 contrast guides. Only a subset has editorially reviewed English-Chinese sense correspondence; all 20,821 base words keep their original dictionary Chinese meanings.

## Build and test

`node scripts/build_tailwind.mjs` and `python scripts/build_standalone.py`, then run `python scripts/browser_controls_v63.py` and `python scripts/browser_smoke_v63.py` with Chromium and Playwright. The Windows executable is cross-compiled but not tested on a native Windows machine.
