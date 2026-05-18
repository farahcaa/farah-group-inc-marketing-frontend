const scope = [
  {
    title: "Roadway & Pavement",
    description: "Inspection of base preparation, asphalt paving, concrete flatwork, and surface treatments to INDOT and local agency specifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Bridge & Structure",
    description: "Structural inspection during bridge construction, retrofit, and rehabilitation — deck pours, falsework, post-tensioning, and bearing installations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Drainage & Underground",
    description: "Trench safety, pipe bedding, culvert installation, and inlet/outlet structure inspection — verifying line, grade, and material compliance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Traffic Management",
    description: "Traffic control plan review, lane closure coordination, and inspection of signing, striping, signal, and detector installations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Earthwork & Grading",
    description: "Compaction testing coordination, cut/fill documentation, and slope stability monitoring on large-scale grading operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Documentation & Reporting",
    description: "Daily inspection reports, quantity tracking, photo logs, and nonconformance documentation — complete audit-ready records for every project.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const standards = [
  "INDOT Standard Specifications",
  "Local Agency Standards & Plans",
  "AASHTO Construction Guidelines",
  "ADA & Accessibility Requirements",
  "NPDES & Stormwater Compliance",
  "OSHA Safety Standards",
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
            Construction Inspection
          </a>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mt-2 mb-4">
            Transportation<br /><span style={{ color: "var(--fgi-blue)" }}>Inspection</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Field-level quality assurance for roads, bridges, and transportation infrastructure — keeping contractors accountable and agencies protected.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Project Types", value: "Roads · Bridges · Signals · Drainage" },
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
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Inspection Scope</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl md:text-5xl font-extrabold uppercase">What We Inspect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {scope.map((s) => (
              <div key={s.title} className="bg-white p-8 hover:bg-slate-50 transition-colors">
                <div style={{ color: "var(--fgi-blue)" }} className="mb-4">{s.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-xl font-bold uppercase mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Compliance Framework</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-8">Standards We Work To</h2>
            <ul className="flex flex-col gap-3">
              {standards.map((s) => (
                <li key={s} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--fgi-blue)" }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src="/headpic2.webp" alt="" className="w-full h-80 object-cover" />
            <div className="absolute -bottom-4 -left-4 px-6 py-4 shadow-lg" style={{ backgroundColor: "var(--fgi-navy)" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest mb-1">Our Commitment</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white font-bold text-lg uppercase">Zero Defects at Closeout</div>
            </div>
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
              Need a Resident<br /><span style={{ color: "var(--fgi-blue)" }}>Engineer?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Whether you need full-time inspection coverage or targeted oversight at a critical milestone, FGI can mobilize quickly and integrate with your project team.
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
