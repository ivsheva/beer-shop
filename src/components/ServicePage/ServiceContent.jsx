/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import ServiceParagraphs from "./ServiceParagraphs";

const ServiceContent = ({ title, paragraphs }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ base: "60%", lg: "70%", xl: "60%" }}
      margin="0 auto"
      marginTop="20px"
    >
      <Text
        fontFamily="Questrial, sans-serif"
        fontSize="28px"
        lineHeight="140%"
      >
        {title}
      </Text>
      <ServiceParagraphs paragraphs={paragraphs} />
    </Box>
  );
};

export default ServiceContent;
