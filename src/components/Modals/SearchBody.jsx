/* eslint-disable react/prop-types */
import { Box, Button, Text } from "@chakra-ui/react";
import useBeers from "../../hooks/useBeers";
import usePopularBeers from "../../hooks/usePopularBeers";
import DrawerCard from "../Drawers/DrawerCard";
import ProductSearchSkeleton from "../Skeletons/ProductPage/ProductSearchSkeleton";

const SearchBody = ({ searchText, setSearchText }) => {
  const { data: allProducts, isLoading } = useBeers();
  const { data: popularProducts, isLoadingPopular } = usePopularBeers();

  if (isLoading || isLoadingPopular || !popularProducts)
    return <ProductSearchSkeleton />;

  const filteredProducts = searchText
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase().trim())
      )
    : popularProducts;

  console.log(popularProducts);

  return (
    <Box>
      {filteredProducts.length === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="20px"
        >
          <Text textAlign="center" fontSize="28px">
            Oops! No matching products found
          </Text>
          <Button colorScheme="teal" onClick={() => setSearchText("")}>
            Clear filters
          </Button>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          rowGap={{ base: "50px", sm: "0" }}
        >
          {filteredProducts.map((product) => (
            <DrawerCard
              key={product.id}
              id={product.id}
              img={product.imageUrl}
              brand={product.brand}
              name={product.name}
              price={product.price}
              isSearchItem
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBody;
