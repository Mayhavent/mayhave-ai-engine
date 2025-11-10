import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet <span className="bg-gradient-primary bg-clip-text text-transparent">James Walker</span>
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Hi, I'm James Walker, founder of Mayhave. I help businesses cut costs and save time through practical AI implementation.
                </p>
                <p>
                  No fluff, no buzzwords - just real automation systems that deliver measurable results. I focus on diagnosing your unique challenges first, then prescribing custom AI solutions that actually fit your business.
                </p>
                <p className="text-foreground font-semibold">
                  My approach is simple: understand your pain points, build solutions that work, and prove the value with real metrics.
                </p>
              </div>

              <div className="pt-6">
                <Button variant="hero" size="lg" className="group">
                  Let's Talk About Your Business
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
