import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function About() {
  const { about } = site;

  return (
    <section id="about" className="scroll-mt-16 bg-white">
      <div className="mx-auto w-full max-w-content px-5 py-14 lg:py-24">
        <SectionHeading label={about.label} heading={about.heading} />

        <div className="mt-8 max-w-3xl space-y-4 text-lg lg:mt-12">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
