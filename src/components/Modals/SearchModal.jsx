import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DisclosureContext } from "../../contexts/disclosureContext";
import SearchHeader from "./SearchHeader";
import DrawerCard from "../Drawers/DrawerCard";
import popularProducts from "../../data/products/popularProducts";

const SearchModal = () => {
  const { searchModalDisclosure } = useContext(DisclosureContext);

  return (
    <Modal
      isOpen={searchModalDisclosure.isOpen}
      onClose={searchModalDisclosure.onClose}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader padding="0">
          <SearchHeader />
        </ModalHeader>
        <ModalBody>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
