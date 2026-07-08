import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ZoneView } from "@/components/zone/ZoneView";
import { getZone, zones } from "@/lib/zones-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";

export function generateStaticParams() {
  return zones.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const z = getZone(slug);
  if (!z) return {};
  return buildMetadata({
    title: z.titleTag,
    description: z.metaDescription,
    url: `/zones/${z.slug}`,
  });
}

export default async function ZonePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const z = getZone(slug);
  if (!z) notFound();
  return <ZoneView z={z} />;
}
