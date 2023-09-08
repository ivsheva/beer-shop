import { Box, Image, Text } from "@chakra-ui/react";
import aboutBg from "../../img/img/about-bg.jpg";

const AboutPoster = () => {
  return (
    <Box
      width="100%"
      height="350px"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Image src={aboutBg} fit="cover" height="100%" width="100%" />
      <Text
        color="white"
        position="absolute"
        top="40%"
        left="15%"
        fontFamily="Work Sans, sans-serif"
        fontSize="30px"
        fontWeight="500"
      >
        About Beerdome
      </Text>
    </Box>
  );
};

export default AboutPoster;
