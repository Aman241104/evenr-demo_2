import { Hero } from "@/components/organisms/Hero";
import { BentoGallery } from "@/components/organisms/BentoGallery";
import { ServiceHighlights } from "@/components/organisms/ServiceHighlights";
import { Testimonials } from "@/components/organisms/Testimonials";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGallery />
      <ServiceHighlights />
      <Testimonials />
      <ConciergeBar />
      <Footer />
    </main>
  );
}
