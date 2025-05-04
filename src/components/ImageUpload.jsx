import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to get prediction");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload an Image for Detection</h2>

        <label className="w-full flex flex-col items-center p-4 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 transition duration-300">
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <span className="text-gray-600">{file ? file.name : "Click to upload or drag & drop"}</span>
        </label>

        <button
          onClick={handleUpload}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Upload & Predict
        </button>

        {prediction && (
          <div className="mt-6 bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">🔍 Predicted Issue:</h3>
            <p className="text-lg font-medium">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
