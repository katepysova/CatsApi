import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";
import Icon from "@components/shared/Icon/Icon.jsx";
import "./SquareButton.scss";

function SquareButton({ size, symbol, classType, isLink, href, ...props }) {
  return isLink ? (
    <Link
      to={href}
      className={cn("square-btn", `square-btn--${size}`, {
        [`square-btn--${classType}`]: size === "small"
      })}
      {...props}
    >
      <Icon symbol={symbol} />
    </Link>
  ) : (
    <button
      className={cn("square-btn", `square-btn--${size}`, {
        [`square-btn--${classType}`]: size === "small"
      })}
      {...props}
    >
      <Icon symbol={symbol} />
    </button>
  );
}

SquareButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]).isRequired,
  symbol: PropTypes.any,
  classType: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  isLink: PropTypes.bool,
  href: PropTypes.string
};

export default SquareButton;
