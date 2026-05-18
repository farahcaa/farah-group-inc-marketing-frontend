const capabilities = [
  {
    title: "Roadway & Highway Design",
    description:
      "Geometric design, alignment studies, and construction documents for arterial roads, interchanges, and local street improvements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Drainage & Hydrology",
    description:
      "Stormwater management systems, culvert sizing, channel design, and FEMA floodplain analysis for compliant, resilient infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Grading & Earthwork",
    description:
      "Mass grading plans, cut-and-fill optimization, and erosion control design for large-scale site development and public works projects.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Utility Infrastructure",
    description:
      "Water, sewer, and dry utility design and coordination — from preliminary engineering through permit-ready construction plans.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Structural Engineering",
    description:
      "Bridge assessments, retaining walls, drainage structures, and miscellaneous civil structures designed to INDOT and local agency standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Environmental Compliance",
    description:
      "CEQA/NEPA support, biological assessments, and permitting coordination to keep projects on schedule with regulatory agencies.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "Feasibility & Scoping", body: "We assess site constraints, agency requirements, and project goals before a single line is drawn." },
  { step: "02", title: "Preliminary Engineering", body: "Concept-level plans, cost estimates, and alignment studies to validate the approach." },
  { step: "03", title: "PS&E Production", body: "Full Plans, Specifications & Estimates packages prepared to agency and INDOT standards." },
  { step: "04", title: "Permitting & Agency Coordination", body: "We manage submittals, respond to comments, and shepherd approvals through to construction authorization." },
  { step: "05", title: "Construction Support", body: "RFI responses, field change orders, and as-built documentation through project closeout." },
];

const Page = () => {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--fgi-navy)", minHeight: "52vh" }}
      >
        <img
          src="/excavation.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--fgi-navy) 40%, transparent 100%)",
          }}
        />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a
            href="/#services"
            style={{ color: "var(--fgi-blue)" }}
            className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Services
          </a>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mt-2 mb-4"
          >
            Civil
            <br />
            <span style={{ color: "var(--fgi-blue)" }}>Engineering</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            From concept to construction documents — precise civil engineering delivered on schedule
            and built to last.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Deliverable Types", value: "PS&E · Feasibility · As-Builts" },
            { label: "Standards", value: "INDOT · Local Agency · ASCE" },
            { label: "Project Scale", value: "Small Site Improvements to Major Corridors" },
          ].map((item) => (
            <div key={item.label} className="border-l-2 pl-4" style={{ borderColor: "var(--fgi-blue)" }}>
              <div className="text-white/50 text-xs uppercase tracking-widest mb-1">{item.label}</div>
              <div
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-white font-bold text-lg uppercase"
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div
              style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
            >
              What We Deliver
            </div>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }}
              className="text-4xl md:text-5xl font-extrabold uppercase"
            >
              Core Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white p-8 group hover:bg-slate-50 transition-colors">
                <div style={{ color: "var(--fgi-blue)" }} className="mb-4">
                  {cap.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }}
                  className="text-xl font-bold uppercase mb-3"
                >
                  {cap.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div
              style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
            >
              How We Work
            </div>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }}
              className="text-4xl md:text-5xl font-extrabold uppercase"
            >
              Our Process
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="flex gap-8 items-start py-8 border-b border-gray-200 last:border-0"
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "var(--fgi-blue)",
                    minWidth: "3rem",
                  }}
                  className="text-5xl font-extrabold leading-none opacity-30 select-none"
                >
                  {p.step}
                </div>
                <div className="pt-1">
                  <h3
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }}
                    className="text-2xl font-bold uppercase mb-2"
                  >
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + CTA split */}
      <section style={{ backgroundColor: "var(--fgi-navy)" }} className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-64 md:min-h-auto">
            <img src="/Levee.jpg" alt="" className="w-full h-full object-cover" style={{ minHeight: "360px" }} />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,18,50,0.3)" }} />
          </div>

          <div className="flex flex-col justify-center px-10 py-16 md:py-24">
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-4"
            >
              Bring Us Your
              <br />
              <span style={{ color: "var(--fgi-blue)" }}>Next Project</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Whether you need a full PS&E package or targeted engineering support, FGI has the depth
              to deliver on time and on budget.
            </p>
            <a
              href="/#contact"
              style={{ backgroundColor: "var(--fgi-blue)" }}
              className="inline-block self-start px-8 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
