import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Profile"; // Import Profile component

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="bg-[#6000ff] fixed top-0 z-[999] w-full px-10 py-6 text-white font-['Neue Montreals'] flex justify-between items-center">
      {/* Logo */}
      <div className="logo font-bold text-2xl pr-20">QUICKMECHANIC</div>

      {/* Navigation Links */}
      <div className="links flex gap-10 items-center">
        {["HOME", "SERVICES", "CONTACT"].map((item, index) => (
          <Link to={`/${item.toLowerCase()}`} key={index} className="hover:underline">
            {item}
          </Link>
        ))}

        {/* Profile Button */}
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="relative hover:underline"
        >
          PROFILE
        </button>
      </div>

      {/* Profile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-54 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out ${
          showProfile ? "translate-x-[-1]" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={() => setShowProfile(false)}
        >
          ×
        </button>

        {/* Profile Component */}
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
