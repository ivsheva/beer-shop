import { Box, useDisclosure } from "@chakra-ui/react";
import Advantages from "./Advantages";
import NavBar from "../NavBar";
import UserControl from "./UserControl";

const Header = () => {
  const loginDisclosure = useDisclosure();
  const wishDisclosure = useDisclosure();
  const cartDisclosure = useDisclosure();

  return (
    <Box>
      <Advantages
        loginDisclosure={loginDisclosure}
        wishDisclosure={wishDisclosure}
        cartDisclosure={cartDisclosure}
      />
      <UserControl
        loginDisclosure={loginDisclosure}
        wishDisclosure={wishDisclosure}
        cartDisclosure={cartDisclosure}
      />
      <NavBar />
    </Box>
  );
};

export default Header;
