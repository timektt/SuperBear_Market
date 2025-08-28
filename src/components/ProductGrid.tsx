import React, { useState, memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { Product } from '../types';
import { Section } from './Section';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  variant?: 'grid' | 'carousel';
  loading?: boolean;
  skeletonCount?: number;
}

const ProductGridComponent: React.FC<ProductGridProps> = ({ 
  title, 
  subtitle, 
  products, 
  variant = 'grid',
  loading = false,
  skeletonCount = 8
}) => {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }), []);
  if (variant === 'carousel') {
    return (
      <Section title={title} subtitle={subtitle}>
        <div className="overflow-x-auto snap-x snap-mandatory -mx-4 px-4">
          <motion.div 
            className="flex gap-4 md:gap-6 pb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {loading ? (
          [...Array(skeletonCount)].map((_, index) => (
            <motion.div
              key={`skeleton-${index}`}
              className="flex-none w-64 sm:w-72 snap-start"
              variants={itemVariants}
            >
              <ProductCardSkeleton />
            </motion.div>
          ))
        ) : (
          products.map((product) => (
            <motion.div
              key={product.id}
              className="flex-none w-64 sm:w-72 snap-start"
              variants={itemVariants}
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        )}
          </motion.div>
        </div>
      </Section>
    );
  }

  return (
    <Section title={title} subtitle={subtitle}>
      <motion.div 
        className="grid-mobile"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {loading ? (
          [...Array(skeletonCount)].map((_, index) => (
            <motion.div
              key={`skeleton-${index}`}
              variants={itemVariants}
            >
              <ProductCardSkeleton />
            </motion.div>
          ))
        ) : (
          products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        )}
      </motion.div>
    </Section>
  );
};

export const ProductGrid = memo(ProductGridComponent, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title &&
         prevProps.subtitle === nextProps.subtitle &&
         prevProps.variant === nextProps.variant &&
         prevProps.loading === nextProps.loading &&
         prevProps.skeletonCount === nextProps.skeletonCount &&
         prevProps.products.length === nextProps.products.length &&
         prevProps.products.every((product, index) => 
           product.id === nextProps.products[index]?.id
         );
});