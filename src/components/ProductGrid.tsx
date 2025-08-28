import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { Section } from './Section';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  variant?: 'grid' | 'carousel';
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  subtitle, 
  products, 
  variant = 'grid' 
}) => {
  if (variant === 'carousel') {
    return (
      <Section title={title} subtitle={subtitle}>
        <div className="overflow-x-auto snap-x snap-mandatory -mx-4 px-4">
          <div className="flex gap-4 md:gap-6 pb-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-64 sm:w-72 snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section title={title} subtitle={subtitle}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
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
    </Section>
  );
};