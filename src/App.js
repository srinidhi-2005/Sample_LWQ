import React, { useState } from "react";
import { GiDroplets } from "react-icons/gi";
import { FaMoon, FaSun } from "react-icons/fa";
import FileUpload from './components/FileUpload';
import Input from './components/Input';
import Results from './components/Results';

function App() {
  const [lakeName, setLakeName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  });

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

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="text-center py-24 font-roboto">
        <button
          onClick={toggleDarkMode}
          className={`fixed top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
            darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
        </button>

        <h1 className="text-4xl flex items-center justify-center gap-6 text-[#1158dc]">
          Lake - water quality analysis <GiDroplets />
        </h1>
        
        <p className={`mt-5 text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Upload satellite images to analyze water quality parameters
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-12 w-full max-w-[700px] px-4">
          <FileUpload
            onFileChange={handleFileChange}
            selectedFile={selectedFile}
            fileSize={fileSize}
            previewUrl={previewUrl}
            onFileRemove={handleFileRemove}
            darkMode={darkMode}
          />
          <Input
            lakeName={lakeName}
            onLakeNameChange={(e) => setLakeName(e.target.value)}
            onSubmit={handleSubmit}
            darkMode={darkMode}
          />
          <Results 
            result={result}
            darkMode={darkMode}
          />
        </form>
      </div>
    </div>
  );
}

export default App;