# App.tsx — Explained Like You're Seven

Imagine our app is a **big, beautiful museum called the Nigerian Cultural Atlas**.
`App.tsx` is the **museum's floor plan**: it doesn't paint the pictures, it just decides
**which rooms exist, what goes in each room, and in what order you walk through them.**

Here is the whole file, line by line, with a story for each line.

---

## The Shopping List (lines 1–10)

```tsx
import { Route, Routes, useLocation } from 'react-router-dom'
import { routes } from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RouteSync from './components/RouteSync'
import ErrorBoundary from './components/ErrorBoundary'
import HomePage from './pages/HomePage'
import CulturesPage from './pages/CulturesPage'
import CultureDetailPage from './pages/CultureDetailPage'
import StoryPage from './pages/StoryPage'
import NotFoundPage from './pages/NotFoundPage'
```

**The toy box.** Before you build anything, you open your toy box and take out the toys
you need. Each line takes one toy from its shelf:

- `Route`, `Routes`, `useLocation` are from the **react-router-dom** toolbox — our museum's
  **signposts, map-book and GPS**.
- `routes` is our own notebook (`src/routes.ts`) where we wrote down every street name
  **exactly once** — that way nobody spells "museum" differently in different rooms.
- `Navbar` is the **museum roof sign** you see from every room.
- `Footer` is the **museum foundation** at the bottom of every room.
- `RouteSync` is the **invisible janitor** (we'll meet him soon).
- `ErrorBoundary` is the **safety net** under the trapeze.
- The five `*Page` files are the **actual rooms**: the entrance hall (Home), the big
  hall of tribes (Cultures), one tribe's private gallery (CultureDetail), the history
  theatre (Story), and the "you got lost" broom closet (NotFound).

## The Museum Opens (lines 12–13)

```tsx
export default function App() {
  const location = useLocation()
```

**"Welcome to the museum!"** `App` is the museum itself. `useLocation` is a tiny **GPS**
that whispers to the museum: "the visitor is standing in front of the `/story` room right
now." Whenever the visitor moves, the GPS whispers again and the museum rearranges the
rooms accordingly.

## The Building Frame (line 15)

```tsx
<div className="app-shell">
```

**The outer walls.** One big invisible box that makes sure the page always fills the whole
window from floor to ceiling, with the roof sign on top and the foundation at the bottom —
even on short pages, the museum never looks half-built.

## The Secret Door (lines 16–18)

```tsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

**The wheelchair ramp / secret slide.** People who use screen readers or keyboards don't
want to hear the whole menu on every visit. This tiny door is **invisible until you Tab to
it**, and then it lets them **jump straight past the menu into the art**. (It's like the
slide that skips the stairs — only there when you need it.)

## The Invisible Janitor (line 19)

```tsx
<RouteSync />
```

**The janitor who works between rooms.** He does three quiet jobs every time the GPS
whispers a new room name:

1. **Scrolls the page back to the top** (so you don't start a new room halfway down).
2. **Changes the browser tab's title** ("Yoruba — Nigerian Cultural Atlas").
3. **Moves the invisible focus cursor** into the new room, so screen readers start reading
   the art, not the old room's sign.

He's invisible — he never paints anything himself.

## The Roof Sign (line 20)

```tsx
<Navbar />
```

**The museum's name plate** — logo, links to the rooms, and the light/dark switch.

## The Gallery Hall (lines 21–33)

```tsx
<div className="app-main" id="main-content" tabIndex={-1}>
  <ErrorBoundary>
    <Routes location={location} key={location.pathname}>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.tribes} element={<CulturesPage />} />
      <Route path={`${routes.tribes}/:cultureId`} element={<CultureDetailPage />} />
      <Route path={routes.story} element={<StoryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </ErrorBoundary>
</div>
```

- `id="main-content"` is the **address of the gallery hall** — it's what the secret door
  (`#main-content`) jumps to, and what the janitor focuses.
- `tabIndex={-1}` means: "a mouse-tabber never gets stuck here, but the janitor can still
  point the focus here on purpose."
- `ErrorBoundary` is the **safety net under the trapeze**: if one room's paint falls down,
  the net catches it and shows "A page of the atlas tore" — the roof sign and foundation
  keep standing, and the visitor can still walk to another room.
- `Routes` is the **map book**. Each `Route` is a **signpost**: "if the GPS says `/`,
  open the Home room; if it says `/cultures`, open the Tribes room."
- `:cultureId` is a **wildcard name tag**: `/cultures/yoruba`, `/cultures/igbo`… all lead
  to the *same* room design, just filled with a different tribe's treasure.
- `key={location.pathname}` is the janitor's **"tear down the stage" trick**: when you move
  rooms, the old room is taken apart and the new one is rebuilt, so its **entrance animation
  plays fresh** every time (that's what makes the cards rise up and say hello).
- The last signpost `path="*"` is the **catch-all**: any wrong address lands in the broom
  closet with a friendly "Lost in the savannah".

## The Foundation (line 35)

```tsx
<Footer />
```

**The museum's basement** — palette swatches, quick links, and the credit line.

---

## The Big Ideas (Why It's Built This Way)

| Idea | In the museum story |
| --- | --- |
| **Composition** | The museum is built by *clicking rooms together*, not by welding one giant machine. |
| **Single Responsibility** | The janitor janits. The painter paints. `App.tsx` only arranges furniture. |
| **Single Source of Truth** | Street names live in ONE notebook (`routes.ts`). Change it there, and every signpost updates. |
| **Declarative style** | `App.tsx` says *what* the museum should look like. React figures out *how* to move the walls. |
| **Tolerance (Postel's Law)** | A broken room never breaks the whole museum, thanks to the safety net. |
| **Purity** | `App` itself never *does* anything behind your back — all the doing is the janitor's job. |
