import manifest from "./images.json";

const images = manifest as Record<string, { w: number; h: number; sm?: number }>;

export function image(id: string) {
  const size = images[id];
  if (!size) throw new Error(`Unknown image "${id}" — run scripts/optimize-images.mjs`);
  const src = `/images/${id}.webp`;
  return {
    src,
    width: size.w,
    height: size.h,
    /** Smaller copy for thumbnails and narrow screens, when the original is large enough to need one. */
    small: size.sm ? { src: `/images/${id}-sm.webp`, width: size.sm } : undefined,
  };
}

export function video(id: string) {
  return `/videos/${id}.mp4`;
}
