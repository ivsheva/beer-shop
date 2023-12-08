import { Box } from "@chakra-ui/react";
import Loading from "../../components/Other/Loading";
import ProductPage from "../../components/Products/ProductPage";
import useBeerByType from "../../hooks/useBeerByType";

const Glasses = () => {
  const { data: products, isLoading } = useBeerByType("glass");

  if (isLoading) return <Loading />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default Glasses;
