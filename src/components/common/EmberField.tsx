"use client";

/**
 * Ember particle field — canvas-based ambient layer with 3 depth planes for a
 * parallax "3D" feel. Slow-rising embers in the brand red, subtly reacting to
 * scroll (deeper planes move slower). Runs on the shared rAF ticker
 * (`useLoop`) so it costs one loop app-wide, and fully disables itself when
 * `prefers-reduced-motion` is set.
 */
import { useEffect, useRef, useState } from "react";

import { useLoop } from "@/hooks/animation/use-render-loop";

type Ember = {
  x: number; // 0..1 viewport fraction
  y: number;
  depth: number; // 0.3 (far) .. 1 (near) — drives size, speed, opacity
  speed: number;
  drift: number;
  phase: number;
  size: number;
};

const COUNT = 46;

function spawn(randY: boolean): Ember {
  const depth = 0.3 + Math.random() * 0.7;
  return {
    x: Math.random(),
    y: randY ? Math.random() : 1.05,
    depth,
    speed: (0.012 + Math.random() * 0.02) * depth,
    drift: (Math.random() - 0.5) * 0.02,
    phase: Math.random() * Math.PI * 2,
    size: 0.8 + depth * 2.2,
  };
}

export function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const embers = useRef<Ember[]>([]);
  const lastTime = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!reduced);
    if (reduced) return;
    embers.current = Array.from({ length: COUNT }, () => spawn(true));

    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useLoop(
    (time) => {
      if (!enabled) return;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const dt = lastTime.current ? Math.min((time - lastTime.current) / 1000, 0.1) : 0.016;
      lastTime.current = time;

      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // Scroll parallax — deep planes lag behind (3D depth cue).
      const scroll = window.scrollY;

      for (const e of embers.current) {
        e.y -= e.speed * dt;
        e.x += e.drift * dt + Math.sin(time / 1400 + e.phase) * 0.00018;
        if (e.y < -0.05) Object.assign(e, spawn(false));

        const px = e.x * w;
        const py = e.y * h + scroll * (1 - e.depth) * 0.12;
        if (py < -10 || py > h + 10) continue;

        const flicker = 0.55 + 0.45 * Math.sin(time / 500 + e.phase * 3);
        const alpha = 0.05 + e.depth * 0.16 * flicker;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, e.size * 3.2);
        grad.addColorStop(0, `rgba(230, 78, 48, ${alpha})`);
        grad.addColorStop(1, "rgba(230, 48, 48, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, e.size * 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 160, 110, ${alpha * 1.4})`;
        ctx.beginPath();
        ctx.arc(px, py, e.size * 0.55, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    { framerate: 33 },
  );

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
