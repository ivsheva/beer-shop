import { Box, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { additionalProducts, mainProducts } from "../../data/products/products";
import Slider from "../Products/Slider";

const BeerSlider = () => {
  const [activeHeading, setActiveHeading] = useState(0);

  return (
    <Box
      marginTop="72px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <HStack fontWeight="700" fontSize="16 px" marginBottom="48px">
        <Text
          cursor="pointer"
          onClick={() => setActiveHeading(0)}
          color={activeHeading === 0 ? "black" : "middlegrey"}
          transition="all 0.2s ease-in"
          as="h3"
        >
          NEW ARRIVALS
        </Text>
        <Text
          cursor="pointer"
          onClick={() => setActiveHeading(1)}
          color={activeHeading === 1 ? "black" : "middlegrey"}
          transition="all 0.2s ease-in"
          as="h3"
        >
          Popular products
        </Text>
      </HStack>
      {activeHeading === 0 ? (
        <Slider goods={mainProducts} />
      ) : (
        <Slider goods={additionalProducts} />
      )}
    </Box>
  );
};

export default BeerSlider;
