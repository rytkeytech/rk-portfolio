"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Navbar() {
  // Remembers whether the phone menu is open or closed
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink text-white">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center font-semibold hover:text-brand-yellow"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Phone menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? site.labels.closeMenu : site.labels.openMenu}
          className="flex size-11 items-center justify-center md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-7 fill-none stroke-current stroke-2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Phone menu */}
      {open && (
        <nav id="mobile-menu" className="px-5 pb-4 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-t border-white/15 font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
