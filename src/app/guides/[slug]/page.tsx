import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Eyebrow } from "@/components/common/Eyebrow";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";
import { getGuide, guides } from "@/lib/guides-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData } from "@/utils/seo/structured-data";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return buildMetadata({ title: g.titleTag, description: g.description, url: `/guides/${g.slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbStructuredData([
              { name: "Guides", path: "/guides" },
              { name: g.title, path: `/guides/${g.slug}` },
            ]),
          ),
        }}
      />
      <Header />
      <main id="contenu">
        <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-[880px] px-8">
            <div className="font-tech mb-6 flex items-center gap-2 text-[11px] text-white/60">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span className="text-red/50">/</span>
              <Link href="/guides" className="hover:text-white">Guides</Link>
            </div>
            <Eyebrow className="mb-6">Guide</Eyebrow>
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">{g.title}</h1>
            <p className="mt-5 text-lg text-white/70">{g.answer}</p>
          </div>
        </div>

        <section className="py-16">
          <div className="mx-auto flex max-w-[880px] flex-col gap-10 px-8">
            {g.sections.map((s) => (
              <div key={s.h2}>
                <h2 className="mb-3 text-2xl font-bold text-white">{s.h2}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mb-3 leading-7 text-white/60">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="flex list-disc flex-col gap-2 pl-5 leading-7 text-white/60">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-white/8 bg-surface p-6">
              <h2 className="mb-2 text-xl font-bold text-white">Une question sur votre bâtiment ?</h2>
              <p className="mb-4 text-sm leading-6 text-white/60">
                Appelez-nous au <a href="tel:+33762575678" className="text-white hover:underline">07 62 57 56 78</a> ou demandez un devis gratuit.
                {g.prestation && (
                  <>
                    {" "}
                    <Link href={`/prestations/${g.prestation}`} className="text-white underline hover:text-red-light">
                      Voir la prestation
                    </Link>
                  </>
                )}
              </p>
              <Link
                href="/#devis"
                className="inline-block rounded-full bg-red-strong px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-dark"
              >
                Demander un devis
              </Link>
            </div>

            {g.sources.length > 0 && (
              <div>
                <h2 className="mb-3 text-base font-semibold text-white">Sources</h2>
                <ul className="flex flex-col gap-1.5 text-sm text-white/60">
                  {g.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} rel="noopener noreferrer" target="_blank" className="underline hover:text-white">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-5 text-white/60">
                  Résumé à titre informatif : il ne remplace pas une étude réglementaire propre à votre établissement.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterMini />
    </>
  );
}
