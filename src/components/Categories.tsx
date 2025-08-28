import React from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 245,
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 189,
  },
  {
    id: 3,
    name: 'Home & Living',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 167,
  },
  {
    id: 4,
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 134,
  },
  {
    id: 5,
    name: 'Beauty',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 98,
  },
  {
    id: 6,
    name: 'Books',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: 76,
  },
];

export const Categories: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[rgb(var(--card))]">
      <div className="container mx-auto px-4 md:px-6 2xl:px-8 max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[rgb(var(--fg))] mb-4">
            Shop by Category
          </h2>
          <p className="text-base leading-relaxed text-[rgb(var(--muted))] max-w-2xl mx-auto">
            Discover our curated collections across different categories
          </p>
        </div>

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
      </div>
    </section>
  );
};