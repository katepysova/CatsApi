import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import Icon from "@components/shared/Icon/Icon.jsx";
import "./SquareButton.scss";

function SquareButton({ size, symbol, classType, className, isLink, href, ...props }) {
  const currentClass = (className, isActive) =>
    cn(
      "square-btn",
      { "square-btn--active": isActive },
      `square-btn--${size}`,
      {
        [`square-btn--${classType}`]: size === "small"
      },
      className
    );

  return isLink ? (
    <NavLink to={href} className={({ isActive }) => currentClass(className, isActive)} {...props}>
      <Icon symbol={symbol} />
    </NavLink>
  ) : (
    <button className={currentClass(className)} {...props}>
      <Icon symbol={symbol} />
    </button>
  );
}

SquareButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]).isRequired,
  symbol: PropTypes.any,
  classType: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  className: PropTypes.string,
  isLink: PropTypes.bool,
  href: PropTypes.string
};

export default SquareButton;
