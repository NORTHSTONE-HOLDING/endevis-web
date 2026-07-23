"use client";

import {
  ArrowUpRight,
  Calendar,
  Database,
  FileText,
  Plus,
  Store,
  Workflow,
} from "lucide-react";
import type { ComponentType } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import {
  futureProductNames,
  accentTokens,
  products as productMeta,
  type ProductIconName,
} from "@/lib/ecosystem";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

type IconComponent = ComponentType<{ className?: string }>;

const icons: Record<ProductIconName, IconComponent> = {
  Store,
  FileText,
  Database,
  Calendar,
  Plus,
};

function StoreFlowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 9.5 5.2 5.8A2 2 0 0 1 7.1 4.5h9.8a2 2 0 0 1 1.9 1.3L20 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 9.5h16v8.2A2.3 2.3 0 0 1 17.7 20H6.3A2.3 2.3 0 0 1 4 17.7V9.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9 13.2c1.2 1.4 2.4 2.1 3 2.1s1.8-.7 3-2.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function Products({ dict }: { dict: Dictionary }) {
  const items = productMeta.map((meta) => ({
    ...meta,
    ...dict.products.items[meta.id],
    Icon: (meta.id === "flowstore"
      ? StoreFlowIcon
      : icons[meta.icon]) as IconComponent,
  }));

  return (
    <section id="products" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={dict.products.eyebrow}
            title={dict.products.title}
            subtitle={dict.products.subtitle}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const token = accentTokens[item.accent];
            const isMarketplace = item.role === "marketplace";
            return (
              <Reveal key={item.id} delay={index * 0.08} variant="scale">
                <TiltCard
                  href={item.href}
                  accent={item.accent}
                  className={`min-h-[360px] ${
                    isMarketplace ? "ring-1 ring-[rgba(229,72,77,0.25)]" : ""
                  }`}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <IconBadge
                        icon={item.Icon}
                        size="lg"
                        accent={item.accent}
                      />
                      {isMarketplace ? (
                        <span
                          className="rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]"
                          style={{
                            color: token.hex,
                            background: `rgba(${token.rgb}, 0.12)`,
                            border: `1px solid rgba(${token.rgb}, 0.28)`,
                          }}
                        >
                          {dict.products.marketplaceBadge}
                        </span>
                      ) : null}
                    </div>

                    <p
                      className="mt-6 text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: token.hex }}
                    >
                      {item.tagline}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{item.domain}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-foreground/85"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{
                              background: token.hex,
                              boxShadow: `0 0 8px rgba(${token.rgb}, 0.7)`,
                            }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span
                      className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
                      style={{ color: token.hex }}
                    >
                      {dict.products.visit}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.25} className="mt-6">
          <GlassCard className="border-dashed border-gold/25 bg-gold/[0.03] py-10 text-center md:py-12">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-gold/40 text-gold">
              <Plus className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">
              {dict.products.comingSoon}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {dict.products.comingSoonDesc}
            </p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {futureProductNames.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-card-border bg-background/40 px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
              <Workflow className="h-3.5 w-3.5 text-gold" />
              {dict.ecosystem.futureTitle}
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
