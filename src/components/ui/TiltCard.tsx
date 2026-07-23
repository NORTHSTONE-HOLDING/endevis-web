"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function TiltCard({ children, className, href }: TiltCardProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const glareX = useSpring(x, { stiffness: 180, damping: 20 });
  const glareY = useSpring(y, { stiffness: 180, damping: 20 });
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}px ${glareY}px, rgba(229,197,106,0.22), transparent 45%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const rx = ((py - rect.height / 2) / (rect.height / 2)) * -8;
    const ry = ((px - rect.width / 2) / (rect.width / 2)) * 8;
    x.set(px);
    y.set(py);
    rotateX.set(rx);
    rotateY.set(ry);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const content = (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={cn(
        "glass gradient-border group relative h-full overflow-hidden rounded-3xl p-6 transition-shadow duration-500 md:p-8",
        "hover:shadow-[0_35px_80px_-30px_rgba(201,163,78,0.45)]",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/50 to-transparent"
      />
      <div className="relative" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus-ring rounded-3xl"
      >
        {content}
      </a>
    );
  }

  return content;
}
