"use client";

/**
 * Route-change transition — fades + lifts the new page in on every
 * navigation. Keyed on `pathname` so each route mount replays the spring.
 */
import { animated, useSpring } from "@react-spring/web";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const springs = useSpring({
    from: { opacity: 0, y: 14 },
    to: { opacity: 1, y: 0 },
    config: { tension: 210, friction: 26 },
    reset: true,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps: [pathname],
  });

  return <animated.div style={springs}>{children}</animated.div>;
}
