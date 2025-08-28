import React from 'react';
import { motion } from 'framer-motion';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden bg-[rgb(var(--card))] shadow-[0_8px_30px_var(--elev)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="p-4 space-y-3">
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
        </div>

        {/* Rating skeleton */}
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            ))}
          </div>
          <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse ml-1" />
        </div>

        {/* Price skeleton */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />

        {/* Button skeleton */}
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    </motion.div>
  );
};