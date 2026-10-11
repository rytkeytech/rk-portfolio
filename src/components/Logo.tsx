import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// RK logo with the business name, for dark backgrounds. Links back to the home page.
export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center gap-2 font-heading font-extrabold text-white"
    >
      {/* Empty alt: the business name next to it already says what this is */}
      <Image
        src={site.logo.src}
        alt=""
        width={44}
        height={44}
        className="size-11"
      />
      <span>{site.business}</span>
    </Link>
  );
}
