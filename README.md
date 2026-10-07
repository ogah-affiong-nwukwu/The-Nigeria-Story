# Nigerian Cultural Atlas

A vibrant, fully responsive React single-page application celebrating Nigeria's living heritage —
17 major cultures, their festivals, textiles, music, legendary figures and prominent families,
plus an interactive directory with live search, and "The Nigerian Story": a journey through
Nigerian history, the founding fathers, and both national anthems.

## Quick Start

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://127.0.0.1:3000
npm run build      # typecheck + production build (output in dist/)
npm run preview    # serve the production build
npm run lint       # oxlint
npm run typecheck  # tsc --noEmit
```

> Note: the dev server is pinned to `127.0.0.1:3000` in `vite.config.ts`
> (port 5173 is commonly held by PostgreSQL on Windows).

## Features

- **Landing page** — animated hero ("Explore Nigeria's Living Mosaic"), stat cards,
  culture preview chips, marquee of cultural keywords, CTA band.
- **Tribes directory** (`/cultures`) — 17 cultures (Igbo, Yoruba, Hausa-Fulani, Ijaw, Tiv,
  Efik-Ibibio, Urhobo, Edo/Bini, Fulani, Kanuri, Idoma, Annang, Igala, Ebira, Nupe, Jukun,
  Itsekiri) with **live search**, diacritic-insensitive matching, alias support
  ("Bini" → Edo, "Ibibio" → Efik-Ibibio), **regional zone filters**, and a friendly
  **empty state** with fuzzy suggestions.
- **Culture deep-dives** (`/cultures/:id`) — per-culture hero imagery, quick facts,
  accessible tabs (Traditions & Festivals / Attire & Textiles / Music, Instruments & Arts),
  **Major Figures** with real portraits, and **Prominent Families** (royal houses, dynasties,
  legacy families).
- **The Nigerian Story** (`/story`) — 13-era history timeline (Nok → today), the five
  founding fathers, and a **tab switcher for both national anthems** ("Nigeria, We Hail Thee",
  reinstated 2024, and "Arise, O Compatriots", 1978–2024) with full lyrics.
- **Design system** — plain CSS with custom tokens (terracotta, royal gold, jade, indigo,
  amber), full **light/dark themes**, six traditional textile patterns (Aso Oke, Isi Agu,
  northern geometry, waves, Anger stripes, checker), reduced-motion support, and the
  `480px` / `1140px` responsive breakpoints.
- **Accessibility** — skip-to-content link, ARIA tabs with keyboard navigation,
  `aria-current`/`aria-pressed`/`aria-live`, focus management on route change, per-route
  document titles, semantic landmarks, error boundary.

## Stack

- React 19 + TypeScript (strict) + Vite
- React Router 7
- Hand-written CSS (no CSS framework) with CSS custom-property theming
- oxlint + `tsc --noEmit` for quality gates
- Imagery: Wikimedia Commons (hotlinked, free licences) with graceful pattern-monogram
  fallbacks

## Architecture

```
src/
├── main.tsx              # entry: StrictMode + BrowserRouter
├── App.tsx               # shell: skip link, RouteSync, Navbar, main, Footer
├── routes.ts             # SSoT for every route path
├── index.css             # full design system (tokens, components, patterns)
├── utils/
│   ├── page-title.ts     # per-route document titles
│   └── text.ts           # initials() helper
├── components/           # reusable UI (all presentation, no routing logic)
│   ├── Navbar / Footer / RouteSync / ErrorBoundary
│   ├── CultureCard / CultureChip / FigureCard / FamilyCard
│   ├── StatCard / TopicList / Tabs / SectionHeading
│   ├── Reveal / ImageWithFallback / ThemeToggle
├── data/
│   ├── types.ts          # all domain interfaces
│   ├── coreCultures.ts   # the original six cultures
│   ├── moreCultures.ts   # the expanded eleven
│   ├── story.ts          # history eras, founding fathers, anthems
│   └── cultures.ts       # aggregator + stats + zones + marquee words
└── pages/
    ├── HomePage / CulturesPage / CultureDetailPage
    ├── StoryPage / NotFoundPage
```

### Adding a new tribe (open for extension, closed for modification)
1. Append one object to `src/data/moreCultures.ts` following the `Culture` interface —
   that's it. The directory grid, live search, zone chips, footer links, and the deep-dive
   page (tabs, figures, families) all pick it up automatically.
2. If the new tribe belongs to a brand-new region, add its zone name to the `zones` array
   in `src/data/cultures.ts` (the filter chips regenerate themselves).

### Imagery & manual overrides

Every figure and family card resolves its media in two steps, so nothing ever renders broken:

1. **Public URL** — `image: 'https://…'` on the entry object (Wikimedia Commons/Wikipedia
   sources, curated in `src/data/`).
2. **Text-only editorial card** — entries with no image (and any image that fails at
   runtime) render without a media box entirely: a clean, bordered text block with the
   name, era flag, and description. No silhouettes, no initials.

To use your own photo for any figure or family: drop the file into `public/images/figures/`
and set the entry's `image` to a site-relative path, e.g. `image: '/images/figures/my-photo.jpg'`.
Any path starting with `/` is served as-is by Vite — no code changes needed.

## Engineering Notes

- See **[docs/app-explained.md](docs/app-explained.md)** for a line-by-line,
  ELI7-style walkthrough of `App.tsx`.
- See **[docs/engineering-audit.md](docs/engineering-audit.md)** for the applied
  software-engineering principles, the flaw report, the accessibility audit, and the
  SOLID/laws-of-software-engineering adherence matrix.

## Credits

Photography via Wikimedia Commons, shared under free licences. Built as a celebration of
Nigeria's heritage — a living mosaic of 250+ peoples.
