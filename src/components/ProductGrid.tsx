import React from 'react';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isOnSale?: boolean;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 124,
    isOnSale: true,
  },
  {
    id: 2,
    name: 'Minimalist Watch Collection',
    price: 199,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 89,
    isNew: true,
  },
  {
    id: 3,
    name: 'Luxury Leather Backpack',
    price: 459,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 67,
  },
  {
    id: 4,
    name: 'Smart Fitness Tracker',
    price: 149,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    reviews: 203,
    isOnSale: true,
  },
  {
    id: 5,
    name: 'Artisan Coffee Maker',
    price: 349,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 6,
    name: 'Designer Sunglasses',
    price: 259,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    reviews: 94,
    isNew: true,
  },
  {
    id: 7,
    name: 'Premium Sneakers',
    price: 189,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 178,
    isOnSale: true,
  },
  {
    id: 8,
    name: 'Wireless Charging Stand',
    price: 79,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    reviews: 67,
  },
];

interface ProductGridProps {
  title?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ title = 'Featured Products' }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 2xl:px-8 max-w-[1200px]">
        <h2 className="text-xl md:text-2xl font-semibold text-[rgb(var(--fg))] mb-8 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product, index) => (
            <div
              key={product.id}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};