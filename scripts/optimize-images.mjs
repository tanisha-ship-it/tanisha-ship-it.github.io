// Converts the full-resolution originals in assets-original/images into
// web-sized WebP files in public/images (plus a small "-sm" copy for phones and
// thumbnails) and records their dimensions in src/lib/images.json, which is
// used for width/height attributes and srcset.
//
//   node scripts/optimize-images.mjs
import { readdir, mkdir, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets-original/images";
const OUT = "public/images";
const MAX_WIDTH = 2400;
const SMALL_WIDTH = 800;

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const file of (await readdir(SRC)).sort()) {
  const { name, ext } = path.parse(file);
  const input = path.join(SRC, file);

  if (ext === ".svg") {
    await copyFile(input, path.join(OUT, file));
    continue;
  }

  const source = sharp(input, { limitInputPixels: false }).rotate();
  const encode = (width) =>
    source
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5 })
      .toBuffer({ resolveWithObject: true });

  const full = await encode(MAX_WIDTH);
  await writeFile(path.join(OUT, `${name}.webp`), full.data);
  manifest[name] = { w: full.info.width, h: full.info.height };

  if (full.info.width > SMALL_WIDTH) {
    const small = await encode(SMALL_WIDTH);
    await writeFile(path.join(OUT, `${name}-sm.webp`), small.data);
    manifest[name].sm = small.info.width;
  }
}

await writeFile("src/lib/images.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`Optimized ${Object.keys(manifest).length} images`);
