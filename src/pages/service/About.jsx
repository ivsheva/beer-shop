import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ServicePoster from "../../components/ServicePage/ServicePoster";
import ServicePages from "../../components/ServicePage/ServicePages";
import AboutContent from "../../components/AboutPage/AboutContent";
import aboutBg from "../../img/img/about-bg.jpg";
import useTitle from "../../hooks/useTitle";

const About = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(9);

  // change page title
  useTitle("About us");

  return (
    <Box>
      <ServicePoster title="About beerdome" img={aboutBg} />
      <ServicePages activePage={currentPage} />
      <AboutContent />
    </Box>
  );
};

export default About;
