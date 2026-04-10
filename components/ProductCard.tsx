"use client";

import Image from "next/image";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const categoryLabels: Record<Product["category"], string> = {
  aerodinamica: "Aerodinámica",
  escape: "Escape",
  suspension: "Suspensión",
  frenos: "Frenos",
  motor: "Motor",
  interior: "Interior",
};

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <article
      className="group relative bg-surface-high flex flex-col overflow-visible"
      style={{ boxShadow: "0 4px 0 0 #0E0E0E" }}
    >
      {/* ── Image container — product "cut-out" that bleeds out ── */}
      <div className="relative bg-surface-lowest h-52 sm:h-60 overflow-visible flex items-center justify-center">
        {/* Ambient red glow behind product */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(228,0,43,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Product image — overlaps container on hover */}
        <div className="relative z-10 w-full h-full transition-transform duration-300 ease-in group-hover:-translate-y-2">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => {
              // Fallback placeholder if image missing
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Placeholder when no real image */}
          <div className="absolute inset-0 flex items-center justify-center text-surface-bright">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="8" y="16" width="48" height="32" />
              <line x1="8" y1="16" x2="56" y2="48" />
              <line x1="56" y1="16" x2="8" y2="48" />
            </svg>
          </div>
        </div>

        {/* SKU badge */}
        {product.sku && (
          <span
            className="absolute top-3 left-3 z-20 label-telemetry bg-surface px-2 py-1 text-on-surface-variant"
            aria-label={`SKU: ${product.sku}`}
          >
            {product.sku}
          </span>
        )}
      </div>

      {/* ── Content area ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category tag */}
        <span className="label-telemetry text-primary-container mb-2">
          {categoryLabels[product.category]}
        </span>

        {/* Product name */}
        <h3 className="font-display font-bold italic text-lg text-on-surface tracking-display leading-tight mb-2 group-hover:text-primary transition-colors duration-200 ease-in">
          {product.name}
        </h3>

        {/* Description */}
        <p className="font-body text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        {/* Specs preview — performance gauge */}
        {product.specs && product.specs.length > 0 && (
          <div className="mb-4 space-y-2">
            {product.specs.slice(0, 2).map((spec) => (
              <div key={spec.label} className="flex items-center gap-3">
                <span className="label-telemetry text-on-surface-variant w-24 shrink-0">
                  {spec.label}
                </span>
                {/* Performance gauge track */}
                <div className="flex-1 h-[3px] bg-surface-highest relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-primary-container transition-all duration-500 ease-in"
                    style={{ width: "60%" }}
                  />
                  {/* Tick marks */}
                  {[25, 50, 75].map((tick) => (
                    <div
                      key={tick}
                      className="absolute top-0 h-full w-[1px] bg-surface"
                      style={{ left: `${tick}%` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="font-body text-on-surface text-xs font-medium w-20 text-right shrink-0">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant border-opacity-15">
          <div>
            <p className="label-telemetry text-on-surface-variant">Precio</p>
            <p className="font-display font-bold text-xl text-on-surface italic tracking-display">
              {formattedPrice}
            </p>
          </div>
          <button
            className="btn-ignition text-xs px-5 py-2"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
