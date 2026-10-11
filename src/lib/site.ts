// All site text and contact details live here.
// To change the phone number, email or a service, edit this one file.

export const site = {
  name: "Annor Sampson",
  role: "Founder, RYT KEY TECH",
  business: "RYT KEY TECH",
  tagline:
    "I build websites and business systems that help you track stock, record every sale and see your daily profit.",
  description:
    "Annor Sampson, founder of RYT KEY TECH, builds websites, POS and inventory systems, dashboards and custom web apps for businesses in Ghana.",

  contact: {
    // Local format, shown to visitors
    phoneDisplay: "0549572669",
    // International format, used in WhatsApp links (no + sign)
    whatsappNumber: "233549572669",
    email: "rytkeytech@gmail.com",
  },

  // Pre-filled WhatsApp messages
  messages: {
    general:
      "Hello Annor, I found your website and I'd like to talk about a project for my business.",
    caseStudy:
      "Hello Annor, I saw the GENXCHOICE POS and I'd like a system like this for my business.",
  },

  // Short logo text, used until the real RK logo image is added (task 24)
  logoMark: "RK",

  // Button text
  labels: {
    whatsapp: "Chat on WhatsApp",
    seeWork: "See my work",
    readCaseStudy: "Read case study",
    screenshotSoon: "Screenshot coming soon",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  // Small label and big heading at the top of each section
  sections: {
    services: {
      label: "Services",
      heading: "What I can build for your business",
    },
    work: {
      label: "Featured work",
      heading: "A real system, running in a real shop",
    },
    process: {
      label: "How I work",
      heading: "Four simple steps, from first chat to support",
    },
    contact: {
      label: "Contact",
      heading: "Tell me what your business needs",
    },
  },

  // Contact section text and form field labels
  contactForm: {
    intro:
      "WhatsApp is the fastest way to reach me. You can also fill in the form and I'll reply within 24 hours.",
    fields: {
      name: { label: "Your name", placeholder: "e.g. Ama Mensah" },
      business: { label: "Business name", placeholder: "e.g. Ama's Boutique" },
      phone: { label: "Phone number", placeholder: "e.g. 024 000 0000" },
      need: {
        label: "What do you need?",
        placeholder: "e.g. A system to track my stock and sales",
      },
    },
    submit: "Send message",
  },

  footer: {
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    rights: "All rights reserved.",
  },

  notFound: {
    label: "Page not found",
    heading: "This page doesn't exist",
    text: "The link may be old or typed wrongly. Go back to the home page or message me on WhatsApp.",
    home: "Back to home",
  },

  nav: [
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],

  services: [
    {
      id: "websites",
      title: "Business websites",
      benefit:
        "Customers find you online, see what you sell and contact you in one tap.",
      message: "Hello Annor, I need a website for my business.",
    },
    {
      id: "pos",
      title: "Inventory & POS systems",
      benefit:
        "Know your stock at any time, record every sale and reduce losses in your shop.",
      message: "Hello Annor, I need an inventory / POS system for my shop.",
    },
    {
      id: "dashboards",
      title: "Data dashboards",
      benefit:
        "See your sales, expenses and profit on one screen, without digging through books.",
      message: "Hello Annor, I need a dashboard to see my business numbers.",
    },
    {
      id: "web-apps",
      title: "Custom web apps",
      benefit:
        "A system built around the way your business already works, not the other way round.",
      message: "Hello Annor, I need a custom web app for my business.",
    },
  ],

  process: [
    {
      title: "Talk",
      text: "We chat on WhatsApp or a call about your business and what is slowing it down.",
    },
    {
      title: "Plan",
      text: "I write a simple plan: what will be built, how long it takes and what it costs.",
    },
    {
      title: "Build",
      text: "I build it step by step and show you progress so you can ask for changes early.",
    },
    {
      title: "Support",
      text: "After launch I train you and your staff and stay available to fix and improve things.",
    },
  ],

  about: {
    label: "About",
    heading: "I build systems I use in my own business",
    paragraphs: [
      "I'm Annor Sampson. I studied data science, and I run GENX CHOICE ENTERPRISE, so I know what it takes to manage stock, staff and money in a real shop.",
      "I started RYT KEY TECH to build simple, reliable systems for business owners like me. Everything I offer is something I have built and used in my own business first.",
    ],
  },

  caseStudy: {
    slug: "genxchoice-pos",
    href: "/work/genxchoice-pos",
    title: "GENXCHOICE POS",
    summary:
      "A full shop management system for a phone sales and repair business.",
    // Task 23 replaces this placeholder with the real result
    result: "[RESULT]",
    problem:
      "The shop tracked stock, sales and repairs by hand. It was hard to know what was in stock, what was sold each day and where money was going.",
    solution:
      "A web-based POS that runs on a phone or computer. Workers record sales and repairs, and the owner sees everything in one place.",
    features: [
      "Inventory",
      "Sales / POS",
      "Repairs",
      "Purchases",
      "Expenses",
      "Reports",
      "Admin and worker roles",
      "Approvals",
      "Audit logs",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Vercel"],
    cta: "Want a system like this for your business?",
  },
} as const;
