const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lonvy",
  legalName: "Lonvy GmbH",
  url: "https://lonvy.de",
  logo: "https://lonvy.de/images/lonvy-logo.webp",
  description:
    "Personalisierte White-Label-Supplemente für Ärzte und Praxen. Wissenschaftlich fundiert, in Europa produziert, individuell entwickelt.",
  founder: {
    "@type": "Person",
    name: "Dr. med. univ. Lara Vadlau",
    jobTitle: "Mitgründerin, Ärztin, Longevity-Autorin",
    sameAs: ["https://www.laravadlau.at/"],
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "kontakt@lonvy.de",
    contactType: "customer service",
    availableLanguage: ["German"],
    areaServed: ["AT", "DE", "CH"],
  },
};

const laraPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. med. univ. Lara Vadlau",
  jobTitle: "Ärztin, Olympiasiegerin, Mitgründerin",
  affiliation: {
    "@type": "Organization",
    name: "Lonvy GmbH",
    url: "https://lonvy.de",
  },
  url: "https://www.laravadlau.at/",
  worksFor: {
    "@type": "Organization",
    name: "Lonvy GmbH",
  },
  author: {
    "@type": "Book",
    name: "Die Alterslüge — Die effektivsten Longevity-Strategien für ein längeres gesundes Leben",
    publisher: {
      "@type": "Organization",
      name: "RBM Publishing",
    },
    inLanguage: "de",
  },
};

export function OrganizationJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laraPerson) }}
      />
    </>
  );
}
