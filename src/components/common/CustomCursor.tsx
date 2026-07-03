"use client";

/**
 * Magnetic custom cursor — desktop only. A small dot tracks the pointer
 * exactly; a trailing ring lags behind via spring easing and scales up over
 * interactive elements. Mounted once at the root layout.
 */
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

import { useLoop } from "@/hooks/animation/use-render-loop";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  const [dotSpring, dotApi] = useSpring(() => ({ x: -100, y: -100, immediate: true }));
  const [ringSpring, ringApi] = useSpring(() => ({ x: -100, y: -100, scale: 1 }));

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isEnabled = isFinePointer && !reduced;
    setEnabled(isEnabled);
    if (isEnabled) {
      document.documentElement.classList.add("cursor-none-active");
      return () => {
        document.documentElement.classList.remove("cursor-none-active");
      };
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      dotApi.set({ x: e.clientX, y: e.clientY });

      const el = (e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR);
      setHovering(!!el);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, dotApi, visible]);

  useLoop(
    () => {
      if (!enabled) return;
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      ringApi.set({ x: ring.current.x, y: ring.current.y });
    },
    { framerate: 16 },
  );

  useEffect(() => {
    ringApi.start({ scale: hovering ? 1.8 : 1, config: { tension: 300, friction: 20 } });
  }, [hovering, ringApi]);

  if (!enabled) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}>
      <animated.div
        style={{
          transform: dotSpring.x.to((x) => `translate3d(${x - 3}px, ${dotSpring.y.get() - 3}px, 0)`),
        }}
        className="absolute h-1.5 w-1.5 rounded-full bg-red"
      />
      <animated.div
        style={{
          transform: ringSpring.x.to(
            (x) => `translate3d(${x - 16}px, ${ringSpring.y.get() - 16}px, 0) scale(${ringSpring.scale.get()})`,
          ),
        }}
        className="absolute h-8 w-8 rounded-full border border-red/50"
      />
    </div>
  );
}
