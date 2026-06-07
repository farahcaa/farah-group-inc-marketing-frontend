const relatedProjects = [
  { title: "AWT Effluent Filter Improvement – Phase 1", category: "Wastewater", value: "$4,875,000", image: "/effluent-filter-1.jpg", href: "/projects/awt-effluent-filter" },
  { title: "AWT Solids Management Improvements", category: "Wastewater", value: "$1,820,000", image: "/headpic4.webp", href: "/projects/awt-solids-management" },
  { title: "Belmont & Southport ONS Wall Tie Replacement", category: "Wastewater", value: "$9,264,000", image: "/wall-tie-1.jpg", href: "/projects/wall-tie-replacement" },
];

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "56vh" }}>
        <img src="/ferrous-building-1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--fgi-navy) 30%, rgba(27,42,107,0.5) 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a href="/projects" style={{ color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Projects
          </a>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            <span className="px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>
              Wastewater
            </span>
            <span className="px-3 py-1 text-white/70 text-[10px] uppercase tracking-widest font-semibold border border-white/20">
              Citizens Energy Group
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-4">
            New Belmont<br /><span style={{ color: "var(--fgi-blue)" }}>Ferrous Building</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            A purpose-built chemical storage and feed facility for ferrous sulfate, designed to handle one of the most corrosive chemicals in wastewater treatment and fully integrated into plant SCADA.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Client", value: "Citizens Energy Group" },
            { label: "Contract Value", value: "$2,657,000" },
            { label: "Project #", value: "92BE04546" },
            { label: "Operational", value: "Spring 2023" },
          ].map((item) => (
            <div key={item.label} className="border-l-2 pl-4" style={{ borderColor: "var(--fgi-blue)" }}>
              <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white font-bold text-lg uppercase">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Project Overview</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-6">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The existing ferrous sulfate (pickle liquor) storage and feed system was located in the basement of another building, creating serious access limitations, accelerating corrosion on adjacent equipment, and reaching the end of its useful life. A purpose-built replacement was needed that could safely handle the highly corrosive nature of the chemical without compromising surrounding systems.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The new facility was designed specifically for ferrous sulfate service, with a high-performance coating system applied throughout the chemical contact spaces. Electrical, controls, and HVAC systems were placed in separate, isolated rooms to protect them from the corrosive environment. An observation window allows operators to monitor the process without entering the chemical space.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The building was fully integrated into the plant's SCADA system for remote monitoring and control. Tank volumes were increased to meet current demand, with capacity to add additional storage in the future. A roof access panel was designed so individual tanks can be removed and replaced without any demolition, an important long-term maintainability feature. Construction began in 2022 and the facility was operational by spring 2023.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "2022–2023", label: "Construction Period" },
                { stat: "100%", label: "SCADA Integrated" },
                { stat: "3", label: "Isolated System Zones" },
              ].map((s) => (
                <div key={s.label} className="border-t-2 pt-4" style={{ borderColor: "var(--fgi-blue)" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold mb-1">{s.stat}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ backgroundColor: "#f4f6fb", borderTop: "3px solid var(--fgi-blue)" }} className="p-6 mb-6">
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-lg font-bold uppercase mb-4">FGI Scope</h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Facility design & engineering",
                  "Chemical feed system design",
                  "High-performance coating specification",
                  "Electrical & HVAC isolation design",
                  "Operator observation area design",
                  "SCADA integration design",
                  "Construction oversight & inspection",
                  "Commissioning support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--fgi-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: "var(--fgi-navy)" }} className="p-6">
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-sm uppercase tracking-widest mb-3">Key Details</h4>
              <ul className="flex flex-col gap-2 text-white/60 text-sm">
                <li>Chemical: Ferrous Sulfate (Pickle Liquor)</li>
                <li>Use: Sludge conditioning, odor &amp; phosphorus control</li>
                <li>Location: Belmont WWT Plant</li>
                <li>Roof panel for future tank access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-3">
          {["/Launch-Shaft.jpg", "/LS.jpg", "/headpic3.webp"].map((src, i) => (
            <div key={i} className="relative h-48 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">More Work</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <a key={p.title} href={p.href} className="group block border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>{p.category}</div>
                </div>
                <div className="p-5">
                  <div style={{ color: "var(--fgi-navy)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs font-bold uppercase tracking-wide mb-1">{p.value}</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-lg font-bold uppercase leading-tight mb-2">{p.title}</h3>
                  <span style={{ color: "var(--fgi-blue)" }} className="text-xs font-semibold uppercase tracking-wide group-hover:underline">View Project →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy)" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-3xl font-extrabold text-white uppercase mb-1">Have a Similar Challenge?</h2>
            <p className="text-white/40 text-sm">Let's talk about how FGI can deliver on your project.</p>
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
