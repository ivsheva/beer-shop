import { Box } from "@chakra-ui/react";
import ProductPage from "../../components/Products/ProductPage";
import useBeersByType from "../../hooks/useBeersByType";
import ProductPageSkeleton from "../../components/Skeletons/ProductPage/ProductPageSkeleton";
import ErrorPage from "../ErrorPage";

const Style = () => {
  const { data: products, isLoading, isError, error } = useBeersByType("style");

  if (isLoading) return <ProductPageSkeleton />;

  if (isError)
    return (
      <ErrorPage
        errorContent={error.message}
        errorHeading="Oops! It looks like our server is unavaible. Please, come back later."
      />
    );

  return <Box>{products && <ProductPage products={products} />}</Box>;
};

export default Style;
