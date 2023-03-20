import AsyncSelect from "@components/shared/AsyncSelect/AsyncSelect.jsx";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { breedsSelector } from "@store/breeds/breeds.selectors.js";
import { Link } from "react-router-dom";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import routes from "@constants/routes.js";

import "./ActionsLine.scss";

function ActionsLine({ initialSearchValue, onSearch, isSearchPage }) {
  const breeds = useSelector(breedsSelector);

  const filterOptions = (inputValue) => {
    return breeds?.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const loadOptions = (inputValue, callback) => {
    callback(filterOptions(inputValue));
  };

  return (
    <div className="actions-line">
      {isSearchPage ? (
        <AsyncSelect
          value={initialSearchValue || ""}
          onChange={(selectedOption) => {
            onSearch(selectedOption);
          }}
          loadOptions={loadOptions}
          placeholder={"Search for breeds by name"}
          className="actions-line__search"
        />
      ) : (
        <Link className="actions-line__search-nav" to={routes.search}>
          Got to the Search Page
        </Link>
      )}

      <div className="actions-line__nav-buttons">
        <SquareButton
          classType="primary"
          size="large"
          symbol={icons.smile}
          isLink
          href={routes.likes}
        />
        <SquareButton
          classType="secondary"
          size="large"
          symbol={icons.heartOutline}
          isLink
          href={routes.favourites}
        />
        <SquareButton
          classType="secondary"
          size="large"
          symbol={icons.sad}
          isLink
          href={routes.dislikes}
        />
      </div>
    </div>
  );
}

ActionsLine.propTypes = {
  onSearch: PropTypes.func,
  initialSearchValue: PropTypes.any,
  renderComponent: PropTypes.func,
  isSearchPage: PropTypes.bool
};

export default ActionsLine;
