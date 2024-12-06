import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar"; // Import CircularProgressBar
import "react-circular-progressbar/dist/styles.css";
import "./App.css";

function App() {
  const [lakeName, setLakeName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      setFileSize((file.size / 1024).toFixed(2) + " KB"); // Convert size to KB
      const reader = new FileReader();
      reader.onload = () => setPreviewUrl(reader.result); // Read file for preview
      reader.readAsDataURL(file);
    }
  };

  // Handle file removal (clear the selected file and reset UI)
  const handleFileRemove = () => {
    setSelectedFile(null);
    setFileSize(null);
    setPreviewUrl(null);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!lakeName || !selectedFile) {
      alert("Please enter a lake name and upload an image!");
      return;
    }

    // Simulate analysis result (In real app, make an API call here)
    setResult({
      status: "Excellent",
      pHLevel: 7.77,
      confidence: "92.2%",
    });
  };

  return (
    <div className="app">
      <h1>Lake - Water Quality Analysis</h1>
      <p>Upload satellite images to analyze water quality parameters</p>
      <form className="form" onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="container">
          <div className="upload-box">
            <i 
              className="bi bi-cloud-upload upload-icon" 
              onClick={() => document.getElementById("file-input").click()}
            ></i>
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              accept=".jpg,.png,.jpeg"
              style={{ display: "none" }}
            />
            <label onClick={() => document.getElementById("file-input").click()}>
              {selectedFile ? selectedFile : "Choose the satellite image"}
            </label>
            {fileSize && <p>File Size: {fileSize}</p>}
            <p>Supported formats: JPG, PNG (max 22MB)</p>

            {/* Image Preview and Remove Icon */}
            {previewUrl && (
              <div className="image-preview">
                <img src={previewUrl} alt="Preview" style={{width: "100px", height: "100px", objectFit: "cover"}}/>
                <i 
                  className="bi bi-x-circle-fill remove-icon" 
                  onClick={handleFileRemove} 
                ></i>
              </div>
            )}
          </div>

          <div className="input-container">
            {/* Lake Name Input */}
            <div className="input-field">
              <input
                type="text"
                placeholder="Lake name *"
                value={lakeName}
                required
                onChange={(e) => setLakeName(e.target.value)}
              />
            </div>

            {/* Analyze Button */}
            <button type="submit" className="analyze-button">
              Analyze
              <i className="bi bi-send"></i>
            </button>

            {/* Result Display */}
            {result && (
              <div className="result" style={{backgroundColor: "whitesmoke"}}>
                <h2 style={{fontSize: "40px", marginBottom: "16px"}}>{result.status}</h2>
                <p style={{fontSize: "25px"}}>
                  pH Level: <span style={{ fontSize: "45px", fontWeight: "bolder" }}>{result.pHLevel}</span>
                </p>
                <p style={{fontSize: "20px"}}>
                  Analysis Confidence: <span style={{ fontSize: "22px", fontWeight: "bolder" }}>{result.confidence} </span>
                </p>
                
                {/* Circular Progress Bar */}
              
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;