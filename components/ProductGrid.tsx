"use client";

import { useState } from "react";
import { products, categories } from "../data/mock";
import ProductCard from "./ProductCard";
import type { Product } from "../types";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered: Product[] =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="bg-surface py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-primary-container shrink-0" aria-hidden="true" />
            <div>
              <p className="label-telemetry text-primary-container">
                ◆ &nbsp;Catálogo 2025
              </p>
              <h2 className="font-display font-bold italic text-2xl lg:text-3xl text-on-surface tracking-display mt-1">
                PIEZAS DE ALTO RENDIMIENTO
              </h2>
            </div>
          </div>
          <p className="font-body text-on-surface-variant text-sm">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex gap-0 overflow-x-auto mb-10 border-b border-outline-variant">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={[
                "label-telemetry px-4 py-3 shrink-0 border-b-2 -mb-[2px] transition-colors duration-200 ease-in",
                activeCategory === cat.value
                  ? "border-primary-container text-primary-container"
                  : "border-transparent text-on-surface-variant hover:text-on-surface",
              ].join(" ")}
              aria-pressed={activeCategory === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState category={activeCategory} />
        )}

        {/* Load more — stub */}
        {filtered.length >= 4 && (
          <div className="mt-12 flex justify-center">
            <button className="btn-ghost">
              Cargar más productos →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState({ category }: { category: string }) {
  return (
    <div className="py-24 flex flex-col items-center text-center gap-4">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-surface-bright"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="20" />
        <line x1="24" y1="14" x2="24" y2="26" />
        <circle cx="24" cy="32" r="1.5" fill="currentColor" />
      </svg>
      <p className="font-display font-bold italic text-on-surface-variant text-lg tracking-display">
        Sin piezas en esta categoría
      </p>
      <p className="font-body text-on-surface-variant text-sm">
        Próximos lanzamientos — {category}
      </p>
    </div>
  );
}
