/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const DisclosureContext = createContext();

export const DisclosureProvider = ({ children }) => {
  const loginDisclosure = useDisclosure();
  const wishDisclosure = useDisclosure();
  const cartDisclosure = useDisclosure();

  return (
    <DisclosureContext.Provider
      value={{ loginDisclosure, wishDisclosure, cartDisclosure }}
    >
      {children}
    </DisclosureContext.Provider>
  );
};
