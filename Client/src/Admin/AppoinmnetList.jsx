import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Bottombar from "./Bottombar";
import AppoinmentListCard from "./AppoinmentListCard";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AppoinmnetList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/adminlogin");
  };

  return (
    <>
      <Box
        w="100%"
        height={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box  w={{ md: "8%", lg: "5%" }}>
          <Sidebar />
        </Box>

        <Box   w={{ base: "100%", md: "90%", lg: "90%" }} m="auto" h="100vh" >
          <Navbar/>
          
          <Box
            boxShadow={"lg"}
            bg="#ffffff"
            w={{ base: "100%", md: "100%", lg: "99%" }}
            m="auto"
            rounded={"lg"}
          >
            <AppoinmentListCard />
          </Box>


          <Bottombar />

       
        </Box>


      </Box>
    </>
  );
};

export default AppoinmnetList;
