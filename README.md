# Lam Nguyen — Portfolio

A responsive, accessible portfolio in the Quiet Botanical visual direction. The site is a small Vite + TypeScript build with semantic HTML, typed content, focused DOM components, and no runtime dependencies.

Live site: https://lnguyen1996.github.io/lam-nguyen-portfolio/

## Run locally

```sh
npm install
npm run dev
```

## Verify

```sh
npm test
npm run test:e2e
npm run build
```

The browser suite checks responsive layouts from 320 to 1440 pixels, keyboard access, reduced motion, no-JavaScript content, and WCAG A/AA issues with axe.

## Update content

Portfolio copy, project records, and verified contact URLs live in `src/content/portfolio.ts`.

To add an approved portrait:

1. Place the optimized image at `public/portrait.webp`.
2. Set `portraitSrc` to `/portrait.webp` in `src/content/portfolio.ts`.
3. Update `portraitAlt` if the photograph communicates context beyond Lam's identity.

Until a portrait is supplied, the hero intentionally uses the abstract botanical fallback.

## Production

`npm run build` creates the deployable static site in `dist/`. Pushes to `main` automatically publish that build through GitHub Pages.
