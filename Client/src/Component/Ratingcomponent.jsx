import React, { useState } from 'react';
import {
  Box,
  Textarea,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  useBreakpointValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';


const Ratingcomponent = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
     const post={
        rating,
        comment
     }
  console.log( "init" ,post)
 
  
    const handleRatingClick = (Rating) => {
          setRating(Rating)
    };

    const handleCommentChange = (e) => {
         setComment(e.target.value)
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      setRating(0);
      setComment('');
    };

     console.log("rating", post)
   

    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <Icon
            key={i}
            as={StarIcon}
            color={i <= rating ? 'yellow.500' : 'gray.300'}
            boxSize={6}
            cursor="pointer"
            
            onClick={() => handleRatingClick(i)}
            _hover={{ color: 'yellow.500' }}
          />
        );
      }
      return stars;
    };


  return (
    <>
    
    <Box p={4} border=".1px solid gray" w={{base:"90vw",md:"50vw",lg:"50vw"}} m="auto" mb="20" >
      <form onSubmit={handleSubmit}>
        <FormControl id="rating">
          <FormLabel>Rating</FormLabel>
          <Flex>
            {renderStars()}
          </Flex>
        </FormControl>

        <FormControl id="comment" mt={4}>
          <FormLabel>Comment</FormLabel>
          <Textarea value={comment} onChange={handleCommentChange} />
        </FormControl>

        <Flex mt={4} justify="flex-end">
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Flex>

      </form>
    </Box>
    
    </>

  )
}

export default Ratingcomponent
