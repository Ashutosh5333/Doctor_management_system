import { Box, Image, Tooltip} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserSidebar = () => {

  return (
    <>
    <Box  p={1}  display="flex"  gap={2}
        >

        <Box gap="8px">

          <Box
            p={2}  display={"flex"}
            gap="8px" justifyContent={"space-between"}
          >
            <Box fontSize={"2.2em"} m="auto">
              <Box  m="auto">
              <Image
               objectFit='cover'
               boxSize='100px'
              m="auto"  borderRadius="100" 
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ghBCtRbSyvx18CdoOPaCgmKWZ923ypEB-g&usqp=CAU"} 
              />
           </Box>         
             
            </Box>
            <Box> </Box>
          </Box>


        <Box p={5} textAlign={"center"} mt="10">
      <Text fontSize={"1rem"} textAlign={"center"} fontWeight={"600"}> Ashutosh  lakshakar</Text>
      </Box>


          <Box
        
        p={2}
        display={"flex"}
        mt={8}
        gap="8px"
        justifyContent={"space-between"}
        borderRadius={"10px"}
        _hover={{
          bgGradient: "linear(to-r, gray.200, gray.200)",
        }}
        width="100%"
      >
      
        <Link to="/doctordash">
          <Box fontSize={"2rem"}>
            <AiFillHome />
          </Box>
        </Link>
     
        <Box className="sidename" fontSize="1.1em" margin={"auto"}>
          <Text textAlign={"left"}> Home </Text>
        </Box>
      </Box>

     

      


        </Box>
        </Box>
    
    
    </>
  )
}

export default UserSidebar