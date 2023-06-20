import React,{useEffect,useState} from "react";
import UserbottomNavbar from "../Component/UserbottomNavbar";
import { useBreakpointValue, Flex, Input, Image, CardBody, Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { Box ,Card} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import loginlogo from "../Images/loginlogo.jpg";
import { useSelector, useDispatch } from 'react-redux';
import { GetProjectData } from "../Redux/AppReducer/Action";
import { Link } from "react-router-dom";

const SmallSearchbar = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const dispatch = useDispatch();
  const [inputdoctor ,SetInputDoctor] = useState("")
  const doctordata = useSelector((store) => store.AppReducer.Doctordata);
  

  useEffect(() => {
    dispatch(GetProjectData);
  }, []);

  return (
    <>
      {SmallScreen && (
        <Box w="100%" h="90vh" boxShadow={"lg"}>
          <Box boxShadow={"lg"} borderRadius={"lg"} p="2">
            <Flex
              width={{ base: "90%" }}
              m="auto"
              borderRadius={"20"}
              bg="#e0e0de"
              padding="5px"
              alignItems="center"
            >
              <Text ml="10px">
                <BsSearch />
              </Text>
              <Input
                borderRadius="10px"
                 onChange={ (e) =>SetInputDoctor(e.target.value)}
                border="0px"
                placeholder="Search Doctor"
                variant="unstyled"
                padding="5px"
              />
            </Flex>
          </Box>

          {/* -------------------------------- */}
{/* 
          <Box
            position={"relative"}
            top="40"
            h="20vh"
            w="90vw"
            m="auto"
            borderRadius={"10"}
          >
            <Image src={loginlogo} alt="serachbar" />
          </Box> */}
          
          <Box  w="90vw" m="auto" mt="10" >
        <SimpleGrid columns={[1,1,1]} spacing={4}>
          {
            doctordata.filter((value) => {
                if (inputdoctor == "") {
                  return value;
                } else if (
                  value.consultant.toLowerCase().includes(
                    inputdoctor.toLowerCase()
                  )
                ) {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(inputdoctor.toLowerCase())
                ) {
                  return value;
                }
              })    
            .map((el) => {
            return  <Card >

            <CardBody>
              <Image
               objectFit='cover'
               boxSize={"300"}
                 m="auto"
                src={el.pic}
                alt="Doctor Image"
                borderRadius="lg"
              />

               <Link to={`/doctordash/${el._id}`}> 
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name} </Heading>
                <Text noOfLines={"1"} letterSpacing={"1px"}>
                   {el.About}
                </Text>
                <Text color="blue.600" fontWeight={"600"}  letterSpacing={"1px"} fontSize={"1rem"} >
                 {el.consultant}
                </Text>
              </Stack>
              </Link>

            </CardBody>
          </Card>
          })}

         
        </SimpleGrid>
      </Box>


        </Box>
      )}





      {SmallScreen && <UserbottomNavbar />}
    </>
  );
};

export default SmallSearchbar;
