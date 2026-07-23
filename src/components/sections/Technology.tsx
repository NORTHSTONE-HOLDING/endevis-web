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
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

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

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            aria-hidden
            className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:left-1/2 md:-translate-x-px"
          />

          <ol className="space-y-8 md:space-y-12">
            {items.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;
              return (
                <Reveal
                  key={item.title}
                  delay={(index % 3) * 0.08}
                  variant={left ? "left" : "right"}
                >
                  <li
                    className={cn(
                      "relative grid gap-4 md:grid-cols-2 md:gap-10",
                    )}
                  >
                    <div
                      className={cn(
                        "pl-16 md:pl-0",
                        left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12",
                      )}
                    >
                      <div
                        className={cn(
                          "glass gradient-border rounded-3xl p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(201,163,78,0.35)]",
                          left && "md:ml-auto",
                        )}
                      >
                        <div
                          className={cn(
                            "mb-4 flex items-center gap-3",
                            left && "md:flex-row-reverse",
                          )}
                        >
                          <IconBadge icon={Icon} size="sm" />
                          <h3 className="text-lg font-bold tracking-tight text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <span
                      aria-hidden
                      className="absolute left-6 top-8 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
                    >
                      <span className="absolute h-3 w-3 rounded-full bg-gold shadow-[0_0_16px_rgba(201,163,78,0.8)]" />
                      <span className="absolute h-6 w-6 animate-pulse-glow rounded-full border border-gold/40" />
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
