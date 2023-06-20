import { useState } from 'react';
import { Box, Flex,Text, Image, Input, IconButton, Tooltip, useDisclosure,  } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {FaUserCircle} from "react-icons/fa"
import {BsSearch} from "react-icons/bs"
import {BiLogIn,BiLogOut} from "react-icons/bi"
import {RiAdminFill} from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
import { handleLogOut } from './../Redux/AuthReducer/Action';


const UserNavbar = ({SetInputDoctor}) => {
const { isOpen, onOpen, onClose } = useDisclosure()
 const dispatch =useDispatch()
    const btnRef = React.useRef()
    const isAuth = useSelector(store =>store.AuthReducer.isAuth)
      
     const handleLog = () =>{
      dispatch(handleLogOut())
      localStorage.clear()
     }
     

  return (
    <>

      <Box  px={4} mb={20} shadow='lg' borderBottom={{base : '0px', md :'0px'}} padding='10px'
      borderRadius={"20"} h="20"
      >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
              
            <Flex width={{base : "20%", md :'13%', lg : '10%'}} justifyContent={'center'} >
             <Link to='/doctordash'><Image w="50px" h="50px" src='http://localhost:3000/static/media/front.303949ce0bf6609b2f0c.jpg' width='100px' m='auto'/></Link>
            </Flex>

              <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '90%', lg : '95%'}} justifyContent='space-around' alignItems='center' padding='10px'>
               
             
               <Flex width={{base : '0', md : '60%', lg :'70%'}} 
                  borderRadius={"20"}   bg="#e0e0de"
                padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input borderRadius='10px'
                 onChange={ (e) =>SetInputDoctor(e.target.value)}
                 border='0px' placeholder='Search Doctor' variant="unstyled" padding='5px'/>
               </Flex>

               <Flex width={{base : "", md  : '25%', lg :'15%'}} justifyContent='space-around' fontSize='25px'>
               <Tooltip bg='#CBD5E0' color='black' label={ isAuth ? "Logut" : "Login" } ><Link><Text onClick={handleLog}><BiLogOut/></Text></Link></Tooltip>
               <Tooltip bg='#CBD5E0' color='black' label="admin"><Link to="/admin" ><Text><RiAdminFill/></Text></Link></Tooltip>
              <Tooltip bg='#CBD5E0' color='black' label="Profile"><Link to="/userprofile" ><Text><FaUserCircle/></Text></Link></Tooltip>
              </Flex>
              </Flex>
          </Flex> 

        </Box>    
 

    
   
    </>
  )
}

export default UserNavbar