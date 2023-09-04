/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Socials from "./Socials";

const Description = ({ description }) => {
  const [active, setActive] = useState(1);

  return (
    <Box
      display={{ base: "none", md: "flex" }}
      flexDirection="column"
      marginTop="20px"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Box display="flex" justifyContent="center">
        <Text
          padding="16px 64px"
          fontWeight={active === 0 ? 600 : 400}
          fontSize="18px"
          bgColor={active === 0 ? "white" : "darkerWhite"}
          onClick={() => setActive(0)}
        >
          Description
        </Text>
        <Text
          padding="16px 72px"
          fontWeight={active === 1 ? 600 : 400}
          fontSize="18px"
          bgColor={active === 1 ? "white" : "darkerWhite"}
          onClick={() => setActive(1)}
        >
          Share
        </Text>
      </Box>
      <Box marginTop="20px">
        {active === 0 ? (
          <Text
            color="grey"
            fontWeight="500"
            textAlign={{ base: "center", lg: "unset" }}
          >
            {description}
          </Text>
        ) : (
          <Socials size={24} />
        )}
      </Box>
    </Box>
  );
};

export default Description;
