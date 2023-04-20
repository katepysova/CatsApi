import { useState } from "react";
import AsyncSelect from "@components/shared/Select/AsyncSelect/AsyncSelect.jsx";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { breedsSelector } from "@store/breeds/breeds.selectors.js";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import routes from "@constants/routes.js";
import { breakPoints } from "@constants/breakPoints.js";
import Modal from "@components/shared/Modal/Modal.jsx";
import Nav from "@components/shared/Aside/Nav/Nav.jsx";

import useGetWindowSize from "@hooks/useGetWindowSize.js";
import useWindowResize from "@hooks/useWindowResize.js";
import "./ActionsLine.scss";

function ActionsLine({ initialSearchValue, onSearch, withSearch }) {
  const breeds = useSelector(breedsSelector);

  const size = useGetWindowSize();
  const isLarge = size.width >= breakPoints.large;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOpen = () => {
    setIsModalOpen((state) => !state);
  };

  useWindowResize(() => setIsModalOpen(false));

  const filterOptions = (inputValue) => {
    return breeds?.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const loadOptions = (inputValue, callback) => {
    callback(filterOptions(inputValue));
  };

  return (
    <div className="actions-line">
      {withSearch && (
        <AsyncSelect
          value={initialSearchValue || ""}
          onChange={(selectedOption) => {
            onSearch(selectedOption);
          }}
          loadOptions={loadOptions}
          placeholder={"Search..."}
          className="actions-line__search"
        />
      )}

      <div className="actions-line__nav-buttons">
        {!isLarge && (
          <SquareButton
            className="actions-line__menu-btn"
            classType="primary"
            size="large"
            symbol={icons.burger}
            type="button"
            onClick={toggleOpen}
          />
        )}
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
        <SquareButton
          classType="secondary"
          size="large"
          symbol={icons.upload}
          isLink
          href={routes.uploads}
        />
      </div>
      <Modal isOpen={isModalOpen} handleClose={toggleOpen}>
        <div className="mobile-nav">
          <Nav />
        </div>
      </Modal>
    </div>
  );
}

ActionsLine.propTypes = {
  onSearch: PropTypes.func,
  initialSearchValue: PropTypes.any,
  renderComponent: PropTypes.func,
  withSearch: PropTypes.bool
};

export default ActionsLine;
