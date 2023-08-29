/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import Brands from "./Brands";
import Prices from "./Prices";

const FilteringDrawer = ({ isOpen, onClose, brands, prices }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontWeight="400" borderBottom="1px solid lightgrey">
          Filtered by
        </DrawerHeader>

        <DrawerBody>
          <Brands brands={brands} />
          <Prices prices={prices} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

FilteringDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FilteringDrawer;
