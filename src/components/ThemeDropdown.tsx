import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Theme } from '../types';

export const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <motion.select
      value={theme}
      onChange={handleChange}
      className="px-3 py-2 text-sm rounded-lg bg-[rgb(var(--card))] text-[rgb(var(--fg))] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[rgb(var(--acc))] focus:border-transparent transition-all duration-200 cursor-pointer"
      whileHover={{ scale: 1.02, borderColor: 'rgb(var(--acc))' }}
      whileFocus={{ scale: 1.02, borderColor: 'rgb(var(--acc))' }}
      whileTap={{ scale: 0.98 }}
      aria-label="Select theme"
    >
      <option value="light">🌞 Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="system">💻 System</option>
    </motion.select>
  );
};