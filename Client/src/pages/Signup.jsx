import React, { useState } from 'react'
import {  Text, Image,} from '@chakra-ui/react'
import {  Button,  Card,  CardBody,  Input,  InputGroup,  InputLeftElement,  InputRightElement,  VStack,  useColorModeValue,useToast,} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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
    <Card py="3" maxW="lg" m="auto" mt="20">

    <CardBody>
    

   

      <Text>  Application Form   </Text>


    
     <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff"
     mb="5" > Login in with Facebook </Button>
     
      <VStack maxW="2xl" spacing={5}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            position="absolute"
            top="1"
            children={<CiUser color="gray" size="23" />}
          />
          <Input
            placeholder="Name*"
            type="name"
            name="name"
            onChange={handleChange}
            
            size="lg"
          />
        </InputGroup>


        <InputGroup position="relative">
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
              size="sm"
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
        onClick={handleSubmit}
          width="100%"
          colorScheme={colorScheme}
          size="lg"
        >
          Signup
        </Button>
      </VStack>

     <Text  fontSize="1rem"
       textAlign={"center"} mt={"5"}>
        . Learn More

     </Text> 

    </CardBody>
  </Card>
  )
}

export default Signup