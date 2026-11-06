import type { Metadata } from "next";
import Link from "next/link";

import { Eyebrow } from "@/components/common/Eyebrow";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";
import { guides } from "@/lib/guides-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Guides sécurité incendie : obligations, vérifications, registre | MISI",
  description:
    "Nos réponses aux questions fréquentes : vérification des extincteurs et des BAES, obligations, registre de sécurité, plan d'évacuation, prix et intervention.",
  url: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbStructuredData([{ name: "Guides", path: "/guides" }])),
        }}
      />
      <Header />
      <main id="contenu">
        <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-[880px] px-8">
            <Eyebrow className="mb-6">Guides</Eyebrow>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Vos questions sur la sécurité incendie
            </h1>
          </div>
        </div>
        <section className="py-16">
          <ul className="mx-auto flex max-w-[880px] flex-col gap-4 px-8">
            {guides.map((g) => (
              <li key={g.slug} className="rounded-2xl border border-white/8 bg-surface p-6">
                <h2 className="mb-2 text-lg font-semibold">
                  <Link href={`/guides/${g.slug}`} className="text-white transition hover:text-red-light">
                    {g.title}
                  </Link>
                </h2>
                <p className="text-sm leading-6 text-white/60">{g.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <FooterMini />
    </>
  );
}
