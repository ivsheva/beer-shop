/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import ServicePoster from "./ServicePoster";
import ServicePages from "./ServicePages";
import ServiceContent from "./ServiceContent";
import { useLocation } from "react-router-dom";

const ServicePage = ({ data }) => {
  const { posterTitle, img, title, paragraphs } = data;
  const activePage = useLocation().pathname.slice(9);

  return (
    <Box>
      <ServicePoster title={posterTitle} img={img} />
      <ServicePages activePage={activePage} />
      <ServiceContent title={title} paragraphs={paragraphs} />
    </Box>
  );
};

export default ServicePage;
