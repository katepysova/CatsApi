import PropTypes from "prop-types";
import cn from "classnames";
import "./Loader.scss";

function Loader({ className, size }) {
  return <div className={cn("loader", `loader--${size}`, className)}></div>;
}

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]).isRequired
};

export default Loader;
