import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ProductPage from "../components/Products/ProductPage";
import products from "../data/saleProducts";

const Sales = () => {
  const brands = products.map(({ id, brand }) => ({
    id,
    brand,
  }));
  const prices = products.map((item) => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const title = "Help to clean up our warehouse!";

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

export default Sales;