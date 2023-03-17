import PropTypes from "prop-types";
import "./Card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <figure className="card__image">
        <img src={item.url} alt="cat" />
      </figure>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired
};

export default Card;
