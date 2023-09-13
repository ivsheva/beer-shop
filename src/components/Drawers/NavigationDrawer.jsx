import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DisclosureContext } from "../../contexts/disclosureContext";
import navItems from "../../data/navItems";

const NavigationDrawer = () => {
  const { navigationDisclosure } = useContext(DisclosureContext);

  return (
    <Drawer
      isOpen={navigationDisclosure.isOpen}
      placement="left"
      onClose={navigationDisclosure.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          color="grey"
          fontSize="14px"
          fontWeight="400"
          borderBottom="1px solid lightgrey"
          onClick={navigationDisclosure.onClose}
        >
          <Link to="/all-beers">Choose a category</Link>
        </DrawerHeader>

        <DrawerBody padding="0">
          {navItems.map((navItem) => (
            <Text
              key={navItem.id}
              fontSize="15px"
              padding="16px 24px"
              borderBottom="1px solid lightgrey"
              textTransform="capitalize"
            >
              <Link to={navItem.link} onClick={navigationDisclosure.onClose}>
                {navItem.title}
              </Link>
            </Text>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationDrawer;
