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
  /**
   * Business identity for local SEO (JSON-LD LocalBusiness + zone pages).
   *
   * ⚠️ À VÉRIFIER AVANT MISE EN LIGNE — ces valeurs seront publiées sur le web.
   * Confirmer/compléter le téléphone et l'adresse exacte que vous souhaitez
   * rendre publics (les valeurs ci-dessous sont pré-remplies à titre indicatif).
   */
  business: {
    legalName: "MISI — Maintenance Installation Sécurité Incendie",
    email: "direction@misifrance.com",
    /** Numéro public — laisser vide tant qu'il n'est pas confirmé. */
    phone: "",
    address: {
      locality: "Courtoin",
      postalCode: "89150",
      region: "Bourgogne-Franche-Comté",
      country: "FR",
    },
    /** Zones desservies (du plus prioritaire au moins prioritaire). */
    areaServed: ["Yonne", "Bourgogne-Franche-Comté", "Île-de-France"],
  },
  forms: {
    /**
     * Destinataire réel des formulaires (ContactForm + DevisForm), via le relais
     * FormSubmit. Volontairement SÉPARÉ de `business.email` : cette dernière est
     * publiée dans le JSON-LD et les mentions légales, alors que celle-ci peut
     * être basculée temporairement (recette, test) sans rien exposer.
     *
     * ⚠️ FormSubmit exige une activation par e-mail, **propre à chaque adresse**.
     * Changer cette valeur ré-arme l'activation : le premier envoi vers la nouvelle
     * adresse déclenche un lien de confirmation à cliquer, et aucun message n'est
     * délivré avant.
     *
     * 🔁 VALEUR TEMPORAIRE DE TEST — à remettre sur `direction@misifrance.com`
     *    une fois la recette du formulaire terminée.
     */
    recipient: "jude.claude@misifrance.com",
  },
} as const;
