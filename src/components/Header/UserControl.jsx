import {
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Show,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { DisclosureContext } from "../../contexts/DisclosureContext";
import useDisclosure from "../../hooks/useDisclosure";
import logo from "../../img/img/beerdome-logo-black.png";
import CartDrawer from "../Drawers/CartDrawer";
import NavigationDrawer from "../Drawers/NavigationDrawer";
import SearchDrawer from "../Drawers/SearchDrawer";
import WishDrawer from "../Drawers/WishDrawer";
import SearchModal from "../Modals/SearchModal";
import Cart from "./Cart";
import Login from "./Login";
import WishList from "./WishList";

const UserControl = () => {
  const { navigationDisclosure, searchModalDisclosure, searchDisclosure } =
    useContext(DisclosureContext);

  const handleOpenSearch = () => {
    window.innerWidth >= 768
      ? searchModalDisclosure.onOpen()
      : searchDisclosure.onOpen();
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY="20px"
      paddingX={{ base: "2%", md: "2%", xl: "8%", "2xl": "12%" }}
      width="100%"
    >
      <Show breakpoint="(max-width: 990px)">
        <GiHamburgerMenu size={32} onClick={navigationDisclosure.onOpen} />
      </Show>
      <SearchInput />
      <Logo />
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
        <HiMagnifyingGlass size={32} onClick={handleOpenSearch} />
      </Show>
      <Drawers />
    </Flex>
  );
};

const Drawers = () => {
  return (
    <>
      <CartDrawer />
      <WishDrawer />
      <NavigationDrawer />
      <SearchDrawer />
      <SearchModal />
    </>
  );
};

const SearchInput = () => {
  const { searchModalDisclosure } = useDisclosure();

  return (
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
        onClick={searchModalDisclosure.onOpen}
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
  );
};

const Logo = () => {
  return (
    <Link to="/">
      <Image
        src={logo}
        alt="BEERDOME"
        marginLeft={{
          base: "20px",
          lg: "-80px",
          xl: "-50px",
        }}
        marginRight="20px"
        maxWidth="100%"
        height="auto"
        objectFit="cover"
        width={{ base: "180px", sm: "240px", lg: "240px", xl: "280px" }}
      />
    </Link>
  );
};

export default UserControl;
