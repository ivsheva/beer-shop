import { Box, useDisclosure } from "@chakra-ui/react";
import Advantages from "./Advantages";
import NavBar from "../NavBar";
import UserControl from "./UserControl";

const Header = () => {
  const loginDisclosure = useDisclosure();
  const cartDisclosure = useDisclosure();

  return (
    <Box>
      <Advantages
        loginDisclosure={loginDisclosure}
        cartDisclosure={cartDisclosure}
      />
      <UserControl
        loginDisclosure={loginDisclosure}
        cartDisclosure={cartDisclosure}
      />
      <NavBar />
    </Box>
  );
};

export default Header;
