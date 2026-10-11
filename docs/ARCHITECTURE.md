# ARCHITECTURE: Portfolio + RYT KEY TECH

## 1. Summary
A fast, mostly static website. No database and no login in v1. The only "backend" part is the contact form, which sends an email.

## 2. Tech stack

| Part | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | Same as your POS, so skills carry over; great SEO; pages are pre-built so they load fast |
| Language | TypeScript | Catches mistakes before they reach the site |
| Styling | Tailwind CSS | Fast to build; matches the design system tokens easily |
| Fonts | `next/font/google` (Sora, Manrope) | Fonts are bundled with the site, no extra download from Google |
| Images | `next/image` + WebP files | Auto-resizes for phones, saves mobile data |
| Contact form email | Resend (via a Next.js Server Action) | Free tier is enough; key stays secret on the server |
| Form validation | Zod | Same checks on browser and server |
| Hosting | Vercel (free Hobby plan) | One-click deploys from GitHub; global fast servers |
| Code storage | GitHub | Version history and backup; Vercel deploys from it |

**Not needed in v1:** Supabase, user accounts, payments, a CMS. Add later only if a real need appears (e.g. storing enquiries or a blog).

## 3. Trade-offs considered

| Option | Pros | Cons | Decision |
|---|---|---|---|
| Plain HTML/CSS site | Simplest, free on GitHub Pages | Harder to grow, no server for the form, doesn't build your Next.js skills | No |
| Next.js | Grows with you, same stack as POS, good SEO | Slightly more setup | **Yes** |
| Formspree for the form | No server code at all | Their branding on free plan, less control | Backup option |
| Resend + Server Action | Full control, professional, you learn server code | Needs an API key in env variables | **Yes** |

## 4. Pages (routes)

| URL | File | Type |
|---|---|---|
| `/` | `app/page.tsx` | Static |
| `/work/genxchoice-pos` | `app/work/genxchoice-pos/page.tsx` | Static |
| 404 | `app/not-found.tsx` | Static |
| (form submit) | `app/actions/contact.ts` | Server Action |

## 5. Folder structure

```
rk-portfolio/
├─ docs/                     PRD.md, DESIGN.md, ARCHITECTURE.md, TASKS.md
├─ public/
│  └─ images/                photo.webp, logo.svg, pos-*.webp, og-image.png
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          fonts, metadata, floating WhatsApp button
│  │  ├─ page.tsx            home page (assembles sections)
│  │  ├─ not-found.tsx
│  │  ├─ globals.css         Tailwind + design tokens
│  │  ├─ sitemap.ts, robots.ts
│  │  ├─ actions/contact.ts  server action: validate → send email
│  │  └─ work/genxchoice-pos/page.tsx
│  ├─ components/
│  │  ├─ Navbar.tsx          (client: mobile menu)
│  │  ├─ Hero.tsx
│  │  ├─ Services.tsx
│  │  ├─ FeaturedWork.tsx
│  │  ├─ About.tsx
│  │  ├─ Process.tsx
│  │  ├─ ContactSection.tsx
│  │  ├─ ContactForm.tsx     (client: form states)
│  │  ├─ Footer.tsx
│  │  ├─ WhatsAppButton.tsx
│  │  └─ ui/Button.tsx       shared button styles
│  └─ lib/
│     ├─ site.ts             name, phone, email, services list, case study text
│     ├─ whatsapp.ts         builds wa.me links with pre-filled messages
│     └─ validation.ts       Zod schema for the contact form
├─ CLAUDE.md                 rules for the AI
├─ .env.local                RESEND_API_KEY, CONTACT_TO_EMAIL (never commit)
└─ .gitignore
```

**Rule:** all text and contact details live in `lib/site.ts`. To change your phone number or a service, edit one file.

## 6. Contact form flow
1. Visitor fills form → browser checks fields (Zod)
2. Form calls the server action `sendContact`
3. Server checks again (never trust the browser), checks the hidden spam field
4. Server sends email to you via Resend
5. Returns success or error → form shows the matching state from DESIGN.md

## 7. Security risks and fixes

| Risk | Fix |
|---|---|
| Spam bots fill the form | Hidden "honeypot" field + server validation + simple rate limit per IP |
| API key leaked | Key only in `.env.local` and Vercel settings; `.env*` in `.gitignore`; never used in client components |
| Real customer data in screenshots | Use fake data only for POS screenshots |
| POS secrets exposed | Portfolio never connects to the POS or its Supabase project |
| Fake/malicious form input | Length limits on every field; email is sent as plain text |

## 8. Performance targets
- Lighthouse score 90+ on mobile
- Home page under 1 MB total; images compressed to WebP
- Only 2 client components (Navbar menu, ContactForm); everything else renders on the server

## 9. SEO
- Page titles and descriptions via Next.js `metadata`
- Open Graph image so WhatsApp/Facebook link previews look good
- `sitemap.xml` and `robots.txt`
- Google Business Profile link later

## 10. What happens at 10x more visitors?
- Pages are static files on Vercel's CDN, so traffic barely matters.
- The only weak point is the form: more spam. Fixes above handle it; add Cloudflare Turnstile (free captcha) if spam gets through.
- Resend free tier allows roughly 100 emails/day, far more than enquiries you'll get.

## 11. Decisions made
- Enquiries go to: rytkeytech@gmail.com (`CONTACT_TO_EMAIL`)
- Domain: free `.vercel.app` address for v1; custom domain later
- Resend sends from its test address (`onboarding@resend.dev`) until a custom domain is added; this works because emails only go to your own Resend account email
