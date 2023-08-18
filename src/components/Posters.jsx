import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import image1 from "../img/img/bg-poster-1.jpg";
import image2 from "../img/img/bg-poster-2.jpg";
import image3 from "../img/img/bg-poster-3.jpg";
import image4 from "../img/img/bg-poster-4.jpg";

const Posters = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      width="90%"
      margin="0 auto"
      gap="20px"
    >
      <HStack
        display="flex"
        justifyContent="center"
        width={{ base: "100%", md: "unset" }}
      >
        <Image src={image1} width="100%" fit="cover" />
      </HStack>
      <HStack
        display="flex"
        justifyContent="center"
        width={{ base: "100%", md: "unset" }}
      >
        <Image src={image2} fit="cover" width="100%" />
      </HStack>
      <VStack gap="24px" width={{ base: "100%", md: "unset" }}>
        <Image src={image3} width="100%" fit="cover" />
        <Image src={image4} width="100%" fit="cover" />
      </VStack>
    </Box>
  );
};

export default Posters;
