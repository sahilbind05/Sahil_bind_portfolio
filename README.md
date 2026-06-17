# Sahil Bind — Developer Portfolio

A modern, premium, recruiter-focused portfolio for a Software Developer working with React, Firebase, and AI integrations.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**-style components, **Framer Motion**, and **lucide-react** icons.

## Features

- Dark, futuristic theme with blue → purple gradient accents
- Fully responsive (mobile / tablet / desktop)
- Smooth scroll-reveal animations, animated counters, floating gradient background
- Sections: Hero, About, Skills, Projects, Education & Certifications, Achievements, Timeline, Contact, Footer
- SEO optimized (metadata, Open Graph image, JSON-LD, sitemap, robots, manifest)
- Accessibility: skip link, semantic landmarks, focus states, reduced-motion support
- All content centralized in [`lib/data.ts`](lib/data.ts) for easy editing

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Customize

- **Content** (name, links, projects, skills, timeline): edit [`lib/data.ts`](lib/data.ts).
- **Résumé**: drop your file at `public/Sahil-Bind-Resume.pdf` — the "Download Resume" button already links to it.
- **Theme colors**: edit the CSS variables in [`app/globals.css`](app/globals.css).
- **Project screenshots**: replace the SVGs in `public/projects/`.

## Tech stack

| Area       | Choice                                |
| ---------- | ------------------------------------- |
| Framework  | Next.js 14 (App Router)               |
| Language   | TypeScript                            |
| Styling    | Tailwind CSS + shadcn/ui-style primitives |
| Animation  | Framer Motion                         |
| Icons      | lucide-react                          |

## Deployment (Vercel)

This site deploys on [Vercel](https://vercel.com), built by the Next.js team — it supports the App Router, image optimization, and the generated `sitemap.ts` / `robots.ts` / `manifest.ts` with zero extra config.

### One-time setup

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Accept the detected defaults — Vercel reads [`vercel.json`](vercel.json) and auto-detects Next.js, the build command (`next build`), and output. Node version is pinned via [`.nvmrc`](.nvmrc).
4. Click **Deploy**.

Every push to the default branch then ships to production automatically; other branches and PRs each get a preview URL.

### Custom domain

`siteConfig.url` is set to `https://sahilbind.dev`. To match it:

1. In the Vercel project, open **Settings → Domains** and add `sahilbind.dev`.
2. Point the domain's DNS at Vercel (an `A` record to `76.76.21.21`, or a `CNAME` to `cname.vercel-dns.com` per Vercel's instructions).
3. HTTPS is provisioned automatically once DNS resolves.

If you change the production domain, update `url` in [`lib/data.ts`](lib/data.ts) so the metadata, sitemap, and Open Graph tags stay correct.
