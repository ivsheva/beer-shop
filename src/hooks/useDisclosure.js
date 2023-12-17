import { useContext } from "react";
import { DisclosureContext } from "../contexts/DisclosureContext";

function useDisclosure() {
  return useContext(DisclosureContext);
}

export default useDisclosure;
