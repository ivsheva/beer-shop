import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import UserControl from "./UserControl";
import Advantages from "./Advantages";

const Header = () => {
  return (
    <Box>
      <Advantages />
      <UserControl />
      <NavBar />
    </Box>
  );
};

export default Header;
