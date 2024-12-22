import React from "react";

const FileUpload = ({ onFileChange, selectedFile, fileSize, previewUrl, onFileRemove }) => {
  const handleFileInputClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div
      style={{
        width: "725px",
        height: "300px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: "20px",
        cursor: "pointer",
        textAlign: "center",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
        border: "1px solid transparent",
      }}
      onMouseOver={(e) => (e.currentTarget.style.borderColor = "#007bff")}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = "transparent")}
    >
      <i
        className="bi bi-cloud-upload"
        style={{
          fontSize: "30px",
          color: "#007bff",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onClick={handleFileInputClick}
        onMouseOver={(e) => (e.currentTarget.style.color = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.color = "#007bff")}
      ></i>
      <input
        type="file"
        id="file-input"
        onChange={onFileChange}
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
      />
      <label
        onClick={handleFileInputClick}
        style={{
          fontSize: "16px",
          color: "#333",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {selectedFile ? selectedFile : "Choose the satellite image"}
      </label>
      {fileSize && <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>File Size: {fileSize}</p>}
      <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Supported formats: JPG, PNG (max 22MB)</p>

      {previewUrl && (
        <div
          style={{
            marginTop: "20px",
            position: "relative",
          }}
        >
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <i
            className="bi bi-x-circle-fill"
            style={{
              position: "absolute",
              top: "1px",
              right: "1px",
              fontSize: "20px",
              color: "#f44336",
              cursor: "pointer",
            }}
            onClick={onFileRemove}
            onMouseOver={(e) => (e.currentTarget.style.color = "#d32f2f")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f44336")}
          ></i>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
