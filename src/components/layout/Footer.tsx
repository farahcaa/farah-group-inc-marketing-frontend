const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "var(--fgi-navy-dark)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-xl font-bold tracking-widest uppercase mb-1"
          >
            FARAH GROUP INC
          </div>
          <div
            style={{ color: "var(--fgi-blue)" }}
            className="text-xs tracking-widest uppercase mb-4"
          >
            Civil &amp; Environmental Infrastructure Services
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Delivering reliable civil, environmental, and infrastructure
            engineering solutions across Indiana.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "var(--fgi-blue)",
            }}
            className="text-sm uppercase tracking-widest mb-4 font-semibold"
          >
            Services
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a
                href="/services/civil-engineering"
                className="hover:text-white transition-colors"
              >
                Civil Engineering
              </a>
            </li>
            <li>
              <a
                href="/services/construction-inspection/transportation"
                className="hover:text-white transition-colors"
              >
                Transportation Inspection
              </a>
            </li>
            <li>
              <a
                href="/services/construction-inspection/water-treatment-plants"
                className="hover:text-white transition-colors"
              >
                Water Treatment Plant Inspection
              </a>
            </li>
            <li>
              <a
                href="/services/management"
                className="hover:text-white transition-colors"
              >
                Project Management
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--fgi-blue)" }}
            className="text-sm uppercase tracking-widest mb-4 font-semibold"
          >
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/#about" className="hover:text-white transition-colors">About FGI</a></li>
            <li><a href="/projects/placeholderslug" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="mailto:info@farahgroupinc.com" className="hover:text-white transition-colors">info@farahgroupinc.com</a></li>
          </ul>
        </div>
      </div>

      <div
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
        className="border-t"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>
            &copy; {new Date().getFullYear()} Farah Group Inc. All rights
            reserved.
          </span>
          <span>Civil &amp; Environmental Infrastructure Services</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
