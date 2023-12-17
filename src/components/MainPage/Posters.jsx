import { HStack, Image, VStack, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import image1 from "../../img/img/bg-poster-1.jpg";
import image2 from "../../img/img/bg-poster-2.jpg";
import image3 from "../../img/img/bg-poster-3.jpg";
import image4 from "../../img/img/bg-poster-4.jpg";

const Posters = () => {
  return (
    <Flex
      justify="center"
      direction={{ base: "column", md: "row" }}
      align="center"
      width="90%"
      margin="0 auto"
      gap="20px"
    >
      <HStack
        display="flex"
        justifyContent="center"
        width={{ base: "100%", md: "unset" }}
      >
        <Link to="style">
          <Image src={image1} width="100%" fit="cover" />
        </Link>
      </HStack>
      <HStack
        display="flex"
        justifyContent="center"
        width={{ base: "100%", md: "unset" }}
      >
        <Link to="sale">
          <Image src={image2} fit="cover" width="100%" />
        </Link>
      </HStack>
      <VStack gap="24px" width={{ base: "100%", md: "unset" }}>
        <Link to="countries">
          <Image src={image3} width="100%" fit="cover" />
        </Link>
        <Link to="all-beers">
          <Image src={image4} width="100%" fit="cover" />
        </Link>
      </VStack>
    </Flex>
  );
};

export default Posters;
