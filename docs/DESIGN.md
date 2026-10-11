# DESIGN: Portfolio + RYT KEY TECH

## Part 1: Screens and user flow

### Main user flow
1. Business owner opens link (from WhatsApp, flyer QR code, Facebook, Google)
2. Sees hero → understands who you are and what you do in 5 seconds
3. Scrolls services → finds what they need
4. Opens GENXCHOICE POS case study → trusts you can deliver
5. Taps WhatsApp (or sends form) → enquiry reaches you

Shortcut: WhatsApp button is visible on every screen, so they can contact at any step.

### Screen list (v1)

**1. Home page** (`/`) — one long scrolling page

| Section | Shows | Actions |
|---|---|---|
| Navbar | RK logo, links: Services, Work, About, Contact | Tap link → scroll to section; mobile: menu icon opens drawer |
| Hero | Name, "Founder, RYT KEY TECH", value statement, photo (optional) | "Chat on WhatsApp", "See my work" |
| Services | 4 cards: Websites, POS/Inventory, Dashboards, Custom web apps; benefit line each | Card → WhatsApp with service pre-filled |
| Featured work | GENXCHOICE POS card: screenshot, 1-line result, tech tags | "Read case study" |
| About | Short story + why you build systems for businesses | — |
| How I work | Talk → Plan → Build → Support | — |
| Contact | Contact form + WhatsApp button | Send form / open WhatsApp |
| Footer | Logo, WhatsApp, email, copyright year | Links |

**2. Case study page** (`/work/genxchoice-pos`)
- Back to home link
- Problem → Solution → Features (with screenshots) → Results → Tech used
- Ends with call to action: "Want a system like this for your business?" + WhatsApp button

**3. Not found page** (`/404`)
- Short message + "Back to home" button

**Always on screen:** floating WhatsApp button (bottom-right)

### Contact form states
| State | What user sees |
|---|---|
| Empty | Fields: name, business name, phone, what you need |
| Error | Red message under the field (e.g. "Enter a phone number") |
| Sending | Button shows "Sending…" and is disabled |
| Success | "Thanks! I'll reply within 24 hours." + WhatsApp option |
| Failed | "Something went wrong. Please message me on WhatsApp." |

### Mobile rules
- Design for phone first (360px wide), then expand for desktop
- Buttons at least 44px tall (easy to tap)
- Images compressed so the page loads fast on mobile data
- Single column on phone; 2–4 columns on desktop for service cards

## Part 2: Design system

### Colors
| Name | Hex | Use |
|---|---|---|
| Brand red | #C8102E | Main buttons, section labels, numbers |
| Brand yellow | #F5B700 | Highlights on dark backgrounds, logo |
| WhatsApp green | #0F7A3F | WhatsApp buttons only (white text passes contrast) |
| Ink | #141414 | Text, header, hero, contact section |
| Soft grey | #F4F3F0 | Alternate section background |
| Pale yellow | #FDF1D0 | Icon tiles, tags |
| Border grey | #E4E4E4 | Card borders |

### Fonts (Google Fonts)
- **Sora** (700/800): headings
- **Manrope** (400–700): body text, buttons, forms
- Sizes: H1 72px desktop / 34px phone · H2 44px / 28px · H3 20px · body 16–18px, line height 1.6

### Shapes and spacing
- Buttons: fully rounded (pill), min 44px tall (52px for main actions)
- Cards: 20px corners, 1px border; inputs 12px corners
- Spacing scale: 8, 16, 24, 32, 48, 96px (96px between sections on desktop, 56px on phone)
- Content max width 1200px; phone side padding 20px

### Page rhythm
Dark header + hero → white Services → grey Featured work → white About → grey How I work → dark Contact → black footer

### Mockups
Canvas "Annor Sampson Portfolio": Home (desktop), Home (phone), Style guide
