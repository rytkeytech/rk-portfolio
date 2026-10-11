import ContactForm from "@/components/ContactForm";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 bg-ink text-white">
      <div className="mx-auto grid w-full max-w-content gap-12 px-5 py-14 lg:grid-cols-2 lg:py-24">
        <div>
          <SectionHeading {...site.sections.contact} dark />
          <p className="mt-6 max-w-xl text-lg">{site.contactForm.intro}</p>
          <Button
            variant="green"
            size="lg"
            href={whatsappLink()}
            className="mt-8 w-full sm:w-auto"
          >
            {site.labels.whatsapp}
          </Button>
          <p className="mt-6">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex min-h-11 items-center font-semibold underline"
            >
              {site.contact.email}
            </a>
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
