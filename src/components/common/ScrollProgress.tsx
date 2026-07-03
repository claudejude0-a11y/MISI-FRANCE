"use client";

/** Thin red progress bar pinned to the top of the viewport, tracking whole-page scroll. */
import { animated, useSpring } from "@react-spring/web";

import { useLoop } from "@/hooks/animation/use-render-loop";

export function ScrollProgress() {
  const [spring, api] = useSpring(() => ({ width: 0 }));

  useLoop(
    () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      api.set({ width: progress * 100 });
    },
    { framerate: 33 },
  );

  return (
    <animated.div
      className="fixed top-0 left-0 z-[1001] h-[2px] bg-red"
      style={{ width: spring.width.to((w) => `${w}%`) }}
    />
  );
}
