import React from 'react';

function Contact() {
  return (
    <div className="p-40 bg-[#6000ff]">

<div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      
      <div className="mb-6 text-center">
        <p className="text-gray-700 text-lg">📞 Phone: +91 98765 43210</p>
        <p className="text-gray-700 text-lg">✉️ Email: contact@example.com</p>
        <p className="text-gray-700 text-lg">📍 Address: 123 Street, City, Country</p>
      </div>
      
      <form className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold">Name:</label>
          <input 
            type="text" 
            className="mt-1 p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            placeholder="Your Name" 
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Email:</label>
          <input 
            type="email" 
            className="mt-1 p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            placeholder="Your Email" 
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Message:</label>
          <textarea 
            className="mt-1 p-3 w-full border rounded-lg shadow-sm resize-none h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
            placeholder="Your Message">
          </textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-md">
          Send Message
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-gray-700 text-lg">Follow us on:</p>
        <div className="flex justify-center space-x-6 mt-3">
          <a href="#" className="text-blue-600 text-lg hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-600 text-lg hover:underline">Twitter</a>
          <a href="#" className="text-blue-600 text-lg hover:underline">Instagram</a>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Contact;
