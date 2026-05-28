const capabilities = [
  {
    title: "Field Quality Assurance",
    description:
      "Continuous field-level oversight verifying that contractor work meets plans, specifications, and agency standards before it's covered or accepted.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Materials Testing Coordination",
    description:
      "Coordination of compaction, concrete, and materials testing with certified labs, ensuring every test is performed at the right time and properly documented.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Daily Documentation & Reporting",
    description:
      "Comprehensive daily inspection reports, photo documentation, quantity tracking, and nonconformance records, complete audit-ready files from day one.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Agency & Permit Compliance",
    description:
      "Monitoring compliance with INDOT, municipal, and regulatory permit conditions, submittals, notifications, and documentation handled on behalf of the owner.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Nonconformance Management",
    description:
      "Identification, documentation, and resolution tracking for deficient work, ensuring nothing is left unaddressed before project acceptance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Startup & Punch List",
    description:
      "Functional verification, punch list development, and final walkthrough support, thorough closeout documentation so there are no surprises at project acceptance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const specializations = [
  {
    label: "Transportation Infrastructure",
    description:
      "Roads, bridges, drainage, signals, and earthwork, field-level QA for transportation corridors from base prep through final striping.",
    href: "/services/construction-inspection/transportation",
  },
  {
    label: "Water Treatment Plants",
    description:
      "Specialized oversight for water and wastewater treatment facilities, civil, mechanical, electrical, and commissioning support.",
    href: "/services/construction-inspection/water-treatment-plants",
  },
];

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "52vh" }}>
        <img src="/headpic3.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--fgi-navy) 40%, transparent 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a href="/#services" style={{ color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Services
          </a>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mt-2 mb-4">
            Construction<br /><span style={{ color: "var(--fgi-blue)" }}>Inspection</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Rigorous field oversight for public infrastructure, keeping contractors accountable, agencies protected, and projects built to last.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Sectors", value: "Transportation · Water · Public Works" },
            { label: "Certifications", value: "INDOT Certified Inspectors" },
            { label: "Coverage", value: "Full-Time Resident & On-Call" },
          ].map((item) => (
            <div key={item.label} className="border-l-2 pl-4" style={{ borderColor: "var(--fgi-blue)" }}>
              <div className="text-white/50 text-xs uppercase tracking-widest mb-1">{item.label}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white font-bold text-lg uppercase">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">What We Do</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl md:text-5xl font-extrabold uppercase">Core Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-white p-8 hover:bg-slate-50 transition-colors">
                <div style={{ color: "var(--fgi-blue)" }} className="mb-4">{c.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-xl font-bold uppercase mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Specializations</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl md:text-5xl font-extrabold uppercase">Inspection by Sector</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializations.map((s) => (
              <a key={s.label} href={s.href} className="group block bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-2xl font-bold uppercase">{s.label}</h3>
                  <svg className="w-5 h-5 shrink-0 mt-1 transition-transform group-hover:translate-x-1" style={{ color: "var(--fgi-blue)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>
                <span style={{ color: "var(--fgi-blue)" }} className="text-sm font-semibold uppercase tracking-wide group-hover:underline">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy)" }} className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-64">
            <img src="/Levee.jpg" alt="" className="w-full h-full object-cover" style={{ minHeight: "320px" }} />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,18,50,0.3)" }} />
          </div>
          <div className="flex flex-col justify-center px-10 py-16 md:py-24">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-4">
              Need Inspection<br /><span style={{ color: "var(--fgi-blue)" }}>Coverage?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Whether you need a full-time resident engineer or targeted oversight at a critical milestone, FGI can mobilize quickly and integrate seamlessly with your project team.
            </p>
            <a href="/#contact" style={{ backgroundColor: "var(--fgi-blue)" }} className="inline-block self-start px-8 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity">
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
