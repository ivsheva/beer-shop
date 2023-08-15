import { HStack, List, ListItem, Text, Image, Box } from "@chakra-ui/react";
import { PiTruck } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { LuBox } from "react-icons/lu";
import TrustMark from "../img/img/TrustMark.png";
import star from "../img/svg/star.svg";
import lastStar from "../img/svg/lastStar.svg";

const Advantages = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX="132px"
      paddingY="14px"
      bgColor="darkgreen"
      color="#fff"
    >
      <List display="flex" columnGap="56px" flexWrap="wrap">
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
      <HStack display="flex" alignItems="center">
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
    </Box>
  );
};

export default Advantages;
