import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import ProductPageSkeleton from "../../components/Skeletons/ProductPage/ProductPageSkeleton";
import useBeers from "../../hooks/useBeers";

const Catalogue = () => {
  const { data: products, isLoading } = useBeers();

  if (isLoading) return <ProductPageSkeleton />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default Catalogue;
