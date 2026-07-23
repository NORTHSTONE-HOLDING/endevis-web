"use client";

import { ArrowUpRight, Calendar, FileText, Plus, Rss } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { products as productMeta } from "@/lib/company";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const icons = {
  paperflow: FileText,
  eventflow: Calendar,
  feedflow: Rss,
} as const;

export function Products({ dict }: { dict: Dictionary }) {
  const items = productMeta.map((meta) => ({
    ...meta,
    ...dict.products.items[meta.id],
    Icon: icons[meta.id],
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

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1} variant="scale">
              <TiltCard href={item.href} className="min-h-[340px]">
                <div className="flex h-full flex-col">
                  <IconBadge icon={item.Icon} size="lg" />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {item.tagline}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/85"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(201,163,78,0.7)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all duration-300 group-hover:gap-2.5">
                    {dict.products.visit}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-6">
          <GlassCard className="flex flex-col items-center justify-center border-dashed border-gold/25 bg-gold/[0.03] py-12 text-center md:py-14">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-gold/40 text-gold">
              <Plus className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">
              {dict.products.comingSoon}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {dict.products.comingSoonDesc}
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
