const projects = [
  {
    title: "Runway 14-32 & Taxiway M Rehabilitation",
    category: "Aviation",
    client: "Indianapolis Airport Authority",
    value: "~3,000 tons/shift",
    description:
      "Construction inspection and quality assurance for FAA P-401 HMA paving and airfield lighting upgrades at Indianapolis International Airport, with paving performed inside overnight runway closures.",
    image: "/headpic1.webp",
    tags: ["Aviation", "FAA P-401 HMA", "Active Airfield"],
    href: "/projects/indianapolis-airport",
  },
  {
    title: "Taxiway G Rehabilitation",
    category: "Aviation",
    client: "Indianapolis Airport Authority",
    value: "Inspection & Materials Testing",
    description:
      "Construction inspection and materials testing for the 2020 rehabilitation of Taxiway G at Indianapolis International Airport, to FAA and airport authority standards.",
    image: "/headpic3.webp",
    tags: ["Aviation", "Taxiway", "Materials Testing"],
    href: "/projects/taxiway-g-rehab",
  },
  {
    title: "Hoosier Heartland Highway · SR 25",
    category: "Transportation",
    client: "INDOT",
    value: "Grade Separations",
    description:
      "Construction inspection along the SR 25 corridor near Tippecanoe and Carroll Counties, including grade-separation structures over the highway and the Norfolk Southern Railroad.",
    image: "/Levee.jpg",
    tags: ["Transportation", "Bridge", "INDOT"],
    href: "/projects/hoosier-heartland-highway",
  },
  {
    title: "SR 32 Improvements",
    category: "Transportation",
    client: "INDOT",
    value: "8 Structure Replacements",
    description:
      "Passing and auxiliary lanes, HMA overlay with minor structural work, access control, and eight small structure replacements on SR 32 between SR 75 and I-65.",
    image: "/headpic1.webp",
    tags: ["Transportation", "HMA Paving", "INDOT"],
    href: "/projects/sr-32-improvements",
  },
  {
    title: "New Palestine Roundabout",
    category: "Transportation",
    client: "INDOT",
    value: "Roundabout",
    description:
      "Construction inspection for a new roundabout intersection in New Palestine, Indiana, improving safety and traffic flow at a key local crossing.",
    image: "/headpic2.webp",
    tags: ["Transportation", "Roundabout", "INDOT"],
    href: "/projects/new-palestine-roundabout",
  },
  {
    title: "Bridgeport Interceptor Storage Facility",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "HDPE / Deep Excavation",
    description:
      "Construction inspection and contract administration for a major wet-weather storage facility, monitoring soldier pile and lagging support, large-diameter HDPE fusion welding, pressure testing, and leak detection.",
    image: "/bridgeport-interceptor-4.jpg",
    tags: ["Wastewater", "HDPE Pipe", "Deep Excavation"],
    href: "/projects/bridgeport-interceptor",
  },
  {
    title: "Lift Station 101 Force Main Replacement",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "Force Main Replacement",
    description:
      "Owner's representative for the replacement of an aging wastewater force main along Challenger Drive and Old Thompson Road, with daily inspection, contract administration, and full closeout, all while keeping service uninterrupted.",
    image: "/lift-station-101-1.jpg",
    tags: ["Wastewater", "Force Main", "Owner's Rep"],
    href: "/projects/lift-station-101",
  },
  {
    title: "New Belmont Ferrous Building",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$2,657,000",
    description:
      "Purpose-built chemical storage and feed facility for ferrous sulfate at the Belmont WWT Plant, replacing aging basement tanks with a corrosion-resistant, fully SCADA-integrated facility.",
    image: "/ferrous-building-1.jpg",
    tags: ["Water/Wastewater", "Chemical Feed", "New Construction"],
    href: "/projects/belmont-ferrous-building",
  },
  {
    title: "AWT Effluent Filter Improvement – Phase 1",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$4,875,000",
    description:
      "Phase 1 rehabilitation of tertiary sand filter systems at the Belmont and Southport WWTPs, VFD replacements, butterfly valve installations, and manual backup control panels integrated into plant SCADA.",
    image: "/effluent-filter-1.jpg",
    tags: ["Water/Wastewater", "Filter Rehab", "Multi-Plant"],
    href: "/projects/awt-effluent-filter",
  },
  {
    title: "AWT Solids Management Improvements",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$1,820,000",
    description:
      "Added a 6th centrifuge at the Belmont WWTP to restore true standby dewatering capacity and future-proof the facility against increasing solids loading.",
    image: "/headpic4.webp",
    tags: ["Water/Wastewater", "Dewatering", "Capacity Expansion"],
    href: "/projects/awt-solids-management",
  },
  {
    title: "Belmont & Southport ONS Wall Tie Replacement",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$9,264,000",
    description:
      "Replaced aging 1980s steel wall ties at aeration tanks and secondary clarifiers across two plants with new exterior support structures, completed ahead of schedule with zero safety incidents.",
    image: "/wall-tie-1.jpg",
    tags: ["Water/Wastewater", "Structural", "Multi-Plant"],
    href: "/projects/wall-tie-replacement",
  },
  {
    title: "Plantwide Filter Rehab – Phase 2",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$20,000,000",
    description:
      "The $20M second phase of the plantwide tertiary filter rehabilitation at the Belmont and Southport plants, modernizing the facilities' final filtration systems.",
    image: "/effluent-filter-2.jpg",
    tags: ["Water/Wastewater", "Filter Rehab", "Multi-Plant"],
    href: "/projects/effluent-filter-phase-2",
  },
  {
    title: "Primary Clarifiers 1-6 Rehabilitation",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$3,755,000",
    description:
      "Rehabilitation of six primary clarifiers at the Belmont plant, restoring aging mechanical and structural components to extend the service life of primary treatment.",
    image: "/headpic4.webp",
    tags: ["Water/Wastewater", "Clarifiers", "Rehab"],
    href: "/projects/primary-clarifiers-1-6",
  },
  {
    title: "Cake Pump 1-4 Replacement",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$3,622,000",
    description:
      "Replacement of four cake pumps in the Belmont plant's dewatering process, renewing critical solids-handling equipment with minimal impact to operations.",
    image: "/Launch-Shaft.jpg",
    tags: ["Water/Wastewater", "Dewatering", "Mechanical"],
    href: "/projects/cake-pump-replacement",
  },
  {
    title: "Primary Clarifiers 7&8 Rehabilitation",
    category: "Wastewater",
    client: "Citizens Energy Group",
    value: "$2,205,000",
    description:
      "Rehabilitation of two additional primary clarifiers at the Belmont plant, continuing the restoration of aging primary treatment infrastructure.",
    image: "/headpic2.webp",
    tags: ["Water/Wastewater", "Clarifiers", "Rehab"],
    href: "/projects/primary-clarifiers-7-8",
  },
];

const categories = ["All", "Aviation", "Wastewater", "Transportation"];

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
            A selection of construction inspection and contract administration work delivered for public infrastructure clients across Indiana.
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
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,18,50,0.6) 0%, transparent 60%)" }} />
                <div className="absolute top-3 left-3 px-3 py-1 text-white text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--fgi-blue)" }}>
                  {p.category}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    {p.client}
                  </div>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-sm font-bold">{p.value}</span>
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
