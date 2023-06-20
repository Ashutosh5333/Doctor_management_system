import { Box, Image } from "@chakra-ui/react";
import React from "react";
import DashboardL from "../Images/DashboardL.jpg";
import createproject from "../Images/createproject.jpg";
import Projectlist from "../Images/Projectlist.jpg";
import  Dashboardactive from "../Images/Dashboardactive.png";
import createprojectactive from "../Images/createprojectactive.png";
import Projectlistactive from "../Images/Projectlistactive.png";
import { Link } from "react-router-dom";

const Bottombar = () => {

  
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


      <Link to="/admin/appoinmentlist">
        <Box p="2" m="auto">
        {path ==="/admin/appoinmentlist" ?  <Image src={Projectlistactive}  /> : <Image src={Projectlist} w="30%" />}
        </Box>
        
      </Link>
    </Box>
  );
};

export default Bottombar;
