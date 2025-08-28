import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Theme } from '../types';

export const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="px-3 py-2 text-sm rounded-lg bg-[rgb(var(--card))] text-[rgb(var(--fg))] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[rgb(var(--acc))] focus:border-transparent transition-colors"
      aria-label="Select theme"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
};