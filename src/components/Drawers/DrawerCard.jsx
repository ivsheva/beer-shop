/* eslint-disable react/prop-types */
import { Box, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../store/cartSlice";
import { REMOVE_FROM_WISH } from "../../store/wishlistSlice";
import { useContext } from "react";
import { DisclosureContext } from "../../contexts/DisclosureContext";
import { useNavigate } from "react-router-dom";

const DrawerCard = ({
  id,
  img,
  brand,
  name,
  price,
  quantity = 1,
  isWishItem = false,
  isSearchItem = false,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const cart = useSelector((state) => state.cart);
  const {
    cartDisclosure,
    wishDisclosure,
    searchDisclosure,
    searchModalDisclosure,
  } = useContext(DisclosureContext);

  const handleDelete = () => {
    if (isWishItem) {
      dispatch(REMOVE_FROM_WISH(id));
      wishDisclosure.onClose();
    } else {
      dispatch(REMOVE_FROM_CART(id));
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
    const newItem = { id, img, brand, name, price, quantity };
    if (!cart.some((item) => item.name === newItem.name)) {
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

  const handleNavigate = () => {
    navigate(`/all-beers/products/${id}`);
    if (isWishItem) wishDisclosure.onClose();
    else if (isSearchItem) {
      window.innerWidth >= 768
        ? searchModalDisclosure.onClose()
        : searchDisclosure.onClose();
    } else cartDisclosure.onClose();
  };

  return (
    <Box display="flex" padding={{ base: "none", sm: "24px" }}>
      <Image
        src={img}
        float="left"
        maxBlockSize="140px"
        fit="cover"
        onClick={() => handleNavigate()}
        cursor="pointer"
      />
      <Box fontFamily="Questrial, sans-serif1" marginLeft="32px">
        <Text fontSize="12px" fontWeight="400">
          {brand}
        </Text>
        <Text fontSize="16px" fontWeight="400">
          {name}
        </Text>
        <Box marginTop="12px" display="flex" justifyContent="space-between">
          <Text fontFamily="Work Sans, sans-serif">€{price}</Text>
          {isWishItem ||
            (!isSearchItem && <Text color="black">{quantity}</Text>)}
        </Box>
        <Box display="flex" marginTop="4px" color="green" columnGap="20px">
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
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerCard;
