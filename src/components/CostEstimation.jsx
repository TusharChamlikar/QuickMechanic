import React from 'react';


function CostEstimation() {
  const services = [
    { id: 1, name: 'Engine Oil Change', cost: 1500 },
    { id: 2, name: 'Oil Filter Replacement', cost: 300 },
    { id: 3, name: 'Air Filter Replacement', cost: 200 },
    { id: 4, name: 'Fuel Filter Replacement', cost: 1000 },
    { id: 5, name: 'Spark Plug Replacement', cost: 500 },
    { id: 6, name: 'Brake Pad Replacement', cost: 1500 },
    { id: 7, name: 'Brake Disc Skimming', cost: 800 },
    { id: 8, name: 'Clutch Plate Replacement', cost: 4000 },
    { id: 9, name: 'Transmission Fluid Change', cost: 1500 },
    { id: 10, name: 'Coolant Flush and Refill', cost: 1000 },
    { id: 11, name: 'Battery Replacement', cost: 3000 },
    { id: 12, name: 'Wheel Alignment and Balancing', cost: 1500 },
    { id: 13, name: 'Tire Replacement', cost: 1500 },
    { id: 14, name: 'Suspension Overhaul', cost: 5000 },
    { id: 15, name: 'AC Servicing', cost: 1500 },
    { id: 16, name: 'Headlight Replacement', cost: 1200 },
    { id: 17, name: 'Windshield Wiper Replacement', cost: 400 },
    { id: 18, name: 'Timing Belt Replacement', cost: 3500 },
    { id: 19, name: 'Radiator Repair', cost: 2500 },
    { id: 20, name: 'Alternator Replacement', cost: 4500 },
    { id: 21, name: 'Starter Motor Replacement', cost: 4000 },
    { id: 22, name: 'Power Steering Repair', cost: 3000 },
    { id: 23, name: 'Exhaust System Repair', cost: 2000 },
    { id: 24, name: 'Fuel Pump Replacement', cost: 3500 },
    { id: 25, name: 'Wheel Bearing Replacement', cost: 1500 },
  ];

  const formatCost = (cost) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(cost);
  };

  return (
    <div className="bg-[#6000ff] min-h-screen flex justify-center items-center p-4 mt-24 relative overflow-hidden">
   
      <div className="bg-white shadow-lg w-full max-w-4xl rounded-lg p-6 relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Service Cost Estimation</h2>
        <ul className="divide-y divide-gray-200">
          {services.map((service) => (
            <li key={service.id} className="py-4 flex justify-between items-center">
              <span className="text-lg">{service.name}</span>
              <span className="text-lg font-semibold">{formatCost(service.cost)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CostEstimation;
