import AsyncSelect from "@components/shared/AsyncSelect/AsyncSelect.jsx";
import PropTypes from "prop-types";
import Logger from "@common/logger.js";
import API from "@common/api.js";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { apiUrls } from "@constants/apiUrls.js";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import routes from "@constants/routes.js";

import "./ActionsLine.scss";

function ActionsLine({ initialSearchValue, onSearch, isSearchPage }) {
  const mapOptionsToValues = (options) => {
    return options.map((option) => ({
      value: option.id,
      label: option.name
    }));
  };

  const loadOptions = debounce((inputValue, callback) => {
    API.get(apiUrls.breeds)
      .then((response) => response.data)
      .then((breedsData) => {
        const formattedBreeds = mapOptionsToValues(breedsData);
        const filterOptions = (inputValue) => {
          return formattedBreeds.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
          );
        };
        callback(filterOptions(inputValue));
      })
      .catch((error) => Logger.error(error));
  }, 300);

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
