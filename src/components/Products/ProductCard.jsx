import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import imageNotFound from "../../img/img/not-found.jpg";

const ProductCard = ({ img, genre, title, link }) => {
  return (
    <Link to={link}>
      <Flex
        direction="column"
        justify="center"
        align="center"
        maxWidth="600px"
        width="100%"
        lineHeight="190%"
      >
        <Image
          src={img || imageNotFound}
          alt="Product image"
          minWidth="280px"
          width="100%"
          height={{ base: "400px", sm: "520px" }}
          fit="cover"
        />
        <Text fontSize="14px" color="darkgrey">
          {genre}
        </Text>
        <Text
          fontFamily="Questrial, sans-serif"
          fontSize="20px"
          fontWeight="600"
          lineHeight="140%"
        >
          {title}
        </Text>
        <Text fontWeight="700" marginTop="4px">
          VIEW PRODUCTS
        </Text>
      </Flex>
    </Link>
  );
};

export default ProductCard;
