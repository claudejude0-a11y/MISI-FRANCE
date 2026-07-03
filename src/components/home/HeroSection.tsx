"use client";

import Image from "next/image";
import { useRef } from "react";

import { Inview } from "@/components/animation/springs/in-view";
import { SpringTrigger } from "@/components/animation/springs/spring-trigger";
import { AnimatedButton } from "@/components/common/AnimatedButton";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { CountUp } from "@/components/common/CountUp";
import { IconCheckCircle } from "@/components/icons";

const stats = [
  { num: "11", suffix: "+", label: "Types d'équipements" },
  { num: "100", suffix: "%", label: "Conformité garantie" },
  { num: "48", suffix: "h", label: "Délai d'intervention" },
  { num: "24", suffix: "h", label: "Réponse devis" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-44 pb-24 text-center [perspective:1000px]">
      {/* Background photo — technician at work, full-bleed with slow parallax */}
      <SpringTrigger
        trigger={sectionRef as React.RefObject<HTMLElement>}
        start="top top"
        end="bottom top"
        mode="scrub"
        from={{ y: 0, scale: 1.06 }}
        to={{ y: 70, scale: 1.12 }}
        className="absolute inset-0 z-0 overflow-hidden"
        innerClassName="absolute inset-0"
      >
        <Image
          src="/images/tech-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_22%] opacity-[0.22] contrast-[1.05] saturate-[0.9]"
        />
      </SpringTrigger>
      {/* Legibility grade — darkens edges and bottom, keeps centre readable */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,transparent_0%,rgba(13,13,13,0.55)_78%,rgba(13,13,13,0.9)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-charcoal to-transparent" />

      {/* Ambient orbs — drift on scroll for depth */}
      <SpringTrigger
        trigger={sectionRef as React.RefObject<HTMLElement>}
        start="top top"
        end="bottom top"
        mode="scrub"
        from={{ y: 0, rotateZ: 0 }}
        to={{ y: -40, rotateZ: 12 }}
        className="pointer-events-none absolute -top-36 -left-28 z-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(230,48,48,0.7)_0%,transparent_70%)] opacity-20 blur-[90px]"
      />
      <SpringTrigger
        trigger={sectionRef as React.RefObject<HTMLElement>}
        start="top top"
        end="bottom top"
        mode="scrub"
        from={{ y: 0, rotateZ: 0 }}
        to={{ y: 90, rotateZ: -16 }}
        className="pointer-events-none absolute -right-[8%] -bottom-20 z-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(230,48,48,0.4)_0%,transparent_70%)] opacity-20 blur-[90px]"
      />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-8">
        <Inview
          from={{ opacity: 0, y: 20, rotateX: -20 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          mode="once"
          config={{ tension: 220, friction: 24 }}
          style={{ transformStyle: "preserve-3d" }}
          className="mb-8 inline-flex items-center gap-1.5 rounded-full border border-red/20 bg-red/8 px-4 py-2 text-xs font-semibold text-red/90 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red" />
          Entreprise qualifiée — Techniciens expérimentés
        </Inview>

        <AnimatedHeading
          tag="h1"
          delayIn={120}
          className="mx-auto max-w-3xl text-5xl leading-tight font-extrabold tracking-tight text-white md:text-6xl"
        >
          Votre sécurité incendie,
          <br />
          <em className="text-red not-italic">notre expertise</em>
        </AnimatedHeading>

        <Inview
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          mode="once"
          delayIn={220}
          config={{ tension: 200, friction: 24 }}
        >
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Installation, maintenance et vérification de l&apos;ensemble de vos équipements de protection incendie, pour tous types d&apos;établissements — ERP, IGH, industrie, collectivités.
          </p>
        </Inview>

        <Inview
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          mode="once"
          delayIn={300}
          config={{ tension: 200, friction: 24 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <AnimatedButton href="#devis" className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(230,48,48,0.4)] hover:shadow-[0_10px_30px_0_rgba(230,48,48,0.35)]">
            <IconCheckCircle width={15} height={15} />
            Demander un devis gratuit
          </AnimatedButton>
          <AnimatedButton href="#services" className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10">
            Voir nos prestations
          </AnimatedButton>
        </Inview>

        <Inview
          from={{ opacity: 0, y: 24, rotateX: -15 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          mode="once"
          delayIn={380}
          config={{ tension: 200, friction: 26 }}
          style={{ transformStyle: "preserve-3d" }}
          className="mt-20 flex flex-col overflow-hidden rounded-[28px] border border-white/8 bg-charcoal/40 backdrop-blur-md sm:flex-row"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex-1 border-b border-white/8 px-8 py-7 text-center last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
              <div className="font-tech text-4xl leading-none font-bold tracking-tight text-white tabular-nums">
                <CountUp to={Number(s.num)} />
                <span className="text-red">{s.suffix}</span>
              </div>
              <div className="mt-2 text-[11px] tracking-widest text-white/35 uppercase">{s.label}</div>
            </div>
          ))}
        </Inview>
      </div>
    </section>
  );
}
