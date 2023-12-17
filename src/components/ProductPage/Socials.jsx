import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Socials = ({ size }) => {
  return (
    <Flex columnGap="16px" justify="center">
      <Flex columnGap="8px">
        <BsFacebook size={size} />
        <Text>Facebook</Text>
      </Flex>
      <Flex columnGap="8px">
        <AiOutlineWhatsApp size={size} />
        <Text>Whatsapp</Text>
      </Flex>
    </Flex>
  );
};

export default Socials;
