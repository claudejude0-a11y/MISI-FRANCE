"use client";

import { animated, useInView, useSpring } from "@react-spring/web";
import { useEffect } from "react";

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView({ once: true });

  // Le HTML statique porte la valeur finale (et non « 0 ») ; le comptage ne
  // démarre qu'une fois la statistique visible.
  const [spring, api] = useSpring(() => ({ val: to }));

  useEffect(() => {
    if (!inView) return;
    api.start({ from: { val: 0 }, to: { val: to }, config: { tension: 120, friction: 26 } });
  }, [inView, to, api]);

  return (
    <span ref={ref}>
      <animated.span>{spring.val.to((v) => Math.round(v))}</animated.span>
      {suffix}
    </span>
  );
}
