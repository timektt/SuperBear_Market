import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash, HiXMark, HiCheckCircle } from 'react-icons/hi2';
import { useCart } from '../store/cart';
import { formatTHB } from '../utils/format';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, setIsOpen, setQty, removeItem, subtotal, clearAutoCloseTimeout } = useCart();
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [previousItemCount, setPreviousItemCount] = useState(items.length);

  useEffect(() => {
    if (items.length > previousItemCount && isOpen) {
      setShowAddedMessage(true);
      const timer = setTimeout(() => setShowAddedMessage(false), 2000);
      return () => clearTimeout(timer);
    }
    setPreviousItemCount(items.length);
  }, [items.length, isOpen, previousItemCount]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-title"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 dark:bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Drawer */}
          <motion.div
            className="relative w-full max-w-md bg-[rgb(var(--bg))] shadow-xl flex flex-col h-full"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onMouseEnter={clearAutoCloseTimeout}
            onFocus={clearAutoCloseTimeout}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <h2 id="cart-title" className="text-lg font-semibold text-[rgb(var(--fg))]">
                  Shopping Cart ({items.length})
                </h2>
                <AnimatePresence>
                  {showAddedMessage && (
                    <motion.div
                      className="flex items-center gap-1 text-green-600 dark:text-green-400"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiCheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Added!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--card))] transition-colors"
                aria-label="Close cart"
              >
                <HiXMark className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-[rgb(var(--muted))] mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 bg-[rgb(var(--acc))] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Auto-close notification */}
                  <motion.div
                    className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                      🛒 Cart will auto-close in 3 seconds. Hover to keep it open!
                    </p>
                  </motion.div>
                  <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.productId} className="flex gap-4 p-4 bg-[rgb(var(--card))] rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-[rgb(var(--fg))] line-clamp-2 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm font-semibold text-[rgb(var(--acc))] mb-2">
                          {formatTHB(item.priceSatang)}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setQty(item.productId, item.qty - 1)}
                            className="p-1 rounded text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--bg))] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <HiOutlineMinus className="w-4 h-4" />
                          </button>
                          <span className="px-2 py-1 text-sm font-medium text-[rgb(var(--fg))] min-w-[2rem] text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => setQty(item.productId, item.qty + 1)}
                            className="p-1 rounded text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--bg))] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <HiOutlinePlus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="p-1 rounded text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors ml-2"
                            aria-label="Remove item"
                          >
                            <HiOutlineTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[rgb(var(--fg))]">
                    Subtotal:
                  </span>
                  <span className="text-lg font-semibold text-[rgb(var(--acc))]">
                    {formatTHB(subtotal())}
                  </span>
                </div>
                <button className="w-full py-3 bg-[rgb(var(--acc))] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};