import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

import front  from "../Images/front.jpg"

const Home = () => {

  return (
    <Box h="100vh" boxShadow="lg" >

      <Box  marginTop={"10px"}>  
         <Text textAlign={"center"} color="#220f7a" fontSize={{base:"1.8rem",md:"2rem",lg:"2rem"}}
         fontWeight={"600"}
         > Parth.ly  </Text>
      </Box>

      <Box  width={{base:"70%",md:"50%",lg:"50%"}} h="30vh" m="auto"
      mt={{ base:"20px" ,md:"20px",lg:"30px"}}
      >  
       <Image  justifyContent={"center"}
      width={{base:"400px",md:"300px",lg:"300px"}}  
       m="auto"
        src={front} />

      </Box>


      <Box   display={"flex"}
       justifyContent={{lg:"space-around"}}
       flexDirection={{base:"column",md:"row",lg:"row"}}
       mt={{base:"40%", md:"22%",lg:"160px"}} 
      >
         
         <Box   m={{base:"auto"}}  mt={{base:"20px"}}> 
            <Button w="300px" bg="#050452" color="#ffffff" p="6"  borderRadius={"20px"}> Sign in </Button>
         </Box>

         <Box  m={{base:"auto"}}     mt={{base:"10px"}}  >
            <Button w="300px" bg="#fff" boxShadow='dark-lg' p='6' borderRadius={"20px"} color="#050452"> Create an Account </Button>
         </Box>


      </Box>

     

    </Box>
  )
}

export default Home