/* eslint-disable react/prop-types */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { DisclosureContext } from "../../contexts/DisclosureContext";
import DrawerCard from "./DrawerCard";

const CartDrawer = () => {
  const { cartDisclosure } = useContext(DisclosureContext);
  const cart = useSelector((state) => state.cart);
  const sum = cart
    .reduce((total, item) => total + item.price * Number(item.quantity), 0)
    .toFixed(1);

  return (
    <Drawer
      isOpen={cartDisclosure.isOpen}
      onClose={cartDisclosure.onClose}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>
          {cart.map((product) => (
            <DrawerCard
              key={product.id}
              id={product.id}
              img={product.imageUrl}
              brand={product.brand}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
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
            mb="40px"
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
