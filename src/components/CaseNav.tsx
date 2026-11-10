"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string };

/**
 * Contents panel that stays on screen the whole time you read a case study:
 * fixed on the left of wide screens, a scrolling strip under the top bar on
 * smaller ones. The section you are in is marked with [•].
 */
export default function CaseNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1)).filter((id) => id && id !== "top");
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = items[0]?.href ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = `#${id}`;
      }
      if (window.scrollY < 80) current = items[0]?.href ?? current;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  const go = (e: React.MouseEvent, href: string) => {
    if (href === "#top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="casenav">
      <nav aria-label="On this page" className="casenav-list">
        {items.map((it) => {
          const on = it.href === active;
          return (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => go(e, it.href)}
              aria-current={on ? "true" : undefined}
              className={`casenav-link ${on ? "!text-ink" : ""}`}
            >
              {it.label}
            </a>
          );
        })}
      </nav>
      <a href="#top" onClick={(e) => go(e, "#top")} className="casenav-top">
        <span aria-hidden="true">↑</span> Back to top
      </a>
    </div>
  );
}
