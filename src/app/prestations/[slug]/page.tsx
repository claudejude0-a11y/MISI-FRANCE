import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PrestationView } from "@/components/prestation/PrestationView";
import { getPrestation, prestations } from "@/lib/prestations-data";

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
  return { title: p.titleTag, description: p.intro };
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
