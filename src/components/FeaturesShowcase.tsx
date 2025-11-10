export default function ServicesLayout() {
  const services = [
    {
      badge: "Workflow Automation",
      title: "Automate repetitive tasks",
      desc: "We help you eliminate manual ops with automations that unify your tools and data, reduce errors, and speed up client delivery.",
      tags: ["Internal ops", "Data sync", "RPA/AI"],
      ctas: ["Book a call", "View automations"],
      dark: true,
    },
    {
      badge: "AI Assistants",
      title: "AI Voice Agents",
      desc: "From inbound call routing to outbound outreach and smart scheduling, our AI voice agents handle the chores so your team can focus on impact.",
      tags: ["Phone", "Scheduling", "Help desk"],
      ctas: ["Hear a demo", "How it works"],
    },
    {
      badge: "Sales & Marketing",
      title: "Accelerate Sales Growth",
      desc: "Lead gen copilots, personalized outreach, and automated content creation that matches your brand while boosting pipeline.",
      tags: ["Leads", "Outbound", "Scalable"],
      ctas: ["Get a playbook", "See results"],
      dark: true,
    },
    {
      badge: "Custom Projects",
      title: "Build Smarter Systems",
      desc: "Whether you're starting from scratch or extending an existing system, we design robust AI products and data pipelines that scale.",
      tags: ["Scoping", "DAO", "Consulting"],
      ctas: ["Start a project", "Talk to engineering"],
    },
    {
      badge: "Data & Analytics",
      title: "Dashboards that drive decisions",
      desc: "Live KPI boards, forecasting, and next-best-action recommendations—so teams act, not guess.",
      tags: ["Forecasting", "Cohorts", "Anomaly alerts"],
      ctas: ["See dashboards", "Pricing"],
      dark: true,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-1 w-1 rounded-full bg-white/40" />
          Our Services
        </div>
        <h1 className="text-center text-4xl font-bold tracking-tight md:text-6xl">
          Dashboards & Decision
          <br className="hidden md:block" /> Intelligence
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Live KPI boards, forecasts, and next-best actions—so teams act, not guess.
        </p>
      </section>

      {/* Services list */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 md:gap-16">
        {services.map((s, idx) => (
          <ServiceRow key={idx} service={s} reverse={idx % 2 === 1} />
        ))}
      </section>
    </div>
  );
}

function ServiceRow({ service, reverse = false }) {
  return (
    <div className={`grid items-center gap-8 md:grid-cols-2 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
      {/* Text card */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wide text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          {service.badge}
        </div>
        <h3 className="text-2xl font-semibold md:text-3xl">{service.title}</h3>
        <p className="mt-2 max-w-md text-white/70">{service.desc}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#"
            className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90"
          >
            {service.ctas[0]}
          </a>
          <a
            href="#"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            {service.ctas[1]}
          </a>
        </div>
      </div>

      {/* Visual mockup */}
      <div>
        <MockWindow dark={service.dark} />
      </div>
    </div>
  );
}

function MockWindow({ dark = false }) {
  return (
    <div
      className={`relative rounded-2xl border p-5 shadow-2xl transition ${
        dark ? "border-white/10 bg-gradient-to-b from-white/5 to-transparent" : "border-white/10 bg-white/5"
      }`}
    >
      {/* glow ring */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 blur-2xl"></div>

      <div className="relative space-y-3">
        <div className="flex items-center gap-2 opacity-80">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="ml-auto h-2 w-24 rounded bg-white/10" />
        </div>

        {/* Faux app surface */}
        <div className="rounded-xl border border-white/10 bg-black/50 p-4">
          <div className="mb-3 h-8 rounded-md bg-white/10"></div>

          <div className="grid grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-24 rounded-lg border border-white/10 bg-white/5" />
            ))}
          </div>

          <div className="mt-4 h-10 rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  );
}
