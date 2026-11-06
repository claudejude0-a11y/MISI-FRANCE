import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PrestationView } from "@/components/prestation/PrestationView";
import { getPrestation, prestations } from "@/lib/prestations-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import { getBreadcrumbStructuredData, getServiceStructuredData } from "@/utils/seo/structured-data";

export function generateStaticParams() {
  return prestations.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPrestation(slug);
  if (!p) return {};
  // Passe par le helper SEO pour émettre le canonical par page (sans lui, le
  // starter renvoyait toujours "/") — corrige aussi les prestations existantes.
  return buildMetadata({
    title: p.titleTag,
    description: p.intro,
    url: `/prestations/${p.slug}`,
  });
}

export default async function PrestationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPrestation(slug);
  if (!p) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceStructuredData(p.h1, p.intro, `/prestations/${p.slug}`)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbStructuredData([{ name: p.breadcrumbLabel, path: `/prestations/${p.slug}` }])),
        }}
      />
      <PrestationView p={p} />
    </>
  );
}
