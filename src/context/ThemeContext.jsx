import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [ambientIntensity, setAmbientIntensity] = useState(0.5);

  return (
    <ThemeContext.Provider value={{ activeSection, setActiveSection, ambientIntensity, setAmbientIntensity }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
