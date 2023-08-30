import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

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
