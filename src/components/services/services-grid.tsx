"use client";

import React from "react";
import { Cloud, Server, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { servicesData, type Service } from "@/lib/services-data";

type CategoryKey = "all" | "cloud" | "devops" | "software";

const categoryMeta: Record<
  Service["category"],
  { label: string; icon: React.ReactNode }
> = {
  cloud: { label: "Cloud", icon: <Cloud className="h-4.5 w-4.5 text-primary" aria-hidden="true" /> },
  devops: { label: "DevOps", icon: <Server className="h-4.5 w-4.5 text-primary" aria-hidden="true" /> },
  software: { label: "Software", icon: <Code className="h-4.5 w-4.5 text-primary" aria-hidden="true" /> },
};

const filters: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "cloud", label: "Cloud" },
  { key: "devops", label: "DevOps" },
  { key: "software", label: "Software" },
];

export function ServicesGrid() {
  const [active, setActive] = React.useState<CategoryKey>("all");

  const counts = React.useMemo(() => {
    return servicesData.reduce(
      (acc, service) => {
        acc.all += 1;
        acc[service.category] += 1;
        return acc;
      },
      { all: 0, cloud: 0, devops: 0, software: 0 } as Record<CategoryKey, number>
    );
  }, []);

  const visibleServices = React.useMemo(
    () =>
      active === "all"
        ? servicesData
        : servicesData.filter((service) => service.category === active),
    [active]
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 relative">
      {/* Structural layout lines */}
      <div className="hidden lg:block absolute left-10 md:left-20 top-0 bottom-0 w-px border-l border-border pointer-events-none" />
      <div className="hidden lg:block absolute right-10 md:right-20 top-0 bottom-0 w-px border-r border-border pointer-events-none" />

      <div className="surface-card border border-border rounded-lg overflow-hidden relative z-10 mx-0 md:mx-14">
        <div className="px-6 py-4 border-b border-border bg-surface-subtle flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm font-mono text-primary-strong font-bold uppercase tracking-widest block">
              Core Capabilities
            </span>
            <h3 className="text-base font-bold text-foreground font-display mt-0.5">
              Practice Disciplines & target outcomes
            </h3>
          </div>
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
            {counts.all} active practices
          </span>
        </div>

        {/* Category filter tabs */}
        <div className="px-6 py-4 border-b border-border flex flex-wrap gap-2" role="group" aria-label="Filter services by category">
          {filters.map((filter) => {
            const isActive = active === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActive(filter.key)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 h-11 px-4 rounded-md text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                  isActive
                    ? "bg-primary text-white"
                    : "border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {filter.label}
                <span
                  className={`text-xs font-mono ${
                    isActive ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {counts[filter.key]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="divide-y divide-border font-sans">
          {visibleServices.map((service) => {
            const meta = categoryMeta[service.category];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-label={`View ${service.title} service details`}
                className="block p-6 group hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Title & Icon */}
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-md border border-border bg-surface-subtle flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                      {meta.icon}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider block">
                        {meta.label}
                      </span>
                      <h4 className="text-base font-bold text-foreground group-hover:text-primary-strong transition-colors">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Short line */}
                  <div className="md:col-span-6">
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[60ch]">
                      {service.subtext}
                    </p>
                  </div>

                  {/* Action affordance */}
                  <div className="md:col-span-2 flex justify-start md:justify-end">
                    <span
                      className="w-9 h-9 rounded-full bg-surface-subtle border border-border flex items-center justify-center text-muted-foreground group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
