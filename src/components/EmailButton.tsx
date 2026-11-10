"use client";

import { useState } from "react";
import { CopyIcon } from "./icons";

const EMAIL = "raghavtanisha67@gmail.com";

export default function EmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${EMAIL}`}
      className="flex cursor-pointer items-center gap-1 text-base leading-none text-ink sm:text-xl"
    >
      <CopyIcon className="h-4 w-4" />
      <span className="relative">
        <span className={`transition-opacity duration-200 ${copied ? "opacity-0" : "opacity-100"}`}>
          {EMAIL}
        </span>
        <span
          aria-live="polite"
          className={`absolute inset-0 text-center transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          {copied ? "Copied!" : ""}
        </span>
      </span>
    </button>
  );
}
