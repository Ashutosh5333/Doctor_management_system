import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjectData } from "../Redux/AppReducer/Action";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AllDoctor = ({inputdoctor}) => {
  const dispatch = useDispatch();
  const doctordata = useSelector((store) => store.AppReducer.Doctordata);
  

  useEffect(() => {
    dispatch(GetProjectData);
  }, []);

  return (
    <>
      <Box  w="90vw" m="auto" mb="20" >
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
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
    </>
  );
};

export default AllDoctor;
