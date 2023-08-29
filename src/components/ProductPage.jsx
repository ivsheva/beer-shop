/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Brands from "./Filtering/Brands";
import OverView from "./Filtering/OverView";
import Prices from "./Filtering/Prices";
import ProductGrid from "./ProductGrid";
import SubscriptionPoster from "./SubscriptionPoster";

const ProductPage = ({ data }) => {
  const {
    min,
    max,
    filteredValues,
    setFilteredValues,
    uniqueBrands,
    checkedBrands,
    setCheckedBrands,
    products,
    title,
  } = data;

  const pathname = useLocation().pathname.substring(1);

  const brands = { uniqueBrands, checkedBrands, setCheckedBrands };
  const prices = { min, max, filteredValues, setFilteredValues };

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
          <Brands brands={brands} />
          <Prices prices={prices} />
        </Box>
        <ProductGrid
          products={products}
          checkedBrands={checkedBrands}
          filteredValues={filteredValues}
          title={title}
          brands={brands}
          prices={prices}
        />
      </Box>
    </>
  );
};

export default ProductPage;
