const scope = [
  {
    title: "FAA P-401 HMA Paving",
    description: "Inspection and density verification of FAA P-401 hot mix asphalt, mat thickness, smoothness, and joint quality across runway and taxiway placements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance Testing",
    description: "Oversight of contractor and independent QA/QC testing, core sampling, and acceptance testing against stringent FAA performance, density, and smoothness criteria.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Airfield Lighting & Electrical",
    description: "Inspection of airfield lighting upgrades, edge and centerline fixtures, base cans, and electrical infrastructure to FAA advisory circular standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Overnight Closure Coordination",
    description: "On-site inspection during overnight runway closures, coordinating between the contractor, airport operations, and air traffic control so work fits tight closure windows.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quantity Verification",
    description: "Independent verification of placed quantities, tonnage tracking, and pay-item documentation supporting accurate contractor pay applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "FAA & Authority Compliance",
    description: "Compliance verification with FAA standards and airport authority requirements, documentation and construction administration on behalf of the owner.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "52vh" }}>
        <img src="/headpic1.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--fgi-navy) 40%, transparent 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a href="/services/construction-inspection" style={{ color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Construction Inspection
          </a>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mt-2 mb-4">
            Aviation<br /><span style={{ color: "var(--fgi-blue)" }}>Inspection</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Construction inspection and quality assurance for active airfields, where work happens inside overnight closure windows and FAA standards leave no margin for error.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Facility Types", value: "Runways · Taxiways · Aprons" },
            { label: "Standards", value: "FAA P-401 · Airport Authority" },
            { label: "Delivery", value: "Overnight Closures · Active Airfields" },
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

      {/* Why it matters callout */}
      <section style={{ backgroundColor: "var(--fgi-navy)" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Why It Matters</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl font-extrabold text-white uppercase mb-6">
              The Runway Reopens at Dawn
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              On an active commercial airfield, major paving happens during overnight runway closures while air traffic control operations are suspended. A single shift can place thousands of tons of FAA P-401 asphalt over an eleven- to twelve-hour window, and the runway has to be back in service by morning.
            </p>
            <p className="text-white/60 leading-relaxed">
              That demands inspection staff who can verify density, smoothness, and quality in real time and coordinate seamlessly with the contractor, airport operations, and air traffic control, because there is no second shift to fix what the first one missed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "~3,000", label: "Tons Placed in a Single Shift" },
              { stat: "11–12 hr", label: "Overnight Closure Window" },
              { stat: "FAA P-401", label: "Pavement Standard" },
              { stat: "Zero", label: "Margin for Error" },
            ].map((item) => (
              <div key={item.label} className="p-6 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-3xl font-extrabold mb-1">{item.stat}</div>
                <div className="text-white/50 text-xs uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-2">
              Have an Airfield Project?
            </h2>
            <p className="text-gray-500 text-sm">Let's talk about how FGI can provide the inspection coverage your runway demands.</p>
          </div>
          <a href="/#contact" style={{ backgroundColor: "var(--fgi-blue)" }} className="shrink-0 px-10 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Page;
