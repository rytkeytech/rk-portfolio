# TASKS: Portfolio + RYT KEY TECH

Each task should take under an hour. After every task: test it, then commit to Git.
Tick `[x]` when done. Work top to bottom; the site works at every stage.

---

## Phase 0: Setup (the site goes live empty on day one)

- [x] **1. Install tools**
  Node.js (LTS), Git, VS Code.
  *Done when:* `node -v` and `git -v` show versions in the terminal.

- [x] **2. Create the Next.js app in `rk-portfolio`**
  TypeScript, Tailwind, App Router, `src/` folder, ESLint.
  *Done when:* `npm run dev` shows the starter page at http://localhost:3000.

- [x] **3. Add `CLAUDE.md` rules file**
  *Done when:* file is in the project root.

- [x] **4. Git + GitHub**
  Create repo `rk-portfolio`, first commit, push.
  *Done when:* code is visible on github.com.

- [x] **5. Deploy to Vercel**
  Import the GitHub repo into Vercel.
  *Done when:* you can open your `.vercel.app` link on your phone.

## Phase 1: Foundation

- [x] **6. Design tokens + fonts**
  Colors from DESIGN.md in `globals.css`; Sora + Manrope via `next/font`.
  *Done when:* a test heading shows Sora in brand red.

- [ ] **7. Site config**
  `lib/site.ts` (name, phone, email, services, case study text) and `lib/whatsapp.ts` (builds wa.me links).
  *Done when:* changing the phone number in one place would update the whole site.

- [ ] **8. Shared components**
  `ui/Button.tsx` (red, green, outline) and floating `WhatsAppButton.tsx`.
  *Done when:* the floating button opens WhatsApp with a pre-filled message on your phone.

## Phase 2: Home page sections
For each: build it, check it at phone width (Chrome DevTools, 360px) and desktop, commit.

- [ ] **9. Navbar** (logo, links, mobile menu that opens and closes)
- [ ] **10. Hero** (photo placeholder for now)
- [ ] **11. Services** (4 cards, each with its own WhatsApp message)
- [ ] **12. Featured work** (POS card, screenshot placeholder)
- [ ] **13. About + How I work**
- [ ] **14. Contact section** (form UI only, not sending yet)
- [ ] **15. Footer**
- [ ] **16. 404 page**

*Phase done when:* the home page matches the mockup on phone and desktop, and is live on Vercel.

## Phase 3: Make the contact form work

- [ ] **17. Validation + form states**
  Zod schema; show empty, error, sending, success and failed states from DESIGN.md.
  *Done when:* submitting empty fields shows red messages.

- [ ] **18. Resend setup**
  Sign up at resend.com **with rytkeytech@gmail.com**; create an API key; put it in `.env.local` and in Vercel's Environment Variables. Never paste the key in chat.
  *Done when:* key is saved in both places.

- [ ] **19. Server action**
  `actions/contact.ts`: validate again on server, honeypot spam field, simple rate limit, send email.
  *Done when:* a test message arrives in rytkeytech@gmail.com.

- [ ] **20. Test every form state on the live site**
  *Done when:* success and failure both show the right message on your phone.

## Phase 4: Case study

- [ ] **21. Screenshots**
  Take POS screenshots using fake data only; compress to WebP (squoosh.app).
  *Done when:* 3–5 images under 200 KB each in `public/images`.

- [ ] **22. Case study page** `/work/genxchoice-pos`
  Problem → Solution → Features → Results → Tech, ending with a WhatsApp call to action.
- [ ] **23. Write the real result** (replace the `[RESULT]` placeholder)

## Phase 5: Polish and launch

- [ ] **24. Real photo and RK logo** (WebP photo, SVG or PNG logo)
- [ ] **25. SEO** — page titles, descriptions, Open Graph image, sitemap, robots
- [ ] **26. Speed check** — Lighthouse on mobile, aim for 90+, fix what it flags
- [ ] **27. QA + code review** — run the QA tester and strict reviewer prompts from the guide
- [ ] **28. Launch** — test on 2 real phones, share the link on WhatsApp status and Facebook

---

## Later (from PRD, not v1)
More case studies (WhatsApp shop) · pricing/packages · testimonials · blog · custom domain
