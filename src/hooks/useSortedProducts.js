import { useState } from "react";

function useSortedProducts({ products, filteredValues, checkedBrands }) {
  const [sortBy, setSortBy] = useState();

  const min = filteredValues[0];
  const max = filteredValues[1];

  const hasCheckedBrands = Object.values(checkedBrands).some(
    (value) => value === true
  );

  const filteredProducts = products.filter((product) => {
    const brandCheck = !hasCheckedBrands || checkedBrands[product.brand];
    const priceCheck = product.price >= min && product.price <= max;
    return brandCheck && priceCheck;
  });

  const sortOptions = {
    abc: (a, b) => a.name.localeCompare(b.name), // Сортировка по имени
    lower: (a, b) => a.price - b.price, // Сортировка по возрастанию цены
    higher: (a, b) => b.price - a.price, // Сортировка по убыванию цены
  };

  const sortedProducts = [...filteredProducts];

  if (sortOptions[sortBy]) {
    sortedProducts.sort(sortOptions[sortBy]);
  }

  return { sortedProducts, sortBy, setSortBy };
}

export default useSortedProducts;
