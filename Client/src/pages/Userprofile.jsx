import React from 'react'
import { useBreakpointValue } from '@chakra-ui/react';
import UserbottomNavbar from '../Component/UserbottomNavbar';

export const Userprofile = () => {
    const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

    return (
      <>
  
      
      {
          SmallScreen && <UserbottomNavbar/>
      }
      </>
  )
}
