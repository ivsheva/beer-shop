import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Box height="100vh" width="100%">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
