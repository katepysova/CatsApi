import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "@components/shared/Icon/Icon.jsx";
import Loader from "@components/shared/Loader/Loader.jsx";
import "./Button.scss";

function Button({ type, classType, text, isLoading, icon, className, ...props }) {
  return (
    <button
      className={cn("btn", `btn--${classType}`, { "btn--with-loader": isLoading }, className)}
      type={type}
      {...props}
    >
      {isLoading && <Loader size="small" className="btn--loader" />}
      {icon && <Icon size={18} symbol={icon} />} <span className="btn__text">{text}</span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  classType: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  icon: PropTypes.any
};

export default Button;
