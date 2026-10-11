import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <FeaturedWork />
      <About />
      <Process />
      <ContactSection />
    </main>
  );
}
