"use client";

import { useState } from "react";

import { IconChevronDown } from "@/components/icons";
import { faqs } from "@/lib/faq-data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-[780px] flex-col gap-3">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border bg-surface transition ${isOpen ? "border-white/16" : "border-white/8"}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6.5 py-5.5 text-left text-sm font-semibold text-white"
            >
              <span>{item.q}</span>
              <IconChevronDown
                width={16}
                height={16}
                className={`shrink-0 text-red transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6.5 pb-5.5 text-sm leading-6 text-white/60">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
