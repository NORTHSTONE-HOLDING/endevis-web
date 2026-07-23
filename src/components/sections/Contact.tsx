"use client";

import { Mail, MapPin, Phone, User } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { company } from "@/lib/company";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact({ dict }: { dict: Dictionary }) {
  const details = [
    {
      icon: User,
      label: dict.contact.managingDirector,
      value: company.managingDirector,
    },
    {
      icon: MapPin,
      label: dict.contact.address,
      value: `${company.address.street}\n${company.address.postalCode} ${company.address.city}\n${company.address.country}`,
    },
    {
      icon: Phone,
      label: dict.contact.phone,
      value: company.phone,
      href: company.phoneHref,
    },
    {
      icon: Mail,
      label: dict.contact.email,
      value: company.email,
      href: `mailto:${company.email}`,
    },
  ];

  const registry = [
    { label: dict.contact.companyName, value: company.name },
    {
      label: dict.contact.registeredOffice,
      value: company.registration.registeredOffice,
    },
    { label: "NIP", value: company.registration.nip },
    { label: "KRS", value: company.registration.krs },
    { label: "REGON", value: company.registration.regon },
    { label: "VAT EU", value: company.registration.vatEu },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={dict.contact.eyebrow}
            title={dict.contact.title}
            subtitle={dict.contact.subtitle}
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal variant="left">
            <GlassCard padding="lg" className="h-full">
              <div className="flex items-center gap-4 border-b border-card-border pb-6">
                <Logo showWordmark={false} size="lg" />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{company.tagline}</p>
                </div>
              </div>

              <dl className="mt-8 space-y-6">
                {details.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {item.label}
                        </dt>
                        <dd className="mt-1 whitespace-pre-line text-sm font-medium leading-relaxed text-foreground sm:text-base">
                          {item.value}
                        </dd>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-2xl transition-colors hover:bg-gold/5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </dl>

              <div className="mt-10">
                <Button
                  href={`mailto:${company.email}`}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {dict.contact.sendMessage}
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal variant="right" delay={0.12}>
            <GlassCard padding="lg" className="h-full">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                {dict.contact.getInTouch}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {company.registration.registeredOffice}
              </p>

              <div className="mt-8 space-y-4">
                {registry.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 rounded-2xl border border-card-border bg-background/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {row.label}
                    </span>
                    <span className="text-sm font-medium text-foreground sm:text-right">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
