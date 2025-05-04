import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MechanicService from '../service/MechanicService';

const AddMechanic = () => {
  const navigate = useNavigate();

  const [Mechanic, setMechanic] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    experience: "",
  });

  const handleChange = (e) => {
    setMechanic((prev) => ({
      ...prev,  // ✅ Ensure React detects change
      [e.target.name]: e.target.value,  
    }));
  };

  const saveMechanic = (e) => {
    e.preventDefault();
    console.log("Saving Mechanic:", Mechanic);  // ✅ Debug log
    MechanicService.saveMechanic(Mechanic)
      .then((response) => {
        console.log("Saved:", response);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setMechanic({
      name: "",
      phone: "",
      email: "",
      location: "",
      experience: "",
    });
  };

  return (
    <div className="bg-black w-full h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl mb-4">Add Mechanic</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 mb-2 border rounded-md"
        value={Mechanic.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone"
        className="p-2 mb-2 border rounded-md"
        value={Mechanic.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 mb-2 border rounded-md"
        value={Mechanic.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        className="p-2 mb-2 border rounded-md"
        value={Mechanic.location}
        onChange={handleChange}
      />
      <input
        type="number"
        name="experience"
        placeholder="Experience (years)"
        className="p-2 mb-4 border rounded-md"
        value={Mechanic.experience}
        onChange={handleChange}
      />

      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-2"
        onClick={saveMechanic}
      >
        Save Mechanic
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md mb-2"
        onClick={reset}
      >
        Clear
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
    </div>
  );
};

export default AddMechanic;
