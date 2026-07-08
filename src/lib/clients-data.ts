/**
 * Clients displayed in the home-page trust marquee (`ClientsMarquee`).
 *
 * `logo` is optional: when a real logo file is dropped into
 * `public/images/clients/`, set its path here and the marquee renders the
 * image; otherwise a styled text wordmark is shown as a placeholder.
 *
 * ⚠️ Vérifier l'orthographe exacte des raisons sociales et — idéalement —
 * obtenir l'accord des clients avant d'afficher publiquement leurs logos.
 */
export type Client = {
  name: string;
  /** e.g. "/images/clients/scaprim.png" — leave undefined to show the name. */
  logo?: string;
};

export const clients: Client[] = [
  { name: "Groupe SCAPRIM", logo: "/images/clients/scaprim.jpg" },
  { name: "Hovia", logo: "/images/clients/hovia.png" },
  { name: "Ceka Services", logo: "/images/clients/ceka.png" },
  { name: "Château de Vaux-le-Vicomte", logo: "/images/clients/vaux-le-vicomte.jpg" },
  { name: "Garnier Logistics", logo: "/images/clients/garnier-logistics.png" },
  { name: "Fondation Partage et Vie", logo: "/images/clients/partage-et-vie.jpg" },
  { name: "Fnac Darty", logo: "/images/clients/fnac-darty.jpg" },
  { name: "CH Léon Binet — Provins", logo: "/images/clients/leon-binet.jpg" },
  { name: "Spirale", logo: "/images/clients/spirale.jpg" },
];
