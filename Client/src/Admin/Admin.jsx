import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";


const Admin = () => {
  return (
    <>
      <Navbar/>
      <Box
        // border="3px solid black"
        h="100%"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box w={{ md: "7%", lg: "5%" }} gap="5">
          <Sidebar />
        </Box>

        <Box
         
          w={{ base: "100%", md: "95%", lg: "95%" }}
          m={{ base: "auto" }}
        >
          <Dashboard />
        </Box>
      </Box>
    </>
  );
};

export default Admin;
