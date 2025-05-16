import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import CourseFeatures from "@/components/sections/courses-features";
import CourseModules from "@/components/sections/courses-modules";
import TeamSection from "@/components/sections/team";
import FaqSection from "@/components/sections/faq";
import CertificateSection from "@/components/sections/certificate";
import Partners from "@/components/sections/partners";
import { CTASection } from "@/components/sections/cta-section";
import ShowcaseCarousel from "@/components/sections/showcase-carousel";

export const metadata: Metadata = {
  title: "Crie Sua Própria Startup | Curso Gratuito",
  description:
    "Crie todo o planejamento da sua startup com o apoio da Agência Espacial Brasileira (AEB) e Instituto Federal do Paraná (IFPR)",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <Partners />
      <ShowcaseCarousel />
      <CourseFeatures />
      <CourseModules />
      <CTASection />
      <TeamSection />
      <CertificateSection />
      <FaqSection />
    </main>
  );
}
