import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceContent from "./ServiceContent";
import ServicePages from "./ServicePages";
import ServicePoster from "./ServicePoster";

const ServicePage = ({ data }) => {
  const { posterTitle, img, title, paragraphs } = data;
  const activePage = useLocation().pathname.slice(9);

  // change page title
  useTitle(title);

  return (
    <Box>
      <ServicePoster title={posterTitle} img={img} />
      <ServicePages activePage={activePage} />
      <ServiceContent title={title} paragraphs={paragraphs} />
    </Box>
  );
};

export default ServicePage;
