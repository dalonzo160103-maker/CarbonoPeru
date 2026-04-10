import Hero from "../components/Hero";
import GarageFilter from "../components/GarageFilter";
import ProductGrid from "../components/ProductGrid";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero — above the fold ── */}
      <Hero />

      {/* ── Garage Virtual — compatibility filter ── */}
      <GarageFilter />

      {/* ── Product catalog ── */}
      <ProductGrid />

      {/* TODO: BrandsStrip — logos de marcas asociadas (TRD, Brembo, HKS, etc.) */}
      {/* TODO: TestimonialsSection — reseñas de clientes con aesthetic dark */}
      {/* TODO: NewsletterBanner — CTA de suscripción con fondo surface-lowest */}
    </main>
  );
}
