import React, { useState,useEffect } from 'react';
import {
  Box,
  Textarea,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { GetProjectData, PostComment } from '../Redux/AppReducer/Action';
import { useToast } from '@chakra-ui/react';
import { getSingleDoctordetail } from './../Redux/AppReducer/Action';


const Ratingcomponent = ({id}) => {
    const [rating, setRating] = useState(1);
    const [text, setText] = useState('');
    const [loading, SetLoading] = useState("");
    const dispatch = useDispatch()
    const toast = useToast();
    const doctordata = useSelector((store) => store.AppReducer.Doctordata);
   
  
      useEffect(() =>{
        dispatch(GetProjectData);
      },[])
  
    
  
    const handleRatingClick = (Rating) => {
          setRating(Rating)
    };

    const handleCommentChange = (e) => {
      setText(e.target.value)
    };

    const post={
      rating,
      text
   }
  
   useEffect(() => {
    dispatch(getSingleDoctordetail(id))
     
  }, [id]);

    const handleSubmit = (e) => {
      e.preventDefault();
     
      SetLoading(true)
      dispatch(PostComment(id,post))
      .then((res) =>{
        
            if( res.type==="POSTCOMMENTSUCESS" && res.payload.msg ==="Comment added successfully"){
              toast({
                position: "top",
                colorScheme: "green",
                status: "success",
                title: res.payload.msg,
              })
            
              dispatch(getSingleDoctordetail(id))
              // window.location.reload()
              SetLoading(false)
            }
      }).catch((err) =>{
        console.log(err)
        toast({
          position: "top",
          colorScheme: "red",
          status: "error",
          title: "Something went wrong",
        });
        SetLoading(false)
      })
      
      setRating(0);
      setText('');
    };

   
   

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
    
    <Box p={4} w={{base:"90vw",md:"50vw",lg:"50vw"}} m="auto" mb="20" >
      <form onSubmit={handleSubmit}>
        <FormControl id="rating">
          <FormLabel>Rating</FormLabel>
          <Flex>
            {renderStars()}
          </Flex>
        </FormControl>

        <FormControl id="comment" mt={4}>
          <FormLabel>Comment</FormLabel>
          <Textarea value={text} onChange={handleCommentChange} />
        </FormControl>

        <Flex mt={4} justify="flex-end">
          <Button type="submit" colorScheme="blue"
          
          isLoading={loading}

          >
            Submit

          </Button>


        </Flex>

      </form>
    </Box>
    
    </>

  )
}

export default Ratingcomponent
