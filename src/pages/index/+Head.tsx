export default function Head() {
  const title = "Farah Group Inc — Civil & Environmental Infrastructure Services";
  const description =
    "Farah Group Inc delivers expert civil engineering, construction inspection, and project management services for transportation and water infrastructure projects.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="civil engineering, construction inspection, project management, infrastructure, transportation, water treatment, environmental engineering, FGI"
      />
      <meta name="author" content="Farah Group Inc" />
      <link rel="canonical" href="https://farahgroupinc.com/" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://farahgroupinc.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Farah Group Inc" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Farah Group Inc",
          url: "https://farahgroupinc.com",
          description,
          serviceType: [
            "Civil Engineering",
            "Construction Inspection",
            "Project Management",
            "Environmental Infrastructure Services",
          ],
        })}
      </script>
    </>
  );
}
