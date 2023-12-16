import { Box } from "@chakra-ui/react";
import ServiceParagraph from "./ServiceParagraph";

const ServiceParagraphs = ({ paragraphs }) => {
  return (
    <Box>
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
