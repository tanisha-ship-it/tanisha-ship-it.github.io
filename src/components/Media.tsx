"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { image, video } from "@/lib/media";

export function Img({
  id,
  alt = "",
  className = "",
  style,
  eager = false,
  sizes = "(min-width: 1100px) 718px, 100vw",
  thumb = false,
}: {
  id: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  /** How wide the image is displayed, so the browser can pick the right file. */
  sizes?: string;
  /** Always use the small copy (for images shown at thumbnail size). */
  thumb?: boolean;
}) {
  const { src, width, height, small } = image(id);
  const responsive = small && !thumb;
  const ref = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);

  // Cached images can finish loading before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete) setReady(true);
  }, []);

  return (
    <img
      ref={ref}
      data-ready={ready}
      onLoad={() => setReady(true)}
      src={thumb && small ? small.src : src}
      srcSet={responsive ? `${small.src} ${small.width}w, ${src} ${width}w` : undefined}
      sizes={responsive ? sizes : undefined}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={style}
    />
  );
}

/** Silent looping clip that only plays while it is on screen. */
export function Vid({
  id,
  className = "",
  style,
}: {
  id: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.readyState >= 2) setReady(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      data-ready={ready}
      onLoadedData={() => setReady(true)}
      src={video(id)}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      style={style}
    />
  );
}
