import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "@components/shared/Icon/Icon.jsx";
import "./SquareButton.scss";

function SquareButton({ size, symbol, classType }) {
  return (
    <button
      className={cn("square-btn", `square-btn--${size}`, {
        [`square-btn--${classType}`]: size === "small"
      })}
    >
      <Icon symbol={symbol} />
    </button>
  );
}

SquareButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]).isRequired,
  symbol: PropTypes.any,
  classType: PropTypes.oneOf(["primary", "secondary"]).isRequired
};

export default SquareButton;
