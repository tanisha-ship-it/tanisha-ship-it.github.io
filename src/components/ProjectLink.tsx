"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Link to a project. It marks the navigation as a "project" move so the page
 * transition lets the card image grow into the hero instead of wiping the page.
 */
export default function ProjectLink(props: ComponentProps<typeof Link>) {
  const { onClick, ...rest } = props;
  return (
    <Link
      {...rest}
      onClick={(e) => {
        document.documentElement.dataset.vt = "project";
        onClick?.(e);
      }}
    />
  );
}
