import { Box, Flex, Show } from "@chakra-ui/react";
import SubscriptionPoster from "../../Other/SubscriptionPoster";
import ProductFilteringSkeleton from "./ProductFilteringSkeleton";
import ProductGridSkeleton from "./ProductGridSkeleton";

const ProductPageSkeleton = () => {
  return (
    <Box>
      <SubscriptionPoster />
      <Flex width="70%" margin="0 auto" gap="50px" marginTop="50px">
        <Show above="lg">
          <ProductFilteringSkeleton />
        </Show>
        <ProductGridSkeleton />
      </Flex>
    </Box>
  );
};

export default ProductPageSkeleton;
