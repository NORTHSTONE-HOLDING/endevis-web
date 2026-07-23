"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  localeFlags,
  localeLabels,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const hrefFor = (next: Locale) => {
    const segments = pathname.split("/");
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  };

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring inline-flex h-10 items-center gap-2 rounded-xl border border-card-border bg-glass px-3 text-sm font-medium text-foreground transition-colors hover:border-gold/40"
      >
        <Globe className="h-4 w-4 text-gold" aria-hidden />
        <span className="uppercase tracking-wide">{locale}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-muted transition-transform",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={label}
          className="glass absolute right-0 z-50 mt-2 min-w-[12rem] overflow-hidden rounded-2xl p-1.5"
        >
          {locales.map((item) => (
            <li key={item} role="option" aria-selected={item === locale}>
              <Link
                href={hrefFor(item)}
                hrefLang={item}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  item === locale
                    ? "bg-gold/15 text-foreground"
                    : "text-muted hover:bg-muted-bg hover:text-foreground",
                )}
              >
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden>{localeFlags[item]}</span>
                  {localeLabels[item]}
                </span>
                {item === locale ? (
                  <Check className="h-4 w-4 text-gold" aria-hidden />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
