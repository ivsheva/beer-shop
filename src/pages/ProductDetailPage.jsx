import { Box, Button, Image, Input, Link, Show, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TrustMark from "../components/MainPage/TrustMark";
import Description from "../components/ProductPage/Description";
import DescriptionAccordion from "../components/ProductPage/DescriptionAccordion";
import { DisclosureContext } from "../contexts/DisclosureContext";
import allProducts from "../data/products/allProducts";
import { ADD_TO_CART } from "../store/cartSlice";
import { ADD_TO_WISH, REMOVE_FROM_WISH } from "../store/wishlistSlice";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const { cartDisclosure } = useContext(DisclosureContext);
  const { wishDisclosure } = useContext(DisclosureContext);

  const [productAmount, setProductAmount] = useState(1);

  const { id } = useParams();
  const product = allProducts.find((item) => item.id === id);
  let inWish = wishlist.some((item) => item.name === product.name);

  const handleAddToCart = () => {
    if (!cart.find((item) => item.name === product.name)) {
      productAmount > 0
        ? dispatch(ADD_TO_CART({ ...product, quantity: productAmount }))
        : dispatch(ADD_TO_CART(product));

      cartDisclosure.onOpen();
    }
  };

  const handleAddToWish = () => {
    if (!wishlist.find((item) => item.name === product.name)) {
      dispatch(ADD_TO_WISH(product));
      wishDisclosure.onOpen();
    } else {
      dispatch(REMOVE_FROM_WISH(product.id));
      inWish = false;
    }
  };

  return (
    <Box
      display="flex"
      width={{ base: "80%", lg: "90%", xl: "60%" }}
      margin="0 auto"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems={{ base: "center", lg: "unset" }}
    >
      <Image
        src={product.img}
        float={{ base: "unset", lg: "left" }}
        maxWidth={{ base: "300px", md: "600px", lg: "500px" }}
        maxHeight="800px"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", lg: "unset" }}
        marginTop="50px"
        marginLeft={{ base: "unset", lg: "60px", xl: "150px", "2xl": "200px" }}
        flexWrap="wrap"
      >
        <Link color="customGreen" textDecoration="underline">
          {product.brand}
        </Link>
        <Text
          fontSize={{ base: "24px", lg: "28px" }}
          textAlign={{ base: "center", lg: "unset" }}
          marginTop="8px"
        >
          {product.name}
        </Text>
        <Text color="red" marginTop="12px">
          €{product.price}
        </Text>
        <Text color="grey" fontWeight="600" marginY="24px">
          In Stock
        </Text>
        <Box display="flex">
          <Input
            value={productAmount}
            onChange={(event) => setProductAmount(event.target.value)}
            maxWidth="60px"
            height="50px"
            borderRadius="0"
            textAlign="center"
            borderColor="lightgrey"
            _focus={{ borderColor: "lightgrey", boxShadow: "none" }}
            type="number"
            max={99}
          />
          <Button
            colorScheme="red"
            bg="red"
            maxWidth="350px"
            width="100%"
            height="50px"
            borderRadius="none"
            margin="0 2px 0 12px"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </Button>
          <Button
            colorScheme="red"
            bg="red"
            blockSize="50px"
            borderRadius="0"
            onClick={handleAddToWish}
          >
            {inWish ? <AiFillHeart size={36} /> : <AiOutlineHeart size={36} />}
          </Button>
        </Box>
        <TrustMark />
        <Show above="md">
          <Description description={product.description} />
        </Show>
        <Show below="md">
          <Box marginTop="20px" width="100%">
            <DescriptionAccordion
              title="Description"
              content={product.description}
            />
            <DescriptionAccordion title="Share" />
          </Box>
        </Show>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
