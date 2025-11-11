import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesShowcase />
      <Process />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
