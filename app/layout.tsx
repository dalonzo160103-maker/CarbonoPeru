import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carbono Perú — Autopartes Tuning de Alto Rendimiento",
  description:
    "El destino premium de autopartes de competición en el Perú. Fibra de carbono, titanio y precisión de ingeniería en cada pieza.",
  keywords: ["tuning", "autopartes", "carbono", "peru", "racing", "performance"],
  openGraph: {
    title: "Carbono Perú",
    description: "Construido para ganar. Autopartes de competición.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-surface text-on-surface antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
