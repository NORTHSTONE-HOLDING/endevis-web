"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useRef } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import {
  AnimatedBackground,
  ParticleField,
} from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconBadge } from "@/components/ui/IconBadge";

export function Hero({ dict }: { dict: Dictionary }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  const cards = [
    { icon: Sparkles, label: dict.hero.floatingCards.ai },
    { icon: Cpu, label: dict.hero.floatingCards.automation },
    { icon: Cloud, label: dict.hero.floatingCards.cloud },
  ];

  const stats = [
    { icon: Sparkles, label: dict.hero.stats.ai },
    { icon: Cloud, label: dict.hero.stats.cloud },
    { icon: Cpu, label: dict.hero.stats.automation },
    { icon: Workflow, label: dict.hero.stats.workflow },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-24"
    >
      <AnimatedBackground dense />
      <ParticleField count={32} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-10 text-center sm:px-8 sm:pt-14 lg:pt-16"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-sm font-bold uppercase tracking-[0.4em] gradient-text"
        >
          {dict.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {dict.hero.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl"
        >
          {dict.hero.subheadline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            href="#products"
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {dict.hero.exploreProducts}
          </Button>
          <Button href="#contact" size="lg" variant="secondary">
            {dict.hero.contactUs}
          </Button>
        </motion.div>

        <div className="mt-14 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.35 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={index === 1 ? "animate-float-delayed" : "animate-float"}
            >
              <GlassCard
                padding="sm"
                className="flex items-center gap-3 text-left"
                gradientBorder
              >
                <IconBadge icon={card.icon} size="sm" />
                <span className="text-sm font-semibold text-foreground">
                  {card.label}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7 }}
          className="mt-12 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-4 py-4 text-left md:px-5"
            >
              <IconBadge icon={stat.icon} size="sm" className="mb-3" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted md:text-[0.7rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
