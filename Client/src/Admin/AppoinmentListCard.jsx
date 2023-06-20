import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  useBreakpointValue,
  useDisclosure,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { ProjectSkelton } from "./ProjectSkelton";
import Pagination from "./Pagination";

const AppoinmentListCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [inputdata, SetInputData] = useState(" ");
  const [current, SetCurrent] = useState(1);
  const [Projectdata, SetProjectdata] = useState([]);
  const [page, SetPage] = useState(5);
  const [sortBy, SetSortBy] = useState(" ");
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });


  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    try {
      const res = await fetch(
        `https://doctorappoinment.onrender.com/allappoinment`
      );
      const data = await res.json();
      SetProjectdata(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleApproved = async (_id) =>{
          try{
            const updated = await axios.put(`https://doctorappoinment.onrender.com/status/${_id}`,{
               Status:"Approved"
            })
            getdata();
          }
              catch(err) {
             console.log(err)
          }
  }

  const handlecancelled = async (_id) =>{
    try{
      const updated = await axios.put(`https://doctorappoinment.onrender.com/status/${_id}`,{
         Status:"Waiting"
      })
      getdata();
    }
        catch(err) {
       console.log(err)
    }
}

  
  return (
    <>
      <Box boxShadow={"lg"} rounded={"lg"}>
        {/* -------------  */}

        <Box display="flex" justifyContent={"space-between"} p="2">
          <Box borderBottom={"2px solid black"} p="2">
            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<SearchIcon color="gray.400" boxSize={5} />}
              />
              <Input
                mt="3"
                onChange={(e) => SetInputData(e.target.value)}
                placeholder="Search"
                type="Search"
                variant={"unstyled"}
              />
            </InputGroup>
          </Box>

          <IconButton
            color="black"
            size="md"
            bg="white"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="30px" />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box
            display={{ base: "none", md: "none", lg: "flex" }}
            w="200px"
            justifyContent={"space-evenly"}
            p="2"
          >
           
          </Box>

          <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader> Sort By Project </DrawerHeader>
              <DrawerBody>
                <Card spacing={4}>
                  <Text fontSize={"1.1rem"} color="gray" mt="5">
                    Type
                  </Text>
                  <Text fontSize={"1.1rem"} color="gray" mt="5">
                    Location
                  </Text>
                  <Text fontSize={"1.1rem"} color="gray" mt="5" mb="5">
                    Status
                  </Text>
                </Card>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

        {/* ------ Serach bar ^^^ --------  */}

        <Box w="100%" m="auto">
          {!SmallScreen && (
            <TableContainer w="100%" align="start" mb="10">
              <Table variant="simple">
                <Thead bg="blue.100" p="2">
                  <Tr>
                    <Th fontsize="2rem" color="black">
                      Appoinment Date
                    </Th>
                    <Th fontsize="2rem" color="black">
                      Patient Name
                    </Th>
                    <Th fontsize="2rem" color="black">
                      Mobile Number
                    </Th>
                    <Th fontsize="2rem" color="black">
                     Apply Date
                    </Th>
                    
                    <Th fontsize="2rem" color="black">
                      Status
                    </Th>
                    <Th fontsize="2rem" color="black">
                     Confirm
                    </Th>
                    
                    <Th fontsize="2rem" color="black">
                      Cancel
                    </Th>
                   
                  </Tr>
                </Thead>

                <Tbody mb="2">
                  {Projectdata.length > 0 ? (
                    Projectdata.map((el) => {
                      return (
                        <Tr key={el._id}>
                          <Box align="start" w="100px" p="2">
                            <Td fontsize="2rem" fontWeight={"500"}>
                            {el.Date}
                          
                            </Td>
                          </Box>
                          <Td>{el.pateintname}  </Td>
                          <Td>{el.Mobile} </Td>
                          <Td>  {new Date(el.createdAt).toDateString()} </Td>
                         
                          <Td fontWeight={"600"}>{el.Status} </Td>
                          <Td> 
                           <Button onClick={() =>handleApproved(el._id)} bg="green.300" color="#fff" > Approved </Button>
                           </Td>
                         
                          <Td fontWeight={"600"}>
                           <Button  onClick={() =>handlecancelled(el._id)} bg="red.300" color="#fff"> Cancel </Button>
                           </Td>
                        </Tr>
                      );
                    })
                  ) : (
                    <ProjectSkelton />
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </Box>

        {/* --------- Mobile View ------------ */}

        {SmallScreen && (
          <Box w={{ base: "95%" }} m="auto" mb="10">
            {Projectdata.length > 0 ? (
              Projectdata.map((el) => {
                return (
                  <Card
                    key={el._id}
                    rounded={"lg"}
                    boxShadow="dark-lg"
                    bg="#ffffff"
                    m="auto"
                    p="5"
                    gap="5"
                    mb="5"
                    mt="2"
                    display={{ base: "", md: "none", lg: "none" }}
                  >
                    <Flex justifyContent={"space-between"}>
                      <Box>
                        <Text
                          textAlign={"start"}
                          color="#070b40"
                          fontSize={"1.2rem"}
                          fontWeight={"600"}
                        >
                          Patient Detail
                        </Text>
                      
                      </Box>
                      
                    </Flex>

                    {/* ----------  */}

                    <Flex textAlign={"start"} mt="5">
                      <Box>
                        <Text
                          textAlign={"start"}
                          fontSize={"1rem"}
                          mt="1"
                          fontWeight={"500"}
                          color="gray"
                        >
                          {`Patient Name`}
                          <span style={{ color: "#0c164c" }}>
                            {" "}
                            {`: ${el.pateintname} `}{" "}
                          </span>
                        </Text>
                        <Text
                          textAlign={"start"}
                          fontSize={"1rem"}
                          mt="1"
                          fontWeight={"500"}
                          color="gray"
                        >
                          {`Dotor  Name`}
                          <span style={{ color: "#0c164c" }}>
                            {" "}
                            {`: ${el.Doctor} `}{" "}
                          </span>
                        </Text>

                        <Text
                          textAlign={"start"}
                          fontSize={"1rem"}
                          mt="1"
                          fontWeight={"500"}
                          color="gray"
                        >
                          {" "}
                          {`Apply Date `}
                          <span style={{ color: "#0c164c" }}>
                            {" "}
                            {` ${new Date(el.createdAt).toDateString()} `}{" "}
                          </span>
                        </Text>
                      
                      </Box>
                    </Flex>

                    <Flex textAlign={"start"} mt="1">
                      <Box>
                        <Text
                          textAlign={"start"}
                          fontSize={"1rem"}
                          mt="1"
                          fontWeight={"500"}
                          color="gray"
                        >
                          {`Appoinment Date`}
                          <span style={{ color: "#0c164c" }}>
                            {" "}
                            {`: ${el.Date} `}{" "}
                          </span>
                        </Text>
                        <Text
                          textAlign={"start"}
                          fontSize={"1rem"}
                          mt="1"
                          fontWeight={"500"}
                          color="gray"
                        >
                          {" "}
                          {`Mobile Number `}
                          <span style={{ color: "#0c164c" }}>
                            {" "}
                            {` ${el.Mobile} `}{" "}
                          </span>
                        </Text>
                      
                      </Box>
                    </Flex>
                    

                    <Flex textAlign={"start"}  p="5" gap="5">
                    <Box align={"start"}>
                        <Text
                          fontSize={"1.3rem"}
                          color="#070b40"
                          fontWeight={"600"}
                          textAlign={"start"}
                        >

                          {`Status  :- ${el.Status}` }
                        </Text>
                      </Box>
                    </Flex>


                    <Flex justifyContent={"space-between"} p="2" gap="5">
                      <Button onClick={()=>handleApproved(el._id)} bg="green.300" color="#fff" > Approved </Button>
                      <Button onClick={()=>handlecancelled(el._id)} bg="red.300" color="#fff"> Cancel </Button>
                    </Flex>
                  </Card>
                );
              })
            ) : (
              <ProjectSkelton />
            )}

            <Box
              display={"flex"}
              mb={{ base: "45px", lg: "10" }}
              justifyContent={"center"}
            >
             
            </Box>
          </Box>
        )}

     

        <Box
          display={"flex"}
          mb={{ base: "10px", lg: "10px" }}
          justifyContent={"center"}
        >
          
        </Box>
      </Box>
    </>
  );
};

export default AppoinmentListCard;
