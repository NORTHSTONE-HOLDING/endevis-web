"use client";

import Link from "next/link";
import {
  Building2,
  Cpu,
  Home,
  Layers,
  Mail,
  Menu,
  Network,
  Package,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { href: "#home", label: dict.nav.home, icon: Home },
    { href: "#ecosystem", label: dict.nav.ecosystem, icon: Network },
    { href: "#products", label: dict.nav.products, icon: Package },
    { href: "#about", label: dict.nav.about, icon: Building2 },
    { href: "#services", label: dict.nav.services, icon: Layers },
    { href: "#technology", label: dict.nav.technology, icon: Cpu },
    { href: "#contact", label: dict.nav.contact, icon: Mail },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        scrolled || open
          ? "glass-nav glass-nav-scrolled"
          : "bg-transparent",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-400 sm:px-8",
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20",
        )}
        aria-label="Primary"
      >
        <Link
          href={`/${locale}#home`}
          className="focus-ring rounded-xl"
          onClick={() => setOpen(false)}
        >
          <Logo size="sm" />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-active={active === link.href}
                  className={cn(
                    "nav-link focus-ring group inline-flex items-center gap-1 rounded-xl px-2 py-2 text-[0.8rem] font-medium text-muted transition-colors hover:bg-gold/5 hover:text-foreground xl:gap-1.5 xl:px-2.5 xl:text-sm",
                    active === link.href && "text-foreground",
                  )}
                >
                  <Icon className="h-3.5 w-3.5 text-gold/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold" />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle label={dict.nav.switchTheme} />
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-glass lg:hidden"
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass-nav border-t border-card-border lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-muted-bg"
                    >
                      <Icon className="h-4 w-4 text-gold" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2 flex items-center gap-2 px-1 pt-2">
                <ThemeToggle label={dict.nav.switchTheme} />
                <LanguageSwitcher locale={locale} label={dict.nav.language} />
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
