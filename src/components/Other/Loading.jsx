import { Flex, Spinner } from "@chakra-ui/react";

export default function Loading() {
  // Implement card skeletons

  return (
    <Flex justify="center" alignItems="center">
      <Spinner />
    </Flex>
  );
}
