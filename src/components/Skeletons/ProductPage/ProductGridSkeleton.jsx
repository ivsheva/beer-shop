import { Flex, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";
import BeerCardSkeleton from "./BeerCardSkeleton";

const ProductGridSkeleton = () => {
  const skeletons = [...Array(8).keys()];
  return (
    <Flex
      direction="column"
      gap="50px"
      margin="0 auto"
      width="100%"
      justify="center"
    >
      <Flex direction="column" gap="20px">
        <Skeleton width="20%" height="30px" />
        <SkeletonText skeletonHeight="3" noOfLines="10" />
      </Flex>
      <SimpleGrid
        columns={{ base: 1, sm: 2, xl: 3, "2xl": 4 }}
        justifyContent="center"
        align="center"
        columnGap="150px"
        rowGap="50px"
      >
        {skeletons.map((skeleton) => (
          <BeerCardSkeleton key={skeleton} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductGridSkeleton;
