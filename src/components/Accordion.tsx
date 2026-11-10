"use client";

import { useId, useState, type ReactNode } from "react";

export default function Accordion({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panel = useId();

  return (
    <div className="overflow-hidden rounded-[10px]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panel}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-full cursor-pointer items-center gap-3 bg-[#ebebeb] px-[13px] text-left text-[15px] leading-none font-normal tracking-[-0.01em] text-ink"
      >
        <span className="relative block h-3.5 w-3.5" aria-hidden="true">
          <span className="absolute top-1/2 left-0 h-0.5 w-3.5 -translate-y-1/2 rounded-[1px] bg-[#999]" />
          <span
            className={`absolute top-0 left-1/2 h-3.5 w-0.5 -translate-x-1/2 rounded-[1px] bg-[#999] transition-transform duration-200 ${
              open ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
        {title}
      </button>
      <div id={panel} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
