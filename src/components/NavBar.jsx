import { VStack, HStack, Input, Image, Text, Box } from "@chakra-ui/react";
import logo from "../img/img/beerdome-logo-black.png";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const NavBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center", lg: "space-between" }}
      paddingY="20px"
      paddingX={{ base: "unset", md: "2%", xl: "12%" }}
      width="100%"
    >
      <Input
        display={{ base: "none", lg: "flex" }}
        placeholder="Search..."
        borderColor="lightgrey"
        padding="32px 96px 32px 32px"
        fontSize="20px"
        width="unset"
        sx={{ "::placeholder": { color: "black" } }}
        _hover={{ borderColor: "lightgrey" }}
        _focus={{ borderColor: "lightgrey" }}
        readOnly
      />
      <Image
        src={logo}
        marginLeft={{ base: "20px", lg: "-120px" }}
        marginRight="20px"
      ></Image>
      <HStack
        display={{ base: "none", lg: "flex" }}
        justifyContent="center"
        spacing="4"
      >
        <VStack spacing="0">
          <BiUserCircle size="28" />
          <Text>Login</Text>
        </VStack>
        <VStack spacing="0">
          <AiOutlineHeart size="28" />
          <Text>Wishlist</Text>
        </VStack>
        <VStack spacing="0">
          <AiOutlineShoppingCart size="28" />
          <Text>Cart</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
