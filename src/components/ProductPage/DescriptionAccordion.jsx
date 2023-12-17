import { Box, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import Socials from "./Socials";

const DescriptionAccordion = ({ title, content = null }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Flex direction="column">
      <Flex
        paddingY="16px"
        justify="space-between"
        borderBottom={!isActive ? "1px solid rgba(0, 0, 0, 0.1)" : "none"}
        onClick={() => setIsActive((prevActive) => !prevActive)}
      >
        <Text>{title}</Text>
        <PiCaretDownBold />
      </Flex>
      {isActive && (
        <Box
          borderBottom={isActive ? "1px solid rgba(0, 0, 0, 0.1)" : "none"}
          paddingY="18px"
        >
          {content ? (
            <Text
              color="grey"
              fontWeight="500"
              fontSize="14px"
              textAlign="center"
            >
              {content}
            </Text>
          ) : (
            <Socials size={18} />
          )}
        </Box>
      )}
    </Flex>
  );
};

export default DescriptionAccordion;
