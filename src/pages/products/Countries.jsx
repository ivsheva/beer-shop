import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import useBeersByType from "../../hooks/useBeersByType";
import ProductPageSkeleton from "../../components/Skeletons/ProductPage/ProductPageSkeleton";

const Countries = () => {
  const { data: products, isLoading } = useBeersByType("country");

  if (isLoading) return <ProductPageSkeleton />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default Countries;
