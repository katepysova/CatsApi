import { useNavigate } from "react-router-dom";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import PropTypes from "prop-types";

import "./PageControls.scss";

function PageControls({ pageTitle }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="page-controls">
      <SquareButton symbol={icons.arrowLeft} classType="primary" size="small" onClick={goBack} />
      <div className="page-controls__title u-center">{pageTitle}</div>
    </div>
  );
}

PageControls.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default PageControls;
