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
  Text,  VStack,  useColorModeValue,
  useToast,} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const toast = useToast();
    const [show, setShow] = useState(false);
    const [errors, SetErrors] = useState({});
    const [IsSubmit, SetIsSubmit] = useState(false);
    const [msgerr, SetMsgerr] = useState("");
    const colorScheme = useColorModeValue("blue", "green");
    const [erroremail, SetErroremail] = useState(false);
    const [errorpassword, SetErrorpassword] = useState(false);

    const [post, SetPost] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        SetPost({ ...post, [name]: value });
      };
    
      const handleSubmit = () => {
    
      };
    
      const handleClickShow = () => {
        setShow(!show);
      };
    
      useEffect(() => {
        if (Object.keys(errors).length === 0 && IsSubmit) {
        }
      }, [errors]);
    
      const validated = (values) => {
        const error = {};
        const regex = /^[^s@]+@[^\s@]+\.[^\^\^s@]{2,}$/i;
        if (!values.email) {
          error.email = "Email is required";
          SetErrorpassword(true);
        }
        if (!values.password) {
          error.password = "Password is required";
          SetErroremail(true);
        } else if (values.password.length < 4) {
          error.password = "password must be more than 4 charecter";
          SetErroremail(true);
        } else if (values.password.length > 10) {
          error.password = "password can not exceed more than 10 charecter";
          SetErroremail(true);
        }
        return error;
      };
    


  return (
    <>
     <Box>
   

          <Box width={"100%"} position={"relative"}  m="auto">
            <Card
              w={{ base: "100%", md: "50%", lg: "450px" }}
              m="auto"
              mt={{ base: "15%", md: "20px", lg: "5px" }}
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
                      Login to get started{" "}
                    </Text>
                  </Stack>

                  <VStack maxW={"2xl"} spacing={5}>
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
                      border={errorpassword ? "1px solid red" : " "}
                    />

                    <Box align="start">
                      <Text
                        mr="240px"
                        mt="-10px"
                        color="red"
                        textAlign={"start"}
                      >
                        {" "}
                        {errors.email}{" "}
                      </Text>
                    </Box>

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
                        border={erroremail ? "1px solid red" : " "}
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
                    <Box align="start">
                      <Text
                        mr="220px"
                        mt="-10px"
                        color="red"
                        textAlign={"start"}
                      >
                        {" "}
                        {errors.password}{" "}
                      </Text>
                    </Box>

                    <Box color="blue" align="end">
                      <Text mr="-190px" mt="-30px">
                        Forget Password ?
                      </Text>
                    </Box>

                    <Button
                      width={{ base: "100%", md: "50%", lg: "50%" }}
                      borderRadius={"20"}
                      size="lg"
                      onClick={handleSubmit}
                      colorScheme={colorScheme}
                    >
                      Login
                    </Button>
                  </VStack>
                </Stack>
              </Box>
            </Card>

            <Text color={"red"} textAlign={"center"}>
              {msgerr}
            </Text>
          </Box>
        </Box>
   


    </>
  )
}

export default AdminLogin