// src/components/ThemeToggle/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  const handleThemeChange = (event) => {
    toggleTheme(event.target.value);
  };

  return (
    <div style={{ marginLeft: '10px' }}>
      <label htmlFor="theme-select" style={{ marginRight: '5px' }}>Tema:</label>
      <select id="theme-select" onChange={handleThemeChange}>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
