import React from 'react';
import { HiOutlineSun, HiOutlineMoon, HiOutlineComputerDesktop } from 'react-icons/hi2';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <HiOutlineSun className="w-5 h-5" />;
      case 'dark':
        return <HiOutlineMoon className="w-5 h-5" />;
      default:
        return <HiOutlineComputerDesktop className="w-5 h-5" />;
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[rgb(var(--card))] text-[rgb(var(--fg))] hover:bg-[rgb(var(--muted)/0.2)] focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
    >
      {getIcon()}
    </motion.button>
  );
};