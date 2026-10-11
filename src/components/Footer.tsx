import Logo from "@/components/Logo";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

// "use cache" lets Next.js read the date while pre-building the page.
// The year is refreshed automatically each time the site is rebuilt.
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

const linkClasses =
  "inline-flex min-h-11 items-center font-semibold hover:text-brand-yellow";

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="bg-black text-white">
      {/* Extra bottom padding keeps the floating WhatsApp button off the text */}
      <div className="mx-auto w-full max-w-content px-5 pt-12 pb-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-col md:flex-row md:gap-8">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              {site.footer.whatsappLabel}: {site.contact.phoneDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className={linkClasses}>
              {site.footer.emailLabel}: {site.contact.email}
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-white/15 pt-6 text-sm">
          © {year} {site.business}. {site.footer.rights}
        </p>
      </div>
    </footer>
  );
}
