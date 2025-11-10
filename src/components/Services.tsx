import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Workflow, MessageSquare, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Process Diagnosis & Strategy",
    description: "Custom AI roadmaps tailored to your business. Process audits to identify automation opportunities. ROI-focused recommendations.",
    features: ["Process audits", "Custom roadmaps", "ROI analysis"]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks like data entry, reporting, scheduling. Custom n8n workflows and multi-agent systems.",
    features: ["Task automation", "Custom workflows", "Tool integration"]
  },
  {
    icon: MessageSquare,
    title: "AI Voice & Chat Agents",
    description: "24/7 customer support automation. Appointment scheduling and lead qualification. Email management and response systems.",
    features: ["24/7 support", "Lead qualification", "Email automation"]
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description: "Real-time KPI tracking and ROI metrics. Call volume analytics and performance monitoring. Custom reporting for decision-making.",
    features: ["Real-time KPIs", "Performance tracking", "Custom reports"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI implementation that transforms your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
