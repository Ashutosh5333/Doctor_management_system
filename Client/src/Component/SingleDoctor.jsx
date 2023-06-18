import React, { useEffect, useState } from 'react'
import { Avatar, Box,  Image,  useColorModeValue, Text,  HStack,  Tooltip, Flex, Heading, CardBody, useBreakpointValue, Button, WrapItem, Wrap, } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {  BsFacebook,  BsTwitter,  BsLinkedin,  BsLink45Deg,  BsBookmarkPlus,} from "react-icons/bs";
import { getSingleDoctordetail } from '../Redux/AppReducer/Action';
import { Card, Input } from '@chakra-ui/react';
import UserNavbar from './../pages/UserNavbar';

const SingleDoctor = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const SmallScreenDoctor = useBreakpointValue({ base: true, md: false, lg: false });
  
    const lightColor = useColorModeValue("#757575", "#9aa0a6");
    const [single ,Setsingle] = useState()
   const dispatch = useDispatch()
     const {id} = useParams()

     const handleBookAppoinmet =() =>{

     }
      const handleChange = () =>{

      }
     
       useEffect(() =>{
        dispatch(getSingleDoctordetail(id))
         .then((res) =>{
          Setsingle(res.payload)
         }).catch((err)=>{
           console.log(err)
         })
       },[id])

  return (
    <>
     {
      !SmallScreen && 
       <UserNavbar/>
     }
        
        <Flex flexDirection={"column"} gap="10px"> 
        {/* -------------------------------- */}

     {
      !SmallScreenDoctor &&  <Box  h="65vh"  width={{base:"80vw",md:"90vw",lg:"90vw" }}  m="auto" mt="-10" p="6" spacing={3} >
     
     <Flex boxShadow={"dark"}  justifyContent={"space-between"} gap="5"   >

        <Flex w="40%" h="60vh"  > 
           <Card m="auto" >   
          <Image 
            objectFit='cover'
            boxSize='300px'
              m="auto"  borderRadius="lg"
           src={single?.pic} />
        
           </Card>
         </Flex>

        <Flex w="50%"  h="60vh"   flexDirection={"column"} >
              
              <Box w="90%"    m="auto">
                <Text fontWeight={"600"} color="#050452"> About Me </Text>
               </Box>
               <Box w="90%"   m="auto" mt="-5" >
                <Heading color="#050452"> {single?.name} </Heading>
               </Box>

               <Box w="90%"    m="auto" mt="-5">
                <Text fontWeight={"400"} letterSpacing={"1px"}>{single?.About} </Text>
               </Box>

               <Box w="90%"     m="auto" mt="-1" >
                <Text fontWeight={"600"}>{single?.consultant} </Text>
               </Box>

               <Box w="90%"    m="auto" mt="-5">
                <Button bg="lightgreen" > Book Appoinment </Button>
               </Box>
        </Flex>

     </Flex>
   
    </Box> 

     }

         {/* ------------------------------------  */}
{
  SmallScreen &&    <Box   h="70vh"  width={{base:"90vw",md:"90vw" }}  m="auto"  p="6" spacing={3} >
     
     <Flex h="60vh" boxShadow={"dark"}  flexDirection={"column"} gap="5"   >

        <Flex w="80%" m="auto" > 
           <Box  m="auto">
              <Image 
               objectFit='cover'
               boxSize='200px'
              m="auto"  borderRadius="100" 
              src={single?.pic} />
           </Box>
         
         </Flex>

        <Flex  h="60vh" w="90%"   m="auto" flexDirection={"column"}  >
        <Box w="90%"    m="auto" textAlign={"center"}>
                <Text fontWeight={"600"} color="#050452"> About Me </Text>
               </Box>
               <Box w="90%"   m="auto" mt="5" >
                <Heading  textAlign={"center"} color="#050452"> {single?.name} </Heading>
               </Box>

               <Box w="90%"    m="auto" mt="5">
                <Text  textAlign={"center"} fontWeight={"400"} letterSpacing={"1px"}>{single?.About} </Text>
               </Box>

               <Box w="90%"     m="auto" mt="5" >
                <Text  textAlign={"center"} fontWeight={"600"}>{single?.consultant} </Text>
               </Box>

               <Box w="90%"    m="auto" mt="5" textAlign={"center"}>
                <Button   bg="lightgreen" > Book Appoinment </Button>
               </Box>
             
        </Flex>

     </Flex>
   

    </Box> 


}
   

   
         {/* --------------------------- Form ------------------------------- */}
    
      
    <Box  w={{base:"90vw", md:"80vw", lg:"80vw"}}  m="auto" mt={{base:"22%",md:"1px" ,lg:"1px" }}  >
           
           <Box   width="100%" m="auto"  mt="1" background={"#f3f3f3"} p="10"
            display={{base:"flex"}} flexDirection={{base:"column"}}
           >               

             <Box  width="100%" m="auto" mt="20px" marginLeft={"10px"}>
                 <Text textAlign={{base:"center",md:"start",lg:"start"}} fontSize="1.2rem" color="#444444"> Have An Emergency ? </Text>
                 <Text textAlign={{base:"center",md:"start",lg:"start"}} fontSize={{base:"1.2rem",md:"2rem",lg:"2rem"}} fontWeight={"600"}  color="#444444" fontFamily={"playfair Display"}
                 mt={{base:"10px"}}
                 > Book your Appointment </Text>
             </Box>

              <Box  mt="20px" >
                 <Box  display={"flex"} justifyContent="space-around"
                 flexDirection={{base:"column" ,md:"row",lg:"row"}}
                  gap={"10px"}>
                     <Input placeholder='Patient name *'  background={"#fff"} width="100%" name="name"  onChange={handleChange}/>
                     <Input placeholder='Doctor Name*' background={"#fff"} width="100%" name="Doctor" onChange={handleChange}/>
                 </Box>

               
                 <Box display={"flex"} justifyContent="space-around"
                  flexDirection={{base:"column" ,md:"row",lg:"row"}}
                  gap={"10px"} mt="20px" >
                     <Input placeholder='Phone Number *' background={"#fff"} width="100%" name="Mobile" onChange={handleChange} />
                     <Input type={"datetime-local"}  background={"#fff"} width="100%" name="Date" onChange={handleChange} />
                     
                 </Box>
                 <Box display={"flex"} justifyContent="space-around" gap={"10px"} mt="20px" >
                     
                 </Box>

              </Box>

               <Box  m="auto" mt="10">
                     <Button textAlign={"center"} bg="black" color="#fff" onClick={handleBookAppoinmet}> Book Now  </Button>
               </Box>

           
           </Box>
          

    </Box>
  
    </Flex>
    </>
  )
}

export default SingleDoctor

 