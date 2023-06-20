import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import UserNavbar from '../pages/UserNavbar'
import Customdashboard from '../pages/Customdashboard'
import { useState } from 'react';
import UserbottomNavbar from './UserbottomNavbar';

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
       
       <Customdashboard SetInputDoctor={SetInputDoctor} inputdoctor={inputdoctor} /> 

       {
        SmallScreen && 
          <UserbottomNavbar/>
       }
       
     </Box>
    </>
  )
}

export default UserDashboard