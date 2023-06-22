import React, { useEffect } from 'react'
import { Box, Input, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Text , Flex,Image, IconButton,Card } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import CareSwiper from '../Swiper/CareSwiper';
import SpecialistSwiper from '../Swiper/SpecialistSwiper';
import AllDoctor from '../Component/AllDoctor';
import {
  Drawer,
  DrawerBody,  DrawerHeader,  DrawerOverlay,  DrawerContent} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {Link, Navigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { handleLogOut } from './../Redux/AuthReducer/Action';

const Customdashboard = ({inputdoctor,SetInputDoctor}) => {
   const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();   
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  
  const handleLog = () =>{
    localStorage.clear()
    dispatch(handleLogOut())
  }
  const loggeddata = JSON.parse(localStorage.getItem("loggeduser"))
   
    
     const check =() =>{
        if(loggeddata.userName ===""){
             Navigate("/login") 
        }else{
          Navigate("/doctordash")
        }
     }


  return (
    <>
      <Box mt="2" p="2">
      <IconButton
            color="black"
            size="md"
            bg="white"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="30px" />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
      </Box>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>  </DrawerHeader>
              <DrawerBody>
                <Card spacing={4}>
                   <Link to="/admin">
                  <Text fontWeight={"600"} fontSize={"1.1rem"} color="gray" mt="5">
                   Admin 
                  </Text>
                   </Link>
                  <Text   onClick={handleLog} fontWeight={"600"} fontSize={"1.1rem"} color="gray" mt="5" mb="5">
                    Logout
                  </Text>
                </Card>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
      
     <Box   mt={{ base:"1px ",md: "-40px", lg: "-40px" }}  p={{base:"5"}} >
      
        <Text   textAlign={{ base: "start", lg: "center" }} color="#050452" fontWeight={"600"} >
        <span style={{fontSize:"4rem", color:"red"}}>H</span>ello {loggeddata?.userName} </Text>

         <Heading  textAlign={{ base: "start", lg: "center" }} 
          >Let's Find Your Doctor </Heading>
           
           {
            SmallScreen && <Box w="50vw" >
            <Input
              borderRadius='10px'
                 onChange={ (e) =>SetInputDoctor(e.target.value)}
                 border='0px' placeholder='Search Doctor' padding='5px'
            />
           </Box>
           }
          
        
       
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

       <Flex w="90vw" m="auto" mt="10"
          justifyContent={"space-around"}
         flexDirection={{base:"column",md:"row",lg:"row"}} gap="5"
        >
          
          <Flex boxShadow={"lg"} mt="10">
             <Image src="https://media.istockphoto.com/id/1369424699/photo/illustration-of-two-doctors-with-a-virus-stricken-patient-in-a-hospital-bed.jpg?s=612x612&w=0&k=20&c=n7lQXVynFLdMrrKF1Yr6ypCfHdAIWzP37kw3pbi-phQ="
               alt="hospital"
              />
          </Flex>
          
          <Flex boxShadow={"lg"} mt="10">
          <Image src="https://media.istockphoto.com/id/1369424894/photo/illustration-of-a-doctor-in-his-office-attending-to-a-patient-hospital-and-medical-center.jpg?s=612x612&w=0&k=20&c=WOK5ZRR3ntBcNd9a-EZWBumVmECBnHNYIsCC5i-MbC4="
               alt="hospital"
              />
             
           </Flex>


       </Flex>

       
       <Box h="auto" mt="10" >
         <Text     color="#220f7a" fontWeight={"700"} p="5"> Available Doctors</Text>
          <Box >
               <AllDoctor inputdoctor={inputdoctor}/>
          </Box>
       </Box>
          

          


     </Box>
    </>
  )
}

export default Customdashboard