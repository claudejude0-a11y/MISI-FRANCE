"use client";

/**
 * Effets purement décoratifs (braises, curseur) : chargés seulement sur grand
 * écran à pointeur précis, une fois la page affichée, pour ne pas ralentir le
 * premier affichage.
 */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const EmberField = dynamic(() => import("./EmberField").then((m) => m.EmberField), { ssr: false });
const CustomCursor = dynamic(() => import("./CustomCursor").then((m) => m.CustomCursor), { ssr: false });

const START_DELAY_MS = 3000;

export function DeferredEffects() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return;
    const timer = window.setTimeout(() => setReady(true), START_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <>
      <EmberField />
      <CustomCursor />
    </>
  );
}
