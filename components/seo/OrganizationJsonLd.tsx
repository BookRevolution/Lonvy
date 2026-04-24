const SITE_URL = "https://lonvy.at";

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Lonvy",
  inLanguage: "de-AT",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Lonvy",
  legalName: "WVA Business GmbH",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/lonvy-logo.webp`,
    width: 600,
    height: 760,
  },
  image: `${SITE_URL}/images/hero-product.webp`,
  description:
    "Personalisierte White-Label-Supplemente für Ärzte und Praxen. Wissenschaftlich fundiert, in Europa produziert, individuell entwickelt.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heinrich Pevny Gasse 2/6",
    postalCode: "2460",
    addressLocality: "Bruckneudorf",
    addressCountry: "AT",
  },
  founder: {
    "@type": "Person",
    name: "Dr. med. univ. Lara Vadlau",
    jobTitle: "Mitgründerin, Ärztin, Longevity-Autorin",
    sameAs: ["https://www.laravadlau.at/"],
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@lonvy.at",
    telephone: "+43 660 7380058",
    contactType: "customer service",
    availableLanguage: ["German"],
    areaServed: ["AT", "DE", "CH"],
  },
  sameAs: ["https://www.laravadlau.at/"],
};

const laraPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#lara-vadlau`,
  name: "Dr. med. univ. Lara Vadlau",
  givenName: "Lara",
  familyName: "Vadlau",
  jobTitle: "Ärztin, Olympiasiegerin, Mitgründerin",
  nationality: "AT",
  affiliation: { "@id": `${SITE_URL}/#organization` },
  url: "https://www.laravadlau.at/",
  sameAs: ["https://www.laravadlau.at/"],
  worksFor: { "@id": `${SITE_URL}/#organization` },
  author: {
    "@type": "Book",
    name: "Die Alterslüge: Die effektivsten Longevity-Strategien für ein längeres gesundes Leben",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
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
