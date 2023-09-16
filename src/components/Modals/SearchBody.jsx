/* eslint-disable react/prop-types */
import { Box, Button, Text } from "@chakra-ui/react";
import popularProducts from "../../data/products/popularProducts";
import allProducts from "../../data/products/allProducts";
import DrawerCard from "../Drawers/DrawerCard";

const SearchBody = ({ searchText, setSearchText }) => {
  const filteredProducts = searchText
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase().trim())
      )
    : popularProducts;

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
              img={product.img}
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
