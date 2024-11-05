// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

const themes = {
  light: {
    background: "#ffffff",
    color: "#000000"
  },
  dark: {
    background: "#000000",
    color: "#ffffff"
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
