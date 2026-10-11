import Link from "next/link";
import { site } from "@/lib/site";

// Text version of the RK logo, for dark backgrounds. Links back to the home page.
export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center gap-2 font-heading font-extrabold text-white"
    >
      <span className="flex size-9 items-center justify-center rounded-input bg-brand-yellow text-brand-red">
        {site.logoMark}
      </span>
      <span>{site.business}</span>
    </Link>
  );
}
