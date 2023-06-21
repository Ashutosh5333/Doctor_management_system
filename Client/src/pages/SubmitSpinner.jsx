import React from 'react'
import { Box, Spinner } from '@chakra-ui/react';

const SubmitSpinner = () => {


  return (
    <>
    <Box>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>

    </Box>

    </>
  )
}

export default SubmitSpinner