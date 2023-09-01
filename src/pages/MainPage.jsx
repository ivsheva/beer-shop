import { Box } from "@chakra-ui/react";
import BeerSlider from "../components/MainPage/BeerSlider";
import ImageSlider from "../components/MainPage/ImageSlider";
import LoyaltyProgram from "../components/MainPage/LoyaltyProgram";
import Posters from "../components/MainPage/Posters";
import Posts from "../components/MainPage/Posts";
import ProductCards from "../components/Products/ProductCards";
import Story from "../components/MainPage/Story";
import TrustMark from "../components/MainPage/TrustMark";

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
