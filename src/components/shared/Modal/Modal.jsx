import React, { useContext } from "react";
import ReactModal from "react-modal";
import cn from "classnames";
import PropTypes from "prop-types";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import { ThemeContext } from "@providers/ThemeProvider.jsx";
import "./Modal.scss";

function Modal({ isOpen, handleClose, children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ReactModal
      portalClassName={cn("modal", {
        "modal--dark": theme === "dark-theme"
      })}
      className="modal__container"
      overlayClassName="modal__overlay"
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
    >
      <SquareButton
        className="modal__close-btn"
        classType="primary"
        size="small"
        symbol={icons.cross}
        onClick={handleClose}
        type="button"
      />
      <div className="modal__content">{children}</div>
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};

export default Modal;
