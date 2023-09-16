import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { DisclosureContext } from "../../contexts/DisclosureContext";
import SearchBody from "../Modals/SearchBody";
import SearchHeader from "../Modals/SearchHeader";

const SearchDrawer = () => {
  const { searchDisclosure } = useContext(DisclosureContext);
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
