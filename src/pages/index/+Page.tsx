import { useState, useEffect, useRef } from "react";

const SLIDES = [
  "/headpic1.webp",
  "/headpic2.webp",
  "/headpic3.webp",
  "/headpic4.webp",
  "/Launch-Shaft.jpg",
  "/Levee.jpg",
  "/wall-tie-1.jpg",
  "/LS.jpg",
];

const SLIDE_DURATION = 5000; // ms

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(pct);

      if (pct >= 1) {
        setCurrent((c) => (c + 1) % SLIDES.length);
        startRef.current = Date.now();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current]);

  const goTo = (i: number) => {
    setCurrent(i);
    setProgress(0);
    startRef.current = Date.now();
  };

  return (
    <div className="absolute inset-0">
      {/* Images */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay so text stays readable */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(10,18,50,0.62)" }}
          />
        </div>
      ))}

      {/* Progress bar + dot indicators */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 flex flex-col gap-2">
        {/* Dot row */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                backgroundColor:
                  i === current ? "var(--fgi-blue)" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* Animating progress line */}
        <div
          className="h-[2px] w-full rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress * 100}%`,
              backgroundColor: "var(--fgi-blue)",
              transition: "width 100ms linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        />
      </svg>
    ),
    title: "Aviation",
    description:
      "Airfield construction inspection and quality assurance, FAA P-401 paving, airfield lighting, and overnight-closure coordination on active runways and taxiways.",
    href: "/services/construction-inspection/aviation",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Wastewater",
    description:
      "Construction inspection for treatment plants, lift stations, force mains, and collection systems, structural, mechanical, electrical, and commissioning oversight.",
    href: "/services/construction-inspection/wastewater",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Transportation",
    description:
      "Field quality assurance for roadway, bridge, and drainage corridors, from base preparation and earthwork through final striping.",
    href: "/services/construction-inspection/transportation",
  },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "15+", label: "Agency Partners" },
  { value: "100%", label: "Client Satisfaction" },
];

const inspectionServices = [
  { label: "Field Quality Assurance", href: "/services/construction-inspection" },
  { label: "Materials Testing Oversight", href: "/services/construction-inspection" },
  { label: "Contract Administration", href: "/services/construction-inspection" },
  { label: "Quantity Verification", href: "/services/construction-inspection" },
  { label: "Closeout & Documentation", href: "/services/construction-inspection" },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[92vh]">
        <HeroSlideshow />

        {/* Accent bar */}
        <div
          style={{ backgroundColor: "var(--fgi-blue)" }}
          className="absolute top-0 left-0 right-0 h-1 z-10"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-36 pb-20 md:pb-24">
          <div className="max-w-3xl">
            <div
              style={{
                color: "#ffffff",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Civil &amp; Environmental Infrastructure Services
            </div>
            <h1
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mb-6"
            >
              Building Infrastructure
              <br />
              <span style={{ color: "var(--fgi-blue)" }}>That Lasts.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Farah Group Inc delivers expert construction inspection, quality
              assurance, and contract administration, from active airfields and
              wastewater facilities to transportation corridors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                style={{ backgroundColor: "var(--fgi-blue)" }}
                className="px-8 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity text-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  color: "white",
                }}
                className="px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:border-white transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{ backgroundColor: "var(--fgi-navy-dark)" }}
        className="py-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "var(--fgi-blue)",
                }}
                className="text-4xl font-extrabold"
              >
                {s.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div
              style={{
                color: "var(--fgi-blue)",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
            >
              What We Do
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "var(--fgi-navy)",
              }}
              className="text-4xl md:text-5xl font-extrabold uppercase"
            >
              Construction Inspection by Sector
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mt-3 max-w-2xl">
              Farah Group Inc is a construction inspection firm. We deliver field
              quality assurance and contract administration across three sectors,
              keeping public infrastructure built to spec and on the record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group block border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div style={{ color: "var(--fgi-blue)" }} className="mb-5">
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "var(--fgi-navy)",
                  }}
                  className="text-2xl font-bold uppercase mb-3"
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <span
                  style={{ color: "var(--fgi-blue)" }}
                  className="text-sm font-semibold uppercase tracking-wide group-hover:underline"
                >
                  Learn More →
                </span>
              </a>
            ))}
          </div>

          {/* Inspection sub-services */}
          <div
            style={{ backgroundColor: "#f4f6fb" }}
            className="mt-8 p-6 border border-gray-200"
          >
            <p
              style={{
                color: "var(--fgi-navy)",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
              className="text-sm font-semibold uppercase tracking-widest mb-3"
            >
              What Every Engagement Includes
            </p>
            <div className="flex flex-wrap gap-4">
              {inspectionServices.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    borderColor: "var(--fgi-blue)",
                    color: "var(--fgi-blue)",
                  }}
                  className="border px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-blue-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{ backgroundColor: "#f4f6fb" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              style={{
                color: "var(--fgi-blue)",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
            >
              About FGI
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "var(--fgi-navy)",
              }}
              className="text-4xl md:text-5xl font-extrabold uppercase mb-6"
            >
              Accountability
              <br />
              In the Field
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Farah Group Inc is a construction inspection firm committed to
              delivering rigorous field oversight, quality assurance, and
              contract administration on every project. We serve as the owner's
              representative in the field, partnering with public agencies and
              contractors to keep infrastructure built to spec.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From groundbreaking through final acceptance, our inspectors verify
              that every structure, runway, and treatment facility meets the
              highest standards of safety, quality, and performance, and document
              every step of the way.
            </p>
            <a
              href="#contact"
              style={{ backgroundColor: "var(--fgi-navy)" }}
              className="inline-block px-8 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              Work With Us
            </a>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Precision",
                body: "Every deliverable is reviewed for technical accuracy and compliance with project specifications.",
              },
              {
                title: "Accountability",
                body: "We stand behind our work, from the first daily report to final acceptance, quality is non-negotiable.",
              },
              {
                title: "Partnership",
                body: "We work alongside agency partners and project teams, not just as vendors, but as invested collaborators.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-200 p-6 flex gap-4"
              >
                <div
                  style={{ backgroundColor: "var(--fgi-blue)" }}
                  className="w-1 shrink-0"
                />
                <div>
                  <h4
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: "var(--fgi-navy)",
                    }}
                    className="text-lg font-bold uppercase mb-1"
                  >
                    {v.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        style={{ backgroundColor: "var(--fgi-navy)" }}
        className="py-20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-6xl font-extrabold text-white uppercase mb-4"
          >
            Ready to Start
            <br />
            <span style={{ color: "var(--fgi-blue)" }}>Your Project?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Reach out to discuss how Farah Group Inc can bring expertise and
            precision to your next infrastructure project.
          </p>
          <a
            href="mailto:info@farahgroupinc.com"
            style={{ backgroundColor: "var(--fgi-blue)" }}
            className="inline-block px-10 py-5 text-white font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
          >
            info@farahgroupinc.com
          </a>
        </div>
      </section>
    </>
  );
};

export default Page;
