"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "./icons";

const LINKS = [
  { href: "/", label: "Work" },
  { href: "/ai-framework", label: "AI Framework" },
  { href: "/about", label: "About" },
  { href: "/sandbox", label: "Sandbox" },
];

/** Case-study routes and the name shown after "Work /" in the breadcrumb. */
const CASE_STUDIES: Record<string, string> = {
  "/stanford-medicine": "Stanford Medicine",
  "/emote": "Emote",
  "/micro-assignments": "Micro-Assignments",
  "/pov-lab": "Perspective Lab",
  "/aoc": "Ashoka Companion",
};

function isActive(href: string, path: string) {
  if (href === "/") return path === "/" || path in CASE_STUDIES;
  if (href === "/about") return path === "/about" || path === "/user-manual";
  return path === href;
}

/** Top bar: your type and colours; the current page is underlined, and case studies show a breadcrumb. */
export default function Nav() {
  const path = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const caseName = CASE_STUDIES[path];

  return (
    <header className="topbar fixed inset-x-0 top-0 z-50">
      <nav className="flex h-12 items-center justify-between px-5 md:px-8">
        {caseName ? (
          <p className="flex min-w-0 items-center gap-2 truncate">
            <Link href="/" className="topbar-link flex items-center gap-2" aria-label="Back to work">
              <span aria-hidden="true">←</span> Work
            </Link>
            <span className="text-faint">/</span>
            <span className="truncate text-ink">{caseName}</span>
          </p>
        ) : (
          <Link href="/" className="font-pixel text-base leading-[1.2] font-normal text-faint">
            TR.
          </Link>
        )}

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => {
            const active = isActive(l.href, path);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`topbar-link ${active ? "!text-ink" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="-m-2 p-2 text-faint md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="topbar-sheet flex flex-col gap-4 px-5 py-5 md:hidden">
          {LINKS.map((l) => {
            const active = isActive(l.href, path);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`topbar-link ${active ? "!text-ink" : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
