import { Box, Divider } from '@chakra-ui/react'
import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineDashboard} from "react-icons/ai"
import {BsListUl} from "react-icons/bs"

import { BiLogOut } from 'react-icons/bi';



const Sidebar = () => {
  const navigate = useNavigate()
  
  const handlelogout = () =>{
    localStorage.clear()
    navigate("/adminlogin")
  }


  return (
    <Box h="auto"  boxShadow={"lg"}>
       
       <Box  h="100vh"  p="2" gap={"5"}  
        position={"relative"} alignItems={"center"}  justifyContent={"center"}
       display={{base:"none", md:"flex", lg:"flex"}} flexDirection={"column"} >
               
               <Link to="/admin"> 
              <Box  p="2" m="auto">      
                 <AiOutlineDashboard fontSize="1.2rem" />
              </Box>
               </Link>

             <Link to="/admin/appoinmentlist">
              <Box  p="2" m="auto" > 
              <BsListUl fontSize="1.2rem" />
               </Box>
               </Link>

               <Divider  color={"gray"} />
             
               <Link>
              <Box  p="2" m="auto" > 
              <BiLogOut onClick={handlelogout} fontSize="1.2rem" />
             </Box>
               </Link>
            

        </Box>
    
    
    </Box>
  )
}

export default Sidebar