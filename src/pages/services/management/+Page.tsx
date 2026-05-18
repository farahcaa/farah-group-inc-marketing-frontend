const pillars = [
  {
    title: "Schedule Control",
    description:
      "We build and maintain detailed CPM schedules, track progress against baseline, and flag delays before they compound — keeping your project on the critical path.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Budget & Cost Management",
    description:
      "Earned value analysis, change order review, and cost-at-completion forecasting give clients real-time financial visibility across the life of the project.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Agency Coordination",
    description:
      "We manage relationships with INDOT, county, municipal, and regulatory agencies — handling submittals, approvals, and utility coordination so your team stays focused.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Risk Management",
    description:
      "Proactive risk registers, mitigation plans, and contingency tracking so issues are identified and resolved before they become claims or schedule impacts.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  },
  {
    title: "Stakeholder Reporting",
    description:
      "Clear, consistent reporting for executives, boards, and public agencies — dashboards, progress reports, and meeting facilitation that keep everyone aligned.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Contractor Oversight",
    description:
      "Pre-construction conferences, submittal reviews, RFI management, and closeout documentation — full lifecycle oversight from NTP through project acceptance.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
];

const phases = [
  {
    label: "Pre-Construction",
    items: [
      "Project kickoff & charter",
      "Baseline schedule development",
      "Risk register setup",
      "Procurement support",
    ],
  },
  {
    label: "Design Phase",
    items: [
      "Design review coordination",
      "Agency submittal tracking",
      "Value engineering",
      "Permit milestone tracking",
    ],
  },
  {
    label: "Construction",
    items: [
      "Daily / weekly progress reporting",
      "Change order negotiation",
      "Contractor pay app review",
      "Safety compliance monitoring",
    ],
  },
  {
    label: "Closeout",
    items: [
      "Punch list management",
      "As-built documentation",
      "Agency acceptance",
      "Lessons learned & final report",
    ],
  },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--fgi-navy)", minHeight: "52vh" }}
      >
        <img
          src="/Launch-Shaft.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--fgi-navy) 40%, transparent 100%)",
          }}
        />
        <div
          style={{ backgroundColor: "var(--fgi-blue)" }}
          className="absolute top-0 left-0 right-0 h-1"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <a
            href="/#services"
            style={{ color: "var(--fgi-blue)" }}
            className="text-xs uppercase tracking-widest font-semibold mb-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Services
          </a>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none tracking-tight mt-2 mb-4"
          >
            Project
            <br />
            <span style={{ color: "var(--fgi-blue)" }}>Management</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            On schedule. On budget. No surprises. FGI brings disciplined program
            management to complex public infrastructure projects from day one
            through final acceptance.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section
        style={{ backgroundColor: "var(--fgi-navy-dark)" }}
        className="py-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Methodology", value: "CPM · Earned Value · Risk-Based" },
            {
              label: "Reporting",
              value: "Weekly · Monthly · Executive Dashboards",
            },
            {
              label: "Sectors",
              value: "Transportation · Water · Public Works",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-l-2 pl-4"
              style={{ borderColor: "var(--fgi-blue)" }}
            >
              <div className="text-white/50 text-xs uppercase tracking-widest mb-1">
                {item.label}
              </div>
              <div
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-white font-bold text-lg uppercase"
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div
              style={{
                color: "var(--fgi-blue)",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
            >
              How We Manage
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "var(--fgi-navy)",
              }}
              className="text-4xl md:text-5xl font-extrabold uppercase"
            >
              Management Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white p-8 hover:bg-slate-50 transition-colors"
              >
                <div style={{ color: "var(--fgi-blue)" }} className="mb-4">
                  {p.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "var(--fgi-navy)",
                  }}
                  className="text-xl font-bold uppercase mb-3"
                >
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase breakdown */}
      <section style={{ backgroundColor: "#f4f6fb" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div
              style={{
                color: "var(--fgi-blue)",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
            >
              Lifecycle Coverage
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "var(--fgi-navy)",
              }}
              className="text-4xl md:text-5xl font-extrabold uppercase"
            >
              Every Phase. Every Detail.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <div
                key={phase.label}
                className="bg-white border border-gray-200 p-6"
              >
                <div
                  style={{
                    color: "var(--fgi-blue)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                  className="text-4xl font-extrabold opacity-20 leading-none mb-3 select-none"
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "var(--fgi-navy)",
                  }}
                  className="text-lg font-bold uppercase mb-4 pb-3 border-b border-gray-100"
                >
                  {phase.label}
                </h3>
                <ul className="flex flex-col gap-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--fgi-blue)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split photo CTA */}
      <section
        style={{ backgroundColor: "var(--fgi-navy)" }}
        className="relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-10 py-16 md:py-24 order-2 md:order-1">
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-4"
            >
              Complex Project?
              <br />
              <span style={{ color: "var(--fgi-blue)" }}>Let's Talk.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Whether you need a full-time owner's rep or targeted support
              during a critical project phase, FGI can step in at any point in
              the lifecycle.
            </p>
            <a
              href="/#contact"
              style={{ backgroundColor: "var(--fgi-blue)" }}
              className="inline-block self-start px-8 py-4 text-white font-semibold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </a>
          </div>
          <div className="relative min-h-64 order-1 md:order-2">
            <img
              src="/LS.jpg"
              alt=""
              className="w-full h-full object-cover"
              style={{ minHeight: "360px" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(10,18,50,0.35)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
