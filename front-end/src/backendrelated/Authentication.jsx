import React, { useState,useEffect } from "react";
import Service from "../service/Verification";
import LandingPage from "../components/LandingPage";
import Navbar1 from "../components/_Navbar";
import { Link } from "react-router-dom";
import Ser from "../service/getParticular";
function Authentication() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for authentication status

  useEffect(() => {
    if (isAuthenticated) {
      document.body.style.overflow = "auto"; // Allow scrolling after authentication
    } else {
      document.body.style.overflow = "hidden"; // Prevent scrolling on login page
    }
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is restored when component unmounts
    };
  }, [isAuthenticated])

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  
  const handleChange1 = (e) => {
    setOtp(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", email);

    try {
      const data = await Ser.getData(email); // Await the result

      if (!data) { // If no data is returned, show an invalid email alert
        alert("Invalid Email");
        return;
      }

      const response = await Service.sendOTP(email);
      console.log("OTP sent successfully:", response.data);
      alert("OTP has been sent to your email.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
};

  const verifyOTP = async (e) => {
    e.preventDefault();
    console.log("Verifying OTP:", otp);

    try {
      const response = await Service.verifyOTP(otp);
      console.log("Verification Response:", response.data);

      if (response.data === "OTP Verified!") {
        alert("Login Successful!");
        const userData = response.data.user; 
        localStorage.setItem("isAuthenticated", "true"); // Store login status
        localStorage.setItem("user", JSON.stringify(userData)); // Store user data
        localStorage.setItem("email",email)
        setIsAuthenticated(true); // Set authentication state to true
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP or an error occurred.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200 text-black ">
      {isAuthenticated ? ( // Conditional rendering
      <div >
 <Navbar1></Navbar1>
 <LandingPage></LandingPage>

      </div>
        
        
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-lg font-semibold mb-4 text-center">Email Verification</h2>

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
            onClick={sendEmail}
          >
            Send OTP
          </button>

          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange1}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            className="w-full bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={verifyOTP}
          >
            Verify OTP
          </button>
          <p className="font-thin mt-3">Don't have a account? <button className="font-bold text-red-500"onClick={() => window.open("/signup", "_blank")}>Singup</button> now </p>
        </div>
      )}
    </div>
  );
}

export default Authentication;
