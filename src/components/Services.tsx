import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-white">
      <div className="mx-auto w-full max-w-content px-5 py-14 lg:py-24">
        <SectionHeading {...site.sections.services} />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {site.services.map((service, index) => (
            // The whole card is a link that opens WhatsApp with this service's message
            <a
              key={service.id}
              href={whatsappLink(service.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-card border border-border p-6 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
            >
              <span className="flex size-12 items-center justify-center rounded-input bg-pale-yellow font-heading font-bold text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6">{service.title}</h3>
              <p className="mt-2 flex-1">{service.benefit}</p>
              <span className="mt-6 font-bold text-whatsapp">
                {site.labels.whatsapp} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
