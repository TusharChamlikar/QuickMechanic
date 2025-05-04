import React from "react";

const MusicAnalyticsLanding = () => {
  return (
    <div className="relative min-h-screen bg-[#EAEAF2] flex flex-col items-center text-center px-6">
      {/* Background Design */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EAEAF2] overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/your-background-image.jpg')] opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-20 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Advancing music with <br /> the <span className="text-indigo-600">power of data</span>
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          A fully integrated suite of music analytics & intelligence tools for
          <span className="text-blue-500 cursor-pointer"> Distributors</span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-full shadow-md hover:bg-gray-300">
            ▶ Watch Video
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </div>

      {/* Mock Dashboard UI */}
      <div className="relative z-10 mt-16 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/your-dashboard-image.png"
          alt="Dashboard Preview"
          className="w-full"
        />
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-6 flex gap-4">
        <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300">
          📷 Instagram
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300">
          ▶ YouTube
        </button>
      </div>
    </div>
  );
};

export default MusicAnalyticsLanding;
