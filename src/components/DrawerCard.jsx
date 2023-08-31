/* eslint-disable react/prop-types */
import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../store/cartSlice";

const DrawerCard = ({ id, img, brand, name, price }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(REMOVE_FROM_CART(id));
  };

  return (
    <Box display="flex" padding="24px">
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
        <Text
          onClick={handleDelete}
          cursor="pointer"
          marginTop="4px"
          color="green"
          textDecoration="underline"
        >
          Delete
        </Text>
      </Box>
    </Box>
  );
};

export default DrawerCard;
