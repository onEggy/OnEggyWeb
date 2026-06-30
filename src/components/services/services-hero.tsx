import React from "react";

const stats = [
  { value: "25", label: "practice areas" },
  { value: "3", label: "disciplines: cloud, DevOps, software" },
  { value: "1", label: "senior team, end to end" },
];

export function ServicesHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-12 sm:pt-16 lg:pt-20">
      <div className="max-w-4xl">
        <span className="eyebrow mb-6">Services</span>
        <h1 className="display text-5xl sm:text-6xl lg:text-[4rem] mt-5">
          Everything it takes to keep your cloud <em>dependable.</em>
        </h1>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[58ch]">
          Cloud architecture, DevOps automation, Kubernetes, and product engineering — delivered to
          pass strict compliance audits and survive real scale.
        </p>
      </div>

      <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
        {stats.map((s) => (
          <div key={s.label} className="bg-background p-6">
            <dt className="display text-4xl text-foreground tabular-nums">{s.value}</dt>
            <dd className="mt-1 text-sm text-muted-foreground max-w-[26ch]">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
