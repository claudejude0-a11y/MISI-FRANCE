"use client";

/**
 * Route-change transition — fades + lifts the new page in on client navigation.
 * Le premier rendu reste visible (opacité 1) : le HTML statique doit montrer le
 * contenu sans attendre JavaScript, pour les robots comme pour les connexions lentes.
 */
import { animated, useSpring } from "@react-spring/web";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  const [springs, api] = useSpring(() => ({ opacity: 1, y: 0 }));

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    api.start({
      from: { opacity: 0, y: 14 },
      to: { opacity: 1, y: 0 },
      config: { tension: 210, friction: 26 },
    });
  }, [pathname, api]);

  return <animated.div style={springs}>{children}</animated.div>;
}
