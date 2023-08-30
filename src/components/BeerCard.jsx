import { Box, Button, Image, Text, Tooltip } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const BeerCard = ({
  img,
  brand,
  name,
  price,
  oldPrice = null,
  isFull = false,
}) => {
  const [isHover, setIsHover] = useState(false);

  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

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
      <Image src={img} width="250px" height="300px" fit="contain" />
      <Text color="darkgrey" textAlign="left">
        {brand}
      </Text>
      <Text
        color="lightblack"
        fontSize="15px"
        maxWidth="240px"
        marginBottom="2px"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxHeight: "3.6em", // Две строки с отступами между строками
        }}
      >
        {name}
      </Text>
      <Box display="flex" alignItems="center" columnGap="8px">
        <Text color="red">€{price}</Text>
        {oldPrice && (
          <Text color="green" fontSize="13px" textDecoration="line-through">
            €{oldPrice}
          </Text>
        )}
      </Box>
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
          bottom="85px"
          colorScheme="red"
          background="red"
          borderRadius="0"
          width={isFull ? "100%" : "unset"}
        >
          Add to cart
        </Button>
      )}
      {oldPrice && (
        <Box
          position="absolute"
          top="20px"
          display="flex"
          flexDirection="column"
          rowGap="6px"
        >
          <Text
            display={{ base: "none", md: "block" }}
            color="green"
            width="50px"
            textAlign="center"
            border="1px solid lightgreen"
            fontWeight="600"
          >
            SALE
          </Text>
          <Text textAlign="center" width="45px" color="white" bgColor="green">
            -{discount}%
          </Text>
        </Box>
      )}
    </Box>
  );
};

BeerCard.propTypes = {
  img: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  isFull: PropTypes.bool,
};

export default BeerCard;
