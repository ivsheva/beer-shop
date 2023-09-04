/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Socials = ({ size }) => {
  return (
    <Box display="flex" columnGap="16px" justifyContent="center">
      <Box display="flex" columnGap="8px">
        <BsFacebook size={size} />
        <Text>Facebook</Text>
      </Box>
      <Box display="flex" columnGap="8px">
        <AiOutlineWhatsApp size={size} />
        <Text>Whatsapp</Text>
      </Box>
    </Box>
  );
};

export default Socials;
