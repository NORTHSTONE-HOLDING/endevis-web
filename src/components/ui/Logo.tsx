"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { box: "h-9 w-9", text: "text-base", icon: 18 },
  md: { box: "h-11 w-11", text: "text-lg", icon: 22 },
  lg: { box: "h-14 w-14", text: "text-2xl", icon: 28 },
};

function Mark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className="relative z-10"
    >
      {/* AI chip frame */}
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="7"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-anthracite dark:text-anthracite"
      />
      <path
        d="M16 4v4M24 4v4M32 4v4M16 40v4M24 40v4M32 40v4M4 16h4M4 24h4M4 32h4M40 16h4M40 24h4M40 32h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="text-anthracite/70 dark:text-anthracite/80"
      />
      {/* Stylized E */}
      <path
        d="M18 16h13M18 24h10M18 32h13M18 16v16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-anthracite"
      />
      {/* AI node */}
      <circle cx="33" cy="24" r="2.2" className="fill-anthracite" />
    </svg>
  );
}

export function Logo({
  className,
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const s = sizes[size];
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={cn("group inline-flex items-center gap-3", className)}
      whileHover={
        reduce
          ? undefined
          : {
              rotate: [-0.5, 1.5, 0],
              transition: { duration: 0.55, ease: "easeOut" },
            }
      }
    >
      <span
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-2xl gold-gradient shadow-premium transition-shadow duration-500",
          "group-hover:shadow-[0_0_28px_rgba(201,163,78,0.55)]",
          s.box,
        )}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.45)_45%,transparent_70%)] opacity-70"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-pulse-glow bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]"
        />
        <Mark size={s.icon} />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-gold",
            s.text,
          )}
        >
          ENDEVIS
        </span>
      ) : null}
    </motion.span>
  );
}
