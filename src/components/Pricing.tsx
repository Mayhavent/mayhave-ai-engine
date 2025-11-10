import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Package",
    tagline: "Get Started with AI",
    price: "$2,500",
    description: "Best for: Small businesses testing AI",
    features: [
      "Process audit & AI roadmap",
      "1-2 automation workflows",
      "30-day support",
      "Basic implementation"
    ],
    highlighted: false
  },
  {
    name: "Professional Package",
    tagline: "Full AI Transformation",
    price: "$5,000",
    description: "Best for: Growing businesses ready to scale",
    badge: "MOST POPULAR",
    features: [
      "Complete process diagnosis",
      "3-5 custom automations",
      "AI agent implementation",
      "Analytics dashboard",
      "90-day support & optimization",
      "Priority implementation"
    ],
    highlighted: true
  },
  {
    name: "Enterprise Package",
    tagline: "Custom AI Solutions",
    price: "Custom",
    description: "Best for: Established businesses",
    features: [
      "Unlimited automations",
      "Multi-agent systems",
      "Advanced analytics & reporting",
      "Dedicated consultant",
      "Ongoing optimization",
      "White-glove service"
    ],
    highlighted: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col animate-fade-in-up ${
                plan.highlighted 
                  ? 'border-primary shadow-glow scale-105 bg-card' 
                  : 'bg-card/50 backdrop-blur-sm border-primary/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-foreground border-0">
                  {plan.badge}
                </Badge>
              )}
              
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.tagline}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">starting</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={plan.highlighted ? "hero" : "hero-outline"}
                  className="w-full"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
