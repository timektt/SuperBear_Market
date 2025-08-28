import React, { useState, useEffect } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Search products...', 
  className = '' 
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);

  return (
    <div className={`relative ${className}`}>
      <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--muted))]" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-[rgb(var(--card))] border border-gray-300 dark:border-gray-700 text-[rgb(var(--fg))] placeholder-[rgb(var(--muted))] focus:ring-2 focus:ring-[rgb(var(--acc))] focus:border-transparent transition-colors"
        aria-label="Search products"
      />
    </div>
  );
};