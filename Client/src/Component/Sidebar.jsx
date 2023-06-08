import { Box, Divider } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom";
import {AiOutlineDashboard} from "react-icons/ai"
import {BsListUl} from "react-icons/bs"
import {AddIcon } from "@chakra-ui/icons"



const Sidebar = () => {

  return (
    <Box h="auto"  boxShadow={"lg"}>
       
       <Box  h="90vh"  p="2" gap={"5"}  
        position={"relative"} alignItems={"center"}  justifyContent={"center"}
       display={{base:"none", md:"flex", lg:"flex"}} flexDirection={"column"} >
               
               <Link to="/dash"> 
              <Box  p="2" m="auto">      
                 <AiOutlineDashboard fontSize="1.2rem" />
              </Box>
               </Link>
             <Link to="/">
              <Box  p="2" m="auto" > 
              <BsListUl fontSize="1.2rem" />
               </Box>
               </Link>

               <Divider  color={"gray"} />
               <Link to="/">
              <Box  p="2" m="auto">                 
               <AddIcon fontSize="1.2rem" />
               </Box>
               </Link>

        </Box>
    
    
    </Box>
  )
}

export default Sidebar