import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Navbar() {
  return (
    <div className='  bg-[#6000ff]  fixed top-0 z-[990] w-full px-10 py-10 text-white font-["Neue Montreals] flex  justify-between'>
      <div className="logo font-bold text-2xl pr-20">
        QUICKMECHANIC
      </div>
      <div className='links flex gap-20'>
        {
          // Replace <a> with <Link> for React Router navigation
          ["HOME", "SERVICES", "CONTACT", "LOGIN"].map((item, index) => (
            <Link to={`/${item.toLowerCase()}`} key={index}>{item}</Link> // Correct URL structure
          ))
        }
      </div>
    </div>
  );
}

export default Navbar;
