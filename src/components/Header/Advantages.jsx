import {
  Flex,
  HStack,
  Hide,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { LuBox } from "react-icons/lu";
import { PiTruck } from "react-icons/pi";
import TrustMark from "../../img/img/TrustMark.png";
import lastStar from "../../img/svg/lastStar.svg";
import star from "../../img/svg/star.svg";
import CartDrawer from "../Drawers/CartDrawer";
import WishDrawer from "../Drawers/WishDrawer";
import Cart from "./Cart";
import Login from "./Login";
import WishList from "./WishList";

const Advantages = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      paddingY="14px"
      bgColor="darkgreen"
      color="#fff"
      fontWeight="500"
      flexWrap="wrap"
    >
      <Features />
      <Rating />
      <Hide above="lg">
        <LoginControls />
      </Hide>
      <CartDrawer />
      <WishDrawer />
    </Flex>
  );
};

const Features = () => {
  return (
    <List
      display={{ base: "none", lg: "flex" }}
      columnGap="56px"
      flexWrap="wrap"
      margin="auto"
    >
      <ListItem>
        <HStack>
          <PiTruck size="24" />
          <Text>Fast shipping</Text>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <AiFillStar size="24" />
          <Text> New craft beers everyday</Text>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <LuBox size="24" />
          <Text>Delivery to EU countries</Text>
        </HStack>
      </ListItem>
    </List>
  );
};

const Rating = () => {
  return (
    <HStack display="flex" alignItems="center" margin="auto">
      <Image src={TrustMark} height="26px" marginBottom="6px" />
      <Text>4.8</Text>
      <Stars />
    </HStack>
  );
};

const Stars = () => {
  return (
    <HStack spacing="0.5">
      <Image src={star} boxSize="20px" />
      <Image src={star} boxSize="20px" />
      <Image src={star} boxSize="20px" />
      <Image src={star} boxSize="20px" />
      <Image src={lastStar} boxSize="20px" />
    </HStack>
  );
};

const LoginControls = () => {
  return (
    <HStack
      display="flex"
      margin="auto"
      columnGap="16px"
      marginTop={{ base: "8px", lg: "unset" }}
    >
      <Login />
      <WishList />
      <Cart />
    </HStack>
  );
};

export default Advantages;
