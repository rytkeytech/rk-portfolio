# CLAUDE.md: Rules for AI working on this project

## Project
Personal portfolio for **Annor Sampson**, founder of **RYT KEY TECH**.
Goal: win clients (small businesses in Ghana) for websites, POS/inventory systems, dashboards and custom web apps.

## Read before any change
- `docs/PRD.md`: what we're building and why
- `docs/DESIGN.md`: screens, flows, colors, fonts, spacing
- `docs/ARCHITECTURE.md`: stack, folders, security rules
- `docs/TASKS.md`: current task list. Work on ONE task at a time.

## Stack
Next.js 16 (App Router, `src/` folder) · TypeScript · Tailwind CSS · Zod · Resend · Vercel

## Rules
1. **Work automatically.** Take the next unticked task in `docs/TASKS.md`, build it, and run `npm run build` and `npm run lint`. Fix any errors yourself before moving on.
2. **Small changes only.** One task per commit. Do not touch files unrelated to the task.
3. **Commit and push.** After each task passes the build: tick it in `docs/TASKS.md`, `git commit` with a clear message, then `git push` (Vercel deploys automatically).
4. **Explain simply.** The owner is relearning web development. Explain new concepts briefly, without jargon.
5. **Mobile first.** Build for 360px wide first, then larger screens. Buttons and links at least 44px tall.
6. **Follow DESIGN.md.** Use only its colors, fonts and spacing. Don't invent new styles.
7. **Content lives in `src/lib/site.ts`.** Never hard-code the name, phone, email or service text inside components.
8. **Server components by default.** Only `Navbar` (mobile menu) and `ContactForm` may use `"use client"`.
9. **Secrets.** API keys only in `.env.local` / Vercel settings. Never in code, never in client components, never ask the owner to paste them in chat.
10. **No real customer data** anywhere, including screenshots.
11. **Never connect to the GENXCHOICE POS or its Supabase project.**
12. **Don't add new packages** without explaining why and getting approval.
13. **After each phase:** stop and give a short summary: what was built, a 1–2 line plain explanation of any new concept, and what to check on the live site on a phone.
14. **Stop and ask** only for: new packages, anything involving secrets or accounts, or anything that deletes files.

## Contact details
- WhatsApp: 0549572669 (international format: 233549572669)
- Enquiry email: rytkeytech@gmail.com
- Hosting: free `.vercel.app` address for now

## Brand
- Brand red `#C8102E` · Brand yellow `#F5B700` · WhatsApp green `#0F7A3F`
- Ink `#141414` · Soft grey `#F4F3F0` · Pale yellow `#FDF1D0` · Border `#E4E4E4`
- Headings: Sora (700/800) · Body: Manrope (400–700)
