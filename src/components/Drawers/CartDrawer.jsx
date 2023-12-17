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
import useDisclosure from "../../hooks/useDisclosure";
import useGeneralProductData from "../../hooks/useGeneralProductData";
import DrawerCard from "./DrawerCard";

const CartDrawer = () => {
  const { cartDisclosure } = useDisclosure();
  const { cart } = useGeneralProductData();
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
            <DrawerCard key={product.id} product={product} />
          ))}
        </DrawerBody>
        <DrawerFooter display="flex" flexDirection="column">
          <Text fontSize="24px" color="grey">
            Total incl. tax: €{sum}
          </Text>
          <Checkout />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const Checkout = () => {
  return (
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
  );
};

export default CartDrawer;
