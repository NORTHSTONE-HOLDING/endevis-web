"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "gold-gradient text-anthracite shadow-premium hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(201,163,78,0.65)]",
  secondary:
    "glass text-foreground hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold/10",
  ghost: "bg-transparent text-foreground hover:bg-muted-bg/60",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base sm:h-14",
};

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children"> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

function useRippleCoords() {
  const ref = useRef<HTMLElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };
  return { ref, onMove };
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    icon,
  } = props;
  const { ref, onMove } = useRippleCoords();

  const classes = cn(
    "btn-ripple inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-tight transition-all duration-300 focus-ring",
    "active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target ?? (isExternal ? "_blank" : undefined)}
        rel={props.rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={onMove}
      >
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      aria-label={buttonProps["aria-label"]}
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
    >
      {children}
      {icon}
    </button>
  );
}
