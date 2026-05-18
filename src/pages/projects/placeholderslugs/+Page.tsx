const relatedProjects = [
  { title: "I-65 Corridor Drainage Improvements", category: "Civil Engineering", image: "/excavation.jpg" },
  { title: "US-31 Interchange Reconstruction", category: "Construction Inspection", image: "/headpic2.webp" },
  { title: "Municipal Sewer Master Plan", category: "Civil Engineering", image: "/LS.jpg" },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "56vh" }}>
        <img src="/Levee.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--fgi-navy) 30%, rgba(27,42,107,0.5) 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a href="/projects/placeholderslug" style={{ color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Projects
          </a>

          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            <span className="px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>
              Civil Engineering
            </span>
            <span className="px-3 py-1 text-white/70 text-[10px] uppercase tracking-widest font-semibold border border-white/20">
              Terre Haute, IN
            </span>
          </div>

          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-4">
            Levee Rehabilitation<br /><span style={{ color: "var(--fgi-blue)" }}>Wabash River Basin</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Geotechnical and civil design for a 2.5-mile levee setback and reconstruction project in coordination with IDNR and local drainage districts.
          </p>
        </div>
      </section>

      {/* Project meta bar */}
      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Client", value: "Indiana DNR" },
            { label: "Contract Value", value: "$18.5M" },
            { label: "Duration", value: "24 Months" },
            { label: "Delivery", value: "Design-Bid-Build" },
          ].map((item) => (
            <div key={item.label} className="border-l-2 pl-4" style={{ borderColor: "var(--fgi-blue)" }}>
              <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white font-bold text-lg uppercase">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Project Overview</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-6">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The aging Wabash River levee system presented significant flood risk to thousands of downstream residents. Decades of erosion, insufficient freeboard, and outdated construction techniques had left the structure well below current FEMA certification standards.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              FGI was engaged to lead the geotechnical investigation, develop the 30%/60%/90% design package, coordinate with IDNR and USACE for permit approvals, and produce the final PS&E for competitive bid.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The project required careful phasing to maintain flood protection during construction, close coordination with local drainage district boards, and a right-of-way acquisition strategy that minimized impacts to adjacent agricultural properties.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "2.5 mi", label: "Levee Reconstructed" },
                { stat: "4 ft", label: "Freeboard Added" },
                { stat: "3,200+", label: "Properties Protected" },
              ].map((s) => (
                <div key={s.label} className="border-t-2 pt-4" style={{ borderColor: "var(--fgi-blue)" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold mb-1">{s.stat}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ backgroundColor: "#f4f6fb", borderTop: "3px solid var(--fgi-blue)" }} className="p-6 mb-6">
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-lg font-bold uppercase mb-4">FGI Scope</h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Geotechnical Investigation",
                  "Hydraulic & Hydrologic Analysis",
                  "30/60/90% PS&E Package",
                  "IDNR & USACE Permitting",
                  "Right-of-Way Engineering",
                  "Bid Support & Addenda",
                  "Construction Administration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--fgi-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: "var(--fgi-navy)" }} className="p-6">
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-sm uppercase tracking-widest mb-3">Agencies & Partners</h4>
              <ul className="flex flex-col gap-2 text-white/60 text-sm">
                <li>Indiana DNR</li>
                <li>US Army Corps of Engineers</li>
                <li>Vigo County Drainage Board</li>
                <li>FEMA Region 5</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery strip */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-3">
          {["/headpic1.webp", "/excavation.jpg", "/headpic3.webp"].map((src, i) => (
            <div key={i} className="relative h-48 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Related projects */}
      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">More Work</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <a key={p.title} href="/projects/placeholderslugs" className="group block border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>{p.category}</div>
                </div>
                <div className="p-5">
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-lg font-bold uppercase leading-tight mb-2">{p.title}</h3>
                  <span style={{ color: "var(--fgi-blue)" }} className="text-xs font-semibold uppercase tracking-wide group-hover:underline">View Project →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
