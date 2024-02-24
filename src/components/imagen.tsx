"use client"

import React, { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "1234";

  const handleGenerateImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://praecise-mvp-hoewrpyxlq-ew.a.run.app/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate image: ${response.statusText}`);
      }

      const data = await response.json();
      setImageURL(data.image_url);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p className="text-white mono-regular-h mt-4">Generating...</p>}
      {imageURL && (
        <div>
          <img src={imageURL} alt="Generated" className="rounded-lg" />
        </div>
      )}
      {error && <p className="mono-regular-h" style={{ color: "red" }}>{error}</p>}
      <textarea
        className="mt-8 placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0 w-full"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt for image generation"
        onSubmit={handleGenerateImage}
      />
      <button className="block w-full mx-auto max-w-s mono-medium-h py-2 px-4 border bg-white text-black rounded-full mt-6" onClick={handleGenerateImage}>Generate</button>
    </div>
  );
}
