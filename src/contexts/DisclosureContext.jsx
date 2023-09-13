/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const DisclosureContext = createContext();

export const DisclosureProvider = ({ children }) => {
  const loginDisclosure = useDisclosure();
  const wishDisclosure = useDisclosure();
  const cartDisclosure = useDisclosure();
  const navigationDisclosure = useDisclosure();

  return (
    <DisclosureContext.Provider
      value={{
        loginDisclosure,
        wishDisclosure,
        cartDisclosure,
        navigationDisclosure,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
};
