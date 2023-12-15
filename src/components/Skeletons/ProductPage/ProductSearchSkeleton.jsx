import { Flex, Skeleton } from "@chakra-ui/react";

const ProductSearchSkeleton = () => {
  const skeletons = [new Array(3).keys()];
  return (
    <Flex direction="column">
      {skeletons.map((skeleton) => (
        <SearchCardSkeleton key={skeleton} />
      ))}
    </Flex>
  );
};

const SearchCardSkeleton = () => {
  return (
    <Flex gap="32px" padding="24px">
      <Skeleton width="100px" height="140px" />
      <Flex direction="column" rowGap="16px">
        <Skeleton width="50px" height="10px" />
        <Skeleton
          width={{ base: "100px", sm: "200px", md: "300px" }}
          height="50px"
        />
        <Skeleton width="70px" height="20px" />
        <Skeleton width="100px" height="20px" />
      </Flex>
      <Flex direction="column"></Flex>
    </Flex>
  );
};

export default ProductSearchSkeleton;
