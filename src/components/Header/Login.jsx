/* eslint-disable react/prop-types */
import { VStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";
import { DisclosureContext } from "../../contexts/DisclosureContext";

const Login = () => {
  const { loginDisclosure } = useContext(DisclosureContext);

  return (
    <VStack spacing="0" onClick={loginDisclosure.onOpen} cursor="pointer">
      <BiUserCircle size="28" />
      <Text>Login</Text>
    </VStack>
  );
};

export default Login;
