import { Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const LoginSkeleton = () => {
  return (
    <Flex direction="column" justify="center" align="center" gap="5px">
      <SkeletonCircle />
      <Skeleton width="40px" height="10px" />
    </Flex>
  );
};

export default LoginSkeleton;
