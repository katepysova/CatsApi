export const selectStyles = {
  control: (styles, state) => ({
    ...styles,
    height: 60,
    minHeight: 60,
    boxShadow: null,
    borderType: "solid",
    borderWidth: "2px",
    padding: "8px 10px 8px 20px",
    borderRadius: "20px",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s",

    "&:hover": {
      borderColor: "#FBE0DC"
    },

    "&:active": {
      borderColor: "#FF868E"
    },

    "&:focus": {
      outLine: "none"
    }
  }),
  valueContainer: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    paddingRight: 35
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    fontSize: 20
  }),
  singleValue: (base) => ({
    ...base,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    margin: 0,
    padding: 0
  }),
  placeholder: (base) => ({
    ...base,
    color: "#8C8C8C",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    margin: 0,
    padding: 0
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: 40,
    padding: 0
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: 0
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 40,
    borderType: "solid",
    borderWidth: "2px",
    overflow: "hidden",
    borderRadius: "30px",
    border: "none",
    boxShadow: "none",
    padding: "15px 0"
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    maxHeight: 200
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: 16,
    position: "relative",
    fontWeight: 400,
    color: state.isSelected ? "#FF868E" : "#8C8C8C",
    padding: "5px 20px",
    cursor: "pointer"
  })
};
