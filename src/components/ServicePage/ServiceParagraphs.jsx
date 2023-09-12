/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import ServiceParagraph from "./ServiceParagraph";

const ServiceParagraphs = ({ paragraphs }) => {
  return (
    <Box margin="0 auto">
      {paragraphs.map((paragraph) => (
        <ServiceParagraph
          key={paragraph.id}
          title={paragraph.title}
          content={paragraph.content}
        />
      ))}
    </Box>
  );
};

export default ServiceParagraphs;
