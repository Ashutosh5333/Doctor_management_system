import React, { useEffect, useState } from "react";
import { Box, Card, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { AiFillHeart } from "react-icons/ai";
import { GiHospitalCross } from "react-icons/gi";
import { FaTooth } from "react-icons/fa";

const SpecialistSwiper = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });


  return (
    <>
    {
      !SmallScreen && <Swiper
        swipeable={true}
        draggable={true}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w={{ base: "600px", lg: "300px" }}
            h="180px"
            bg="#d13470"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
              <Box m="auto" h="50px" w="50px" mt="35px" ml="35px">
                <AiFillHeart fontSize={"2rem"} bg="#d13470" color="#d13470" />
              </Box>
              <Text fontSize={"1rem"} color="#fff" mt="4" fontWeight={"600"}>
                {" "}
                Cardiologist{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w={{ base: "600px", lg: "300px" }}
            h="180px"
            bg="#46b4e3"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
             <Box m="auto" h="50px" w="50px" mt="35px" ml="35px">
                <FaTooth fontSize={"2rem"} bg="#d13470" color="#46b4e3" />
              </Box>
              <Text fontSize={"1rem"} color="#fff" mt="4" fontWeight={"600"}>
                {" "}
                Dentist{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w={{ base: "600px", lg: "300px" }}
            h="180px"
            bg="yellow"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
              <Box m="auto" h="50px" w="50px" mt="32px" ml="30px">
                <Image src="data:image/png;base64,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" />
              </Box>
              <Text fontSize={"1rem"} color="#fff" mt="4" fontWeight={"600"}>
                Neurologist{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            bg="#3ef0b2"
            w={{ base: "600px", lg: "300px" }}
            h="180px"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
              <Box m="auto" h="50px" w="50px" mt="35px" ml="35px">
                <GiHospitalCross fontSize={"2rem"} color="#3ef0b2" />
              </Box>
              <Text fontSize={".8rem"} color="#fff" mt="4" fontWeight={"600"}>
                Intensive Care{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper>

    }

    {
      SmallScreen && <Swiper
        swipeable={true}
        draggable={true}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w={{ base: "600px", lg: "300px" }}
            h="180px"
            bg="#d13470"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
              <Box m="auto" h="50px" w="50px" mt="35px" ml="35px">
                <AiFillHeart fontSize={"2rem"} bg="#d13470" color="#d13470" />
              </Box>
              <Text fontSize={"1rem"} color="#fff" mt="4" fontWeight={"600"}>
                {" "}
                Cardiologist{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w={{ base: "600px", lg: "300px" }}
            h="180px"
            bg="#46b4e3"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
             <Box m="auto" h="50px" w="50px" mt="35px" ml="35px">
                <FaTooth fontSize={"2rem"} bg="#d13470" color="#46b4e3" />
              </Box>
              <Text fontSize={"1rem"} color="#fff" mt="4" fontWeight={"600"}>
                {" "}
                Dentist{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w={{ base: "600px", lg: "300px" }}
            h="180px"
            bg="yellow"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
              <Box m="auto" h="50px" w="50px" mt="32px" ml="30px">
                <Image src="data:image/png;base64,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" />
              </Box>
              <Text fontSize={"1rem"} color="#fff" mt="4" fontWeight={"600"}>
                Neurologist{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            bg="#3ef0b2"
            w={{ base: "600px", lg: "300px" }}
            h="180px"
          >
            <Box
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              bg="#fff"
              w="100px"
              h="100px"
              borderRadius={"50px"}
              m="auto"
              textAlign={"center"}
            >
              <Box m="auto" h="50px" w="50px" mt="35px" ml="35px">
                <GiHospitalCross fontSize={"2rem"} color="#3ef0b2" />
              </Box>
              <Text fontSize={".8rem"} color="#fff" mt="4" fontWeight={"600"}>
                Intensive Care{" "}
              </Text>
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper>

    }
     
    </>
  );
};

export default SpecialistSwiper;
