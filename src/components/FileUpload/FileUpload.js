import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = ({ onFileChange, selectedFile, fileSize, previewUrl, onFileRemove }) => {
  const handleFileInputClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div className="upload-box">
      <i className="bi bi-cloud-upload upload-icon" onClick={handleFileInputClick}></i>
      <input
        type="file"
        id="file-input"
        onChange={onFileChange}
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
      />
      <label onClick={handleFileInputClick}>
        {selectedFile ? selectedFile : "Choose the satellite image"}
      </label>
      {fileSize && <p>File Size: {fileSize}</p>}
      <p>Supported formats: JPG, PNG (max 22MB)</p>

      {previewUrl && (
        <div className="image-preview">
          <img src={previewUrl} alt="Preview" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
          <i className="bi bi-x-circle-fill remove-icon" onClick={onFileRemove}></i>
        </div>
      )}
    </div>
  );
};

export default FileUpload;