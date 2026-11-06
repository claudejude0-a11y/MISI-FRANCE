import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Eyebrow } from "@/components/common/Eyebrow";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "À propos de MISI — 3 techniciens, 8 ans d'expérience en sécurité incendie",
  description:
    "MISI, c'est une équipe de 3 techniciens et 8 ans d'expérience en sécurité incendie. Exemples d'interventions : extincteurs, BAES, RIA, poteaux, détection incendie.",
  url: "/a-propos",
});

const interventions = [
  {
    place: "EHPAD à La Courneuve (93)",
    work: "Vérification annuelle des extincteurs et vérification semestrielle des BAES : un passage tous les 6 mois pour l'éclairage de sécurité.",
  },
  {
    place: "Château en Seine-et-Marne (77)",
    work: "Maintenance de la détection incendie : déclencheurs manuels et signaux sonores d'évacuation.",
  },
  {
    place: "Site classé ICPE à Gournay-Loizé (79)",
    work: "Vérification des extincteurs et des poteaux incendie.",
  },
  {
    place: "Site classé ICPE à Roullet-Saint-Estèphe (16)",
    work: "Vérification des extincteurs et des RIA.",
  },
];

const photos = [
  {
    src: "/images/terrain/tableau-alarme-type-4.jpg",
    alt: "Tableau d'alarme incendie de type 4 avec l'étiquette de vérification MISI",
    caption: "Tableau d'alarme de type 4, avec notre étiquette de vérification",
    width: 960,
    height: 930,
  },
  {
    src: "/images/terrain/ria-extincteurs.jpg",
    alt: "Robinet d'incendie armé et extincteurs",
    caption: "RIA et extincteurs",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/terrain/alarme-detection.jpg",
    alt: "Centrale d'alarme, déclencheur manuel et diffuseurs d'alarme incendie",
    caption: "Alarme et détection incendie",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/terrain/vehicules.jpg",
    alt: "Deux véhicules d'intervention rouges de MISI",
    caption: "Nos véhicules d'intervention",
    width: 1280,
    height: 960,
  },
];

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbStructuredData([{ name: "À propos", path: "/a-propos" }])),
        }}
      />
      <Header />
      <main id="contenu">
        <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-[880px] px-8">
            <Eyebrow className="mb-6">À propos</Eyebrow>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Trois techniciens, huit ans d&apos;expérience en sécurité incendie
            </h1>
            <p className="mt-5 text-lg text-white/60">
              MISI assure la maintenance, l&apos;installation et la vérification de vos équipements de sécurité
              incendie, partout en France.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="mx-auto flex max-w-[880px] flex-col gap-12 px-8">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-white">Notre équipe</h2>
              <p className="leading-7 text-white/60">
                Notre équipe compte trois techniciens, avec huit ans d&apos;expérience dans la sécurité incendie.
                Nous intervenons sur des sites variés : établissements recevant du public, sites patrimoniaux et
                sites industriels classés ICPE.
              </p>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold text-white">Sur le terrain</h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {photos.map((photo) => (
                  <li key={photo.src} className="overflow-hidden rounded-2xl border border-white/8 bg-surface">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 768px) 100vw, 440px"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <p className="p-4 text-sm text-white/60">{photo.caption}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold text-white">Exemples d&apos;interventions</h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {interventions.map((item) => (
                  <li key={item.place} className="rounded-2xl border border-white/8 bg-surface p-6">
                    <h3 className="mb-2 font-semibold text-white">{item.place}</h3>
                    <p className="text-sm leading-6 text-white/60">{item.work}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-white">Nous contacter</h2>
              <p className="leading-7 text-white/60">
                1 bis Chemin de la Renauderie, 89150 Dollot
                <br />
                Du lundi au vendredi, de 8h30 à 17h30
                <br />
                <a href="tel:+33762575678" className="text-white hover:underline">07 62 57 56 78</a>
              </p>
              <Link
                href="/#devis"
                className="mt-6 inline-block rounded-full bg-red-strong px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterMini />
    </>
  );
}
