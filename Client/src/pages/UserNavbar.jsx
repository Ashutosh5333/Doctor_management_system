import { Box, Flex,Text, Image, Input, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {FaUserCircle} from "react-icons/fa"
import {BsCartCheck, BsSearch} from "react-icons/bs"
import {BiLogIn,BiLogOut} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"

const UserNavbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


  return (
    <>
    <Box  >
      
      <Box px={4} mb={20} className='ChackraNavBar' shadow='lg' borderBottom={{base : '0px', md :'1px solid black'}} padding='10px'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
              
            <Flex width={{base : "20%", md :'13%', lg : '10%'}} justifyContent={'center'} >
             <Link to='/'><Image w="50px" h="50px" src='http://localhost:3000/static/media/front.303949ce0bf6609b2f0c.jpg' width='100px' m='auto'/></Link>
            </Flex>

              <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '90%', lg : '95%'}} justifyContent='space-around' alignItems='center' padding='10px'>
               
             
               <Flex width={{base : '0', md : '60%', lg :'75%'}} border={'1px solid black'} padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input borderRadius='10px' border='0px' placeholder='SEARCH' variant="unstyled" padding='5px'/>
               </Flex>

               <Flex width={{base : "", md  : '25%', lg :'15%'}} justifyContent='space-around' fontSize='25px'>
               <Tooltip bg='#CBD5E0' color='black' ><Link><Text><AiOutlineHeart/></Text></Link></Tooltip>
            
              <Tooltip bg='#CBD5E0' color='black' ><Link><Text><FaUserCircle/></Text></Link></Tooltip>
              </Flex>
              </Flex>
          </Flex> 

        </Box>    
    
    </Box>

    </>
  )
}

export default UserNavbar