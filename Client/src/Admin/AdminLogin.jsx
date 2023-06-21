import React, {  useState } from "react";
import {
  Box,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Card,
  FormControl,
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Adminpost } from "../Redux/AuthReducer/Action";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const colorScheme = useColorModeValue("blue", "green");
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, SetPost] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    if (post.email !=="" && post.password !=="") {
      setLoading(true);
      dispatch(Adminpost(post))
        .then((res) => {
          if (res.type === "ADMINUSERSUCESS") {
            if (res.payload.msg !== "Loginsucessfull") {
              toast({
                position: "top",
                colorScheme: "red",
                status: "error",
                title: " Wrong Credentails",
              });
              setLoading(false);
            } else {
              toast({
                position: "top",
                colorScheme: "green",
                status: "success",
                title: "Login Successfully",
              });
              localStorage.setItem("Admin", JSON.stringify(res.payload.msg));
              navigate("/admin");
              setLoading(false);
            }
          }
        })
    }
    if (post.email == "") {
      setisEmail(true);
    }
    if (post.password == "") {
      setisPassword(true);
    }
  };

  const handleClickShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Box>
        <Navbar />

        <Box width={"100%"} m="auto">
          <Card
            w={{ base: "95%", md: "50%", lg: "450px" }}
            m="auto"
            mt={{ base: "15%", md: "20px", lg: "5px" }}
          >
            <Box p="8">
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
                  <FormControl id="email"  isInvalid={isEmail}>
                    <FormLabel
                      fontWeight={"400"}
                      letterSpacing={0.5}
                      color={isEmail ? "red" : "gray"}
                      fontSize={"1.1rem"}
                    >
                      {" "}
                      Email{" "}
                    </FormLabel>
                    <Input
                      type="email"
                      name="email"
                 
                      onChange={handleChange}
                    />
                    {!isEmail ? (
                      <FormHelperText h="10px"></FormHelperText>
                    ) : (
                      <FormErrorMessage color="red">
                        Email is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl id="password" isInvalid={isPassword}>
                    <FormLabel
                    
                      fontWeight={"400"}
                      letterSpacing={0.5}
                      color={isPassword ? "red" : "gray"}
                      fontSize={"1.1rem"}
                    >
                      {" "}
                      Password{" "}
                    </FormLabel>
                    <Input
                        type={show ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                      />
                         {!isPassword ? (
                        <FormHelperText h="10px"></FormHelperText>
                      ) : (
                        <FormErrorMessage color="red">
                          Password is required.
                        </FormErrorMessage>
                      )}
                 
                  </FormControl>

                  <Box color="blue" align="end">
                    <Text mr="-180px" mt="0px">
                      Forget Password ?
                    </Text>
                  </Box>

                  <Button
                    width={{ base: "100%", md: "50%", lg: "50%" }}
                    borderRadius={"20"}
                    size="lg"
                    onClick={handleSubmit}
                    colorScheme={colorScheme}
                    isLoading={loading}
                  >
                    Login
                  </Button>
                </VStack>
              </Stack>
            </Box>
          </Card>

        </Box>
      </Box>
    </>
  );
};

export default AdminLogin;
