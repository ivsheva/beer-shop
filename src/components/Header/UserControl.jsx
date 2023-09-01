/* eslint-disable react/prop-types */
import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Show,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../img/img/beerdome-logo-black.png";
import AuthDrawer from "../Drawers/AuthDrawer";
import Cart from "./Cart";
import Login from "./Login";
import WishList from "./WishList";
import CartDrawer from "../Drawers/CartDrawer";
import WishDrawer from "../Drawers/WishDrawer";

const UserControl = () => {
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
        <Login />
        <WishList />
        <Cart />
      </HStack>
      <Show breakpoint="(max-width: 990px)">
        <HiMagnifyingGlass size={32} />
      </Show>

      <AuthDrawer />
      <CartDrawer />
      <WishDrawer />
    </Box>
  );
};

export default UserControl;
