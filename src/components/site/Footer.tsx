import Image from "next/image";
import Link from "next/link";

import { priorityDepartments, zones } from "@/lib/zones-data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 pt-20">
      <div className="mx-auto max-w-[1240px] px-8">
        <div className="grid grid-cols-1 gap-14 pb-14 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] xl:gap-10">
          <div className="md:col-span-2 lg:col-span-4 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo-misi.png" alt="MISI" width={48} height={48} className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-[260px] text-sm leading-7 text-white/60">
              Un seul interlocuteur pour l&apos;installation, la maintenance et la vérification de tous vos équipements de sécurité incendie.
            </p>
            <p className="mt-3 max-w-[260px] text-sm leading-7 text-white/60">Intervention partout en France, en priorité : {priorityDepartments.join(", ")}.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold tracking-widest text-white/60 uppercase">Prestations</p>
            {/* Listes <ul>/<li> : des liens frères sans séparateur se collaient dans
                l'extrait Google (« 07 62 57 56 78direction@…comFormulaire »). */}
            <ul className="flex flex-col gap-2.5 text-sm text-white/45">
              <li><Link href="/prestations/extincteurs" className="transition hover:text-white">Extincteurs</Link></li>
              <li><Link href="/prestations/ria" className="transition hover:text-white">RIA</Link></li>
              <li><Link href="/prestations/baes" className="transition hover:text-white">BAES</Link></li>
              <li><Link href="/prestations/hydrants" className="transition hover:text-white">Poteaux incendie</Link></li>
              <li><Link href="/prestations/portes-coupe-feu" className="transition hover:text-white">Portes coupe-feu</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold tracking-widest text-white/60 uppercase">Autres services</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/45">
              <li><Link href="/prestations/desenfumage" className="transition hover:text-white">Désenfumage</Link></li>
              <li><Link href="/prestations/centrales-qti" className="transition hover:text-white">CATI</Link></li>
              <li><Link href="/prestations/baches" className="transition hover:text-white">Bâches incendie</Link></li>
              <li><Link href="/prestations/ppms" className="transition hover:text-white">PPMS</Link></li>
              <li><Link href="/prestations/reflex-o-feu" className="transition hover:text-white">Réflex O Feu</Link></li>
              <li><Link href="/prestations/plans-signaletique" className="transition hover:text-white">Plans &amp; signalétique</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold tracking-widest text-white/60 uppercase">Zones d&apos;intervention</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/45">
              {zones.map((z) => (
                <li key={z.slug}><Link href={`/zones/${z.slug}`} className="transition hover:text-white">{z.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold tracking-widest text-white/60 uppercase">Contact</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/45">
              <li><a href="tel:+33762575678" className="font-tech transition hover:text-white">07 62 57 56 78</a></li>
              <li><a href="mailto:direction@misifrance.com" className="transition hover:text-white">direction@misifrance.com</a></li>
              <li><Link href="/contact" className="transition hover:text-white">Formulaire de contact</Link></li>
              <li><Link href="/#devis" className="transition hover:text-white">Demander un devis</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/8 py-5 text-xs text-white/60 md:flex-row">
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
