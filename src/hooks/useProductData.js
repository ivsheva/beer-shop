import { useState } from "react";

function useProductData(products) {
  const brands = products.map(({ id, brand }) => ({
    id,
    brand,
  }));
  const prices = products.map((item) => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const productGenres = {
    style: "Style",
    country: "Country",
    pack: "Packs",
    glass: "Glasses",
    crowler: "Crowlers",
    voucher: "Vouchers",
    sale: "Sales",
  };

  const title = products.some((beer) => beer.type === "main")
    ? "Craft beers"
    : productGenres[products[0].type];

  const uniqueBrands = brands.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.brand === item.brand)
  );

  const [filteredValues, setFilteredValues] = useState([min, max]);
  const [checkedBrands, setCheckedBrands] = useState({});

  const brandFilterData = { uniqueBrands, checkedBrands, setCheckedBrands };
  const priceFilterData = { min, max, filteredValues, setFilteredValues };

  const isVoucher = products.every((product) =>
    product.name.includes("Voucher")
  );

  return {
    filteredValues,
    checkedBrands,
    products,
    title,
    brandFilterData,
    priceFilterData,
    isVoucher,
  };
}

export default useProductData;
