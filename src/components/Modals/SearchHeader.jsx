import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DisclosureContext } from "../../contexts/disclosureContext";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchHeader = () => {
  const { searchModalDisclosure, searchDisclosure } =
    useContext(DisclosureContext);

  const handleClose = () => {
    window.innerWidth >= 768
      ? searchModalDisclosure.onClose()
      : searchDisclosure.onClose();
  };

  return (
    <InputGroup>
      <InputLeftAddon
        height="inherit"
        bgColor="transparent"
        border="none"
        borderBottom="1px solid lightgrey"
        borderRadius="0"
        opacity="0.7"
      >
        <HiMagnifyingGlass size="32" />
      </InputLeftAddon>
      <Input
        width="100%"
        border="none"
        boxShadow="none"
        borderBottom="1px solid lightgrey"
        placeholder="Hi, what are you looking for?"
        borderRadius="0"
        paddingY="32px"
        sx={{ "::placeholder": { color: "inputgrey", opacity: "0.7" } }}
        _hover={{
          boxShadow: "none",
        }}
        _focus={{
          borderColor: "lightgrey",
          boxShadow: "none",
        }}
      />
      <InputRightAddon
        height="inherit"
        bgColor="transparent"
        border="transparent"
        borderBottom="1px solid lightgrey"
        borderRadius="0"
        opacity="0.7"
      >
        <Button
          height="50%"
          borderRadius="100px"
          bgColor="#f3f4f6"
          _hover={{
            bgColor: "#f3f4f6",
          }}
          color="black"
          fontSize="12px"
          onClick={handleClose}
        >
          Close
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchHeader;
