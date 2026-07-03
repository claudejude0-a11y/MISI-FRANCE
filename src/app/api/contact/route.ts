import { z } from "zod";

import { getServerEnv } from "@/env";
import { ApiError, handle } from "@/lib/api";

/**
 * Lead submission endpoint — receives the devis / contact forms and forwards
 * them by e-mail to the MISI inbox.
 *
 * Delivery goes through FormSubmit (https://formsubmit.co) — a keyless
 * form-to-email relay. First submission triggers a one-time activation e-mail
 * to the inbox; every submission after that is delivered directly.
 * `CONTACT_ENDPOINT` (env) overrides the relay with a custom webhook/CRM.
 */

const CONTACT_EMAIL = "direction@misifrance.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  message: z.string().min(1).max(2000),
  phone: z.string().max(30).optional().default(""),
  company: z.string().max(120).optional().default(""),
  subject: z.string().max(120).optional().default(""),
  source: z.enum(["devis", "contact"]).optional().default("contact"),
});

export const POST = handle(async (req) => {
  const input = contactSchema.parse(await req.json());

  const { CONTACT_ENDPOINT } = getServerEnv();
  const endpoint = CONTACT_ENDPOINT || FORMSUBMIT_URL;

  const payload = {
    _subject:
      input.source === "devis"
        ? `[MISI] Demande de devis — ${input.name}`
        : `[MISI] Contact — ${input.name}`,
    Nom: input.name,
    "E-mail": input.email,
    Téléphone: input.phone || "—",
    Société: input.company || "—",
    Sujet: input.subject || "—",
    Message: input.message,
  };

  const upstream = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!upstream.ok) {
    console.error("[api/contact] upstream error:", upstream.status, await upstream.text().catch(() => ""));
    throw new ApiError(502, "upstream_error", "L'envoi du message a échoué. Réessayez ou écrivez-nous directement.");
  }

  return { received: true };
});
