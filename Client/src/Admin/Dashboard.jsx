import { Box } from '@chakra-ui/react'
import React from 'react'
import AppoinmentSlider from './AppoinmentSlider'

const Dashboard = () => {

  return (
    <>
     <Box  h="90vh">

       <Box>
         <AppoinmentSlider/>
       </Box>

 

     </Box>
    </>
  )
}

export default Dashboard