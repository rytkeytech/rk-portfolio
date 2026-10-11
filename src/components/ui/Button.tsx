import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "red" | "green" | "outline";
type Size = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  // md = 44px tall, lg = 52px tall (main actions)
  size?: Size;
  // With href it renders a link; without it, a real <button>
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 font-body font-bold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  red: "bg-brand-red text-white",
  // WhatsApp buttons only
  green: "bg-whatsapp text-white",
  // Takes the text colour around it, so it works on light and dark sections
  outline: "border border-current bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 text-base",
  lg: "min-h-13 text-lg",
};

export default function Button({
  children,
  variant = "red",
  size = "md",
  href,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (!href) {
    return (
      <button type={type} disabled={disabled} className={classes}>
        {children}
      </button>
    );
  }

  // Links to other sites (like WhatsApp) open in a new tab
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
