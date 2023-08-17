import { Box } from "@chakra-ui/react";
import Advantages from "./components/Advantages";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSLider";

function App() {
  return (
    <Box height="100vh" width="100%">
      <Advantages />
      <Header />
      <ImageSlider />
    </Box>
  );
}

export default App;
