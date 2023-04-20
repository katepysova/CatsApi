import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import fileImage from "@images/file.png";
import "./DragAndDropFile.scss";

function DragAndDropFile({ handleFileUpdate }) {
  const [isDragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragActive(false);
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    setDragActive(false);
    const newFile = event.target.files[0];

    if (newFile && newFile.type.match("image.*")) {
      setFile(newFile);
      handleFileUpdate(newFile);
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const newFile = event.dataTransfer.files[0];

    if (newFile && newFile.type.match("image.*")) {
      setFile(newFile);
      handleFileUpdate(newFile);
    }
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFile("");
    handleFileUpdate("");
  };

  return (
    <div className="drag-and-drop__container">
      <div
        className={cn("drag-and-drop", { "drag-and-drop--active": isDragActive })}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleFileDrop}
      >
        <input
          className="drag-and-drop__input"
          type="file"
          id="input-file-upload"
          multiple={false}
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
        />
        <label className="drag-and-drop__label" id="label-file-upload" htmlFor="input-file-upload">
          <img src={fileImage} alt="file" />
          {file && (
            <div className="drag-and-drop__preview">
              <figure className="drag-and-drop__photo">
                <img src={URL.createObjectURL(file)} alt="cat" />
                <SquareButton
                  className="drag-and-drop__delete-btn"
                  onClick={handleDeleteClick}
                  symbol={icons.cross}
                  size="small"
                  classType="secondary"
                  type="button"
                />
              </figure>
            </div>
          )}
          <p className="drag-and-drop__text">
            <span>Drag here </span>your file or <span>Click here</span> to upload
          </p>
        </label>
      </div>

      <p className="drag-and-drop__file-name u-center">
        {file ? `Image File Name: ${file?.name}` : "No file selected"}
      </p>
    </div>
  );
}

DragAndDropFile.propTypes = {
  handleFileUpdate: PropTypes.func.isRequired
};

export default DragAndDropFile;
