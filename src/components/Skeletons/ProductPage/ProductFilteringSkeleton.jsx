import { Flex, Skeleton } from "@chakra-ui/react";

const ProductFilteringSkeleton = () => {
  return (
    <Flex direction="column" gap="24px">
      <Skeleton width="100px" height="20px" />
      <Flex direction="column" rowGap="8px">
        <Skeleton width="70px" height="20px" />
        <Skeleton width="200px" height="300px" />
      </Flex>
      <Flex direction="column" rowGap="8px">
        <Skeleton width="70px" height="20px" />
        <Skeleton width="200px" height="60px" />
      </Flex>
    </Flex>
  );
};

export default ProductFilteringSkeleton;
