import React, { useEffect, useState } from "react";
import Particular from '../service/getParticular';
function Profile() {
  const [user, setUser] = useState(null);
  const email = localStorage.getItem("email");
  
  useEffect(() => {
    // Retrieve user data from localStorage
    if(!email){
      console.log("error h bhai");
      return;
    }
    const fetchData = async()=>{
      try{
        const response = await Particular.getData(email);
        setUser(response.data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
  
    localStorage.removeItem("email"); // Ensure email is also removed
    window.location.href = "/"; // Redirect to login
  };
  return (
    <div className="flex flex-col items-center justify-center h-100px bg-gray-100 text-black mt-10 p-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4 text-center">Profile Information</h2>
        
        {user ? (
          <div>
            <p className="mb-2"><strong>Name:</strong> {user.name}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
            <p className="mb-2"><strong>Phone:</strong> {user.phone || "N/A"}</p>

            <button
              className="w-full bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded mt-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>No user data found.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
