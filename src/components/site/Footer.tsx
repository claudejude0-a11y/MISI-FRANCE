import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/8 pt-20">
      <div className="mx-auto max-w-[1240px] px-8">
        <div className="grid grid-cols-1 gap-14 pb-14 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/images/logo-misi.png" alt="MISI" width={48} height={48} className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-[260px] text-sm leading-7 text-white/35">
              Un seul interlocuteur pour l&apos;installation, la maintenance et la vérification de tous vos équipements de sécurité incendie.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-bold tracking-widest text-white/35 uppercase">Prestations</h5>
            <div className="flex flex-col gap-2.5 text-sm text-white/45">
              <Link href="/prestations/extincteurs" className="transition hover:text-white">Extincteurs</Link>
              <Link href="/prestations/ria" className="transition hover:text-white">RIA</Link>
              <Link href="/prestations/baes" className="transition hover:text-white">BAES</Link>
              <Link href="/prestations/hydrants" className="transition hover:text-white">Poteaux incendie</Link>
              <Link href="/prestations/portes-coupe-feu" className="transition hover:text-white">Portes coupe-feu</Link>
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-bold tracking-widest text-white/35 uppercase">Autres services</h5>
            <div className="flex flex-col gap-2.5 text-sm text-white/45">
              <Link href="/prestations/desenfumage" className="transition hover:text-white">Désenfumage</Link>
              <Link href="/prestations/centrales-qti" className="transition hover:text-white">CATI</Link>
              <Link href="/prestations/baches" className="transition hover:text-white">Bâches incendie</Link>
              <Link href="/prestations/ppms" className="transition hover:text-white">PPMS</Link>
              <Link href="/prestations/reflex-o-feu" className="transition hover:text-white">Réflex O Feu</Link>
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-bold tracking-widest text-white/35 uppercase">Contact</h5>
            <div className="flex flex-col gap-2.5 text-sm text-white/45">
              <a href="tel:+33762575678" className="font-tech transition hover:text-white">07 62 57 56 78</a>
              <a href="mailto:direction@misifrance.com" className="transition hover:text-white">direction@misifrance.com</a>
              <Link href="/contact" className="transition hover:text-white">Formulaire de contact</Link>
              <Link href="/#devis" className="transition hover:text-white">Demander un devis</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/8 py-5 text-xs text-white/35 md:flex-row">
          <span>© 2026 MISI — Maintenance Installation Sécurité Incendie. Tous droits réservés.</span>
          <span className="flex gap-3">
            <Link href="/mentions-legales" className="transition hover:text-white">Mentions légales</Link>
            <span>·</span>
            <Link href="/politique-de-confidentialite" className="transition hover:text-white">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
