import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DisclosureContext } from "../../contexts/DisclosureContext";

const AuthDrawer = () => {
  const { loginDisclosure } = useContext(DisclosureContext);

  return (
    <Drawer
      size="md"
      isOpen={loginDisclosure.isOpen}
      placement="right"
      onClose={loginDisclosure.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontFamily="Questrial, sans-serif" fontSize="36px">
          <Text fontSize="inherit" display="inline">
            Login
          </Text>
          <Text fontSize="14px">(it does not work for now)</Text>
        </DrawerHeader>

        <DrawerBody>
          <Text
            color="darkgrey"
            fontWeight="700"
            fontSize="20px"
            marginBottom="10px"
          >
            Email address
          </Text>
          <Input
            placeholder="Email address"
            borderColor="lightgrey"
            padding="28px 16px"
            fontSize="18px"
            fontWeight="400"
            sx={{ "::placeholder": { color: "grey" } }}
            type="email"
          />

          <Text
            color="darkgrey"
            fontWeight="700"
            fontSize="20px"
            marginTop="24px"
            marginBottom="10px"
          >
            Password
          </Text>
          <Input
            placeholder="Password"
            borderColor="lightgrey"
            padding="28px 16px"
            fontSize="18px"
            fontWeight="400"
            sx={{ "::placeholder": { color: "grey" } }}
            type="password"
          />
          <Link color="green" textDecoration="underline">
            Forgot your password?
          </Link>
          <Text color="grey" fontSize="18px" marginY="24px">
            All your orders and returns in one place The ordering process is
            even faster Your shopping cart stored, always and everywhere
          </Text>

          <Divider borderColor="lightgrey" />
          <Button
            colorScheme="green"
            background="darkgreen"
            width="100%"
            padding="28px 32px"
            borderRadius="50px"
            marginTop="28px"
          >
            CREATE AN ACCOUNT
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AuthDrawer;
