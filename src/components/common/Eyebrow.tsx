import type { ReactNode } from "react";

/**
 * Section eyebrow — set in the technical mono face with a datasheet-style
 * leading rule. The brand's "field label" voice.
 */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`font-tech inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] text-red uppercase ${className ?? ""}`}
    >
      <span className="h-px w-7 bg-red/70" />
      {children}
    </span>
  );
}
