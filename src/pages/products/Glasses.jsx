import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import products from "../../data/products/glassProducts";
import useProductData from "../../hooks/useProductData";

const Glasses = () => {
  const productData = useProductData(products);

  return (
    <Box>
      <ProductPage productData={productData} />
    </Box>
  );
};

export default Glasses;
