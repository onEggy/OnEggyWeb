"use client";

import React from "react";
import { Cloud, Server, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { servicesData, type Service } from "@/lib/services-data";

type CategoryKey = "all" | "cloud" | "devops" | "software";

const categoryMeta: Record<Service["category"], { label: string; Icon: React.ElementType }> = {
  cloud: { label: "Cloud", Icon: Cloud },
  devops: { label: "DevOps", Icon: Server },
  software: { label: "Software", Icon: Code },
};

const filters: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "cloud", label: "Cloud" },
  { key: "devops", label: "DevOps" },
  { key: "software", label: "Software" },
];

export function ServicesGrid() {
  const [active, setActive] = React.useState<CategoryKey>("all");

  const counts = React.useMemo(
    () =>
      servicesData.reduce(
        (acc, service) => {
          acc.all += 1;
          acc[service.category] += 1;
          return acc;
        },
        { all: 0, cloud: 0, devops: 0, software: 0 } as Record<CategoryKey, number>
      ),
    []
  );

  const visibleServices = React.useMemo(
    () => (active === "all" ? servicesData : servicesData.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
      {/* Header + filter bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-border pb-6">
        <div>
          <span className="eyebrow mb-4">Full catalogue</span>
          <h2 className="display text-3xl sm:text-4xl mt-3">
            {counts.all} ways we can <em>help.</em>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services by category">
          {filters.map((filter) => {
            const isActive = active === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActive(filter.key)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 h-11 px-4 rounded-md text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:bg-surface-subtle"
                }`}
              >
                {filter.label}
                <span className={`font-mono text-xs tabular-nums ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {counts[filter.key]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Card grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {visibleServices.map((service) => {
          const { label, Icon } = categoryMeta[service.category];
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              aria-label={`View ${service.title} service details`}
              className="group surface-card rounded-2xl p-6 flex flex-col h-full hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-primary-strong">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </span>
              <h3 className="font-display text-xl sm:text-[1.35rem] leading-snug text-foreground mt-4 group-hover:text-primary-strong transition-colors">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                {service.subtext}
              </p>
              <span className="mt-6 pt-5 border-t border-border inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong">
                Explore service
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
