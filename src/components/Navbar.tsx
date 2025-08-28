import React, { useState, useEffect } from 'react';
import { HiOutlineHeart, HiOutlineShoppingBag, HiOutlineMagnifyingGlass, HiOutlineBars3 } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount] = useState(3); // Mock cart count

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[rgb(var(--bg)/0.75)] backdrop-blur-md supports-[backdrop-filter]:bg-[rgb(var(--bg)/0.55)] border-b border-white/10 dark:border-white/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-4 md:px-6 2xl:px-8 max-w-[1200px]">
        <div className="flex items-center justify-between h-16">
          {/* Left - Mobile menu */}
          <button 
            className="md:hidden p-2 rounded-lg text-[rgb(var(--fg))] hover:bg-[rgb(var(--card))] focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))]"
            aria-label="Open menu"
          >
            <HiOutlineBars3 className="w-6 h-6" />
          </button>

          {/* Center - Logo */}
          <motion.div 
            className="flex-1 flex justify-center md:flex-none"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <svg 
              viewBox="0 0 200 40" 
              className="h-8 w-auto text-[rgb(var(--fg))]"
              fill="currentColor"
            >
              <text 
                x="100" 
                y="28" 
                textAnchor="middle" 
                className="font-semibold text-lg tracking-tight"
                style={{ fontSize: '18px' }}
              >
                SuperBear
              </text>
            </svg>
          </motion.div>

          {/* Right - Actions */}
          <div className="flex items-center gap-2">
            <motion.button 
              className="p-2 rounded-lg text-[rgb(var(--fg))] hover:bg-[rgb(var(--card))] focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))] hidden sm:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search"
            >
              <HiOutlineMagnifyingGlass className="w-5 h-5" />
            </motion.button>

            <motion.button 
              className="p-2 rounded-lg text-[rgb(var(--fg))] hover:bg-[rgb(var(--card))] focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Wishlist"
            >
              <HiOutlineHeart className="w-5 h-5" />
            </motion.button>

            <motion.button 
              className="p-2 rounded-lg text-[rgb(var(--fg))] hover:bg-[rgb(var(--card))] focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))] relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <HiOutlineShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-[rgb(var(--acc))] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};