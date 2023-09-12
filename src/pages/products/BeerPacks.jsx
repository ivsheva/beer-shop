import { Box } from "@chakra-ui/react";
import { useState } from "react";
import products from "../../data/products/packProducts";
import ProductPage from "../../components/Products/ProductPage";

const BeerPacks = () => {
  const brands = products.map(({ id, brand }) => ({
    id,
    brand,
  }));
  const prices = products.map((item) => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const title = "Beer Packs";

  const uniqueBrands = brands.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.brand === item.brand)
  );

  const [filteredValues, setFilteredValues] = useState([min, max]);
  const [checkedBrands, setCheckedBrands] = useState({});

  const data = {
    min,
    max,
    filteredValues,
    setFilteredValues,
    uniqueBrands,
    checkedBrands,
    setCheckedBrands,
    products,
    title,
  };

  return (
    <Box>
      <ProductPage data={data} />
    </Box>
  );
};

export default BeerPacks;
