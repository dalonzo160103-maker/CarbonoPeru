"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const redLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = redLineRef.current;
    if (!el) return;
    // Mechanical ease-in expansion — no bounce
    el.style.transition = "width 0.8s cubic-bezier(0.4, 0, 1, 1)";
    el.style.width = "100%";
  }, []);

  return (
    <section className="relative min-h-screen bg-surface-lowest overflow-hidden flex flex-col justify-end">
      {/* ── Asphalt texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)",
        }}
        aria-hidden="true"
      />

      {/* ── Background gradient — center glow ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(228,0,43,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Kinetic diagonal slash — accent graphic ── */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 opacity-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(135deg, transparent 45%, #353534 45%, #353534 55%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* ── Racing red vertical accent strip ── */}
      <div
        className="absolute left-0 top-0 h-full w-[3px] bg-primary-container"
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-32 lg:pt-40 w-full">
        {/* Telemetry label */}
        <p className="label-telemetry text-primary-container mb-4 animate-slide-in">
          ◆ &nbsp;Temporada 2025 &nbsp;·&nbsp; Tuning de Alto Rendimiento
        </p>

        {/* Headline — off-center break by design */}
        <h1 className="headline-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] mb-6 max-w-4xl">
          CONSTRUIDO
          <br />
          <span className="text-primary-container">PARA</span>
          <br />
          GANAR.
        </h1>

        {/* Red underline — animated expansion */}
        <div className="mb-8 h-[2px] bg-surface-highest overflow-hidden w-full max-w-md">
          <div
            ref={redLineRef}
            className="h-full bg-primary-container"
            style={{ width: "0%" }}
          />
        </div>

        {/* Sub-copy */}
        <p className="font-body text-on-surface-variant text-base lg:text-lg max-w-xl mb-10 leading-relaxed">
          Autopartes de competición para el mercado peruano. Fibra de carbono,
          titanio y precisión de ingeniería en cada componente.
        </p>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#catalogo" className="btn-ignition inline-block text-center">
            Ver Catálogo
          </a>
          <a href="#garage" className="btn-ghost inline-block text-center">
            Buscar por mi Auto →
          </a>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-16 grid grid-cols-3 gap-0 max-w-lg border-t border-outline-variant pt-8">
          {[
            { value: "4K+", label: "Piezas en Stock" },
            { value: "98%", label: "Compat. Verificada" },
            { value: "48H", label: "Desp. Nacional" },
          ].map((stat) => (
            <div key={stat.label} className="pr-6">
              <p className="font-display font-bold text-2xl lg:text-3xl text-on-surface italic tracking-display">
                {stat.value}
              </p>
              <p className="label-telemetry mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom gradient fade into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #131313)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
