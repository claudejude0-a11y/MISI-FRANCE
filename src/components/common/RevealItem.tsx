"use client";

import type { ReactNode } from "react";

import { Inview } from "@/components/animation/springs/in-view";

/** Generic stagger-reveal wrapper for list/grid items — pass `index` for stagger delay. */
export function RevealItem({
  children,
  index = 0,
  className,
  direction = "up",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const from =
    direction === "left"
      ? { opacity: 0, x: -20 }
      : direction === "right"
        ? { opacity: 0, x: 20 }
        : { opacity: 0, y: 22 };
  const to = direction === "up" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <Inview
      from={from}
      to={to}
      mode="once"
      delayIn={index * 65}
      config={{ tension: 210, friction: 24 }}
      className={className}
    >
      {children}
    </Inview>
  );
}
