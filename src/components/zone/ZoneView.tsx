import Link from "next/link";

import { Inview } from "@/components/animation/springs/in-view";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Eyebrow } from "@/components/common/Eyebrow";
import { IconArrowRight } from "@/components/icons";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";
import { zonePrestationLinks, zones, type Zone } from "@/lib/zones-data";
import { getLocalBusinessStructuredData } from "@/utils/seo/structured-data";

export function ZoneView({ z }: { z: Zone }) {
  const otherZones = zones.filter((other) => other.slug !== z.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessStructuredData(z.areaServed)),
        }}
      />

      <Header />

      <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[1240px] px-8">
          <div className="font-tech mb-6 flex items-center gap-2 text-[11px] text-white/35">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="text-red/50">/</span>
            <span className="text-white/50">Zones d&apos;intervention</span>
            <span className="text-red/50">/</span>
            <span className="text-white/50">{z.name}</span>
          </div>
          <Eyebrow className="mb-6">{z.label}</Eyebrow>
          <AnimatedHeading
            tag="h1"
            className="mt-4 mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          >
            {z.h1}
          </AnimatedHeading>
          <p className="max-w-[620px] text-lg text-white/60">{z.intro}</p>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-8 md:grid-cols-[1fr_340px]">
          <div>
            <AnimatedHeading className="mb-5 text-3xl font-bold text-white">{z.h2}</AnimatedHeading>
            {z.paragraphs.map((para, i) => (
              <p key={i} className="mb-5 leading-7 text-white/60">
                {para}
              </p>
            ))}

            <Inview
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
              mode="once"
              config={{ tension: 220, friction: 24 }}
              className="my-8 rounded-2xl border border-white/8 bg-surface-2 p-6"
            >
              <h4 className="font-tech mb-4 text-[11px] font-medium tracking-[0.15em] text-red uppercase">
                Communes &amp; secteurs desservis
              </h4>
              <div className="flex flex-wrap gap-2">
                {z.communes.map((commune) => (
                  <span
                    key={commune}
                    className="rounded-full border border-white/8 bg-surface px-3.5 py-1.5 text-sm text-white/60"
                  >
                    {commune}
                  </span>
                ))}
              </div>
            </Inview>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">
              Nos prestations sur {z.name}
            </h3>
            <div className="flex flex-col gap-3">
              {zonePrestationLinks.map((link, i) => (
                <Inview
                  key={link.slug}
                  from={{ opacity: 0, x: -18 }}
                  to={{ opacity: 1, x: 0 }}
                  mode="once"
                  delayIn={i * 60}
                  config={{ tension: 220, friction: 24 }}
                >
                  <Link
                    href={`/prestations/${link.slug}`}
                    className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-surface px-5 py-4 transition hover:border-white/16"
                  >
                    <IconArrowRight width={16} height={16} className="mt-0.5 shrink-0 text-red" />
                    <span className="text-sm text-white/60">{link.label}</span>
                  </Link>
                </Inview>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[20px] border border-red/20 bg-gradient-to-br from-red/15 to-red/5 p-6">
              <h4 className="mb-2 text-sm font-semibold text-white">Demander un devis</h4>
              <p className="mb-4 text-sm text-white/45">Réponse sous 24h — Gratuit &amp; sans engagement</p>
              <Link href="/#devis" className="block rounded-xl bg-red py-3.5 text-center text-sm font-semibold text-white transition hover:bg-red-dark">
                Obtenir un devis
              </Link>
            </div>
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">Autres zones d&apos;intervention</h4>
              <ul className="flex flex-col">
                {otherZones.map((other) => (
                  <li key={other.slug} className="flex items-center gap-2.5 border-b border-white/8 py-2.5 text-sm last:border-0">
                    <span className="text-xs text-red">→</span>
                    <Link href={`/zones/${other.slug}`} className="text-white/60 transition hover:text-white">
                      {other.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <FooterMini />
    </>
  );
}
