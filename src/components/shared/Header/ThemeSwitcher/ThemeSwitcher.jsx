import React, { useContext } from "react";
import { ThemeContext } from "@providers/ThemeProvider.jsx";
import Icon from "@components/shared/Icon/Icon.jsx";
import icons from "@components/shared/Icon/icons.js";
import "./ThemeSwitcher.scss";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="switch__container">
      <span className="switch__indicator">
        <Icon symbol={theme === "light-theme" ? icons.eyeOpen : icons.eyeClose} size={16} />
      </span>
      <label className="switch" htmlFor="switch__slider">
        <input
          checked={theme === "light-theme"}
          onChange={toggleTheme}
          className="switch__slider"
          id="switch__slider"
          type="checkbox"
        />
        <span className="switch__circle"></span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
