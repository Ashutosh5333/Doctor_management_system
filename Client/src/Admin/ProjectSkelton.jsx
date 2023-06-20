import { Box, SkeletonText } from "@chakra-ui/react";
import React from "react";

export const ProjectSkelton = () => {
  return (
    <>
      <Box mt="10">
        <Box padding="5" boxShadow="lg" bg="white" width="90vw" margin="auto">
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="7" />
        </Box>
        <Box padding="5" boxShadow="lg" bg="white" width="90" margin="auto">
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="7" />
        </Box>

        <Box padding="5" boxShadow="lg" bg="white" width="90" margin="auto">
          <SkeletonText mt="4" noOfLines={2} spacing="2" skeletonHeight="7" />
        </Box>
      </Box>
    </>
  );
};
