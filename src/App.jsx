import { Box } from "@chakra-ui/react";
import Advantages from "./components/Advantages";
import BeerSlider from "./components/BeerSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSLider";
import LoyaltyProgram from "./components/LoyaltyProgram";
import Posters from "./components/Posters";
import Posts from "./components/Posts";
import ProductCards from "./components/ProductCards";
import Story from "./components/Story";
import TrustMark from "./components/TrustMark";

function App() {
  return (
    <Box height="100vh" width="100%">
      <Advantages />
      <Header />
      <ImageSlider />
      <TrustMark />
      <Posters />
      <BeerSlider />
      <LoyaltyProgram />
      <ProductCards />
      <Story />
      <Posts />
      <Footer />
    </Box>
  );
}

export default App;
