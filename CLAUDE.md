# Novara Studios — Claude Code Guidelines

> Derived from Karpathy's observations on LLM coding pitfalls, adapted for Novara's stack and standards.

---

## Stack & Conventions

- **Framework**: Next.js (App Router) + TypeScript (strict mode)
- **Styling**: Tailwind CSS — utility-first, no custom CSS unless unavoidable
- **Component library**: shadcn/ui where applicable; otherwise hand-rolled, minimal components
- **Deployment**: Vercel — every push to `main` is live
- **Repos**: One repo per client, or structured monorepo with `/apps/<client>` layout
- **Fonts**: Google Fonts CDN only; no self-hosted unless client explicitly requests it
- **Images**: Optimised via `next/image`; direct Unsplash URLs only in prototypes, never in production
- **Animation**: CSS transitions and IntersectionObserver for scroll-reveal; no heavy JS animation libraries unless the design demands it
- **Footer**: Every client site must carry `Novara Studios Ltd` footer credit unless the client has paid to remove it

---

## Principle 1 — Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before writing a single line:

- State assumptions explicitly — if the design or requirement is ambiguous, ask rather than guess
- Present multiple interpretations when ambiguity exists — don't pick silently
- Push back if a simpler approach solves it — over-engineering is a client cost
- Stop when confused — name what's unclear and ask for clarification

**For Novara specifically:**
- If a component exists across multiple client sites, flag it before building a one-off version
- If a client brief conflicts with the established design system (typography, spacing, tone), surface it — don't quietly compromise the aesthetic
- If a requested feature would break Vercel's free tier limits (bandwidth, serverless function count), say so before building

---

## Principle 2 — Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked
- No abstractions for single-use components
- No "configurability" or "flexibility" that wasn't requested
- No error handling for impossible scenarios
- If a component can be done in 40 lines, do not write 200

**For Novara specifically:**
- Client sites are marketing/portfolio sites — not SaaS apps. Resist the urge to build like one.
- Don't add `useState` where static HTML works
- Don't create a component for something used once — inline it
- Don't add CMS scaffolding speculatively; wait until the client requests content editing
- Automation upsells (n8n, OpenClaw) are separate concerns — never mix automation logic into the front-end codebase

**The test:** Would a senior engineer say this is overcomplicated? If yes, simplify.

---

## Principle 3 — Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing client code:

- Don't "improve" adjacent components, comments, or formatting
- Don't refactor things that aren't broken
- Match the existing file and naming conventions, even if you'd do it differently
- If you notice unrelated dead code, mention it — don't delete it without confirmation

When your changes create orphans:

- Remove imports / variables / functions that **your changes** made unused
- Do not remove pre-existing dead code unless explicitly instructed

**For Novara specifically:**
- Client repos are live production sites — a stray change can break a live page
- Never touch `_layout.tsx`, global CSS, or `next.config.js` unless the task explicitly requires it
- Always scope changes to the smallest possible file set
- Log what you changed and why in the PR description or commit message

**The test:** Every changed line should trace directly to the stated task.

---

## Principle 4 — Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform imperative tasks into verifiable goals:

| Instead of… | Transform to… |
|---|---|
| "Add a contact form" | "Form submits to `/api/contact`, returns 200, displays success state — verify in browser" |
| "Fix the mobile layout" | "Nav is readable and tappable at 375px — screenshot confirms no overflow" |
| "Improve performance" | "Lighthouse score ≥ 90 on mobile — run audit and paste score" |
| "Add animation" | "Hero text fades in on load with 0.4s ease — works on first visit without flicker" |

For multi-step tasks, state a brief plan before starting:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

**For Novara specifically:**
- Every new page must pass: no console errors, no broken links, Lighthouse ≥ 85 mobile
- Scroll-reveal animations must fire correctly on first load — test with cache cleared
- Footer credit must appear on every page — treat this as a test assertion
- Before handing off to Vercel deploy, confirm: `next build` completes without error locally

---

## What Good Output Looks Like

- Diffs contain only the requested changes — no drive-by refactoring
- Code is simple the first time — no rewrites due to overengineering
- Clarifying questions come **before** implementation — not after mistakes
- PRs are clean and minimal — no "while I was in here…" edits

---

## Novara Aesthetic Standards (non-negotiable)

These apply to every client site regardless of brief:

- **Typography**: Chosen intentionally per brand — never default to Inter, Roboto, or system fonts
- **Spacing**: Generous negative space; let elements breathe
- **Motion**: Subtle, purposeful — scroll-reveal and hover states only; nothing distracting
- **Mobile**: Every component is designed mobile-first; desktop is the enhancement
- **Performance**: Images via `next/image`, lazy-loaded; no blocking scripts
- **Tone**: Quiet luxury — premium, minimal, confident; never loud or cluttered

---

*These guidelines are a baseline. Append client-specific rules below this line.*
