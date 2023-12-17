import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useDisclosure from "../../hooks/useDisclosure";
import useGeneralProductData from "../../hooks/useGeneralProductData";
import imageNotFound from "../../img/img/not-found.jpg";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../store/cartSlice";
import { REMOVE_FROM_WISH } from "../../store/wishlistSlice";

const DrawerCard = ({ product, isWishItem = false, isSearchItem = false }) => {
  const { cart, dispatch } = useGeneralProductData();
  const navigate = useNavigate();
  const toast = useToast();
  const {
    cartDisclosure,
    wishDisclosure,
    searchDisclosure,
    searchModalDisclosure,
  } = useDisclosure();

  const handleDelete = () => {
    if (isWishItem) {
      dispatch(REMOVE_FROM_WISH(product.id));
      wishDisclosure.onClose();
    } else {
      dispatch(REMOVE_FROM_CART(product.id));
      cartDisclosure.onClose();
    }
    toast({
      title: "Item Deleted",
      status: "success",
      duration: "9000",
      isClosable: true,
    });
  };

  const handleAdd = () => {
    if (!cart.some((item) => item.name === product.name)) {
      dispatch(ADD_TO_CART(product));
      toast({
        title: "Item added",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else
      toast({
        title: "Item is already in Cart",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
  };

  const handleNavigate = () => {
    navigate(`/all-beers/products/${product.id}`);
    if (isWishItem) wishDisclosure.onClose();
    else if (isSearchItem) {
      window.innerWidth >= 768
        ? searchModalDisclosure.onClose()
        : searchDisclosure.onClose();
    } else cartDisclosure.onClose();
  };

  return (
    <Flex padding={{ base: "none", sm: "24px" }}>
      <Image
        src={product.imageUrl || imageNotFound}
        alt="Product Image"
        float="left"
        maxBlockSize="140px"
        fit="cover"
        onClick={() => handleNavigate()}
        cursor="pointer"
      />
      <Box fontFamily="Questrial, sans-serif1" marginLeft="32px">
        <Text fontSize="12px" fontWeight="400">
          {product.brand}
        </Text>
        <Text fontSize="16px" fontWeight="400">
          {product.name}
        </Text>
        <Flex marginTop="12px" justify="space-between">
          <Text fontFamily="Work Sans, sans-serif">€{product.price}</Text>
          {isWishItem ||
            (!isSearchItem && <Text color="black">{product.quantity}</Text>)}
        </Flex>
        <Flex marginTop="4px" color="green" columnGap="20px">
          {!isSearchItem && (
            <Text
              onClick={handleDelete}
              cursor="pointer"
              textDecoration="underline"
            >
              Delete
            </Text>
          )}
          {isWishItem ||
            (isSearchItem && (
              <Text
                onClick={handleAdd}
                cursor="pointer"
                textDecoration="underline"
              >
                Add to Cart
              </Text>
            ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default DrawerCard;
