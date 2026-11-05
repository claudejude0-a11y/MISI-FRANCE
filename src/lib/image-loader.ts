/** Export statique : pas d'optimiseur serveur, next/image pointe vers les WebP pré-générés. */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (!src.startsWith("/images/")) return src;
  return `/opt/${src.slice("/images/".length)}-${width}.webp`;
}
