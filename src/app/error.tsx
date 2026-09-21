"use client";

import { useEffect } from "react";

/**
 * Route-segment error boundary. Must be a Client Component. Catches render and
 * data errors in this segment and offers a recovery action via `reset()`.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for logging/monitoring (kept by removeConsole's exclude).
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[72vh] flex-col items-center justify-center gap-5 px-8 text-center">
      <p className="font-tech text-xs tracking-[0.2em] text-red uppercase">Une erreur est survenue</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Un problème est survenu</h1>
      <p className="max-w-md text-white/60">
        Une erreur inattendue s&apos;est produite lors de l&apos;affichage de cette page. Vous pouvez réessayer ou revenir à l&apos;accueil.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark"
        >
          Réessayer
        </button>
        <a
          href="/"
          className="rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
