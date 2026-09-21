"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

/**
 * Static export — no server, so the form posts straight to FormSubmit's
 * AJAX relay instead of a same-origin `/api/contact` route.
 *
 * Le destinataire vit dans `siteConfig.forms.recipient` (source unique, partagée
 * avec DevisForm) — ne pas le réécrire en dur ici.
 */
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${siteConfig.forms.recipient}`;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const field = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value ?? "";

    // Honeypot — un bot qui remplit tous les champs remplira aussi celui-ci,
    // masqué aux humains. On simule alors un envoi réussi sans rien transmettre.
    if (field("website")) {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("sending");
    try {
      const name = `${field("firstname")} ${field("lastname")}`.trim();
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          _subject: `[MISI] Contact — ${name}`,
          Nom: name,
          "E-mail": field("email"),
          Téléphone: field("phone") || "—",
          Société: field("company") || "—",
          Sujet: field("subject") || "Message via formulaire de contact",
          Message: field("message"),
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
    "w-full rounded-xl border border-white/8 bg-surface-2 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-red/50 focus:bg-surface-3 focus:ring-2 focus:ring-red/10";

  return (
    <div className="rounded-[28px] border border-white/8 bg-surface p-10">
      <div className="mb-7 text-lg font-bold text-white">Envoyer un message</div>
      <form onSubmit={handleSubmit}>
        {/* Honeypot anti-spam — masqué aux humains et aux lecteurs d'écran */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Ne pas remplir ce champ</label>
          <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-lastname" className="text-xs font-semibold tracking-wide text-white/60">Nom *</label>
            <input id="contact-lastname" name="lastname" required placeholder="Votre nom" className={inputClass} autoComplete="family-name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-firstname" className="text-xs font-semibold tracking-wide text-white/60">Prénom *</label>
            <input id="contact-firstname" name="firstname" required placeholder="Votre prénom" className={inputClass} autoComplete="given-name" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="contact-company" className="text-xs font-semibold tracking-wide text-white/60">Société / Établissement</label>
            <input id="contact-company" name="company" placeholder="Nom de l'entreprise ou établissement" className={inputClass} autoComplete="organization" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-xs font-semibold tracking-wide text-white/60">E-mail *</label>
            <input id="contact-email" name="email" required type="email" placeholder="votre@email.fr" className={inputClass} autoComplete="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-phone" className="text-xs font-semibold tracking-wide text-white/60">Téléphone</label>
            <input id="contact-phone" name="phone" type="tel" placeholder="06 00 00 00 00" className={inputClass} autoComplete="tel" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="contact-subject" className="text-xs font-semibold tracking-wide text-white/60">Sujet</label>
            <select id="contact-subject" name="subject" className={inputClass}>
              <option value="">Sélectionnez un sujet…</option>
              <option>Demande de devis</option>
              <option>Renseignements sur une prestation</option>
              <option>Intervention urgente</option>
              <option>Contrat de maintenance</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="contact-message" className="text-xs font-semibold tracking-wide text-white/60">Votre message *</label>
            <textarea
              id="contact-message"
              name="message"
              required
              placeholder="Décrivez votre besoin, votre type d'établissement, votre localisation…"
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
          {status === "sending" && "Envoi…"}
          {status === "sent" && "✓ Message envoyé !"}
          {status === "error" && "Réessayer l'envoi"}
        </button>
        {status === "sent" && (
          <p className="mt-3 text-center text-xs text-red" role="status">
            Merci, votre message a bien été envoyé. Nous vous répondons sous 24 h ouvrées.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-center text-xs text-red" role="alert">
            L&apos;envoi a échoué. Réessayez ou écrivez-nous à direction@misifrance.com
          </p>
        )}
        <p className="mt-3 text-center text-xs text-white/60">
          * Champs obligatoires — Réponse sous 24 h ouvrées. En envoyant ce
          formulaire, vous acceptez que vos informations soient utilisées pour
          traiter votre demande, conformément à notre{" "}
          <a href="/politique-de-confidentialite" className="text-white/50 underline underline-offset-2 hover:text-white">
            politique de confidentialité
          </a>
          .
        </p>
      </form>
    </div>
  );
}
