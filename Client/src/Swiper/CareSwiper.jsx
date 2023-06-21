import React from "react";
import { Box, Card, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import care1 from "../Images/care1.jpg";
import care2 from "../Images/care2.jpg";
import care3 from "../Images/care3.jpg";
import care4 from "../Images/care4.jpg";

const CareSwiper = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

  return (
    <>
     { !SmallScreen &&  <Swiper
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
            // w="300px"
             w={{base:"500px",md:"400px" ,lg:"300px"}}
            h="180px"
            ml="15px"
          >
            <Image    w={{base:"500px",md:"400px" ,lg:"300px"}} 
            h="200px" src={care1} />
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            
            w="300px"
            h="180px"
          >
            <Box w="100px" m="auto">
              <Image w="50px" m="auto" src={care2} />
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w="300px"
            h="180px"
            ml="15px"
          >
            <Box  w={{base:"80px",md:"150px" , lg:"180px"}}
             m="auto">
              <Image w="50px"  src={care3} />
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            
            w="300px"
            h="180px"
            ml="15px"
          >
            <Box  w={{base:"80px",md:"190px", lg:"250px"}}
              h={{base:"60px", md:"100px", lg:"100px"}}
              m="auto">
              <Image w={{base:"50px",lg:"100px"}}  src={care4} />
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper>

     }

       {/* ------------- mobile view ------------- */}

       { SmallScreen &&  <Swiper
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
            // w="300px"
             w={{base:"500px",md:"400px" ,lg:"300px"}}
            h="180px"
            ml="15px"
          >
            <Image    w={{base:"500px",md:"400px" ,lg:"300px"}} 
            h="200px" src={care1} />
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            
            w="300px"
            h="180px"
          >
            <Box w="100px" m="auto">
              <Image w="50px" m="auto" src={care2} />
            </Box>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            w="300px"
            h="180px"
            ml="15px"
          >
            <Box  w={{base:"80px",md:"150px" , lg:"180px"}}
             m="auto">
              <Image w="50px"  src={care3} />
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            
            w="300px"
            h="180px"
            ml="15px"
          >
            <Box  w={{base:"80px",md:"190px", lg:"250px"}}
              h={{base:"60px", md:"100px", lg:"100px"}}
              m="auto">
              <Image w={{base:"50px",lg:"100px"}}  src={care4} />
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper>

     }

    

    </>
  );
};

export default CareSwiper;
