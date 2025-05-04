import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10">
        
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">About Us</h1>

        {/* About Section */}
        <p className="text-lg text-gray-600 text-center mb-10">
          At <span className="text-blue-600 font-semibold">Find Mechanic</span>, we are committed to making vehicle repairs and maintenance hassle-free. 
          Whether you're dealing with a sudden breakdown or need routine servicing, we connect you with skilled mechanics near you—instantly!
        </p>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            We aim to provide a reliable, efficient, and affordable way for people to access mechanical services anytime, anywhere.
            With real-time availability, verified professionals, and cost transparency, we ensure that vehicle repairs are no longer stressful.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">What We Offer</h2>
          <ul className="text-gray-600 text-lg list-disc list-inside space-y-2">
            <li>🚗 <strong>On-Demand Mechanic Booking</strong> – Request a mechanic anytime, anywhere.</li>
            <li>⚡ <strong>Emergency Roadside Assistance</strong> – Get quick help in case of breakdowns.</li>
            <li>🛠️ <strong>Scheduled Maintenance</strong> – Pre-book services like oil changes & tire replacements.</li>
            <li>💰 <strong>Cost Estimation</strong> – Get a price estimate before booking.</li>
            <li>⭐ <strong>Reviews & Ratings</strong> – Choose the best mechanics based on real customer feedback.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
          <ul className="text-gray-600 text-lg list-disc list-inside space-y-2">
            <li>✅ <strong>Verified Professionals</strong> – We ensure you get trusted and skilled mechanics.</li>
            <li>✅ <strong>Instant Bookings</strong> – No waiting, get connected immediately.</li>
            <li>✅ <strong>Transparent Pricing</strong> – Know your costs beforehand.</li>
            <li>✅ <strong>24/7 Availability</strong> – Help is available whenever you need it.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;
