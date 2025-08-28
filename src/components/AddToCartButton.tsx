import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../store/cart';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  className = '' 
}) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      className={`py-2.5 px-4 border border-[rgb(var(--acc))] text-[rgb(var(--acc))] font-medium rounded-lg hover:bg-[rgb(var(--acc))] hover:text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))] focus-visible:ring-offset-2 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Add ${product.name} to cart`}
    >
      Add to Cart
    </motion.button>
  );
};