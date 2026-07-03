"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

import { Hover } from "@/components/animation/springs/hover";

export function AnimatedButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link ref={ref} href={href} className="inline-block">
      <Hover
        trigger={ref as React.RefObject<HTMLElement>}
        from={{ scale: 1, y: 0 }}
        to={{ scale: 1.05, y: -2 }}
        config={{ tension: 350, friction: 18 }}
        className={className}
      >
        {children}
      </Hover>
    </Link>
  );
}
