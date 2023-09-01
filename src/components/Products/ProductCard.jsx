import { Box, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ img, genre, title, link }) => {
  return (
    <Link to={link}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="600px"
        width="100%"
        lineHeight="190%"
      >
        <Image
          src={img}
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
      </Box>
    </Link>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;
