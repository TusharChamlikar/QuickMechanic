import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  const mechanicParts = ["⚙️", "🔧", "🔩", "🚗", "🛠️", "🛞", "🔋", "⛓️"];

  return (
    <div className="relative bg-[#6000ff] w-screen h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Floating Mechanic Icons */}
      {mechanicParts.map((icon, index) => (
        <motion.span
          key={index}
          className="absolute text-5xl opacity-50"
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{
            opacity: 1,
            scale: 1.2,
            rotate: Math.random() * 360,
            x: Math.random() * 800 - 400,
            y: Math.random() * 800 - 400,
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          {icon}
        </motion.span>
      ))}

      {/* Heading */}
      <motion.h1
        className="text-7xl font-extrabold text-center relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        FIND MECHANIC NEAR YOU
      </motion.h1>

      {/* Subtext */}
      <motion.div
        className="flex gap-10 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-3xl font-mono text-blue-300">ANY TIME</h1>
        <h1 className="text-3xl font-mono text-blue-300">ANYWHERE</h1>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.button
        className="mt-10 px-10 py-3 bg-white text-[#6000ff] font-bold text-2xl rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
      </motion.button>
    </div>
  );
}

export default LandingPage;
