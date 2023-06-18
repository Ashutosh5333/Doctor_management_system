import React, { useEffect, useState } from 'react'
import { Avatar, Box,  Image,  useColorModeValue, Text,  HStack,  Tooltip, Flex, Heading, CardBody, useBreakpointValue, Button, } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {  BsFacebook,  BsTwitter,  BsLinkedin,  BsLink45Deg,  BsBookmarkPlus,} from "react-icons/bs";
import { getSingleDoctordetail } from '../Redux/AppReducer/Action';
import { Card, Input } from '@chakra-ui/react';
import UserNavbar from './../pages/UserNavbar';

const SingleDoctor = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
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
          // console.log(res.payload)
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

    <Box  h="65vh"  width={{base:"80vw",md:"90vw",lg:"90vw" }}  m="auto" mt="-10" p="6" spacing={3} >
     
     <Flex boxShadow={"dark"}  justifyContent={"space-between"} gap="5"   >

        <Flex w="40%" h="60vh"  > 
           <Card m="auto" >
        
          <Image 
            objectFit='cover'
            boxSize='300px'
              m="auto"
           src={single?.pic} />
        
           </Card>
         </Flex>

        <Flex w="50%"  h="60vh"   flexDirection={"column"} >
              
              <Box w="90%"  h="5vh"  m="auto">
                <Text fontWeight={"600"} color="#050452"> About Me </Text>
               </Box>
               <Box w="90%" h="5vh"  m="auto" mt="-5" >
                <Heading color="#050452"> {single?.name} </Heading>
               </Box>

               <Box w="90%"  h="15vh"  m="auto" mt="5">
                <Text fontWeight={"400"} letterSpacing={"1px"}>{single?.About} </Text>
               </Box>

               <Box w="90%"   h="6vh"  m="auto" mt="-3" >
                <Text fontWeight={"600"}>{single?.consultant} </Text>
               </Box>

               <Box w="90%"   h="7vh"  m="auto" mt="-5">
                <Button bg="lightgreen" > Book Appoinment </Button>
               </Box>

        </Flex>


     </Flex>
   

    </Box> 

  
    </>
  )
}

export default SingleDoctor

 