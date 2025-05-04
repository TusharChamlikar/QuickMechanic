import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaStar, FaMapMarkerAlt, FaTools, FaCarBattery, FaOilCan, FaWrench } from "react-icons/fa";
import MechanicService from "../service/MechanicService";

function BookMechanic() {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [mechanic, setMechanic] = useState(null); // Store single mechanic instead of an array

  // Fetch user’s live location and convert it into a city name
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Detected location:", latitude, longitude);

          try {
            // Reverse geocode to get the city name
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`
            );
            const data = await response.json();
            if (data.address && data.address.city) {
              setLocation(data.address.city); // Auto-set the detected city
            } else {
              setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`); // Fallback to coordinates
            }
          } catch (error) {
            console.error("Error fetching location name:", error);
          }
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.log("Geolocation not supported by this browser.");
    }
  }, []);

  const fetchMechanic = () => {
    console.log("Fetching mechanic for location:", location);

    if (location.trim() === "") {
      MechanicService.getMechanic()
        .then((response) => {
          console.log("Mechanic fetched:", response.data);
          setMechanic(response.data); // Backend returns a single object
        })
        .catch((error) => {
          console.error("Error fetching mechanic:", error);
        });
    } else {
      MechanicService.getMechanicByLocation(location)
        .then((response) => {
          console.log("Mechanic fetched for location:", response.data);
          setMechanic(response.data); // Store the single object
        })
        .catch((error) => {
          console.error("Error fetching mechanic by location:", error);
        });
    }
  };

  const services = [
    { name: "Battery Replacement", icon: <FaCarBattery /> },
    { name: "Flat Tire Repair", icon: <FaWrench /> },
    { name: "Oil Change", icon: <FaOilCan /> },
    { name: "Engine Diagnostics", icon: <FaTools /> },
  ];

  return (
    <div className="bg-[#6000ff] text-white p-10 mt-10">
      {/* Hero Section */}
      <div className="text-center text-5xl font-bold mt-10">Find a Mechanic Anytime, Anywhere!</div>
      <p className="text-center mt-2 text-lg">Fast, reliable, and affordable car repair services at your fingertips.</p>

      {/* Booking Form */}
      <div className="mt-6 bg-white text-black p-4 rounded-lg shadow-md max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter Your Location"
          className="w-full p-2 border rounded-md mb-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          className="w-full p-2 border rounded-md mb-3"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          {services.map((s, index) => (
            <option key={index} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 w-full rounded-md"
          onClick={fetchMechanic}
        >
          Find Available Mechanic
        </button>
      </div>

      {/* Service Categories */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {services.map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} className="bg-gray-800 p-4 rounded-lg">
            <div className="text-3xl">{service.icon}</div>
            <div className="mt-2 text-lg font-semibold">{service.name}</div>
          </motion.div>
        ))}
      </div>

      {/* Nearby Mechanic */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Available Mechanic</h2>
        {mechanic ? (
          <div className="bg-gray-900 p-4 rounded-lg mb-2 flex justify-between">
            <div>
              <h3 className="font-semibold">{mechanic.name}</h3>
              <p>
                <FaMapMarkerAlt className="inline" /> {mechanic.location} | Experience: {mechanic.experience} years
              </p>
              <p>📞 {mechanic.phone}</p>
              <p>📧 {mechanic.email}</p>
            </div>
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" /> {mechanic.rating || "N/A"}
            </div>
          </div>
        ) : (
          <p>No mechanic found.</p>
        )}
      </div>

      {/* Why Choose Us */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <p className="mt-2">✅ 24/7 Service | ✅ Verified Mechanics | ✅ Transparent Pricing | ✅ Fast Assistance</p>
      </div>

      {/* Customer Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-4 rounded-lg">
          <p>"Excellent service! The mechanic arrived within 15 minutes and fixed my car quickly."</p>
          <p className="text-yellow-400 mt-2">⭐⭐⭐⭐⭐</p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Need Help?</h2>
        <p className="mt-2">
          📞 <FaPhone className="inline" /> +91-9876543210
        </p>
      </div>
    </div>
  );
}

export default BookMechanic;
