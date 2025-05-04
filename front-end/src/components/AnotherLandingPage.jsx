import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  const mechanicParts = [
    "⚙️", "🔧", "🔩", "🚗", "🛠️", "🛞", "🔋", "⛓️"
  ];

  return (
    <div className="bg-[#6000ff] w-screen h-screen flex flex-col justify-center items-center text-white">
      {/* Mechanic Icons Floating Around */}
      <div className="relative flex justify-center items-center">
        {mechanicParts.map((icon, index) => (
          <motion.span
            key={index}
            className="absolute text-5xl opacity-70"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: Math.random() * 100,
              x: Math.random() * 600 - 200, // Random X position
              y: Math.random() * 600 - 200, // Random Y position
            }}
            whileHover={{scale:1.5,rotate:360}}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            {icon}
          </motion.span>
          
        ))}
        {mechanicParts.map((icon, index) => (
          <motion.span
            key={index}
            className="absolute text-5xl opacity-70"
            drag
            initial={{ opacity: 0, scale: 1, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: Math.random() * 1000,
              x: Math.random() * -400 - 100, // Random X position
              y: Math.random() * 200 - 200, // Random Y position
            }}
            whileHover={{scale:1.5,rotate:360}}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            {icon}
          </motion.span>
          
        ))}

        {/* Main Heading */}
        <h1 className="text-7xl font-extrabold text-center relative z-10">
          FIND MECHANIC NEAR YOU
        </h1>
      </div>

      {/* Subtext */}
      <div className="flex gap-10 mt-5">
        <h1 className="text-3xl font-mono text-blue-300">ANY TIME</h1>
        <h1 className="text-3xl font-mono text-blue-300">ANYWHERE</h1>
      </div>
    </div>
  );
}

export default LandingPage;
