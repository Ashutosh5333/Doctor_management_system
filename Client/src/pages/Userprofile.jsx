import React, { useEffect, useState } from "react";
import { useBreakpointValue, Text, Flex, Button, Box, useToast } from "@chakra-ui/react";
import axios from "axios";

import UserbottomNavbar from "../Component/UserbottomNavbar";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CancelAppointment, getAppointmentdata } from "../Redux/AppReducer/Action";
import UserNavbar from "./UserNavbar";
import UserSidebar from "./UserSidebar";
import { Link } from "react-router-dom";
import { ProjectSkelton } from "./../Admin/ProjectSkelton";

export const Userprofile = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const dispatch = useDispatch();
  const Myappoinmnet = useSelector((store) => store.AppReducer.myAppoinment);
  const toast = useToast();
  const loggeddata = JSON.parse(localStorage.getItem("loggeduser"))

   const cancelAppoinmnet = (_id) =>{
    dispatch(CancelAppointment(_id))
    .then((res) =>{
      toast({
        position: "top",
        colorScheme: "green",
        status: "success",
        title: "Appoinment Cancel Sucessfully",
      });
      dispatch(getAppointmentdata);
    })

   }

  useEffect(() => {
    dispatch(getAppointmentdata);
  }, []);

  return (
    <>
      {!SmallScreen && <UserNavbar />}

      {!SmallScreen && (
        <Flex
          h="100vh"
          w="100vw"
          m="auto"
          justifyContent={"space-between"}
          gap="5"
          mt="-20"
        >
          <Flex boxShadow={"lg"} w="18vw">
            <UserSidebar />
          </Flex>

          <Flex w="80%" flexDirection={"column"}>
            <Box>
              <Heading textAlign={"center"} mt="5" color="#050452"> Your Appoinment Details </Heading>
            </Box>
            {Myappoinmnet.length > 0 ? (
              Myappoinmnet.length > 0 &&
              Myappoinmnet.map((el) => {
                return (
                  <Box
                    borderRadius={"10"}
                    boxShadow={"dark-lg"}
                    h="60vh"
                    w="90%"
                    m="auto"
                    mt="5"
                    p="5"
                  >
                    <Flex h="7vh" gap="2" mt="5">
                      <Flex
                        borderRadius={"10"}
                        border="1px solid gray"
                        justifyContent={"space-around"}
                        w="50%"
                        p="2"
                      >
                        <Text textAlign={"start"} fontWeight={"600"}>
                          {" "}
                          Appointment Number{" "}
                        </Text>
                        <Text> 459217 </Text>
                      </Flex>

                      <Flex
                        border="1px solid gray"
                        borderRadius={"10"}
                        justifyContent={"space-around"}
                        w="50%"
                        p="2"
                      >
                        <Text textAlign={"start"} fontWeight={"600"}>
                          Patient Name
                        </Text>
                        <Text>{el.pateintname} </Text>
                      </Flex>
                    </Flex>

                    <Flex h="7vh" gap="2" mt="5">
                      <Flex
                        border="1px solid gray"
                        borderRadius={"10"}
                        justifyContent={"space-around"}
                        w="50%"
                        p="2"
                      >
                        <Text textAlign={"start"} fontWeight={"600"}>
                          {" "}
                          Mobile Number{" "}
                        </Text>
                        <Text>{el.Mobile} </Text>
                      </Flex>

                      <Flex
                        border="1px solid gray"
                        borderRadius={"10"}
                        justifyContent={"space-around"}
                        w="50%"
                        p="2"
                        fontSize={{md:".9rem",lg:"1.1rem"}}
                      >
                        <Text textAlign={"start"} fontWeight={"600"}>
                          Appointment Date{" "}
                        </Text>
                        <Text>  {new Date(el.createdAt).toDateString()}</Text>
                      </Flex>
                    </Flex>

                    <Flex  h="7vh" gap="2" mt="5">
                      <Flex
                        borderRadius={"10"}
                        border="1px solid gray"
                        justifyContent={"space-around"}
                        w="50%"
                        p="2"
                      >
                        <Text textAlign={"start"} fontWeight={"600"}>
                          {" "}
                          Apply Date{" "}
                        </Text>
                     
                        <Text> {el.Date}</Text>
                   
                      </Flex>
                    </Flex>

                    <Flex h="8vh" gap="2" mt="5">
                      <Flex
                        justifyContent={"space-around"}
                      
                        w="100%"
                        p="2"
                        textAlign={"start"}
                      >
                        <Text textAlign={"start"} fontWeight={"600"}>
                          Appoinment Status
                        </Text>
                        <Text>{el.Status} </Text>
                      </Flex>
                    </Flex>

                    <Flex h="8vh" gap="2" mt="5">
                      <Flex
                        justifyContent={"space-around"}
                        w="100%"
                        p="2"
                        textAlign={"start"}
                      >
                        <Text textAlign={"start"} fontWeight={"600"}>
                          Cancel Appoinment{" "}
                        </Text>
                        <Button onClick={() =>cancelAppoinmnet(el._id)} bg="red.300" color="#fff">
                          {" "}
                          Cancel{" "}
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })
            ) : (
              <ProjectSkelton />
            )}
          </Flex>
        </Flex>
      )}

      {SmallScreen && (
        <Box
          h="70vh"
          width={{ base: "90vw", md: "90vw" }}
          m="auto"
          p="6"
          spacing={3}
        >
          <Flex h="60vh" boxShadow={"dark"} flexDirection={"column"} gap="5">
            <Flex w="80%" m="auto">
              <Box m="auto">
                <Image
                  objectFit="cover"
                  boxSize="200px"
                  m="auto"
                  borderRadius="100"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGavVuDikOdGdSTddKLJnpcIXUB1I2OTO238tOAF2vHvs2EBtFCvB59mQkv2L-2B6FGk&usqp=CAU"
                  }
                />
              </Box>
            </Flex>

            <Flex h="60vh" w="95%" m="auto" flexDirection={"column"}>
              <Box w="90%" m="auto" mt="5">
                <Heading textAlign={"center"} fontSize={"1rem"} color="#050452">
                  {" "}
                {loggeddata?.userName}
                </Heading>
              </Box>

              <Box
                w="100%"
                borderRadius={"10"}
                bg="gray.100"
                p="2"
                m="auto"
                mt="5"
              >
                <Text
                  textAlign={"start"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                >
                  {`Email - ${loggeddata?.userEmail}`}
                </Text>
                <Text
                  textAlign={"start"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  mt="2px"
                >
                
                </Text>
              </Box>
            </Flex>

            {/* ----------------------------- */}

            <Flex h="60vh" w="95%" m="auto" flexDirection={"column"}>
              {Myappoinmnet.length > 0 &&
                Myappoinmnet.map((el) => {
                  return (
                    <Box
                      w="100%"
                      borderRadius={"10"}
                      bg="gray.100"
                      p="5"
                      m="auto"
                      mt="5"
                    >
                    <Text mt="3" fontWeight={"600"}>
                        {" "}
                        <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                          Apply Date :{" "}
                        </span>{" "}
                        {new Date(el.createdAt).toDateString()}{" "}

                      </Text>
                      <Text mt="3" fontWeight={"600"}>
                        {" "}
                        <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                          Appoinment Date :{" "}
                        </span>{" "}
                        {/* {new Date(el.createdAt).toDateString()}{" "} */}
                         {el.Date}
                      </Text>
                      <Text mt="2" fontWeight={"600"}>
                        {" "}
                        <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                          Patient Name :{" "}
                        </span>
                        {el.pateintname}{" "}
                      </Text>

                      <Text mt="2" fontWeight={"600"}>
                        {" "}
                        <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                          Mobile Number :{" "}
                        </span>
                        {el.Mobile}{" "}
                      </Text>
                      <Text mt="2" fontWeight={"600"}>
                        {" "}
                        <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                          Status :{" "}
                        </span>
                        {el.Status}{" "}
                      </Text>
                    </Box>
                  );
                })}
            </Flex>

            <Box w="90%" m="auto" mt="5" textAlign={"center"}>
              <Link to="/doctordash">
                <Button bg="blue" color="#fff" p="5">
                  {" "}
                  Back To Doctor dashboard{" "}
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      )}

      {SmallScreen && <UserbottomNavbar />}
    </>
  );
};
