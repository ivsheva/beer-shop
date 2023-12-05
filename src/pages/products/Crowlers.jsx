import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import products from "../../data/products/crowlerProducts";
import useProductData from "../../hooks/useProductData";

const Crowlers = () => {
  const productData = useProductData(products);

  return (
    <Box>
      <ProductPage productData={productData} />
    </Box>
  );
};

export default Crowlers;
