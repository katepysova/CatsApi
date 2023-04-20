import { Link } from "react-router-dom";
import { useContext } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { ThemeContext } from "@providers/ThemeProvider.jsx";
import logo from "@images/logo.svg";
import logoDark from "@images/logo-dark.png";
import routes from "@constants/routes.js";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher.jsx";
import "./Header.scss";

function Header({ className }) {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={cn("header", className)}>
      <div className="header__line">
        <div className="header__logo">
          <Link className="header__logo-link" to={routes.index}>
            <img
              className="header__logo-img"
              src={theme === "light-theme" ? logo : logoDark}
              alt="logo"
            />
          </Link>
        </div>
        <div className="header__theme-switcher">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
