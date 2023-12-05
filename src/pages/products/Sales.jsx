import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import products from "../../data/products/saleProducts";
import useProductData from "../../hooks/useProductData";

const Sales = () => {
  const productData = useProductData(products);

  return (
    <Box>
      <ProductPage productData={productData} />
    </Box>
  );
};

export default Sales;
