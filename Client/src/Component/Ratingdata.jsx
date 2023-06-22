import React from 'react'

import { Box, Text, Flex, Avatar, Badge, Divider } from '@chakra-ui/react';


const Ratingdata = ({single}) => {
   

      const comment = single?.comments

    

  return (
    <>
     <Box  w={{base:"90vw",md:"80vw",lg:"80vw"}} mx="auto" py={6} px={4}>
     
      <Text fontSize="2xl" p={2} fontWeight="bold" mb={4}>
        Ratings and Reviews
      </Text>
      <Box mb={4} p={2}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {/* Overall Rating: {overallRating.toFixed(1)} */}
        </Text>
        <Flex align="center">
          <Box>
            {/* <Badge colorScheme="green">{overallRating.toFixed(1)}</Badge> */}
          </Box>
          <Divider orientation="vertical" mx={2} />
          {/* <Text>{comment?.length} Reviews</Text> */}
        </Flex>
      </Box>

      {comment && comment.map((review) => (
        <Box key={review.id} mb={4} p={2} >
          <Flex align="center" mb={2}  
             justifyContent={"space-between"}
       
             w="40vw" 
          >
            <Flex>
            <Avatar size="sm"  src={"data:image/png;base64,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"} 
             name={review.name}            alt={review.name} mr={2} />
            <Text fontWeight="medium">{review.name}</Text>
            </Flex>
             <Flex>
              {new Date(review.date).toLocaleDateString()}
             </Flex>
          </Flex>
          
          <Flex align="center">
            <Box>
              <Badge colorScheme="green">{review.rating || 1}</Badge>
            </Box>
            <Divider orientation="vertical" mx={2} />
            <Text>{review.text}</Text>
          </Flex>

        </Box>
      ))}


    </Box>
    
    
    </>
  )
}

export default Ratingdata
