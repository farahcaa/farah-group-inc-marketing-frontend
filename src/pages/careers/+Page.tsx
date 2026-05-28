const openings = [
  {
    title: "Senior Civil Engineer",
    type: "Full-Time",
    location: "Indianapolis, IN",
    description: "Lead design on roadway, drainage, and site development projects. PS&E experience required. PE license preferred.",
    requirements: ["B.S. Civil Engineering", "5+ years design experience", "AutoCAD / Civil 3D proficiency", "PE license or EIT working toward PE"],
  },
  {
    title: "Construction Inspector (Transportation)",
    type: "Full-Time",
    location: "Statewide, IN",
    description: "Perform field inspection on INDOT and local agency transportation projects. Roadway, bridge, and drainage experience strongly preferred.",
    requirements: ["3+ years field inspection experience", "INDOT certification a plus", "Ability to work outdoors in all conditions", "Valid driver's license"],
  },
  {
    title: "Project Manager",
    type: "Full-Time",
    location: "Indianapolis, IN",
    description: "Manage civil engineering and inspection projects from kickoff through closeout. Client-facing role requiring strong communication and schedule management skills.",
    requirements: ["B.S. Engineering or related field", "5+ years project management experience", "Experience with public agency clients", "PMP or PE preferred"],
  },
  {
    title: "Water / Wastewater Inspector",
    type: "Full-Time",
    location: "Statewide, IN",
    description: "Specialized inspection of water and wastewater treatment facility construction. Multi-discipline exposure to civil, mechanical, and electrical scopes.",
    requirements: ["3+ years treatment plant inspection", "Familiarity with IDEM requirements", "Experience with commissioning support", "Strong documentation skills"],
  },
  {
    title: "CAD / Design Technician",
    type: "Full-Time",
    location: "Indianapolis, IN",
    description: "Support engineering staff with plan production, drafting, and quantity calculations for civil infrastructure projects.",
    requirements: ["Associate's or B.S. in drafting/engineering technology", "Proficient in Civil 3D and AutoCAD", "Attention to detail", "1+ years relevant experience"],
  },
  {
    title: "Engineering Intern",
    type: "Internship · Summer",
    location: "Indianapolis, IN",
    description: "Gain hands-on experience supporting civil engineering design and inspection teams. Open to undergraduate and graduate students in Civil or Environmental Engineering.",
    requirements: ["Enrolled in accredited engineering program", "Sophomore standing or above", "Eagerness to learn field and design work", "Indiana-based strongly preferred"],
  },
];

const values = [
  {
    title: "Meaningful Work",
    body: "Every project we touch improves public infrastructure, roads people drive, water people drink, facilities communities depend on.",
  },
  {
    title: "Growth & Development",
    body: "We invest in your licensure, certifications, and career trajectory. FGI promotes from within and builds long careers.",
  },
  {
    title: "Small Firm, Big Projects",
    body: "You won't get lost in a department. You'll own your work, interface directly with clients, and see the impact of your contributions.",
  },
  {
    title: "Indiana Roots",
    body: "We're focused on Indiana infrastructure. That means staying connected to local communities, agencies, and the engineers who build this state.",
  },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--fgi-navy)", minHeight: "48vh" }}>
        <img src="/headpic4.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--fgi-navy) 40%, transparent 100%)" }} />
        <div style={{ backgroundColor: "var(--fgi-blue)" }} className="absolute top-0 left-0 right-0 h-1" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Join the Team
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-4">
            Build Indiana<br /><span style={{ color: "var(--fgi-blue)" }}>With Us</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            FGI is growing. We're looking for engineers, inspectors, and project managers who take pride in infrastructure done right.
          </p>
        </div>
      </section>

      {/* Why FGI */}
      <section style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Why FGI</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl font-extrabold text-white uppercase mb-8">What It's Like to Work Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 pt-5" style={{ borderColor: "var(--fgi-blue)" }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-lg font-bold uppercase mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Open Roles</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl md:text-5xl font-extrabold uppercase mb-10">Current Openings</h2>

          <div className="flex flex-col divide-y divide-gray-200 border border-gray-200">
            {openings.map((job) => (
              <details key={job.title} className="group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-xl font-bold uppercase">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-0.5 text-[10px] uppercase tracking-widest font-semibold text-white" style={{ backgroundColor: "var(--fgi-blue)" }}>{job.type}</span>
                      <span className="px-3 py-0.5 text-[10px] uppercase tracking-widest font-semibold text-gray-500 bg-gray-100">{job.location}</span>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 shrink-0 ml-4 transition-transform group-open:rotate-180"
                    style={{ color: "var(--fgi-blue)" }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>
                  <div className="mb-5">
                    <div style={{ color: "var(--fgi-navy)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-bold uppercase mb-2">Requirements</div>
                    <ul className="flex flex-col gap-1.5">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--fgi-blue)" }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="mailto:careers@farahgroupinc.com"
                    style={{ backgroundColor: "var(--fgi-navy)" }}
                    className="inline-block px-6 py-3 text-white font-semibold uppercase tracking-wide text-xs hover:opacity-80 transition-opacity"
                  >
                    Apply: careers@farahgroupinc.com
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* General interest CTA */}
      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">Don't See Your Role?</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-navy)" }} className="text-4xl font-extrabold uppercase mb-4">Send Us Your Resume Anyway</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              FGI is always interested in connecting with talented engineers, inspectors, and technical professionals. If you don't see a current opening that fits, reach out. We keep strong candidates on file and hire when the right person is available.
            </p>
            <a
              href="mailto:careers@farahgroupinc.com"
              style={{ backgroundColor: "var(--fgi-blue)" }}
              className="inline-block px-8 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              careers@farahgroupinc.com
            </a>
          </div>
          <div className="relative">
            <img src="/headpic2.webp" alt="" className="w-full h-72 object-cover" />
            <div style={{ backgroundColor: "var(--fgi-navy)" }} className="absolute -bottom-4 -right-4 px-6 py-4 shadow-lg">
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest mb-1">Based In</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white font-bold text-lg uppercase">Indianapolis, Indiana</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
