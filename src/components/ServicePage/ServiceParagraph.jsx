import { Box, Text } from "@chakra-ui/react";

const ServiceParagraph = ({ title, content }) => {
  return (
    <Box color="grey" marginTop="20px" maxWidth="1300px">
      <Text fontSize="18px" lineHeight="200%" fontWeight="700">
        {title}
      </Text>
      <Text lineHeight="200%" dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default ServiceParagraph;
