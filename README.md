# ARTIC Gallery

An art gallery built with Next.js and the Art Institute of Chicago public API. Browse artworks, search the collection, inspect details, and save favorites for the current browser session. The interface supports English and Russian and has light and dark themes.

## Getting started

Use a supported Node.js version for the installed Next.js release. Install dependencies and start the development server:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Artwork data and images require an internet connection to the Art Institute of Chicago API and image service. No API key or environment file is required.

## Checks and production build

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Project layout

`app/` contains routes, global CSS, and design tokens. `screens/` holds route screens; `components/` holds feeds, cards, and controls. Styles scoped to components live beside them as `*.module.css`. `api/` and `hooks/` fetch artworks, while `store/` stores favorites and preferences in session storage. Shared translations and types live in `settings/` and `types/`.

Design tokens in `app/tokens.css` define colors, spacing, typography, motion, and sizing. Theme colors are selected with `data-theme` on each screen.

Artwork data is provided by the [Art Institute of Chicago API](https://api.artic.edu/docs/).
