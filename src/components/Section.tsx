import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../utils/cn';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section 
      ref={ref}
      className={cn('py-12 md:py-16', className)}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-app">
        {(title || subtitle) && (
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            {title && (
              <motion.h2 
                className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-[rgb(var(--fg))] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-base leading-relaxed text-[rgb(var(--muted))] max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};