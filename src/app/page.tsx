import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-content flex-1 px-5 py-14">
      <h1 className="text-brand-red">{site.business}</h1>
      <p className="mt-4">Site under construction.</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button variant="green" size="lg" href={whatsappLink()}>
          {site.labels.whatsapp}
        </Button>
        <Button variant="red" size="lg" href="/#work">
          {site.labels.seeWork}
        </Button>
        <Button variant="outline" size="lg" href="/#work">
          {site.labels.seeWork}
        </Button>
      </div>
    </main>
  );
}
