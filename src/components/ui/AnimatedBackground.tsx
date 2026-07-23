"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export function AnimatedBackground({ dense = false }: { dense?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_74%)]" />

      <motion.div
        className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[var(--blob-1)] blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, 50, -30, 0], y: [0, -40, 25, 0] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-24 h-[32rem] w-[32rem] rounded-full bg-[var(--blob-2)] blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, -60, 35, 0], y: [0, 45, -30, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[var(--blob-3)] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.2, 0.95, 1],
                opacity: [0.4, 0.75, 0.5, 0.4],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: dense ? "56px 56px" : "80px 80px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />
    </div>
  );
}

export function ParticleField({ count = 28 }: { count?: number }) {
  const reduce = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 1.5 + (i % 4),
        duration: 8 + (i % 7),
        delay: (i % 5) * 0.4,
      })),
    [count],
  );

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/70"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 10px rgba(201,163,78,0.55)",
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.15, 0.85, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
