import { useContext } from "react";
import { ThemeContext } from "@providers/ThemeProvider.jsx";
import logo from "@images/logo.svg";
import logoDark from "@images/logo-dark.png";
import { Link } from "react-router-dom";
import routes from "@constants/routes.js";
import Nav from "./Nav/Nav.jsx";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher.jsx";
import "./Aside.scss";

function Aside() {
  const { theme } = useContext(ThemeContext);

  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__line">
          <div className="aside__logo">
            <Link className="aside__logo-link" to={routes.index}>
              <img
                className="aside__logo-img"
                src={theme === "light-theme" ? logo : logoDark}
                alt="logo"
              />
            </Link>
          </div>
          <div className="aside__theme-switcher">
            <ThemeSwitcher />
          </div>
        </div>

        <div className="aside__content">
          <h1 className="aside__title heading-primary">Welcome!!!</h1>
          <p className="aside__welcome">Are you fond of cats?</p>
          <p className="aside__paragraph">Lets start using The Cats API</p>
          <Nav />
        </div>
      </div>
    </aside>
  );
}

export default Aside;
