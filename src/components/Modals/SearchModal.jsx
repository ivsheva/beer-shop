import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { DisclosureContext } from "../../contexts/disclosureContext";
import SearchBody from "./SearchBody";
import SearchHeader from "./SearchHeader";

const SearchModal = () => {
  const { searchModalDisclosure } = useContext(DisclosureContext);
  const [searchText, setSearchText] = useState("");

  return (
    <Modal
      isOpen={searchModalDisclosure.isOpen}
      onClose={searchModalDisclosure.onClose}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader padding="0">
          <SearchHeader searchText={searchText} setSearchText={setSearchText} />
        </ModalHeader>
        <ModalBody>
          <SearchBody searchText={searchText} setSearchText={setSearchText} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
