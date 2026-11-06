/**
 * @fileoverview JSON-LD structured data helpers.
 *
 * Structured data lets search engines understand the site as entities
 * (Organization, WebSite) rather than just text — improving rich results.
 * Render the output inside a `<script type="application/ld+json">` tag.
 */

import type { FaqItem } from "@/lib/faq-data";
import { siteConfig } from "@/lib/site";

/**
 * Organization + WebSite schema for the site root. Emit once, in the root
 * layout. The two nodes are linked by `@id` so crawlers treat them as related.
 */
export function getSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        // Logo carré sur fond transparent (rend proprement sur le fond blanc du
        // panneau Google). 512×512 > minimum 112×112 recommandé par Google.
        logo: `${siteConfig.url}/logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };
}

/**
 * LocalBusiness schema — the key structured data for local SEO. Emitted on
 * zone pages so Google ties the business to its service areas (Yonne / Île-de-
 * France). Empty telephone/street fields are omitted so the JSON-LD stays
 * valid until they are confirmed in `siteConfig.business`.
 *
 * @param areaServed Optional page-specific area to emphasise (e.g. "Auxerre").
 */
export function getLocalBusinessStructuredData(areaServed?: string) {
  const { business, name, url, description, ogImage } = siteConfig;
  const areas = [
    ...(areaServed ? [areaServed] : []),
    ...business.areaServed,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name,
    legalName: business.legalName,
    description,
    url,
    image: `${url}${ogImage}`,
    logo: `${url}/logo.png`,
    email: business.email,
    ...(business.phone ? { telephone: business.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    // De-duplicated list of served administrative areas.
    areaServed: [...new Set(areas)].map((a) => ({
      "@type": "AdministrativeArea",
      name: a,
    })),
  };
}

/** Service schema — décrit une prestation et l'entreprise qui la fournit. */
export function getServiceStructuredData(name: string, description: string, path: string) {
  const { business, url } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${url}${path}`,
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${url}/#localbusiness`,
      name: siteConfig.name,
      telephone: business.phone,
      url,
    },
    areaServed: business.areaServed.map((a) => ({ "@type": "AdministrativeArea", name: a })),
  };
}

/** BreadcrumbList schema — le chemin de la page, de l'accueil à la page courante. */
export function getBreadcrumbStructuredData(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/**
 * FAQPage schema — mirrors the on-page FAQ so Google can surface the questions
 * as a rich result. Emit once, on the page that renders the visible FAQ.
 */
export function getFaqStructuredData(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
