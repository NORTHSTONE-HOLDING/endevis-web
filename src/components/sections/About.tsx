"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { company } from "@/lib/company";
import { GlassCard } from "@/components/ui/GlassCard";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ dict }: { dict: Dictionary }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce ? 0 : 60, reduce ? 0 : -60],
  );

  const registry = [
    { label: dict.about.companyLabel, value: company.name },
    {
      label: dict.about.registeredOffice,
      value: `${company.registration.registeredOffice} ${company.registration.registeredOfficeFlag}`,
    },
    { label: "KRS", value: company.registration.krs },
    { label: "NIP", value: company.registration.nip },
    { label: "REGON", value: company.registration.regon },
    { label: "VAT EU", value: company.registration.vatEu },
  ];

  const stats = [
    dict.about.stats.products,
    dict.about.stats.focus,
    dict.about.stats.markets,
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal variant="left">
            <SectionHeading
              align="left"
              eyebrow={dict.about.eyebrow}
              title={dict.about.title}
            />
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {dict.about.paragraph1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {dict.about.paragraph2}
            </p>
          </Reveal>

          <Reveal variant="left" delay={0.12} className="mt-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <GlassCard key={stat.label} padding="sm" className="text-center">
                  <p className="gradient-text text-3xl font-bold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={0.1}>
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

            <div className="mt-6 space-y-3">
              {registry.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 rounded-2xl border border-card-border bg-background/30 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
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
    </section>
  );
}
