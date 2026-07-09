import Link from "next/link";

import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Eyebrow } from "@/components/common/Eyebrow";
import { RevealItem } from "@/components/common/RevealItem";
import { ZoomImage } from "@/components/common/ZoomImage";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { PrestationHeroPhoto } from "@/components/prestation/PrestationHeroPhoto";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";

export const metadata = buildMetadata({
  title: "Plans d'évacuation & signalétique de sécurité | MISI",
  description:
    "MISI conçoit, imprime et pose vos plans d'évacuation, plans d'intervention, plans de chambre, consignes de sécurité et votre signalétique incendie — conformes NF X08-070 et NF EN ISO 7010.",
  url: "/prestations/plans-signaletique",
});

// --- Plan d'évacuation ---
const evacuationContenu = [
  { strong: "Repère « Vous êtes ici »", text: "position exacte du lecteur sur le plan, orientée dans le sens de lecture réel" },
  { strong: "Cheminements d'évacuation", text: "flèches directionnelles vers les issues les plus proches" },
  { strong: "Issues de secours", text: "sorties normales et de secours, escaliers, dégagements" },
  { strong: "Moyens de secours", text: "extincteurs, RIA, déclencheurs manuels, alarme, désenfumage" },
  { strong: "Points de rassemblement", text: "lieux de regroupement à l'extérieur du bâtiment" },
  { strong: "Consignes & numéros d'urgence", text: "conduite à tenir et numéros des secours (18 / 112)" },
];

// --- Plan d'intervention ---
const interventionContenu = [
  { strong: "Accès au bâtiment", text: "entrées, voies engins, cheminements pour les secours" },
  { strong: "Coupures d'urgence", text: "vannes gaz, coupures électriques, arrêt d'eau, fluides spéciaux" },
  { strong: "Moyens de secours fixes", text: "colonnes sèches, RIA, poteaux incendie, systèmes de désenfumage" },
  { strong: "Locaux à risque", text: "chaufferies, stockages, locaux techniques et zones sensibles" },
  { strong: "Découpage du bâtiment", text: "niveaux, compartiments coupe-feu et zones de désenfumage" },
];

// --- Plan de chambre ---
const chambreContenu = [
  { strong: "Plan du niveau", text: "l'étage de la chambre, simplifié et orienté" },
  { strong: "Localisation de la chambre", text: "position du lecteur et numéro de la chambre" },
  { strong: "Cheminement vers l'issue", text: "trajet le plus court vers la sortie de secours" },
  { strong: "Consignes en cas d'incendie", text: "conduite à tenir, en français et généralement en anglais" },
];

// --- Consignes de sécurité ---
const consignesContenu = [
  { strong: "Donner l'alarme", text: "actionner le déclencheur manuel le plus proche" },
  { strong: "Alerter les secours", text: "composer le 18 (pompiers) ou le 112 (urgences européen)" },
  { strong: "Attaquer le feu", text: "utiliser l'extincteur adapté si le départ de feu est maîtrisable, sans prendre de risque" },
  { strong: "Évacuer", text: "gagner la sortie par le cheminement balisé, sans emprunter les ascenseurs" },
  { strong: "Se rassembler", text: "rejoindre le point de rassemblement et ne pas revenir en arrière" },
];

// --- Signalétique & panneaux ---
const signaletiqueContenu = [
  { strong: "Matériel incendie (rouge)", text: "extincteur, RIA, déclencheur manuel : panneaux à fond rouge et pictogramme blanc" },
  { strong: "Issues de secours (vert)", text: "sorties, direction d'évacuation : panneaux à fond vert et pictogramme blanc" },
  { strong: "Commandes de désenfumage", text: "repérage des commandes manuelles et des exutoires" },
  { strong: "Consignes & interdictions", text: "défense de fumer, interdiction d'obstruer, conduite à tenir" },
  { strong: "Version photoluminescente", text: "panneaux visibles dans l'obscurité, en cas de coupure de courant ou de fumée" },
  { strong: "Supports & pose", text: "cadres aluminium, cadres amovibles « clic-clac », plexiglas, dibond ; pose sur site par nos équipes" },
];

const plansConcernes = [
  "ERP — établissements recevant du public, toutes catégories",
  "Lieux de travail — bureaux, ateliers, entrepôts (Code du travail)",
  "Immeubles de grande hauteur (IGH) et parkings couverts",
  "Établissements d'hébergement — hôtels, résidences, EHPAD (plan de chambre)",
  "Sites industriels & ICPE — installations classées",
];

function DetailBlock({ items }: { items: { strong: string; text: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <RevealItem key={item.strong} index={i} direction="left" className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-surface px-5 py-4">
          <IconArrowRight width={16} height={16} className="mt-0.5 shrink-0 text-red" />
          <span className="text-sm text-white/60">
            <strong className="text-white">{item.strong}</strong> — {item.text}
          </span>
        </RevealItem>
      ))}
    </div>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((text, i) => (
        <RevealItem key={text} index={i} direction="left" className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-surface px-5 py-4">
          <IconArrowRight width={16} height={16} className="mt-0.5 shrink-0 text-red" />
          <span className="text-sm text-white/60">{text}</span>
        </RevealItem>
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-3 border-l-[3px] border-red pl-5">
      <span className="font-tech mb-2 inline-block text-[11px] font-medium tracking-[0.18em] text-red uppercase">{eyebrow}</span>
      <AnimatedHeading className="text-3xl font-bold text-white">{title}</AnimatedHeading>
    </div>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/8 bg-surface-2 p-4">
      <RevealItem className="aspect-[4/3] rounded-xl">
        <ZoomImage src={src} alt={alt} contain className="h-full w-full rounded-xl" />
      </RevealItem>
    </div>
  );
}

function RegBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-r-xl border-l-[3px] border-red bg-red/6 px-6 py-5">
      <h4 className="font-tech mb-2 text-[11px] font-medium tracking-[0.15em] text-red uppercase">Obligation réglementaire</h4>
      <p className="text-sm leading-6 text-white/70">{children}</p>
    </div>
  );
}

export default function PlansSignaletiquePage() {
  return (
    <>
      <Header />

      <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[1240px] px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="font-tech mb-6 flex items-center gap-2 text-[11px] text-white/35">
                <Link href="/" className="hover:text-white">Accueil</Link>
                <span className="text-red/50">/</span>
                <Link href="/#services" className="hover:text-white">Prestations</Link>
                <span className="text-red/50">/</span>
                <span className="flex items-center gap-1.5 text-white/50">
                  <IconMapPin width={14} height={14} className="text-red" />
                  Plans &amp; signalétique
                </span>
              </div>
              <Eyebrow className="mb-6">Plans &amp; signalétique</Eyebrow>
              <AnimatedHeading tag="h1" className="mt-4 mb-5 flex items-center gap-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                <IconMapPin width={32} height={32} className="text-red shrink-0" />
                Plans &amp; signalétique de sécurité
              </AnimatedHeading>
              <p className="max-w-[560px] text-lg text-white/60">
                Relevé sur site, conception, impression et pose de vos plans d&apos;évacuation, plans d&apos;intervention, plans de chambre, consignes de sécurité et de votre signalétique incendie — conformes aux normes en vigueur (NF X08-070, NF EN ISO 7010).
              </p>
            </div>
            <PrestationHeroPhoto
              heroImage="/images/plans/plan-evacuation.jpg"
              heroAlt="Plan d'évacuation normalisé NF X08-070 affiché en ERP"
              badgeText="Relevé, conception & pose"
              icon={<IconMapPin width={16} height={16} />}
            />
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-8 md:grid-cols-[1fr_340px]">
          <div>
            <p className="mb-5 leading-7 text-white/60">
              En situation d&apos;urgence, une information claire et normalisée fait gagner les secondes qui comptent. MISI conçoit chacun de ces documents sur mesure à partir d&apos;un relevé de vos locaux, les imprime sur support durable et les pose. Chaque plan est mis à jour à chaque modification de vos locaux ou de vos équipements — un plan périmé n&apos;a plus aucune valeur, ni lors d&apos;un contrôle de la commission de sécurité, ni le jour d&apos;un sinistre.
            </p>

            {/* SECTION 1 — PLAN D'ÉVACUATION */}
            <div className="mt-12" />
            <SectionTitle eyebrow="Orientation & évacuation" title="Plan d'évacuation" />
            <p className="mb-5 leading-7 text-white/60">
              Le plan d&apos;évacuation est une carte affichée à chaque niveau du bâtiment, à proximité des accès et des points de circulation. Il permet à toute personne — occupant, visiteur, client — de comprendre en quelques secondes où elle se trouve et par où évacuer.
            </p>
            <SectionImage src="/images/plans/plan-evacuation.jpg" alt="Plan d'évacuation normalisé NF X08-070" />
            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Ce que contient le plan</h3>
            <DetailBlock items={evacuationContenu} />
            <RegBlock>
              Le plan d&apos;évacuation est normalisé par la <strong className="text-white">NF X08-070</strong> (mise à jour en décembre 2023) : format, couleurs, pictogrammes et échelle sont imposés. L&apos;<strong className="text-white">article R4227-38 du Code du travail</strong> impose son affichage, avec les consignes de sécurité, dans les établissements employant des travailleurs. Il doit être présent à chaque niveau et près des accès.
            </RegBlock>

            <div className="my-12 border-t border-white/8" />

            {/* SECTION 2 — PLAN D'INTERVENTION */}
            <SectionTitle eyebrow="Secours extérieurs" title="Plan d'intervention (MS 41)" />
            <p className="mb-5 leading-7 text-white/60">
              Le plan d&apos;intervention est destiné en priorité aux <strong className="text-white">sapeurs-pompiers</strong>. Placé à l&apos;entrée du bâtiment, il leur donne à leur arrivée une vue d&apos;ensemble technique : par où entrer, quoi couper, où se trouvent les risques et les moyens de secours. C&apos;est un outil d&apos;intervention, plus détaillé et à une échelle différente du plan d&apos;évacuation.
            </p>
            <SectionImage src="/images/plans/plan-intervention.jpg" alt="Plan d'intervention MS 41 pour les sapeurs-pompiers" />
            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Ce que contient le plan</h3>
            <DetailBlock items={interventionContenu} />
            <RegBlock>
              Le plan d&apos;intervention relève de la disposition <strong className="text-white">MS 41 de l&apos;arrêté du 25 juin 1980</strong> (règlement de sécurité des ERP) et suit lui aussi la norme <strong className="text-white">NF X08-070</strong>. Il est établi en accord avec le service départemental d&apos;incendie et de secours (SDIS) et doit être tenu à jour.
            </RegBlock>

            <div className="my-12 border-t border-white/8" />

            {/* SECTION 3 — PLAN DE CHAMBRE */}
            <SectionTitle eyebrow="Hébergement — ERP type O" title="Plan de chambre" />
            <p className="mb-5 leading-7 text-white/60">
              Le plan de chambre est une petite signalétique d&apos;évacuation apposée à l&apos;intérieur de chaque chambre, généralement au dos de la porte. Il s&apos;adresse à un occupant qui ne connaît pas les lieux — client d&apos;hôtel, résident — et doit pouvoir évacuer seul, y compris de nuit.
            </p>
            <SectionImage src="/images/plans/plan-chambre.jpg" alt="Plan de chambre d'hôtel — signalétique d'évacuation" />
            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Ce que contient le plan</h3>
            <DetailBlock items={chambreContenu} />
            <RegBlock>
              Le plan de chambre est obligatoire dans les établissements d&apos;hébergement (<strong className="text-white">ERP de type O</strong> : hôtels, pensions) et recommandé dans les autres établissements d&apos;accueil. Il complète — sans le remplacer — le plan d&apos;évacuation affiché dans les circulations.
            </RegBlock>

            <div className="my-12 border-t border-white/8" />

            {/* SECTION 4 — CONSIGNES DE SÉCURITÉ */}
            <SectionTitle eyebrow="Conduite à tenir" title="Consignes de sécurité" />
            <p className="mb-5 leading-7 text-white/60">
              La consigne de sécurité incendie est une affiche qui décrit, pas à pas, la conduite à tenir en cas d&apos;incendie. Contrairement au plan, elle ne cartographie pas les lieux : elle énonce les bons réflexes, dans l&apos;ordre, pour que chacun sache quoi faire sans hésiter.
            </p>
            <SectionImage src="/images/plans/consignes-securite.jpg" alt="Affiche des consignes de sécurité incendie" />
            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">La conduite à tenir</h3>
            <DetailBlock items={consignesContenu} />
            <RegBlock>
              L&apos;affichage des consignes est imposé par les <strong className="text-white">articles R4227-37 et R4227-38 du Code du travail</strong>. Une consigne est notamment obligatoire dans les locaux où travaillent <strong className="text-white">au moins 5 personnes</strong> et dans ceux où sont manipulées des matières inflammables. Elle précise le matériel d&apos;extinction, les responsables et les numéros d&apos;urgence.
            </RegBlock>

            <div className="my-12 border-t border-white/8" />

            {/* SECTION 5 — SIGNALÉTIQUE & PANNEAUX */}
            <SectionTitle eyebrow="Repérage des équipements" title="Signalétique & panneaux" />
            <p className="mb-5 leading-7 text-white/60">
              La signalétique complète les plans en identifiant, sur place, chaque équipement et chaque issue. Un extincteur invisible ou une sortie non signalée n&apos;est d&apos;aucune utilité en cas d&apos;urgence. Les panneaux normalisés sont compréhensibles instantanément, sans lecture et quelle que soit la langue.
            </p>
            <SectionImage src="/images/plans/signaletique-panneaux.jpg" alt="Panneaux de signalisation incendie NF EN ISO 7010" />
            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Nos panneaux & supports</h3>
            <DetailBlock items={signaletiqueContenu} />
            <RegBlock>
              La signalétique de sécurité suit la norme <strong className="text-white">NF EN ISO 7010</strong>, qui remplace la NF X08-003 et harmonise les pictogrammes au niveau européen. Les panneaux de matériel de lutte contre l&apos;incendie sont à fond rouge et pictogramme blanc, ceux d&apos;évacuation à fond vert et pictogramme blanc. L&apos;<strong className="text-white">arrêté du 4 novembre 1993</strong> encadre la signalisation de santé et de sécurité au travail.
            </RegBlock>

            <div className="my-12 border-t border-white/8" />

            {/* ÉTABLISSEMENTS CONCERNÉS */}
            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Établissements concernés</h3>
            <SimpleList items={plansConcernes} />
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">Nos plans &amp; signalétique</h4>
              <ul className="flex flex-col">
                {["Plan d'évacuation NF X08-070", "Plan d'intervention MS 41", "Plan de chambre (hôtellerie)", "Consignes de sécurité", "Panneaux NF EN ISO 7010", "Relevé, impression & pose"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 border-b border-white/8 py-2.5 text-sm text-white/60 last:border-0">
                    <span className="text-xs text-red">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-red/20 bg-gradient-to-br from-red/15 to-red/5 p-6">
              <h4 className="mb-2 text-sm font-semibold text-white">Demander un devis</h4>
              <p className="mb-4 text-sm text-white/45">Réponse sous 24h — Gratuit &amp; sans engagement</p>
              <Link href="/#devis" className="block rounded-xl bg-red py-3.5 text-center text-sm font-semibold text-white transition hover:bg-red-dark">
                Obtenir un devis
              </Link>
            </div>
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">Autres prestations</h4>
              <ul className="flex flex-col">
                {[
                  { slug: "extincteurs", label: "Extincteurs" },
                  { slug: "ria", label: "RIA" },
                  { slug: "desenfumage", label: "Désenfumage" },
                  { slug: "portes-coupe-feu", label: "Portes coupe-feu" },
                ].map((link) => (
                  <li key={link.slug} className="flex items-center gap-2.5 border-b border-white/8 py-2.5 text-sm last:border-0">
                    <span className="text-xs text-red">→</span>
                    <Link href={`/prestations/${link.slug}`} className="text-white/60 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <FooterMini />
    </>
  );
}
