"use client";

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is your typical turn-around time for a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard business sites take 1-2 weeks, while custom e-commerce or full-stack web applications take 2-4 weeks from initial kickoff to deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle hosting, domains, and deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I manage complete setup on Vercel, AWS, or custom servers, connect custom domains, and set up SSL security certificates."
        }
      },
      {
        "@type": "Question",
        "name": "Can I update content on my site after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every project includes CMS integration or an intuitive editing interface so content can be updated effortlessly."
        }
      },
      {
        "@type": "Question",
        "name": "How do payments and project contracts work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Projects operate on a standard 50% initial deposit and 50% upon final launch verification."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}