# Lexicon v63 — 20 November 2026

## UI and CSS

- Deleted 11 groups of obsolete dark-mode overrides, including high-specificity charcoal button and select backgrounds; these were responsible for unusually black search/filter/expand controls.
- Added six light/dark semantic icon/control tokens and exposed them through Tailwind v4 CSS-first `@theme inline`; shared states use Tailwind `@apply` in the maintained component stylesheet.
- Matched dropdown chevrons, details/expand toggles, filter actions, pagination arrows and specialized search input shells to the same palette, with consistent focus/hover colors.
- No additional runtime style sheet; generated CSS remains the only loaded stylesheet.

## Language

- Added 23 hand-written paired English-Chinese definitions, 21 usage examples and 7 contrast guides; no existing base definitions were overwritten.
- Focus: stationary/stationery, ingenious/ingenuous, immigrant/emigrant, affective/effective, ironic/sarcastic, obsolete/obsolescent, exacerbate/exasperate, and specialist terms including injection and detector.

## Verification

Screenshots and computed-style assertions in `docs/control-audit-v63.json`; Chromium navigation and responsive checks in `docs/browser-report-v63.json`. Windows binary compilation and archive integrity checked; Windows native execution remains unverified.
