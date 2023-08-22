import { Box } from "@chakra-ui/react";
import Advantages from "./components/Advantages";
import BeerSlider from "./components/BeerSlider";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSLider";
import Posters from "./components/Posters";
import TrustMark from "./components/TrustMark";
import LoyaltyProgram from "./components/LoyaltyProgram";
import ProductCards from "./components/ProductCards";

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
    </Box>
  );
}

export default App;
