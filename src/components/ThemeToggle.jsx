import React from 'react';

const ThemeToggle = ({ isDarkTheme, onToggle }) => {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      <span>{isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
    </button>
  );
};

export default ThemeToggle;
