import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import UserNavbar from '../pages/UserNavbar'
import Customdashboard from '../pages/Customdashboard'
import { useState } from 'react';

const UserDashboard = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const [inputdoctor ,SetInputDoctor] = useState("")

  return (
    <>
     <Box  >
     {
      !SmallScreen && 
       <UserNavbar SetInputDoctor={SetInputDoctor} />
     }
       
       <Customdashboard inputdoctor={inputdoctor} /> 

     </Box>
    </>
  )
}

export default UserDashboard