import React from 'react'
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import CareSwiper from '../Swiper/CareSwiper';
import SpecialistSwiper from '../Swiper/SpecialistSwiper';
import AllDoctor from '../Component/AllDoctor';


const Customdashboard = () => {
    // h={{ base:"100vh ",md: "85vh", lg: "80vh" }}

  return (
    <>
     <Box   mt={{ base:"1px ",md: "-40px", lg: "-40px" }}  p={{base:"5"}} >
         <Text   textAlign={{ base: "start", lg: "center" }} > Hello Ashutosh </Text>

         <Heading  textAlign={{ base: "start", lg: "center" }} 
          >Let's Find Your Doctor </Heading>
       
       <Box h="35vh" >
         <Text     color="#220f7a" fontWeight={"700"} p="5">We Care for you </Text>
          <Box h="30vh">

           <CareSwiper/>

          </Box>
       </Box>

       <Box h="35vh" mt="10" >
         <Text     color="#220f7a" fontWeight={"700"} p="5">Specialists </Text>
          <Box h="30vh">
             <SpecialistSwiper/>
          </Box>
       </Box>

       
       <Box h="auto" mt="10" >
         <Text     color="#220f7a" fontWeight={"700"} p="5"> Available Doctors</Text>
          <Box border="3px solid black"  >
            
               <AllDoctor/>

          </Box>
       </Box>
          

          


     </Box>
    </>
  )
}

export default Customdashboard