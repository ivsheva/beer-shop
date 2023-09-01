import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Advantages from "./Advantages";
import UserControl from "./UserControl";

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
