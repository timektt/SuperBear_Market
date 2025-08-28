import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  headline: string;
  subheadline: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1456264/pexels-photo-1456264.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    headline: 'Premium Collection',
    subheadline: 'Discover our curated selection of luxury items',
    cta: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3962281/pexels-photo-3962281.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    headline: 'New Arrivals',
    subheadline: 'Fresh styles for the modern lifestyle',
    cta: 'Explore'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    headline: 'Seasonal Sale',
    subheadline: 'Up to 50% off selected items',
    cta: 'Shop Sale'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[52vh] md:h-[62vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 md:px-6 2xl:px-8 max-w-[1200px] pb-12 md:pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-4">
                {slides[currentSlide].headline}
                <span className="block w-20 h-0.5 bg-[rgb(var(--acc))] mt-4"></span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                {slides[currentSlide].subheadline}
              </p>
              <motion.button
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {slides[currentSlide].cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};