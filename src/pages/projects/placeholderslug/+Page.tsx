const projects = [
  {
    title: "I-65 Corridor Drainage Improvements",
    category: "Civil Engineering",
    location: "Central Indiana",
    description: "Hydraulic analysis and PS&E for a 4-mile drainage rehabilitation along a major state highway, including culvert replacements and channel lining.",
    image: "/excavation.jpg",
    tags: ["INDOT", "Drainage", "PS&E"],
    href: "/projects/placeholderslugs",
  },
  {
    title: "Regional Water Treatment Expansion",
    category: "Construction Inspection",
    location: "Northern Indiana",
    description: "Resident engineering and inspection services for a $42M plant expansion, covering civil, mechanical, and electrical scopes through commissioning.",
    image: "/headpic1.webp",
    tags: ["Water Treatment", "Resident Engineer", "Multi-Discipline"],
    href: "/projects/placeholderslugs",
  },
  {
    title: "Levee Rehabilitation — Wabash River Basin",
    category: "Civil Engineering",
    location: "Terre Haute, IN",
    description: "Geotechnical and civil design for a 2.5-mile levee setback and reconstruction project in coordination with IDNR and local drainage districts.",
    image: "/Levee.jpg",
    tags: ["IDNR", "Levee", "Geotechnical"],
    href: "/projects/placeholderslugs",
  },
  {
    title: "Transit Center Construction Management",
    category: "Project Management",
    location: "Indianapolis Metro, IN",
    description: "Owner's representative services for a multi-modal transit center, managing design-build procurement, contractor coordination, and agency approvals.",
    image: "/Launch-Shaft.jpg",
    tags: ["Transit", "Design-Build", "Owner's Rep"],
    href: "/projects/placeholderslugs",
  },
  {
    title: "US-31 Interchange Reconstruction",
    category: "Construction Inspection",
    location: "Hamilton County, IN",
    description: "Full-time transportation inspection on a $28M interchange reconstruction including bridge work, retaining walls, and signal upgrades.",
    image: "/headpic2.webp",
    tags: ["INDOT", "Bridge", "Transportation"],
    href: "/projects/placeholderslugs",
  },
  {
    title: "Municipal Sewer Master Plan",
    category: "Civil Engineering",
    location: "South Bend, IN",
    description: "Comprehensive sewer system master plan including hydraulic modeling, CIP prioritization, and grant-ready cost estimates for a mid-size municipality.",
    image: "/LS.jpg",
    tags: ["Sewer", "Master Plan", "Municipal"],
    href: "/projects/placeholderslugs",
  },
];

const categories = ["All", "Civil Engineering", "Construction Inspection", "Project Management"];

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "44vh" }}>
        <img src="/headpic1.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--fgi-navy) 0%, rgba(27,42,107,0.85) 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Work
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-4">
            Featured<br /><span style={{ color: "var(--fgi-blue)" }}>Projects</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            A selection of civil engineering, inspection, and program management work delivered across Indiana.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-3 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <span
              key={cat}
              className="shrink-0 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold cursor-pointer transition-colors"
              style={cat === "All"
                ? { backgroundColor: "var(--fgi-blue)", color: "white" }
                : { color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-52 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,18,50,0.6) 0%, transparent 60%)" }} />
                <div className="absolute top-3 left-3 px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>
                  {p.category}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide mb-3">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {p.location}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-xl font-bold uppercase mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wide font-semibold text-gray-500 bg-gray-100">{tag}</span>
                    ))}
                  </div>
                  <span style={{ color: "var(--fgi-blue)" }} className="text-xs font-semibold uppercase tracking-wide group-hover:underline shrink-0 ml-2">
                    View →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-3xl font-extrabold text-white uppercase mb-1">
              Ready to Add Your Project to the List?
            </h2>
            <p className="text-white/40 text-sm">Let's discuss what FGI can do for your next infrastructure challenge.</p>
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
