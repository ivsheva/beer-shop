import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import allProducts from "../../data/products/allProducts";
import useProductData from "../../hooks/useProductData";

const Catalogue = () => {
  const productData = useProductData(allProducts);

  return (
    <Box>
      <ProductPage productData={productData} />
    </Box>
  );
};

export default Catalogue;
