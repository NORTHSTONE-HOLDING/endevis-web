import Link from "next/link";
import { Mail } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localeLabels, locales } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { company, products } from "@/lib/company";
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

  const serviceLinks = [
    dict.services.items.artificialIntelligence.title,
    dict.services.items.businessAutomation.title,
    dict.services.items.cloudSolutions.title,
    dict.services.items.customSoftware.title,
  ];

  return (
    <footer className="relative border-t border-card-border bg-[#0c0e10] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,163,78,0.08),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo className="[&>span:last-child]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            {dict.footer.tagline}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-gold/40 hover:text-gold"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={company.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-gold/40 hover:text-gold"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={company.social.email}
              aria-label="Email"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-gold/40 hover:text-gold"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">
            {dict.footer.products}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {products.map((product) => (
              <li key={product.id}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold tracking-wide text-white">
            {dict.footer.services}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a
                  href="#services"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">
            {dict.footer.languages}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {locales.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  hrefLang={item}
                  className={`text-sm transition-colors hover:text-gold ${
                    item === locale ? "text-gold" : "text-white/60"
                  }`}
                >
                  {localeLabels[item]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              {dict.footer.contact}
            </h3>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 block text-sm text-white/60 transition-colors hover:text-gold"
            >
              {company.email}
            </a>
            <a
              href={company.phoneHref}
              className="mt-1 block text-sm text-white/60 transition-colors hover:text-gold"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {company.name}. {dict.footer.rights}
          </p>
          <p className="text-xs">
            {company.registration.registeredOffice}{" "}
            {company.registration.registeredOfficeFlag} · KRS{" "}
            {company.registration.krs}
          </p>
        </div>
      </div>
    </footer>
  );
}
