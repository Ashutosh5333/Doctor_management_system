import { Box, Image } from "@chakra-ui/react";
import React from "react";
import DashboardL from "../Images/DashboardL.jpg";
import Projectlist from "../Images/Projectlist.jpg";
import  Dashboardactive from "../Images/Dashboardactive.png";
import Projectlistactive from "../Images/Projectlistactive.png";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut } from 'react-icons/bi';



const Bottombar = () => {
  const navigate = useNavigate()

   const handlelogout = () =>{
      localStorage.clear()
      navigate("/adminlogin")
   }
  
  const path=window.location.pathname;
  return (
    <Box
      h="10vh"
      width="100%"
      position={"fixed"}
      bottom="0"
      right="0%"
      boxShadow={"dark-lg"}
      bg="#ffffff"
      borderRadius={"30px"}
      display={{ base: "flex", md: "none", lg: "none" }}
      justifyContent={"space-between"}
      alignContent={"center"}
      m="auto"
      mb="1"
      p="5"
    >
      <Link to="/admin">
        <Box p="2" m="auto">
        { path ==="/admin" ?  <Image src={Dashboardactive} w="80%" />: <Image src={DashboardL} w="30%" /> }
        </Box>
      </Link>

      <Box p="2" m="auto">
          <BiLogOut fontSize={"1.5rem"} onClick={handlelogout}/>
      </Box>
        

      <Link to="/admin/appoinmentlist">
        <Box p="2" m="auto">
        {path ==="/admin/appoinmentlist" ?  <Image src={Projectlistactive}  /> : <Image src={Projectlist} w="30%" />}
        </Box>
        
      </Link>
    </Box>
  )
};

export default Bottombar;
