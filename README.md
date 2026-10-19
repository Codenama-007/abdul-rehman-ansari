# Abdul Rehman Ansari — Portfolio

A single-page portfolio built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.
It presents an introduction, skill set, four full-stack clone projects, and contact links.

> The repository directory is named `coffee-website`, but the project is the portfolio
> site. There is no coffee content.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.4.2 (App Router, Turbopack) |
| UI | React 19.3, Tailwind CSS v4 (`@tailwindcss/turbopack`) |
| Language | TypeScript 5 (strict) |
| Package manager | pnpm 12.4.2 |
| Linting | ESLint 9 flat config, `eslint-config-next` |

No test framework or CI is configured. `pnpm build` is the verification step.

## Getting started

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
pnpm lint     # ESLint
pnpm build    # production build (also type-checks)
pnpm start    # serve the production build
```

Requires Node.js 20.9+ (developed on Node 22) and pnpm 12.

## Project structure

```
app/
  layout.tsx              root layout: fonts, metadata, nav, footer, skip link
  page.tsx                composes the page sections
  globals.css             Tailwind v4 import, theme tokens, base styles
  content.ts              all copy, skills, projects, and social links
  components/
    site-nav.tsx          sticky header + mobile menu (only client component)
    hero.tsx              headline, intro, stack summary
    about.tsx             bio and working principles
    skills.tsx            grouped skill chips
    projects.tsx          project cards
    contact.tsx           contact call to action and social links
    site-footer.tsx       copyright and back-to-top
    section-heading.tsx   shared eyebrow/title/description block
```

## Editing content

Everything user-facing lives in `app/content.ts` — profile, intro, skill groups,
projects, and social links. Components read from it, so content changes do not require
touching JSX.

### Adding project links

Each project has `href` (live demo) and `repo` (source). They are `null` by default and
the card renders a "links coming soon" note instead of a dead link. Fill them in:

```ts
{
  name: "ChatGPT Clone",
  summary: "...",
  stack: ["Next.js", "FastAPI", "Python"],
  href: "https://your-demo.example",
  repo: "https://github.com/you/chatgpt-clone",
}
```

### Adding contact links

`socials` entries with an empty `href` are filtered out. Add the real URLs:

```ts
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/your-handle", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: "linkedin" },
  { label: "Email", href: "mailto:you@example.com", icon: "mail" },
];
```

Until at least one is filled, the contact section shows a placeholder pointing here.

## Responsive design

The layout is mobile-first and checked at 360, 390, 768, 1024, and 1440 px.

- Fluid headline sizing with `clamp()`; no fixed widths that can overflow a small screen.
- Navigation collapses to a hamburger menu below the `md` breakpoint.
- Project grid: 1 column on mobile, 2 from `md`, with cards that stretch to equal height.
- Touch targets are at least 44 px; focus styles are visible; motion respects
  `prefers-reduced-motion`.

## Styling notes

- Tailwind v4 is CSS-first. Design tokens (`--color-surface`, `--color-accent`,
  `--color-line`, `--color-muted`, …) are declared in `app/globals.css` under
  `@theme inline`. There is no `tailwind.config.js`.
- The site is dark-only by design.
- The `@/*` path alias points at the repository root (`@/app/content`).

## Next.js 16 configuration

`next.config.ts` enables `cacheComponents` and `partialPrefetching`, which change
rendering rules: route-segment `dynamic` / `revalidate` / `fetchCache` exports are
removed, and runtime values such as `new Date()` cannot be read during prerender. The
footer resolves the copyright year at module scope for this reason. See
`node_modules/next/dist/docs/` for the version-matched documentation.

## Deployment

The app is fully static at build time and deploys to Vercel with no extra configuration:

```bash
pnpm build
```

Any Node.js host works as well, using `pnpm build` followed by `pnpm start`.
