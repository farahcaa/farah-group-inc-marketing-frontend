export default function Head() {
  const title = "Farah Group Inc | Civil & Environmental Infrastructure Services";
  const description =
    "Farah Group Inc delivers expert construction inspection, quality assurance, and contract administration for aviation, wastewater, and transportation infrastructure projects.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="construction inspection, quality assurance, contract administration, owner's representative, aviation inspection, FAA P-401, wastewater inspection, transportation inspection, infrastructure" />
      <meta name="author" content="Farah Group Inc" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Farah Group Inc" />
      <meta property="og:image" content="https://farahgroupinc.com/logo-fgi.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://farahgroupinc.com/logo-fgi.png" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Farah Group Inc",
          description,
          logo: "https://farahgroupinc.com/logo-fgi.png",
          serviceType: [
            "Construction Inspection",
            "Quality Assurance",
            "Contract Administration",
            "Aviation, Wastewater & Transportation Inspection",
          ],
        })}
      </script>
    </>
  );
}
