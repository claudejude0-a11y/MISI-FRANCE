"use client";

import Image from "next/image";
import { animated, useReducedMotion, useSpring } from "@react-spring/web";

import { clients } from "@/lib/clients-data";

/**
 * Infinite horizontal logo strip ("ils nous font confiance"). Motion is
 * react-spring (a looping linear tween on translateX) — no CSS keyframes, per
 * the project's animation rules. The list is duplicated so translating by -50 %
 * of the track width loops seamlessly. Respects `prefers-reduced-motion`.
 */
export function ClientsMarquee() {
  const reduceMotion = useReducedMotion();

  const styles = useSpring({
    from: { x: 0 },
    to: { x: -50 },
    loop: true,
    pause: reduceMotion ?? false,
    config: { duration: 28000 },
  });

  // Two copies back-to-back → seamless wrap at -50 %.
  const track = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden">
      {/* Edge fades so logos appear/disappear smoothly. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal to-transparent" />

      <animated.ul
        style={{ transform: styles.x.to((v) => `translateX(${v}%)`) }}
        className="flex w-max items-center"
      >
        {track.map((client, i) => (
          <li key={`${client.name}-${i}`} className="flex shrink-0 items-center pr-14" aria-hidden={i >= clients.length}>
            {client.logo ? (
              <div className="flex h-[72px] items-center justify-center rounded-2xl bg-white px-8">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={220}
                  height={80}
                  className="h-11 w-auto object-contain"
                />
              </div>
            ) : (
              <span className="font-display text-xl font-bold whitespace-nowrap text-white/40 transition duration-300 hover:text-white/80">
                {client.name}
              </span>
            )}
          </li>
        ))}
      </animated.ul>
    </div>
  );
}
