/**
 * Local-SEO zone pages — the geographic counterpart to `prestations-data.ts`.
 *
 * Each entry renders a `/zones/{slug}` landing page targeting "sécurité
 * incendie + {ville/département}" queries, links back to the service pages,
 * and feeds the LocalBusiness JSON-LD. Content is unique per zone (town names,
 * local context) to avoid thin/duplicate pages.
 */

export type ZoneKind = "department" | "city" | "region";

export type Zone = {
  slug: string;
  /** Display name of the area, e.g. "Yonne (89)". */
  name: string;
  kind: ZoneKind;
  /** SEO <title>. */
  titleTag: string;
  /** Meta description (~150–160 chars). */
  metaDescription: string;
  /** Eyebrow label above the H1. */
  label: string;
  /** Page H1. */
  h1: string;
  /** Hero lead paragraph. */
  intro: string;
  /** Body H2. */
  h2: string;
  /** Body paragraphs. */
  paragraphs: string[];
  /** Towns / sectors served — rendered as chips for local relevance. */
  communes: string[];
  /** Value emphasised in the LocalBusiness areaServed for this page. */
  areaServed: string;
};

/** Services linked from every zone page (slug under `/prestations/`). */
export const zonePrestationLinks: { slug: string; label: string }[] = [
  { slug: "extincteurs", label: "Maintenance & installation d'extincteurs" },
  { slug: "ria", label: "RIA — Robinets d'Incendie Armés" },
  { slug: "baes", label: "BAES — éclairage de sécurité" },
  { slug: "desenfumage", label: "Désenfumage" },
  { slug: "portes-coupe-feu", label: "Portes coupe-feu" },
  { slug: "ppms", label: "Alarme incendie type 4 & PPMS" },
  { slug: "hydrants", label: "Poteaux & bouches incendie" },
  { slug: "baches", label: "Bâches & réserves incendie" },
  { slug: "centrales-qti", label: "CATI — centrales" },
];

export const zones: Zone[] = [
  {
    slug: "yonne-89",
    name: "Yonne (89)",
    kind: "department",
    titleTag: "Sécurité incendie dans l'Yonne (89) — MISI",
    metaDescription:
      "MISI, votre entreprise de sécurité incendie dans l'Yonne (89) : maintenance et installation d'extincteurs, RIA, BAES, désenfumage, alarme incendie. Devis gratuit.",
    label: "Zone d'intervention principale",
    h1: "Sécurité incendie dans l'Yonne (89)",
    intro:
      "MISI est votre partenaire de proximité pour la sécurité incendie dans tout le département de l'Yonne : vérification, maintenance et installation de vos équipements, en conformité avec la réglementation ERP et Code du travail.",
    h2: "Votre spécialiste sécurité incendie de proximité dans l'Yonne",
    paragraphs: [
      "Implantée dans l'Yonne, l'entreprise MISI intervient auprès des ERP, des collectivités, des industries et des commerces du département pour assurer la conformité de leurs équipements de sécurité incendie. Notre proximité garantit des délais d'intervention courts et un suivi régulier de votre parc d'équipements.",
      "De la vérification annuelle des extincteurs à l'installation d'un système d'alarme, en passant par la maintenance des BAES, des RIA et du désenfumage, nous couvrons l'ensemble de vos obligations réglementaires. Chaque intervention donne lieu à un rapport détaillé pour la mise à jour de votre registre de sécurité.",
    ],
    communes: [
      "Auxerre",
      "Sens",
      "Joigny",
      "Avallon",
      "Migennes",
      "Villeneuve-sur-Yonne",
      "Tonnerre",
      "Saint-Florentin",
      "Chablis",
      "Toucy",
      "Pont-sur-Yonne",
      "Brienon-sur-Armançon",
    ],
    areaServed: "Yonne",
  },
  {
    slug: "auxerre",
    name: "Auxerre",
    kind: "city",
    titleTag: "Sécurité incendie à Auxerre (89) — Extincteurs, BAES, RIA | MISI",
    metaDescription:
      "Maintenance et installation d'équipements de sécurité incendie à Auxerre : extincteurs, RIA, BAES, désenfumage, alarme incendie. Intervention rapide, devis gratuit.",
    label: "Yonne (89)",
    h1: "Sécurité incendie à Auxerre",
    intro:
      "MISI accompagne les établissements d'Auxerre et de son agglomération pour la vérification, la maintenance et l'installation de leurs équipements de sécurité incendie.",
    h2: "Vos équipements de sécurité incendie à Auxerre",
    paragraphs: [
      "Préfecture de l'Yonne, Auxerre concentre de nombreux ERP — commerces, bureaux, établissements scolaires, structures de santé — soumis à des obligations strictes de vérification incendie. MISI assure la conformité de vos extincteurs, BAES, RIA, portes coupe-feu et systèmes de désenfumage, avec un rapport d'intervention à chaque passage.",
      "Basés dans l'Yonne, nous intervenons rapidement à Auxerre et dans les communes voisines (Monéteau, Appoigny, Saint-Georges-sur-Baulche, Perrigny) pour la maintenance périodique comme pour les installations neuves.",
    ],
    communes: ["Auxerre", "Monéteau", "Appoigny", "Saint-Georges-sur-Baulche", "Perrigny", "Venoy"],
    areaServed: "Auxerre",
  },
  {
    slug: "sens",
    name: "Sens",
    kind: "city",
    titleTag: "Sécurité incendie à Sens (89) — Extincteurs, BAES, RIA | MISI",
    metaDescription:
      "MISI intervient à Sens et son agglomération pour la maintenance et l'installation d'extincteurs, RIA, BAES, désenfumage et alarme incendie. Devis gratuit sous 24h.",
    label: "Yonne (89)",
    h1: "Sécurité incendie à Sens",
    intro:
      "MISI assure la sécurité incendie des établissements de Sens et du Grand Sénonais : maintenance réglementaire et installation de tous vos équipements.",
    h2: "Maintenance incendie à Sens et dans le Sénonais",
    paragraphs: [
      "Deuxième ville de l'Yonne, aux portes de l'Île-de-France, Sens regroupe commerces, industries et établissements recevant du public qui doivent maintenir leurs équipements de sécurité incendie en parfait état. MISI prend en charge la vérification annuelle des extincteurs, la maintenance des BAES et RIA, le contrôle du désenfumage et des portes coupe-feu.",
      "Notre position géographique nous permet d'intervenir aussi bien dans l'Yonne qu'en Île-de-France limitrophe, pour un suivi de proximité de votre parc d'équipements.",
    ],
    communes: ["Sens", "Saint-Clément", "Paron", "Maillot", "Gron", "Villeneuve-la-Guyard"],
    areaServed: "Sens",
  },
  {
    slug: "joigny",
    name: "Joigny",
    kind: "city",
    titleTag: "Sécurité incendie à Joigny (89) — Extincteurs, BAES, RIA | MISI",
    metaDescription:
      "Entreprise de sécurité incendie à Joigny (89) : maintenance et installation d'extincteurs, RIA, BAES, désenfumage, alarme incendie. Intervention rapide, devis gratuit.",
    label: "Yonne (89)",
    h1: "Sécurité incendie à Joigny",
    intro:
      "MISI accompagne les professionnels et collectivités de Joigny pour la maintenance et l'installation de leurs équipements de sécurité incendie.",
    h2: "Vos obligations incendie à Joigny",
    paragraphs: [
      "À Joigny, les ERP, ateliers et locaux professionnels sont soumis à des vérifications périodiques obligatoires. MISI assure la maintenance de vos extincteurs, BAES, RIA, portes coupe-feu et exutoires de désenfumage, ainsi que l'installation de systèmes d'alarme incendie de type 4.",
      "Entreprise locale de l'Yonne, nous garantissons des délais courts et un interlocuteur unique pour l'ensemble de vos équipements à Joigny et alentours.",
    ],
    communes: ["Joigny", "Migennes", "Cézy", "Saint-Aubin-sur-Yonne", "Villecien", "Brion"],
    areaServed: "Joigny",
  },
  {
    slug: "avallon",
    name: "Avallon",
    kind: "city",
    titleTag: "Sécurité incendie à Avallon (89) — Extincteurs, BAES, RIA | MISI",
    metaDescription:
      "MISI intervient à Avallon et dans l'Avallonnais pour la maintenance et l'installation d'extincteurs, RIA, BAES, désenfumage et alarme incendie. Devis gratuit.",
    label: "Yonne (89)",
    h1: "Sécurité incendie à Avallon",
    intro:
      "MISI assure la conformité incendie des établissements d'Avallon et de l'Avallonnais : vérification, maintenance et installation de vos équipements.",
    h2: "Sécurité incendie à Avallon et dans l'Avallonnais",
    paragraphs: [
      "Au sud de l'Yonne, Avallon et ses communes rurales comptent de nombreux commerces, hébergements touristiques et établissements publics soumis à la réglementation incendie. MISI prend en charge la vérification de vos extincteurs, la maintenance des BAES, RIA et systèmes de désenfumage, ainsi que le contrôle des portes coupe-feu.",
      "Notre implantation dans l'Yonne nous permet de desservir l'ensemble de l'Avallonnais avec réactivité, pour la maintenance périodique comme pour les projets d'installation.",
    ],
    communes: ["Avallon", "Sauvigny-le-Bois", "Girolles", "Sermizelles", "Vézelay", "Quarré-les-Tombes"],
    areaServed: "Avallon",
  },
  {
    slug: "migennes",
    name: "Migennes",
    kind: "city",
    titleTag: "Sécurité incendie à Migennes (89) — Extincteurs, BAES, RIA | MISI",
    metaDescription:
      "Sécurité incendie à Migennes (89) : maintenance et installation d'extincteurs, RIA, BAES, désenfumage, alarme incendie pour ERP et industries. Devis gratuit.",
    label: "Yonne (89)",
    h1: "Sécurité incendie à Migennes",
    intro:
      "MISI intervient à Migennes pour la maintenance et l'installation des équipements de sécurité incendie des ERP, industries et collectivités.",
    h2: "Maintenance incendie pour les entreprises de Migennes",
    paragraphs: [
      "Ville industrielle et ferroviaire de l'Yonne, Migennes accueille ateliers, entrepôts et établissements recevant du public dont les équipements incendie doivent rester opérationnels en permanence. MISI assure la vérification des extincteurs et RIA, la maintenance des BAES et du désenfumage, et l'installation d'alarmes incendie.",
      "Proches de Migennes, nous garantissons un suivi régulier et des interventions rapides sur l'ensemble de vos équipements.",
    ],
    communes: ["Migennes", "Laroche-Saint-Cydroine", "Cheny", "Bonnard", "Charmoy", "Épineau-les-Voves"],
    areaServed: "Migennes",
  },
  {
    slug: "ile-de-france",
    name: "Île-de-France",
    kind: "region",
    titleTag: "Sécurité incendie en Île-de-France — MISI",
    metaDescription:
      "MISI intervient en Île-de-France pour la maintenance et l'installation d'équipements de sécurité incendie : extincteurs, RIA, BAES, désenfumage, alarme. Devis gratuit.",
    label: "Zone d'intervention étendue",
    h1: "Sécurité incendie en Île-de-France",
    intro:
      "Au-delà de l'Yonne, MISI étend ses prestations de sécurité incendie à l'Île-de-France, notamment dans le sud francilien limitrophe du département.",
    h2: "Vos équipements de sécurité incendie en Île-de-France",
    paragraphs: [
      "Aux portes de l'Île-de-France, MISI intervient auprès des entreprises, ERP et collectivités franciliens pour la vérification, la maintenance et l'installation de leurs équipements de sécurité incendie. Nous couvrons en priorité le sud de la région — Seine-et-Marne et Essonne notamment — proches de notre implantation dans l'Yonne.",
      "Extincteurs, RIA, BAES, désenfumage, portes coupe-feu, alarme incendie : nous assurons la conformité complète de votre établissement, avec rapport d'intervention et suivi de votre registre de sécurité.",
    ],
    communes: ["Seine-et-Marne (77)", "Essonne (91)", "Fontainebleau", "Montereau-Fault-Yonne", "Nemours", "Melun"],
    areaServed: "Île-de-France",
  },
];

export function getZone(slug: string) {
  return zones.find((z) => z.slug === slug);
}
