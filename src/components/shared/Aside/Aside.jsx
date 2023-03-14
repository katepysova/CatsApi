import logo from "@images/logo.svg";
import { Link } from "react-router-dom";
import routes from "@constants/routes.js";
import Nav from "./Nav/Nav.jsx";
import "./Aside.scss";

function Aside() {
  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__logo">
          <Link className="aside__logo-link" to={routes.index}>
            <img className="aside__logo-img" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="aside__content">
          <h1 className="aside__title heading-primary">Hi intern!</h1>
          <p className="aside__welcome">Welcome to MSI 2021 Front-end test</p>
          <p className="aside__paragraph">Lets start using The Dogs API</p>
          <Nav />
        </div>
      </div>
    </aside>
  );
}

export default Aside;
