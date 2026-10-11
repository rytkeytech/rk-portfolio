import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid w-full max-w-content gap-12 px-5 py-14 lg:grid-cols-[3fr_2fr] lg:items-center lg:py-24">
        <div>
          <p className="font-bold text-brand-yellow">{site.role}</p>
          <h1 className="mt-4">{site.name}</h1>
          <p className="mt-6 max-w-xl text-lg">{site.tagline}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="green" size="lg" href={whatsappLink()}>
              {site.labels.whatsapp}
            </Button>
            <Button variant="outline" size="lg" href="/#work">
              {site.labels.seeWork}
            </Button>
          </div>
        </div>

        {/* Photo placeholder: the real photo is added in task 24 */}
        <div
          aria-hidden="true"
          className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-card border border-white/15 font-heading text-7xl font-extrabold text-brand-yellow"
        >
          {site.logoMark}
        </div>
      </div>
    </section>
  );
}
