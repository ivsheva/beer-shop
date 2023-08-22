/* eslint-disable react/no-unescaped-entities */

import { Box, Image, Text, Heading } from "@chakra-ui/react";
import img from "../img/img/story-bg.jpg";

const Story = () => {
  return (
    <Box
      maxWidth={{ base: "100%", md: "80%" }}
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "unset" }}
      alignItems="center"
      margin="0 auto"
      columnGap="60px"
      marginTop="112px"
    >
      <Image
        width={{ base: "100%", lg: "50%" }}
        src={img}
        float="left"
        fit="cover"
        marginBottom={{ base: "28px", lg: "unset" }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ base: "center", lg: "unset" }}
        height="100%"
        lineHeight="200%"
        paddingX={{ base: "14px" }}
      >
        <Heading
          fontFamily="Questrial, sans-serif"
          fontWeight="400"
          fontSize="28px"
          lineHeight="140%"
        >
          Curious about our story?
        </Heading>
        <Text color="darkgrey" marginTop="12px" fontSize="15px">
          Beerdome fulfills the wish of beer lovers to discover new and rare
          beers again and again. We then 'protect' these beers under our 'dome'.
          Our beers are for winners, treasure hunters and fans of taste
          sensations!
        </Text>
        <Text fontSize="15px" fontWeight="500">
          ABOUT BEERDOME
        </Text>
      </Box>
    </Box>
  );
};

export default Story;
