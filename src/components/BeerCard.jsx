import { Box, Button, Image, Text, Tooltip } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const BeerCard = ({ img, brand, name, price }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      display="flex"
      position="relative"
      flexDirection="column"
      maxWidth="300px"
      justifyContent="center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      minHeight="400px"
    >
      <Image src={img} width="250px" height="auto" fit="cover" />
      <Text color="darkgrey" textAlign="left">
        {brand}
      </Text>
      <Text
        color="lightblack"
        fontSize="15px"
        maxWidth="240px"
        marginBottom="2px"
      >
        {name}
      </Text>
      <Text color="red">€{price}</Text>
      <Box position="absolute" top="10px" right="10px">
        <Tooltip
          label="Login for wishlist"
          hasArrow
          bg="#fff"
          color="black"
          placement="top"
        >
          <Box>
            <AiOutlineHeart size={24} cursor="pointer" color="purple" />
          </Box>
        </Tooltip>
      </Box>
      {isHover && (
        <Button
          position="absolute"
          bottom="100px"
          colorScheme="red"
          background="red"
          borderRadius="0"
        >
          Add to cart
        </Button>
      )}
    </Box>
  );
};

BeerCard.propTypes = {
  img: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BeerCard;
