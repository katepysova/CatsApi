import React from "react";
import PropTypes from "prop-types";

import ReactAsyncSelect from "react-select/async";
import { components } from "react-select";
import Icon from "@components/shared/Icon/Icon.jsx";
import icons from "@components/shared/Icon/icons.js";
import { selectStyles } from "../selectGeneralStyles.js";

function AsyncSelect({
  loadOptions,
  placeholder = "Select...",
  loadingMessage = "Loading...",
  noOptionsMessage = "No options found...",
  ...props
}) {
  const SearchIcon = () => {
    return (
      <div className="async-select__search">
        <Icon size={20} symbol={icons.search} />
      </div>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <SearchIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <ReactAsyncSelect
      cacheOptions={true}
      hideSelectedOptions={false}
      closeMenuOnSelect={true}
      placeholder={placeholder}
      loadOptions={loadOptions}
      className="async-select"
      classNamePrefix="async-select"
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator
      }}
      loadingMessage={() => loadingMessage}
      noOptionsMessage={() => noOptionsMessage}
      styles={selectStyles}
      {...props}
    />
  );
}

AsyncSelect.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  loadingMessage: PropTypes.string,
  noOptionsMessage: PropTypes.string,
  loadOptions: PropTypes.any
};

export default AsyncSelect;
