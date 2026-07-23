import Link from "next/link";
import { Mail } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localeLabels, locales } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { company } from "@/lib/company";
import { Logo } from "@/components/ui/Logo";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "#products", label: dict.nav.products },
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#technology", label: dict.nav.technology },
    { href: "#contact", label: dict.nav.contact },
  ];

  const productLinks = [
    { href: "#products", label: "PaperFlow" },
    { href: "#products", label: "EventFlow" },
    { href: "#products", label: "FeedFlow" },
  ];

  return (
    <footer className="relative border-t border-card-border bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {dict.footer.tagline}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-card-border text-muted transition-colors hover:border-gold/40 hover:text-gold"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={company.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-card-border text-muted transition-colors hover:border-gold/40 hover:text-gold"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={company.social.email}
              aria-label="Email"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-card-border text-muted transition-colors hover:border-gold/40 hover:text-gold"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            {dict.footer.products}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            {dict.footer.languages}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {locales.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  hrefLang={item}
                  className={`text-sm transition-colors hover:text-gold ${
                    item === locale ? "text-gold" : "text-muted"
                  }`}
                >
                  {localeLabels[item]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              {dict.footer.contact}
            </h3>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 block text-sm text-muted transition-colors hover:text-gold"
            >
              {company.email}
            </a>
            <a
              href={company.phoneHref}
              className="mt-1 block text-sm text-muted transition-colors hover:text-gold"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-card-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {company.name}. {dict.footer.rights}
          </p>
          <p className="text-xs">{company.registration.registeredOffice}</p>
        </div>
      </div>
    </footer>
  );
}
