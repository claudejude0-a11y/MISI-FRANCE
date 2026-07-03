import Link from "next/link";

export function FooterMini() {
  return (
    <div className="border-t border-white/8 bg-surface py-6">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-8 text-sm text-white/35 md:flex-row">
        <span>© 2026 MISI — Maintenance Installation Sécurité Incendie</span>
        <Link href="/" className="text-red transition hover:text-white">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
