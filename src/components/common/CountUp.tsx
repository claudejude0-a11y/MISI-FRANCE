"use client";

import { animated, useInView, useSpring } from "@react-spring/web";

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView({ once: true });

  const spring = useSpring({
    val: inView ? to : 0,
    config: { tension: 120, friction: 26 },
  });

  return (
    <span ref={ref}>
      <animated.span>{spring.val.to((v) => Math.round(v))}</animated.span>
      {suffix}
    </span>
  );
}
