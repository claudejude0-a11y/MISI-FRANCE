import Link from "next/link";

import { zones } from "@/lib/zones-data";

export function FooterMini() {
  return (
    <div className="border-t border-white/8 bg-surface py-6">
      {/* Liens vers les pages de villes : sans eux, seules les pages de zones se
          citaient entre elles et Google ne les jugeait pas prioritaires. */}
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
      </nav>
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-8 text-sm text-white/60 md:flex-row">
        <span>© 2026 MISI — Maintenance Installation Sécurité Incendie</span>
        <Link href="/" className="text-red transition hover:text-white">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
