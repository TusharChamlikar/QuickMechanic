import React, { useState, useEffect } from 'react';

const images = [
  "images/p1.jpg",
  "images/p-0.jpg",
  "images/p2.png",
  "images/p-3.png",
  "images/p-4.png"
];

const images1 = [
  "images/p-4.png",
  "images/p-3.png",
  "images/p2.png",
  "images/p1.jpg",
  "images/p-0.jpg"
];

function Display() {
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrent1((prev) => (prev + 1) % images.length);
    }, 3000);

    const interval2 = setInterval(() => {
      setCurrent2((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f6f9] py-12">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-gray-800 mb-12">
        Gallery Showcase
      </h2>

      {/* Image Sliders */}
      <div className="flex space-x-20">
        
        {/* First Slider */}
        <div className="relative w-96 h-60 overflow-hidden rounded-lg shadow-lg border border-gray-300 bg-white">
          {images1.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-lg ${
                index === current1 ? "opacity-100 scale-105" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Second Slider */}
        <div className="relative w-96 h-60 overflow-hidden rounded-lg shadow-lg border border-gray-300 bg-white">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-lg ${
                index === current2 ? "opacity-100 scale-105" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-32 mt-6">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current1 ? "bg-blue-600 w-5 h-5 shadow-lg" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current2 ? "bg-blue-600 w-5 h-5 shadow-lg" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Display;
