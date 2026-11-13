# ARTIC Gallery

A monochrome gallery for exploring the Art Institute of Chicago collection. Browse a staggered Bento grid, search artworks, open details, and save favorites for the current browser session. The interface supports English and Russian, plus light and dark themes.

## Run locally

Use Node.js 24 (pinned in `.node-version`):

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. No API key or environment file is required. The app needs internet access to the museum's API and IIIF image service.

## Validate and build

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Structure

- `app/` contains routes and the local artwork/image API proxies.
- `components/gallery/` contains the gallery shell, Bento grid, tiles, feed pages, landing page, detail page, and translations.
- `design-system/` is the portable style layer. Its `tokens.css` defines semantic palettes, type, spacing, and motion; `primitives.module.css` defines small composable layout and control classes. See [design-system/README.md](design-system/README.md) for reuse instructions.
- `hooks/` and `api/` handle paginated artwork requests; `store/` persists favorites and preferences in session storage.

The browser calls `/api/artic/` and `/api/image/`. These server routes send the museum's documented `AIC-User-Agent` header and avoid browser CORS restrictions. The image route permits supported IIIF sizes only. Artwork data comes from the [Art Institute of Chicago API](https://api.artic.edu/docs/).
