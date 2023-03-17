import PropTypes from "prop-types";
import "./EmptyState.scss";

function EmptyState({ message = "No items found" }) {
  return <p className="empty-state">{message}</p>;
}

EmptyState.propTypes = {
  message: PropTypes.string
};

export default EmptyState;
