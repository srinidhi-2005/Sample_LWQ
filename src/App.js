import React, { useState } from "react";
import { GiDroplets } from "react-icons/gi";
import FileUpload from './components/FileUpload';
import Input from './components/Input';
import Results from './components/Results';

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
    <div
      style={{
        textAlign: "center",
        padding: "100px",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ color: "#1158dc", fontSize: "35px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        Lake - Water Quality Analysis <GiDroplets />
      </h1>
      <p style={{ marginTop: "20px", color: "brown", fontSize: "15px" }}>
        Upload satellite images to analyze water quality parameters
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "50px auto",
          width: "700px",
          height: "300px",
        }}
      >
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
