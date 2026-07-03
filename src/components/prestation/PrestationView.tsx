import Link from "next/link";

import { Inview } from "@/components/animation/springs/in-view";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Eyebrow } from "@/components/common/Eyebrow";
import { RevealItem } from "@/components/common/RevealItem";
import { ZoomImage } from "@/components/common/ZoomImage";
import { IconArrowRight } from "@/components/icons";
import { PrestationHeroPhoto } from "@/components/prestation/PrestationHeroPhoto";
import { FooterMini } from "@/components/site/FooterMini";
import { Header } from "@/components/site/Header";
import type { Prestation } from "@/lib/prestations-data";

export function PrestationView({ p }: { p: Prestation }) {
  return (
    <>
      <Header />

      <div className="relative overflow-hidden border-b border-white/8 pt-[140px] pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(230,48,48,0.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[1240px] px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="font-tech mb-6 flex items-center gap-2 text-[11px] text-white/35">
                <Link href="/" className="hover:text-white">Accueil</Link>
                <span className="text-red/50">/</span>
                <Link href="/#services" className="hover:text-white">Prestations</Link>
                <span className="text-red/50">/</span>
                <span className="flex items-center gap-1.5 text-white/50">
                  <p.Icon width={14} height={14} className="text-red" />
                  {p.breadcrumbLabel}
                </span>
              </div>
              <Eyebrow className="mb-6">{p.label}</Eyebrow>
              <AnimatedHeading
                tag="h1"
                className="mt-4 mb-5 flex items-center gap-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
              >
                <p.Icon width={32} height={32} className="text-red shrink-0" />
                {p.title}
              </AnimatedHeading>
              <p className="max-w-[560px] text-lg text-white/60">{p.intro}</p>
            </div>
            <PrestationHeroPhoto heroImage={p.heroImage} heroAlt={p.heroAlt} badgeText={p.badgeText} icon={<p.Icon width={16} height={16} />} />
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-8 md:grid-cols-[1fr_340px]">
          <div>
            <AnimatedHeading className="mb-5 text-3xl font-bold text-white">{p.h2}</AnimatedHeading>
            {p.paragraphs.map((para, i) => (
              <p key={i} className="mb-5 leading-7 text-white/60">
                {para}
              </p>
            ))}

            <div className="my-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/8 bg-surface-2 p-4 sm:grid-cols-2">
              {p.gallery.map((img, i) => (
                <RevealItem key={i} index={i} className={`aspect-[4/3] rounded-xl ${i === 0 && p.gallery.length > 1 ? "sm:col-span-2" : ""}`}>
                  <ZoomImage src={img.src} alt={img.alt} contain className="h-full w-full rounded-xl" />
                </RevealItem>
              ))}
            </div>

            <div className="my-8 rounded-r-xl border-l-[3px] border-red bg-red/6 px-6 py-5">
              <h4 className="font-tech mb-2 text-[11px] font-medium tracking-[0.15em] text-red uppercase">{p.regleTitle}</h4>
              <p className="text-sm leading-6 text-white/70">{p.regleText}</p>
            </div>

            <h3 className="mt-9 mb-3.5 text-lg font-semibold text-white">{p.h3}</h3>
            <div className="flex flex-col gap-3">
              {p.list.map((item, i) => (
                <Inview
                  key={i}
                  from={{ opacity: 0, x: -18 }}
                  to={{ opacity: 1, x: 0 }}
                  mode="once"
                  delayIn={i * 60}
                  config={{ tension: 220, friction: 24 }}
                  className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-surface px-5 py-4 transition hover:border-white/16"
                >
                  <IconArrowRight width={16} height={16} className="mt-0.5 shrink-0 text-red" />
                  <span className="text-sm text-white/60">{item.text}</span>
                </Inview>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">{p.sidebarTitle}</h4>
              <ul className="flex flex-col">
                {p.sidebarList.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 border-b border-white/8 py-2.5 text-sm text-white/60 last:border-0">
                    <span className="text-xs text-red">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-red/20 bg-gradient-to-br from-red/15 to-red/5 p-6">
              <h4 className="mb-2 text-sm font-semibold text-white">Demander un devis</h4>
              <p className="mb-4 text-sm text-white/45">Réponse sous 24h — Gratuit &amp; sans engagement</p>
              <Link href="/#devis" className="block rounded-xl bg-red py-3.5 text-center text-sm font-semibold text-white transition hover:bg-red-dark">
                Obtenir un devis
              </Link>
            </div>
            <div className="rounded-[20px] border border-white/8 bg-surface p-6">
              <h4 className="mb-4 text-sm font-semibold text-white">Autres prestations</h4>
              <ul className="flex flex-col">
                {p.otherLinks.map((link) => (
                  <li key={link.slug} className="flex items-center gap-2.5 border-b border-white/8 py-2.5 text-sm last:border-0">
                    <span className="text-xs text-red">→</span>
                    <Link href={`/prestations/${link.slug}`} className="text-white/60 transition hover:text-white">
                      {link.label}
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
