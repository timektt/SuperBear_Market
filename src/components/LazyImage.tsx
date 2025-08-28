import React, { useState, useRef, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImageComponent: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlmYTZiMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentRef = imgRef.current;
    
    if (currentRef) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );
      
      observerRef.current.observe(currentRef);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Placeholder */}
      <motion.img
        src={placeholder}
        alt="Loading..."
        className="w-full h-full object-cover"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: isLoaded ? 'absolute' : 'static',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      
      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded && !hasError ? 1 : 0,
            scale: isLoaded && !hasError ? 1 : 1.1
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2
          }}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: 3 }}
        >
          Failed to load image
        </motion.div>
      )}
      
      {/* Loading shimmer effect */}
      {!isLoaded && !hasError && (
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
          style={{ zIndex: 4 }}
        />
      )}
    </div>
  );
};

export const LazyImage = memo(LazyImageComponent, (prevProps, nextProps) => {
  return prevProps.src === nextProps.src &&
         prevProps.alt === nextProps.alt &&
         prevProps.className === nextProps.className &&
         prevProps.placeholder === nextProps.placeholder;
});