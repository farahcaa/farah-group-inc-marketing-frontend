const relatedProjects = [
  { title: "New Belmont Ferrous Building", category: "Construction Management", value: "$2,657,000", image: "/headpic4.webp", href: "/projects/belmont-ferrous-building" },
  { title: "AWT Effluent Filter Improvement – Phase 1", category: "Construction Inspection", value: "$4,875,000", image: "/headpic3.webp", href: "/projects/awt-effluent-filter" },
  { title: "AWT Solids Management Improvements", category: "Construction Management", value: "$1,820,000", image: "/LS.jpg", href: "/projects/awt-solids-management" },
];

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "56vh" }}>
        <img src="/headpic2.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--fgi-navy) 30%, rgba(27,42,107,0.5) 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a href="/projects" style={{ color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Projects
          </a>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            <span className="px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>
              Construction Inspection
            </span>
            <span className="px-3 py-1 text-white/70 text-[10px] uppercase tracking-widest font-semibold border border-white/20">
              Citizens Energy Group
            </span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-4">
            ONS Wall Tie<br /><span style={{ color: "var(--fgi-blue)" }}>Replacement</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Replacement of aging 1980s-era steel wall ties at the Belmont and Southport Advanced Water Treatment plants, completed ahead of schedule, within budget, with zero safety incidents.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Client", value: "Citizens Energy Group" },
            { label: "Contract Value", value: "$9,264,000" },
            { label: "Project #", value: "92BE03109" },
            { label: "Change Orders", value: "< 2%" },
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
              The aeration tanks and secondary clarifiers at both the Belmont and Southport Advanced Water Treatment plants date to the early 1980s. The original interior steel wall ties, installed to resist hydrostatic pressure on the exterior channel walls, had reached the end of their service life. Simply replacing like-for-like would have reproduced the same access and maintenance limitations for another 40 years.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The solution replaced all aging internal steel ties with new exterior support structures that are far more accessible for future inspection and maintenance. At the Belmont Aeration Channel, 189 wide-flange coated beams were installed. At the Belmont Clarifier Channel, 142 driven piles at an average depth of 30 feet were installed with concrete caps placed at 8-foot spacing. At the Southport Aeration Channel, approximately 174 wide-flange coated beams were installed at 5-foot spacing. The Southport Clarifier Channel received a combination of straight and knee piles totaling 136 driven piles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Both plants also received crack and joint repairs, deck access ramp replacements, loading dock modifications, and exterior stair replacements as part of the broader rehabilitation. The project was completed ahead of schedule and within budget, with less than 2% change orders, zero safety incidents, and zero damage to any adjacent structures.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "600+", label: "Structural Members Installed" },
                { stat: "< 2%", label: "Change Orders" },
                { stat: "0", label: "Safety Incidents" },
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
                  "Full-time construction inspection",
                  "Pile driving oversight & documentation",
                  "Structural beam installation inspection",
                  "Concrete cap inspection",
                  "Crack & joint repair inspection",
                  "Safety compliance monitoring",
                  "Daily inspection reports",
                  "Punch list & project closeout",
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
                <li>Belmont: 189 WF beams + 142 driven piles</li>
                <li>Southport: ~174 WF beams + 136 driven piles</li>
                <li>Avg pile depth: 30 ft at Belmont</li>
                <li>Completed ahead of schedule</li>
                <li>Zero damage to adjacent structures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-3">
          {["/headpic1.webp", "/excavation.jpg", "/headpic3.webp"].map((src, i) => (
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
