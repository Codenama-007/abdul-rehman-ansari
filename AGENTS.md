<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — Abdul Rehman Ansari

Single-page App Router portfolio. The directory is named `coffee-website`, but this
repo is the portfolio: there is no coffee content. Don't rename or repurpose it
without asking.

## Commands

pnpm only — `packageManager` pins pnpm 12.4.2, and `pnpm-lock.yaml` is the lockfile.

- `pnpm dev` — dev server on :3000. If one is already running, check `.next/dev/lock`.
- `pnpm lint` — ESLint flat config (`eslint.config.mjs`).
- `pnpm build` — the only end-to-end check. There is no test suite and no `typecheck`
  script; don't add a test framework unless asked.

## Next.js 16 specifics

- `next.config.ts` enables `cacheComponents` and `partialPrefetching`. The old
  `dynamic`, `revalidate`, `dynamicParams`, and `fetchCache` route-segment exports are
  removed in this mode — use `"use cache"`, `cacheLife`, `cacheTag`, and wrap uncached
  or request-bound data in `<Suspense>`.
- `experimental.agentFeedback` is on, so `next dev` manages the marked block at the top
  of this file. Never edit inside those markers.
- `app/layout.tsx` uses the generated `LayoutProps<"/">` type. Keep it; don't hand-write
  layout props.
- Remote images require `images.remotePatterns` in `next.config.ts`. Local assets go in
  `public/`.

## Styling

- Tailwind v4, CSS-first. Theme tokens live in `app/globals.css` under `@theme inline`.
  There is no `tailwind.config.js` and none should be created.
- Custom color utilities used throughout (`bg-surface`, `text-muted`, `border-line`,
  `text-accent`, etc.) come from those `@theme inline` tokens — add new tokens there,
  not as arbitrary values.
- The site is dark-only by design. Don't reintroduce `prefers-color-scheme` overrides.
- `@/*` maps to the repo root, so imports look like `@/app/content`.

## Content

All copy lives in `app/content.ts`; components read from it. Edit content there rather
than hardcoding strings in JSX.

- Owner: Abdul Rehman Ansari — Next.js, React, HTML, CSS, JavaScript, Node.js, MongoDB,
  FastAPI, Python.
- Projects: ChatGPT clone (Next.js + FastAPI), YouTube / Instagram / Twitter clones
  (React or Next.js + Node.js + MongoDB). These stacks are the owner's stated ones, not
  verified from source — ask before asserting anything more specific.
- Never invent metrics, employers, testimonials, screenshots, or URLs. `socials` and
  project `href`/`repo` are intentionally empty and render as placeholders; only add
  real links supplied by the owner.

## Responsive conventions

Mobile-first; the design is verified at 360, 390, 768, 1024, and 1440 px.

- Container: `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`.
- Section rhythm: `py-16 sm:py-20 lg:py-24`, plus `scroll-mt-20` on anchored sections
  to clear the sticky 16-unit header.
- Interactive elements need a 44 px minimum touch target (`min-h-11`/`min-h-12`).
- Prefer fluid type (`clamp()`, `text-balance`) over adding breakpoints. Avoid fixed
  pixel widths that can overflow a 360 px viewport.
- `SiteNav` is the only client component (`"use client"` + `useState`); keep the rest as
  server components.
