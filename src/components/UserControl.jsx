import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Show,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../img/img/beerdome-logo-black.png";
import AuthDrawer from "./AuthDrawer";

const UserControl = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      paddingY="20px"
      paddingX={{ base: "2%", md: "2%", xl: "12%" }}
      width="100%"
    >
      <Show breakpoint="(max-width: 990px)">
        <GiHamburgerMenu size={32} />
      </Show>
      <InputGroup width="unset" display={{ base: "none", lg: "flex" }}>
        <Input
          placeholder="Search..."
          borderColor="lightgrey"
          borderRight="transparent"
          padding="32px 96px 32px 32px"
          fontSize="20px"
          sx={{ "::placeholder": { color: "black" } }}
          _hover={{ borderColor: "lightgrey" }}
          _focus={{ borderColor: "lightgrey" }}
          readOnly
        />
        <InputRightAddon
          height="inherit"
          bgColor="transparent"
          borderLeft="transparent"
          borderColor="lightgrey"
        >
          <HiMagnifyingGlass size={32} />
        </InputRightAddon>
      </InputGroup>
      <Link to="/">
        <Image
          src={logo}
          alt="BEERDOME"
          marginLeft={{
            base: "20px",
            lg: "-80px",
            xl: "-100px",
            "2xl": "-180px",
          }}
          marginRight="20px"
          maxWidth="100%"
          height="auto"
          objectFit="cover"
          width={{ base: "180px", sm: "240px", lg: "240px", xl: "360px" }}
        ></Image>
      </Link>
      <HStack
        display={{ base: "none", lg: "flex" }}
        justifyContent="center"
        spacing="4"
      >
        <VStack spacing="0" onClick={onOpen} cursor="pointer">
          <BiUserCircle size="28" />
          <Text>Login</Text>
        </VStack>
        <VStack spacing="0" cursor="pointer">
          <AiOutlineHeart size="28" />
          <Text>Wishlist</Text>
        </VStack>
        <VStack spacing="0" cursor="pointer">
          <AiOutlineShoppingCart size="28" />
          <Text>Cart</Text>
        </VStack>
      </HStack>
      <Show breakpoint="(max-width: 990px)">
        <HiMagnifyingGlass size={32} />
      </Show>

      <AuthDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default UserControl;
