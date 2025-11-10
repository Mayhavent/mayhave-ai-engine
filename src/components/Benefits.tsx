import { Clock, DollarSign, Clock2, TrendingUp, BarChart, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reclaim hours every week with intelligent automation"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Lower operational costs through efficient AI systems"
  },
  {
    icon: Clock2,
    title: "24/7 Operations",
    description: "AI agents work around the clock"
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Grow without proportionally increasing headcount"
  },
  {
    icon: BarChart,
    title: "Data-Driven Decisions",
    description: "Real-time analytics and insights"
  },
  {
    icon: Zap,
    title: "Competitive Edge",
    description: "Stay ahead with cutting-edge AI implementation"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Mayhave</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business with proven AI solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
