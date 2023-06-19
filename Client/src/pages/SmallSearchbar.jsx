import React from 'react'
import UserbottomNavbar from '../Component/UserbottomNavbar';
import { useBreakpointValue } from '@chakra-ui/react';

const SmallSearchbar = () => {
    const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

  return (
    <>

    
    {
        SmallScreen && <UserbottomNavbar/>
    }
    
    </>
  )
}

export default SmallSearchbar