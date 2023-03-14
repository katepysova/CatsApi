import { NavLink } from "react-router-dom";
import cn from "classnames";
import votingImg from "@images/vote-table.png";
import petBreedsImg from "@images/pet-breeds.png";
import searchImg from "@images/images-search.png";
import routes from "@constants/routes.js";
import "./Nav.scss";

const navItems = [
  {
    href: routes.voting,
    image: { img: votingImg, alt: "voting" },
    text: "Voting"
  },
  {
    href: routes.breeds,
    image: { img: petBreedsImg, alt: "breeds" },
    text: "Breeds"
  },
  {
    href: routes.gallery,
    image: { img: searchImg, alt: "gallery" },
    text: "Gallery"
  }
];

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item, index) => (
          <li className="nav__item" key={item.href}>
            <NavLink
              className={({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link")}
              to={item.href}
            >
              <div className={cn("nav__card", `nav__card--${index + 1}`)}>
                <div className="nav__card-image">
                  <img src={item.image.img} alt={item.image.alt} />
                </div>
                <p className="nav__card-text u-center">{item.text}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
