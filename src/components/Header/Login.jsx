/* eslint-disable react/prop-types */
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import LoginSkeleton from "../Skeletons/Login/LoginSkeleton";

const Login = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) return <LoginSkeleton />;

  return (
    <VStack spacing="0" cursor="pointer">
      {isAuthenticated ? (
        <AccountPopover />
      ) : (
        <Flex direction="column" alignItems="center">
          <BiUserCircle size="28" />
          <Text onClick={() => loginWithRedirect()}>Login</Text>
        </Flex>
      )}
    </VStack>
  );
};

export default Login;

const AccountPopover = () => {
  const { logout } = useAuth0();
  return (
    <Popover>
      <PopoverTrigger>
        <Flex direction="column" alignItems="center">
          <BiUserCircle size="28" />
          <Text>My profile</Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>My Account</PopoverHeader>
        <PopoverBody>
          <Button
            onClick={() => logout()}
            colorScheme="green"
            bgColor="darkgreen"
          >
            Leave account
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
