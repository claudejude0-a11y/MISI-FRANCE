/**
 * Génère les variantes WebP servies par `src/lib/image-loader.ts`.
 * À relancer après tout ajout ou changement d'image : `node scripts/optimize-images.mjs`
 * Les fichiers de `public/opt/` sont versionnés pour que le déploiement n'en dépende pas.
 */
import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "public/images";
const OUT = "public/opt";
// Doit rester aligné sur `deviceSizes` + `imageSizes` de next.config.ts.
const WIDTHS = [128, 256, 640, 1080, 1920];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])),
  );
  return files.flat();
}

await rm(OUT, { recursive: true, force: true });
const images = (await walk(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));
for (const file of images) {
  const rel = path.relative(SRC, file);
  await mkdir(path.join(OUT, path.dirname(rel)), { recursive: true });
  for (const width of WIDTHS) {
    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(path.join(OUT, `${rel}-${width}.webp`));
  }
}
console.log(`${images.length} images, ${WIDTHS.length} tailles`);
