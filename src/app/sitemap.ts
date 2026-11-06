import type { MetadataRoute } from "next";

import { guides } from "@/lib/guides-data";
import { prestations } from "@/lib/prestations-data";
import { siteConfig } from "@/lib/site";
import { zones } from "@/lib/zones-data";

// Static export has no server to run this at request time — prerender once.
export const dynamic = "force-static";

/**
 * Generates `/sitemap.xml`. Only indexable pages belong here — the legal pages
 * (`/mentions-legales`, `/politique-de-confidentialite`) are `noindex`, so
 * listing them would send Google conflicting signals; they stay out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/a-propos", "/contact", "/guides"];
  const prestationRoutes = [
    ...prestations.map((p) => `/prestations/${p.slug}`),
    "/prestations/centrales-qti",
    "/prestations/ppms",
    "/prestations/plans-signaletique",
  ];
  const zoneRoutes = zones.map((z) => `/zones/${z.slug}`);
  const guideRoutes = guides.map((g) => `/guides/${g.slug}`);

  return [...staticRoutes, ...prestationRoutes, ...zoneRoutes, ...guideRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
