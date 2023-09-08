import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import AboutPoster from "../components/AboutPage/AboutPoster";
import ServicePages from "../components/AboutPage/ServicePages";

const About = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

  return (
    <Box>
      <AboutPoster />
      <ServicePages activePage={currentPage} />
    </Box>
  );
};

export default About;
