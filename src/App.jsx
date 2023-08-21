import { Box } from "@chakra-ui/react";
import Advantages from "./components/Advantages";
import BeerSlider from "./components/BeerSlider";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSLider";
import Posters from "./components/Posters";
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
    </Box>
  );
}

export default App;
