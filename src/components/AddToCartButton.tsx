import React, { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingCart, HiCheck } from 'react-icons/hi2';
import { Product } from '../types';
import { useCart } from '../store/cart';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButtonComponent: React.FC<AddToCartButtonProps> = ({ 
  product, 
  className = '' 
}) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = useCallback(() => {
    addItem(product);
    setIsAdded(true);
    
    // Haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    setTimeout(() => setIsAdded(false), 2000);
  }, [addItem, product]);

  return (
    <motion.button
      onClick={handleAddToCart}
      className={`relative py-2.5 px-4 border border-[rgb(var(--acc))] text-[rgb(var(--acc))] font-medium rounded-lg hover:bg-[rgb(var(--acc))] hover:text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))] focus-visible:ring-offset-2 overflow-hidden ${className} ${isAdded ? 'bg-green-500 border-green-500 text-white' : ''}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 8px 25px rgba(var(--acc-rgb), 0.3)',
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0,
        transition: { duration: 0.1 }
      }}
      animate={isAdded ? {
        scale: [1, 1.1, 1],
        boxShadow: [
          '0 4px 15px rgba(34, 197, 94, 0.2)',
          '0 8px 30px rgba(34, 197, 94, 0.4)',
          '0 4px 15px rgba(34, 197, 94, 0.2)'
        ],
        transition: { duration: 0.6 }
      } : {}}
      aria-label={`Add ${product.name} to cart`}
    >
      <motion.div 
        className="flex items-center justify-center gap-2"
        layout
      >
        <AnimatePresence mode="wait">
          {isAdded ? (
            <motion.div
              key="added"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center gap-2"
            >
              <HiCheck className="w-4 h-4" />
              Added!
            </motion.div>
          ) : (
            <motion.div
                key="add"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <HiOutlineShoppingCart className="w-4 h-4" />
                </motion.div>
                Add to Cart
              </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Success ripple effect */}
      <motion.div
        className="absolute inset-0 bg-green-400/30 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={isAdded ? {
          scale: [0, 2],
          opacity: [0.6, 0],
          transition: { duration: 0.8, ease: 'easeOut' }
        } : {}}
      />
      
      {/* Confetti particles */}
      <AnimatePresence>
        {isAdded && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 60],
                  y: [0, (Math.random() - 0.5) * 60],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: 'easeOut'
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export const AddToCartButton = memo(AddToCartButtonComponent, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id &&
         prevProps.className === nextProps.className;
});