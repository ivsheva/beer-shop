import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { LuBox } from "react-icons/lu";
import { PiTruck } from "react-icons/pi";
import TrustMark from "../img/img/TrustMark.png";
import lastStar from "../img/svg/lastStar.svg";
import star from "../img/svg/star.svg";

const Advantages = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingY="14px"
      bgColor="darkgreen"
      color="#fff"
      fontWeight="500"
      flexWrap="wrap"
    >
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
      <HStack display="flex" alignItems="center" margin="auto">
        <Image src={TrustMark} height="26px" marginBottom="6px" />
        <Text>4.8</Text>
        <HStack spacing="0.5">
          <Image src={star} boxSize="20px" />
          <Image src={star} boxSize="20px" />
          <Image src={star} boxSize="20px" />
          <Image src={star} boxSize="20px" />
          <Image src={lastStar} boxSize="20px" />
        </HStack>
      </HStack>
      <HStack
        display={{ base: "flex", lg: "none" }}
        margin="auto"
        columnGap="16px"
        marginTop={{ base: "8px", lg: "unset" }}
      >
        <VStack spacing="0">
          <BiUserCircle size="28" />
          <Text>Login</Text>
        </VStack>
        <VStack spacing="0">
          <AiOutlineHeart size="28" />
          <Text>Wish List</Text>
        </VStack>
        <VStack spacing="0">
          <AiOutlineShoppingCart size="28" />
          <Text>Cart</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Advantages;
