import Image from "next/image";
import Link from "next/link";

import { Inview } from "@/components/animation/springs/in-view";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Eyebrow } from "@/components/common/Eyebrow";
import { IconArrowRight } from "@/components/icons";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { DevisForm } from "@/components/home/DevisForm";
import { Faq } from "@/components/home/Faq";
import { HeroSection } from "@/components/home/HeroSection";
import { SecteurCard } from "@/components/home/SecteurCard";
import { ServicesBento } from "@/components/home/ServicesBento";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { secteurs } from "@/lib/prestations-data";

const whyItems = [
  { n: "01", title: "Expertise technique reconnue", text: "Nos techniciens sont formés et habilités sur l'ensemble des équipements. Nous restons à jour des évolutions réglementaires." },
  { n: "02", title: "Conformité réglementaire garantie", text: "Chaque intervention est documentée. Registre de sécurité à jour, opposable lors des contrôles de commission de sécurité." },
  { n: "03", title: "Interlocuteur unique multiservices", text: "Un seul prestataire pour l'ensemble de vos équipements. Moins de coordination, plus d'efficacité." },
  { n: "04", title: "Réactivité & disponibilité", text: "Intervention sous 48h pour les urgences. Contrats de maintenance avec planification annuelle incluse." },
];

const checklist = [
  "Diagnostic de l'état existant",
  "Vérification de la conformité réglementaire",
  "Maintenance préventive ou corrective",
  "Remplacement des pièces défectueuses",
  "Mise à jour du registre de sécurité",
  "Rapport d'intervention signé",
  "Suivi et relance à l'échéance suivante",
];

const process = [
  { n: "01", title: "Contact & analyse", text: "Vous décrivez votre établissement et vos besoins. Nous évaluons le périmètre." },
  { n: "02", title: "Devis personnalisé", text: "Devis détaillé et transparent sous 24h, adapté à votre type d'établissement." },
  { n: "03", title: "Intervention sur site", text: "Techniciens qualifiés, matériel adapté, à la date convenue." },
  { n: "04", title: "Rapport & suivi", text: "Rapport remis, registre mis à jour. Prochaine échéance planifiée automatiquement." },
];

export const HomeView = () => {
  return (
    <main className="min-h-lvh">
      <Header />

      <HeroSection />

      {/* NORMES STRIP */}
      <section className="border-t border-b border-white/8 py-8">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3.5 px-8 text-center">
          {[
            "Interventions conformes aux normes NF en vigueur",
            "Techniciens habilités & assurés",
            "Registre de sécurité tenu à jour",
            "Rapport après chaque intervention",
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-3.5">
              <span className="text-sm font-semibold text-white/60">{item}</span>
              {i < arr.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-red/60 sm:inline-block" />}
            </span>
          ))}
        </div>
      </section>

      {/* CLIENTS — ils nous font confiance */}
      <section className="border-b border-white/8 py-14">
        <p className="font-tech mb-9 text-center text-[11px] tracking-[0.15em] text-white/35 uppercase">
          Ils nous font confiance
        </p>
        <ClientsMarquee />
      </section>

      {/* SECTEURS */}
      <section className="pt-24 pb-10">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <Eyebrow className="mb-4">Secteurs d&apos;intervention</Eyebrow>
            <AnimatedHeading className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Une expertise adaptée
              <br />à chaque établissement
            </AnimatedHeading>
            <p className="mt-4 text-lg text-white/60">Chaque type de site a ses propres obligations réglementaires. Nous les connaissons et les appliquons.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secteurs.map((s, i) => (
              <SecteurCard key={s.title} icon={<s.Icon width={22} height={22} />} title={s.title} text={s.text} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <Eyebrow className="mb-4">Nos prestations</Eyebrow>
            <AnimatedHeading className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Une couverture complète
              <br />de la sécurité incendie
            </AnimatedHeading>
            <p className="mt-4 text-lg text-white/60">De l&apos;installation initiale à la maintenance préventive, MISI prend en charge l&apos;intégralité de votre dispositif de protection contre l&apos;incendie.</p>
          </div>
          <ServicesBento />
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-28">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">Pourquoi MISI</Eyebrow>
              <AnimatedHeading className="mt-4 mb-8 text-3xl font-bold text-white md:text-4xl">Des professionnels à votre service, en toute conformité</AnimatedHeading>
              <div className="flex flex-col gap-5">
                {whyItems.map((item, i) => (
                  <Inview
                    key={item.n}
                    from={{ opacity: 0, x: -28 }}
                    to={{ opacity: 1, x: 0 }}
                    mode="once"
                    delayIn={i * 90}
                    config={{ tension: 210, friction: 24 }}
                    className="flex gap-4"
                  >
                    <span className="font-tech text-2xl font-bold text-red/40 tabular-nums">{item.n}</span>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.text}</p>
                    </div>
                  </Inview>
                ))}
              </div>
              <div className="mt-8 flex gap-2">
                {["/images/band1.jpg", "/images/extincteurs.jpg", "/images/band3.jpg"].map((src) => (
                  <div key={src} className="relative h-20 flex-1 overflow-hidden rounded-lg opacity-60 transition hover:opacity-100">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <Inview
              from={{ opacity: 0, y: 28, rotateY: -8 }}
              to={{ opacity: 1, y: 0, rotateY: 0 }}
              mode="once"
              config={{ tension: 190, friction: 24 }}
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-[28px] border border-white/8 bg-surface p-8 [perspective:1200px]"
            >
              <div className="mb-5 text-sm font-semibold text-white">Chaque intervention comprend</div>
              <div className="flex flex-col gap-3">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red/15 text-xs text-red">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <Link href="#devis" className="mt-6 block w-full rounded-xl bg-red py-3.5 text-center text-sm font-semibold text-white transition hover:bg-red-dark">
                Demander un devis
              </Link>
            </Inview>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section id="processus" className="py-28">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <Eyebrow className="mb-4">Notre approche</Eyebrow>
            <AnimatedHeading className="mt-4 text-3xl font-bold text-white md:text-4xl">Un processus simple et transparent</AnimatedHeading>
            <p className="mt-4 text-lg text-white/60">De votre premier contact jusqu&apos;à la remise des documents de conformité.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Inview
                key={step.n}
                from={{ opacity: 0, y: 30, rotateX: -18 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                mode="once"
                delayIn={i * 90}
                config={{ tension: 200, friction: 22 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative overflow-hidden rounded-[20px] border border-white/8 bg-surface p-7 [perspective:1000px]"
              >
                <span className="font-tech absolute top-4 right-5 text-4xl leading-none font-bold text-white/[0.06] tabular-nums">{step.n}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/8 bg-surface-2 text-red">
                  <IconArrowRight width={20} height={20} />
                </div>
                <h4 className="mb-2 font-semibold text-white">{step.title}</h4>
                <p className="text-sm text-white/60">{step.text}</p>
              </Inview>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section id="devis" className="relative py-28">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">Devis gratuit</Eyebrow>
              <AnimatedHeading className="mt-4 mb-4 text-3xl font-bold text-white md:text-4xl">Obtenez une offre personnalisée</AnimatedHeading>
              <p className="mb-9 text-white/60">Remplissez le formulaire — notre équipe vous répond sous 24h avec une proposition adaptée à votre établissement.</p>
              <div className="flex flex-col gap-3">
                {[
                  "Devis gratuit et sans engagement",
                  "Réponse sous 24h ouvrées",
                  "Conseil réglementaire inclus",
                  "Tarification transparente",
                  "Intervention partout en région",
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                    {perk}
                  </div>
                ))}
              </div>
            </div>
            <DevisForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pt-10 pb-28">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <Eyebrow className="mb-4">Questions fréquentes</Eyebrow>
            <AnimatedHeading className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Ce que vous devez savoir
              <br />avant de nous contacter
            </AnimatedHeading>
          </div>
          <Faq />
        </div>
      </section>

      <Footer />
    </main>
  );
};
