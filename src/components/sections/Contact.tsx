"use client";

import { Mail, MapPin, Phone, User } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { company } from "@/lib/company";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconBadge } from "@/components/ui/IconBadge";
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
            <GlassCard padding="lg" gradientBorder className="h-full">
              <div className="flex items-center gap-4 border-b border-card-border pb-6">
                <Logo showWordmark={false} size="lg" />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{company.tagline}</p>
                </div>
              </div>

              <dl className="mt-8 space-y-5">
                {details.map((item) => {
                  const content = (
                    <div className="flex gap-4">
                      <IconBadge icon={item.icon} size="sm" />
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
            <GlassCard padding="none" gradientBorder className="h-full overflow-hidden">
              <div className="border-b border-card-border px-6 py-5 md:px-8">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {dict.contact.mapLabel}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {company.address.street}, {company.address.postalCode}{" "}
                  {company.address.city}
                </p>
              </div>
              <div className="relative min-h-[320px] bg-anthracite-soft md:min-h-[420px]">
                <iframe
                  title={dict.contact.mapLabel}
                  src={company.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0 opacity-90 grayscale-[0.25] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                />
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
