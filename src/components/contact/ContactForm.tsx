"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const field = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value ?? "";

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: `${field("firstname")} ${field("lastname")}`.trim(),
          email: field("email"),
          phone: field("phone"),
          company: field("company"),
          subject: field("subject") || "Message via formulaire de contact",
          message: field("message"),
          source: "contact",
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
      <div className="mb-7 text-lg font-bold text-white">Envoyer un message</div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wide text-white/60">Nom *</label>
            <input name="lastname" required placeholder="Votre nom" className={inputClass} autoComplete="family-name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wide text-white/60">Prénom *</label>
            <input name="firstname" required placeholder="Votre prénom" className={inputClass} autoComplete="given-name" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold tracking-wide text-white/60">Société / Établissement</label>
            <input name="company" placeholder="Nom de l'entreprise ou établissement" className={inputClass} autoComplete="organization" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wide text-white/60">E-mail *</label>
            <input name="email" required type="email" placeholder="votre@email.fr" className={inputClass} autoComplete="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wide text-white/60">Téléphone</label>
            <input name="phone" type="tel" placeholder="06 00 00 00 00" className={inputClass} autoComplete="tel" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold tracking-wide text-white/60">Sujet</label>
            <select name="subject" className={inputClass}>
              <option value="">Sélectionnez un sujet...</option>
              <option>Demande de devis</option>
              <option>Renseignements sur une prestation</option>
              <option>Intervention urgente</option>
              <option>Contrat de maintenance</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold tracking-wide text-white/60">Votre message *</label>
            <textarea
              name="message"
              required
              placeholder="Décrivez votre besoin, votre type d'établissement, votre localisation..."
              className={`${inputClass} min-h-[120px] resize-y`}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="mt-4.5 flex w-full items-center justify-center gap-2 rounded-xl bg-red py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark disabled:opacity-70"
        >
          {status === "idle" && "Envoyer le message"}
          {status === "sending" && "Envoi..."}
          {status === "sent" && "✓ Message envoyé !"}
          {status === "error" && "Réessayer l'envoi"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-center text-xs text-red" role="alert">
            L&apos;envoi a échoué. Réessayez ou écrivez-nous à direction@misifrance.com
          </p>
        )}
        <p className="mt-3 text-center text-xs text-white/35">* Champs obligatoires — Réponse sous 24h ouvrées</p>
      </form>
    </div>
  );
}
