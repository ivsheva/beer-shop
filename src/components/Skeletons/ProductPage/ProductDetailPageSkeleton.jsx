import { Box, Skeleton, Stack, SkeletonText, Flex } from "@chakra-ui/react";

const ProductDetailPageSkeleton = () => {
  return (
    <Box
      display="flex"
      width={{ base: "80%", lg: "90%", xl: "70%" }}
      margin="0 auto"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems={{ base: "center", lg: "unset" }}
    >
      <ProductImageSkeleton />
      <ProductBodySkeleton />
    </Box>
  );
};

const ProductImageSkeleton = () => {
  return (
    <Skeleton
      width={{ base: "300px", md: "600px", lg: "500px" }}
      height="600px"
    />
  );
};

const ProductBodySkeleton = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={{ base: "center", lg: "unset" }}
      marginTop="50px"
      marginLeft={{ base: "unset", lg: "60px", xl: "150px", "2xl": "200px" }}
      flexWrap="wrap"
      rowGap="30px"
    >
      <ProductInfoSkeleton />
      <ProductControlSkeleton />
      <Skeleton width="300px" height="40px" margin="0 auto" />
      <ProductDescriptionSkeleton />
      <SkeletonText skeletonHeight="3" />
    </Box>
  );
};

const ProductInfoSkeleton = () => {
  return (
    <Stack>
      <Skeleton width="100px" height="20px" />
      <Skeleton width="350px" height="40px" marginY="8px" />
      <Skeleton width="70px" height="20px" />
      <Skeleton width="80px" height="20px" marginY="8px" />
    </Stack>
  );
};

const ProductControlSkeleton = () => {
  return (
    <Flex columnGap="8px">
      <Skeleton boxSize="55px" />
      <Skeleton width="300px" height="55px" />
      <Skeleton boxSize="55px" />
    </Flex>
  );
};

const ProductDescriptionSkeleton = () => {
  return (
    <Flex columnGap="8px" margin="0 auto">
      <Skeleton width="180px" height="50px" />
      <Skeleton width="180px" height="50px" />
    </Flex>
  );
};

export default ProductDetailPageSkeleton;
