import { Box, Text ,Flex } from "@chakra-ui/react";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import {BsSearch} from "react-icons/bs"
import { Link } from "react-router-dom";
import {FaUserCircle} from "react-icons/fa"

const UserbottomNavbar = () => {

    const path=window.location.pathname;


  return (
    <>
     <Box
      h="10vh"
      width="100%"
      position={"fixed"}
      bottom="0"
      right="0%"
      boxShadow={"dark-lg"}
      bg="#ffffff"
      borderRadius={"30px"}
      display={{ base: "flex", md: "none", lg: "none" }}
      justifyContent={"space-between"}
      alignContent={"center"}
      zIndex={1}
      m="auto"
      mt="10"
      p="5"
      gap="5"
    >
      <Link to="/doctordash">
    {
        path === "/doctordash" ? 
        <Flex  w="20vw" h="6vh" m="auto"
         borderRadius={"10px"} p="2"
          justifyContent="space-around" bg="skyblue"
        >
        <Text color="#fff" mt="2"><BiHomeAlt/> </Text> 
        <Text color="#fff" mt="1"> Home </Text> 
        </Flex>:
          <Flex  w="20vw" h="5vh" m="auto"
          justifyContent="space-around"
        >
        <Text fontSize={"2rem"} mt="1"><BiHomeAlt/> </Text> 

        </Flex>
    }
        
      </Link>

      <Link to="/mobilesearchbar">
      {
        path === "/mobilesearchbar" ?  <Flex  w="20vw" h="6vh" m="auto"
           justifyContent="space-around" mt="1" bg="skyblue"
           borderRadius={"10px"} p="2"
        >
        <Text color="#fff" mt="2"><BsSearch/> </Text> 
        <Text color="#fff" mt="1"> Search </Text> 
      
        </Flex>: <Flex  w="20vw" h="5vh" m="auto"
            justifyContent="space-around"
        >
        <Text  fontSize={"2rem"} mt="1"><BsSearch/> </Text> 
        </Flex>
      }
     
      </Link>

      
      {/* ------------------- */}


      <Link to="/userprofile">
      {
        path ==="/userprofile" ? <Flex w="20vw" h="6vh" m="auto"
           justifyContent="space-around"  bg="skyblue"
           borderRadius={"10px"} p="2"
        >
        <Text color="#fff" mt="2"><FaUserCircle/> </Text> 
        <Text color="#fff" mt="1"> Profile </Text> 
        </Flex> : <Flex w="20vw" h="5vh" m="auto"
           justifyContent="space-around"
        >
        <Text fontSize={"2rem"} mt="1"><FaUserCircle/> </Text> 
      
        </Flex>
      }
      </Link>
       
       
      
    </Box>
    
    
    </>
  )
}

export default UserbottomNavbar