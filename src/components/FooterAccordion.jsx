import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

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
            <Text
              fontSize="14px"
              fontWeight={footerItem.highlighted ? "600" : "400"}
              lineHeight="200%"
              key={footerItem.key}
            >
              {footerItem.description}
            </Text>
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

FooterAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default FooterAccordion;
