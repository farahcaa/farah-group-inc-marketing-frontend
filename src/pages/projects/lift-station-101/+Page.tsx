const relatedProjects = [
  { title: "Bridgeport Interceptor Storage Facility", category: "Wastewater", value: "Citizens Energy Group", image: "/bridgeport-interceptor-4.jpg", href: "/projects/bridgeport-interceptor" },
  { title: "AWT Solids Management Improvements", category: "Wastewater", value: "$1,820,000", image: "/headpic4.webp", href: "/projects/awt-solids-management" },
  { title: "Belmont & Southport ONS Wall Tie Replacement", category: "Wastewater", value: "$9,264,000", image: "/wall-tie-1.jpg", href: "/projects/wall-tie-replacement" },
];

const gallery = ["/LS.jpg", "/Launch-Shaft.jpg", "/excavation.jpg"];

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "56vh" }}>
        <img src="/lift-station-101-1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
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
            Lift Station 101<br /><span style={{ color: "var(--fgi-blue)" }}>Force Main Replacement</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Construction inspection and contract administration for the replacement of an aging wastewater force main, modernizing critical infrastructure while keeping wastewater service uninterrupted.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Client", value: "Citizens Energy Group" },
            { label: "Location", value: "Challenger Dr & Old Thompson Rd" },
            { label: "Scope", value: "Force Main Replacement" },
            { label: "FGI Role", value: "Owner's Representative" },
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
              Farah &amp; Sons, Inc. provided construction inspection and contract administration services for the Lift Station 101 Force Main Replacement Project for Citizens Energy Group. The project replaced an aging wastewater force main along Challenger Drive and Old Thompson Road, improving the reliability and long-term performance of critical infrastructure serving the surrounding area. The work required careful coordination to maintain uninterrupted wastewater operations while new facilities were constructed and connected to the existing system.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our team served as the owner's representative in the field, performing daily construction inspections, monitoring contractor activities, verifying compliance with project plans and specifications, and documenting construction progress. Responsibilities included maintaining daily field reports, reviewing shop drawings, monitoring schedules, tracking quantities, reviewing pay applications, coordinating progress meetings, and facilitating communication between Citizens Energy Group, the contractor, and the design engineer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Additional services included material certification review, observation of testing activities, maintenance of record drawings, review of independent testing results, processing change orders and additional work authorizations, and assisting with project closeout. Throughout construction, Farah &amp; Sons helped ensure that quality, safety, and operational requirements were maintained while minimizing impacts to existing lift station operations and wastewater service.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "Daily", label: "Field Inspection & Reports" },
                { stat: "Zero", label: "Interruption to Service" },
                { stat: "Full", label: "Closeout Documentation" },
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
                  "Daily construction inspection",
                  "Owner's representative in the field",
                  "Shop drawing review",
                  "Schedule & quantity tracking",
                  "Pay application review",
                  "Progress meeting coordination",
                  "Material certification review",
                  "Change order processing",
                  "Record drawings & closeout",
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
                <li>Aging wastewater force main replaced</li>
                <li>Challenger Drive &amp; Old Thompson Road</li>
                <li>Uninterrupted wastewater service maintained</li>
                <li>Coordination with owner, contractor &amp; engineer</li>
                <li>Modernized force main for decades of service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-3">
          {gallery.map((src, i) => (
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
