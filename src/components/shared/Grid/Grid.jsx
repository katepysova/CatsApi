import cn from "classnames";
import PropTypes from "prop-types";
import "./Grid.scss";

function Grid({ items, renderItem }) {
  const getGridItems = (items) => {
    const content = [];
    for (let i = 0; i < items.length; i += 5) {
      const row = [];
      for (let j = i; j < i + 5; j++) {
        row.push(items[j]);
      }
      content.push(row);
    }

    return content;
  };

  return (
    <div className="grid">
      {getGridItems(items).map((row, index) => (
        <div
          className={cn("grid__sub", {
            "grid__sub--even": index % 2 === 0,
            "grid__sub--odd": index % 2 !== 0
          })}
          key={index}
        >
          {row
            .filter((item) => item)
            .map((item, index) => (
              <div className={cn("grid__sub-item", `grid__sub-item--${index + 1}`)} key={index}>
                {renderItem && renderItem(item)}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
};

export default Grid;
