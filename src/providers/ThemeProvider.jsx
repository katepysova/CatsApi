import React, { useEffect, createContext, useState } from "react";
import LocalStorage from "@common/localStorage.js";
import PropTypes from "prop-types";

const THEME_KEY = "theme";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = LocalStorage.getItem(THEME_KEY);
  // Default theme is taken as dark-theme
  if (!theme) {
    LocalStorage.setItem(THEME_KEY, "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      LocalStorage.setItem(THEME_KEY, theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any
};

export { ThemeContext, ThemeProvider };
