import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";
import Icon from "@components/shared/Icon/Icon.jsx";
import "./SquareButton.scss";

function SquareButton({ size, symbol, classType, className, isLink, href, ...props }) {
  return isLink ? (
    <Link
      to={href}
      className={cn(
        "square-btn",
        `square-btn--${size}`,
        {
          [`square-btn--${classType}`]: size === "small"
        },
        className
      )}
      {...props}
    >
      <Icon symbol={symbol} />
    </Link>
  ) : (
    <button
      className={cn(
        "square-btn",
        `square-btn--${size}`,
        {
          [`square-btn--${classType}`]: size === "small"
        },
        className
      )}
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
  className: PropTypes.string,
  isLink: PropTypes.bool,
  href: PropTypes.string
};

export default SquareButton;
