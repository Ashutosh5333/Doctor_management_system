import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useNavigate }from "react-router-dom"


const Signup = () => {
    const colorScheme = useColorModeValue("blue", "green");
    const [show, setShow] = useState(false);
  
    const navigate= useNavigate()
    const toast=useToast()
  
     const [post ,SetPost]=useState({
         email:"",
         password:"",
         name:""
     })
  
      
      const handleChange = (e) =>{
          const {name,value}=e.target
          SetPost({...post,[name]:value})
      }
    
      const handleClickShow = () => {
        setShow(!show);
      };
  
      const handleSubmit = () => {
          
      }
  






  return (
    <Box>
   

    <Box width={"100%"} position={"relative"}  m="auto">
      <Card
        w={{ base: "100%", md: "50%", lg: "450px" }}
        m="auto"
        mt={{ base: "5%", md: "20px", lg: "5px" }}
      >
        <Box rounded="lg" boxShadow={"lg"} p="8">
          <Stack>
            <Stack align={{ base: "start", lg: "center" }}>
              <Text
                textAlign={{ base: "start", lg: "center" }}
                mb="15"
                mt="10"
                fontSize={{ base: "1rem", lg: "1.3rem" }}
                fontWeight={"500"}
              >
                {" "}
               Create your Account here
              </Text>
            </Stack>

            <VStack maxW={"2xl"} spacing={5}>
            <FormControl id="name">
                <FormLabel
                  mb="-10px"
                  fontWeight={"400"}
                  letterSpacing={0.5}
                  color="gray"
                  fontSize={"1.1rem"}
                >
                Name
                </FormLabel>
              </FormControl>

              <Input
                type="text"
                name="name"
                mt="-10px"
                onChange={handleChange}
              />

              <FormControl id="email">
                <FormLabel
                  mb="-10px"
                  fontWeight={"400"}
                  letterSpacing={0.5}
                  color="gray"
                  fontSize={"1.1rem"}
                >
                  {" "}
                  Email{" "}
                </FormLabel>
              </FormControl>
              <Input
                type="email"
                name="email"
                mt="-10px"
                onChange={handleChange}
              />
            

              

              <FormControl id="email">
                <FormLabel
                  mb="-10px"
                  fontWeight={"400"}
                  letterSpacing={0.5}
                  color="gray"
                  fontSize={"1.1rem"}
                >
                  {" "}
                  Password{" "}
                </FormLabel>
              </FormControl>

              <InputGroup position="relative">
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                />
                
                <InputRightElement
                  width="4.5rem"
                  position="absolute"
                  top="1"
                >
                  <Button
                    h="1.75rem"
                    size="lg"
                    variant="link"
                    onClick={handleClickShow}
                  >
                    {show ? (
                      <ViewIcon color="gray.400" boxSize={5} />
                    ) : (
                      <ViewOffIcon color="gray.400" boxSize={5} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
             


              <Button
                width={{ base: "100%", md: "50%", lg: "50%" }}
                borderRadius={"20"}
                size="lg"
                onClick={handleSubmit}
                colorScheme={colorScheme}
              >
               Signup
              </Button>
            </VStack>
          </Stack>
        </Box>
      </Card>

    </Box>
  </Box>

  )
}

export default Signup