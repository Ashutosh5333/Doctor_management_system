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

const AllDoctor = () => {
  const dispatch = useDispatch();
  const doctordata = useSelector((store) => store.AppReducer.Doctordata);
  console.log("Alldoctor", doctordata);

  useEffect(() => {
    dispatch(GetProjectData);
  }, []);

  return (
    <>
      <Box  >
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {doctordata.length > 0 && doctordata.map((el) => {
            return  <Card maxW="sm">
            <CardBody>
              <Image
               objectFit='cover'
                 m="auto"
                src={el.pic}
                alt="Doctor Image"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name} </Heading>
                <Text noOfLines={"2"} letterSpacing={"1px"}>
                   {el.About}
                </Text>
                <Text color="blue.600" fontWeight={"600"}  letterSpacing={"1px"} fontSize={"1rem"} >
                 {el.consultant}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          })}

         
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AllDoctor;
