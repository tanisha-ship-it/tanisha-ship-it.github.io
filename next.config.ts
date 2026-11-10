import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to `out/`, which can be
// served from any static host. Images are pre-optimized by
// scripts/optimize-images.mjs, so the Next image optimizer is not used.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
