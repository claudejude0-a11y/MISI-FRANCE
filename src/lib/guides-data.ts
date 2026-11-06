/**
 * Guides « questions fréquentes » : réponses courtes, sourcées sur les textes
 * officiels ou l'INRS. Vérifier les références avant toute modification : une
 * erreur réglementaire nuit à la crédibilité du site.
 */

export type GuideSection = { h2: string; paragraphs?: string[]; bullets?: string[] };
export type GuideSource = { label: string; url: string };

export type Guide = {
  slug: string;
  title: string;
  titleTag: string;
  description: string;
  /** Réponse directe, affichée en tête de page. */
  answer: string;
  sections: GuideSection[];
  sources: GuideSource[];
  /** Prestation liée (slug sous `/prestations/`). */
  prestation?: string;
};

const INRS = {
  label: "INRS, brochure ED 828, « Principales vérifications périodiques » (édition 2026)",
  url: "https://inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-828.pdf",
};
const MS = {
  label: "Légifrance, articles MS 72 à MS 75 du règlement de sécurité ERP (arrêté du 25 juin 1980)",
  url: "https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000290033/LEGISCTA000020317753/",
};
const HABITATION = {
  label: "Légifrance, arrêté du 31 janvier 1986 (bâtiments d'habitation)",
  url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000474032/",
};

export const guides: Guide[] = [
  {
    slug: "verification-extincteurs-obligatoire",
    title: "La vérification des extincteurs est-elle obligatoire ?",
    titleTag: "Vérification des extincteurs : obligatoire et tous les combien ? | MISI",
    description:
      "Vérification annuelle des extincteurs : ce que prévoient le règlement ERP, le Code du travail et les normes, et ce qui se passe à 5, 10 et 15 ans.",
    answer:
      "Oui. Il faut prévoir une vérification tous les ans : elle est imposée au moins une fois par an dans les établissements recevant du public (ERP), et c'est la référence professionnelle dans les autres locaux.",
    prestation: "extincteurs",
    sections: [
      {
        h2: "Ce que disent les textes",
        bullets: [
          "ERP : le règlement de sécurité (article MS 73) impose de vérifier les appareils mobiles au moins une fois par an, en cours d'exploitation.",
          "Lieux de travail : le Code du travail (articles R4227-29 et R4227-39) impose des extincteurs adaptés, en état de fonctionner, et des essais et exercices au moins tous les six mois. La fréquence annuelle vient de la norme NF S 61-919 et de la règle APSAD R4.",
          "La vérification annuelle se fait avec une tolérance de deux mois, selon l'INRS.",
        ],
      },
      {
        h2: "Ce qui s'ajoute avec le temps",
        bullets: [
          "Inspection régulière : au moins tous les trois mois, de préférence tous les mois.",
          "Maintenance approfondie : à 5 ans et à 15 ans.",
          "Révision en atelier : à 10 ans.",
          "Durée de vie : 20 ans pour les appareils à eau ou à poudre, selon la norme citée par l'INRS.",
        ],
      },
      {
        h2: "Que devient la vérification dans le registre ?",
        paragraphs: [
          "Chaque vérification est notée sur l'appareil et consignée dans le registre de sécurité. MISI signe le registre à la fin du passage et envoie son rapport par e-mail.",
        ],
      },
    ],
    sources: [MS, INRS, { label: "Code du travail, article R4227-39", url: "https://code.travail.gouv.fr/code-du-travail/r4227-39" }],
  },
  {
    slug: "verification-baes",
    title: "Quelles vérifications pour les BAES ?",
    titleTag: "Vérification des BAES : tous les mois, tous les 6 mois, tous les ans | MISI",
    description:
      "Blocs d'éclairage de sécurité : essai de basculement, contrôle d'autonomie et vérification annuelle. Les fréquences à respecter, en ERP et en lieu de travail.",
    answer:
      "Un BAES se contrôle à trois rythmes : un essai de basculement chaque mois, un contrôle d'autonomie tous les six mois et une vérification générale chaque année.",
    prestation: "baes",
    sections: [
      {
        h2: "Le calendrier",
        bullets: [
          "Chaque mois : essai de passage en éclairage de sécurité.",
          "Tous les 6 mois : contrôle de l'autonomie (une heure sur les lieux de travail).",
          "Chaque année : vérification générale de l'installation.",
        ],
      },
      {
        h2: "Qui fait quoi ?",
        paragraphs: [
          "Les contrôles mensuels et semestriels peuvent être faits par l'exploitant ou une personne qualifiée. Certains blocs dits SATI réalisent eux-mêmes une partie des tests, mais il faut en suivre les résultats. La vérification annuelle est faite par un technicien, ou par un organisme accrédité ou une personne qualifiée sur les lieux de travail.",
          "MISI peut réaliser ces passages semestriels et annuels et les inscrire au registre de sécurité.",
        ],
      },
    ],
    sources: [
      INRS,
      {
        label: "Légifrance, articles EL 18 et EL 19 du règlement de sécurité ERP",
        url: "https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000290033/LEGISCTA000020314182/2023-09-20",
      },
    ],
  },
  {
    slug: "verification-ria-desenfumage-portes-coupe-feu",
    title: "RIA, désenfumage, portes coupe-feu : quelles vérifications ?",
    titleTag: "RIA, désenfumage, portes coupe-feu : quelles vérifications ? | MISI",
    description:
      "Les fréquences de vérification à connaître pour les RIA, le désenfumage et les portes coupe-feu, selon le type de bâtiment.",
    answer:
      "En ERP, les équipements de sécurité se vérifient au moins une fois par an. Pour les portes coupe-feu, la fréquence dépend du bâtiment et du type de porte : il faut d'abord regarder les textes applicables.",
    sections: [
      {
        h2: "RIA",
        paragraphs: [
          "La référence professionnelle (règle APSAD R5) prévoit une surveillance chaque trimestre, une maintenance chaque année et un contrôle de conformité après 10 ans.",
        ],
      },
      {
        h2: "Désenfumage",
        paragraphs: [
          "En ERP, le désenfumage se vérifie chaque année. Un contrôle tous les trois ans par un organisme agréé s'ajoute dans certains cas : désenfumage mécanique avec un système de sécurité incendie de catégorie A ou B. Dans les immeubles d'habitation concernés, l'arrêté de 1986 prévoit un contrôle au moins annuel.",
        ],
      },
      {
        h2: "Portes coupe-feu",
        paragraphs: [
          "Nous n'avons pas trouvé de fréquence unique valable pour toutes les portes. L'exploitant doit s'assurer qu'elles fonctionnent correctement, et les portes automatiques des ERP demandent un contrat d'entretien. Nous définissons le suivi avec vous selon votre bâtiment.",
        ],
      },
    ],
    sources: [INRS, MS, HABITATION],
  },
  {
    slug: "obligations-securite-incendie-erp-entreprise-copropriete",
    title: "Quelles obligations pour un ERP, une entreprise ou une copropriété ?",
    titleTag: "Sécurité incendie : obligations ERP, entreprise, copropriété | MISI",
    description:
      "Les principales obligations de sécurité incendie selon votre bâtiment : établissement recevant du public, lieu de travail ou immeuble d'habitation.",
    answer:
      "Les règles dépendent du bâtiment. Dans tous les cas, le responsable doit maintenir ses équipements en bon état et pouvoir prouver qu'ils sont vérifiés.",
    sections: [
      {
        h2: "ERP",
        bullets: [
          "Équipements entretenus et maintenus en bon état de fonctionnement (article MS 72).",
          "Vérifications au moins annuelles (article MS 73).",
          "Registre de sécurité pour les catégories 1 à 4 (article MS 75 et Code de la construction).",
          "Pour la 5e catégorie, les règles sont adaptées : un technicien compétent contrôle les moyens de secours (article PE 4).",
        ],
      },
      {
        h2: "Entreprise et lieu de travail",
        bullets: [
          "Au moins un extincteur portatif à eau pulvérisée pour 200 m² et par niveau, plus des appareils adaptés aux risques particuliers (article R4227-29).",
          "Consigne de sécurité incendie ou instructions d'évacuation selon l'établissement (article R4227-37).",
          "Essais et exercices au moins tous les six mois, consignés dans un registre (article R4227-39).",
        ],
      },
      {
        h2: "Copropriété et habitation",
        bullets: [
          "Parkings : un extincteur portatif pour quinze véhicules et à chaque niveau, plus des bacs à sable (article 96 de l'arrêté de 1986).",
          "Consignes et plans affichés dans les halls d'entrée (article 100).",
          "Contrôles au moins annuels de la détection, du désenfumage et des colonnes sèches, avec un registre de sécurité (articles 101 et 103), pour les installations présentes.",
        ],
      },
      {
        h2: "Besoin d'y voir clair sur votre bâtiment ?",
        paragraphs: [
          "Ces règles sont un résumé. Elles varient selon la catégorie, la date et l'usage du bâtiment. Nous pouvons regarder votre situation lors d'un devis.",
        ],
      },
    ],
    sources: [
      MS,
      { label: "Code du travail, article R4227-29", url: "https://code.travail.gouv.fr/code-du-travail/r4227-29" },
      HABITATION,
      INRS,
    ],
  },
  {
    slug: "registre-de-securite",
    title: "Qu'est-ce qu'un registre de sécurité, et qui doit en avoir un ?",
    titleTag: "Registre de sécurité incendie : à quoi il sert, qui doit l'avoir | MISI",
    description:
      "Le registre de sécurité rassemble les vérifications et les travaux de sécurité incendie. Qui doit le tenir en ERP, en copropriété, et que doit-il contenir ?",
    answer:
      "C'est le dossier qui prouve le suivi de la sécurité incendie d'un bâtiment. Il est exigé dans les ERP de catégories 1 à 4 et dans les immeubles d'habitation concernés par l'arrêté de 1986.",
    sections: [
      {
        h2: "Qui doit le tenir ?",
        bullets: [
          "ERP de catégories 1 à 4 : obligatoire.",
          "ERP de 5e catégorie sans locaux à sommeil : selon des guides officiels, le règlement incendie ne l'impose pas, mais il reste une bonne pratique. Certaines sources sont moins nuancées : vérifiez auprès de votre commission de sécurité.",
          "Immeubles d'habitation : le propriétaire tient un registre de sécurité pour les installations concernées (arrêté de 1986).",
        ],
      },
      {
        h2: "Que contient-il ?",
        paragraphs: [
          "On y classe le dossier technique de l'installation, ainsi que les documents, rapports et attestations établis après une vérification ou des travaux (article MS 75).",
        ],
      },
      {
        h2: "Comment MISI s'en occupe",
        paragraphs: [
          "À la fin de l'intervention, le technicien signe le registre. Le rapport est ensuite envoyé par e-mail, pour être imprimé ou intégré au registre.",
        ],
      },
    ],
    sources: [
      MS,
      {
        label: "Préfecture de la Drôme, guide de sécurité incendie des ERP de 5e catégorie",
        url: "https://www.drome.gouv.fr/contenu/telechargement/19275/127323/file/guide_sur_la_securite_incendie_dans_les_erp_de_5eme_categorie_sans_locaux_a_sommeil.pdf",
      },
      HABITATION,
    ],
  },
  {
    slug: "plan-evacuation-obligatoire",
    title: "Un plan d'évacuation est-il obligatoire ?",
    titleTag: "Plan d'évacuation obligatoire ? ERP, entreprise, copropriété | MISI",
    description:
      "Plan d'évacuation et consignes : ce qui est demandé dans les ERP, les entreprises et les immeubles d'habitation, et la différence avec le plan d'intervention.",
    answer:
      "Oui, sous une forme qui dépend du bâtiment : consignes et instructions d'évacuation sur les lieux de travail, plan d'intervention à l'entrée dans les ERP, plans et consignes dans les halls d'immeuble.",
    prestation: "plans-signaletique",
    sections: [
      {
        h2: "Selon votre bâtiment",
        bullets: [
          "Lieu de travail : une consigne de sécurité incendie est établie et affichée de manière très apparente dans les établissements concernés (article R4227-37). Dans les autres, des instructions assurent l'évacuation des personnes.",
          "ERP : un plan schématique, sous forme de pancarte inaltérable, est installé à chaque entrée du bâtiment pour les sapeurs-pompiers (article MS 41).",
          "Habitation : les consignes et plans sont affichés dans les halls d'entrée (article 100 de l'arrêté de 1986).",
        ],
      },
      {
        h2: "Plan d'évacuation ou plan d'intervention ?",
        paragraphs: [
          "Le plan d'évacuation guide les occupants vers la sortie. Le plan d'intervention aide les secours à repérer le bâtiment, ses dégagements, ses locaux à risques et ses organes de coupure.",
        ],
      },
    ],
    sources: [
      {
        label: "Légifrance, article MS 41 du règlement de sécurité ERP",
        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000021231064",
      },
      { label: "Code du travail, article R4227-37", url: "https://code.travail.gouv.fr/code-du-travail/r4227-37" },
      HABITATION,
    ],
  },
  {
    slug: "prix-et-deroulement-intervention",
    title: "Combien ça coûte, et comment se passe une intervention ?",
    titleTag: "Prix et déroulement d'une intervention de sécurité incendie | MISI",
    description:
      "Tarif sur devis selon le nombre et le type d'équipements. Étude sur place pour un nouveau client, rendez-vous et rapport envoyé sous 24 à 48 h pour un client suivi.",
    answer:
      "Le prix se fait sur devis, selon le nombre et le type d'équipements. Chaque intervention se fait sur rendez-vous. Pour un nouveau client, nous commençons par une étude sur place.",
    sections: [
      {
        h2: "Vous êtes un nouveau client",
        bullets: [
          "Vous nous indiquez ce que vous avez sur place et nous prenons rendez-vous. Le devis est envoyé par e-mail et, en général, signé avant notre venue.",
          "Sur place, nous faisons toujours une étude, même si vous nous avez déjà donné un nombre d'appareils par téléphone : il n'est pas toujours simple d'identifier soi-même le type de matériel.",
          "Nous contrôlons l'ensemble du matériel, sa quantité exacte et son emplacement, ainsi que les locaux, les locaux à risque et la circulation.",
          "Nous enregistrons ces informations dans notre propre registre, pour préparer les passages suivants.",
          "Si le devis n'a pas encore été établi, nous vous l'envoyons par e-mail après cette étude.",
        ],
      },
      {
        h2: "Vous êtes déjà client",
        bullets: [
          "Nous prenons rendez-vous avec vous.",
          "Le technicien arrive préparé : il connaît déjà le nombre, le type et l'emplacement de votre matériel.",
          "Il réalise l'intervention, puis remplit le registre de sécurité.",
          "Vous recevez le rapport d'intervention par e-mail sous 24 heures, 48 heures au maximum.",
        ],
      },
      {
        h2: "Ce qui détermine le prix",
        paragraphs: ["Le nombre et le type d'équipements à traiter, ainsi que votre site. Le devis est gratuit."],
      },
    ],
    sources: [],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
