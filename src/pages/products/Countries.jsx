import { Box } from "@chakra-ui/react";
import Loading from "../../components/Other/Loading";
import ProductPage from "../../components/Products/ProductPage";
import useBeerByType from "../../hooks/useBeerByType";

const Countries = () => {
  const { data: products, isLoading } = useBeerByType("country");

  if (isLoading) return <Loading />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default Countries;
