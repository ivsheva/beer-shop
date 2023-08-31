/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import DrawerCard from "./DrawerCard";

const CartDrawer = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart);
  const sum = cart.reduce((total, item) => total + item.price, 0).toFixed(1);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>
          {cart.map((product) => (
            <DrawerCard
              key={product.id}
              id={product.id}
              img={product.img}
              brand={product.brand}
              name={product.name}
              price={product.price}
            />
          ))}
        </DrawerBody>
        <DrawerFooter display="flex" flexDirection="column">
          <Text fontSize="24px" color="grey">
            Total incl. tax: €{sum}
          </Text>
          <Button
            colorScheme="red"
            bg="red"
            width="95%"
            borderRadius="0"
            mt="20px"
            mb="80px"
            fontWeight="600"
            paddingY="30px"
          >
            CHECKOUT
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
