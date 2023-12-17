import { Flex, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import useBeersByTag from "../../hooks/useBeersByTag";
import Slider from "../Products/Slider";
import ProductSliderSkeleton from "../Skeletons/ProductPage/ProductSliderSkeleton";

const headings = ["NEW ARRIVALS", "Popular products"];

const BeerSlider = () => {
  const [activeHeading, setActiveHeading] = useState(0);

  // getting products from the server
  const { data: mainProducts, isLoading } = useBeersByTag("slided_main");
  const { data: popularProducts, isLoading: isLoadingPopular } =
    useBeersByTag("slided_popular");

  const handleHeadingClick = (index) => {
    setActiveHeading(index);
  };

  if (isLoading || isLoadingPopular) return <ProductSliderSkeleton />;

  return (
    <Flex marginTop="72px" direction="column" justify="center" align="center">
      <HStack fontWeight="700" fontSize="16 px" marginBottom="48px">
        {headings.map((heading, index) => (
          <Text
            key={index}
            cursor="pointer"
            onClick={() => handleHeadingClick(index)}
            color={activeHeading === index ? "black" : "middlegrey"}
            transition="all 0.2s ease-in"
            as="h3"
          >
            {heading}
          </Text>
        ))}
      </HStack>
      <ProductSlider
        activeHeading={activeHeading}
        mainProducts={mainProducts}
        popularProducts={popularProducts}
      />
    </Flex>
  );
};

const ProductSlider = ({ activeHeading, mainProducts, popularProducts }) => {
  return (
    <>
      {activeHeading === 0 ? (
        <Slider goods={mainProducts} />
      ) : (
        <Slider goods={popularProducts} />
      )}
    </>
  );
};

export default BeerSlider;
