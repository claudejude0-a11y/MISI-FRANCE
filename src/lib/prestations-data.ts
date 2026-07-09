import type { ComponentType } from "react";

import {
  IconApartment,
  IconDoor,
  IconDroplet,
  IconDroplets,
  IconExtinguisher,
  IconFactory,
  IconLightbulb,
  IconSchool,
  IconServer,
  IconStore,
  IconValve,
  IconWind,
  type IconProps,
} from "@/components/icons";

export type PrestationListItem = { text: string };

export type Prestation = {
  slug: string;
  title: string;
  titleTag: string;
  label: string;
  breadcrumbLabel: string;
  badgeText: string;
  Icon: ComponentType<IconProps>;
  heroImage: string;
  heroAlt: string;
  intro: string;
  h2: string;
  paragraphs: string[];
  gallery: { src: string; alt: string }[];
  regleTitle: string;
  regleText: string;
  h3: string;
  list: PrestationListItem[];
  sidebarTitle: string;
  sidebarList: string[];
  otherLinks: { slug: string; label: string }[];
};

export const prestations: Prestation[] = [
  {
    slug: "extincteurs",
    title: "Extincteurs",
    titleTag: "Extincteurs — Vérification & Maintenance | MISI",
    label: "Premier secours",
    breadcrumbLabel: "Extincteurs",
    badgeText: "Vérification & maintenance",
    Icon: IconExtinguisher,
    heroImage: "/images/extincteurs.jpg",
    heroAlt: "Extincteurs de sécurité incendie",
    intro:
      "Vérification annuelle, recharge, révision quinquennale et remplacement de vos extincteurs portatifs et sur roues, selon les normes en vigueur.",
    h2: "Qu'est-ce qu'un extincteur ?",
    paragraphs: [
      "L'extincteur est le premier moyen de lutte contre l'incendie à la disposition de toute personne présente sur un site. Portatif ou sur roues, il permet d'intervenir immédiatement dès les premières secondes d'un départ de feu, avant que celui-ci ne se propage.",
      "Il en existe plusieurs types selon l'agent extincteur utilisé : eau pulvérisée, eau avec additif, CO₂, poudre ABC, poudre BC, ou agents spéciaux pour feux de classe F (huiles et graisses de cuisson). Le choix dépend des classes de feu présentes dans l'établissement : classe A (solides), classe B (liquides), classe C (gaz), classe D (métaux), classe F (huiles de cuisson). Un extincteur CO₂ ou poudre ne remplace pas un extincteur eau sur un feu de classe A, et un extincteur eau est contre-indiqué sur un feu électrique.",
    ],
    gallery: [
      { src: "/images/extincteurs.jpg", alt: "Extincteur poudre ABC 6kg" },
      { src: "/images/extincteurs-eau.png", alt: "Kit extincteur eau pulvérisée" },
      { src: "/images/extincteurs-poudre.png", alt: "Kit extincteur poudre ABC" },
    ],
    regleTitle: "Obligations réglementaires",
    regleText:
      "Les extincteurs doivent être conformes à la norme NF EN 3 (appareils portatifs) ou NF EN 1866 (appareils sur roues). L'arrêté du 25 juin 1980 (article MS 39, ERP) impose au minimum un extincteur à eau de 6 litres pour 200 à 300 m² selon le type d'ERP, avec au moins un appareil par niveau. Des appareils supplémentaires adaptés sont obligatoires pour les risques spécifiques (locaux électriques, cuisines professionnelles avec feux de classe F, etc.). L'article R4227-29 du Code du travail fixe les obligations pour les lieux de travail. La révision quinquennale est régie par la recommandation APSAD R4. Tout extincteur utilisé, même partiellement, doit être rechargé ou remplacé immédiatement.",
    h3: "Nos prestations",
    list: [
      { text: "Vérification annuelle — contrôle visuel, pression, accessibilité, signalisation, date de péremption" },
      { text: "Recharge — après utilisation ou en fin de vie de l'agent extincteur" },
      { text: "Révision quinquennale — démontage, remplacement des joints et des pièces d'usure" },
      { text: "Remplacement — fourniture et installation de nouveaux appareils conformes" },
      { text: "Implantation & signalétique — conseil sur le positionnement optimal et pose des panneaux" },
      { text: "Rapport d'intervention — remis à chaque passage pour mise à jour du registre de sécurité" },
    ],
    sidebarTitle: "Nos prestations extincteurs",
    sidebarList: [
      "Vérification annuelle",
      "Recharge après utilisation",
      "Révision quinquennale",
      "Remplacement d'appareils",
      "Conseil en implantation",
      "Mise à jour registre",
    ],
    otherLinks: [
      { slug: "ria", label: "RIA" },
      { slug: "baes", label: "BAES" },
      { slug: "hydrants", label: "Poteaux incendie" },
      { slug: "centrales-qti", label: "CATI" },
    ],
  },
  {
    slug: "ria",
    title: "RIA — Robinets d'Incendie Armés",
    titleTag: "RIA — Robinets d'Incendie Armés | MISI",
    label: "Eau sous pression",
    breadcrumbLabel: "RIA — Robinets d'Incendie Armés",
    badgeText: "Installation & entretien",
    Icon: IconDroplets,
    heroImage: "/images/ria-ingeprotect.jpg",
    heroAlt: "RIA — Dévidoir incendie rouge mural",
    intro:
      "Le Robinet d'Incendie Armé (RIA) est un équipement fixe de lutte contre l'incendie raccordé en permanence au réseau d'eau. Il se compose d'un robinet d'arrêt, d'un dévidoir, d'un tuyau semi-rigide et d'une lance.",
    h2: "Qu'est-ce qu'un RIA ?",
    paragraphs: [
      "Le Robinet d'Incendie Armé (RIA) est un équipement fixe de lutte contre l'incendie raccordé en permanence au réseau d'eau. Il se compose d'un robinet d'arrêt, d'un dévidoir, d'un tuyau semi-rigide et d'une lance. Il permet à toute personne d'intervenir rapidement sur un départ de feu.",
      "Le RIA constitue un moyen de première intervention puissant sur les feux de classe A (matières solides). Contrairement à l'extincteur, son alimentation en eau est continue — il ne s'épuise pas et permet d'intervenir dans la durée sur un foyer naissant.",
      "Il en existe trois types normalisés selon le diamètre du tuyau : DN 19 (tuyau de 19 mm, courant en ERP), DN 25 et DN 33 (usage industriel). Le type détermine le débit disponible et la pression requise sur le réseau.",
    ],
    gallery: [
      { src: "/images/ria-ingeprotect.jpg", alt: "RIA dévidoir rouge mural installation" },
      { src: "/images/ria-secourisk.jpg", alt: "RIA dévidoir avec tuyau semi-rigide et lance" },
      { src: "/images/ria-desautel.jpg", alt: "RIA Desautel — installation professionnelle" },
    ],
    regleTitle: "Obligations réglementaires",
    regleText:
      "La norme NF EN 671-3 (maintenance des RIA) et l'arrêté du 25 juin 1980 imposent une vérification annuelle par un technicien qualifié. Les RIA doivent être conformes à la NF EN 671-1 (robinets d'incendie armés à tuyaux semi-rigides) et délivrer un débit minimal de 24 L/min (DN 19), 52 L/min (DN 25) ou 100 L/min (DN 33) à 1 bar résiduel. En ERP, leur nombre et implantation sont définis selon le type et la catégorie de l'établissement (article MS 36 de l'arrêté du 25 juin 1980).",
    h3: "Nos prestations",
    list: [
      { text: "Vérification annuelle NF EN 671-3" },
      { text: "Essai de débit et de pression" },
      { text: "Remplacement de tuyaux — selon état contrôlé et au plus tard tous les 10 ans (NF EN 671-3)" },
      { text: "Remplacement de robinets & lances" },
      { text: "Installation de nouveaux postes" },
      { text: "Rapport d'intervention" },
    ],
    sidebarTitle: "Nos prestations",
    sidebarList: [
      "Vérification annuelle",
      "Essai hydraulique",
      "Remplacement tuyaux & lances",
      "Installation postes RIA",
      "Rapport avec mesures",
    ],
    otherLinks: [
      { slug: "extincteurs", label: "Extincteurs" },
      { slug: "baes", label: "BAES" },
      { slug: "hydrants", label: "Poteaux incendie" },
    ],
  },
  {
    slug: "baes",
    title: "BAES — Blocs d'éclairage de sécurité",
    titleTag: "BAES — Blocs d'éclairage de sécurité | MISI",
    label: "Éclairage de sécurité",
    breadcrumbLabel: "BAES — Blocs d'éclairage de sécurité",
    badgeText: "Vérification & remplacement",
    Icon: IconLightbulb,
    heroImage: "/images/baes-installation.jpg",
    heroAlt: "BAES — bloc autonome d'éclairage de sécurité installé",
    intro:
      "Le Bloc Autonome d'Éclairage de Sécurité (BAES) bascule automatiquement sur batterie en cas de coupure de courant. Il assure l'éclairage des voies d'évacuation ou maintient un niveau minimal.",
    h2: "Qu'est-ce qu'un BAES ?",
    paragraphs: [
      "Le Bloc Autonome d'Éclairage de Sécurité (BAES) bascule automatiquement sur batterie en cas de coupure de courant. Il assure l'éclairage des voies d'évacuation ou maintient un niveau d'éclairement minimal pour permettre une évacuation sécurisée des occupants.",
      "On distingue les BAES d'évacuation (signalisation des issues) et les BAES d'ambiance (maintien de l'éclairage). Les BAES d'évacuation doivent délivrer un flux assigné d'au moins 45 lm. Les BAES d'ambiance doivent assurer un éclairement horizontal d'au moins 5 lux au sol. L'autonomie réglementaire est d'1 heure minimum en ERP ; dans les lieux de travail, les exigences sont fixées par l'arrêté du 14 décembre 2011 relatif à l'éclairage de sécurité des lieux de travail.",
    ],
    gallery: [
      { src: "/images/baes-etanche.jpg", alt: "BAES étanche évacuation compatibilité universelle" },
      { src: "/images/baes-installation.jpg", alt: "Installation BAES éclairage de sécurité" },
      { src: "/images/baes-suivi.jpg", alt: "Suivi et vérification BAES en ERP" },
    ],
    regleTitle: "Obligations réglementaires",
    regleText:
      "La norme NF C 71-800 impose une vérification mensuelle par test de basculement (réalisée par l'exploitant ou un agent désigné) et une vérification annuelle complète par un technicien qualifié (mesure du flux, autonomie réelle, état des batteries). Le remplacement intervient dès que la vérification révèle une autonomie insuffisante — en pratique après 4 à 6 ans pour les batteries NiMH ou Li-Ion, mais la durée de vie des blocs LED peut être significativement supérieure. Le SATI (Système Automatique de Test Intégré) permet de tester automatiquement chaque bloc et de signaler les défauts par voyant ou bus de communication, sans intervention manuelle.",
    h3: "Nos prestations",
    list: [
      { text: "Vérification mensuelle — test de basculement" },
      { text: "Vérification annuelle NF C 71-800" },
      { text: "Mesure d'autonomie réelle" },
      { text: "Remplacement de batteries" },
      { text: "Remplacement d'appareils (LED)" },
      { text: "Installation BAES & SATI" },
    ],
    sidebarTitle: "Nos prestations",
    sidebarList: [
      "Vérification mensuelle",
      "Vérification annuelle",
      "Remplacement batteries",
      "Remplacement appareils",
      "Installation BAES & SATI",
    ],
    otherLinks: [
      { slug: "extincteurs", label: "Extincteurs" },
      { slug: "centrales-qti", label: "CATI" },
      { slug: "desenfumage", label: "Désenfumage" },
    ],
  },
  {
    slug: "hydrants",
    title: "Poteaux incendie",
    titleTag: "Poteaux incendie | MISI",
    label: "DECI",
    breadcrumbLabel: "Poteaux incendie",
    badgeText: "Contrôle & essai hydraulique",
    Icon: IconValve,
    heroImage: "/images/hydrant-poteau.jpg",
    heroAlt: "Poteau incendie rouge sur voie publique",
    intro:
      "Les poteaux incendie et bouches d'incendie constituent les points d'alimentation en eau des services de secours. Raccordés au réseau public ou privé, ils doivent être immédiatement opérationnels.",
    h2: "Poteaux et bouches incendie",
    paragraphs: [
      "Les poteaux incendie et bouches d'incendie constituent les points d'alimentation en eau des services de secours. Raccordés au réseau public ou privé, ils doivent être immédiatement opérationnels lors d'une intervention. Un poteau défaillant peut compromettre gravement l'efficacité des pompiers.",
      "La responsabilité de l'entretien des hydrants privés incombe au propriétaire ou au gestionnaire du site. Des contrôles réguliers sont indispensables pour garantir leur bon fonctionnement.",
    ],
    gallery: [
      { src: "/images/hydrant-poteau.jpg", alt: "Poteau incendie rouge rétroréfléchissant" },
      { src: "/images/hydrant-borne.jpg", alt: "Bouche et borne d'incendie — hydrant" },
    ],
    regleTitle: "Obligations réglementaires",
    regleText:
      "Le décret n°2015-235 relatif à la DECI et les arrêtés préfectoraux locaux définissent les exigences de débit, pression et accessibilité. Les hydrants privés font l'objet de vérifications périodiques dont la fréquence est fixée par le règlement départemental de DECI.",
    h3: "Nos prestations",
    list: [
      { text: "Vérification réglementaire DECI" },
      { text: "Essai hydraulique (débit et pression)" },
      { text: "Manœuvre et graissage des organes" },
      { text: "Dégagement et débroussaillage des accès" },
      { text: "Remplacement de pièces défectueuses" },
      { text: "Rapport de vérification avec mesures" },
    ],
    sidebarTitle: "Nos prestations",
    sidebarList: [
      "Vérification réglementaire DECI",
      "Essai hydraulique",
      "Manœuvre et graissage",
      "Dégagement des accès",
      "Rapport de vérification",
    ],
    otherLinks: [
      { slug: "baches", label: "Bâches incendie" },
      { slug: "ria", label: "RIA" },
    ],
  },
  {
    slug: "baches",
    title: "Bâches incendie",
    titleTag: "Bâches incendie | MISI",
    label: "Réserve d'eau",
    breadcrumbLabel: "Bâches incendie",
    badgeText: "Inspection & contrôle",
    Icon: IconDroplet,
    heroImage: "/images/bache-citerne-souple.jpg",
    heroAlt: "Citerne souple réserve incendie",
    intro:
      "La bâche incendie est une réserve d'eau artificielle destinée à alimenter les secours en cas d'incendie, lorsque le réseau public est absent, insuffisant ou trop éloigné.",
    h2: "Qu'est-ce qu'une bâche incendie ?",
    paragraphs: [
      "La bâche incendie est une réserve d'eau artificielle destinée à alimenter les secours en cas d'incendie, lorsque le réseau public est absent, insuffisant ou trop éloigné. Elle peut être enterrée, semi-enterrée ou aérienne, et doit contenir un volume d'eau défini en fonction du risque à couvrir.",
      "Ces ouvrages sont souvent oubliés dans les plans de maintenance, alors qu'une bâche inaccessible ou non remplie peut avoir des conséquences dramatiques lors d'une intervention des pompiers.",
    ],
    gallery: [
      { src: "/images/bache-citerne-souple.jpg", alt: "Citerne souple réserve incendie 120m³ à 500m³" },
      { src: "/images/bache-reserve-120.jpg", alt: "Réserve incendie citerne souple 120m³" },
      { src: "/images/bache-antidesherbage.jpg", alt: "Bâche anti-désherbage pour citerne incendie" },
    ],
    regleTitle: "Obligations réglementaires",
    regleText:
      "Le règlement départemental de DECI fixe les exigences de volume (généralement 120 m³ minimum pour 2 heures d'alimentation à 60 m³/h), d'accessibilité et d'entretien. Une vérification périodique est obligatoire.",
    h3: "Nos prestations",
    list: [
      { text: "Inspection visuelle — état général et accessibilité" },
      { text: "Contrôle du niveau et volume disponible" },
      { text: "Contrôle d'étanchéité — détection des fuites" },
      { text: "Nettoyage de la réserve" },
      { text: "Vérification des vannes et raccords sapeurs-pompiers" },
      { text: "Rapport avec préconisations de remise en état" },
    ],
    sidebarTitle: "Nos prestations",
    sidebarList: [
      "Inspection réglementaire DECI",
      "Contrôle du volume",
      "Contrôle d'étanchéité",
      "Nettoyage",
      "Vérification vannes & raccords",
    ],
    otherLinks: [
      { slug: "hydrants", label: "Poteaux incendie" },
      { slug: "ria", label: "RIA" },
    ],
  },
  {
    slug: "portes-coupe-feu",
    title: "Portes coupe-feu (PCF)",
    titleTag: "Portes coupe-feu (PCF) | MISI",
    label: "Compartimentage",
    breadcrumbLabel: "Portes coupe-feu (PCF)",
    badgeText: "Installation & maintenance",
    Icon: IconDoor,
    heroImage: "/images/pcf-battante-ei60.jpg",
    heroAlt: "Porte coupe-feu battante EI60",
    intro:
      "La porte coupe-feu est un élément essentiel du cloisonnement passif contre l'incendie. Elle ralentit la propagation des flammes, des fumées et de la chaleur d'un compartiment à l'autre.",
    h2: "Le rôle des portes coupe-feu",
    paragraphs: [
      "La porte coupe-feu est un élément essentiel du cloisonnement passif contre l'incendie. Elle ralentit la propagation des flammes, des fumées et de la chaleur d'un compartiment à l'autre, laissant aux occupants le temps d'évacuer et aux secours celui d'intervenir.",
      "Une porte coupe-feu calée ouverte, mal réglée ou dont le ferme-porte est défaillant perd toute sa fonction. C'est l'un des défauts les plus fréquemment relevés lors des visites des commissions de sécurité.",
    ],
    gallery: [
      { src: "/images/pcf-fermetalu.jpg", alt: "Porte coupe-feu acier — installation ERP" },
      { src: "/images/pcf-coulissante.png", alt: "Porte coulissante coupe-feu" },
      { src: "/images/pcf-battante-ei60.jpg", alt: "Porte battante coupe-feu EI60 structure renforcée" },
    ],
    regleTitle: "Obligations réglementaires",
    regleText:
      "L'arrêté du 25 juin 1980 (ERP) impose que les portes coupe-feu soient maintenues en bon état de fonctionnement et vérifiées régulièrement. Elles ne peuvent pas être maintenues ouvertes sauf par des dispositifs homologués à déclenchement automatique (électro-aimants). Les blocs-portes doivent être certifiés selon la norme NF EN 1634-1 et porter le marquage CE obligatoire. Leur classement en résistance au feu est exprimé en EI (étanchéité et isolation thermique) : EI 30, EI 60, EI 90, EI 120. Tout remplacement de ferme-porte, joint ou vantail doit utiliser des pièces certifiées compatibles — toute modification non conforme invalide le classement de résistance au feu.",
    h3: "Nos prestations",
    list: [
      { text: "Vérification réglementaire — classement, joints, fermeture automatique" },
      { text: "Réglage des ferme-portes — force et vitesse de fermeture" },
      { text: "Remplacement de ferme-portes défectueux" },
      { text: "Remplacement de joints intumescents dégradés" },
      { text: "Installation de blocs-portes certifiés EI 30 à EI 120 (ancienne désignation CF 30 à CF 120) conformes NF EN 1634-1, avec marquage CE obligatoire" },
      { text: "Dispositifs de maintien ouvert (électro-aimants à déclenchement automatique)" },
    ],
    sidebarTitle: "Nos prestations",
    sidebarList: [
      "Vérification réglementaire",
      "Réglage ferme-portes",
      "Remplacement ferme-portes",
      "Joints intumescents",
      "Pose blocs-portes EI 30 à EI 120",
      "Électro-aimants à déclenchement auto.",
    ],
    otherLinks: [
      { slug: "desenfumage", label: "Désenfumage" },
      { slug: "centrales-qti", label: "CATI" },
      { slug: "extincteurs", label: "Extincteurs" },
    ],
  },
  {
    slug: "desenfumage",
    title: "Désenfumage",
    titleTag: "Désenfumage — exutoires et ouvrants | MISI",
    label: "Désenfumage",
    breadcrumbLabel: "Désenfumage",
    badgeText: "Vérification & entretien",
    Icon: IconWind,
    heroImage: "/images/desenfumage-installation.jpg",
    heroAlt: "Exutoires de désenfumage de toiture",
    intro:
      "La fumée est responsable de la grande majorité des décès lors d'incendies. Le désenfumage permet d'évacuer les fumées et les gaz chauds hors des volumes concernés.",
    h2: "L'importance du désenfumage",
    paragraphs: [
      "La fumée est responsable de la grande majorité des décès lors d'incendies. Le désenfumage permet d'évacuer les fumées et les gaz chauds hors des volumes concernés, maintenant des conditions d'évacuation acceptables pour les occupants et facilitant l'intervention des secours.",
      "Le désenfumage naturel repose sur la physique des fluides : les fumées chaudes montent et sont évacuées par des ouvrants en partie haute (exutoires, fenêtres hautes), tandis que l'air frais entre par des amenées d'air en partie basse.",
    ],
    gallery: [
      { src: "/images/desenfumage-trappe.jpg", alt: "Trappe de désenfumage de toiture" },
      { src: "/images/desenfumage-installation.jpg", alt: "Installation exutoire de désenfumage" },
      { src: "/images/desenfumage-treuil.jpg", alt: "Treuil de désenfumage câble certifié NF" },
    ],
    regleTitle: "Obligations réglementaires",
    regleText:
      "L'Instruction Technique n° 263 du 30 décembre 1994 et l'arrêté du 25 juin 1980 définissent les exigences de désenfumage selon le type d'ERP. Les exutoires naturels doivent être conformes à la norme NF EN 12101-2. Les volets et clapets de désenfumage relèvent notamment de la norme NF S 61-937 et doivent se déclencher automatiquement en cas d'alarme incendie. Les systèmes font l'objet d'une vérification annuelle. Les commandes manuelles doivent être accessibles, signalées et fonctionnelles à tout moment.",
    h3: "Nos prestations",
    list: [
      { text: "Vérification des exutoires de toiture — état, déverrouillage, ouverture effective" },
      { text: "Contrôle des ouvrants de désenfumage — fenêtres, lanterneaux, trappes" },
      { text: "Vérification des commandes manuelles — accessibilité, câbles" },
      { text: "Contrôle des amenées d'air — grilles et volets" },
      { text: "Maintenance des mécanismes — graissage, ressorts" },
      { text: "Rapport avec liste des anomalies et préconisations" },
    ],
    sidebarTitle: "Nos prestations",
    sidebarList: [
      "Vérification exutoires de toiture",
      "Contrôle ouvrants & lanterneaux",
      "Commandes manuelles",
      "Amenées d'air",
      "Maintenance mécanismes",
      "Rapport d'intervention",
    ],
    otherLinks: [
      { slug: "portes-coupe-feu", label: "Portes coupe-feu" },
      { slug: "centrales-qti", label: "CATI" },
    ],
  },
  {
    slug: "reflex-o-feu",
    title: "Réflex O Feu — Extinction pour armoires électriques",
    titleTag: "Réflex O Feu — Extinction incendie armoires électriques | MISI",
    label: "Armoires électriques",
    breadcrumbLabel: "Réflex O Feu",
    badgeText: "Détection & extinction automatique",
    Icon: IconServer,
    heroImage: "/images/reflex-o-feu.jpg",
    heroAlt: "Cylindre Réflex O Feu et armoire électrique protégée",
    intro:
      "Réflex O Feu (ROF) est un système autonome de détection et d'extinction dédié aux armoires électriques industrielles. Nous l'installons et en assurons la maintenance, avec une extinction ciblée au plus près des composants à risque, en moins de 3 secondes et sans résidu.",
    h2: "Qu'est-ce que Réflex O Feu ?",
    paragraphs: [
      "Les incendies d'origine électrique — échauffement de connexions, surcharge, court-circuit, défaut d'isolement — démarrent le plus souvent à l'intérieur même des armoires. Or ces armoires sont ventilées, traversées de câbles et rarement étanches : les méthodes d'extinction classiques, qui supposent un volume clos, y perdent leur efficacité. Réflex O Feu est conçu pour ces conditions réelles d'exploitation.",
      "La détection se fait directement au cœur des composants sensibles (jeux de barres, variateurs, batteries de condensateurs, onduleurs), par tube thermique linéaire ou par tête thermique ponctuelle calibrée. En cas d'échauffement anormal, le déclenchement est purement mécanique — il fonctionne sans alimentation électrique ni centrale. L'agent extincteur est alors diffusé sur la zone à risque, et un contact sec reste disponible pour couper l'alimentation et la ventilation, mettant l'installation en sécurité.",
      "L'agent utilisé est le FK-5-1-12 (fluide diélectrique) : non conducteur, il est compatible avec des équipements sous tension, ne laisse aucun résidu et n'occasionne aucun nettoyage ni dégât collatéral sur les équipements adjacents. Son impact environnemental est faible (potentiel de réchauffement global proche de 1, sans action sur la couche d'ozone) et il est conforme au règlement européen F-Gas. L'extinction localisée limite l'arrêt de production et préserve les équipements voisins.",
    ],
    gallery: [
      { src: "/images/reflex-o-feu-armoire.jpg", alt: "Tube thermique Réflex O Feu courant sur les rangées d'une armoire électrique" },
      { src: "/images/reflex-o-feu-coffret.jpg", alt: "Coffret électrique équipé d'un cylindre Réflex O Feu" },
      { src: "/images/reflex-o-feu-composants.jpg", alt: "Détection Réflex O Feu au plus près des composants électriques" },
    ],
    regleTitle: "Certifications & conformité",
    regleText:
      "Réflex O Feu est certifié ANPI NTN 128-L, une certification de performance mesurée sur feu réel pour armoires électriques ventilées, et répond à certaines exigences des référentiels EN 15004 et NFPA 2001 relatifs aux systèmes d'extinction à gaz. Les équipements sous pression portent le marquage CE au titre de la directive PED, et les ampoules de déclenchement thermique sont certifiées UL. Côté exploitation, l'installation s'inscrit dans les obligations du Code du travail en matière de moyens de lutte contre l'incendie (articles R4227-28 à R4227-41) et de prévention des risques électriques. Chaque projet est livré avec un dossier technique complet : certificats de conformité, fiches de données de sécurité de l'agent, plans d'implantation et rapports d'essais nécessaires aux vérifications périodiques.",
    h3: "Nos prestations Réflex O Feu",
    list: [
      { text: "Étude préalable — analyse de risque, calcul de la quantité d'agent, dimensionnement du réseau de diffusion" },
      { text: "Installation sur armoire en service — sans travaux lourds, sans coupure d'exploitation" },
      { text: "Raccordement aux systèmes existants — coupure d'alimentation et de ventilation, report d'alarme, GTC/SSI" },
      { text: "Maintenance préventive annuelle — prise de pression des cylindres, contrôle des déclencheurs (tube et tête)" },
      { text: "Mise à jour du registre de sécurité — rapport d'intervention à chaque passage" },
      { text: "Dossier technique — certificats, fiches FK-5-1-12, plans et rapports d'essais" },
    ],
    sidebarTitle: "Domaines d'application",
    sidebarList: [
      "TGBT & tableaux électriques",
      "Automates, variateurs, onduleurs",
      "Baies informatiques & data centers",
      "Télécoms & baies de brassage",
      "Machines-outils & robots",
      "Environnements spécifiques (études sur mesure)",
    ],
    otherLinks: [
      { slug: "centrales-qti", label: "CATI" },
      { slug: "baes", label: "BAES" },
      { slug: "extincteurs", label: "Extincteurs" },
    ],
  },
];

export function getPrestation(slug: string) {
  return prestations.find((p) => p.slug === slug);
}

export const secteurs = [
  { Icon: IconSchool, title: "ERP", text: "Établissements recevant du public — écoles, commerces, hôtels, restaurants." },
  { Icon: IconApartment, title: "IGH", text: "Immeubles de grande hauteur — exigences renforcées et suivi rigoureux." },
  { Icon: IconFactory, title: "Industrie & ICPE", text: "Sites industriels et installations classées pour la protection de l'environnement." },
  { Icon: IconSchool, title: "Collectivités", text: "Mairies, établissements scolaires, structures publiques et parapubliques." },
  { Icon: IconStore, title: "Commerces & Bureaux", text: "Locaux professionnels, sièges sociaux, centres commerciaux." },
  { Icon: IconApartment, title: "Copropriétés & Habitat", text: "Parties communes, parkings, résidences collectives." },
];
