"use client";

import {
  ArrowUpRight,
  Layers,
  Sparkles,
  Store,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import {
  accentTokens,
  futureProductNames,
  products,
} from "@/lib/ecosystem";
import { company } from "@/lib/company";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Ecosystem({ dict }: { dict: Dictionary }) {
  const apps = products.filter((p) => p.role === "application");
  const marketplace = products.find((p) => p.role === "marketplace");

  return (
    <section id="ecosystem" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={dict.ecosystem.eyebrow}
            title={dict.ecosystem.title}
            subtitle={dict.ecosystem.subtitle}
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {dict.ecosystem.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-card-border bg-glass px-3.5 py-1.5 text-xs font-medium text-muted"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-5">
            <GlassCard padding="lg" gradientBorder className="h-full">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Layers className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {dict.ecosystem.publisher}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    {company.name}
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {dict.ecosystem.appsDesc}
              </p>
              <ul className="mt-6 space-y-3">
                {apps.map((app) => {
                  const token = accentTokens[app.accent];
                  return (
                    <li key={app.id}>
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-card-border bg-background/30 px-4 py-3 transition-colors hover:border-[color:rgba(var(--a),0.45)]"
                        style={
                          {
                            "--a": token.rgb,
                          } as CSSProperties
                        }
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              background: token.hex,
                              boxShadow: `0 0 10px rgba(${token.rgb},0.7)`,
                            }}
                          />
                          <span className="text-sm font-semibold text-foreground">
                            {app.name}
                          </span>
                        </span>
                        <span className="text-xs text-muted">{app.domain}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal variant="right" delay={0.1} className="lg:col-span-7">
            <GlassCard
              padding="lg"
              className="relative h-full overflow-hidden border-[rgba(229,72,77,0.28)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
                style={{ background: "rgba(229,72,77,0.2)" }}
              />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                <span
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                  style={{
                    color: accentTokens.red.hex,
                    borderColor: `rgba(${accentTokens.red.rgb},0.35)`,
                    background: `rgba(${accentTokens.red.rgb},0.12)`,
                    boxShadow: `0 0 28px rgba(${accentTokens.red.rgb},0.25)`,
                  }}
                >
                  <Store className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: accentTokens.red.hex }}
                  >
                    {marketplace?.name ?? "FlowStore"}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {dict.ecosystem.gatewayTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {dict.ecosystem.gatewayDesc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {dict.products.items.flowstore.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-2 rounded-full border border-card-border px-3 py-1.5 text-xs text-muted"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-[color:#E5484D]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button
                      href="https://flowstore.cz"
                      size="lg"
                      className="!bg-[linear-gradient(135deg,#ff7b7f,#E5484D,#c13a3e)] !text-white"
                      icon={<ArrowUpRight className="h-4 w-4" />}
                    >
                      flowstore.cz
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6">
          <GlassCard padding="md" className="text-center">
            <h3 className="text-lg font-bold text-foreground">
              {dict.ecosystem.futureTitle}
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
              {dict.ecosystem.futureDesc}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {futureProductNames.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-dashed border-card-border px-3 py-1.5 text-xs text-muted"
                >
                  {name}
                </span>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
