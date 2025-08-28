import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types';
import { Section } from './Section';

interface CategoriesProps {
  categories: Category[];
}

export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <Section 
      title="Shop by Category" 
      subtitle="Discover our curated collections across different categories"
      className="bg-[rgb(var(--card))]"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-[0_8px_30px_var(--elev)] hover:shadow-[0_16px_40px_var(--elev)] transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
              <p className="text-sm text-white/80">{category.count} items</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};