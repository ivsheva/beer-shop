/* eslint-disable react/prop-types */
import { Box, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../store/cartSlice";
import { REMOVE_FROM_WISH } from "../../store/wishlistSlice";

const DrawerCard = ({ id, img, brand, name, price, isWishItem = false }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const cart = useSelector((state) => state.cart);

  const handleDelete = () => {
    isWishItem
      ? dispatch(REMOVE_FROM_WISH(id))
      : dispatch(REMOVE_FROM_CART(id));
    toast({
      title: "Item Deleted",
      status: "success",
      duration: "9000",
      isClosable: true,
    });
  };

  const handleAdd = () => {
    const newItem = { id, img, brand, name, price };
    if (!cart.find((item) => item.id !== newItem.id)) {
      dispatch(ADD_TO_CART(newItem));
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

  return (
    <Box display="flex" padding={{ base: "none", sm: "24px" }}>
      <Image src={img} float="left" maxBlockSize="140px" fit="cover" />
      <Box fontFamily="Questrial, sans-serif1" marginLeft="32px">
        <Text fontSize="12px" fontWeight="400">
          {brand}
        </Text>
        <Text fontSize="16px" fontWeight="400">
          {name}
        </Text>
        <Text fontFamily="Work Sans, sans-serif" marginTop="12px">
          €{price}
        </Text>
        <Box display="flex" marginTop="4px" color="green" columnGap="20px">
          <Text
            onClick={handleDelete}
            cursor="pointer"
            textDecoration="underline"
          >
            Delete
          </Text>
          {isWishItem && (
            <Text
              onClick={handleAdd}
              cursor="pointer"
              textDecoration="underline"
            >
              Add to Cart
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerCard;
