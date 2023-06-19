import React from 'react'
import UserbottomNavbar from '../Component/UserbottomNavbar';
import { useBreakpointValue, Flex, Input, Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import {BsSearch} from "react-icons/bs"
import loginlogo from "../Images/loginlogo.jpg"

const SmallSearchbar = () => {
    const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

  return (
    <>

    {
      SmallScreen && <Box  
      w="100%" h="90vh" boxShadow={"lg"} >

  <Box boxShadow={"lg"}  borderRadius={"lg"} p="2">
      <Flex width={{base : '90%',}}  m="auto"
                  borderRadius={"20"}   bg="#e0e0de"
                padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input borderRadius='10px'
                //  onChange={ (e) =>SetInputDoctor(e.target.value)}
                 border='0px' placeholder='Search Doctor' variant="unstyled" padding='5px'/>
            </Flex>
  </Box>      
        
        {/* -------------------------------- */}
        
        <Box position={"relative"} top="40"
         h="20vh" w="90vw" m="auto" borderRadius={"10"}
         >
         <Image  src={loginlogo} alt="serachbar" />

        </Box>



      </Box>
    }

    
    {
        SmallScreen && <UserbottomNavbar/>
    }
    
    </>
  )
}

export default SmallSearchbar