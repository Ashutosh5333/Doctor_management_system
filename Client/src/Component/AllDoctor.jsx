import { Box } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';



const AllDoctor = () => {
 const dispatch = useDispatch()
 const doctordata = useSelector((store) => store.AppReducer.Doctordata) 


  return (

    <>
     <Box border="1px solid red" h="100vh" >



     </Box>

    </>
  )
}

export default AllDoctor