import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ProductPage from "../components/ProductPage";
import allGoods from "../data/goods";

const Catalogue = () => {
  const brands = allGoods.map(({ id, brand }) => ({
    id,
    brand,
  }));
  const prices = allGoods.map((item) => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const uniqueBrands = brands.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.brand === item.brand)
  );
  const allBrands = [{ id: 0, brand: "All brands" }, ...uniqueBrands];

  const [filteredValues, setFilteredValues] = useState([min, max]);
  const [checkedBrands, setCheckedBrands] = useState({});

  return (
    <Box>
      <ProductPage
        prices={{ min, max }}
        filteredValues={filteredValues}
        setFilteredValues={setFilteredValues}
        allBrands={allBrands}
        checkedBrands={checkedBrands}
        setCheckedBrands={setCheckedBrands}
        allGoods={allGoods}
      />
    </Box>
  );
};

export default Catalogue;
