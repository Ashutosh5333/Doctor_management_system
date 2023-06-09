import React from "react";
import Sidebar from "../Component/Sidebar";
import Dashboard from "./Dashboard";
import { Box } from "@chakra-ui/react";


const Admin = () => {
  return (
    <>
      <Box
        border="3px solid black"
        h="100%"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box w={{ md: "7%", lg: "5%" }} gap="5">
          <Sidebar />
        </Box>

        <Box
          border={"2px solid red"}
          w={{ base: "100%", md: "95%", lg: "92%" }}
          m={{ base: "auto" }}
        >
          <Dashboard />
        </Box>
      </Box>
    </>
  );
};

export default Admin;
