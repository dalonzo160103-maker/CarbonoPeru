import { Product, CarModel } from "../types";

export const products: Product[] = [
  {
    id: "CP-001",
    name: "Alerón GT Carbon Fiber",
    description:
      "Alerón trasero de fibra de carbono 2x2 twill, compatible con carrocería OEM. Incrementa downforce en 40kg a 200km/h. Acabado UV gloss coating.",
    price: 2890,
    image: "/products/aleron-carbon.png",
    category: "aerodinamica",
    brand: "Carbono Perú Racing",
    sku: "CP-AERO-001",
    specs: [
      { label: "Material", value: "Carbon Fiber 2x2 Twill" },
      { label: "Peso", value: "1.8 kg" },
      { label: "Downforce", value: "+40 kg @ 200km/h" },
      { label: "Acabado", value: "UV Gloss Coat" },
    ],
  },
  {
    id: "CP-002",
    name: "Escape Titanio Racing Cat-Back",
    description:
      "Sistema de escape cat-back en titanio grado 2. Reducción de 4.2kg vs OEM. Sonido profundo y lineal, sin resonancias. Certificado para pista.",
    price: 4650,
    image: "/products/escape-titanio.png",
    category: "escape",
    brand: "Carbono Perú Racing",
    sku: "CP-EXH-002",
    specs: [
      { label: "Material", value: "Titanio Grado 2" },
      { label: "Reducción de Peso", value: "-4.2 kg" },
      { label: "Diámetro", value: '2.5"' },
      { label: "Certificación", value: "FIA Compatible" },
    ],
  },
  {
    id: "CP-003",
    name: "Kit Suspensión Coilover Racing",
    description:
      "Coilovers ajustables en 32 niveles de amortiguación. Altura regulable ±40mm. Resortes de acero inoxidable con recubrimiento anticorrosivo.",
    price: 3200,
    image: "/products/coilover-kit.png",
    category: "suspension",
    brand: "Carbono Perú Racing",
    sku: "CP-SUS-003",
    specs: [
      { label: "Ajuste", value: "32 niveles damping" },
      { label: "Rango altura", value: "±40 mm" },
      { label: "Material resorte", value: "Acero Inox 304" },
      { label: "Garantía", value: "2 años pista" },
    ],
  },
  {
    id: "CP-004",
    name: "Frenos Brembo GT Kit 6-Pistones",
    description:
      "Kit de frenos Brembo GT con pinzas de 6 pistones en aluminio monobloque. Discos ventilados y ranurados de 380mm. Para uso pista intensivo.",
    price: 7800,
    image: "/products/brembo-gt.png",
    category: "frenos",
    brand: "Brembo",
    sku: "CP-BRK-004",
    specs: [
      { label: "Pistones", value: "6 (mono-bloque)" },
      { label: "Disco", value: "380mm ventilado/ranurado" },
      { label: "Material pinza", value: "Aluminio forjado" },
      { label: "Temp. operación", value: "0 – 700°C" },
    ],
  },
];

export const carBrands: string[] = [
  "Toyota",
  "Subaru",
  "Mitsubishi",
  "Honda",
  "Nissan",
  "Mazda",
  "Hyundai",
  "BMW",
  "Mercedes-Benz",
  "Audi",
];

export const carModelsByBrand: Record<string, string[]> = {
  Toyota: ["GR86", "GR Yaris", "Supra A90", "Corolla", "Celica"],
  Subaru: ["WRX STI", "WRX", "BRZ", "Impreza", "Forester"],
  Mitsubishi: ["Lancer Evo X", "Lancer Evo IX", "Eclipse Cross", "Outlander"],
  Honda: ["Civic Type-R", "Civic Si", "Integra Type-R", "S2000", "NSX"],
  Nissan: ["GT-R R35", "GT-R R34", "350Z", "370Z", "Silvia S15"],
  Mazda: ["MX-5 ND", "MX-5 NC", "RX-7 FD", "RX-8", "3 MPS"],
  Hyundai: ["i30 N", "i20 N", "Elantra N", "Veloster N", "Kona N"],
  BMW: ["M2", "M3", "M4", "M5", "1M"],
  "Mercedes-Benz": ["A45 AMG", "CLA 45 AMG", "C63 AMG", "GLA 45 AMG"],
  Audi: ["RS3", "RS4", "TT RS", "R8", "S3"],
};

export const carYears: number[] = Array.from(
  { length: 25 },
  (_, i) => 2024 - i
);

export const categories = [
  { value: "all", label: "Todos" },
  { value: "aerodinamica", label: "Aerodinámica" },
  { value: "escape", label: "Escape" },
  { value: "suspension", label: "Suspensión" },
  { value: "frenos", label: "Frenos" },
  { value: "motor", label: "Motor" },
  { value: "interior", label: "Interior" },
] as const;
