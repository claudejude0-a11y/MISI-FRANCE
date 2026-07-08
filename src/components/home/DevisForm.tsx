"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

/**
 * Static export — no server, so the form posts straight to FormSubmit's
 * AJAX relay instead of a same-origin `/api/contact` route.
 *
 * Le destinataire vit dans `siteConfig.forms.recipient` (source unique, partagée
 * avec ContactForm) — ne pas le réécrire en dur ici.
 */
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${siteConfig.forms.recipient}`;

const equipements = [
  "Extincteurs",
  "RIA",
  "BAES",
  "Poteaux incendie",
  "Bâches incendie",
  "Portes coupe-feu",
  "Désenfumage",
  "CATI",
  "Alarme Type 4 & PPMS",
  "Plusieurs équipements / ensemble du site",
];

export function DevisForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const field = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value ?? "";

    setStatus("sending");
    try {
      const name = `${field("prenom")} ${field("nom")}`.trim();
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          _subject: `[MISI] Demande de devis — ${name}`,
          Nom: name,
          "E-mail": field("email"),
          Téléphone: field("telephone") || "—",
          Société: field("societe") || "—",
          Sujet: field("prestation") || "Demande de devis",
          Message: field("besoin") || "(pas de description fournie)",
        }),
      });
      if (!res.ok) throw new Error("upstream");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  }

  const inputClass =
    "w-full rounded-xl border border-white/8 bg-surface-2 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-red/50 focus:bg-surface-3 focus:ring-2 focus:ring-red/10";

  return (
    <div className="rounded-[28px] border border-white/8 bg-surface p-10">
      <div className="mb-7 text-lg font-bold text-white">Demande de devis</div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wide text-white/60">Nom *</label>
            <input name="nom" required placeholder="Votre nom" className={inputClass} autoComplete="family-name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wide text-white/60">Prénom *</label>
            <input name="prenom" required placeholder="Votre prénom" className={inputClass} autoComplete="given-name" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold tracking-wide text-white/60">Société / Établissement</label>
            <input name="societe" placeholder="Nom de l'entreprise" className={inputClass} autoComplete="organization" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wide text-white/60">Téléphone *</label>
            <input name="telephone" required type="tel" placeholder="06 00 00 00 00" className={inputClass} autoComplete="tel" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold tracking-wide text-white/60">E-mail *</label>
            <input name="email" required type="email" placeholder="votre@email.fr" className={inputClass} autoComplete="email" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold tracking-wide text-white/60">Type de prestation</label>
            <select name="prestation" className={inputClass}>
              <option value="">Sélectionnez un équipement...</option>
              {equipements.map((eq) => (
                <option key={eq}>{eq}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold tracking-wide text-white/60">Décrivez votre besoin</label>
            <textarea
              name="besoin"
              placeholder="Type d'établissement, nombre d'équipements, localisation..."
              className={`${inputClass} min-h-[88px] resize-y`}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="mt-4.5 flex w-full items-center justify-center gap-2 rounded-xl bg-red py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark disabled:opacity-70"
        >
          {status === "idle" && "Envoyer ma demande"}
          {status === "sending" && "Envoi en cours..."}
          {status === "sent" && "✓ Demande envoyée !"}
          {status === "error" && "Réessayer l'envoi"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-center text-xs text-red" role="alert">
            L&apos;envoi a échoué. Réessayez ou écrivez-nous à direction@misifrance.com
          </p>
        )}
        <p className="mt-3 text-center text-xs text-white/35">* Champs obligatoires — Vos données ne sont pas revendues</p>
      </form>
    </div>
  );
}
