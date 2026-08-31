export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tommie Portfolio & Web Development",
    "image": "https://your-portfolio-domain.com/og-image.jpg",
    "@id": "https://your-portfolio-domain.com",
    "url": "https://your-portfolio-domain.com",
    "telephone": "+233500000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "priceRange": "$$",
    "description": "Freelance web designer and full-stack developer building high-performance Next.js applications and automated workflows."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
