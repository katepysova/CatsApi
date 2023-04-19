import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import fileImage from "@images/file.png";
import "./DragAndDropFile.scss";

function DragAndDropFile({ handleFileUpdate }) {
  const [dragActive, setDragActive] = useState(false);

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

    if (newFile) {
      handleFileUpdate(newFile);
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const newFile = event.dataTransfer.files[0];

    if (newFile) {
      handleFileUpdate(newFile);
    }
  };

  return (
    <div
      className={cn("drag-and-drop", { "drag-and-drop--active": dragActive })}
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
      />
      <label className="drag-and-drop__label" id="label-file-upload" htmlFor="input-file-upload">
        <img src={fileImage} alt="file" />
        <p className="drag-and-drop__text">
          <span>Drag here </span>your file or <span>Click here</span> to upload
        </p>
      </label>
    </div>
  );
}

DragAndDropFile.propTypes = {
  handleFileUpdate: PropTypes.func.isRequired
};

export default DragAndDropFile;
