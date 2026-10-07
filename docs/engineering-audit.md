# Engineering Audit — Nigerian Cultural Atlas

Audit date: 7 October 2026 · Scope: `App.tsx`, its collaborators, and the whole workspace.

---

## 1. Software Engineering Principles Applied

### In `App.tsx` specifically

| Principle | Where & how |
| --- | --- |
| **Separation of Concerns / SRP** | `App.tsx` only *composes* the shell. Scrolling, page titles and focus live in `RouteSync.tsx`; failure recovery lives in `ErrorBoundary.tsx`; routing table lives in `routes.ts`. One file, one job. |
| **Modularity / Composition over inheritance** | The UI is assembled from small function components (`Navbar`, `Footer`, pages). No inheritance, no shared mutable config objects. |
| **Declarative UI** | `App` declares *what* the tree should be (`<Route path=… element=…/>`). React handles the imperative *how*. |
| **SSoT (Single Source of Truth)** | Every route path is defined once in `src/routes.ts` (`routes.home`, `routes.tribes`, `routes.tribe(id)`, `routes.story`). Navbar, Footer, cards, chips, pages and `App` all import it — renaming a path is now a one-line change. |
| **OCP (Open/Closed Principle)** | Adding a new page = 1 import + 1 `<Route>` line; nothing else changes. Adding a new culture = 1 data object; every card/grid/detail view is data-driven and never edited. Zone filters read `zones` from the data layer rather than a hard-coded array. |
| **Purity** | `App` is a pure function of `location`: same route → same rendered tree. It holds no state and performs no side effects. All side effects are isolated in `RouteSync` and `ErrorBoundary`. |
| **DRY** | Tab behaviour (keyboard navigation, ARIA wiring, active styling) is implemented once in `Tabs.tsx` and reused by culture topics *and* the anthem switcher (the previous duplicated `AnthemSection` was deleted). |
| **Postel's Law (robustness)** | The app is liberal in what it accepts: unknown `/cultures/:id` renders a friendly "not found" panel (not a crash); broken image URLs fall back to pattern monograms; `ErrorBoundary` contains any render failure to the content area. |
| **Gall's Law** | The shell evolved from a simple working structure (Header → Routes → Footer) and grew one well-understood layer at a time. |
| **Kernighan's Law** | Plain, boring, readable code: small files, obvious names, no clever tricks worth debugging twice. |
| **Law of Least Astonishment** | Route names, page titles and navigation order behave exactly as their labels suggest. |
| **Boy Scout Rule** | This audit left the code better than it found it (see §3). |

### State-management purity map

| State | Owner | Purity |
| --- | --- | --- |
| Route / location | React Router | External, read-only |
| Active tab | `Tabs` (local `useState`) | Pure updater transitions |
| Search query / zone filter | `CulturesPage` (local `useState` + `useMemo`) | Pure; derived `filtered`/`suggestions` are memoised functions of state |
| Theme | `ThemeToggle` (local state + `localStorage`/`<html>` class) | Only intentional impurity in the app, isolated to one component |
| Scroll reveal / image fallback | `Reveal` / `ImageWithFallback` (local state) | Pure, effect-isolated |
| Document side effects | `RouteSync` | Single component owns all of them |

No global mutable state, no context singletons, no prop-drilling chains.

---

## 2. Flaw Report (found → fixed)

| # | Severity | Flaw found | Fix applied |
| --- | --- | --- | --- |
| F1 | Medium | `ScrollToTop` was defined inline in `App.tsx` — a side-effecting component mixed into a pure layout file (SRP violation) | Extracted to `src/components/RouteSync.tsx`, which now owns all route side effects (scroll, title, focus) |
| F2 | High | Route paths were string literals duplicated across 10+ files (`'/cultures'`, `` `/cultures/${id}` ``, `'/story'`) — an SSoT violation and typo magnet | Created `src/routes.ts`; updated App, Navbar, Footer, HomePage, StoryPage, CultureDetailPage, NotFoundPage, CultureCard, CultureChip |
| F3 | Medium | Browser tab title never changed per route (screen readers announce nothing; history/bookmarks are meaningless) | `RouteSync` + `src/utils/page-title.ts` set per-route titles, including the active tribe's name |
| F4 | Medium | No focus management on navigation — screen readers restarted from the old scroll position | `RouteSync` focuses `#main-content` after every route change (skipped on first paint) |
| F5 | Medium | No skip-to-content link for keyboard users | Added visually-hidden-until-focused `.skip-link` as the first focusable element |
| F6 | Medium | No error boundary — any render error blanked the whole app | Added content-scoped `ErrorBoundary` with a friendly recovery panel |
| F7 | Low | `zones` were hard-coded in `CulturesPage` (adding a culture with a new zone required a code edit) | `zones` now exported from the data layer (`src/data/cultures.ts`) — new regions appear automatically |
| F8 | Low | `AnthemSection` duplicated the tab logic of `Tabs` (DRY violation, two places to fix keyboard a11y) | Deleted `AnthemSection.tsx`; `Tabs` generalized (`label: ReactNode`, configurable `aria-label`); StoryPage now builds anthem tabs declaratively |
| F9 | Medium | Tabs were mouse-only: no arrow-key navigation, no roving tabindex | `Tabs` now implements the WAI-ARIA tabs pattern: ArrowLeft/Right, Home/End, `tabIndex` roving |
| F10 | Low | Nav links missing `aria-current`; `<nav>` elements missing labels; breadcrumb last item unmarked | Added `aria-current="page"` to active NavLink and breadcrumb; `aria-label="Main navigation"` / `"Footer"` / `"Breadcrumb"` |
| F11 | Low | Filter chips and result counts were invisible to assistive tech | Added `aria-pressed` to zone chips and `aria-live="polite"` to the results counter |
| F12 | Low | `README.md` still described the Vite starter template | Rewritten (see `README.md`) |

### Accepted, documented trade-offs

- **`key={location.pathname}` on `<Routes>`** forces a subtree remount per navigation. Deliberate: it replays the page's entrance animations and guarantees clean per-page state. Cost: loses any would-be shared subtree state — the app has none.
- **`RouteSync` returns `null`** while owning effects. Deliberate React idiom for "invisible controller"; it's isolated, tested-by-reading, and documented in `docs/app-explained.md`.
- **No automated tests yet** (Testing Pyramid law). The data layer is pure and is the first candidate for unit tests; noted as future work.

---

## 3. Accessibility Audit (interactive components)

| Component | Semantic check | Keyboard check | Screen-reader check | Status |
| --- | --- | --- | --- | --- |
| Skip link | `<a>` with href | First tab stop, focus-revealed | Announced as link | ✅ Fixed this audit |
| Navbar | `<header>` + `<nav aria-label>` | Native links/buttons | `aria-current="page"` on active link; logo labelled | ✅ Fixed |
| Theme toggle | `<button type="button">` | Native | `aria-label` + `title` | ✅ Already good |
| Culture card / chip | Whole-card `<a>` | Native link | Single tab stop; image `alt` text | ✅ Already good |
| Detail tabs (`Tabs`) | `role="tablist/tab/tabpanel"` | **Arrow keys, Home/End, roving tabindex** | `aria-selected`, `aria-controls`, `aria-labelledby` | ✅ Fixed |
| Anthem tabs | (via shared `Tabs`) | Inherits keyboard support | Badges + labels read naturally | ✅ Fixed (dedup) |
| Search input | `<input type="search" aria-label>` | Native + clear button | `aria-live="polite"` result count | ✅ Fixed |
| Zone filter chips | `<button>` + `role="group"` | Native | `aria-pressed` toggle state | ✅ Fixed |
| Figure/Family cards | `<article>` + headings | Non-interactive | Images have `alt` | ✅ Already good |
| Breadcrumb | `<nav aria-label="Breadcrumb">` | Native links | `aria-current="page"` on leaf | ✅ Fixed |
| Marquee | `aria-hidden="true"` (decorative) | Not focusable | Skipped by readers | ✅ Already good |
| Error boundary panel | `role="alert"` | Focusable buttons | Announced on failure | ✅ Added |
| Route changes | — | Focus moves to `#main-content` | Document title updates | ✅ Fixed |

---

## 4. Laws & SOLID Adherence Matrix

- **S — SRP** ✅ (App composes; RouteSync syncs; Tabs tabs; data file data.)
- **O — OCP** ✅ (Pages/cultures/zones extend via data, never via editing consumers.)
- **L — LSP** ✅ (All page components satisfy the same `element` contract; `Tabs` accepts any `ReactNode` content.)
- **I — ISP** ✅ (Small prop interfaces: `{ culture }`, `{ tabs, className?, label? }` — no fat config objects.)
- **D — DIP** ✅ (Components depend on interfaces and data shapes, not concrete implementations.)
- **DRY / SSoT** ✅ (One route table; one tab engine; one text helper `initials`; one page-title function.)
- **KISS / YAGNI** ✅ (No state library, no effects library, no CSS framework — plain React + plain CSS.)
- **Postel's / Gall's / Kernighan's / Boy Scout** ✅ (see §1.)

---

## 5. Bloat Elimination Report

| Item | Action |
| --- | --- |
| `src/components/AnthemSection.tsx` (56 lines of duplicated tab logic) | **Deleted** — replaced by the shared `Tabs` component |
| `.anthem-grid`, `.anthem-panel` CSS (stale after tab refactor) | **Removed** from `index.css` |
| Hard-coded `zones` array in `CulturesPage` | **Removed** — now imported from the data layer |
| Stringly-typed route paths in 10 files | **Removed** — single `routes.ts` |
| Unused CSS classes | **Audited**: 207 class selectors, all referenced by components (automated checker, zero hits) |
| Unused JS helpers | **Audited**: `initials`, `normalize`, `editDistance`, `similarityScore`, `pageTitleFor` — all called; `tsc --noEmit` + `oxlint` report zero unused symbols |
| Dependency tree | **Audited**: 9 packages (`react`, `react-dom`, `react-router-dom`, `vite`, `typescript`, `oxlint`, `@vitejs/plugin-react`, `@types/react`, `@types/react-dom`) — all used, no extraneous, no stale Tailwind/PostCSS remnants |
| Starter-template files | Previously removed (`App.css`, starter SVG assets, `icons.svg`) — confirmed still absent |
| `README.md` | Was Vite template boilerplate — **rewritten** for this project |
