import { Flex } from "@chakra-ui/react";
import BeerCardSkeleton from "./BeerCardSkeleton";

const ProductSliderSkeleton = () => {
  const skeletonsFits = Math.round(window.innerWidth / 320); // 320px is width of one card
  const skeletonAmount = skeletonsFits > 4 ? 4 : skeletonsFits;
  const skeletons = [...Array(skeletonAmount).keys()];
  return (
    <Flex
      justify="center"
      align="center"
      columnGap="50px"
      width="80%"
      margin="0 auto"
      marginTop="72px"
    >
      {skeletons.map((skeleton) => (
        <BeerCardSkeleton key={skeleton} />
      ))}
    </Flex>
  );
};

export default ProductSliderSkeleton;
