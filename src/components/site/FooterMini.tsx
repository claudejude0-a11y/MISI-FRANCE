import Link from "next/link";

import { namedDepartments, zones } from "@/lib/zones-data";

export function FooterMini() {
  return (
    <footer className="border-t border-white/8 bg-surface py-6">
      {/* Liens vers les pages de villes : sans eux, seules les pages de zones se
          citaient entre elles et Google les explorait peu. */}
      <nav aria-label="Zones d'intervention" className="mx-auto mb-4 max-w-[1240px] px-8 text-sm text-white/60">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start">
          <li>Zones d&apos;intervention :</li>
          {zones.map((z) => (
            <li key={z.slug}>
              <Link href={`/zones/${z.slug}`} className="transition hover:text-white">
                {z.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center md:text-left">Intervention partout en France, notamment : {namedDepartments.join(", ")}.</p>
        <p className="mt-1 text-center md:text-left">1 bis Chemin de la Renauderie, 89150 Dollot — du lundi au vendredi, 8h30–17h30</p>
      </nav>
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-8 text-sm text-white/60 md:flex-row">
        <span>© 2026 MISI — Maintenance Installation Sécurité Incendie</span>
        <a href="tel:+33762575678" className="font-semibold text-white transition hover:text-red-light">
          07 62 57 56 78
        </a>
        <Link href="/" className="text-red transition hover:text-white">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </footer>
  );
}
