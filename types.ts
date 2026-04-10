export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "aerodinamica" | "escape" | "suspension" | "frenos" | "motor" | "interior";
  brand?: string;
  sku?: string;
  specs?: { label: string; value: string }[];
}

export interface CarModel {
  year: number;
  brand: string;
  model: string;
}

export interface FilterState {
  year: number | null;
  brand: string | null;
  model: string | null;
}
