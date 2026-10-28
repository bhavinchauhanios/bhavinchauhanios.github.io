# Bhavin Chauhan — Portfolio

A single-page, award-style developer portfolio built with **Vite + React + TypeScript + Tailwind CSS +
Framer Motion + Lenis**. Replaces the previous static jQuery/Bootstrap site. Deployed as a GitHub Pages
**user site** (served from the domain root, `bhavinchauhanios.github.io`).

## Stack

- **Vite** — build tool / dev server
- **React 19 + TypeScript** — UI and type safety
- **Tailwind CSS** — utility-first styling, design tokens mapped from CSS variables
- **Framer Motion** — scroll reveals, layout animation, gestures
- **Lenis** — smooth scrolling (disabled automatically under `prefers-reduced-motion`)
- **GSAP** — installed for future complex ScrollTrigger work; not required by current sections
- No client-side router — this is a single scrolling page, sections are anchored by `id`

## Getting started

```bash
cd portfolio
npm install
cp .env.example .env.local   # fill in real values (see below)
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

### Available scripts

| Command           | Purpose                                    |
| ------------------ | ------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                   |
| `npm run build`     | Typecheck (`tsc -b`) + production build     |
| `npm run preview`   | Preview the production build locally        |
| `npm run lint`      | Run `oxlint` over the codebase              |

## Project structure

```
portfolio/
├─ public/
│  ├─ projects/<slug>/        # real app screenshots + logo per project
│  ├─ favicon.svg, favicon-*.png, apple-touch-icon.png, og-image.png
│  ├─ robots.txt, sitemap.xml, site.webmanifest
├─ src/
│  ├─ data/                   # <- EDIT CONTENT HERE (typed, no JSX)
│  │  ├─ profile.ts           # name, bio, links, hero copy, about story, principles
│  │  ├─ projects.ts          # all shipped apps + featured case studies
│  │  ├─ experience.ts        # work history + education + certifications
│  │  ├─ stats.ts             # impact counters
│  │  ├─ skills.ts            # skill clusters (chips, no % bars)
│  │  ├─ testimonials.ts      # client quotes
│  │  ├─ content.ts           # AI Edge cards, blog placeholders, tech marquee
│  │  └─ navigation.ts        # nav/section list used by Navbar + Command Palette
│  ├─ components/
│  │  ├─ layout/              # Navbar, Footer, ScrollProgressBar, CustomCursor, CommandPalette, FloatingBookCallButton
│  │  └─ ui/                  # reusable pieces: cards, modal, tilt, marquee, icons, form, etc.
│  ├─ sections/                # one file per page section, composed in App.tsx
│  ├─ hooks/                   # theme, Lenis, reduced motion, typewriter, count-up, Konami code
│  ├─ lib/analytics.ts          # optional GA4 / Plausible loader, no-ops if env vars unset
│  └─ styles/tokens.css         # design tokens (see Design System below)
```

## Editing content

Everything text/data-related lives in `src/data/*.ts` — **no JSX editing required** for routine updates:

- **Change bio, links, hero copy** → `src/data/profile.ts`
- **Add a new shipped app** → add an entry to the `projects` array in `src/data/projects.ts`:
  ```ts
  {
    slug: "my-app",              // used for internal keys; screenshots don't have to match this if you set full paths
    name: "My App",
    tagline: "One-line description",
    description: "Longer description for the secondary grid card.",
    tags: ["iPhone"],             // any of: iPhone, iPad, Mac, AI, Location, Marketplace
    logo: "/projects/my-app/logo.png",
    screenshots: ["/projects/my-app/1.png", "/projects/my-app/2.png"],
    featured: false,              // true = shows in the big case-study grid with full modal
  }
  ```
  Drop the screenshots/logo into `public/projects/my-app/` first. If an image is missing or fails to
  load, `ImageWithSkeleton` automatically falls back to a gradient placeholder with the app's initials
  — no broken images.
- **Add a featured case study** → set `featured: true` and add a `caseStudy` object (`problem`, `solution`,
  `role`, `stack`, `results`, optional `storeUrl`).
- **Update work history** → `src/data/experience.ts`
- **Update skills** → `src/data/skills.ts` (`usedIn` / `years` power the hover tooltip)
- **Update testimonials** → `src/data/testimonials.ts`

## Connecting the contact form (Formspree / Web3Forms)

The form in `src/components/ui/ContactForm.tsx` POSTs a JSON payload to whatever URL is set in
`VITE_FORM_ENDPOINT`. It does nothing (shows a clear inline warning) until that variable is set —
it will never silently fail.

1. Create a form at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Copy the endpoint URL they give you.
3. Set it locally in `.env.local`:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```
4. For production (GitHub Actions build), add the same value as a repository secret named
   `VITE_FORM_ENDPOINT` (Settings → Secrets and variables → Actions).

The form includes:
- Client-side validation (name, email format, message length)
- A hidden honeypot field (`company`) — bots that fill every field get silently rejected
- Success / error states, including a specific message if the endpoint isn't configured

## Connecting Calendly / Cal.com

Set `VITE_CALENDLY_URL` to your scheduling link (Calendly or Cal.com both work, since it's just a link):

```
VITE_CALENDLY_URL=https://calendly.com/your-handle/intro-call
```

Until set, the Contact section shows a clearly labeled placeholder instead of a broken/fake button.

## Connecting analytics

Analytics are fully optional and off by default (no network calls made unless configured):

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # Google Analytics 4
VITE_PLAUSIBLE_DOMAIN=yourdomain.com  # Plausible
```

Use `trackEvent(name, params)` from `src/lib/analytics.ts` to fire custom events (e.g. wire it into the
CV download link, WhatsApp click, or project-modal open handlers if you want funnel data).

## Deploying to GitHub Pages

This repo is a **user page** repo (`bhavinchauhanios.github.io`), so the site is served from the domain
root and `vite.config.ts` sets `base: "/"`. A GitHub Actions workflow at
`.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`/`master`.

One-time repo setup:
1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. If you use the form/Calendly/analytics env vars, add them as **Settings → Secrets and variables →
   Actions → Repository secrets** with the same names as in `.env.example`.
3. Push to `main` (or run the workflow manually via **Actions → Deploy to GitHub Pages → Run workflow**).

The old static site files at the repo root (`index.html`, `js/`, `css/`, `images/`, etc.) are left in
place until you're ready to remove them — they're not part of the Vite build and won't be deployed by
the new workflow (only `portfolio/dist` is uploaded).

## Design system summary

See `DESIGN_SYSTEM.md` for the full breakdown of colors, type scale, spacing, and components.

## Assets checklist

See `ASSETS_CHECKLIST.md` for what's already in place vs. what you still need to supply (real App
Store links, LinkedIn recommendation quotes, a dedicated OG image if you want something more custom
than the generated placeholder, etc.).

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (Lenis, Framer Motion reveals, custom cursor, and CSS aurora/marquee
  animations all disable or short-circuit)
- Respects `prefers-color-scheme` for initial theme, persisted after manual toggle
- Custom cursor is desktop-only (`pointer: fine`) and never breaks touch interaction
- Project modal and command palette both trap focus and close on `Esc`
- All interactive elements have visible focus states and are keyboard reachable
- Images are lazy-loaded with explicit dimensions and skeleton placeholders to avoid layout shift
