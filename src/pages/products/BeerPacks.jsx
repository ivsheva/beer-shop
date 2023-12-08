import { Box } from "@chakra-ui/react";
import Loading from "../../components/Other/Loading";
import ProductPage from "../../components/Products/ProductPage";
import useBeerByType from "../../hooks/useBeerByType";

const BeerPacks = () => {
  const { data: products, isLoading } = useBeerByType("pack");

  if (isLoading) return <Loading />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default BeerPacks;
