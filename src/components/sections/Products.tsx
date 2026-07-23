"use client";

import {
  ArrowUpRight,
  Calendar,
  FileText,
  Plus,
  Rss,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  paperflow: FileText,
  eventflow: Calendar,
  feedflow: Rss,
} as const;

export function Products({ dict }: { dict: Dictionary }) {
  const items = [
    {
      key: "paperflow" as const,
      ...dict.products.items.paperflow,
      accent: "from-gold/25 via-gold/5 to-transparent",
    },
    {
      key: "eventflow" as const,
      ...dict.products.items.eventflow,
      accent: "from-graphite/10 via-gold/10 to-transparent dark:from-white/10",
    },
    {
      key: "feedflow" as const,
      ...dict.products.items.feedflow,
      accent: "from-gold-light/30 via-transparent to-gold/10",
    },
  ];

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
            const Icon = icons[item.key];
            return (
              <Reveal key={item.key} delay={index * 0.1} variant="scale">
                <GlassCard className="group relative flex h-full flex-col overflow-hidden">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {dict.products.learnMore}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}

          <Reveal delay={0.3} variant="scale">
            <GlassCard className="flex h-full min-h-[280px] flex-col items-center justify-center border-dashed border-gold/25 bg-gold/[0.03] text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-gold/40 text-gold">
                <Plus className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {dict.products.comingSoon}
              </h3>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted">
                {dict.products.comingSoonDesc}
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
