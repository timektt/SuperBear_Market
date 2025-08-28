import { Product, SortKey } from '../types';

export function searchByName(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;
  
  const searchTerm = query.toLowerCase().trim();
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
}

export function sortProducts(products: Product[], sortKey: SortKey): Product[] {
  const sorted = [...products];
  
  switch (sortKey) {
    case 'bestseller':
      return sorted.sort((a, b) => b.salesCount - a.salesCount);
    
    case 'new':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    case 'price_asc':
      return sorted.sort((a, b) => a.priceSatang - b.priceSatang);
    
    case 'price_desc':
      return sorted.sort((a, b) => b.priceSatang - a.priceSatang);
    
    default:
      return sorted;
  }
}