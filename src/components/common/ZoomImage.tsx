"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Hover } from "@/components/animation/springs/hover";
import { Lightbox } from "@/components/common/Lightbox";

/** Product/gallery image with a spring-driven hover zoom and click-to-enlarge lightbox. */
export function ZoomImage({
  src,
  alt,
  className,
  imgClassName,
  contain = false,
  lightbox = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  contain?: boolean;
  lightbox?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        ref={wrapRef}
        onClick={() => lightbox && setOpen(true)}
        className={`relative overflow-hidden ${contain ? "bg-white" : ""} ${lightbox ? "cursor-pointer" : ""} ${className ?? ""}`}
        data-cursor-hover
      >
        <Hover
          trigger={wrapRef as React.RefObject<HTMLElement>}
          from={{ scale: 1 }}
          to={{ scale: 1.06 }}
          config={{ tension: 260, friction: 24 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={contain ? `object-contain p-3 ${imgClassName ?? ""}` : `object-cover ${imgClassName ?? ""}`}
          />
        </Hover>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
