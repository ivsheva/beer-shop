import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Brands from "./Filtering/Brands";
import OverView from "./Filtering/OverView";
import Prices from "./Filtering/Prices";
import ProductGrid from "./ProductGrid";
import SubscriptionPoster from "./SubscriptionPoster";

const ProductPage = () => {
  const pathname = useLocation().pathname.substring(1);

  return (
    <>
      <SubscriptionPoster />
      <Box
        display="flex"
        width={{ base: "80%", lg: "90%", xl: "80%" }}
        margin="0 auto"
      >
        <Box display={{ base: "none ", lg: "flex" }} flexDirection="column">
          <OverView pathName={pathname} />
          <Brands />
          <Prices />
        </Box>
        <ProductGrid title="Craft beers" />
      </Box>
    </>
  );
};

export default ProductPage;
