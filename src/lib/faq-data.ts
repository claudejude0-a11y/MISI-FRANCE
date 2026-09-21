/**
 * Home-page FAQ content — shared between the interactive `Faq` component and
 * the `FAQPage` JSON-LD helper so the rich-result markup always matches what
 * visitors actually read.
 */
export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "Qui est concerné par les vérifications réglementaires incendie ?",
    a: "Tout exploitant d'un ERP, IGH, ERT ou immeuble d'habitation collectif est tenu de maintenir ses équipements de sécurité incendie en bon état de fonctionnement et de faire vérifier périodiquement leur conformité par un professionnel qualifié.",
  },
  {
    q: "À quelle fréquence mes équipements doivent-ils être contrôlés ?",
    a: "Cela dépend de l'équipement : contrôle annuel pour les extincteurs et RIA, vérification mensuelle et annuelle pour les BAES, vérification annuelle pour le désenfumage et les portes coupe-feu. Nous établissons un calendrier adapté à votre établissement lors du premier audit.",
  },
  {
    q: "Que risque-t-on en cas de non-conformité ?",
    a: "La commission de sécurité peut imposer une mise en demeure, restreindre l'activité de l'établissement ou en ordonner la fermeture administrative. En cas de sinistre, un défaut d'entretien avéré engage également la responsabilité civile et pénale de l'exploitant.",
  },
  {
    q: "Intervenez-vous sur des installations posées par une autre entreprise ?",
    a: "Oui. Nous reprenons la maintenance de tout parc existant, quel que soit l'installateur d'origine. Un premier passage d'audit permet d'établir l'état réel de vos équipements avant la mise en place d'un contrat de suivi.",
  },
  {
    q: "Combien de temps prend une intervention type ?",
    a: "Une vérification standard (extincteurs, BAES) se règle en général en une demi-journée pour un site de taille moyenne. Les interventions plus lourdes (désenfumage, portes coupe-feu) font l'objet d'une planification communiquée à l'avance.",
  },
  {
    q: "Le registre de sécurité est-il inclus dans vos prestations ?",
    a: "Oui, chaque passage donne lieu à un rapport détaillé et à la mise à jour de votre registre de sécurité, opposable lors du contrôle de la commission de sécurité compétente.",
  },
];
