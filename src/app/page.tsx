import type { Metadata } from "next";

import { faqs } from "@/lib/faq-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import {
  getFaqStructuredData,
  getLocalBusinessStructuredData,
} from "@/utils/seo/structured-data";
import { HomeView } from "@/views/home";

export const metadata: Metadata = buildMetadata({
  title: "Sécurité incendie dans l'Yonne (89) & Île-de-France — MISI",
  description:
    "MISI, entreprise de sécurité incendie dans l'Yonne (89) et en Île-de-France : maintenance, installation et vérification de vos extincteurs, RIA, BAES, désenfumage, alarme et PPMS. Devis gratuit sous 24 h.",
  url: "/",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessStructuredData()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqStructuredData(faqs)),
        }}
      />
      <HomeView />
    </>
  );
}
