import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navItems from "../../data/navItems";
import useDisclosure from "../../hooks/useDisclosure";

const NavigationDrawer = () => {
  const { navigationDisclosure } = useDisclosure();

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
