import React from 'react'
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { Build, LocationOn, FlashOn, Schedule, AttachMoney, Star } from "@mui/icons-material";
function kaiseh() {
  const services=[
    {
      title:"this is title",
      description:"This is descripton",
      icon:<Build fontsize="large"></Build>
    },
    {
      title:"this is title",
      description:"This is descripton",
      icon:<Build fontsize="large"></Build>
    }
  ]
  return (
   <div>
     <Grid container spacing={15} justifyContent="center">
    {
     
      services.map((service,index)=>(
           <Grid item xs={12} sm={6} md={4} key={index}>
        <Card className="shadow-lg p-4 hover:shadow-xl transition bg-white rounded-lg">
        <CardContent className="flex flex-col items-center">
          {service.icon}
          <Typography variant="h6" className="mt-2 font-bold text-gray-900">
            {service.title}
          </Typography>
          <Typography variant="body2" className="text-gray-600 mt-1 text-center">
            {service.description}
          </Typography>
          <Button variant="contained" color="primary" className="mt-3 p-6" href={service.path}>
            Learn More
          </Button>
        </CardContent>
      </Card>
      </Grid>
      ))
    }
    </Grid>
   </div>
  )
}

export default kaiseh
