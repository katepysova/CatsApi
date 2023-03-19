import PropTypes from "prop-types";
import cn from "classnames";
import "./Card.scss";

function Card({ item, withHover, renderCardHover }) {
  return (
    <div className={cn("card", { "card--with-hover": withHover })}>
      <figure className="card__image">
        <img src={item.url} alt="cat" />
      </figure>
      {withHover && <div className="card__hover">{renderCardHover && renderCardHover()}</div>}
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  withHover: PropTypes.bool,
  renderCardHover: PropTypes.func
};

export default Card;
