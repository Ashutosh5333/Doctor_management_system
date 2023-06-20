import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AppoinmentSlider from './AppoinmentSlider'
import Bottombar from './Bottombar'
import { Chart } from 'chart.js'
import { Chartdatashow } from './Chartdatashow'

const Dashboard = () => {

  return (
    <>
     <Box  h="90vh">

       <Box>
         <AppoinmentSlider/>
       </Box>

       <Heading textAlign={{ base: "start", md: "start", lg: "start" }}
          fontSize={{ base: "1rem", md: "1.2rem", lg: "1.2rem" }}
          fontWeight={"600"}
          margin={"5"}
          ml="45"
          mt={{ base: "20px", lg: "-1%" }}> Appointment - Total Vs Closed </Heading>
      

       <Box   w={{ base: "95%", md: "60%", lg: "50%" }}
          h="330px"
          m={{ base: "auto", md: "10", lg: "10" }}
          mt={{ base: "40px" }}>
          <Chartdatashow/>
       </Box>

       <Box>
        <Bottombar/>
       </Box>

     </Box>
    </>
  )
}

export default Dashboard