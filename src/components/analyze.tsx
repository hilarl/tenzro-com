// UploadImageComponent.js

"use client"

import React, { useState } from "react";

const UploadImageComponent = () => {
  const [file, setFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState("");
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading status

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Create image preview URL
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true); // Set loading to true when analysis starts
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setAnalysisResult(data.result); // Set the analysis result
      } else {
        setError("Failed to upload image");
      }
    } catch (error) {
      setError("Error uploading image");
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false); // Set loading to false when analysis finishes
    }
  };

  return (
    <div className="text-white mono-regular-h w-full">
      {analysisResult && <p className="text-sm text-center mb-8">{analysisResult}</p>}
      <div className="w-full text-center">
        {/* Filename field */}
        {file && (
          <img className="mx-auto max-w-full h-auto mb-4 rounded-lg" alt="analyzed image" src={imagePreview} />
        )}
        <label htmlFor="fileInput" className="text-sm mb-2 text-center">
          {/* Filename field */}
          {file ? file.name : "Choose a file"}
        </label>
        <input
          id="fileInput"
          type="file"
          className="hidden" // Hide the default file input
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          className="mt-8 block w-full mx-auto max-w-s font-bold border border-white rounded-full cursor-pointer text-white py-2 px-4 text-center"
        >
          Choose File
        </label>
      </div>
      {/* Display loading status */}
      <button className="block w-full mx-auto max-w-s font-bold py-2 px-4 border bg-white text-black rounded-full mt-4" onClick={handleSubmit}>Analyze</button>
      {loading && <p className="text-white text-center mt-4 text-sm">Analyzing...</p>}
      {error && <p className="text-white text-center mt-4 text-sm">{error}</p>}
    </div>
  );
};

export default UploadImageComponent;
