import AsyncSelect from "@components/shared/AsyncSelect/AsyncSelect.jsx";
import PropTypes from "prop-types";
import Logger from "@common/logger.js";
import API from "@common/api.js";
import debounce from "lodash.debounce";

import { apiUrls } from "@constants/apiUrls.js";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import routes from "@constants/routes.js";

function ActionsLine({ initialSearchValue, onSearch }) {
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
    <div className="voting__actions-line actions-line">
      <AsyncSelect
        value={initialSearchValue || ""}
        onChange={(selectedOption) => {
          onSearch(selectedOption);
        }}
        loadOptions={loadOptions}
        placeholder={"Search for breeds by name"}
        className="actions-line__search"
      />
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
  initialSearchValue: PropTypes.any
};

export default ActionsLine;
