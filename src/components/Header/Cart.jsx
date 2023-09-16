/* eslint-disable react/prop-types */
import { Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { DisclosureContext } from "../../contexts/DisclosureContext";

const Cart = () => {
  const { cartDisclosure } = useContext(DisclosureContext);
  const cart = useSelector((state) => state.cart);
  const cartLength = cart ? cart.length : 0;
  return (
    <VStack
      spacing="0"
      cursor="pointer"
      position="relative"
      onClick={cartDisclosure.onOpen}
      _before={{
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
      }}
    >
      <AiOutlineShoppingCart size="28" />
      <Text>Cart</Text>
    </VStack>
  );
};

export default Cart;
