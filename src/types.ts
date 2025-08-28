export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  count: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceSatang: number;
  image: string;
  stock: number;
  salesCount: number;
  rating: number;
  categorySlug: string;
  createdAt: string; // ISO
}

export interface CartItem {
  productId: string;
  name: string;
  priceSatang: number;
  qty: number;
  image: string;
}

export type Theme = 'light' | 'dark' | 'system';
export type SortKey = 'bestseller' | 'new' | 'price_asc' | 'price_desc';