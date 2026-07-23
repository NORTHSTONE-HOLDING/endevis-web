"use client";

import {
  Bot,
  Brain,
  CloudCog,
  KeyRound,
  Layers,
  Plug,
  ShieldCheck,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Technology({ dict }: { dict: Dictionary }) {
  const items = [
    { icon: Brain, ...dict.technology.items.ai },
    { icon: Bot, ...dict.technology.items.openai },
    { icon: CloudCog, ...dict.technology.items.cloud },
    { icon: Layers, ...dict.technology.items.automation },
    { icon: Plug, ...dict.technology.items.apis },
    { icon: ShieldCheck, ...dict.technology.items.security },
    { icon: KeyRound, ...dict.technology.items.scalable },
  ];

  return (
    <section id="technology" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--gold)_8%,transparent),transparent_65%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={dict.technology.eyebrow}
            title={dict.technology.title}
            subtitle={dict.technology.subtitle}
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isWide = index === items.length - 1;
            return (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.1}
                variant="scale"
                className={isWide ? "lg:col-span-3 lg:max-w-md lg:justify-self-center" : undefined}
              >
                <GlassCard className="group relative h-full overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
