import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 2xl:px-8 max-w-[1200px]">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[rgb(var(--fg))] mb-6">
            Stay Updated
          </h2>
          <p className="text-base leading-relaxed text-[rgb(var(--muted))] mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive offers, and special events.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-[rgb(var(--card))] border border-gray-300 dark:border-gray-700 text-[rgb(var(--fg))] placeholder-[rgb(var(--muted))] focus:ring-2 focus:ring-[rgb(var(--acc))] focus:border-transparent"
              required
            />
            <motion.button
              type="submit"
              className="px-8 py-3 bg-[rgb(var(--acc))] text-white font-medium rounded-lg hover:bg-[rgb(var(--acc))] hover:opacity-90 focus:ring-2 focus:ring-[rgb(var(--acc))] focus:ring-offset-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};