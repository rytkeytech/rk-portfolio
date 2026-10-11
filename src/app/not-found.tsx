import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function NotFound() {
  const { notFound } = site;

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto w-full max-w-content px-5 py-14 lg:py-24">
        <SectionHeading label={notFound.label} heading={notFound.heading} />
        <p className="mt-6 max-w-xl text-lg">{notFound.text}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" href="/">
            {notFound.home}
          </Button>
          <Button variant="green" size="lg" href={whatsappLink()}>
            {site.labels.whatsapp}
          </Button>
        </div>
      </div>
    </main>
  );
}
