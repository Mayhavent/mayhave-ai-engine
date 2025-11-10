import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Rocket, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "Request for pricing",
    description: "Perfect for small businesses starting with AI automation",
    features: [
      "Basic workflow automation",
      "AI-powered personal assistant",
      "Standard analytics & reporting",
      "Email & chat support",
      "Up to 3 AI integrations"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    icon: Zap,
    price: "Request for pricing",
    description: "Perfect for small businesses starting with AI automation",
    badge: "Popular",
    features: [
      "Advanced workflow automation",
      "AI-driven sales & marketing tools",
      "Enhanced data analytics & insights",
      "Priority customer support",
      "Up to 10 AI integrations"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    description: "Perfect for small businesses starting with AI automation",
    features: [
      "Fully customizable AI automation",
      "Dedicated AI business consultant",
      "Enterprise-grade compliance",
      "24/7 VIP support",
      "Unlimited AI integrations"
    ],
    highlighted: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Best AI Automation, at the Right Price
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your business needs and start automating with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative flex flex-col animate-fade-in-up ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-purple-900/50 to-purple-700/30 border-purple-500/50' 
                    : 'bg-black border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 right-4 bg-primary text-white border-0 px-3 py-1">
                    {plan.badge}
                  </Badge>
                )}
                
                <CardHeader className="pb-6 space-y-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    Schedule a call
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
