import { Box, Button, Image, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
import imageNotFound from "../../img/img/not-found.jpg";
import { ADD_TO_CART } from "../../store/cartSlice";
import { ADD_TO_WISH, REMOVE_FROM_WISH } from "../../store/wishlistSlice";

const BeerCard = ({ product, isFull = false }) => {
  const [isHover, setIsHover] = useState(false);
  const { inWish, discount } = useProductDetails(product);

  return (
    <Link to={`products/${product.id}`}>
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
        <Image
          src={product.imageUrl || imageNotFound}
          alt="Product Image"
          width="250px"
          height="300px"
          fit="contain"
        />
        <Text color="darkgrey" textAlign="left">
          {product.brand}
        </Text>
        <ProductName productName={product.name} />
        <PriceText oldPrice={product.oldPrice} price={product.price} />
        <ShowWishlist product={product} inWish={inWish} />
        <HoverText product={product} isHover={isHover} isFull={isFull} />
        <DiscountText oldPrice={product.oldPrice} discount={discount} />
      </Box>
    </Link>
  );
};

const ProductName = ({ productName }) => {
  return (
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
      {productName}
    </Text>
  );
};

const PriceText = ({ oldPrice, price }) => {
  return (
    <Box display="flex" alignItems="center" columnGap="8px">
      <Text color="red">€{price}</Text>
      {oldPrice && (
        <Text color="green" fontSize="13px" textDecoration="line-through">
          €{oldPrice}
        </Text>
      )}
    </Box>
  );
};

const ShowWishlist = ({ product, inWish }) => {
  const { dispatch, wishlist, wishDisclosure } = useProductDetails(product);

  const handleAddToWish = (event) => {
    event.preventDefault();

    if (!wishlist.find((item) => item.name === product.name)) {
      dispatch(ADD_TO_WISH(product));
      wishDisclosure.onOpen();
    } else {
      inWish = false;
      dispatch(REMOVE_FROM_WISH(product.id));
    }
  };

  return (
    <Box position="absolute" top="10px" right="10px">
      <Tooltip
        label="Login for wishlist"
        hasArrow
        bg="#fff"
        color="black"
        placement="top"
      >
        <Box>
          {inWish ? (
            <AiFillHeart
              size={24}
              cursor="pointer"
              color="purple"
              onClick={(event) => handleAddToWish(event)}
            />
          ) : (
            <AiOutlineHeart
              size={24}
              cursor="pointer"
              color="purple"
              onClick={(event) => handleAddToWish(event)}
            />
          )}
        </Box>
      </Tooltip>
    </Box>
  );
};

const HoverText = ({ product, isHover, isFull }) => {
  const { dispatch, cart, cartDisclosure } = useProductDetails(product);

  const handleAddToCart = (event) => {
    event.preventDefault();

    if (!cart.find((item) => item.name === product.name)) {
      dispatch(ADD_TO_CART(product));
      cartDisclosure.onOpen();
    }
  };

  return (
    isHover && (
      <Button
        position="absolute"
        bottom="85px"
        colorScheme="red"
        background="red"
        borderRadius="0"
        width={isFull ? "100%" : "unset"}
        onClick={(event) => handleAddToCart(event)}
      >
        Add to cart
      </Button>
    )
  );
};

const DiscountText = ({ oldPrice, discount }) => {
  return (
    oldPrice && (
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
    )
  );
};

export default BeerCard;
