/* eslint-disable react/prop-types */
import { VStack, Text } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";

const Login = ({ onOpen }) => {
  return (
    <VStack spacing="0" onClick={onOpen} cursor="pointer">
      <BiUserCircle size="28" />
      <Text>Login</Text>
    </VStack>
  );
};

export default Login;
