import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PrestationView } from "@/components/prestation/PrestationView";
import { getPrestation, prestations } from "@/lib/prestations-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";

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
  return <PrestationView p={p} />;
}
