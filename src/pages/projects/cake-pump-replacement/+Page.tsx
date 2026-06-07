const relatedProjects = [
  { title: "AWT Solids Management Improvements", category: "Wastewater", value: "$1,820,000", image: "/headpic4.webp", href: "/projects/awt-solids-management" },
  { title: "Primary Clarifiers 1-6 Rehabilitation", category: "Wastewater", value: "$3,755,000", image: "/headpic4.webp", href: "/projects/primary-clarifiers-1-6" },
  { title: "New Belmont Ferrous Building", category: "Wastewater", value: "$2,657,000", image: "/ferrous-building-1.jpg", href: "/projects/belmont-ferrous-building" },
];

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "56vh" }}>
        <img src="/Launch-Shaft.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--fgi-navy) 30%, rgba(27,42,107,0.5) 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a href="/projects" style={{ color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Projects
          </a>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            <span className="px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>Wastewater</span>
            <span className="px-3 py-1 text-white/70 text-[10px] uppercase tracking-widest font-semibold border border-white/20">Citizens Energy Group</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-4">
            Cake Pump 1-4<br /><span style={{ color: "var(--fgi-blue)" }}>Replacement</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Replacement of four aging sludge cake pumps plus wide-ranging safety, reliability, and operational upgrades across the Belmont plant's dewatering and truck loading facilities.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Client", value: "Citizens Energy Group" },
            { label: "Contract Value", value: "$3,622,000" },
            { label: "Project #", value: "92BE03167" },
            { label: "Facility", value: "Belmont · Dewatering" },
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
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-6">The Work</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Farah Group Inc. provided construction inspection services for the Cake Pump 1-4 Replacement project at the Belmont Advanced Wastewater Treatment Plant in Indianapolis. This critical project upgraded the facility's solids handling system by replacing four aging sludge cake pumps and implementing numerous operational, safety, and reliability improvements throughout the dewatering and truck loading facilities, all while maintaining uninterrupted sludge processing and disposal at one of the region's largest wastewater treatment plants.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As the project evolved, the scope expanded well beyond simple pump replacement, adding upgraded hydraulic power units, slip water pumping systems, reinforced high-pressure piping restraints, local electrical disconnects, enhanced process controls, sludge bin monitoring cameras, valve position monitoring, truck loading facility lighting and ventilation improvements, and centrifuge crane modifications, designed to improve operator safety, increase equipment reliability, and accommodate the higher sludge solids produced by the plant's centrifuge dewatering process.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Farah &amp; Sons' responsibilities included daily construction observation, quality assurance documentation, coordination between Citizens Energy Group, engineers, and contractors, verification of contract compliance, review of testing and commissioning activities, and documentation of progress, helping keep critical wastewater operations functional throughout construction while minimizing disruptions and delivering a successful upgrade to a key component of the plant's solids handling infrastructure.
            </p>
          </div>

          <div>
            <div style={{ backgroundColor: "#f4f6fb", borderTop: "3px solid var(--fgi-blue)" }} className="p-6 mb-6">
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-lg font-bold uppercase mb-4">FGI Scope</h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Daily construction observation",
                  "Quality assurance documentation",
                  "Owner / engineer / contractor coordination",
                  "Contract compliance verification",
                  "Testing & commissioning review",
                  "Mechanical, piping & electrical inspection",
                  "Progress documentation",
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
                <li>Four sludge cake pumps replaced</li>
                <li>Hydraulic power units &amp; slip water systems</li>
                <li>Sludge bin cameras &amp; valve monitoring</li>
                <li>Truck loading lighting &amp; ventilation</li>
                <li>Project No. 92BE03167</li>
              </ul>
            </div>
          </div>
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
          <a href="/#contact" style={{ backgroundColor: "var(--fgi-blue)" }} className="shrink-0 px-10 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity">Get in Touch</a>
        </div>
      </section>
    </>
  );
};

export default Page;
