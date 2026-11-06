import type { Metadata } from "next";

import { faqs } from "@/lib/faq-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import {
  getFaqStructuredData,
  getLocalBusinessStructuredData,
} from "@/utils/seo/structured-data";
import { HomeView } from "@/views/home";

export const metadata: Metadata = buildMetadata({
  title: "Entreprise de sécurité incendie en France : Paris, Île-de-France, Yonne | MISI",
  description:
    "Entreprise de sécurité incendie : maintenance et vérification d'extincteurs, RIA, BAES, désenfumage. Paris, Île-de-France, Yonne et partout en France. Devis gratuit.",
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
