/* eslint-disable react/prop-types */
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner, Text, VStack } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) return <Spinner />;

  return (
    <VStack spacing="0" cursor="pointer">
      <BiUserCircle size="28" />
      {isAuthenticated ? (
        <Link to="/dashboard">My profile</Link>
      ) : (
        <Text onClick={() => loginWithRedirect()}>Login</Text>
      )}
    </VStack>
  );
};

export default Login;
