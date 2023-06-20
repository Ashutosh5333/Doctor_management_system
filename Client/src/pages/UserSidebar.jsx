import React from "react";
import {
  Box,
  Divider,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <Box p={1} display="flex" gap={2}>
      <Box gap="8px">
      <Heading size="md"  textAlign={"center"} fontWeight="bold" mb="2">User Profile</Heading>
      <Divider mb="2" />
        <Box p={2} display={"flex"} gap="8px" justifyContent={"space-between"}>
          <Box fontSize={"2.2em"} m="auto">
            <Box m="auto">
              <Image
                objectFit="cover"
                boxSize="100px"
                m="auto"
                borderRadius="100"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ghBCtRbSyvx18CdoOPaCgmKWZ923ypEB-g&usqp=CAU"
                }
              />
            </Box>
          </Box>
          <Box> </Box>
        </Box>

        <Box p={5} textAlign={"center"} mt="10">
        
          <Text fontSize={".8rem"} textAlign={"start"} fontWeight={"600"}>
             {`Name : - Ashutosh lakshkar` }
          </Text>
        </Box>


      
      </Box>
    </Box>
  );
};

export default UserSidebar;

