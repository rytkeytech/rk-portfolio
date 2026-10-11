import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function FeaturedWork() {
  const { caseStudy } = site;
  // The result line stays hidden until the real result replaces the "[RESULT]" placeholder (task 23)
  const hasResult = !caseStudy.result.startsWith("[");

  return (
    <section id="work" className="scroll-mt-16 bg-soft-grey">
      <div className="mx-auto w-full max-w-content px-5 py-14 lg:py-24">
        <SectionHeading {...site.sections.work} />

        <article className="mt-8 grid overflow-hidden rounded-card border border-border bg-white lg:mt-12 lg:grid-cols-2">
          {/* Screenshot placeholder: real screenshots are added in task 21 */}
          <div className="flex aspect-video items-center justify-center bg-ink p-6 text-center font-semibold text-brand-yellow lg:aspect-auto lg:min-h-96">
            {site.labels.screenshotSoon}
          </div>

          <div className="p-6 lg:p-12">
            <h3>{caseStudy.title}</h3>
            <p className="mt-2">{caseStudy.summary}</p>
            {hasResult && (
              <p className="mt-4 font-bold text-brand-red">{caseStudy.result}</p>
            )}
            <ul className="mt-6 flex flex-wrap gap-2">
              {caseStudy.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-pale-yellow px-4 py-1 text-sm font-semibold"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <Button href={caseStudy.href} className="mt-8">
              {site.labels.readCaseStudy}
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
