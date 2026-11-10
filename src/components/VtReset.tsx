"use client";

import { useEffect } from "react";

/** Clears the "project" transition mode once the new page has mounted and settled. */
export default function VtReset() {
  useEffect(() => {
    const t = setTimeout(() => {
      delete document.documentElement.dataset.vt;
    }, 1200);
    return () => clearTimeout(t);
  }, []);
  return null;
}
