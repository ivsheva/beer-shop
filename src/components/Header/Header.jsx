import { Box, useDisclosure } from "@chakra-ui/react";
import Advantages from "./Advantages";
import NavBar from "../NavBar";
import UserControl from "./UserControl";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Advantages isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <UserControl isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <NavBar />
    </Box>
  );
};

export default Header;
