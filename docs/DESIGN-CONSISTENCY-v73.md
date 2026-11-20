# Lexicon v73 — functional, theme, and depth consistency

## Component rules

- Returning to another area is a **secondary navigation action** (`lex-return-action`), never a high-emphasis acquisition or installation button. Same visual appearance for roots, semantics, prepositions, topic and reading-history returns. Text and icons inherit one foreground token.
- Closing a banner or root details is a compact icon dismiss action (`lex-dismiss-action`), not a second primary action.
- Navigation banners are inset workflow context (`lex-return-banner`) rather than floating cards. Only dropdowns, dialogs and modals use floating elevation and higher z-indices.
- In-word examples use the readable blue-grey `surface-raised` without added elevation shadow; paired meaning and curated usage use `surface-inset` / `surface-edge`. None uses hardcoded dark charcoal. Primary entry content remains flat.
- Pointer hover is differentiated but uses semantic surfaces; keyboard focus gets its own visible focus ring. Reduced-motion and touch preferences are maintained.

## CSS architecture

Two maintained source files, `src/styles/tokens.css` and `src/styles/app.css`. Layers: `lexicon-components` and `lexicon-state` plus Tailwind `utilities`. Zero `!important` in either source or generated stylesheet. Shared components are defined in the pre-existing `lexicon-state` layer; no new stylesheet or extra late override layer.

## Coverage

Browser section/width/theme verification: 156 cases; 11 filter scopes in both themes; actual rendered and sampled example/return controls in light/dark modes. Mobile transient overflow during rapid resize remains a watch item; Windows native startup not yet tested on a Windows host.

## Editorial data

`data/curated-bilingual-v73.json` adds 41 selected meanings, 24 usage examples, and 6 word contrasts. The 20,821-headword underlying dictionary is unchanged; the selected bilingual material is not claimed to be a translation of every source definition.
