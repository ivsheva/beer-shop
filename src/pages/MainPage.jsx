import { Box } from "@chakra-ui/react";
import BeerSlider from "../components/BeerSlider";
import ImageSlider from "../components/ImageSLider";
import LoyaltyProgram from "../components/LoyaltyProgram";
import Posters from "../components/Posters";
import Posts from "../components/Posts";
import ProductCards from "../components/ProductCards";
import Story from "../components/Story";
import TrustMark from "../components/TrustMark";

function MainPage() {
  return (
    <Box>
      <ImageSlider />
      <TrustMark />
      <Posters />
      <BeerSlider />
      <LoyaltyProgram />
      <ProductCards />
      <Story />
      <Posts />
    </Box>
  );
}

export default MainPage;
