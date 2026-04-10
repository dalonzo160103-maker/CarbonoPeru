"use client";

import { useState, useMemo } from "react";
import { carYears, carBrands, carModelsByBrand } from "../data/mock";
import type { FilterState } from "../types";

interface GarageFilterProps {
  onFilter?: (filter: FilterState) => void;
}

export default function GarageFilter({ onFilter }: GarageFilterProps) {
  const [filter, setFilter] = useState<FilterState>({
    year: null,
    brand: null,
    model: null,
  });

  const availableModels = useMemo(
    () => (filter.brand ? carModelsByBrand[filter.brand] ?? [] : []),
    [filter.brand]
  );

  const handleBrandChange = (brand: string) => {
    setFilter({ year: filter.year, brand: brand || null, model: null });
  };

  const handleSearch = () => {
    onFilter?.(filter);
    const section = document.getElementById("catalogo");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const selectClass =
    "w-full bg-surface-highest text-on-surface font-body text-sm px-4 py-3" +
    " border-b-2 border-outline-variant appearance-none cursor-pointer" +
    " focus:outline-none focus:border-primary-container focus:shadow-red-focus" +
    " transition-colors duration-200 ease-in" +
    " disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <section id="garage" className="bg-surface py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-primary-container shrink-0" aria-hidden="true" />
          <div>
            <p className="label-telemetry text-primary-container">
              ◆ &nbsp;Compatibilidad Exacta
            </p>
            <h2 className="font-display font-bold italic text-2xl lg:text-3xl text-on-surface tracking-display mt-1">
              GARAJE VIRTUAL
            </h2>
          </div>
        </div>

        {/* Filter panel */}
        <div className="bg-surface-low p-6 lg:p-8">
          <p className="font-body text-on-surface-variant text-sm mb-6">
            Selecciona tu vehículo para ver solo las piezas compatibles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Year */}
            <div className="flex flex-col gap-1">
              <label className="label-telemetry mb-1">Año</label>
              <div className="relative">
                <select
                  className={selectClass}
                  value={filter.year ?? ""}
                  onChange={(e) =>
                    setFilter({
                      ...filter,
                      year: e.target.value ? Number(e.target.value) : null,
                    })
                  }
                >
                  <option value="">— Seleccionar —</option>
                  {carYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs">
                  ▼
                </span>
              </div>
            </div>

            {/* Brand */}
            <div className="flex flex-col gap-1">
              <label className="label-telemetry mb-1">Marca</label>
              <div className="relative">
                <select
                  className={selectClass}
                  value={filter.brand ?? ""}
                  onChange={(e) => handleBrandChange(e.target.value)}
                >
                  <option value="">— Seleccionar —</option>
                  {carBrands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs">
                  ▼
                </span>
              </div>
            </div>

            {/* Model */}
            <div className="flex flex-col gap-1">
              <label className="label-telemetry mb-1">Modelo</label>
              <div className="relative">
                <select
                  className={selectClass}
                  value={filter.model ?? ""}
                  disabled={!filter.brand}
                  onChange={(e) =>
                    setFilter({ ...filter, model: e.target.value || null })
                  }
                >
                  <option value="">
                    {filter.brand ? "— Seleccionar —" : "Elige marca primero"}
                  </option>
                  {availableModels.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs">
                  ▼
                </span>
              </div>
            </div>

            {/* Search CTA */}
            <div className="flex flex-col justify-end">
              <button
                onClick={handleSearch}
                className="btn-ignition w-full mt-auto"
                aria-label="Buscar piezas compatibles"
              >
                Buscar Piezas
              </button>
            </div>
          </div>

          {/* Active filter chips */}
          {(filter.year || filter.brand || filter.model) && (
            <div className="mt-6 flex flex-wrap gap-2 items-center">
              <span className="label-telemetry text-on-surface-variant">
                Filtro activo:
              </span>
              {filter.year && (
                <FilterChip
                  label={String(filter.year)}
                  onRemove={() => setFilter({ ...filter, year: null })}
                />
              )}
              {filter.brand && (
                <FilterChip
                  label={filter.brand}
                  onRemove={() =>
                    setFilter({ ...filter, brand: null, model: null })
                  }
                />
              )}
              {filter.model && (
                <FilterChip
                  label={filter.model}
                  onRemove={() => setFilter({ ...filter, model: null })}
                />
              )}
              <button
                onClick={() =>
                  setFilter({ year: null, brand: null, model: null })
                }
                className="label-telemetry text-primary-container hover:text-primary transition-colors ml-2"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="flex items-center gap-2 bg-surface-highest px-3 py-1 text-xs font-body text-on-surface">
      {label}
      <button
        onClick={onRemove}
        className="text-on-surface-variant hover:text-primary-container transition-colors"
        aria-label={`Quitar filtro ${label}`}
      >
        ✕
      </button>
    </span>
  );
}
