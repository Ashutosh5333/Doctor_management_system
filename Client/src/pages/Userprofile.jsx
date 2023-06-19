import React from 'react'
import { useBreakpointValue,Text, Flex, Button } from '@chakra-ui/react';
import UserbottomNavbar from '../Component/UserbottomNavbar';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';


export const Userprofile = () => {
    const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

    return (
      <>
      {
        SmallScreen &&   <Box   h="70vh"  width={{base:"90vw",md:"90vw" }}  m="auto"  p="6" spacing={3} >
     
     <Flex h="60vh" boxShadow={"dark"}  flexDirection={"column"} gap="5"   >

        <Flex w="80%" m="auto" > 
           <Box  m="auto">
              <Image
               objectFit='cover'
               boxSize='200px'
              m="auto"  borderRadius="100" 
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGavVuDikOdGdSTddKLJnpcIXUB1I2OTO238tOAF2vHvs2EBtFCvB59mQkv2L-2B6FGk&usqp=CAU"} 

              />
           </Box>
         
         </Flex>

        <Flex  h="60vh" w="90%"   m="auto" flexDirection={"column"}  >
        <Box w="90%"    m="auto" textAlign={"center"}>
                <Text fontWeight={"600"} color="#050452"> Hello </Text>
               </Box>
               <Box w="90%"   m="auto" mt="5" >
                <Heading  textAlign={"center"} color="#050452"> Ashutosh lakshakar </Heading>
               </Box>

               <Box w="90%"    m="auto" mt="5">
                <Text  textAlign={"center"} fontWeight={"400"} letterSpacing={"1px"}>
                 </Text>
               </Box>

               <Box w="90%"     m="auto" mt="5" >
                <Text  textAlign={"center"} fontWeight={"600"}>{
                  
                } </Text>
               </Box>

               <Box w="90%"    m="auto" mt="5" textAlign={"center"}>
                <Button   bg="blue" color="#fff" p="5" > Back To Doctor dashboard </Button>
               </Box>
             
        </Flex>

     </Flex>
   

    </Box> 
      }

  
      
      {
          SmallScreen && <UserbottomNavbar/>
      }
      </>
  )
}
