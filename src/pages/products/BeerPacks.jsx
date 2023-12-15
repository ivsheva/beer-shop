import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import ProductPageSkeleton from "../../components/Skeletons/ProductPage/ProductPageSkeleton";
import useBeersByType from "../../hooks/useBeersByType";

const BeerPacks = () => {
  const { data: products, isLoading } = useBeersByType("pack");

  if (isLoading) return <ProductPageSkeleton />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default BeerPacks;
