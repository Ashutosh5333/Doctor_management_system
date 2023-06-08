import { Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Component/Sidebar'

const Home = () => {

  return (
    <Box border="3px solid black" h="100%" display={"flex"} justifyContent={"space-between"}>

        <Box  w={{base:"10%",md:"7%",lg:"5%"}} gap="5"> 
        
         <Sidebar/>
        </Box>

        <Box border={"2px solid red"} w={{base:"100%",md:"95%",lg:"92%"}} > Dashboard </Box>    
    </Box>
  )
}

export default Home