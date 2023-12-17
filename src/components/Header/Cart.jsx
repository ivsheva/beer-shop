import { Text, VStack } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useDisclosure from "../../hooks/useDisclosure";
import useGeneralProductData from "../../hooks/useGeneralProductData";

const Cart = () => {
  const { cartDisclosure } = useDisclosure();
  const { cart } = useGeneralProductData();
  const cartLength = cart ? cart.length : 0;

  // object for styling
  const cartOrders = {
    content: `"${cartLength}"`,
    position: "absolute",
    top: "-6px",
    right: "-8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "12px",
    width: "18px",
    height: "18px",
    borderRadius: "50px",
    bgColor: "red",
  };

  return (
    <VStack
      spacing="0"
      cursor="pointer"
      position="relative"
      onClick={cartDisclosure.onOpen}
      _before={cartOrders}
    >
      <AiOutlineShoppingCart size="28" />
      <Text>Cart</Text>
    </VStack>
  );
};

export default Cart;
