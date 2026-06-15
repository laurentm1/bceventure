# bce.ventures

Personal site for Laurent Michelizza. Next.js 15 (App Router) + React 19, deployed on Vercel at https://bce.ventures.

## Workflow

This repo uses a **review-first** workflow. Two modes:

### 1. Review mode (default)
When asked to update copy, layout, or content:
1. Make the edit in the relevant `components/*.tsx` file.
2. Start the dev server (`npm run dev`) if not already running.
3. Show the change in a browser preview (screenshot + relevant snippet).
4. **Wait for explicit approval.** Do not commit and do not push.

### 2. Ship mode
**Only** when the user types `push` (or "ship it", "deploy"):
1. `git add` the changed files.
2. `git commit` with a short, factual message in the existing style — see recent commits with `git log --oneline -10`. No co-author trailer needed; the user keeps commits clean.
3. `git push origin master`.

Vercel auto-deploys from `master`. There is no separate deploy step.

**Never push to master without an explicit `push` from the user.** A user approving the *edit* is not approval to deploy.

## Project layout

Page composition lives in [app/page.tsx](app/page.tsx). Sections render in this order, each a single component:

| Section     | File                                          | What's in it                                           |
| ----------- | --------------------------------------------- | ------------------------------------------------------ |
| Nav         | [components/nav.tsx](components/nav.tsx)      | Top navigation                                         |
| Hero        | [components/hero.tsx](components/hero.tsx)    | Landing headline                                       |
| Marquee     | [components/marquee.tsx](components/marquee.tsx) | Scrolling band                                       |
| Manifesto   | [components/manifesto.tsx](components/manifesto.tsx) | Positioning paragraph                            |
| About       | [components/about.tsx](components/about.tsx)  | Bio + meta lines                                       |
| Pillars     | [components/pillars.tsx](components/pillars.tsx) | Service pillars                                     |
| Engagements | [components/engagements.tsx](components/engagements.tsx) | Client engagement cards (Google, PCS Wireless, etc.) |
| Insights    | [components/insights.tsx](components/insights.tsx) | Writing / thinking                                  |
| Contact     | [components/contact.tsx](components/contact.tsx) | Contact block + form                                |
| Footer      | [components/footer.tsx](components/footer.tsx) | Footer                                                 |

Global styling is in [app/globals.css](app/globals.css). Prefer editing component-level JSX/Tailwind classes over global CSS unless the change is genuinely site-wide.

## Commands

- `npm run dev` — local dev server (hot reload)
- `npm run build` — production build (run before push if you touched anything non-trivial)
- `npm run lint` — Next.js lint

## Conventions

- Content lives in JSX strings inside `components/*.tsx`. There is no CMS.
- The repo is `.tsx` only. A legacy pre-Next.js prototype (`index.html`, `styles.css`, `.jsx` components) was removed in commit de9da3b — the active components are the `.tsx` versions imported in `app/page.tsx`.
- Keep commits scoped to one logical change. Recent style: short imperative title, no body needed for copy tweaks (e.g. "Remove Chief Transformation Officer from PCS Wireless card title").
