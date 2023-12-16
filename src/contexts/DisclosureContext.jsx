import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const DisclosureContext = createContext();

export const DisclosureProvider = ({ children }) => {
  const loginDisclosure = useDisclosure();
  const wishDisclosure = useDisclosure();
  const cartDisclosure = useDisclosure();
  const navigationDisclosure = useDisclosure();
  const searchDisclosure = useDisclosure();
  const searchModalDisclosure = useDisclosure();

  return (
    <DisclosureContext.Provider
      value={{
        loginDisclosure,
        wishDisclosure,
        cartDisclosure,
        navigationDisclosure,
        searchDisclosure,
        searchModalDisclosure,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
};
