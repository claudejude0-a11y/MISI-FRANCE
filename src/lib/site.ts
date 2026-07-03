/**
 * Site-wide configuration — the single source of truth for SEO.
 *
 * Consumed by the metadata generator, `robots.ts`, `sitemap.ts`, and the
 * JSON-LD structured-data helper. Update the placeholder values per project.
 */
import { publicEnv } from "@/env";

export const siteConfig = {
  name: "MISI — Maintenance Installation Sécurité Incendie",
  description:
    "MISI assure la maintenance, l'installation et la vérification de tous vos équipements de sécurité incendie : extincteurs, RIA, BAES, désenfumage, CATI, PPMS.",
  /**
   * Public origin, no trailing slash. Drives canonical URLs, OG tags, the
   * sitemap, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` in production.
   */
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "https://www.misifrance.com",
  /** Default Open Graph / Twitter share image (path under `public/`). */
  ogImage: "/open-graph.png",
  twitterHandle: "@misi_incendie",
  author: "MISI",
  /** Browser theme-color (address bar / PWA). */
  themeColor: "#0D0D0D",
} as const;
