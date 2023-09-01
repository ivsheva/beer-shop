import { Box } from "@chakra-ui/react";
import productCards from "../../data/productCards";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="space-between"
      columnGap="20px"
      rowGap="50px"
      width="80%"
      margin="0 auto"
      marginTop="64px"
      alignItems="center"
    >
      {productCards.map((productCard) => (
        <ProductCard
          key={productCard.id}
          img={productCard.img}
          genre={productCard.genre}
          title={productCard.title}
          link={productCard.link}
        />
      ))}
    </Box>
  );
};

export default ProductCards;
