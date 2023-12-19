import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Brands from "./../Filtering/Brands";
import OverView from "./../Filtering/OverView";
import Prices from "./../Filtering/Prices";
import ProductGrid from "./ProductGrid";
import SubscriptionPoster from "../Other/SubscriptionPoster";
import useProductData from "../../hooks/useProductData";
import useTitle from "../../hooks/useTitle";

const ProductPage = ({ products }) => {
  // Get a pathname to create a redirect component
  const pathname = useLocation().pathname.substring(1);

  const productData = useProductData(products);

  // change page title
  useTitle(productData.title);

  return (
    <>
      <SubscriptionPoster />
      <ProductPageBody pathname={pathname} productData={productData} />
    </>
  );
};

const ProductPageFiltering = ({ pathname, brands, prices }) => {
  return (
    <Box display={{ base: "none ", lg: "flex" }} flexDirection="column">
      <OverView pathName={pathname} />
      <Brands brands={brands} />
      <Prices prices={prices} />
    </Box>
  );
};

const ProductPageBody = ({ pathname, productData }) => {
  const {
    filteredValues,
    checkedBrands,
    products,
    title,
    isVoucher,
    brandFilterData,
    priceFilterData,
  } = productData;

  return (
    <Flex width={{ base: "80%", lg: "90%", xl: "80%" }} margin="0 auto">
      <ProductPageFiltering
        pathname={pathname}
        brands={brandFilterData}
        prices={priceFilterData}
      />
      <ProductGrid
        products={products}
        checkedBrands={checkedBrands}
        filteredValues={filteredValues}
        title={title}
        brands={brandFilterData}
        prices={priceFilterData}
        isVoucher={isVoucher}
      />
    </Flex>
  );
};

export default ProductPage;
