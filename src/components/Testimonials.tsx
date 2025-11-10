import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "James helped us cut our admin workload by 60%. The AI systems he built actually work and save us real money every month.",
    author: "Sarah Mitchell",
    company: "TechStart Solutions"
  },
  {
    quote: "Instead of generic advice, Mayhave gave us custom solutions that fit our exact needs. Best ROI we've seen from any consultant.",
    author: "Michael Chen",
    company: "Growth Dynamics"
  },
  {
    quote: "The analytics dashboard alone paid for itself. We can finally see what's working and make data-driven decisions.",
    author: "Emily Rodriguez",
    company: "Innovate Co"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-card hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
