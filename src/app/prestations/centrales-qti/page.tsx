import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Eyebrow } from "@/components/common/Eyebrow";
import { RevealItem } from "@/components/common/RevealItem";
import { ZoomImage } from "@/components/common/ZoomImage";
import { IconArrowRight } from "@/components/icons";
import { PrestationHeroPhoto } from "@/components/prestation/PrestationHeroPhoto";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "CATI — Centrale d'Alarme Technique Incendie | MISI",
  description:
    "Pilotez l'ensemble de la sécurité de votre bâtiment depuis un seul point avec la CATI — supervision temps réel de vos alarmes et équipements incendie.",
};

const supervision = [
  { title: "Sécurité incendie", text: "extinction automatique, désenfumage, portes coupe-feu, BAES : tout est surveillé en continu" },
  { title: "Détection incendie", text: "alarmes, déclenchements et défauts remontent en temps réel, avec localisation précise du point concerné" },
  { title: "Détecteurs de fumée & chaleur", text: "surveillance point par point, réduction des fausses alarmes, historique complet des événements" },
  { title: "Alarmes PPMS", text: "supervision des équipements de mise en sûreté pour confinement attentat et risques majeurs" },
  { title: "Installations techniques du bâtiment", text: "éclairage, chauffage, contrôle d'accès : une gestion centralisée qui simplifie l'exploitation au quotidien" },
  { title: "Vidéosurveillance", text: "intégration des caméras pour un accès immédiat aux images en cas d'alarme" },
];

const prestationsCati = [
  "Audit & étude — analyse de vos besoins, dimensionnement de la solution et plan d'intégration",
  "Installation complète — centrale, détecteurs, sirènes, déclencheurs et dispositifs de commande",
  "Programmation — configuration des secteurs, scénarios d'alarme, adressage et droits d'accès",
  "Intégration vidéosurveillance et équipements techniques du bâtiment",
  "Mise en service & essais — test exhaustif de tous les points de détection et des asservissements",
  "Vérification périodique NF S 61-933 — rapport d'intervention remis à chaque passage",
  "Maintenance corrective & raccordement à un centre de télésurveillance agréé",
];

export default function CatiPage() {
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
                <span className="text-white/50">CATI</span>
              </div>
              <Eyebrow className="mb-6">Supervision &amp; Gestion technique</Eyebrow>
              <AnimatedHeading tag="h1" className="mt-4 mb-1 text-4xl font-extrabold tracking-tight text-white md:text-5xl">CATI</AnimatedHeading>
              <p className="-mt-1 mb-4 text-lg text-white/70">Centrale d&apos;Alarme Technique Incendie</p>
              <p className="max-w-[560px] text-lg text-white/60">
                Pilotez l&apos;ensemble de la sécurité de votre bâtiment depuis un seul point. La CATI centralise en temps réel toutes vos alarmes, vos équipements de protection incendie et vos installations techniques — pour ne jamais rater un signal critique.
              </p>
            </div>
            <PrestationHeroPhoto
              heroImage="/images/alarme-mercury.png"
              heroAlt="Centrale d'Alarme Technique Incendie"
              badgeText="Installation & supervision CATI"
            />
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-8 md:grid-cols-[1fr_340px]">
          <div>
            <AnimatedHeading className="mb-5 text-3xl font-bold text-white">Une vision complète de votre sécurité, en permanence</AnimatedHeading>
            <p className="mb-5 leading-7 text-white/60">
              Dans un bâtiment, une école, un commerce ou un ERP, les équipements de sécurité sont nombreux et disséminés : détecteurs, extincteurs automatiques, désenfumage, portes coupe-feu, éclairage de sécurité, alarmes PPMS… Sans supervision centralisée, un défaut peut passer inaperçu pendant des semaines — jusqu&apos;à ce qu&apos;il soit trop tard.
            </p>
            <p className="mb-5 leading-7 text-white/60">
              La CATI change radicalement cette réalité. En un seul tableau de bord, vous disposez d&apos;une <strong className="text-white">vision globale et en temps réel</strong> de l&apos;état de toutes vos installations. Chaque anomalie, chaque déclenchement, chaque défaut remonte instantanément — avec l&apos;identification précise de l&apos;équipement concerné, sa localisation dans le bâtiment et l&apos;heure exacte de l&apos;événement.
            </p>

            <div className="my-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/8 bg-surface-2 p-4 sm:grid-cols-2">
              <RevealItem index={0} className="aspect-[4/3] rounded-xl sm:col-span-2">
                <ZoomImage src="/images/alarme-mercury.png" alt="Centrale d'alarme technique incendie" contain className="h-full w-full rounded-xl" />
              </RevealItem>
              <RevealItem index={1} className="aspect-[4/3] rounded-xl">
                <ZoomImage src="/images/alarme-ja150.jpg" alt="Détecteur de fumée certifié" contain className="h-full w-full rounded-xl" />
              </RevealItem>
              <RevealItem index={2} className="aspect-[4/3] rounded-xl">
                <ZoomImage src="/images/alarme-ja160.png" alt="Détecteur de chaleur professionnel" contain className="h-full w-full rounded-xl" />
              </RevealItem>
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Ce que la CATI supervise pour vous</h3>
            <div className="flex flex-col gap-3">
              {supervision.map((item, i) => (
                <RevealItem key={item.title} index={i} direction="left" className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-surface px-5 py-4">
                  <IconArrowRight width={16} height={16} className="mt-0.5 shrink-0 text-red" />
                  <span className="text-sm text-white/60">
                    <strong className="text-white">{item.title}</strong> — {item.text}
                  </span>
                </RevealItem>
              ))}
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Les bénéfices concrets pour votre établissement</h3>
            <p className="mb-5 leading-7 text-white/60"><strong className="text-white">Plus de réactivité.</strong> Dès qu&apos;une alarme se déclenche ou qu&apos;un équipement tombe en défaut, vous en êtes informé immédiatement — par SMS, notification push ou e-mail. Fini les défauts découverts par hasard lors d&apos;une ronde. Fini les équipements hors service sans que personne ne le sache.</p>
            <p className="mb-5 leading-7 text-white/60"><strong className="text-white">Une gestion simplifiée.</strong> Depuis une interface unique, vous consultez l&apos;historique complet des événements, pilotez vos installations à distance et gérez les droits d&apos;accès de vos intervenants — 24h/24, 7j/7, même depuis votre téléphone.</p>
            <p className="mb-5 leading-7 text-white/60"><strong className="text-white">Une protection renforcée.</strong> La CATI peut être raccordée à un centre de télésurveillance agréé, qui prend le relais en dehors des heures ouvrées. En cas d&apos;alarme la nuit ou le week-end, une intervention est déclenchée sans délai.</p>
            <p className="mb-5 leading-7 text-white/60"><strong className="text-white">Une solution évolutive.</strong> La CATI s&apos;adapte à tout type d&apos;établissement — du petit commerce à l&apos;ERP de grande capacité. Elle intègre les équipements existants et peut accueillir de nouveaux points sans refonte de l&apos;infrastructure.</p>

            <div className="my-8 rounded-r-xl border-l-[3px] border-red bg-red/6 px-6 py-5">
              <h4 className="font-tech mb-2 text-[11px] font-medium tracking-[0.15em] text-red uppercase">Obligations réglementaires</h4>
              <p className="text-sm leading-6 text-white/70">
                Les obligations de détection automatique et de supervision varient selon le type d&apos;ERP et sa catégorie — elles sont notamment renforcées dans les établissements avec locaux à sommeil (types J, O, U, R…). La CATI fait l&apos;objet de vérifications à plusieurs niveaux cumulatifs : mensuelles et trimestrielles par l&apos;exploitant, et annuelle complète par un technicien qualifié avec rapport versé au registre de sécurité. Nous réalisons un audit personnalisé pour déterminer le niveau de supervision requis dans votre établissement.
              </p>
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">Nos prestations CATI</h3>
            <div className="flex flex-col gap-3">
              {prestationsCati.map((text, i) => (
                <RevealItem key={text} index={i} direction="left" className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-surface px-5 py-4">
                  <IconArrowRight width={16} height={16} className="mt-0.5 shrink-0 text-red" />
                  <span className="text-sm text-white/60">{text}</span>
                </RevealItem>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">Nos prestations CATI</h4>
              <ul className="flex flex-col">
                {["Audit & étude personnalisée", "Installation complète", "Supervision équipements incendie", "Intégration vidéosurveillance", "Vérification NF S 61-933", "Télésurveillance 24h/24"].map((item) => (
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
                  { slug: "desenfumage", label: "Désenfumage" },
                  { slug: "baes", label: "BAES" },
                  { slug: "portes-coupe-feu", label: "Portes coupe-feu" },
                  { slug: "ppms", label: "Alarme Type 4 & PPMS" },
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
