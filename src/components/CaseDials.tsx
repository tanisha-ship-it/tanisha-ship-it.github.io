"use client";

import { useDialKitController, type DialConfig, type DialKitController } from "dialkit";
import { useEffect, useRef } from "react";

const CONFIG = {
  presets: {
    _collapsed: false,
    rachel: { type: "action", label: "Rachel Chen feel" },
    emmi: { type: "action", label: "Emmi Wu feel (current)" },
    old: { type: "action", label: "My old look" },
  },
  type: {
    _collapsed: false,
    bodySize: [16, 13, 19, 0.5],
    bodyWeight: { type: "select", options: ["300", "400", "500"], default: "400" },
    bodyTracking: [0, -0.01, 0.08, 0.005],
    lineHeight: [25, 18, 34, 0.5],
    bodyColor: { type: "color", default: "#666462" },
    inkColor: { type: "color", default: "#333231" },
    headingSize: [18, 14, 40, 1],
    headingFont: { type: "select", options: ["sans", "serif"], default: "sans" },
    headingWeight: { type: "select", options: ["300", "400", "500", "600"], default: "500" },
    headingTracking: [0, -0.05, 0.03, 0.005],
    subheadSize: [18, 14, 26, 1],
    titleSize: [24, 18, 64, 1],
    eyebrowLook: { type: "select", options: ["accent", "neutral"], default: "accent" },
    eyebrowCaps: true as boolean,
  },
  space: {
    _collapsed: true,
    columnWidth: [830, 520, 900, 2],
    sectionGap: [72, 40, 180, 4],
    groupGap: [48, 24, 120, 4],
    textGap: [12, 4, 28, 1],
    mediaGap: [16, 16, 96, 2],
  },
  surfaces: {
    _collapsed: true,
    pageBackground: { type: "color", default: "#fffdfa" },
    media: { type: "select", options: ["panels", "flush"], default: "panels" },
    panelFill: { type: "color", default: "#f0ece6" },
    panelPadding: [24, 0, 48, 2],
    cornerRadius: [6, 0, 28, 1],
  },
} satisfies DialConfig;

/**
 * Rachel Chen's case-study pages, measured in the browser (rachelchen.tech/projects/figma):
 * 688px column, 15px body at 400 weight with 22.5px lines in slate at 55% opacity,
 * 28px serif headings, 18px subheads, 36px title, flush media with square corners,
 * tight text (about 4px between paragraphs) and a lot of air around media (60 to 100px).
 */
const RACHEL = {
  type: {
    bodySize: 15,
    bodyWeight: "400",
    bodyTracking: 0,
    lineHeight: 22.5,
    bodyColor: "#8e969e",
    inkColor: "#32404f",
    headingSize: 28,
    headingFont: "serif",
    headingWeight: "400",
    headingTracking: -0.02,
    subheadSize: 18,
    titleSize: 36,
    eyebrowLook: "neutral",
    eyebrowCaps: false,
  },
  space: { columnWidth: 688, sectionGap: 72, groupGap: 48, textGap: 8, mediaGap: 64 },
  surfaces: { pageBackground: "#ffffff", media: "flush", panelFill: "#fafafa", panelPadding: 0, cornerRadius: 0 },
};

/**
 * Emmi Wu's case-study pages, measured in the browser (emmiwu.com/figma):
 * 830px column on a warm off-white page, 14px body at 400 weight in warm grey, 16px headings at
 * 500 weight (barely larger than the body, set apart by weight), 18px subheads, a small 18px title,
 * small capitalised labels, warm beige frames around media with square corners, and tight spacing:
 * about 16px between a heading, its text and its media, with larger breaks between sections.
 */
const EMMI = {
  type: {
    bodySize: 16,
    bodyWeight: "400",
    bodyTracking: 0,
    lineHeight: 25,
    bodyColor: "#666462",
    inkColor: "#333231",
    headingSize: 18,
    headingFont: "sans",
    headingWeight: "500",
    headingTracking: 0,
    subheadSize: 18,
    titleSize: 24,
    eyebrowLook: "accent",
    eyebrowCaps: true,
  },
  space: { columnWidth: 830, sectionGap: 72, groupGap: 48, textGap: 12, mediaGap: 16 },
  surfaces: { pageBackground: "#fffdfa", media: "panels", panelFill: "#f0ece6", panelPadding: 24, cornerRadius: 6 },
};

/** The look before the Emmi Wu feel became the default. */
const OLD = {
  type: {
    bodySize: 16,
    bodyWeight: "300",
    bodyTracking: 0.03,
    lineHeight: 26,
    bodyColor: "#666666",
    inkColor: "#3d3b3a",
    headingSize: 30,
    headingFont: "sans",
    headingWeight: "400",
    headingTracking: -0.03,
    subheadSize: 20,
    titleSize: 44,
    eyebrowLook: "accent",
    eyebrowCaps: false,
  },
  space: { columnWidth: 720, sectionGap: 96, groupGap: 64, textGap: 16, mediaGap: 32 },
  surfaces: { pageBackground: "#ffffff", media: "panels", panelFill: "#fafafa", panelPadding: 24, cornerRadius: 12 },
};

/** Live design controls for the case-study pages (DialKit panel, top right). */
export default function CaseDials() {
  const ref = useRef<DialKitController<typeof CONFIG> | null>(null);
  const dial = useDialKitController("Case study feel", CONFIG, {
    id: "case-feel-v4",
    persist: true,
    onAction: (path) => {
      if (path.endsWith("rachel")) ref.current?.setValues(RACHEL);
      if (path.endsWith("emmi")) ref.current?.setValues(EMMI);
      if (path.endsWith("old")) ref.current?.setValues(OLD);
      if (path.endsWith("reset")) ref.current?.resetValues();
    },
  });
  ref.current = dial;
  const d = dial.values;

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".cs");
    const root = document.documentElement;
    if (!article) return;

    const flush = d.surfaces.media === "flush";
    const set = (el: HTMLElement, name: string, value: string) => el.style.setProperty(name, value);

    // Type
    set(article, "--t-body-size", `${d.type.bodySize}px`);
    set(article, "--t-body-weight", d.type.bodyWeight);
    set(article, "--t-body-track", `${d.type.bodyTracking}em`);
    set(article, "--t-body-lh", `${d.type.lineHeight}px`);
    set(root, "--body", d.type.bodyColor);
    set(root, "--ink", d.type.inkColor);
    set(article, "--t-h-size", `${d.type.headingSize}px`);
    set(article, "--t-h-font", d.type.headingFont === "serif" ? "var(--font-serif)" : "inherit");
    set(article, "--t-h-weight", d.type.headingFont === "serif" ? "300" : d.type.headingWeight);
    set(article, "--t-h-track", `${d.type.headingTracking}em`);
    set(article, "--t-sub-size", `${d.type.subheadSize}px`);
    set(article, "--t-display-size", `${d.type.titleSize}px`);
    set(article, "--eyebrow-color", d.type.eyebrowLook === "neutral" ? "var(--faint)" : "var(--accent)");
    set(article, "--eyebrow-case", d.type.eyebrowCaps ? "uppercase" : "none");
    set(article, "--eyebrow-track", d.type.eyebrowCaps ? "0.08em" : "0.03em");
    set(article, "--eyebrow-size", d.type.eyebrowCaps ? "12px" : "14px");

    // Space
    set(article, "--cs-col", `${d.space.columnWidth}px`);
    set(article, "--cs-gap-section", `${d.space.sectionGap}px`);
    set(article, "--cs-gap-group", `${d.space.groupGap}px`);
    set(article, "--cs-gap-text", `${d.space.textGap}px`);
    set(article, "--cs-gap-media", `${d.space.mediaGap}px`);

    // Surfaces
    set(root, "--page-bg", d.surfaces.pageBackground);
    set(article, "--surface", d.surfaces.panelFill);
    set(article, "--frame-bg", flush ? "transparent" : d.surfaces.panelFill);
    set(article, "--frame-pad", flush ? "0px" : `${d.surfaces.panelPadding}px`);
    set(article, "--cs-pad", `${d.surfaces.panelPadding}px`);
    set(article, "--cs-radius", `${d.surfaces.cornerRadius}px`);
    set(article, "--cs-img-radius", `${Math.round(d.surfaces.cornerRadius * 0.66)}px`);
    document.body.style.background = d.surfaces.pageBackground;

    return () => {
      for (const name of [
        "--t-body-size", "--t-body-weight", "--t-body-track", "--t-body-lh", "--t-h-size", "--t-h-font",
        "--t-h-weight", "--t-h-track", "--t-sub-size", "--t-display-size", "--eyebrow-color", "--eyebrow-case",
        "--eyebrow-track", "--eyebrow-size", "--cs-col", "--cs-gap-section", "--cs-gap-group",
        "--cs-gap-text", "--cs-gap-media", "--surface", "--frame-bg", "--frame-pad", "--cs-pad",
        "--cs-radius", "--cs-img-radius",
      ]) {
        article.style.removeProperty(name);
      }
      for (const name of ["--body", "--ink", "--page-bg"]) root.style.removeProperty(name);
      document.body.style.removeProperty("background");
    };
  }, [d]);

  return null;
}
