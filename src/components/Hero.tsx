import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Large centered purple gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px] animate-glow" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
            <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">New</span>
            <span>Automated Voice Agent X Dashboard</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            AI Consulting That Builds, Not 
            <br />
            Just Advises.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We don’t hand you a strategy deck. We implement real AI systems, agents, automations, and dashboards that
            move the needle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              View services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
