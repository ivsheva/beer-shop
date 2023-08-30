import { Box } from "@chakra-ui/react";
import { useState } from "react";
import products from "../data/voucherProducts";
import ProductPage from "../components/ProductPage";

const Vouchers = () => {
  const brands = products.map(({ id, brand }) => ({
    id,
    brand,
  }));
  const prices = products.map((item) => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const title = "Vouchers";
  const isVoucher = true;

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
    isVoucher,
  };

  return (
    <Box>
      <ProductPage data={data} />
    </Box>
  );
};

export default Vouchers;
