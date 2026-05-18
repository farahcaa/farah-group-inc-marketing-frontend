import { useState, useRef } from "react";

const serviceGroups = [
  {
    category: "Civil Engineering",
    href: "/services/civil-engineering",
    description: "Design & analysis for public infrastructure from concept through PS&E.",
    items: [
      { label: "Roadway & Highway Design", href: "/services/civil-engineering" },
      { label: "Drainage & Hydrology", href: "/services/civil-engineering" },
      { label: "Grading & Earthwork", href: "/services/civil-engineering" },
      { label: "Utility Infrastructure", href: "/services/civil-engineering" },
      { label: "Structural Engineering", href: "/services/civil-engineering" },
      { label: "Environmental Compliance", href: "/services/civil-engineering" },
    ],
  },
  {
    category: "Construction Inspection",
    href: "#",
    description: "Rigorous field oversight ensuring quality, safety, and agency compliance.",
    items: [
      { label: "Transportation Infrastructure", href: "/services/construction-inspection/transportation" },
      { label: "Water Treatment Plants", href: "/services/construction-inspection/water-treatment-plants" },
    ],
  },
  {
    category: "Project Management",
    href: "/services/management",
    description: "End-to-end program management keeping complex projects on track.",
    items: [
      { label: "Schedule & Budget Control", href: "/services/management" },
      { label: "Agency Coordination", href: "/services/management" },
      { label: "Stakeholder Reporting", href: "/services/management" },
      { label: "Risk Management", href: "/services/management" },
    ],
  },
];

const featuredProjects = [
  { label: "I-65 Corridor Drainage Improvements", location: "Central Indiana", href: "/projects/placeholderslugs" },
  { label: "Regional Water Treatment Expansion", location: "Northern Indiana", href: "/projects/placeholderslugs" },
  { label: "Levee Rehabilitation — Wabash River Basin", location: "Terre Haute, IN", href: "/projects/placeholderslugs" },
  { label: "Transit Center Construction Management", location: "Indianapolis Metro, IN", href: "/projects/placeholderslugs" },
  { label: "US-31 Interchange Reconstruction", location: "Hamilton County, IN", href: "/projects/placeholderslugs" },
  { label: "Municipal Sewer Master Plan", location: "South Bend, IN", href: "/projects/placeholderslugs" },
];

function MegaDropdown({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      className="absolute left-0 right-0 top-full shadow-2xl z-50"
      style={{ backgroundColor: "var(--fgi-navy-dark)", borderTop: "3px solid var(--fgi-blue)" }}
    >
      {children}
    </div>
  );
}

function ServicesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <MegaDropdown onClose={onClose}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-3 gap-10">
          {serviceGroups.map((group) => (
            <div key={group.category}>
              <a href={group.href} onClick={onClose} className="block mb-1 group">
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-[0.2em] font-semibold mb-1">
                  {group.category}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-xl font-bold uppercase group-hover:opacity-80 transition-opacity">
                  {group.category}
                </div>
              </a>
              <p className="text-white/40 text-xs leading-relaxed mb-5">{group.description}</p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={onClose} className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--fgi-blue)" }} />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="text-white/30 text-xs uppercase tracking-widest">Civil &amp; Environmental Infrastructure Services</span>
          <a href="/#contact" onClick={onClose} style={{ backgroundColor: "var(--fgi-blue)" }} className="px-6 py-2 text-white text-xs font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity">
            Get in Touch →
          </a>
        </div>
      </div>
    </MegaDropdown>
  );
}

function ProjectsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <MegaDropdown onClose={onClose}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 gap-10">
          {/* Left: project list */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-[0.2em] font-semibold mb-1">Featured Work</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-xl font-bold uppercase mb-5">Recent Projects</div>
            <ul className="flex flex-col gap-0 divide-y divide-white/5">
              {featuredProjects.map((p) => (
                <li key={p.label}>
                  <a href={p.href} onClick={onClose} className="flex items-center justify-between py-3 group">
                    <div>
                      <div className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">{p.label}</div>
                      <div style={{ color: "var(--fgi-blue)" }} className="text-xs mt-0.5">{p.location}</div>
                    </div>
                    <svg className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: promo panel */}
          <div className="relative overflow-hidden">
            <img src="/Levee.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative p-8 h-full flex flex-col justify-between" style={{ backgroundColor: "rgba(17,30,78,0.85)" }}>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }} className="text-xs uppercase tracking-widest mb-2">Our Portfolio</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-3xl font-extrabold uppercase leading-tight mb-3">
                  Infrastructure Projects<br />Across Indiana
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  From INDOT corridors to municipal water systems, FGI's project portfolio spans civil design, inspection, and program management.
                </p>
              </div>
              <a href="/projects/placeholderslug" onClick={onClose} style={{ backgroundColor: "var(--fgi-blue)" }} className="mt-6 self-start px-6 py-2 text-white text-xs font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity">
                View All Projects →
              </a>
            </div>
          </div>
        </div>
      </div>
    </MegaDropdown>
  );
}

type DropdownKey = "services" | "projects" | null;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const closeAll = () => setActiveDropdown(null);

  return (
    <header style={{ backgroundColor: "var(--fgi-navy)" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 relative">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div
            style={{ backgroundColor: "var(--fgi-navy-dark)", border: "2px solid white" }}
            className="w-12 h-12 rounded flex items-center justify-center"
          >
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "white", fontSize: "1.1rem", letterSpacing: "-0.01em" }} className="font-extrabold leading-none">FGI</span>
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="leading-tight">
            <div className="text-white font-extrabold text-xl tracking-widest uppercase">FARAH GROUP INC</div>
            <div style={{ color: "var(--fgi-blue)" }} className="text-[10px] tracking-widest uppercase font-semibold">Civil &amp; Environmental Infrastructure</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => openDropdown("services")} onMouseLeave={scheduleClose}>
            <button
              className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors"
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
            >
              Services
              <svg className="w-3 h-3 mt-0.5 transition-transform" style={{ transform: activeDropdown === "services" ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="relative" onMouseEnter={() => openDropdown("projects")} onMouseLeave={scheduleClose}>
            <button
              className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors"
              onClick={() => setActiveDropdown(activeDropdown === "projects" ? null : "projects")}
            >
              Projects
              <svg className="w-3 h-3 mt-0.5 transition-transform" style={{ transform: activeDropdown === "projects" ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <a href="/#about" className="text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors">About</a>
          <a href="/careers" className="text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors">Careers</a>
          <a href="/#contact" style={{ backgroundColor: "var(--fgi-blue)" }} className="px-5 py-2 text-white text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Desktop mega-menus */}
      {activeDropdown === "services" && (
        <div onMouseEnter={() => openDropdown("services")} onMouseLeave={scheduleClose}>
          <ServicesDropdown onClose={closeAll} />
        </div>
      )}
      {activeDropdown === "projects" && (
        <div onMouseEnter={() => openDropdown("projects")} onMouseLeave={scheduleClose}>
          <ProjectsDropdown onClose={closeAll} />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "var(--fgi-navy-dark)" }} className="md:hidden px-6 pb-6 flex flex-col gap-0 max-h-[80vh] overflow-y-auto">
          {/* Services accordion */}
          <button className="flex items-center justify-between text-white/80 text-sm font-medium uppercase tracking-wide py-4 border-b border-white/10" onClick={() => setMobileServicesOpen((o) => !o)}>
            Services
            <svg className="w-4 h-4 transition-transform" style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col gap-1 py-3 pl-4 border-b border-white/10">
              {serviceGroups.map((group) => (
                <div key={group.category} className="mb-3">
                  <div style={{ color: "var(--fgi-blue)", fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs uppercase tracking-widest font-semibold mb-2">{group.category}</div>
                  {group.items.map((item) => (
                    <a key={item.label} href={item.href} className="block text-white/60 hover:text-white text-sm py-1" onClick={() => setMobileOpen(false)}>{item.label}</a>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Projects accordion */}
          <button className="flex items-center justify-between text-white/80 text-sm font-medium uppercase tracking-wide py-4 border-b border-white/10" onClick={() => setMobileProjectsOpen((o) => !o)}>
            Projects
            <svg className="w-4 h-4 transition-transform" style={{ transform: mobileProjectsOpen ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileProjectsOpen && (
            <div className="flex flex-col py-3 pl-4 border-b border-white/10">
              <a href="/projects/placeholderslug" className="text-white/80 text-sm py-1.5 font-semibold" onClick={() => setMobileOpen(false)}>All Projects</a>
              {featuredProjects.map((p) => (
                <a key={p.label} href={p.href} className="block text-white/60 hover:text-white text-sm py-1.5" onClick={() => setMobileOpen(false)}>{p.label}</a>
              ))}
            </div>
          )}

          <a href="/#about" className="text-white/80 hover:text-white text-sm font-medium uppercase tracking-wide py-4 border-b border-white/10" onClick={() => setMobileOpen(false)}>About</a>
          <a href="/careers" className="text-white/80 hover:text-white text-sm font-medium uppercase tracking-wide py-4 border-b border-white/10" onClick={() => setMobileOpen(false)}>Careers</a>
          <a href="/#contact" style={{ backgroundColor: "var(--fgi-blue)" }} className="mt-4 px-5 py-3 text-white text-sm font-semibold uppercase tracking-wide text-center" onClick={() => setMobileOpen(false)}>
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
