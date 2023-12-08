import { Box } from "@chakra-ui/react";
import Loading from "../../components/Other/Loading";
import ProductPage from "../../components/Products/ProductPage";
import useBeerByType from "../../hooks/useBeerByType";

const Crowlers = () => {
  const { data: products, isLoading } = useBeerByType("crowler");

  if (isLoading) return <Loading />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default Crowlers;
