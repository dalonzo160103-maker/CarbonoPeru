"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Garaje Virtual", href: "#garage" },
  { label: "Marcas", href: "#marcas" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in",
        scrolled ? "glass-nav" : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      {/* Red top stripe */}
      <div className="h-[2px] bg-primary-container w-full" aria-hidden="true" />

      <nav
        className="max-w-7xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold italic text-xl text-on-surface tracking-display hover:text-primary-container transition-colors duration-200 ease-in"
          aria-label="Carbono Perú — Inicio"
        >
          CARBONO<span className="text-primary-container">PERÚ</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="label-telemetry px-4 py-2 text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-in block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search icon */}
          <button
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-in p-2"
            aria-label="Buscar"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="5.5" />
              <line x1="11.5" y1="11.5" x2="16" y2="16" />
            </svg>
          </button>
          {/* Cart icon */}
          <button
            className="relative text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-in p-2"
            aria-label="Carrito de compras"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M1 1h2.5l2 9h8l2-6H5" />
              <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
              <circle cx="13" cy="15" r="1" fill="currentColor" stroke="none" />
            </svg>
          </button>
          <a href="#catalogo" className="btn-ignition text-xs px-5 py-2">
            Comprar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-on-surface p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="17" y2="17" />
                <line x1="17" y1="3" x2="3" y2="17" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass-nav border-t border-outline-variant">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="label-telemetry text-on-surface-variant hover:text-on-surface py-3 block border-b border-outline-variant transition-colors duration-200 ease-in"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#catalogo" className="btn-ignition block text-center">
                Comprar Ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
