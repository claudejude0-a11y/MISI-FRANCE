"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";

import { SpringTrigger } from "@/components/animation/springs/spring-trigger";

export function PrestationHeroPhoto({
  heroImage,
  heroAlt,
  badgeText,
  icon,
}: {
  heroImage: string;
  heroAlt: string;
  badgeText: string;
  icon?: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapRef} className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/8 [perspective:1000px]">
      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full border border-white/8 bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md">
        {icon}
        {badgeText}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-red/15 to-transparent" />
      <SpringTrigger
        trigger={wrapRef as React.RefObject<HTMLElement>}
        start="top bottom"
        end="bottom top"
        mode="scrub"
        from={{ y: -24, scale: 1.08 }}
        to={{ y: 24, scale: 1.14 }}
        className="absolute inset-0"
        innerClassName="absolute inset-0"
      >
        <Image src={heroImage} alt={heroAlt} fill className="object-cover grayscale-[10%]" priority />
      </SpringTrigger>
    </div>
  );
}
