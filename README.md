# MeetSaver — React + Vite + Tailwind v4

Pixel-perfect React port of the MeetSaver landing page.

## Stack
- **React 18** — component architecture
- **Vite 6** — lightning-fast dev server & build
- **Tailwind CSS v4** — utility classes via `@tailwindcss/vite` plugin
- **Custom CSS** — design tokens, animations, and complex UI in `src/index.css`

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Production build
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
meetsaver/
├── index.html
├── vite.config.js          # Vite + React + Tailwind plugin
├── package.json
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component
    ├── index.css           # All styles: Tailwind + design system + animations
    ├── assets.js           # Base64 image constants (logo, icons)
    ├── hooks/
    │   └── useScrollAnimation.js   # useScrollAnimation + useCountUp hooks
    └── components/
        ├── Navbar.jsx      # Floating pill dock nav
        ├── Hero.jsx        # Hero with popup animation + floating messages
        ├── HowItWorks.jsx  # 3-step cards
        ├── Features.jsx    # Feature grid
        ├── Privacy.jsx     # Privacy pills + animated stat counters
        ├── FAQ.jsx         # Accordion FAQ
        ├── CTA.jsx         # Final call to action
        └── Footer.jsx
```

## Key Design Decisions

- **Tailwind v4** is used via `@tailwindcss/vite` — no `tailwind.config.js` needed.
  Design tokens (colors, fonts) are defined inside `@theme {}` in `index.css`.
- **Scroll animations** use `IntersectionObserver` via the `useScrollAnimation` hook.
  Elements start hidden (`.sa-up`, `.sa-flip`, etc.) and get `.sa-visible` on entry.
- **Counter animation** (`useCountUp`) counts from 0 to target when the stat box scrolls in.
- **Popup loop** in `Hero.jsx` uses `setTimeout` chains that auto-replay every 13 seconds,
  cleaned up on unmount via `useEffect` return.
- **Floating messages** are imperatively injected into a `ref` container to avoid React
  re-render overhead on rapid spawning.
