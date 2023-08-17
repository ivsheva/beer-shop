import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import UserControl from "./UserControl";

const Header = () => {
  return (
    <Box>
      <UserControl />
      <NavBar />
    </Box>
  );
};

export default Header;
