import { Box } from '@chakra-ui/react'
import React from 'react'
import AppoinmentSlider from './AppoinmentSlider'
import Bottombar from './Bottombar'

const Dashboard = () => {

  return (
    <>
     <Box  h="90vh">

       <Box>
         <AppoinmentSlider/>
       </Box>

       <Box>
        <Bottombar/>
       </Box>

     </Box>
    </>
  )
}

export default Dashboard