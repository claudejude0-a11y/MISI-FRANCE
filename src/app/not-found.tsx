import Link from "next/link";

import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";

/**
 * 404 page. Rendered for unmatched routes and `notFound()` calls; Next serves
 * it with a 404 status, so crawlers see a proper not-found response.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden px-8 pt-[140px] pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
        <div className="relative">
          <p className="font-tech text-xs tracking-[0.2em] text-red uppercase">Erreur 404</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl">Page introuvable</h1>
          <p className="mx-auto mt-5 max-w-md text-white/60">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil ou consultez nos prestations de sécurité incendie.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark">
              Retour à l&apos;accueil
            </Link>
            <Link href="/#services" className="rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Voir nos prestations
            </Link>
            <Link href="/contact" className="rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
      <FooterMini />
    </>
  );
}
