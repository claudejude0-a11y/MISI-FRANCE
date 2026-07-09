"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Hover } from "@/components/animation/springs/hover";
import { Inview } from "@/components/animation/springs/in-view";
import { IconArrowRight, IconPlus } from "@/components/icons";

const cards = [
  {
    slug: "extincteurs",
    tag: "Premier secours",
    title: "Extincteurs",
    text: "Vérification annuelle, recharge, révision quinquennale et remplacement, selon les normes en vigueur.",
    image: "/images/extincteurs.jpg",
    size: "large",
  },
  {
    slug: "ria",
    tag: "Eau sous pression",
    title: "RIA",
    text: "Robinets d'Incendie Armés — installation, essai hydraulique, remplacement tuyaux et lances.",
    image: "/images/ria-ingeprotect.jpg",
    size: "normal",
  },
  {
    slug: "baes",
    tag: "Éclairage de sécurité",
    title: "BAES",
    text: "Blocs autonomes d'éclairage — vérification mensuelle & annuelle, remplacement batteries et appareils.",
    image: "/images/baes-installation.jpg",
    size: "normal",
  },
  {
    slug: "centrales-qti",
    tag: "Supervision & Gestion technique",
    title: "CATI",
    text: "Centrale d'Alarme Technique Incendie — supervision globale de vos équipements de sécurité, détection, PPMS et vidéosurveillance en temps réel.",
    image: "/images/alarme-mercury.png",
    size: "large",
  },
  {
    slug: "desenfumage",
    tag: "Désenfumage",
    title: "Désenfumage",
    text: "Exutoires, ouvrants, commandes manuelles et amenées d'air — vérification et entretien.",
    image: "/images/desenfumage-installation.jpg",
    size: "normal",
  },
  {
    slug: "hydrants",
    tag: "DECI",
    title: "Poteaux incendie",
    text: "Essai hydraulique, manœuvre, dégagement des accès — conformité DECI.",
    image: "/images/hydrant-poteau.jpg",
    size: "normal",
  },
  {
    slug: "baches",
    tag: "Réserve d'eau",
    title: "Bâches incendie",
    text: "Inspection, contrôle du volume, étanchéité, nettoyage des réserves d'eau privées.",
    image: "/images/bache-citerne-souple.jpg",
    size: "normal",
  },
  {
    slug: "portes-coupe-feu",
    tag: "Compartimentage",
    title: "Portes coupe-feu",
    text: "Réglage ferme-portes, joints intumescents, blocs-portes CF30 à CF120.",
    image: "/images/pcf-fermetalu.jpg",
    size: "normal",
  },
  {
    slug: "ppms",
    tag: "Organisation",
    title: "PPMS — Plans Particuliers de Mise en Sûreté",
    text: "Élaboration, mise à jour et accompagnement à la mise en œuvre de vos plans de gestion de crise. Exercices de simulation inclus.",
    image: "/images/alarme-ppms.jpg",
    size: "normal",
  },
  {
    slug: "reflex-o-feu",
    tag: "Armoires électriques",
    title: "Réflex O Feu",
    text: "Détection et extinction automatique pour armoires électriques industrielles — agent FK-5-1-12 sans résidu, extinction en moins de 3 secondes.",
    image: "/images/reflex-o-feu.jpg",
    size: "wide",
  },
];

const sizeClass: Record<string, string> = {
  large: "md:col-span-2",
  wide: "md:col-span-2",
  normal: "",
};

function BentoCard({ card, index }: { card: (typeof cards)[number]; index: number }) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Inview
      from={{ opacity: 0, y: 36 }}
      to={{ opacity: 1, y: 0 }}
      mode="once"
      delayIn={index * 70}
      config={{ tension: 200, friction: 24 }}
      className={sizeClass[card.size]}
    >
      <Link
        ref={linkRef}
        href={`/prestations/${card.slug}`}
        className="group block [perspective:1400px]"
      >
        <Hover
          trigger={linkRef}
          from={{ rotateX: 0, rotateY: 0, y: 0, scale: 1 }}
          to={{ rotateX: -5, rotateY: 5, y: -6, scale: 1.02 }}
          config={{ tension: 300, friction: 22 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/8 bg-surface p-8 hover:border-red/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <div className={`relative -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-[28px] ${card.size === "large" ? "h-[230px]" : "h-[190px]"}`}>
            <Image src={card.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-surface to-transparent" />
          </div>
          <span className="font-tech mb-2 text-[10px] font-medium tracking-[0.15em] text-red uppercase">{card.tag}</span>
          <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
          <p className="mb-4 text-sm text-white/60">{card.text}</p>
          <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-red">
            En savoir plus <IconArrowRight width={13} height={13} />
          </span>
        </Hover>
      </Link>
    </Inview>
  );
}

export function ServicesBento() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <BentoCard key={card.slug} card={card} index={i} />
      ))}

      <Link
        href="/contact"
        className="flex min-h-[90px] items-center gap-4 rounded-[28px] border border-dashed border-white/8 bg-white/[0.01] p-8 transition hover:border-white/16 md:col-span-2"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-surface-2 text-red">
          <IconPlus width={20} height={20} />
        </div>
        <div>
          <h3 className="mb-1.5 text-base font-semibold text-white">Besoin spécifique ?</h3>
          <p className="text-sm text-white/60">Vous avez un équipement non listé ou une problématique particulière ? Contactez-nous.</p>
        </div>
        <span className="ml-auto flex shrink-0 items-center gap-1.5 text-sm font-semibold whitespace-nowrap text-red">
          Nous contacter <IconArrowRight width={13} height={13} />
        </span>
      </Link>
    </div>
  );
}
