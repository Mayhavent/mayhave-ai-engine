import { MessageSquare, Code2, Plug, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "Step 1",
    title: "Smart Analyzing",
    description: "We audit your workflows, uncover inefficiencies, and pinpoint high-ROI opportunities for AI automation.",
    visual: "progress"
  },
  {
    number: "Step 2",
    title: "AI Development",
    description: "Our engineers design and deploy tailored AI systems—agents, automations, and data pipelines—built around your needs.",
    visual: "code"
  },
  {
    number: "Step 3",
    title: "Plug In, Power Up",
    description: "We embed automation directly into your existing tech stack with zero disruption, ensuring everything works as one unified system.",
    visual: "integration"
  },
  {
    number: "Step 4",
    title: "Scale That Learns With You",
    description: "We monitor, refine, and evolve your automations—analyzing performance data to ensure long-term efficiency and compound growth.",
    visual: "checklist"
  }
];

export const Process = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wide text-white/70 mb-4">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Simple, Smart,<br />and Scalable Process
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 hover:border-white/20 transition-all duration-300"
            >
              {/* Step badge */}
              <div className="text-xs text-white/50 mb-3">{step.number}</div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{step.title}</h3>
              
              {/* Description */}
              <p className="text-white/70 mb-6 leading-relaxed">{step.description}</p>
              
              {/* Visual mockup */}
              <div className="mt-6">
                {step.visual === "progress" && <ProgressVisual />}
                {step.visual === "code" && <CodeVisual />}
                {step.visual === "integration" && <IntegrationVisual />}
                {step.visual === "checklist" && <ChecklistVisual />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Visual components for each step
const ProgressVisual = () => (
  <div className="space-y-4">
    <div className="text-sm text-white/50 mb-3">Analyzing current workflow...</div>
    <div className="space-y-3">
      {[
        { label: "System check", checked: true },
        { label: "Process check", checked: true },
        { label: "Speed check", checked: false },
        { label: "Manual work", checked: false },
        { label: "Repetitive task", checked: false }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-sm">
          <div className={`w-4 h-4 rounded border ${item.checked ? 'bg-violet-500 border-violet-500' : 'border-white/20'}`}>
            {item.checked && (
              <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className={item.checked ? 'text-white/90' : 'text-white/50'}>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const CodeVisual = () => (
  <div className="rounded-lg border border-white/10 bg-black/50 p-4 font-mono text-xs">
    <div className="flex items-center gap-2 mb-3 opacity-50">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
      </div>
    </div>
    <div className="space-y-1">
      <div className="text-violet-400">class <span className="text-white">AutomationTrigger</span>:</div>
      <div className="pl-4 text-white/70">def __init__(self, threshold):</div>
      <div className="pl-8 text-white/50">self.threshold = threshold</div>
      <div className="pl-8 text-white/50">self.status = "inactive"</div>
      <div className="mt-2"></div>
      <div className="pl-4 text-fuchsia-400">def <span className="text-white/90">check_trigger</span>(self, value):</div>
    </div>
  </div>
);

const IntegrationVisual = () => (
  <div className="flex items-center justify-around py-8">
    <div className="text-center space-y-2">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
        <Plug className="w-8 h-8 text-white" />
      </div>
      <div className="text-xs text-white/70">Our solution</div>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 mx-4" />
    <div className="text-center space-y-2">
      <div className="w-16 h-16 mx-auto rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1 p-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-sm bg-white/40" />
          ))}
        </div>
      </div>
      <div className="text-xs text-white/70">Your stack</div>
    </div>
  </div>
);

const ChecklistVisual = () => (
  <div className="space-y-3">
    {[
      { label: "Chatbot system", sublabel: "Efficiency will increase by 40%", icon: MessageSquare },
      { label: "Workflow system", sublabel: "Update available", icon: TrendingUp },
      { label: "Sales system", sublabel: "Up to date", icon: Code2 }
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5">
        <item.icon className="w-5 h-5 text-violet-400" />
        <div className="flex-1">
          <div className="text-sm font-medium text-white/90">{item.label}</div>
          <div className="text-xs text-white/50">{item.sublabel}</div>
        </div>
        <div className={`w-5 h-5 rounded flex items-center justify-center ${i === 2 ? 'bg-violet-500' : 'border border-white/20'}`}>
          {i === 2 && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {i === 1 && <TrendingUp className="w-3 h-3 text-white/40" />}
          {i === 0 && <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />}
        </div>
      </div>
    ))}
  </div>
);
