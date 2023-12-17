import { Flex } from "@chakra-ui/react";
import productCards from "../../data/productCards";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
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
    </Flex>
  );
};

export default ProductCards;
