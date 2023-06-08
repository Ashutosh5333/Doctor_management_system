import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {


  return (
    <>
    <Box border="0.1px solid #050452"  height={"120px"} 
     backgroundColor={"#050452"} borderEndStartRadius={"50px"}
    >
      <Box mt="40px" >
     <Text color="#ffffff" textAlign={"center"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.5rem"}}  >  Doctor Mangement System </Text>
      </Box>
      
    </Box>
    </>
  )
}

export default Navbar