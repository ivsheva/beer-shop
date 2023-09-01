import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../Other/ScrollToTop";

const Layout = () => {
  return (
    <Box height="100vh" width="100%">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
