"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Spring } from "@/components/animation/springs/spring";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 z-[1000] w-[calc(100%-3rem)] max-w-[1240px] -translate-x-1/2 rounded-[28px] border border-white/8 bg-charcoal/75 backdrop-blur-xl [perspective:800px]">
        <nav className="flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Spring
              from={{ rotateY: 320, opacity: 0 }}
              to={{ rotateY: 0, opacity: 1 }}
              mode="once"
              config={{ tension: 120, friction: 18 }}
              style={{ transformStyle: "preserve-3d", display: "inline-block" }}
            >
              <Image
                src="/images/logo-misi.png"
                alt="MISI"
                width={96}
                height={96}
                className="h-24 w-auto object-contain drop-shadow-[0_0_8px_rgba(230,48,48,0.25)]"
                priority
              />
            </Spring>
          </Link>
          <ul className="hidden items-center gap-1 md:flex">
            <li>
              <Link href="/#services" className="px-4 py-2 text-sm text-white/70 transition hover:text-white">
                Prestations
              </Link>
            </li>
            <li>
              <Link href="/#why" className="px-4 py-2 text-sm text-white/70 transition hover:text-white">
                Pourquoi MISI
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-4 py-2 text-sm text-white/70 transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="/#devis"
            className="hidden rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark md:inline-flex"
          >
            Demander un devis
          </Link>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-x-4 top-24 z-[999] flex flex-col gap-2 rounded-2xl border border-white/8 bg-charcoal/95 p-4 backdrop-blur-xl md:hidden">
          <Link href="/#services" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-white/80">
            Prestations
          </Link>
          <Link href="/#why" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-white/80">
            Pourquoi MISI
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-white/80">
            Contact
          </Link>
          <Link
            href="/#devis"
            onClick={() => setOpen(false)}
            className="rounded-full bg-red px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Demander un devis
          </Link>
        </div>
      )}
    </>
  );
}
