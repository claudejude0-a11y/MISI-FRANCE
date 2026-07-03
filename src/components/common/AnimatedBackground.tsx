"use client";

/**
 * Global ambient background — mounted once at the root layout so every route
 * inherits it. Two blurred orbs drift on a continuous idle loop (shared rAF
 * ticker via `useLoop`), plus a static grain texture for depth. Respects
 * `prefers-reduced-motion` by freezing the drift loop.
 */
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useLoop } from "@/hooks/animation/use-render-loop";

export function AnimatedBackground() {
  const [reduced, setReduced] = useState(false);
  const t = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const [orbA, apiA] = useSpring(() => ({ x: 0, y: 0 }));
  const [orbB, apiB] = useSpring(() => ({ x: 0, y: 0 }));

  useLoop(
    (time) => {
      if (reduced) return;
      t.current = time;
      apiA.set({ x: Math.sin(time / 6000) * 60, y: Math.cos(time / 8000) * 40 });
      apiB.set({ x: Math.cos(time / 7000) * 50, y: Math.sin(time / 5500) * 60 });
    },
    { framerate: 33 },
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Ambient photo backdrop — fixed, desaturated, very low opacity so content stays legible */}
      <div className="absolute inset-0 opacity-[0.09] grayscale contrast-125">
        <Image
          src="/images/bg-ambient.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_25%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/40 to-charcoal" />
      <animated.div
        style={{
          transform: orbA.x.to((x) => `translate3d(${x}px, ${orbA.y.get()}px, 0)`),
        }}
        className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(230,48,48,0.5)_0%,transparent_70%)] opacity-[0.12] blur-[100px]"
      />
      <animated.div
        style={{
          transform: orbB.x.to((x) => `translate3d(${x}px, ${orbB.y.get()}px, 0)`),
        }}
        className="absolute top-[60vh] -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(230,48,48,0.35)_0%,transparent_70%)] opacity-[0.10] blur-[100px]"
      />
      <animated.div
        style={{
          transform: orbA.y.to((y) => `translate3d(${-orbA.x.get()}px, ${-y}px, 0)`),
        }}
        className="absolute top-[130vh] left-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(230,48,48,0.3)_0%,transparent_70%)] opacity-[0.08] blur-[100px]"
      />
      {/* Static grain texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
        }}
      />
    </div>
  );
}
