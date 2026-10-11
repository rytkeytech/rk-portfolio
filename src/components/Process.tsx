import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function Process() {
  return (
    <section className="bg-soft-grey">
      <div className="mx-auto w-full max-w-content px-5 py-14 lg:py-24">
        <SectionHeading {...site.sections.process} />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {site.process.map((step, index) => (
            <li
              key={step.title}
              className="rounded-card border border-border bg-white p-6"
            >
              <span className="font-heading text-3xl font-extrabold text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4">{step.title}</h3>
              <p className="mt-2">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
