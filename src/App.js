import React, { useState } from "react";
import FileUpload from './components/FileUpload/FileUpload';
import Input from './components/Input/Input';
import Results from './components/Results/Results';
import "./App.css";

function App() {
  const [lakeName, setLakeName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      setFileSize((file.size / 1024).toFixed(2) + " KB");
      const reader = new FileReader();
      reader.onload = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setFileSize(null);
    setPreviewUrl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lakeName || !selectedFile) {
      alert("Please enter a lake name and upload an image!");
      return;
    }
    setResult({ status: "Excellent", pHLevel: 7.77, confidence: "92.2%" });
  };

  return (
    <div className="app">
      <h1>Lake - Water Quality Analysis</h1>
      <p>Upload satellite images to analyze water quality parameters</p>
      <form className="form" onSubmit={handleSubmit}>
        <FileUpload
          onFileChange={handleFileChange}
          selectedFile={selectedFile}
          fileSize={fileSize}
          previewUrl={previewUrl}
          onFileRemove={handleFileRemove}
        />
        <Input
          lakeName={lakeName}
          onLakeNameChange={(e) => setLakeName(e.target.value)}
          onSubmit={handleSubmit}
        />
        <Results result={result} />
      </form>
    </div>
  );
}

export default App;