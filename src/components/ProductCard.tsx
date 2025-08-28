import React from 'react';
import { HiOutlineHeart, HiStar } from 'react-icons/hi2';
import { motion } from 'framer-motion';

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

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="group rounded-2xl overflow-hidden bg-[rgb(var(--card))] shadow-[0_8px_30px_var(--elev)] hover:shadow-[0_16px_40px_var(--elev)] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 text-xs font-medium bg-[rgb(var(--acc-2))] text-white rounded">
              New
            </span>
          )}
          {product.isOnSale && (
            <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <motion.button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-black transition-colors focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Add to wishlist"
        >
          <HiOutlineHeart className="w-5 h-5" />
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
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-semibold tracking-tight text-[rgb(var(--fg))]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-[rgb(var(--muted))] line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <motion.button
          className="w-full py-2.5 px-4 border border-[rgb(var(--acc))] text-[rgb(var(--acc))] font-medium rounded-lg hover:bg-[rgb(var(--acc))] hover:text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))] focus-visible:ring-offset-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};