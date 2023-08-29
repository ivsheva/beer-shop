/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import allGoods from "../data/goods";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
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

  const [filteredValues, setFilteredValues] = useState([min, max]);
  const [checkedBrands, setCheckedBrands] = useState({});

  return (
    <ProductsContext.Provider
      value={{
        min,
        max,
        filteredValues,
        setFilteredValues,
        uniqueBrands,
        checkedBrands,
        setCheckedBrands,
        allGoods,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
