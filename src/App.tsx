import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { Categories } from './components/Categories';
import { ProductGrid } from './components/ProductGrid';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { cn } from './utils/cn';
import { products } from './data/products';
import { categories } from './data/categories';
import { sortProducts } from './lib/filters';

function AppContent() {
  const bestSellers = sortProducts(products, 'bestseller').slice(0, 8);
  const newArrivals = sortProducts(products, 'new').slice(0, 8);

  useEffect(() => {
    document.documentElement.className = cn(
      'min-h-full bg-[rgb(var(--bg))] text-[rgb(var(--fg))]',
      document.documentElement.className
    );
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      <Navbar />
      <main>
        <HeroSlider />
        <Categories categories={categories} />
        <ProductGrid 
          title="Best Sellers" 
          subtitle="Our most popular products loved by customers"
          products={bestSellers} 
        />
        <ProductGrid 
          title="New Arrivals" 
          subtitle="Fresh additions to our collection"
          products={newArrivals} 
        />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;