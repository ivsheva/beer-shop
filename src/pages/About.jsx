import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import AboutPoster from "../components/AboutPage/AboutPoster";
import ServicePages from "../components/AboutPage/ServicePages";
import AboutContent from "../components/AboutPage/AboutContent";

const About = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

  return (
    <Box>
      <AboutPoster />
      <ServicePages activePage={currentPage} />
      <AboutContent />
    </Box>
  );
};

export default About;
