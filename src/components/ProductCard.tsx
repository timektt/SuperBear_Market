import React, { memo } from 'react';
import { HiOutlineHeart, HiStar } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { formatTHB } from '../utils/format';
import { AddToCartButton } from './AddToCartButton';
import { LazyImage } from './LazyImage';

interface ProductCardProps {
  product: Product;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product }) => {
  const isNew = new Date(product.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days
  const isOnSale = product.salesCount > 1000; // Mock sale logic

  return (
    <motion.div
      className="group rounded-2xl overflow-hidden bg-[rgb(var(--card))] shadow-[0_8px_30px_var(--elev)] hover:shadow-[0_20px_50px_var(--elev)] transition-all duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
          <LazyImage
            src={product.image}
            alt={product.name}
            className="w-full h-full"
          />
          <motion.div 
            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-2 py-1 text-xs font-medium bg-[rgb(var(--acc-2))] text-white rounded">
              New
            </span>
          )}
          {isOnSale && (
            <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <motion.button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-black hover:text-red-500 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))] backdrop-blur-sm"
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Add to wishlist"
        >
          <motion.div
            whileHover={{ 
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
          >
            <HiOutlineHeart className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-[rgb(var(--fg))] mb-2 line-clamp-2 leading-5">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <HiStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[rgb(var(--muted))] ml-1">
            ({product.salesCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-semibold tracking-tight text-[rgb(var(--acc))]">
            {formatTHB(product.priceSatang)}
          </span>
        </div>

        {/* Add to cart button */}
        <AddToCartButton product={product} className="w-full" />
      </div>
    </motion.div>
  );
};

export const ProductCard = memo(ProductCardComponent, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id &&
         prevProps.product.priceSatang === nextProps.product.priceSatang &&
         prevProps.product.name === nextProps.product.name;
});