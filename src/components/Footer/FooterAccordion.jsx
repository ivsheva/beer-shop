import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import FooterLink from "./FooterLink";

const FooterAccordion = ({ title, email, list }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        padding="16px"
        borderBottom="1px solid rgba(0, 0, 0, 0.1)"
        onClick={handleClick}
      >
        <Text>{title}</Text>
        <PiCaretDownBold />
      </Box>
      {show && (
        <Box display="flex" flexDirection="column" margin="24px 0px 32px 24px">
          {list.map((footerItem) => (
            <FooterLink key={footerItem.id} footerItem={footerItem} />
          ))}
          {email && (
            <Box
              display="flex"
              flexDirection="column"
              marginTop="20px"
              fontSize="14px"
            >
              <Text>E-mail: {email}</Text>
              <Text>KVK-nummer: 68251262</Text>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default FooterAccordion;
