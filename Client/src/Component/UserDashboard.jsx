import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import UserNavbar from '../pages/UserNavbar'
import Customdashboard from '../pages/Customdashboard'

const UserDashboard = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });


  return (
    <>
     <Box border={"3px solid black"} h="100vh">
     {
      !SmallScreen && 
       <UserNavbar/>
     }
       
       <Customdashboard/> 

     </Box>
    </>
  )
}

export default UserDashboard