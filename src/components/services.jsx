import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Build, LocationOn, FlashOn, Schedule, AttachMoney, Star, SmartToy } from "@mui/icons-material";

const services = [
  {
    title: "On-Demand Mechanic Booking",
    description: "Request a mechanic based on availability near you.",
    icon: <Build fontSize="large" color="primary" />,
    path: "/book-mechanic"
  },
  {
    title: "Find Nearby Mechanics",
    description: "Locate mechanics using Google Maps integration.",
    icon: <LocationOn fontSize="large" color="primary" />,
    path: "/find-nearby"
  },
  {
    title: "MechGenius Assist",
    description: "Instant AI-powered diagnostics and emergency breakdown support.",
    icon: <SmartToy fontSize="large" color="primary" />,
    path: "/ai"
  },
  {
    title: "Scheduled Maintenance",
    description: "Pre-book services like oil changes, tire replacements.",
    icon: <Schedule fontSize="large" color="primary" />,
    path: "/maintenance"
  },
  {
    title: "Cost Estimation",
    description: "Get an approximate repair cost before booking.",
    icon: <AttachMoney fontSize="large" color="primary" />,
    path: "/cost-estimation"
  },
  {
    title: "Reviews & Ratings",
    description: "Rate and review mechanics to help others choose.",
    icon: <Star fontSize="large" color="primary" />,
    path: "/reviews"
  }
];

const Services = () => {
  return (
    <div className="border-t-4 border-b-2 border-b-[#ddeda7] bg-[#e3f3a7] w-full min-h-screen flex flex-col items-center p-6 pt-12 mt-16">
      <Typography variant="h4" className="text-center pt-10 mb-6 font-bold text-blue-700">
        Our Services
      </Typography>
      <div className="h-auto p-10">
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-lg p-6 m-4 hover:shadow-xl transition bg-white rounded-lg">
                  <CardContent className="flex flex-col items-center">
                    {service.icon}
                    <Typography variant="h6" className="mt-2 font-bold text-gray-900">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mt-1 text-center">
                      {service.description}
                    </Typography>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-full mt-3"
                    >
                      <Link to={service.path} style={{ textDecoration: 'none', width: '100%' }}>
                        <Button variant="contained" color="primary" fullWidth>
                          Learn More
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Services;
