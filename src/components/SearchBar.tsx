import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMagnifyingGlass, HiXMark } from 'react-icons/hi2';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Search products...', 
  className = '' 
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      animate={{
        scale: isFocused ? 1.02 : 1,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="absolute left-3 top-1/2 -translate-y-1/2"
        animate={{
          scale: isFocused ? 1.1 : 1,
          color: isFocused ? 'rgb(var(--acc))' : 'rgb(var(--muted))',
          transition: { duration: 0.2 }
        }}
      >
        <HiOutlineMagnifyingGlass className="w-5 h-5" />
      </motion.div>
      
      <motion.input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full pl-10 pr-12 py-3 rounded-xl bg-[rgb(var(--card))] border border-gray-200 dark:border-gray-700 text-[rgb(var(--fg))] placeholder-[rgb(var(--muted))] focus:ring-2 focus:ring-[rgb(var(--acc))] focus:border-[rgb(var(--acc))] transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
        aria-label="Search products"
        whileFocus={{
          boxShadow: '0 0 0 3px rgba(var(--acc-rgb), 0.1)',
          transition: { duration: 0.2 }
        }}
      />
      
      <AnimatePresence>
        {query && (
          <motion.button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Clear search"
          >
            <HiXMark className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Search suggestions backdrop */}
      <AnimatePresence>
        {isFocused && query && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-[rgb(var(--card))] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-3 text-sm text-[rgb(var(--muted))]">
              Searching for "{query}"...
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );}
};