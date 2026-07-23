"use client";

import {
  Building2,
  Cloud,
  Code2,
  GitMerge,
  Network,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services({ dict }: { dict: Dictionary }) {
  const items = [
    { icon: Code2, ...dict.services.items.customSoftware },
    { icon: Sparkles, ...dict.services.items.artificialIntelligence },
    { icon: Zap, ...dict.services.items.businessAutomation },
    { icon: Cloud, ...dict.services.items.cloudSolutions },
    { icon: Network, ...dict.services.items.apiIntegrations },
    { icon: Building2, ...dict.services.items.enterpriseSystems },
    { icon: GitMerge, ...dict.services.items.digitalTransformation },
    { icon: Workflow, ...dict.services.items.workflowAutomation },
  ];

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.title}
            subtitle={dict.services.subtitle}
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 0.08} variant="up">
              <GlassCard className="group h-full" gradientBorder>
                <IconBadge icon={item.icon} />
                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
