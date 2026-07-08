import type { Metadata } from "next";

import { Eyebrow } from "@/components/common/Eyebrow";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Politique de confidentialité | MISI",
  description: "Politique de confidentialité et protection des données personnelles du site MISI.",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[880px] px-8">
          <Eyebrow className="mb-6">Protection des données</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Politique de confidentialité</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-10 px-8">
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Données collectées</h2>
            <p className="leading-7 text-white/60">
              Lorsque vous utilisez nos formulaires de contact ou de demande de devis, nous collectons uniquement les informations que vous nous transmettez : nom, prénom, société ou établissement, adresse e-mail, numéro de téléphone et le contenu de votre message. Aucune donnée n&apos;est collectée à votre insu.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Finalité du traitement</h2>
            <p className="leading-7 text-white/60">
              Ces données sont utilisées exclusivement pour répondre à votre demande (devis, renseignement, intervention) et assurer le suivi commercial qui en découle. Elles ne sont ni revendues, ni cédées, ni utilisées à des fins de prospection non sollicitée.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Destinataire et transmission</h2>
            <p className="leading-7 text-white/60">
              Les messages envoyés via les formulaires sont acheminés par e-mail à MISI (direction@misifrance.com) via le service de relais de formulaires FormSubmit. Le site est hébergé par OVHcloud (France). Ces prestataires techniques n&apos;utilisent pas vos données à d&apos;autres fins que l&apos;acheminement.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Durée de conservation</h2>
            <p className="leading-7 text-white/60">
              Vos données sont conservées le temps du traitement de votre demande et, en cas de relation commerciale, pendant la durée de celle-ci augmentée des délais légaux de conservation applicables.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Cookies</h2>
            <p className="leading-7 text-white/60">
              Ce site n&apos;utilise pas de cookies publicitaires ni de traceurs tiers à des fins de suivi. Seuls des cookies strictement techniques peuvent être déposés pour le bon fonctionnement du site.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">Vos droits (RGPD)</h2>
            <p className="leading-7 text-white/60">
              Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation et d&apos;opposition sur vos données personnelles. Pour l&apos;exercer, écrivez-nous à{" "}
              <a href="mailto:direction@misifrance.com" className="text-red hover:underline">direction@misifrance.com</a>. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" className="text-red hover:underline" rel="noopener noreferrer" target="_blank">cnil.fr</a>).
            </p>
          </div>
        </div>
      </section>

      <FooterMini />
    </>
  );
}
