// Your frontend component where you want to send the text to backend

"use client"

import React, { useState } from "react";

const Categorize = () => {
  const [text, setText] = useState("");
  const [categorizedText, setCategorizedText] = useState(""); // Changed from generatedText to categorizedText
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/moderate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to generate text: ${response.statusText}`);
      }
  
      const data = await response.json();
      setCategorizedText(data.categorized_text); // Updated key to match backend
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <textarea
        className="bg-black border border-none text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        rows={6}
        cols={60}
      />
      <button onClick={handleGenerate}>Generate Text</button>
      {error && <p>{error}</p>}
      {categorizedText && <p>{categorizedText}</p>} {/* Updated to display categorizedText */}
    </div>
  );
};

export default Categorize;
