import {
  Box,
  HStack,
  Image,
  Input,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import logo from "../img/img/beerdome-logo-black.png";

const UserControl = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      paddingY="20px"
      paddingX={{ base: "2%", md: "2%", xl: "14%" }}
      width="100%"
    >
      <Show below="lg">
        <GiHamburgerMenu size={32} />
      </Show>
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
        alt="BEERDOME"
        marginLeft={{ base: "20px", lg: "-120px", "2xl": "-180px" }}
        marginRight="20px"
        maxWidth="100%"
        height="auto"
        objectFit="cover"
        width={{ base: "180px", sm: "240px" }}
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
      <Show below="lg">
        <HiMagnifyingGlass size={32} />
      </Show>
    </Box>
  );
};

export default UserControl;