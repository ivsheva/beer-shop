import { Box } from "@chakra-ui/react";
import ProductPage from "../components/ProductPage";
import { ProductsProvider } from "../contexts/ProductContext";

const Catalogue = () => {
  return (
    <Box>
      <ProductsProvider>
        <ProductPage />
      </ProductsProvider>
    </Box>
  );
};

export default Catalogue;
