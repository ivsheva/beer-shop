import { Text, VStack } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import useDisclosure from "../../hooks/useDisclosure";
import useGeneralProductData from "../../hooks/useGeneralProductData";

const WishList = () => {
  const { wishDisclosure } = useDisclosure();
  const { wishList } = useGeneralProductData();
  const wishLength = wishList ? wishList.length : 0;

  // object for styling
  const wishlistOrders = {
    content: `"${wishLength}"`,
    position: "absolute",
    top: "-6px",
    right: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "12px",
    width: "18px",
    height: "18px",
    borderRadius: "50px",
    bgColor: "pink",
  };

  return (
    <VStack
      spacing="0"
      cursor="pointer"
      position="relative"
      onClick={wishDisclosure.onOpen}
      _before={wishlistOrders}
    >
      <AiOutlineHeart size="28" />
      <Text>Wishlist</Text>
    </VStack>
  );
};

export default WishList;
