import type { Metadata } from "next";

import { Eyebrow } from "@/components/common/Eyebrow";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Mentions légales | MISI",
  description: "Mentions légales du site MISI — Maintenance Installation Sécurité Incendie.",
  robots: { index: false },
};

/*
 * ⚠️ Champ restant à compléter avant mise en ligne : nom du directeur de
 * publication (représentant légal de la SAS).
 */
export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[880px] px-8">
          <Eyebrow className="mb-6">Informations légales</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Mentions légales</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-10 px-8">
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Éditeur du site</h2>
            <p className="leading-7 text-white/60">
              MISI — Maintenance Installation Sécurité Incendie
              <br />
              Société par actions simplifiée (SAS)
              <br />
              Siège social : 22 lieu-dit Les Chevillots, 89150 Courtoin
              <br />
              SIRET : 904 532 777 00029
              <br />
              Téléphone : <a href="tel:+33762575678" className="text-red hover:underline">07 62 57 56 78</a>
              <br />
              E-mail : <a href="mailto:direction@misifrance.com" className="text-red hover:underline">direction@misifrance.com</a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Hébergement</h2>
            <p className="leading-7 text-white/60">
              Ce site est hébergé par OVHcloud
              <br />
              2 rue Kellermann, 59100 Roubaix, France
              <br />
              <a href="https://www.ovhcloud.com" className="text-red hover:underline" rel="noopener noreferrer" target="_blank">ovhcloud.com</a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Propriété intellectuelle</h2>
            <p className="leading-7 text-white/60">
              L&apos;ensemble des contenus de ce site (textes, images, logo, charte graphique) est la propriété exclusive de MISI, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et constituerait une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Responsabilité</h2>
            <p className="leading-7 text-white/60">
              Les informations publiées sur ce site sont fournies à titre informatif et ne remplacent pas une étude réglementaire propre à votre établissement. MISI s&apos;efforce d&apos;en assurer l&apos;exactitude et la mise à jour, sans garantie d&apos;exhaustivité. Pour toute question relative à vos obligations, <a href="/contact" className="text-red hover:underline">contactez-nous</a>.
            </p>
          </div>
        </div>
      </section>

      <FooterMini />
    </>
  );
}
