# Lexicon v73 — Shared navigation, example surfaces, content refinement

- Standardized return navigation (word family, semantic atlas, preposition, topic and reading history) with a single accessible `lex-return-action` component and consistent icon, text, hover, focus and pressed states, in both themes.
- Standardized close/dismiss icon controls and inset return banners while preserving existing event IDs and navigation behavior.
- Replaced the hard-coded charcoal `In a sentence` example card with the established semantic inset surface; improved literary quotation typography and introduced a bilingual, semantic section heading.
- Migrated leftover charcoal backgrounds in curated meaning, usage and detailed reading panels to existing surface-depth tokens. Removed conflicting dark-theme overrides, without adding a CSS file.
- Expanded editorial explanations by 41 bilingual entries, 24 practical usage sets and 6 contrast guides; base 20,821 words unchanged.
- Retains zero CSS `!important` in both sources and compiled CSS.
- Tested 156 navigation/viewport section combinations, 11 active filter scopes per theme and representative Chromium examples; long-running full browser audit was not completed due to timeout. Windows binary is cross-compiled, not run on Windows.
