import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Card, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const AppoinmentSlider = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const [TProject, SetTotal] = useState(0);
  const [Approved, SetApproved] = useState(0);
  const [waiting, Setwaiting] = useState(0);
  const [NewAppointment, SetNewAppointment] = useState(0);

  //
  useEffect(() => {
    Allproject();
  }, []);

  const Allproject = async () => {
    try {
      const res = await axios.get(
        "https://doctorappoinment.onrender.com/countAppointment"
      );
      //  console.log(res.data.data)
      SetApproved(res.data.data.Approved);
      SetNewAppointment(res.data.data.NewAppoinment);
      Setwaiting(res.data.data.Waiting);
      SetTotal(res.data.data.totalAppiontment);
    } catch (err) {
      console.log(err);
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      {!SmallScreen && (
        <Box
          h="20vh"
          w="95%"
          m="auto"
          display={"flex"}
          flexDirection={"column"}
        >
          <Flex w="70vw" m="auto" mt="10" gap="5">
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="10px solid blue"
              w={{ md: "100%", lg: "100%" }}
              h="150px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Total Appointment
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", md: "center", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {TProject}{" "}
              </Text>
            </Card>

            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="10px solid blue"
              w={{ md: "100%", lg: "100%" }}
              h="150px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "start", md: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                New Appointment
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", md: "center", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {NewAppointment}{" "}
              </Text>
            </Card>
          </Flex>

          <Flex w="70vw" m="auto" mt="10" gap="5">
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="10px solid blue"
              w={{ md: "100%", lg: "100%" }}
              h="150px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Approved Appointment
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", md: "center", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {Approved}{" "}
              </Text>
            </Card>

            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="10px solid blue"
              w={{ md: "100%", lg: "100%" }}
              h="150px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Waiting Appointment
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", md: "center", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {waiting}{" "}
              </Text>
            </Card>
          </Flex>

          {/* --------------- */}
        </Box>
      )}

      {/* ------------------  ---------------- */}

    
    </>
  );
};

export default AppoinmentSlider;
