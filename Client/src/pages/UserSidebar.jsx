import React from "react";
import {
  Box,
  Divider,
  Heading,
  Image,
  Text,
  Button
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const UserSidebar = () => {

  const loggeddata = JSON.parse(localStorage.getItem("loggeduser"))


  return (
    <Box p={1} display="flex" gap={2}>
      <Box gap="8px">
      <Heading size="md" mt="5" color="#050452" textAlign={"center"} fontWeight="bold" mb="2">User Profile</Heading>
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

        <Box p={5} textAlign={"center"} mt="10"  fontWeight={"600"}>
        
          <Text fontSize={".8rem"} color="#050452" textAlign={"start"} fontWeight={"600"}>
             {`Name : - ${loggeddata?.userName} ` }
          </Text>
        </Box>

        <Box p={5} textAlign={"center"} mt="3"  fontWeight={"600"}>
        
        <Text fontSize={".8rem"} color="#050452" textAlign={"start"} fontWeight={"600"}>
           {`Email : - ${loggeddata?.userEmail} ` }
        </Text>
      </Box>
      
             <Box w="50%" mr="1"  mt="5" textAlign={"center"}>
              <Link to="/doctordash">
                <Button bg="blue" color="#fff" p="5">
                  {" "}
                  Back dashboard
                </Button>
              </Link>
            </Box>
      
      </Box>
    </Box>
  );
};

export default UserSidebar;

