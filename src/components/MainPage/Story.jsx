/* eslint-disable react/no-unescaped-entities */

import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from "../../img/img/story-bg.jpg";

const Story = () => {
  return (
    <Flex
      maxWidth={{ base: "100%", md: "80%" }}
      direction={{ base: "column", lg: "row" }}
      justify={{ base: "center", lg: "unset" }}
      align="center"
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
      <Flex
        direction="column"
        justify="center"
        align={{ base: "center", lg: "unset" }}
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
          <Link>Curious about our story?</Link>
        </Heading>
        <Text color="darkgrey" marginTop="12px" fontSize="15px">
          Beerdome fulfills the wish of beer lovers to discover new and rare
          beers again and again. We then 'protect' these beers under our 'dome'.
          Our beers are for winners, treasure hunters and fans of taste
          sensations!
        </Text>
        <Link to="service/about-us">
          <Text fontSize="15px" fontWeight="500">
            ABOUT BEERDOME
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Story;
