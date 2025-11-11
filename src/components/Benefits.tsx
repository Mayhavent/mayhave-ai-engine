import { Zap, Handshake, Clock, DollarSign, PieChart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Increased Productivity",
    description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
  },
  {
    icon: Handshake,
    title: "Better Customer Experience",
    description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description:
      "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
  },
  {
    icon: PieChart,
    title: "Data-Driven Insights",
    description:
      "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
  },
  {
    icon: TrendingUp,
    title: "Scalability & Growth",
    description:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
  },
];

export const Benefits = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wide text-white/70 mb-4">
            Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            AI isn&apos;t just a tool, it&apos;s the
            <br />
            new infrastructure of business.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We help you harness it to move faster, think smarter, and scale beyond limits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-transparent via-transparent to-violet-950/20 p-8 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
