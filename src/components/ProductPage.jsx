import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Brands from "./Filtering/Brands";
import Prices from "./Filtering/Prices";
import SubscriptionPoster from "./SubscriptionPoster";

const ProductPage = ({
  prices,
  filteredValues,
  setFilteredValues,
  allBrands,
  checkedBrands,
  setCheckedBrands,
}) => {
  const min = prices.min;
  const max = prices.max;

  return (
    <>
      <SubscriptionPoster />
      <Box width="80%" margin="0 auto">
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
};

export default ProductPage;
