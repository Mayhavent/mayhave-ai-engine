import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Code, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnose",
    description: "We audit your workflows, interview your team, and identify high-impact automation opportunities.",
    visual: "Checklist/analysis graphic"
  },
  {
    number: "02",
    icon: FileText,
    title: "Prescribe",
    description: "We create a custom AI roadmap with clear ROI projections and prioritized solutions.",
    visual: "Roadmap/strategy document mockup"
  },
  {
    number: "03",
    icon: Code,
    title: "Implement",
    description: "Our team builds and deploys your AI systems - agents, automations, and dashboards that integrate seamlessly.",
    visual: "Code/workflow builder interface"
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimize & Scale",
    description: "We monitor performance, refine systems, and ensure your automation evolves with your business.",
    visual: "Dashboard with upward trending metrics"
  }
];

export const Process = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven 4-step approach to AI transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
              )}
              
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-card hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-background" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
