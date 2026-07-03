"use client";

import { easings } from "@react-spring/web";
import TextEngine from "spring-text-engine";
import type { ReactNode } from "react";

/** Line-by-line reveal heading — wraps TextEngine with the project's default motion. */
export function AnimatedHeading({
  tag = "h2",
  children,
  className,
  mode = "once",
  delayIn = 0,
}: {
  tag?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
  mode?: "once" | "always" | "forward";
  delayIn?: number;
}) {
  return (
    <TextEngine
      tag={tag}
      className={className}
      mode={mode}
      lineIn={{ y: "0%", opacity: 1 }}
      lineOut={{ y: "100%", opacity: 0 }}
      lineStagger={90}
      delayIn={delayIn}
      lineConfig={{ duration: 800, easing: easings.easeOutCubic }}
      overflow
    >
      {children}
    </TextEngine>
  );
}

/** Word-by-word fade-up — for body copy / subheadings. */
export function AnimatedWords({
  tag = "p",
  children,
  className,
  mode = "once",
  delayIn = 0,
}: {
  tag?: "p" | "span" | "div";
  children: ReactNode;
  className?: string;
  mode?: "once" | "always" | "forward";
  delayIn?: number;
}) {
  return (
    <TextEngine
      tag={tag}
      className={className}
      mode={mode}
      wordIn={{ y: 0, opacity: 1 }}
      wordOut={{ y: 16, opacity: 0 }}
      wordStagger={26}
      delayIn={delayIn}
      wordConfig={{ duration: 500, easing: easings.easeOutQuart }}
    >
      {children}
    </TextEngine>
  );
}
