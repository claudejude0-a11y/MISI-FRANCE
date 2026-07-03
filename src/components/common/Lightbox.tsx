"use client";

import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  const backdrop = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { tension: 260, friction: 28 } });
  const panel = useSpring({
    from: { opacity: 0, scale: 0.92 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 280, friction: 22 },
  });

  return createPortal(
    <animated.div
      style={backdrop}
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
    >
      <animated.div
        style={{
          opacity: panel.opacity,
          transform: panel.scale.to((s) => `scale(${s})`),
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
      >
        <Image src={src} alt={alt} fill className="object-contain p-6" />
      </animated.div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </animated.div>,
    document.body,
  );
}
