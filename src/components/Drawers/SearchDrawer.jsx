import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import useDisclosure from "../../hooks/useDisclosure";
import SearchBody from "../Modals/SearchBody";
import SearchHeader from "../Modals/SearchHeader";

const SearchDrawer = () => {
  const { searchDisclosure } = useDisclosure();
  const [searchText, setSearchText] = useState("");

  return (
    <Drawer
      size="full"
      isOpen={searchDisclosure.isOpen}
      onClose={searchDisclosure.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <SearchHeader searchText={searchText} setSearchText={setSearchText} />
        </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDirection="column"
          rowGap={{ base: "50px", sm: "0" }}
        >
          <SearchBody searchText={searchText} setSearchText={setSearchText} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
