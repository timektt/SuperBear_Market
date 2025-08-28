import React, { useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi2';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[rgb(var(--card))] border-t border-gray-200 dark:border-gray-800">
      <div className="container-app py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <svg 
                viewBox="0 0 200 40" 
                className="h-8 w-auto text-[rgb(var(--fg))]"
                fill="currentColor"
              >
                <text 
                  x="100" 
                  y="28" 
                  textAnchor="middle" 
                  className="font-semibold text-lg tracking-tight"
                  style={{ fontSize: '18px' }}
                >
                  SuperBear
                </text>
              </svg>
            </div>
            <p className="text-[rgb(var(--muted))] text-sm leading-relaxed">
              Curating premium products for the modern lifestyle. Quality, style, and innovation in every piece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[rgb(var(--fg))] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Contact', 'FAQ', 'Size Guide', 'Returns'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[rgb(var(--fg))] mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Beauty'].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-[rgb(var(--fg))] mb-4">Newsletter</h3>
            <p className="text-sm text-[rgb(var(--muted))] mb-4">
              Subscribe for updates and exclusive offers
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm rounded-lg bg-[rgb(var(--bg))] border border-gray-300 dark:border-gray-700 text-[rgb(var(--fg))] placeholder-[rgb(var(--muted))] focus:ring-2 focus:ring-[rgb(var(--acc))] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-sm bg-[rgb(var(--acc))] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[rgb(var(--muted))] flex items-center gap-1">
            Made with <HiOutlineHeart className="w-4 h-4 text-red-500" /> by SuperBear Team
          </p>
          <p className="text-sm text-[rgb(var(--muted))]">
            © 2025 SuperBear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};