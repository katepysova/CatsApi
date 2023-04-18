import PropTypes from "prop-types";
import cn from "classnames";
import Loader from "@components/shared/Loader/Loader.jsx";
import "./LoaderContainer.scss";

function LoaderContainer({ className }) {
  return (
    <div className={cn("loader-container", className)}>
      <Loader size="large" />
    </div>
  );
}

LoaderContainer.propTypes = {
  className: PropTypes.string
};

export default LoaderContainer;
