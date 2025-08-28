import React from 'react';
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
  return (
    <section className={cn('py-12 md:py-16', className)}>
      <div className="container-app">
        {(title || subtitle) && (
          <div className="text-center mb-8 md:mb-12">
            {title && (
              <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-[rgb(var(--fg))] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base leading-relaxed text-[rgb(var(--muted))] max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};