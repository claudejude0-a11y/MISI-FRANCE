"use client";

import { useState } from "react";

import { IconChevronDown } from "@/components/icons";

const faqs = [
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

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-[780px] flex-col gap-3">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border bg-surface transition ${isOpen ? "border-white/16" : "border-white/8"}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6.5 py-5.5 text-left text-sm font-semibold text-white"
            >
              <span>{item.q}</span>
              <IconChevronDown
                width={16}
                height={16}
                className={`shrink-0 text-red transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6.5 pb-5.5 text-sm leading-6 text-white/60">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
