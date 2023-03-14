import PropTypes from "prop-types";

function Icon({ symbol, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox={symbol.viewBox}>
      <use xlinkHref={`#${symbol.id}`} />
    </svg>
  );
}

Icon.propTypes = {
  symbol: PropTypes.any,
  size: PropTypes.number
};

export default Icon;
