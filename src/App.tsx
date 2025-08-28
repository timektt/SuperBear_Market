import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { Categories } from './components/Categories';
import { ProductGrid } from './components/ProductGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { cn } from './utils/cn';

function AppContent() {
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
        <Categories />
        <ProductGrid title="Featured Products" />
        <Newsletter />
      </main>
      <Footer />
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