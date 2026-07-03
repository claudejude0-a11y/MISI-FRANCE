import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Eyebrow } from "@/components/common/Eyebrow";
import { RevealItem } from "@/components/common/RevealItem";
import { IconClock, IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Contact — MISI Sécurité Incendie",
  description: "Une question, un devis, une urgence ? Notre équipe vous répond sous 24h ouvrées.",
};

const details = [
  { Icon: IconPhone, title: "Téléphone", text: "07 62 57 56 78 — du lundi au vendredi, 8h–18h" },
  { Icon: IconMail, title: "E-mail", text: "direction@misifrance.com" },
  { Icon: IconMapPin, title: "Zone d'intervention", text: "Précisez votre localisation dans le formulaire — nous vous indiquons notre disponibilité" },
  { Icon: IconClock, title: "Délai de réponse", text: "Sous 24h ouvrées pour toute demande" },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[1240px] px-8">
          <Eyebrow className="mb-6">Contact</Eyebrow>
          <AnimatedHeading tag="h1" className="mb-5 max-w-2xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">Parlons de votre projet</AnimatedHeading>
          <p className="max-w-xl text-lg text-white/60">Une question, un devis, une urgence ? Notre équipe vous répond sous 24h ouvrées.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-20 px-8 lg:grid-cols-2">
          <div>
            <AnimatedHeading className="mb-4 text-2xl font-bold text-white">Nous contacter</AnimatedHeading>
            <p className="mb-10 text-white/60">
              Gestionnaire d&apos;immeuble, directeur d&apos;établissement scolaire, responsable HSE — nous adaptons notre réponse à votre situation.
            </p>

            <div className="flex flex-col gap-6">
              {details.map((d, i) => (
                <RevealItem key={d.title} index={i} direction="left" className="flex items-start gap-4">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] border border-white/8 bg-surface-2 text-red">
                    <d.Icon width={19} height={19} />
                  </div>
                  <div>
                    <h5 className="font-tech mb-1 text-[10px] font-medium tracking-[0.15em] text-white/35 uppercase">{d.title}</h5>
                    <p className="text-sm text-white/60">{d.text}</p>
                  </div>
                </RevealItem>
              ))}
            </div>

            <div className="mt-9 rounded-r-xl border-l-[3px] border-red bg-red/6 px-5 py-4.5">
              <h4 className="mb-1.5 text-xs font-bold tracking-widest text-red uppercase">Urgence ?</h4>
              <p className="text-sm text-white/70">
                Pour toute situation nécessitant une intervention rapide (équipement défaillant avant une commission de sécurité, sinistre…), mentionnez-le dans votre message ou appelez-nous directement.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <FooterMini />
    </>
  );
}
