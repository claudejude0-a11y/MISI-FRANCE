"use client";

import { useRef, type ReactNode } from "react";

import { Hover } from "@/components/animation/springs/hover";
import { Inview } from "@/components/animation/springs/in-view";

export function SecteurCard({
  icon,
  title,
  text,
  index,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Inview
      from={{ opacity: 0, y: 24 }}
      to={{ opacity: 1, y: 0 }}
      mode="once"
      delayIn={index * 70}
      config={{ tension: 200, friction: 24 }}
    >
      <div ref={cardRef} className="[perspective:1200px]">
        <Hover
          trigger={cardRef as React.RefObject<HTMLElement>}
          from={{ rotateX: 0, rotateY: 0, y: 0 }}
          to={{ rotateX: -4, rotateY: 4, y: -4 }}
          config={{ tension: 300, friction: 22 }}
          style={{ transformStyle: "preserve-3d" }}
          className="rounded-[20px] border border-white/8 bg-surface p-7 hover:border-white/16"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red/8 text-red">
            {icon}
          </div>
          <h4 className="mb-2 font-semibold text-white">{title}</h4>
          <p className="text-sm text-white/60">{text}</p>
        </Hover>
      </div>
    </Inview>
  );
}
