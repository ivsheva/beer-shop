import { Box } from "@chakra-ui/react";
import Loading from "../../components/Other/Loading";
import ProductPage from "../../components/Products/ProductPage";
import useBeers from "../../hooks/useBeers";

const Catalogue = () => {
  const { data: products, isLoading } = useBeers();

  if (isLoading) return <Loading />;

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default Catalogue;
