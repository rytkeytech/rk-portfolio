import Image from "next/image";
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

        {/* next/image sends each phone a size that fits its screen, to save data */}
        <Image
          src={site.photo.src}
          alt={site.photo.alt}
          width={800}
          height={1000}
          sizes="(min-width: 424px) 384px, calc(100vw - 40px)"
          preload
          className="mx-auto w-full max-w-sm rounded-card border border-white/15"
        />
      </div>
    </section>
  );
}
