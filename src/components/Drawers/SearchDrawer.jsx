import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DisclosureContext } from "../../contexts/disclosureContext";
import SearchHeader from "../Modals/SearchHeader";
import popularProducts from "../../data/products/popularProducts";
import DrawerCard from "./DrawerCard";

const SearchDrawer = () => {
  const { searchDisclosure } = useContext(DisclosureContext);

  return (
    <Drawer
      size="full"
      isOpen={searchDisclosure.isOpen}
      onClose={searchDisclosure.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <SearchHeader />
        </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDirection="column"
          rowGap={{ base: "50px", sm: "0" }}
        >
          {popularProducts.map((product) => (
            <DrawerCard
              key={product.id}
              id={product.id}
              img={product.img}
              brand={product.brand}
              name={product.name}
              price={product.price}
              isSearchItem
            />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
