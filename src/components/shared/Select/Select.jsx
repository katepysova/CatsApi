import ReactSelect from "react-select";
import PropTypes from "prop-types";
import { selectStyles } from "@components/shared/Select/selectStyles.js";

import "./Select.scss";

function Select({ options, placeholder, ...props }) {
  return (
    <ReactSelect
      options={options}
      hideSelectedOptions={false}
      placeholder={placeholder}
      styles={selectStyles}
      className={"react-select"}
      classNamePrefix="react-select"
      components={{
        IndicatorSeparator: () => null
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
