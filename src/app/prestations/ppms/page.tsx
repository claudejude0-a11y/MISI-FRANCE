import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Eyebrow } from "@/components/common/Eyebrow";
import { RevealItem } from "@/components/common/RevealItem";
import { ZoomImage } from "@/components/common/ZoomImage";
import { IconArrowRight, IconClipboardList } from "@/components/icons";
import { PrestationHeroPhoto } from "@/components/prestation/PrestationHeroPhoto";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Alarme Type 4 & Alarme PPMS — Équipements de mise en sûreté | MISI",
  description:
    "MISI installe et maintient l'alarme Type 4 pour l'évacuation incendie et l'alarme PPMS pour le confinement en cas d'attentat, d'intrusion ou de risque majeur.",
};

const type4Composition = [
  { strong: "Déclencheurs manuels", text: "boîtiers rouges positionnés à chaque niveau et sortie" },
  { strong: "Diffuseurs sonores", text: "sirènes émettant le signal d'alarme générale normalisé NF S 32-001 : son continu à 554 Hz (± 10 Hz)" },
  { strong: "Tableau de signalisation", text: "centralise les informations et assure l'alimentation de secours" },
];

const type4Concerned = [
  "ERP de 5e catégorie — commerces, restaurants, cabinets libéraux, salles de sport",
  "Établissements recevant des travailleurs (ERT) de plus de 50 personnes ou comportant des locaux à risques particuliers (art. R4227-34 du Code du travail) — d'autres obligations s'appliquent dès le premier salarié",
  "Locaux où sont manipulées des matières inflammables",
  "ERP de 5e catégorie en dessous des seuils d'effectif fixés par l'arrêté du 25 juin 1980 selon le type d'établissement",
];

const type4Prestations = [
  "Étude & dimensionnement — nombre et positionnement des déclencheurs et sirènes",
  "Installation complète — déclencheurs, diffuseurs sonores, tableau de signalisation",
  "Mise en service & essais — vérification de la couverture sonore sur l'ensemble du site",
  "Vérification annuelle obligatoire — rapport remis pour le registre de sécurité",
  "Maintenance corrective — remplacement de composants défaillants",
];

const ppmsComposition = [
  { strong: "Déclencheur manuel noir", text: "boîtier de couleur noire (norme NF S 61-942), fixé à 1,30 m du sol, distinct visuellement du rouge incendie" },
  { strong: "Signal sonore spécifique", text: "son strident de classe B, puissant et différencié, audible dans les espaces bruyants (gymnases, cafétérias, cours)" },
  { strong: "Flash lumineux bleu", text: "alerte visuelle obligatoire pour les personnes malentendantes, synchronisée avec le signal sonore" },
  { strong: "Messages vocaux personnalisés", text: "annonces préenregistrées diffusant les consignes adaptées à chaque type de menace" },
  { strong: "Systèmes filaires ou radio", text: "solutions câblées ou systèmes sans fil (technologie LoRa) pour une installation sans travaux" },
  { strong: "Déclenchement mobile", text: "activation depuis une application ou une télécommande portative pour le personnel" },
];

const ppmsConcerned = [
  { strong: "Établissements scolaires", text: "écoles, collèges, lycées, établissements spécialisés (obligation réglementaire)" },
  { strong: "ERP", text: "commerces, centres commerciaux, salles de sport, cinémas, musées" },
  { strong: "Entreprises & administrations", text: "immeubles de bureaux, sites industriels, collectivités" },
  { strong: "Établissements de santé", text: "hôpitaux, EHPAD, cliniques" },
];

const ppmsPrestations = [
  "Audit du site — identification des zones à couvrir et des contraintes de l'établissement",
  "Installation complète — déclencheurs noirs, sirènes, flashs bleus, tableaux de contrôle",
  "Programmation des messages vocaux personnalisés par type de menace",
  "Solution radio sans fil sans travaux ou intégration au câblage existant",
  "Mise en service & essais — vérification de la couverture sonore et visuelle sur l'ensemble du site",
  "Vérification annuelle NF S 61-942 — rapport remis pour le registre de sécurité",
  "Maintenance corrective & accompagnement aux exercices réglementaires",
];

function ListBlock({ items }: { items: { strong: string; text: string }[] }) {
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

export default function PpmsPage() {
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
                  <IconClipboardList width={14} height={14} className="text-red" />
                  Alarme Type 4 &amp; PPMS
                </span>
              </div>
              <Eyebrow className="mb-6">Alerte &amp; Mise en sûreté</Eyebrow>
              <AnimatedHeading tag="h1" className="mt-4 mb-5 flex items-center gap-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                <IconClipboardList width={32} height={32} className="text-red shrink-0" />
                Alarme Type 4 &amp; Alarme PPMS
              </AnimatedHeading>
              <p className="max-w-[560px] text-lg text-white/60">
                MISI installe et maintient deux systèmes d&apos;alerte complémentaires : l&apos;alarme Type 4 pour l&apos;évacuation incendie, et l&apos;alarme PPMS pour le confinement en cas d&apos;attentat, d&apos;intrusion ou de risque majeur — deux signaux distincts, deux réflexes de protection différents.
              </p>
            </div>
            <PrestationHeroPhoto
              heroImage="/images/ppms.jpg"
              heroAlt="Alarme Type 4 et PPMS"
              badgeText="Installation & accompagnement"
              icon={<IconClipboardList width={16} height={16} />}
            />
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-8 md:grid-cols-[1fr_340px]">
          <div>
            {/* SECTION 1 — ALARME TYPE 4 */}
            <div className="mb-3 border-l-[3px] border-red pl-5">
              <span className="font-tech mb-2 inline-block text-[11px] font-medium tracking-[0.18em] text-red uppercase">Sécurité incendie</span>
              <AnimatedHeading className="text-3xl font-bold text-white">Alarme incendie Type 4</AnimatedHeading>
            </div>

            <p className="mb-5 leading-7 text-white/60">
              L&apos;alarme incendie de Type 4 est le système d&apos;alerte incendie le plus répandu dans les petits établissements et les locaux professionnels. Elle constitue le niveau de base de la sécurité incendie réglementaire — simple, fiable et économique à maintenir.
            </p>
            <p className="mb-5 leading-7 text-white/60">
              Son fonctionnement repose entièrement sur l&apos;action humaine : dès qu&apos;une personne détecte un départ de feu, elle actionne un <strong className="text-white">déclencheur manuel</strong> (boîtier rouge fixé à 1,30 m du sol), ce qui active immédiatement les diffuseurs sonores et ordonne l&apos;évacuation du bâtiment. Aucune détection automatique n&apos;est requise dans ce type de système.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl border border-white/8 bg-surface-2 p-4">
              <RevealItem className="aspect-[3/4] max-w-xs rounded-xl">
                <ZoomImage src="/images/alarme-type4.jpg" alt="Alarme incendie Type 4 à piles — déclencheur manuel rouge" contain className="h-full w-full rounded-xl" />
              </RevealItem>
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Composition du système</h3>
            <ListBlock items={type4Composition} />

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Établissements concernés</h3>
            <p className="mb-4 leading-7 text-white/60">L&apos;alarme Type 4 est obligatoire dans les établissements suivants :</p>
            <SimpleList items={type4Concerned} />

            <div className="my-8 rounded-r-xl border-l-[3px] border-red bg-red/6 px-6 py-5">
              <h4 className="font-tech mb-2 text-[11px] font-medium tracking-[0.15em] text-red uppercase">Obligations réglementaires</h4>
              <p className="text-sm leading-6 text-white/70">
                La norme <strong className="text-white">NF S 32-001</strong> fixe les exigences techniques : niveau sonore minimum 10 dB au-dessus du bruit ambiant, alimentation de secours assurant au moins <strong className="text-white">12 heures de veille et 5 minutes en alarme</strong>. Des <strong className="text-white">vérifications trimestrielles</strong> doivent être effectuées par le personnel formé, et un <strong className="text-white">contrôle annuel</strong> par un technicien qualifié est obligatoire, avec rapport versé au registre de sécurité. La responsabilité pénale de l&apos;exploitant est engagée en cas de défaut. En ERP, des exercices d&apos;évacuation sont également obligatoires au moins tous les 6 mois (article MS 47 de l&apos;arrêté du 25 juin 1980).
              </p>
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Nos prestations — Alarme Type 4</h3>
            <SimpleList items={type4Prestations} />

            <div className="my-12 border-t border-white/8" />

            {/* SECTION 2 — ALARME PPMS */}
            <div className="mb-3 border-l-[3px] border-red pl-5">
              <span className="font-tech mb-2 inline-block text-[11px] font-medium tracking-[0.18em] text-red uppercase">Confinement &amp; mise en sûreté</span>
              <AnimatedHeading className="text-3xl font-bold text-white">Alarme PPMS — confinement attentat &amp; risques majeurs</AnimatedHeading>
            </div>

            <p className="mb-5 leading-7 text-white/60">
              L&apos;alarme PPMS (Plan Particulier de Mise en Sûreté) est un système d&apos;alerte dédié au <strong className="text-white">confinement des occupants</strong> en cas de menace extérieure grave : attentat, intrusion, nuage toxique, accident technologique ou catastrophe naturelle. Elle est distincte et indépendante de l&apos;alarme incendie — les deux systèmes coexistent dans un établissement, mais déclenchent des réflexes opposés.
            </p>
            <p className="mb-5 leading-7 text-white/60">
              Là où l&apos;alarme incendie ordonne d&apos;<strong className="text-white">évacuer</strong>, l&apos;alarme PPMS ordonne de <strong className="text-white">se confiner</strong> — de s&apos;enfermer, de ne pas sortir, et d&apos;attendre les instructions des autorités. Cette différence fondamentale impose un signal sonore radicalement différent pour éviter toute confusion fatale.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl border border-white/8 bg-surface-2 p-4">
              <RevealItem className="aspect-[3/4] max-w-xs rounded-xl">
                <ZoomImage src="/images/alarme-ppms.jpg" alt="Alarme PPMS — déclencheur noir flash bleu confinement" contain className="h-full w-full rounded-xl" />
              </RevealItem>
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Composition du système d&apos;alarme PPMS</h3>
            <ListBlock items={ppmsComposition} />

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Établissements concernés</h3>
            <p className="mb-4 leading-7 text-white/60">L&apos;alarme PPMS est obligatoire ou fortement recommandée dans tous les établissements accueillant du public :</p>
            <ListBlock items={ppmsConcerned} />

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Pourquoi deux alarmes différentes sont indispensables</h3>
            <p className="mb-5 leading-7 text-white/60">
              En cas de menace d&apos;intrusion ou d&apos;attentat, déclencher par erreur l&apos;alarme incendie — et provoquer l&apos;évacuation des occupants vers l&apos;extérieur — peut les exposer directement au danger. À l&apos;inverse, en cas d&apos;incendie, un confinement serait fatal. <strong className="text-white">La distinction des signaux est une question de survie.</strong>
            </p>
            <p className="mb-5 leading-7 text-white/60">
              Un établissement équipé d&apos;une alarme PPMS conforme dispose d&apos;une réponse organisée, immédiate et différenciée pour chaque type de menace — sans ambiguïté pour les occupants, quelles que soient les circonstances.
            </p>

            <div className="my-8 rounded-r-xl border-l-[3px] border-red bg-red/6 px-6 py-5">
              <h4 className="font-tech mb-2 text-[11px] font-medium tracking-[0.15em] text-red uppercase">Obligations réglementaires</h4>
              <p className="text-sm leading-6 text-white/70">
                La norme <strong className="text-white">NF S 61-942</strong> impose que le déclencheur PPMS soit de couleur noire, le flash lumineux bleu, et le signal sonore clairement différencié de l&apos;alarme incendie. La circulaire <strong className="text-white">n° 2023-041 du 9 mars 2023</strong> (Éducation nationale) unifie le PPMS risques majeurs et attentat-intrusion, avec mise en conformité requise avant septembre 2028. <strong className="text-white">Deux exercices annuels minimum</strong> sont obligatoires dans les établissements scolaires.
              </p>
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Nos prestations — Alarme PPMS</h3>
            <SimpleList items={ppmsPrestations} />
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">Alarme Type 4</h4>
              <ul className="flex flex-col">
                {["Installation déclencheurs & sirènes", "Mise en service & essais", "Vérification annuelle NF S 32-001", "Maintenance corrective"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 border-b border-white/8 py-2.5 text-sm text-white/60 last:border-0">
                    <span className="text-xs text-red">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">Alarme PPMS</h4>
              <ul className="flex flex-col">
                {["Déclencheur noir NF S 61-942", "Flash bleu malentendants", "Messages vocaux personnalisés", "Option radio sans fil LoRa", "Vérification annuelle", "Exercices réglementaires"].map((item) => (
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
                  { slug: "centrales-qti", label: "CATI" },
                  { slug: "baes", label: "BAES" },
                  { slug: "extincteurs", label: "Extincteurs" },
                  { slug: "desenfumage", label: "Désenfumage" },
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
