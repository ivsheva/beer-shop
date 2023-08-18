import { Box } from "@chakra-ui/react";
import Advantages from "./components/Advantages";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSLider";
import TrustMark from "./components/TrustMark";
import Posters from "./components/Posters";

function App() {
  return (
    <Box height="100vh" width="100%">
      <Advantages />
      <Header />
      <ImageSlider />
      <TrustMark />
      <Posters />
    </Box>
  );
}

export default App;
