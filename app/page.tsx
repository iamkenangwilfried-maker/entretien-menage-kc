import Navbar from "@/components/sections/navbar";
import VSLHero from "@/components/sections/vsl-hero";
import QuickForm from "@/components/sections/quick-form";
import TrustBar from "@/components/sections/trust-bar";
import Stats from "@/components/sections/stats";
import Services from "@/components/sections/services";
import HowItWorks from "@/components/sections/how-it-works";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import ServiceAreas from "@/components/sections/service-areas";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <VSLHero />
      <QuickForm />
      <TrustBar />
      <Stats />
      <Services />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
