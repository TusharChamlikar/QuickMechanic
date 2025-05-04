import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../service/Service'; // Import your service correctly

function Signup() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const save = (e) => {
    e.preventDefault();
    console.log("Saving", user);
    Service.save(user)
      .then((response) => {
        console.log("saved:", response);
        navigate("/"); // Corrected navigation
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setUser({
      name: "",
      phone: "",
      email: "",
      password: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-12 bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create an Account</h2>

        <form >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
            onClick = {save}
           
          >
            Sign Up
          </button>

          <button
            onClick={reset}
            className="w-full mt-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded transition duration-200"
          >
            Reset
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
