import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {motion} from "framer-motion";


// Fix Leaflet marker issue in React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const mechanicParts = [
  "⚙️", "🔧", "🔩", "🚗", "🛠️", "🛞", "🔋", "⛓️"
];
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [30, 45], // Slightly bigger for better visibility
  iconAnchor: [15, 45],
});

// Floating Button Component
const RecenterButton = ({ position }) => {
  const map = useMap();

  const handleClick = () => {
    if (position) {
      map.setView(position, 13); // Move map to live location
    }
  };

  return (
    
    <button
      onClick={handleClick}
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        padding: "12px 18px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "background 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
    >
      📍 Go to My Location
    </button>
  );
};

function Map() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watcher = navigator.geolocation.watchPosition(
        (pos) => {
          const newPosition = [pos.coords.latitude, pos.coords.longitude];
          setPosition(newPosition);
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
      return () => navigator.geolocation.clearWatch(watcher);
    }
  }, []);

  return (
    <div className="flex justify-center items-center p-4 bg-[url('/images/image1.jpg')] bg-contain ">
      <div style={{ width: "90%", maxWidth: "800px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ 
          textAlign: "center", 
          backgroundColor: "white", 
          padding: "10px", 
          fontSize: "18px", 
          fontWeight: "bold", 
          margin: 0, 
          borderBottom: "2px solid #007bff" 
        }}>
          🌍 Live Location Map
        </h3>
        {position ? (
          <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
            <Marker position={position} icon={customIcon}>
              <Popup>You are here! 📌</Popup>
            </Marker>
            <RecenterButton position={position} />
          </MapContainer>
        ) : (
          <p style={{ textAlign: "center", padding: "20px", color: "#333" }}>Fetching location... ⏳</p>
        )}
      </div>
    </div>
  );
}

export default Map;
