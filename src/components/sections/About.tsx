"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ dict }: { dict: Dictionary }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -60]);

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
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-graphite/10 blur-3xl dark:bg-white/5"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
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

        <Reveal variant="right" delay={0.15}>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => (
              <GlassCard
                key={stat.label}
                className="sm:text-center lg:flex lg:items-center lg:gap-6 lg:text-left"
              >
                <p className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>
                <div>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted lg:mt-0">
                    {stat.label}
                  </p>
                  <div
                    aria-hidden
                    className="mt-3 hidden h-px w-16 bg-gradient-to-r from-gold to-transparent lg:block"
                    style={{ opacity: 0.5 + index * 0.15 }}
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
