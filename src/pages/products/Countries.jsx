import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import products from "../../data/products/countryProducts";
import useProductData from "../../hooks/useProductData";

const Countries = () => {
  const productData = useProductData(products);

  return (
    <Box>
      <ProductPage productData={productData} />
    </Box>
  );
};

export default Countries;
