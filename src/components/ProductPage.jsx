import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Brands from "./Filtering/Brands";
import Prices from "./Filtering/Prices";
import SubscriptionPoster from "./SubscriptionPoster";
import ProductGrid from "./ProductGrid";
import { useLocation } from "react-router-dom";
import OverView from "./Filtering/OverView";

const ProductPage = ({
  prices,
  filteredValues,
  setFilteredValues,
  allBrands,
  checkedBrands,
  setCheckedBrands,
  allGoods,
}) => {
  const min = prices.min;
  const max = prices.max;

  const pathname = useLocation().pathname.substring(1);

  return (
    <>
      <SubscriptionPoster />
      <Box
        display="flex"
        width={{ base: "80%", lg: "90%", xl: "80%" }}
        margin="0 auto"
      >
        <Box display={{ base: "none ", lg: "flex" }} flexDirection="column">
          <OverView pathName={pathname} />
          <Brands
            allBrands={allBrands}
            checkedBrands={checkedBrands}
            setCheckedBrands={setCheckedBrands}
          />
          <Prices
            prices={{ min, max }}
            filteredValues={filteredValues}
            setFilteredValues={setFilteredValues}
            checkedBrands={checkedBrands}
            setCheckedBrands={setCheckedBrands}
          />
        </Box>
        <ProductGrid title="Craft beers" list={allGoods} />
      </Box>
    </>
  );
};

ProductPage.propTypes = {
  prices: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  filteredValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  setFilteredValues: PropTypes.func.isRequired,
  allBrands: PropTypes.array.isRequired,
  checkedBrands: PropTypes.object.isRequired,
  setCheckedBrands: PropTypes.func.isRequired,
  allGoods: PropTypes.array.isRequired,
};

export default ProductPage;
