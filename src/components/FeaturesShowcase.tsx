import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    category: "Analytics",
    title: "Dashboards & Decision Intelligence",
    description: "Live KPI trends, heatmaps, and next-best action—so teams act, not guess.",
    image: "dashboard",
    imagePosition: "left",
    buttons: [
      { text: "Request Data Audit", variant: "default" as const },
      { text: "ROI Calculator", variant: "outline" as const }
    ]
  },
  {
    category: "Workflow Automation",
    title: "Automate repetitive tasks",
    description: "We help you streamline manual operations by automating crucial tasks like data entry, reporting, scheduling, and repetitive workflows—so your team can focus on what really matters.",
    image: "workflow",
    imagePosition: "right",
    buttons: [
      { text: "Request Data Audit", variant: "default" as const },
      { text: "CRM + Automation", variant: "outline" as const }
    ]
  },
  {
    category: "AI Assistance",
    title: "AI Voice Agents",
    description: "From inbound support to outbound sales and conversational lead qualification, we create AI voice agents that handle calls 24/7 to keep your business running around the clock.",
    image: "voice",
    imagePosition: "left",
    buttons: [
      { text: "Scheduling", variant: "outline" as const },
      { text: "Lead Agents", variant: "outline" as const }
    ]
  },
  {
    category: "Sales & Marketing",
    title: "Accelerate Sales Growth",
    description: "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and boosts conversion rates—all based on your unique data.",
    image: "sales",
    imagePosition: "right",
    buttons: [
      { text: "Leads", variant: "outline" as const },
      { text: "Outreach", variant: "outline" as const },
      { text: "Social Ads", variant: "outline" as const }
    ]
  },
  {
    category: "Custom Integrations",
    title: "Build Smarter Systems",
    description: "Whether you're starting from scratch or enhancing an existing platform, we create and optimize AI-powered workflows that work seamlessly across your tech stack.",
    image: "systems",
    imagePosition: "left",
    buttons: [
      { text: "Strategy", variant: "outline" as const },
      { text: "Custom AI", variant: "outline" as const },
      { text: "Consulting", variant: "outline" as const }
    ]
  }
];

const FeatureImage = ({ type }: { type: string }) => {
  if (type === "dashboard") {
    return (
      <div className="relative w-full h-full bg-background border border-border/20 rounded-lg p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Widgets · Insights (updated)</span>
          </div>
          <div className="space-y-2">
            {["Yearly Spend", "Revenue Growth", "Performance Scoring", "Leads Generated", "Checklist"].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-card/50 border border-border/10 rounded px-3 py-2">
                <span className="text-sm">{item}</span>
                <div className="w-2 h-2 rounded-full bg-primary/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (type === "voice") {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-purple-900/30 to-purple-700/20 border border-purple-500/20 rounded-lg flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-white/50" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">What can I help with?</p>
            <p className="text-sm text-muted-foreground">AI-powered calling agent</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (type === "workflow" || type === "sales" || type === "systems") {
    return (
      <div className="relative w-full h-full bg-background border border-border/20 rounded-lg p-6 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-400/10 border border-purple-500/20" />
          <p className="text-sm text-muted-foreground">
            {type === "workflow" && "Automated Workflow System"}
            {type === "sales" && "Sales Analytics Dashboard"}
            {type === "systems" && "Custom Integration Platform"}
          </p>
        </div>
      </div>
    );
  }
  
  return null;
};

export const FeaturesShowcase = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              feature.imagePosition === "right" ? "md:grid-flow-col-dense" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`${
                feature.imagePosition === "right" ? "md:col-start-2" : ""
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] w-full">
                <FeatureImage type={feature.image} />
              </div>
            </div>

            {/* Content */}
            <div
              className={`space-y-6 ${
                feature.imagePosition === "right" ? "md:col-start-1 md:row-start-1" : ""
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <Badge variant="secondary" className="text-xs">
                {feature.category}
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {feature.title}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {feature.buttons.map((button, i) => (
                  <Button
                    key={i}
                    variant={button.variant}
                    size="sm"
                    className={button.variant === "default" ? "bg-primary hover:bg-primary/90 text-white" : ""}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
