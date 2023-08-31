import { Text, VStack } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishList = useSelector((state) => state.wishlist);
  const wishLength = wishList ? wishList.length : 0;

  return (
    <VStack
      spacing="0"
      cursor="pointer"
      position="relative"
      _before={{
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
      }}
    >
      <AiOutlineHeart size="28" />
      <Text>Wishlist</Text>
    </VStack>
  );
};

export default WishList;
