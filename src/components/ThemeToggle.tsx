'use client';

import { useState } from 'react';
import '../styles/themeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Initialize theme from localStorage or system preference (client-side only)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) return savedTheme;
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
        </svg>
      ) : (
        <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,17.5A5.5,5.5,0,1,1,17.5,12,5.51,5.51,0,0,1,12,17.5Zm0-9A3.5,3.5,0,1,0,15.5,12,3.5,3.5,0,0,0,12,8.5ZM12,3a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V2A1,1,0,0,0,12,3ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4,11H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2ZM12,21a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V22A1,1,0,0,0,12,21ZM18.36,17.64a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM6.05,6.05a1,1,0,0,0,.7-.29l.71-.71A1,1,0,0,0,6.05,3.64L5.34,4.34a1,1,0,0,0,0,1.41A1,1,0,0,0,6.05,6.05ZM6.76,17.64l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0-1.41-1.41ZM19.66,5.34l-.71-.71a1,1,0,0,0-1.41,1.41l.71.71a1,1,0,0,0,1.41,0A1,1,0,0,0,19.66,5.34Z"/>
        </svg>
      )}
    </button>
  );
}
