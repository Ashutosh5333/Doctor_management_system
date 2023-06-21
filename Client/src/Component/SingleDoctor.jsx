import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  useColorModeValue,
  Text,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  BookAppointment,
  getSingleDoctordetail,
} from "../Redux/AppReducer/Action";
import { Card, Input } from "@chakra-ui/react";
import UserNavbar from "./../pages/UserNavbar";
import { ProjectSkelton } from "./../Admin/ProjectSkelton";
import UserbottomNavbar from "./UserbottomNavbar";

const SingleDoctor = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const SmallScreenDoctor = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const toast = useToast();
  const lightColor = useColorModeValue("#757575", "#9aa0a6");
  const [loading, setLoading] = useState(false);
  const [single, Setsingle] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, SetPost] = useState({
    Mobile: "",
    Doctor: "",
    Date: "",
    pateintname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleBookAppoinmet = () => {
    if (
      post.Mobile !== "" &&
      post.Doctor !== "" &&
      post.pateintname !== "" &&
      post.Date !== ""
    ) {
      setLoading(true)
      dispatch(BookAppointment(post)).then((res) => {
        if (
          res.type == "BOOKAPPOINMETUCESS" &&
          res.payload.msg === "Appoinment booked Succesfully"
        ) {
          toast({
            position: "top",
            colorScheme: "green",
            status: "success",
            title: "Appoinment registered Sucessfully",
          });
          setLoading(false)
        }
      });
    } else {
      toast({
        position: "top",
        colorScheme: "red",
        status: "error",
        title: "Fill all the details",
      });
    }
  };

  useEffect(() => {
    dispatch(getSingleDoctordetail(id))
      .then((res) => {
        Setsingle(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {!SmallScreen && <UserNavbar />}

      <Flex flexDirection={"column"} gap="10px">
        {/* -------------------------------- */}

        {!SmallScreenDoctor && (
          <Box
            h="65vh"
            width={{ base: "80vw", md: "90vw", lg: "90vw" }}
            m="auto"
            mt="-10"
            p="6"
            spacing={3}
          >
            {single ? (
              <Flex boxShadow={"dark"} justifyContent={"space-between"} gap="5">
                <Flex w="40%" h="60vh">
                  <Card m="auto">
                    <Image
                      objectFit="cover"
                      boxSize="300px"
                      m="auto"
                      borderRadius="lg"
                      src={single?.pic}
                    />
                  </Card>
                </Flex>

                <Flex w="50%" h="60vh" flexDirection={"column"}>
                  <Box w="90%" m="auto">
                    <Text fontWeight={"600"} color="#050452">
                      {" "}
                      About Me{" "}
                    </Text>
                  </Box>
                  <Box w="90%" m="auto" mt="-5">
                    <Heading color="#050452"> {single?.name} </Heading>
                  </Box>

                  <Box w="90%" m="auto" mt="-5">
                    <Text fontWeight={"400"} letterSpacing={"1px"}>
                      {single?.About}{" "}
                    </Text>
                  </Box>

                  <Box w="90%" m="auto" mt="-1">
                    <Text fontWeight={"600"}>{single?.consultant} </Text>
                  </Box>

                  <Box w="90%" m="auto" mt="-5">
                    <Button bg="lightgreen"> Book Appoinment </Button>
                  </Box>
                </Flex>
              </Flex>
            ) : (
              <ProjectSkelton />
            )}
          </Box>
        )}

        {/* ------------------------------------  */}
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
                    src={single?.pic}
                  />
                </Box>
              </Flex>

              <Flex h="60vh" w="90%" m="auto" flexDirection={"column"}>
                <Box w="90%" m="auto" textAlign={"center"}>
                  <Text fontWeight={"600"} color="#050452">
                    {" "}
                    About Me{" "}
                  </Text>
                </Box>
                <Box w="90%" m="auto" mt="5">
                  <Heading textAlign={"center"} color="#050452">
                    {" "}
                    {single?.name}{" "}
                  </Heading>
                </Box>

                <Box w="90%" m="auto" mt="5">
                  <Text
                    textAlign={"center"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                  >
                    {single?.About}{" "}
                  </Text>
                </Box>

                <Box w="90%" m="auto" mt="5">
                  <Text textAlign={"center"} fontWeight={"600"}>
                    {single?.consultant}{" "}
                  </Text>
                </Box>

                <Box w="90%" m="auto" mt="5" textAlign={"center"}>
                  <Button bg="lightgreen"> Book Appoinment </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        )}

        {/* --------------------------- Form ------------------------------- */}

        <Box
          w={{ base: "90vw", md: "80vw", lg: "80vw" }}
          m="auto"
          mt={{ base: "22%", md: "1px", lg: "1px" }}
          mb="20"
        >
          <Box
            width="100%"
            m="auto"
            mt="1"
            background={"#f3f3f3"}
            p="10"
            display={{ base: "flex" }}
            flexDirection={{ base: "column" }}
          >
            <Box width="100%" m="auto" mt="20px" marginLeft={"10px"}>
              <Text
                textAlign={{ base: "center", md: "start", lg: "start" }}
                fontSize="1.2rem"
                color="#444444"
              >
                {" "}
                Have An Emergency ?{" "}
              </Text>
              <Text
                textAlign={{ base: "center", md: "start", lg: "start" }}
                fontSize={{ base: "1.2rem", md: "2rem", lg: "2rem" }}
                fontWeight={"600"}
                color="#444444"
                fontFamily={"playfair Display"}
                mt={{ base: "10px" }}
              >
                {" "}
                Book your Appointment{" "}
              </Text>
            </Box>

            <Box mt="20px">
              <Box
                display={"flex"}
                justifyContent="space-around"
                flexDirection={{ base: "column", md: "row", lg: "row" }}
                gap={"10px"}
              >
                <Input
                  placeholder="Patient name *"
                  background={"#fff"}
                  width="100%"
                  name="pateintname"
                  onChange={handleChange}
                />
                <Input
                  placeholder="Doctor Name*"
                  background={"#fff"}
                  width="100%"
                  name="Doctor"
                  onChange={handleChange}
                />
              </Box>

              <Box
                display={"flex"}
                justifyContent="space-around"
                flexDirection={{ base: "column", md: "row", lg: "row" }}
                gap={"10px"}
                mt="20px"
              >
                <Input
                  placeholder="Phone Number *"
                  background={"#fff"}
                  width="100%"
                  name="Mobile"
                  onChange={handleChange}
                />
                <Input
                  type={"datetime-local"}
                  background={"#fff"}
                  width="100%"
                  name="Date"
                  onChange={handleChange}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-around"
                gap={"10px"}
                mt="20px"
              ></Box>
            </Box>

            <Box m="auto" mt="10">
              <Button
                textAlign={"center"}
                bg="black"
                color="#fff"
                onClick={handleBookAppoinmet}
                isLoading={loading}
              >
                {" "}
                Book Now{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>

      {SmallScreen && <UserbottomNavbar />}
    </>
  );
};

export default SingleDoctor;
