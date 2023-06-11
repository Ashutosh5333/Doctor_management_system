import React, { useState } from 'react'
import {  Text, Box, Image, Heading,} from '@chakra-ui/react'
import {  Button,  Card,  CardBody,  Input,  InputGroup,  InputLeftElement,  InputRightElement,  VStack,  useColorModeValue,useToast,} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useNavigate }from "react-router-dom"

const Login = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);

  const navigate= useNavigate()
  const toast=useToast()

   const [post ,SetPost]=useState({
       email:"",
       password:"",
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
  <>
       <Card  boxShadow={"lg"} maxW="lg" m="auto" >
          
          <CardBody  >
    
          <Box mt="10" >
                    <Text fontSize={"1.5rem"} >Login </Text>
                  <Text color={"#FFFFFF"} textAlign={"center"} fontWeight={"600"} > Login </Text>
           </Box>
    
             <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff" mb="10" > Login in with Facebook </Button>
    
            <VStack maxW={"2xl"} spacing={5} >
              <InputGroup position="relative" >
                <InputLeftElement
                  pointerEvents="none"
                  position="absolute"
                  top="1"
                  children={<EmailIcon color="gray.400" boxSize={5} />}
                />
                <Input
                  placeholder="Email*"
                  type="email"
                  name="email"
                  size="lg"
                  onChange={handleChange}
                />
              </InputGroup>
    
              <InputGroup position="relative">
                <InputLeftElement
                  pointerEvents="none"
                  position="absolute"
                  top="1"
                  children={<UnlockIcon color="gray.400" boxSize={5} />}
                />
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Password*"
                  name="password"
                  size="lg"
                  onChange={handleChange}
                  
                />
                <InputRightElement width="4.5rem" position="absolute" top="1">
                  <Button
                    h="1.75rem"
                    size="lg"
                    variant="link"
                    onClick={handleClickShow}
                  >
                    {show ? (
                      <ViewOffIcon color="gray.400" boxSize={5} />
                    ) : (
                      <ViewIcon color="gray.400" boxSize={5} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
    
              <Button
                width="100%"
                size="lg"
                onClick={handleSubmit}
                colorScheme={colorScheme}
                loadingText={"Login"}
                isDisabled={
                     post.email=="" || post.password ==""
                 }
              >
                Login
              </Button>
    
            </VStack>
    
            <Text m="auto" mt="10" textAlign={"center"}  style={{fontSize:"1em", color:"blue", fontWeight:"600" }}> Forgot password ? 
    
               <Link to="/sign">
              <span style={{fontSize:"1em", color:"black", fontWeight:"500" }}> Create an Account</span> 
               </Link>
    
            </Text>
    
          </CardBody>
    
    
          </Card>
    
  </>


  )
}

export default Login