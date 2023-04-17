import ReactSelect, { components } from "react-select";
import PropTypes from "prop-types";
import Icon from "@components/shared/Icon/Icon.jsx";
import icons from "@components/shared/Icon/icons.js";
import { selectStyles } from "@components/shared/Select/selectGeneralStyles.js";

import "./Select.scss";

function Select({ options, placeholder, ...props }) {
  const SearchIcon = () => {
    return (
      <div className="select__dropdown-indicator">
        <Icon size={20} symbol={icons.arrowDown} />
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
    <ReactSelect
      options={options}
      hideSelectedOptions={false}
      placeholder={placeholder}
      styles={selectStyles}
      className={"select"}
      classNamePrefix="select"
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: DropdownIndicator
      }}
      {...props}
    />
  );
}

Select.propTypes = {
  hasError: PropTypes.bool,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string
};

export default Select;
