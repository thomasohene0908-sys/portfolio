"use client";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tommie.dev - Web Development",
    "@id": "https://tommie003.vercel.app",
    "url": "https://tommie003.vercel.app",
    "telephone": "+233538315085",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kukurantumi",
      "addressRegion": "Eastern Region",
      "addressCountry": "GH"
    },
    "priceRange": "$$",
    "description": "Freelance full-stack developer and UI/UX designer building high-performance Next.js websites and applications."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
