const footerLinks = {
  Catálogo: ["Aerodinámica", "Escape", "Suspensión", "Frenos", "Motor"],
  Empresa: ["Sobre Nosotros", "Garantías", "Envíos", "Contacto"],
  Legal: ["Términos y Condiciones", "Política de Privacidad", "Devoluciones"],
};

export default function Footer() {
  return (
    <footer className="bg-surface-lowest border-t-2 border-primary-container" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <p className="font-display font-bold italic text-2xl text-on-surface tracking-display mb-4">
              CARBONO<span className="text-primary-container">PERÚ</span>
            </p>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-xs mb-6">
              El destino premium de autopartes tuning en el Perú. Ingeniería de
              competición para la pista y la calle.
            </p>
            {/* Social icons — thin stroke blueprint style */}
            <div className="flex gap-3">
              {["IG", "YT", "FB", "WA"].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 flex items-center justify-center bg-surface-high text-on-surface-variant hover:text-primary-container hover:bg-surface-highest transition-colors duration-200 ease-in"
                  aria-label={s}
                >
                  <span className="label-telemetry text-[10px]">{s}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="label-telemetry text-primary-container mb-4">{heading}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-on-surface-variant text-sm hover:text-on-surface transition-colors duration-200 ease-in"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="label-telemetry text-on-surface-variant">
            © 2025 Carbono Perú S.A.C. &nbsp;·&nbsp; Lima, Perú &nbsp;·&nbsp;
            RUC 20xxxxxxxxx
          </p>
          <div className="flex gap-4">
            {["VISA", "MC", "YAPE", "PLIN"].map((pm) => (
              <span
                key={pm}
                className="label-telemetry text-[10px] px-2 py-1 bg-surface-high text-on-surface-variant"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
